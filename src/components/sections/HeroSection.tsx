import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "40%", label: "Avg. cost reduction" },
  { value: "3×", label: "Efficiency boost" },
  { value: "15 hrs", label: "Saved per week" },
];

const headlineLines = [
  { text: "We Design,", accent: false },
  { text: "Build &", accent: false },
  { text: "Automate", accent: true },
  { text: "Your Systems.", accent: false },
];

const noiseSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 15% 85%, hsl(28 100% 50% / 0.09) 0%, transparent 55%),
          radial-gradient(ellipse at 90% 10%, hsl(213 80% 35% / 0.35) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 50%, hsl(213 100% 16% / 1) 0%, hsl(213 100% 10% / 1) 100%)
        `,
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 line-grid z-0 pointer-events-none" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: noiseSvg,
          opacity: 0.045,
          mixBlendMode: "overlay",
        }}
      />

      {/* Large W watermark */}
      <span
        className="absolute right-[-3%] bottom-[-8%] font-display font-black text-white leading-none select-none pointer-events-none z-[2]"
        style={{
          fontSize: "clamp(16rem, 42vw, 40rem)",
          opacity: 0.022,
        }}
        aria-hidden="true"
      >
        W
      </span>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 md:pt-36 pb-16">
        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12 md:mb-16"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-secondary/75 text-xs font-medium tracking-[0.18em] uppercase">
            Now Launching — Early Bird Discount Available
          </span>
        </motion.div>

        {/* Manifesto headline */}
        <div className="mb-12 md:mb-16">
          {headlineLines.map((line, i) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: "easeOut" }}
            >
              <span
                className={`block font-display font-bold leading-[0.93] tracking-tight ${
                  line.accent ? "text-secondary" : "text-white"
                }`}
                style={{ fontSize: "clamp(3rem, 9.5vw, 8.5rem)" }}
              >
                {line.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Subtext + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-24"
        >
          <div className="max-w-sm">
            <div className="w-10 h-[2px] bg-secondary mb-5" />
            <p className="text-white/45 text-base leading-relaxed">
              Websites, custom SaaS, process automation, and software
              maintenance — for founders, agencies, and scaling businesses
              worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold px-6 h-12 rounded-xl text-sm shadow-lg shadow-secondary/20"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight size={15} />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="text-white/55 hover:text-white hover:bg-white/[0.05] h-12 px-6 rounded-xl border border-white/[0.08] text-sm"
            >
              Watch Demo
              <ArrowUpRight size={14} className="ml-1" />
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-16 md:mt-24 border-t border-white/[0.07] pt-8 flex flex-wrap gap-10 md:gap-16"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold font-display text-secondary">
                {s.value}
              </p>
              <p className="text-[11px] text-white/30 uppercase tracking-widest mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
