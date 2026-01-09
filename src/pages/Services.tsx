import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  LayoutDashboard,
  Code,
  Globe,
  Rocket,
  Check,
  ArrowRight,
  FileText,
  Mail,
  Clock,
  Users,
  Link as LinkIcon,
  BarChart3,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    id: "process-automation",
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
    color: "secondary",
  },
  {
    id: "custom-saas",
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
    color: "secondary",
  },
  {
    id: "websites",
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
    color: "secondary",
  },
  {
    id: "product-development",
    icon: Rocket,
    title: "Product Development",
    description:
      "From first idea to shipped product, we help you define, design, and deliver digital products that scale.",
    benefits: [
      "Product discovery and requirements definition",
      "UX/UI design aligned with your brand and users",
      "MVP builds to validate quickly with real customers",
      "Roadmapping and iteration based on usage data",
      "Integration and automation strategy baked in",
      "Handover and training for your internal teams",
    ],
    technologies: ["Product strategy", "UX/UI design", "Agile delivery", "API‑first systems"],
    color: "secondary",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
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
              Services to Design, Build & Automate Your Systems
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Wobrexx partners with solo founders, agencies, SMBs, and mid‑market teams
              to create the websites, products, and automations that keep operations moving fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-card" : "bg-muted/50"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">What's Included:</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Technologies we use:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? "lg:order-1" : ""}
              >
                <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 border border-border">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: FileText, label: "Documents" },
                      { icon: Mail, label: "Emails" },
                      { icon: Clock, label: "Scheduling" },
                      { icon: Users, label: "Teams" },
                      { icon: LinkIcon, label: "Integrations" },
                      { icon: BarChart3, label: "Analytics" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card rounded-xl p-4 text-center border border-border hover:border-secondary/30 transition-colors"
                      >
                        <item.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
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
