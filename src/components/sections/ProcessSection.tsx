import { motion } from "framer-motion";
import { Phone, FileText, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "We analyze your workflows and identify automation opportunities. Free, no obligation.",
    duration: "30 minutes",
  },
  {
    number: "02",
    icon: FileText,
    title: "Custom Strategy",
    description: "Receive a detailed automation roadmap with ROI projections and implementation timeline.",
    duration: "3-5 days",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implementation",
    description: "Our team builds and tests your automations. You review and approve before going live.",
    duration: "2-4 weeks",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Go live with confidence. Ongoing monitoring, optimization, and support included.",
    duration: "Ongoing",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            From first call to full automation in 4 easy steps
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-secondary/30 -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className={`bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 ${
                  index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"
                } max-w-md`}>
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    <span className="text-xs font-medium text-secondary bg-secondary/20 px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{step.description}</p>
                </div>
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg glow-cyan">
                  <step.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center text-sm font-bold text-primary">
                  {step.number}
                </span>
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
