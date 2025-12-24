import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Target, Award, Globe, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Your success is our success. We don't just implement tools—we become your automation partner.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "GDPR isn't a checkbox for us—it's our foundation. European values, European infrastructure.",
  },
  {
    icon: Users,
    title: "Accessible Excellence",
    description: "Enterprise-grade solutions without enterprise complexity or pricing.",
  },
];

const certifications = [
  "GDPR Compliant",
  "ISO 27001 (In Progress)",
  "EU-Based Infrastructure",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
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
              About Wobrexx
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Bringing enterprise automation to European SMEs.
              We're on a mission to level the playing field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-6">
                <Target size={16} />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                Bridging Sri Lankan Talent with European Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wobrexx was founded on a simple premise: European businesses demand precision, reliability,
                and data security, while Sri Lanka produces some of the world's finest engineering talent.
                We connect these two worlds.
              </p>
              <p className="text-muted-foreground">
                We are a team of expert developers and automation architects based in Sri Lanka,
                exclusively focused on the European market. We understand GDPR, we respect European
                business hours, and we deliver enterprise-grade code that drives real growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "15+", label: "Years Combined Experience" },
                { number: "150+", label: "Integrations Supported" },
                { number: "6", label: "European Countries Served" },
                { number: "24/7", label: "Monitoring & Support" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-muted/50 rounded-xl p-6 text-center border border-border"
                >
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 text-center border border-border hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-6">
              <Award size={16} />
              <span className="text-sm font-medium">Trust & Compliance</span>
            </div>
            <h2 className="text-3xl font-bold text-card-foreground mb-8">
              Certifications & Standards
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-6 py-3 bg-muted rounded-lg border border-border"
                >
                  <Shield className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-card-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* European Focus */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Remote-First, Quality-Obsessed
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Distance is no barrier to excellence. Our remote-first culture allows us to recruit the top 1%
              of engineering talent in Sri Lanka and deploy them to solve your most complex operational challenges.
              You get world-class development at a competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {/* Remote First */}
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium text-muted-foreground border border-border">
                Remote-First Company
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium text-muted-foreground border border-border">
                Sri Lanka Based
              </span>
            </div>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Work With Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutPage;
