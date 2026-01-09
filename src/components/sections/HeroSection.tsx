import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const trustItems = [
  "GDPR Compliant",
  "30-Day Trial",
  "No Credit Card Required",
];

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(220 70% 12%) 0%, hsl(220 55% 22%) 100%)`,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-light/70 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Animated Logo */}
            <motion.img
              src="/logo.png"
              alt="Wobrexx"
              className="h-32 md:h-40 w-auto mb-8 mx-auto lg:mx-0"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium">Launching Soon - Early Bird Discount Available</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              We Design, Build &{" "}
              <span className="text-gradient">Automate Your Systems</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8">
              Websites, custom SaaS, product development, and process automation for solo founders,
              agencies, SMBs, and mid-market teams that need faster, smoother operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="white-outline" size="xl" className="group">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Items */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/70">
                  <Check size={18} className="text-secondary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Floating Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main Dashboard Card */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-card-foreground">Automation Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                    <div className="w-3 h-3 rounded-full bg-warning/60"></div>
                    <div className="w-3 h-3 rounded-full bg-success/60"></div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Tasks Automated", value: "1,247", change: "+23%" },
                    { label: "Time Saved", value: "156h", change: "+18%" },
                    { label: "Cost Saved", value: "€24.5k", change: "+31%" },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                      <p className="text-xl font-bold text-card-foreground">{metric.value}</p>
                      <p className="text-xs text-success">{metric.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-muted/30 rounded-lg p-4 h-32 flex items-end justify-around">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-6 bg-secondary/80 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
              >
                <Check size={16} />
                <span className="text-sm font-medium">Automation Active</span>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-card text-secondary px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 border border-secondary/30"
              >
                <span className="text-lg font-bold">+40%</span>
                <span className="text-sm">Efficiency</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
