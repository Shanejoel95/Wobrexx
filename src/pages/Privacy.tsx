import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const PrivacyPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <h1 className="text-4xl font-bold text-card-foreground mb-8">Privacy Policy</h1>

            <p className="text-muted-foreground">Last updated: December 2024</p>

            <h2 className="text-2xl font-semibold text-card-foreground mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              At Wobrexx, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, and protect your personal data when you use our website and services.
            </p>

            <h2 className="text-2xl font-semibold text-card-foreground mt-8 mb-4">2. Data We Collect</h2>
            <p className="text-muted-foreground">We collect the following types of data:</p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information (company name, role, size)</li>
              <li>Usage data (how you interact with our website)</li>
              <li>Technical data (IP address, browser type, device information)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-card-foreground mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="text-muted-foreground">We use your data to:</p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-card-foreground mt-8 mb-4">4. Your Rights</h2>
            <p className="text-muted-foreground">Under GDPR, you have the right to:</p>
            <ul className="text-muted-foreground list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-card-foreground mt-8 mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground">
              For any privacy-related questions, please contact us at{" "}
              <a href="mailto:privacy@wobrexx.com" className="text-secondary hover:underline">
                privacy@wobrexx.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
