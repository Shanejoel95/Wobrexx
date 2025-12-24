import { motion } from "framer-motion";
import { Factory, Truck, HeartPulse, ShoppingCart, Building, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production planning, inventory management, quality control automation",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Order processing, shipment tracking, warehouse optimization",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient onboarding, appointment scheduling, billing automation",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Inventory sync, order fulfillment, customer service automation",
  },
  {
    icon: Building,
    title: "Finance",
    description: "Invoice processing, compliance reporting, client onboarding",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Project management, time tracking, client communication",
  },
];

export const IndustriesSection = () => {
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
            <span className="text-sm font-medium">Industries We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automation Solutions for Every Sector
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <industry.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
