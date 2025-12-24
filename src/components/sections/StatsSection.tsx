import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingDown, Zap, Clock, Heart } from "lucide-react";

const stats = [
  {
    number: 40,
    suffix: "%",
    label: "Average Cost Reduction",
    icon: TrendingDown,
  },
  {
    number: 3,
    suffix: "x",
    label: "Efficiency Improvement",
    icon: Zap,
  },
  {
    number: 15,
    suffix: "hrs",
    label: "Weekly Time Saved",
    icon: Clock,
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: Heart,
  },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            The Wobrexx Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results our clients experience
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-muted/50 border border-border hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
