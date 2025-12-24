import { motion } from "framer-motion";
import { FileText, Users, Clock, Zap, UserCheck, RefreshCw, ArrowDown } from "lucide-react";

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
    benefit: "Save 15 hours/week",
  },
  {
    icon: UserCheck,
    title: "Customer Onboarding",
    benefit: "2x faster completion",
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    benefit: "60% time reduction",
  },
];

export const ProblemSection = () => {
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
            Still Losing Time on Manual Tasks?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            European SMEs waste thousands of hours annually on repetitive tasks that should be automated.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/50 rounded-xl p-6 border border-border hover:border-destructive/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow Animation */}
        <motion.div
          className="flex justify-center my-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-12 h-12 text-secondary" />
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-navy rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary-foreground mb-8">
            Wobrexx Automates It All
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-2">{solution.title}</h4>
                <p className="text-secondary font-medium">{solution.benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
