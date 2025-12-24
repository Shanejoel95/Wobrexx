import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, hsl(210, 84%, 10%) 0%, hsl(197, 100%, 45%) 50%, hsl(210, 84%, 10%) 100%)",
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-secondary/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join forward-thinking European SMEs who are automating their way to success.
            Book your free consultation today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="white" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Book Free Strategy Session
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="white-outline" size="xl" className="group">
              <Download size={20} className="group-hover:scale-110 transition-transform" />
              Download Automation Guide
            </Button>
          </div>

          {/* Trust Items */}
          <div className="flex flex-wrap gap-6 justify-center text-primary-foreground/80">
            {["No obligations", "30-minute call", "Custom automation roadmap"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={18} className="text-secondary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
