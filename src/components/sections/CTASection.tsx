import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const noiseSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

export const CTASection = () => {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 0% 100%, hsl(28 100% 50% / 0.1) 0%, transparent 55%),
          radial-gradient(ellipse at 100% 0%, hsl(213 80% 30% / 0.4) 0%, transparent 55%),
          hsl(213 100% 10%)
        `,
      }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: noiseSvg,
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 line-grid opacity-20 pointer-events-none z-0" />

      {/* Large background text watermark */}
      <span
        className="absolute right-[-2%] bottom-[-15%] font-display font-black text-white leading-none select-none pointer-events-none z-0"
        style={{ fontSize: "clamp(10rem, 30vw, 28rem)", opacity: 0.018 }}
        aria-hidden="true"
      >
        GO
      </span>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-8">
            Get Started
          </span>

          {/* Headline with inline orange highlight */}
          <h2
            className="font-display font-bold text-white leading-[1.15] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
          >
            Ready to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary px-1 py-1 bg-secondary rounded-md leading-none">
                transform
              </span>
            </span>
            <br />
            your business?
          </h2>

          <p className="text-white/45 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Book a free 30-minute consultation. We'll map out exactly what can
            be automated — and what it's worth to you.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold px-7 h-12 rounded-xl text-sm shadow-lg shadow-secondary/20"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Book Free Strategy Session
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="border-t border-white/[0.07] pt-10 flex flex-wrap gap-8">
            {["No obligations", "30-minute call", "Custom automation roadmap"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-white/30 text-sm">{item}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
