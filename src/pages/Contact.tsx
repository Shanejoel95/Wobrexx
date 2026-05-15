import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Calendar, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const roleOptions = ["CEO/Founder", "Operations Manager", "IT Manager", "Other"];
const employeeOptions = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "200+ employees",
];

const trustPoints = [
  "We respond within 24 hours",
  "No sales pressure — just honest advice",
  "30-minute call, no commitment required",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    automationGoal: "",
    gdprConsent: false,
    marketingConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gdprConsent) {
      toast({
        title: "Consent Required",
        description: "Please accept the privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      employees: "",
      automationGoal: "",
      gdprConsent: false,
      marketingConsent: false,
    });

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-25 pointer-events-none z-0" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, hsl(28 100% 50% / 0.07) 0%, transparent 65%)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-5">
              Get In Touch
            </span>
            <h1
              className="font-display font-bold text-white leading-[0.93] tracking-tight mb-6 max-w-2xl"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Let's talk<br />automation.
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-md leading-relaxed">
              Tell us what you're working on. We'll respond within 24 hours
              with honest, practical advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-14 lg:gap-20">
            {/* Form — takes 2/3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name <span className="text-secondary">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Smith"
                      className="h-11 rounded-lg border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Work Email <span className="text-secondary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="h-11 rounded-lg border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>

                {/* Company + Role */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name <span className="text-secondary">*</span>
                    </Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme GmbH"
                      className="h-11 rounded-lg border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium text-foreground">
                      Your Role
                    </Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) =>
                        setFormData({ ...formData, role: value })
                      }
                    >
                      <SelectTrigger className="h-11 rounded-lg border-border">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleOptions.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Company size */}
                <div className="space-y-2">
                  <Label htmlFor="employees" className="text-sm font-medium text-foreground">
                    Company Size
                  </Label>
                  <Select
                    value={formData.employees}
                    onValueChange={(value) =>
                      setFormData({ ...formData, employees: value })
                    }
                  >
                    <SelectTrigger className="h-11 rounded-lg border-border">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {employeeOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <Label htmlFor="automationGoal" className="text-sm font-medium text-foreground">
                    What would you like to automate?
                  </Label>
                  <Textarea
                    id="automationGoal"
                    value={formData.automationGoal}
                    onChange={(e) =>
                      setFormData({ ...formData, automationGoal: e.target.value })
                    }
                    placeholder="Tell us about your current challenges and automation goals — the more detail, the better advice we can give."
                    rows={4}
                    className="rounded-lg border-border resize-none focus:border-secondary focus:ring-secondary"
                  />
                </div>

                {/* Consent */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="gdprConsent"
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, gdprConsent: checked as boolean })
                      }
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor="gdprConsent"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      I agree to the processing of my personal data according to the{" "}
                      <Link to="/privacy" className="text-secondary hover:underline underline-offset-2">
                        Privacy Policy
                      </Link>
                      . You can withdraw consent at any time.{" "}
                      <span className="text-secondary">*</span>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="marketingConsent"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          marketingConsent: checked as boolean,
                        })
                      }
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor="marketingConsent"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      I'd like to receive occasional updates about Wobrexx
                      services and automation tips. Unsubscribe anytime.
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold h-12 rounded-lg text-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <ArrowRight size={16} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-1 space-y-0"
            >
              {/* Info panel */}
              <div className="bg-primary rounded-2xl p-7 mb-6">
                <p className="text-[11px] font-semibold text-secondary/80 tracking-[0.18em] uppercase mb-7">
                  Contact Details
                </p>
                <div className="space-y-0">
                  <a
                    href="mailto:hello@wobrexx.com"
                    className="flex items-start gap-4 py-5 border-b border-white/[0.07] group"
                  >
                    <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <p className="text-white/80 text-sm group-hover:text-white transition-colors">
                        hello@wobrexx.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 py-5 border-b border-white/[0.07]">
                    <Calendar className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">
                        Book a Call
                      </p>
                      <p className="text-white/80 text-sm">
                        30-minute strategy session
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pt-5">
                    <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">
                        Location
                      </p>
                      <p className="text-white/80 text-sm">
                        Remote-First · Sri Lanka
                        <br />
                        <span className="text-white/40">Serving global clients</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="space-y-0 border border-border rounded-2xl overflow-hidden">
                {trustPoints.map((point, i) => (
                  <div
                    key={point}
                    className={`flex items-start gap-3 px-5 py-4 ${
                      i < trustPoints.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
