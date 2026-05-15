import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Factory, Truck, HeartPulse, ShoppingCart, Building, Briefcase,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const noiseSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const industries = [
  {
    number: "01",
    icon: Factory,
    title: "Manufacturing",
    pain: "Complex production scheduling, inventory errors, and quality control bottlenecks eating into margins.",
    wins: [
      "Automated production planning and scheduling",
      "Real-time inventory tracking with zero lag",
      "Quality control workflows that catch issues early",
    ],
    stat: "30% reduction in production delays",
  },
  {
    number: "02",
    icon: Truck,
    title: "Logistics & Supply Chain",
    pain: "Manual order processing, shipment visibility gaps, and warehouse inefficiencies slowing fulfilment.",
    wins: [
      "End-to-end order automation from intake to delivery",
      "Live shipment tracking integrated into your stack",
      "Smart warehouse workflows that eliminate rework",
    ],
    stat: "60% faster order processing",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Healthcare",
    pain: "Slow patient intake, chaotic scheduling, and manual billing creating friction at every touchpoint.",
    wins: [
      "Digital patient intake and onboarding automation",
      "Smart appointment scheduling with auto-reminders",
      "Automated billing and claims workflows",
    ],
    stat: "70% faster patient registration",
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    pain: "Inventory sync failures, fulfilment delays, and customer service overload killing repeat purchase rates.",
    wins: [
      "Multi-channel inventory sync in real time",
      "Automated order processing and fulfilment triggers",
      "AI-assisted customer support across all channels",
    ],
    stat: "Same-day order processing at scale",
  },
  {
    number: "05",
    icon: Building,
    title: "Finance & Fintech",
    pain: "Time-consuming invoice processing, compliance reporting burden, and slow client onboarding.",
    wins: [
      "Automated invoice extraction and reconciliation",
      "Compliance reporting with full audit trails",
      "Digital client onboarding in hours, not days",
    ],
    stat: "80% faster invoice processing",
  },
  {
    number: "06",
    icon: Briefcase,
    title: "Professional Services",
    pain: "Project tracking complexity, inaccurate time entries, and scattered client communication hurting margins.",
    wins: [
      "Automated project tracking and status updates",
      "Integrated time tracking tied to deliverables",
      "Centralised client communication and file management",
    ],
    stat: "20% improvement in project margins",
  },
];

const SolutionsPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-25 pointer-events-none z-0" />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: noiseSvg,
            opacity: 0.04,
            mixBlendMode: "overlay",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, hsl(28 100% 50% / 0.07) 0%, transparent 60%)",
          }}
        />
        <span
          className="absolute right-[-2%] bottom-[-12%] font-display font-black text-white leading-none select-none pointer-events-none z-0"
          style={{ fontSize: "clamp(10rem, 28vw, 26rem)", opacity: 0.018 }}
          aria-hidden="true"
        >
          SOL
        </span>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
              Industry Solutions
            </span>
            <h1
              className="font-display font-bold text-white leading-[0.93] tracking-tight mb-6 max-w-2xl"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Your industry.<br />Our expertise.
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-lg leading-relaxed">
              Every sector has its own friction points. We've mapped them —
              and built targeted automation strategies that remove them fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-14 border-b border-border items-start"
              >
                {/* Number + icon */}
                <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4 md:gap-4">
                  <span className="text-xs font-mono text-muted-foreground/40">
                    {industry.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-secondary/8 border border-secondary/15 flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-5 h-5 text-secondary" />
                  </div>
                </div>

                {/* Title + pain */}
                <div className="md:col-span-4">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    {industry.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.pain}
                  </p>
                </div>

                {/* Wins */}
                <div className="md:col-span-5">
                  <p className="text-[10px] font-semibold text-muted-foreground/50 tracking-[0.14em] uppercase mb-4">
                    What We Automate
                  </p>
                  <ul className="space-y-2.5">
                    {industry.wins.map((win) => (
                      <li key={win} className="flex items-start gap-3 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                        {win}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stat */}
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-block text-xs font-semibold text-secondary bg-secondary/8 border border-secondary/15 px-3 py-1.5 rounded-lg leading-snug">
                    {industry.stat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 100% 100%, hsl(28 100% 50% / 0.06) 0%, transparent 55%),
            hsl(213 100% 10%)
          `,
        }}
      >
        <div className="absolute inset-0 line-grid opacity-20 pointer-events-none z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
                Don't see your sector?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                We go where the<br />problem is.
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-8 max-w-md">
                Our automation and development expertise isn't limited to the
                sectors listed here. If your business has repetitive processes,
                data silos, or manual workflows — we can fix them. Book a
                discovery call and we'll map it out for free.
              </p>
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold px-7 h-12 rounded-xl text-sm shadow-lg shadow-secondary/20"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Book a Free Strategy Session
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-3">
              {["EdTech", "Real Estate", "SaaS Companies", "Legal Services", "Non-Profits", "Agencies"].map(
                (sector, i) => (
                  <div
                    key={sector}
                    className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-5 py-4"
                  >
                    <span className="text-xs font-mono text-secondary/40 block mb-1.5">
                      {String(i + 7).padStart(2, "0")}
                    </span>
                    <span className="text-white/60 text-sm font-medium">{sector}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default SolutionsPage;
