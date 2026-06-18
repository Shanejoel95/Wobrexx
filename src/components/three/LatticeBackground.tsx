import { Suspense, lazy, useEffect, useState } from "react";
import type { LatticeConfig } from "./HeroLattice";

// Code-split: three.js / R3F / postprocessing stay off the critical path.
const HeroLattice = lazy(() => import("./HeroLattice"));

/**
 * Decorative cursor-reactive WebGL lattice layer, reusable per section.
 * Renders nothing when the user prefers reduced motion — the section's
 * existing static background remains as the fallback.
 */
export const LatticeBackground = ({
  config,
}: {
  config?: Partial<LatticeConfig>;
}) => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowed(!mq.matches);
    const onChange = () => setAllowed(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!allowed) return null;

  return (
    <Suspense fallback={null}>
      <HeroLattice config={config} />
    </Suspense>
  );
};
