import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  LayoutDashboard,
  Globe,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    id: "process-automation",
    number: "01",
    icon: Workflow,
    title: "Process Automation",
    description:
      "Automate repetitive work across teams so your people can focus on high‑value problems instead of admin.",
    benefits: [
      "Invoice and expense approvals on autopilot",
      "Document and contract routing with full traceability",
      "Email and notification workflows that never get missed",
      "Data entry and synchronisation across tools",
      "Customer onboarding and offboarding automation",
      "HR, finance, and operations workflows streamlined",
    ],
    technologies: ["Zapier", "Make", "n8n", "Power Automate"],
  },
  {
    id: "custom-saas",
    number: "02",
    icon: LayoutDashboard,
    title: "Custom SaaS Platforms",
    description:
      "Design and build the internal tools and client‑facing platforms that match how your business really works.",
    benefits: [
      "Customer and partner portals tailored to your processes",
      "Internal tools that replace spreadsheets and email chains",
      "Multi‑tenant SaaS products for recurring revenue",
      "Role‑based access, audit trails, and compliance support",
      "Embedded automation in every key workflow",
      "Scalable architecture ready for future features",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS / Azure"],
  },
  {
    id: "websites",
    number: "03",
    icon: Globe,
    title: "Websites & Web Experiences",
    description:
      "High‑performing marketing sites, landing pages, and product sites that plug directly into your systems.",
    benefits: [
      "Conversion‑focused marketing and product websites",
      "Integrated forms, CRMs, and booking systems",
      "Performance‑optimised and mobile‑first experiences",
      "Analytics and event tracking wired from day one",
      "SEO‑friendly foundations and clean information architecture",
      "Content workflows connected to your internal tools",
    ],
    technologies: ["Next.js", "Vite / React", "Headless CMS", "Analytics stack"],
  },
  {
    id: "software-maintenance",
    number: "04",
    icon: Wrench,
    title: "Software Maintenance",
    description:
      "Keep your systems performant, secure, and evolving. We handle ongoing updates, monitoring, and iteration so your technology never falls behind.",
    benefits: [
      "Proactive monitoring and incident response",
      "Security patches and dependency updates",
      "Performance optimisation and code health reviews",
      "Feature iteration based on real usage data",
      "Bug fixes with full root-cause analysis",
      "Documentation and knowledge transfer for your team",
    ],
    technologies: ["CI/CD pipelines", "Monitoring & alerting", "Version control", "Automated testing"],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-25 pointer-events-none z-0" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, hsl(28 100% 50% / 0.08) 0%, transparent 65%)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
              What We Offer
            </span>
            <h1
              className="font-display font-bold text-white leading-[0.93] tracking-tight mb-6 max-w-2xl"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Design, Build<br />&amp; Automate.
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-lg leading-relaxed">
              Wobrexx partners with founders, agencies, and scaling teams
              worldwide to design, build, and maintain the systems that keep
              operations moving fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service navigation strip */}
      <div className="bg-white border-b border-border sticky top-[60px] z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 py-4 px-5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors border-b-2 border-transparent hover:border-secondary whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-28 ${index % 2 === 0 ? "bg-white" : "bg-muted/40"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-4 mb-7">
                  <span className="text-xs font-mono text-muted-foreground/50">
                    {service.number}
                  </span>
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                  {service.description}
                </p>

                <div className="mb-10">
                  <p className="text-[11px] font-semibold text-muted-foreground/60 tracking-[0.14em] uppercase mb-5">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-secondary bg-secondary/8 border border-secondary/15 px-3 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold px-6 h-11 rounded-lg text-sm"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>

              {/* Benefits panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={index % 2 !== 0 ? "lg:order-1" : ""}
              >
                <div className="bg-primary rounded-2xl p-8 md:p-10">
                  <p className="text-[11px] font-semibold text-secondary/80 tracking-[0.18em] uppercase mb-7">
                    What's Included
                  </p>
                  <ul className="space-y-0">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={benefit}
                        className={`flex items-start gap-5 py-4 ${
                          i < service.benefits.length - 1
                            ? "border-b border-white/[0.07]"
                            : ""
                        }`}
                      >
                        <span className="text-[11px] font-mono text-white/20 flex-shrink-0 mt-0.5 w-5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/65 text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </Layout>
  );
};

export default ServicesPage;
