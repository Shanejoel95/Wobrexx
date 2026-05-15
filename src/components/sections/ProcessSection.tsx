import { motion } from "framer-motion";
import { Phone, FileText, Settings, Rocket } from "lucide-react";

const noiseSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description:
      "We analyze your workflows and identify automation opportunities. Free, no obligation.",
    duration: "30 min",
  },
  {
    number: "02",
    icon: FileText,
    title: "Custom Strategy",
    description:
      "Receive a detailed automation roadmap with ROI projections and implementation timeline.",
    duration: "3–5 days",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implementation",
    description:
      "Our team builds and tests your automations. You review and approve before going live.",
    duration: "2–4 weeks",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Go live with confidence. Ongoing monitoring, optimization, and support included.",
    duration: "Ongoing",
  },
];

export const ProcessSection = () => {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden relative"
      style={{
        background: `
          radial-gradient(ellipse at 100% 100%, hsl(28 100% 50% / 0.06) 0%, transparent 55%),
          hsl(213 100% 10%)
        `,
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: noiseSvg,
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Simple, transparent process
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
          {/* Horizontal connector line */}
          <div className="hidden md:block absolute top-[26px] left-[calc(12.5%+4px)] right-[calc(12.5%+4px)] h-px bg-white/[0.07] z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 group"
            >
              {/* Large background step number */}
              <span
                className="absolute right-0 top-0 font-display font-black text-white leading-none select-none pointer-events-none"
                style={{ fontSize: "7rem", opacity: 0.035 }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icon circle */}
              <div className="w-[52px] h-[52px] rounded-full bg-secondary/15 border border-secondary/20 flex items-center justify-center mb-8 flex-shrink-0 group-hover:bg-secondary/25 group-hover:border-secondary/40 transition-colors duration-300">
                <step.icon className="w-5 h-5 text-secondary" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-white/20">
                  {step.number}
                </span>
                <span className="text-[10px] font-semibold text-secondary/70 bg-secondary/10 px-2.5 py-0.5 rounded-md tracking-wide uppercase">
                  {step.duration}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/38 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden h-10 w-px bg-white/[0.07] mx-[25px] mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
