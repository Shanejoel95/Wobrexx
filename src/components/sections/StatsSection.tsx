import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 40, suffix: "%", label: "Average cost reduction" },
  { number: 3, suffix: "×", label: "Efficiency improvement" },
  { number: 15, suffix: " hrs", label: "Weekly time saved" },
  { number: 98, suffix: "%", label: "Client satisfaction" },
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
      {count}
      {suffix}
    </span>
  );
};

const borderClass = (index: number) => {
  const classes: string[] = [];
  // Mobile (2-col): right border for left column
  if (index % 2 === 0) classes.push("border-r border-border");
  // Mobile: top border for second row
  if (index >= 2) classes.push("border-t border-border");
  // Desktop (4-col): add right border for index 1 (not in left column on mobile)
  if (index === 1) classes.push("md:border-r md:border-border");
  // Desktop: remove top border added for mobile second row
  if (index >= 2) classes.push("md:border-t-0");
  return classes.join(" ");
};

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-4">
            Impact
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            The Wobrexx difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-8 md:p-10 lg:p-12 ${borderClass(index)}`}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-3">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
