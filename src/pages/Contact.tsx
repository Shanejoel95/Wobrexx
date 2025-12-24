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
import { Mail, Calendar, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const roleOptions = [
  "CEO/Founder",
  "Operations Manager",
  "IT Manager",
  "Other",
];

const employeeOptions = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "200+ employees",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
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
              Let's Talk Automation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Schedule your free consultation or get in touch.
              We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) => setFormData({ ...formData, role: value })}
                    >
                      <SelectTrigger>
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

                <div className="space-y-2">
                  <Label htmlFor="employees">Company Size</Label>
                  <Select
                    value={formData.employees}
                    onValueChange={(value) => setFormData({ ...formData, employees: value })}
                  >
                    <SelectTrigger>
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

                <div className="space-y-2">
                  <Label htmlFor="automationGoal">What would you like to automate?</Label>
                  <Textarea
                    id="automationGoal"
                    value={formData.automationGoal}
                    onChange={(e) => setFormData({ ...formData, automationGoal: e.target.value })}
                    placeholder="Tell us about your current challenges and automation goals..."
                    rows={4}
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="gdprConsent"
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, gdprConsent: checked as boolean })
                      }
                    />
                    <Label htmlFor="gdprConsent" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to the processing of my personal data according to the{" "}
                      <Link to="/privacy" className="text-secondary hover:underline">
                        Privacy Policy
                      </Link>
                      . You can withdraw your consent at any time. *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketingConsent"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, marketingConsent: checked as boolean })
                      }
                    />
                    <Label htmlFor="marketingConsent" className="text-sm text-muted-foreground leading-relaxed">
                      I'd like to receive updates about Wobrexx services and automation tips.
                      You can unsubscribe at any time.
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Email</h3>
                <a
                  href="mailto:hello@wobrexx.com"
                  className="text-secondary hover:underline font-medium"
                >
                  hello@wobrexx.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond within 24 hours
                </p>
              </div>

              {/* Book a Call */}
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Book a Call</h3>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Free Consultation
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  30-minute strategy session
                </p>
              </div>

              {/* Location */}
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Remote-First Company<br />
                  Based in Sri Lanka
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Serving Global Clients
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
