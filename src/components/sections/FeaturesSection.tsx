import { motion } from "framer-motion";
import { Shield, Smartphone, Plug, LineChart, Headphones, Rocket } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "GDPR Native",
    description: "Built from the ground up with European data protection standards. All data stays within EU borders.",
  },
  {
    icon: Smartphone,
    title: "No-Code Platform",
    description: "Create and manage automations without technical expertise. Drag, drop, automate.",
  },
  {
    icon: Plug,
    title: "150+ Integrations",
    description: "Connect with your existing tools: Salesforce, HubSpot, SAP, QuickBooks, and more.",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    description: "Track performance, identify bottlenecks, and measure ROI with beautiful dashboards.",
  },
  {
    icon: Headphones,
    title: "European Support",
    description: "Speak with real humans in your timezone. Support in English, German, and French.",
  },
  {
    icon: Rocket,
    title: "Quick Launch",
    description: "Go live in 2 weeks. Our team handles implementation while you focus on your business.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-4">
            <span className="text-sm font-medium">Why Choose Wobrexx</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for European SMEs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade automation without enterprise complexity
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-secondary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
