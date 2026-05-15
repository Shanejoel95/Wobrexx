import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What's the typical ROI timeline?",
    answer:
      "Most clients see positive ROI within 3–6 months. Average payback period is 4 months with 200–300% ROI in the first year.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. Our platform is designed for business users. We handle all technical implementation and provide full training.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer flexible plans tailored to your scope. Pricing depends on the number of automations, platforms, and complexity involved. All engagements include setup, onboarding, and ongoing support. Book a call for a custom quote.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We implement bank-level encryption, strict access controls, and regular security audits across every system we build. Security is engineered in from day one — not bolted on after.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment, no questions asked.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We integrate with 150+ popular business tools and can build custom integrations for proprietary systems.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <span className="text-[11px] font-semibold text-secondary tracking-[0.18em] uppercase block mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Common<br />questions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Everything you need to know about working with Wobrexx. Can't
              find an answer?{" "}
              <a
                href="/contact"
                className="text-secondary hover:underline underline-offset-2"
              >
                Reach out to us.
              </a>
            </p>
          </motion.div>

          {/* Right: accordion */}
          <div className="lg:col-span-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-border last:border-b-0"
              >
                <button
                  className="w-full py-6 flex items-start justify-between text-left gap-5 focus:outline-none group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`text-base font-medium transition-colors ${
                      openIndex === index
                        ? "text-foreground"
                        : "text-foreground/75 group-hover:text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      openIndex === index
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={11} />
                    ) : (
                      <Plus size={11} />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
