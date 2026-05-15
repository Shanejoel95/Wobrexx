import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Workflow, LayoutDashboard, Globe, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Workflow,
    title: "Process Automation",
    description:
      "Automate repetitive work across teams and tools — invoices, emails, data entry, and more.",
    link: "/services#process-automation",
    featured: false,
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Custom SaaS Platforms",
    description:
      "Build internal tools and client portals that replace manual spreadsheets and match your exact workflows.",
    link: "/services#integration",
    featured: true,
  },
  {
    number: "03",
    icon: Globe,
    title: "Websites & Web Experiences",
    description:
      "High-performing websites and landing pages integrated with your CRM, analytics, and systems.",
    link: "/services#websites",
    featured: false,
  },
  {
    number: "04",
    icon: Wrench,
    title: "Software Maintenance",
    description:
      "Keep your systems fast, secure, and evolving. Ongoing support, updates, monitoring, and feature iteration.",
    link: "/services#software-maintenance",
    featured: false,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-4">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Services
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/services"
              className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-secondary transition-colors"
            >
              View all services
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Service list */}
        <div className="border-t border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <Link
                to={service.link}
                className={`group relative flex items-start md:items-center gap-5 md:gap-7 py-7 md:py-8 border-b border-border transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-none md:rounded-xl md:-mx-5 md:px-5`}
              >
                {/* Featured left accent */}
                {service.featured && (
                  <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-secondary rounded-r-full md:left-0" />
                )}

                {/* Step number */}
                <span className="text-xs font-mono text-muted-foreground/40 w-7 flex-shrink-0 mt-0.5 md:mt-0">
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    service.featured ? "bg-secondary/12" : "bg-muted"
                  }`}
                >
                  <service.icon
                    className={`w-5 h-5 ${
                      service.featured
                        ? "text-secondary"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-base md:text-lg font-semibold font-display text-foreground">
                      {service.title}
                    </h3>
                    {service.featured && (
                      <span className="text-[10px] font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full tracking-wide">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={17}
                  className="text-muted-foreground/30 group-hover:text-secondary transition-all flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-0.5 md:mt-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
