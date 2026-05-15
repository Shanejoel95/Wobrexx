import { motion } from "framer-motion";
import { Shield, Smartphone, Plug, LineChart, Headphones, Rocket } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-4">
            Why Choose Wobrexx
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-xl leading-tight">
            Built for speed and scale,<br />not enterprise complexity.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card — Security First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-primary rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <Shield className="w-8 h-8 text-secondary mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Security First
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm">
                Every system we build ships with bank-level encryption, strict
                access controls, and regular security audits. Protection isn't
                an add-on — it's the foundation.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/35 text-xs tracking-wide">
                Encrypted at rest and in transit — always
              </span>
            </div>
          </motion.div>

          {/* No-Code Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white rounded-2xl p-7 border border-border flex flex-col gap-5"
          >
            <Smartphone className="w-6 h-6 text-secondary" />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                No-Code Platform
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create automations without technical expertise. Drag,
                drop, automate.
              </p>
            </div>
          </motion.div>

          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="bg-white rounded-2xl p-7 border border-border flex flex-col gap-5"
          >
            <Plug className="w-6 h-6 text-secondary" />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                150+ Integrations
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Salesforce, HubSpot, SAP, QuickBooks, and 150+ more tools
                you already use.
              </p>
            </div>
          </motion.div>

          {/* Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-white rounded-2xl p-7 border border-border flex flex-col gap-5"
          >
            <LineChart className="w-6 h-6 text-secondary" />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                Real-Time Analytics
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Track performance, identify bottlenecks, and measure ROI
                with beautiful dashboards.
              </p>
            </div>
          </motion.div>

          {/* Support + Quick Launch — wide card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 bg-secondary/[0.06] border border-secondary/20 rounded-2xl p-7 flex flex-col sm:flex-row gap-8"
          >
            <div className="flex flex-col gap-5 flex-1">
              <Headphones className="w-6 h-6 text-secondary" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Dedicated Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Real humans, not bots. Your team gets a dedicated point of
                  contact across every timezone.
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px bg-border" />
            <div className="flex flex-col gap-5 flex-1">
              <Rocket className="w-6 h-6 text-secondary" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Quick Launch
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Go live in 2 weeks. Our team handles implementation while
                  you focus on your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
