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
            Industries
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Automation for every sector
          </h2>
        </motion.div>

        {/* Mosaic grid — gap acts as border via bg-border on parent */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white hover:bg-muted/30 transition-colors p-7 group"
            >
              <industry.icon className="w-6 h-6 text-secondary mb-5 transition-transform group-hover:scale-110" />
              <h3 className="font-display text-base font-bold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
