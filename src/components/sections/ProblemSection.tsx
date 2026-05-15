import { motion } from "framer-motion";
import { FileText, Users, Clock, Zap, UserCheck, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: FileText,
    title: "Manual Invoice Processing",
    description: "Spending 15+ hours weekly on data entry and invoice management",
  },
  {
    icon: Users,
    title: "Slow Customer Onboarding",
    description: "Losing customers due to lengthy, manual onboarding processes",
  },
  {
    icon: Clock,
    title: "Repetitive Workflows",
    description: "Your team wastes 60% of their time on tasks that could be automated",
  },
];

const solutions = [
  {
    icon: Zap,
    title: "Invoice Processing",
    benefit: "Save 15 hrs/week",
  },
  {
    icon: UserCheck,
    title: "Customer Onboarding",
    benefit: "2× faster completion",
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    benefit: "60% time reduction",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Problems */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
                The Problem
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 md:mb-16">
                Still losing time<br />on manual work?
              </h2>
            </motion.div>

            <div className="space-y-10">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <span className="text-5xl md:text-6xl font-black font-display text-foreground/[0.06] leading-none select-none flex-shrink-0 w-16 text-right">
                    0{index + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Solution dark panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-primary rounded-2xl p-8 md:p-10 lg:sticky lg:top-28"
          >
            <span className="text-[11px] font-semibold text-secondary/80 tracking-[0.18em] uppercase block mb-4">
              The Solution
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-8 leading-snug">
              Wobrexx handles<br />all of it — automatically.
            </h3>

            <div className="space-y-0">
              {solutions.map((solution, i) => (
                <div
                  key={solution.title}
                  className={`flex items-center justify-between py-5 ${
                    i < solutions.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-white/75 text-sm font-medium">
                      {solution.title}
                    </span>
                  </div>
                  <span className="text-secondary text-sm font-bold">
                    {solution.benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.07]">
              <p className="text-white/35 text-xs leading-relaxed">
                Growing businesses waste thousands of hours annually on
                repetitive tasks. Wobrexx eliminates that overhead — without
                the enterprise price tag or complexity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
