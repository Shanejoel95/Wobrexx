import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Workflow, Database, Brain, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive tasks across departments",
    features: [
      "Invoice & expense automation",
      "Document processing",
      "Email & notification workflows",
      "Data entry elimination",
    ],
    link: "/services#process-automation",
    highlighted: false,
  },
  {
    icon: Database,
    title: "System Integration",
    description: "Connect your tools and eliminate data silos",
    features: [
      "CRM & ERP integration",
      "API development",
      "Real-time data synchronization",
      "Custom middleware solutions",
    ],
    link: "/services#integration",
    highlighted: true,
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Turn data into actionable intelligence",
    features: [
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting",
      "Smart recommendations",
    ],
    link: "/services#ai-insights",
    highlighted: false,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
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
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            End-to-End Automation Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we handle everything
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-xl p-6 md:p-8 border transition-all duration-300 ${
                service.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-xl"
                  : "bg-card border-border hover:border-secondary/30 hover:shadow-xl"
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.highlighted ? "bg-primary-foreground/10" : "bg-secondary/10"
              }`}>
                <service.icon className={`w-7 h-7 ${service.highlighted ? "text-secondary" : "text-secondary"}`} />
              </div>

              <h3 className={`text-xl font-semibold mb-3 ${
                service.highlighted ? "text-primary-foreground" : "text-card-foreground"
              }`}>
                {service.title}
              </h3>

              <p className={`mb-6 ${
                service.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      service.highlighted ? "text-secondary" : "text-secondary"
                    }`} />
                    <span className={`text-sm ${
                      service.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={service.highlighted ? "white" : "outline"}
                className="w-full group"
                asChild
              >
                <Link to={service.link} className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
