# 3D Website Plan — Wobrexx
*Prepared 2026-06-18 · Primary goal: lead (free consultation booking) · Recommended stack: Hybrid / 3D-lite (React Three Fiber hero + scroll-driven motion) · Mode: A — preserve existing site*

> **Mode A (existing site):** Wobrexx's real copy, colors (Deep Navy `#001b3d` + Vibrant Orange), fonts (Space Grotesk / Inter), and section order are **preserved and animated, not rewritten**. Any proposed content change is listed explicitly in §8 for approval.

---

## 1. Executive summary
Wobrexx is an intelligent-automation studio (Sri Lanka-based, serving founders, agencies and scaling businesses worldwide) with an already-polished, dark-premium marketing site. The opportunity is **not a redesign** — it's adding one genuine "wow" moment plus restrained motion craft to push the site from "nice template" toward the $5,000+ award-tier bar, while keeping it fast and lead-focused. The recommendation is **hybrid / 3D-lite**: a single signature **WebGL "Systems Lattice" hero** (React Three Fiber) that literally visualises *"We Design, Build & Automate Your Systems,"* with every other section staying lightweight and crawlable. The headline of the plan: **one signature hero, real motion discipline everywhere else, zero content rewrites.**

## 2. Client snapshot
- **Business:** Wobrexx — process automation, custom SaaS platforms, websites/web experiences, and software maintenance for SMEs, founders, agencies and scaling businesses. Remote-first, GDPR-compliant, positioned as "enterprise-grade automation without the enterprise price tag."
- **Current presence:** Live site (this repo) — Vite + React + TypeScript + Tailwind + shadcn + framer-motion. Dark navy/orange theme, glassmorphism, manifesto hero. Strong baseline; no 3D today.
- **Primary conversion goal:** Book a free 30-minute consultation / strategy session (CTAs: "Get Free Consultation", "Book Free Strategy Session").
- **Sources used:** The live codebase (all 10 homepage sections, design tokens in `index.css`, `tailwind.config.ts`, `README.md`, `index.html` metadata). No external reviews/social audited — this is the owner's own site being upgraded, so the codebase *is* ground truth. (No public Google-review/social data gathered; note in §8 if competitive benchmarking is wanted.)

## 3. Research findings
Evidence is drawn from the existing build (Mode A — the site is the source of truth):

- **Brand system is already strong & consistent.** Deep Navy `213 100% 12%` + Vibrant Orange `28 100% 50%`, Space Grotesk display / Inter body, grain + line-grid + oversized watermark motifs reused across Hero, Process, CTA. This is a coherent visual language worth amplifying, not replacing.
- **Hero is manifesto-style** — staggered headline "We Design, / Build & / **Automate** / Your Systems." with subtext, dual CTA ("Get Free Consultation" / "Watch Demo"), and a 3-stat strip (40% cost reduction · 3× efficiency · 15 hrs saved/week). Currently animated only with framer-motion fade/slide-in.
- **Real proof points exist** — Stats section: 40% avg cost reduction, 3× efficiency, 15 hrs/week saved, 98% client satisfaction (animated count-ups).
- **Clear funnel** — Hero → Marquee → Problem/Solution → Features → Services (4) → Process (4 steps) → Stats → Industries → FAQ → CTA. Conversion path is well structured.
- **Motion today is competent but generic** — `whileInView` fade/slide, count-ups, CSS marquee. No smooth scroll, no signature interaction, no depth. This is the gap between "good template" and "award-tier."

## 4. Analysis

### Scorecard (1–5)
| Dimension | Score | Note |
|---|---|---|
| Digital presence (site quality) | 4 | Polished, modern dark theme; well-structured funnel. |
| Brand assets | 4 | Strong, consistent color/type/motif system; logo present. |
| Reputation / proof | 3 | Good stat claims (98% satisfaction etc.); no external reviews verified. |
| Content readiness | 5 | Full real copy already written for every section. |
| Photography / imagery | 2 | Icon-driven; one `hero-bg.jpg`; little bespoke imagery — favors generative/WebGL over photo. |
| Visual distinctiveness | 3 | Looks premium but template-adjacent; no memorable signature moment. |
| Motion craft | 2 | Basic fade/slide; no smooth scroll or scroll-choreography. |
| Performance baseline | 4 | Vite + lean stack; must protect this when adding WebGL. |
| 3D fit (concept) | 5 | "Automate your systems" maps perfectly to a node/network 3D metaphor. |
| Conversion clarity | 4 | Strong, repeated consultation CTA. |

### Highlights to amplify
- **A metaphor that's begging to be visualised** — "Design, Build & Automate Your **Systems**" → a living node-network/data-flow lattice. (Drives the signature hero.)
- **Strong, restrained brand palette** — navy + a single hot orange accent is ideal for a WebGL scene with selective bloom (orange = energy/automation).
- **Real numbers** (40% / 3× / 15 hrs / 98%) — keep the count-ups, stage them with scroll reveal.
- **Existing grain/grid/watermark motifs** — extend into the 3D layer so the new hero feels native, not bolted on.

### Drawbacks / gaps → action
- **No signature moment** → build **one** WebGL "Systems Lattice" hero (§6). One, done well.
- **Flat, generic motion** → introduce **Lenis smooth scroll + scroll-linked reveals/parallax** site-wide (restrained).
- **Little bespoke imagery** → lean on generative WebGL + motion rather than sourcing a photo shoot (cheaper, on-brand).
- **WebGL risks performance/SEO** → strict perf budget, lazy/guarded canvas, DOM-first content, reduced-motion + no-WebGL fallbacks (§6).

### Audience & positioning
Founders, agency owners, and ops leaders at scaling SMEs evaluating an automation partner. They must trust competence fast. A tasteful, performant signature interaction signals "these people can build sophisticated software" — which *is* the product. Differentiation = craft + proof, not gimmickry.

### Constraints
- Keep the existing React/Vite/Tailwind/shadcn stack (no framework migration).
- Preserve all copy and section structure (Mode A).
- B2B audience on mixed/mid-range devices → performance and graceful fallback are non-negotiable.
- Maintainer is a developer → R3F is acceptable (vs. a no-code tool).

## 5. Recommended 3D approach
- **Recommendation: Hybrid / 3D-lite — React Three Fiber for ONE signature hero, scroll-driven motion (Lenis + framer-motion) everywhere else.** Why this client specifically: the brand is premium but the audience is B2B lead-gen on mixed devices, so a full igloo-style all-WebGL site would hurt SEO, load, and accessibility for no conversion gain. A single high-craft hero delivers the "wow" and the "they can build software" signal; restrained motion elsewhere keeps the funnel fast and crawlable. R3F (not Spline) because a developer maintains it, we want a custom on-brand lattice tied to the literal "systems" metaphor, and it stays in the React ecosystem already in use.
- **Tradeoffs accepted:** ~one engine + postprocessing added to the bundle (code-split, hero-only); a continuously animating canvas above the fold (mitigated by low node count, clamped DPR, pause-off-screen). We deliberately *do not* 3D-ify lower sections.
- **Fallback approach (if budget/timeline tightens):** drop one tier — replace the R3F hero with a **Spline export** or a pure **3D-lite** canvas (CSS/2D parallax lattice). The plan's motion-only layer still ships independently.
- **Non-3D fallback experience (always on):** `prefers-reduced-motion` and no-WebGL/low-power devices render the **existing navy gradient + line-grid + watermark hero** with static DOM content — visually intact, zero canvas. All real copy/headings stay in the DOM regardless.

## 6. Build brief

### Sitemap (preserved — Mode A)
Home: Hero → MarqueeStrip → Problem/Solution → Features → Services → Process → Stats → Industries → FAQ → CTA. Other routes (`/about`, `/services`, `/solutions`, `/contact`, `/privacy`) unchanged in structure; inherit the smooth-scroll + reveal layer.

### 3D scene concepts (mapped to existing sections)
- **Hero — "Systems Lattice" (the only true 3D scene).** A slowly self-assembling 3D network of instanced nodes connected by glowing lines — a literal automated system. Orange "energy pulses" sweep across the lattice; the whole field parallaxes to the cursor and rotates gently. Sits *behind* the existing manifesto headline/CTA/stats (which stay in the DOM). Communicates: "we design, build & automate systems." Drives the goal by making the first 2 seconds feel like sophisticated software.
- **Everywhere else — motion, not 3D.** Stats count-ups gain a scroll-scrubbed reveal; Process steps draw their connector line on scroll; Services rows stagger in; section backgrounds (Problem dark panel, CTA) get subtle parallax on the existing grain/watermark layers. No additional WebGL canvases.

### Signature hero concept
**The Systems Lattice.** On load, scattered nodes drift inward and "connect," lines lighting up as the network forms — the brand promise enacted in 3 seconds. Idle: slow orbit + cursor parallax + orange pulse traveling through connections (selective bloom makes pulses glow). It replaces the current static line-grid with a living version of the same motif, so it reads as an evolution of the existing design, not a foreign element.

### Motion & animation system (buildable recipe)
- **Engine:** React Three Fiber (`@react-three/fiber`) + `three` + `@react-three/drei` + `@react-three/postprocessing`. DOM/UI motion stays on **framer-motion** (already installed). Smooth scroll via **Lenis** (`lenis`/`@studio-freight/lenis`), wired into the rAF loop (Phase 2 of build).
- **Hero scene construction:**
  - **Nodes:** ~180 `InstancedMesh` octahedra positioned in a rounded volume (1 draw call). Per-instance color lerps navy-white → hot orange driven by a traveling sine wave (`pulse = sin(t*1.4 − distFromCenter*k)`), giving the energy-pulse sweep.
  - **Connections:** precomputed once — neighbor pairs within a distance threshold, capped (~600 segments) → one `LineSegments` (1 draw call), low-opacity orange/white.
  - **Assembly intro:** instances lerp from a scattered start to target positions over ~1.5s on mount (GSAP-free; `useFrame` lerp), lines fade in after.
  - **Idle motion:** group auto-rotates slowly; `useFrame` eases group rotation toward normalized pointer (cursor parallax).
  - **Post-processing:** selective **Bloom** (`luminanceThreshold` so only the bright orange pulses glow) + subtle **Vignette**. Merge into one EffectComposer.
- **Scroll choreography (site-wide, restrained):** Lenis normalizes scroll; existing `whileInView` reveals upgraded to scroll-linked where it adds depth (Stats, Process connector draw, Services stagger). Camera/scene is **not** scroll-scrubbed in v1 (keeps hero cheap) — flagged as a Phase-2 enhancement.
- **Technique references:** node-field instancing + selective bloom per `animation-techniques.md` ("Instancing", "Bloom — lift colors above 1.0", "Particle/Points"); discipline (one metaphor, DOM-first text, hidden load cost) per `north-star-igloo.md`.

### Copy (Mode A — reused verbatim)
All copy stays exactly as written. The hero animates, but the text is untouched:
- Hero headline: "We Design, / Build & / **Automate** / Your Systems." · subtext "Websites, custom SaaS, process automation, and software maintenance — for founders, agencies, and scaling businesses worldwide." · CTAs "Get Free Consultation" / "Watch Demo" · stats "40% Avg. cost reduction / 3× Efficiency boost / 15 hrs Saved per week".
- Stats section, Services (01–04), Process (01–04), Problem/Solution, CTA ("Ready to **transform** your business?") — all verbatim.
- **No copy edits proposed at this time** (see §8 for optional items).

### Asset list (reuse-first)
- **Reuse:** brand colors (CSS vars in `index.css`), Space Grotesk/Inter fonts, `public/logo.png`, existing grain SVG + line-grid + watermark motifs. The lattice is generated procedurally — **no 3D model files, textures, or photography to source.**
- **New (flagged):** only code — `lenis` dependency (added Phase 2) and the new `three`/R3F packages (added). No binary assets.

### Inspiration references (form/motion only — never content)
- **igloo.inc** (north star) — *take:* the discipline (one metaphor end-to-end, DOM-first text, invisible load cost), **not** the all-WebGL UI.
- **Lusion v3** (lusion.co) — *take:* restrained particle/point field + selective bloom glow as the hero's energy quality.
- **basement.studio** — *take:* the "premium but legible" balance of a dark hero with crisp DOM typography on top.
- **darkroom.engineering / Studio Freight** — *take:* Lenis smooth-scroll as the baseline feel for the whole site.

### Interactions & motion
- **Hero:** cursor parallax, slow auto-rotate, load-assembly, orange pulse sweep. Pauses animation when off-screen / tab hidden.
- **Scroll:** Lenis smooth scroll; reveal/parallax on existing sections.
- **Hover:** existing service-row and step hovers retained; CTA buttons unchanged.

### Performance budget
- **Hero canvas:** ≤180 node instances + ≤600 line segments = **2 draw calls** for the lattice (+ bloom passes). DPR clamped to `[1, 1.75]`. Continuous `frameloop` but **pause on `IntersectionObserver` exit and `visibilitychange`**.
- **Bundle:** `three`/R3F/postprocessing **code-split and lazy-loaded** (React.lazy + Suspense); above-the-fold gradient renders instantly while the canvas hydrates and fades in. Target: no regression to first paint; canvas JS off the critical path.
- **Mobile:** clamp DPR to ≤1.5, reduce node count (~110) and skip bloom on small/low-power screens; static gradient fallback for very low-end.
- **Targets:** 60fps desktop / ~30fps mobile cap; Lighthouse Performance stays ≥ current.

### Accessibility & SEO
- `prefers-reduced-motion` → **no canvas**, render the existing static hero (full content, no motion).
- WebGL feature-detect + error boundary → fall back to static hero if context unavailable.
- All headings/copy/CTAs remain real DOM elements (canvas is decorative, `aria-hidden`); no text locked in `<canvas>`.
- Keyboard nav and focus order unaffected (canvas is non-interactive for AT).
- Metadata in `index.html` retained; add nothing that the canvas could hide from crawlers. Keep analytics on the existing CTA clicks.

## 7. Phased roadmap
1. **Discovery / setup (done in this pass)** — audit content, lock Mode A, choose hybrid/3D-lite, install `three` + R3F + drei + postprocessing. *Risk: none.*
2. **Signature hero build (this pass)** — `HeroLattice` R3F scene + guards (reduced-motion, WebGL detect, lazy load, off-screen pause) wired into `HeroSection` behind existing DOM. *~0.5–1 day. Dependency: deps installed. Risk: perf on low-end mobile → mitigated by fallback + node/DPR clamps.*
3. **Smooth-scroll + reveal layer** — add Lenis; upgrade Stats/Process/Services reveals to scroll-linked. *~0.5 day. Dependency: hero merged. Risk: scroll-jank if two scroll systems run → wire Lenis into one rAF loop.*
4. **QA & performance** — Lighthouse + mid-range mobile testing; verify reduced-motion and no-WebGL paths; tune bloom/DPR/node counts. *~0.5 day. **Biggest timeline risk: cross-device WebGL perf/QA** — budget real time here.*
5. **Launch** — ship; confirm metadata, fallbacks, analytics intact. *~0.25 day.*
6. **Post-launch (optional, Phase 2)** — scroll-scrubbed hero camera, page-transition WebGL wipe, per-section parallax depth. *Backlog.*

## 8. Open questions & assumptions
- **Assumed** developer-maintained, no framework migration, keep existing copy verbatim, lead-gen is the single goal.
- **Assumed** budget supports one R3F signature moment (not a full WebGL site).
- **Optional proposals (need approval, not done by default):**
  - Wire the "Watch Demo" button to a real demo (currently no handler).
  - Add competitive/social benchmarking (no external reviews were gathered — this is your own site).
  - Phase-2 scroll-scrubbed hero camera + page transitions.
- **Need from you:** confirm mobile should get the lattice (vs. static hero on phones) and whether Lenis smooth-scroll is wanted site-wide or hero-page only.
