import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    icon: Heart,
    title: "Client Success, Always",
    description:
      "We don't just ship systems and disappear. We become your long-term technology partner, invested in your outcomes as much as you are.",
  },
  {
    icon: Shield,
    title: "Security by Design",
    description:
      "Every platform, automation, and API we build is engineered with security at its core — not patched on at the end. Your data, your customers' data, is always protected.",
  },
  {
    icon: Zap,
    title: "Accessible Excellence",
    description:
      "Enterprise-grade quality without the enterprise overhead. We believe every growing business deserves powerful technology — at a price and pace that makes sense.",
  },
];

const certifications = [
  { label: "ISO 27001 Aligned", status: "active" },
  { label: "SOC 2 Practices", status: "active" },
  { label: "ISO 27001 Certification", status: "progress" },
];

const milestones = [
  { number: "15+", label: "Years combined experience" },
  { number: "150+", label: "Integrations supported" },
  { number: "20+", label: "Countries served" },
  { number: "24/7", label: "Monitoring & support" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-25 pointer-events-none z-0" />
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, hsl(28 100% 50% / 0.07) 0%, transparent 65%)",
          }}
        />
        <span
          className="absolute right-[-2%] bottom-[-10%] font-display font-black text-white leading-none select-none pointer-events-none z-0"
          style={{ fontSize: "clamp(10rem, 28vw, 26rem)", opacity: 0.018 }}
          aria-hidden="true"
        >
          WX
        </span>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
              About Us
            </span>
            <h1
              className="font-display font-bold text-white leading-[0.93] tracking-tight mb-6 max-w-2xl"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Built to move<br />businesses forward.
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-lg leading-relaxed">
              We're on a mission to make powerful technology accessible to every
              ambitious business — not just the ones with enterprise budgets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Intelligent systems for every business.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                At Wobrexx, we believe every growing business deserves access to
                world-class technology. We design, build, and automate the
                systems that let your team do their best work — and let your
                business scale without the friction.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Founded by specialists with 15+ years of combined experience
                across automation, software development, and product design.
                We've worked with solo founders, fast-moving agencies, and
                scaling teams across more than 20 countries — and we bring that
                depth to every engagement.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="grid grid-cols-2 border border-border rounded-2xl overflow-hidden">
                {milestones.map((m, i) => (
                  <div
                    key={m.label}
                    className={`p-8 ${i % 2 === 0 ? "border-r border-border" : ""} ${
                      i >= 2 ? "border-t border-border" : ""
                    }`}
                  >
                    <p className="font-display text-4xl font-bold text-secondary mb-2">
                      {m.number}
                    </p>
                    <p className="text-sm text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-4">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
          </motion.div>

          <div className="border-t border-border">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-8 py-10 border-b border-border"
              >
                <span className="text-5xl font-black font-display text-foreground/[0.06] leading-none select-none w-16 text-right flex-shrink-0">
                  0{index + 1}
                </span>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <value.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
                Trust & Security
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                Built on a foundation<br />of trust.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                We take security and compliance seriously. Every system we build
                is designed to meet the highest standards — so you can focus on
                your business, not on risk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4"
            >
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center justify-between py-5 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium text-foreground text-sm">
                      {cert.label}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                      cert.status === "active"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {cert.status === "active" ? "Active" : "In Progress"}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-20 pointer-events-none z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
                Where We Work
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Remote-first.<br />Global by design.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
                Wobrexx is a remote-first team built to serve clients wherever
                they operate. We pair world-class engineering talent with
                async-first collaboration — so distance is never a bottleneck.
                From solo founders to scaling teams, we work with businesses
                across 20+ countries and every timezone.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Remote-First", "Async-Friendly", "20+ Countries", "Always-On Support"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-white/50 bg-white/[0.06] border border-white/[0.08] px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold px-6 h-11 rounded-lg text-sm"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Work With Us
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-10">
                <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.14em] mb-8">
                  The Wobrexx Advantage
                </p>
                {[
                  "World-class engineering talent at growth-stage pricing",
                  "Dedicated team, not rotated contractors or outsourced labour",
                  "Async-first workflows that respect your timezone",
                  "Full transparency — you always know what's being built and why",
                ].map((point, i) => (
                  <div
                    key={point}
                    className={`flex items-start gap-5 py-5 ${
                      i < 3 ? "border-b border-white/[0.07]" : ""
                    }`}
                  >
                    <span className="text-xs font-mono text-secondary/50 w-5 flex-shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <p className="text-white/60 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AboutPage;
