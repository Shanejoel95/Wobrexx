import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Workflow, Database, Brain, Check, ArrowRight, 
  FileText, Mail, Clock, Users, Link as LinkIcon, 
  BarChart3, Lightbulb, Target
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    id: "process-automation",
    icon: Workflow,
    title: "Process Automation",
    description: "Eliminate repetitive manual tasks and free your team to focus on high-value work.",
    benefits: [
      "Invoice and expense processing",
      "Document management and routing",
      "Email and notification workflows",
      "Data entry and migration",
      "Customer onboarding automation",
      "HR and employee workflows",
    ],
    technologies: ["Zapier", "Make (Integromat)", "UiPath", "Power Automate"],
    color: "secondary",
  },
  {
    id: "integration",
    icon: Database,
    title: "System Integration",
    description: "Connect your business tools and create a seamless data flow across your organization.",
    benefits: [
      "CRM integration (Salesforce, HubSpot)",
      "ERP connectivity (SAP, Odoo, Sage)",
      "E-commerce platform integration",
      "Accounting software sync (QuickBooks, Xero)",
      "Custom API development",
      "Real-time data synchronization",
    ],
    technologies: ["REST APIs", "GraphQL", "Webhooks", "iPaaS platforms"],
    color: "secondary",
  },
  {
    id: "ai-insights",
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with intelligent analytics and reporting.",
    benefits: [
      "Custom business dashboards",
      "Predictive analytics and forecasting",
      "Automated report generation",
      "KPI monitoring and alerts",
      "Data visualization",
      "Smart recommendations",
    ],
    technologies: ["Power BI", "Tableau", "Google Data Studio", "Python"],
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
              Automation Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Comprehensive solutions tailored to your business needs. 
              From strategy to execution, we handle everything.
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
