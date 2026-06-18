import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/*  Wobrexx "Systems Lattice" — reusable cursor-reactive 3D node-network.      */
/*  Visualises "We Design, Build & Automate Your Systems": instanced nodes +   */
/*  live connections, an orange energy pulse, and full cursor reactivity       */
/*  (nodes near the pointer light up and repel; connections flex; the field    */
/*  parallaxes with depth). DOM-first: this canvas is decorative only.         */
/* -------------------------------------------------------------------------- */

// Brand colors (from index.css tokens)
const NAVY = new THREE.Color("#0b3a66"); // dim node state
const ORANGE = new THREE.Color("#ff7a1a"); // energy / pulse / cursor state

export type LatticeConfig = {
  count: number; // desktop node count
  mobileCount: number;
  connectDist: number; // neighbor threshold for a connection
  maxLines: number;
  cursorRadius: number; // world-units of pointer influence
  cursorRepel: number; // how hard nodes push from the pointer
  lineOpacity: number; // max connection opacity
  pulseAmount: number; // base energy-pulse intensity (0..1)
  idleSpin: number; // idle rotation, rad/sec
  parallaxRot: number; // cursor tilt amount
  parallaxPos: number; // positional parallax amount
  bloom: boolean;
  bloomIntensity: number;
  cameraZ: number;
};

const HERO_CONFIG: LatticeConfig = {
  count: 160,
  mobileCount: 95,
  connectDist: 3.0,
  maxLines: 550,
  cursorRadius: 4.0,
  cursorRepel: 0.85,
  lineOpacity: 0.14,
  pulseAmount: 0.4,
  idleSpin: 0.035,
  parallaxRot: 0.32,
  parallaxPos: 0.8,
  bloom: true,
  bloomIntensity: 0.5,
  cameraZ: 13,
};

// How quickly nodes glide toward their target position each frame (lower =
// smoother / more floaty). This is what makes the motion feel fluid, not snappy.
const FOLLOW = 0.09;

type LatticeData = {
  targets: Float32Array;
  scatter: Float32Array;
  lineIdx: Uint16Array;
  linePositions: Float32Array;
  nLines: number;
  count: number;
};

function buildLattice(
  count: number,
  connectDist: number,
  maxLines: number
): LatticeData {
  const targets = new Float32Array(count * 3);
  const scatter = new Float32Array(count * 3);
  const pts: THREE.Vector3[] = [];

  for (let i = 0; i < count; i++) {
    const v = new THREE.Vector3(
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 9,
      (Math.random() - 0.5) * 7
    );
    pts.push(v);
    targets[i * 3] = v.x;
    targets[i * 3 + 1] = v.y;
    targets[i * 3 + 2] = v.z;

    const dir = v.clone().normalize();
    const s = v.clone().add(dir.multiplyScalar(14 + Math.random() * 10));
    scatter[i * 3] = s.x;
    scatter[i * 3 + 1] = s.y;
    scatter[i * 3 + 2] = s.z;
  }

  const idx: number[] = [];
  for (let i = 0; i < count && idx.length / 2 < maxLines; i++) {
    for (let j = i + 1; j < count && idx.length / 2 < maxLines; j++) {
      if (pts[i].distanceTo(pts[j]) < connectDist) idx.push(i, j);
    }
  }
  const nLines = idx.length / 2;

  return {
    targets,
    scatter,
    lineIdx: Uint16Array.from(idx),
    linePositions: new Float32Array(nLines * 6),
    nLines,
    count,
  };
}

function Lattice({ count, cfg }: { count: number; cfg: LatticeConfig }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const lineMatRef = useRef<THREE.LineBasicMaterial>(null);
  const { gl } = useThree();

  const data = useMemo(
    () => buildLattice(count, cfg.connectDist, cfg.maxLines),
    [count, cfg.connectDist, cfg.maxLines]
  );
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);
  // live (eased) display positions — start at the scattered positions
  const current = useMemo(() => Float32Array.from(data.scatter), [data]);

  const distFromCenter = useMemo(() => {
    const d = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      d[i] = Math.hypot(
        data.targets[i * 3],
        data.targets[i * 3 + 1],
        data.targets[i * 3 + 2]
      );
    }
    return d;
  }, [count, data]);

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const pointerWorld = useMemo(() => new THREE.Vector3(), []);
  const pointerLocal = useMemo(() => new THREE.Vector3(99999, 0, 0), []);
  const spin = useRef(0);

  // Track the cursor relative to THIS canvas (works for a section anywhere on
  // the page). The canvas is pointer-events:none so the DOM stays clickable,
  // which is why R3F's own state.pointer never fires — we map it ourselves.
  const ptr = useRef(new THREE.Vector2(0, 0));
  useEffect(() => {
    const el = gl.domElement;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = -((e.clientY - r.top) / r.height) * 2 + 1;
      ptr.current.set(
        THREE.MathUtils.clamp(x, -1, 1),
        THREE.MathUtils.clamp(y, -1, 1)
      );
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [gl]);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    for (let i = 0; i < count; i++) mesh.setColorAt(i, NAVY);
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [count]);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    const group = groupRef.current;
    if (!mesh || !group) return;

    const t = state.clock.elapsedTime;
    const raw = Math.min(t / 1.6, 1);
    const a = 1 - Math.pow(1 - raw, 3); // ease-out assembly

    // group orientation: slow spin + cursor parallax tilt
    spin.current += delta * cfg.idleSpin;
    const targetY = spin.current + ptr.current.x * cfg.parallaxRot;
    const targetX = -ptr.current.y * cfg.parallaxRot * 0.8;
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.06);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.06);
    group.position.x = THREE.MathUtils.lerp(
      group.position.x,
      ptr.current.x * cfg.parallaxPos,
      0.05
    );
    group.position.y = THREE.MathUtils.lerp(
      group.position.y,
      ptr.current.y * cfg.parallaxPos * 0.65,
      0.05
    );

    // project the cursor into the lattice's local space
    group.updateMatrixWorld();
    raycaster.setFromCamera(ptr.current, state.camera);
    if (raycaster.ray.intersectPlane(plane, pointerWorld)) {
      pointerLocal.copy(pointerWorld);
      group.worldToLocal(pointerLocal);
    }

    // per-node: assemble + pulse + cursor repel/highlight
    for (let i = 0; i < count; i++) {
      const sx = data.scatter[i * 3];
      const sy = data.scatter[i * 3 + 1];
      const sz = data.scatter[i * 3 + 2];
      // desired resting position (assembled)
      let x = sx + (data.targets[i * 3] - sx) * a;
      let y = sy + (data.targets[i * 3 + 1] - sy) * a;
      let z = sz + (data.targets[i * 3 + 2] - sz) * a;

      const pulse = Math.sin(t * 1.1 - distFromCenter[i] * 0.45) * 0.5 + 0.5;
      let intensity = Math.pow(pulse, 2) * cfg.pulseAmount;

      // gentle cursor repel, computed against the current (eased) position
      const dx = current[i * 3] - pointerLocal.x;
      const dy = current[i * 3 + 1] - pointerLocal.y;
      const dz = current[i * 3 + 2] - pointerLocal.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < cfg.cursorRadius) {
        const f = 1 - dist / cfg.cursorRadius;
        const fall = f * f * a; // soft, quadratic falloff
        const inv = 1 / (dist + 0.001);
        const push = cfg.cursorRepel * fall;
        x += dx * inv * push;
        y += dy * inv * push;
        z += dz * inv * push;
        intensity = Math.min(1, intensity + fall * 0.9);
      }

      // ease the live position toward the desired one — fluid, not snappy
      const nx = current[i * 3] + (x - current[i * 3]) * FOLLOW;
      const ny = current[i * 3 + 1] + (y - current[i * 3 + 1]) * FOLLOW;
      const nz = current[i * 3 + 2] + (z - current[i * 3 + 2]) * FOLLOW;
      current[i * 3] = nx;
      current[i * 3 + 1] = ny;
      current[i * 3 + 2] = nz;

      const scale = (0.08 + 0.1 * intensity) * a;
      dummy.position.set(nx, ny, nz);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      tmpColor.copy(NAVY).lerp(ORANGE, intensity);
      mesh.setColorAt(i, tmpColor);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

    // rebuild connection geometry from live node positions
    const lines = linesRef.current;
    if (lines) {
      const posAttr = lines.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let k = 0; k < data.nLines; k++) {
        const i = data.lineIdx[k * 2];
        const j = data.lineIdx[k * 2 + 1];
        arr[k * 6] = current[i * 3];
        arr[k * 6 + 1] = current[i * 3 + 1];
        arr[k * 6 + 2] = current[i * 3 + 2];
        arr[k * 6 + 3] = current[j * 3];
        arr[k * 6 + 4] = current[j * 3 + 1];
        arr[k * 6 + 5] = current[j * 3 + 2];
      }
      posAttr.needsUpdate = true;
      if (lineMatRef.current) {
        lineMatRef.current.opacity = THREE.MathUtils.lerp(
          lineMatRef.current.opacity,
          a * cfg.lineOpacity,
          0.08
        );
      }
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, count]}
        frustumCulled={false}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          vertexColors
          emissive={ORANGE}
          emissiveIntensity={0.3}
          roughness={0.65}
          metalness={0}
          toneMapped={false}
        />
      </instancedMesh>

      <lineSegments ref={linesRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[data.linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMatRef}
          color={ORANGE}
          transparent
          opacity={0}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}

function Rig({ z }: { z: number }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, z);
  }, [camera, z]);
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[8, 6, 10]} intensity={40} color="#9cc2ff" />
    </>
  );
}

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

/** Decorative WebGL lattice. Renders nothing on no-WebGL devices. */
export default function HeroLattice({
  config,
}: {
  config?: Partial<LatticeConfig>;
}) {
  const cfg = useMemo<LatticeConfig>(
    () => ({ ...HERO_CONFIG, ...config }),
    [config]
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [supported, setSupported] = useState(true);
  const mobile = useMemo(() => isMobile(), []);
  const count = mobile ? cfg.mobileCount : cfg.count;

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const gl =
        c.getContext("webgl2") ||
        c.getContext("webgl") ||
        c.getContext("experimental-webgl");
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let onScreen = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        setActive(onScreen && !document.hidden);
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    const onVis = () => setActive(onScreen && !document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  if (!supported) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={mobile ? [1, 1.5] : [1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ fov: 55, position: [0, 0, cfg.cameraZ] }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Rig z={cfg.cameraZ} />
          <Lattice count={count} cfg={cfg} />
          {!mobile && cfg.bloom && (
            <EffectComposer>
              <Bloom
                intensity={cfg.bloomIntensity}
                luminanceThreshold={0.45}
                luminanceSmoothing={0.9}
                mipmapBlur
              />
              <Vignette eskil={false} offset={0.3} darkness={0.55} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
