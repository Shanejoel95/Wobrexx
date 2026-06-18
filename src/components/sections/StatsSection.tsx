import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";

const stats = [
  { number: 40, suffix: "%", label: "Average cost reduction" },
  { number: 3, suffix: "×", label: "Efficiency improvement" },
  { number: 15, suffix: " hrs", label: "Weekly time saved" },
  { number: 98, suffix: "%", label: "Client satisfaction" },
];

// Count scrubbed to scroll position — the numbers fill as the section rises
// into view (and rewind on scroll-up), driven by a shared scroll progress.
const ScrubCount = ({
  target,
  suffix,
  progress,
}: {
  target: number;
  suffix: string;
  progress: MotionValue<number>;
}) => {
  const value = useTransform(progress, [0, 1], [0, target], { clamp: true });
  const [display, setDisplay] = useState(0);
  useMotionValueEvent(value, "change", (v) => setDisplay(Math.round(v)));

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

const borderClass = (index: number) => {
  const classes: string[] = [];
  if (index % 2 === 0) classes.push("border-r border-border");
  if (index >= 2) classes.push("border-t border-border");
  if (index === 1) classes.push("md:border-r md:border-border");
  if (index >= 2) classes.push("md:border-t-0");
  return classes.join(" ");
};

export const StatsSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.9", "start 0.4"],
  });

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

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-2xl overflow-hidden"
        >
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
                <ScrubCount
                  target={stat.number}
                  suffix={stat.suffix}
                  progress={scrollYProgress}
                />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
