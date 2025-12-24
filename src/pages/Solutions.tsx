import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Factory, Truck, HeartPulse, ShoppingCart, Building, Briefcase,
  ArrowRight, Check, AlertTriangle
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    challenges: [
      "Complex production scheduling",
      "Inventory tracking errors",
      "Quality control bottlenecks",
    ],
    solutions: [
      "Automated production planning",
      "Real-time inventory management",
      "Automated quality inspections",
    ],
    benefits: ["30% reduction in production delays", "99% inventory accuracy", "50% faster quality checks"],
  },
  {
    icon: Truck,
    title: "Logistics",
    challenges: [
      "Manual order processing",
      "Shipment tracking gaps",
      "Warehouse inefficiencies",
    ],
    solutions: [
      "Automated order workflows",
      "Real-time tracking integration",
      "Smart warehouse optimization",
    ],
    benefits: ["60% faster order processing", "100% shipment visibility", "25% space utilization improvement"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    challenges: [
      "Slow patient onboarding",
      "Appointment scheduling chaos",
      "Manual billing errors",
    ],
    solutions: [
      "Digital patient intake forms",
      "Smart scheduling automation",
      "Automated billing workflows",
    ],
    benefits: ["70% faster patient registration", "40% fewer no-shows", "90% reduction in billing errors"],
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    challenges: [
      "Inventory sync issues",
      "Order fulfillment delays",
      "Customer service overload",
    ],
    solutions: [
      "Multi-channel inventory sync",
      "Automated order processing",
      "AI-powered customer support",
    ],
    benefits: ["Real-time stock accuracy", "Same-day order processing", "24/7 customer assistance"],
  },
  {
    icon: Building,
    title: "Finance",
    challenges: [
      "Time-consuming invoice processing",
      "Compliance reporting burden",
      "Manual client onboarding",
    ],
    solutions: [
      "Automated invoice extraction",
      "Compliance automation",
      "Digital client onboarding",
    ],
    benefits: ["80% faster invoice processing", "100% compliance accuracy", "5x faster onboarding"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    challenges: [
      "Project tracking complexity",
      "Manual time entries",
      "Scattered client communication",
    ],
    solutions: [
      "Automated project management",
      "Smart time tracking",
      "Centralized communication hub",
    ],
    benefits: ["20% improved project margins", "Accurate time billing", "Streamlined client experience"],
  },
];

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Industry Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Tailored automation strategies designed for your specific sector.
              We understand your unique challenges and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted/50 rounded-xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-secondary" />
                </div>

                <h3 className="text-xl font-semibold text-card-foreground mb-4">{industry.title}</h3>

                {/* Challenges */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-secondary mb-2 flex items-center gap-2">
                    <AlertTriangle size={14} />
                    Common Challenges
                  </h4>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-secondary mb-2 flex items-center gap-2">
                    <Check size={14} />
                    Our Solutions
                  </h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {industry.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our automation expertise extends beyond these sectors.
              Contact us to discuss your specific needs.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default SolutionsPage;
