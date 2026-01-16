"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is this a chatbot?",
    answer:
      "No. This is a structured enquiry system. We don't use free-form chatbots that make things up. We ask specific questions, capture structured data, and escalate to humans when needed.",
  },
  {
    question: "What happens if the system doesn't understand an enquiry?",
    answer:
      "If confidence is low or the enquiry is ambiguous, we escalate to a human immediately. We never fake certainty.",
  },
  {
    question: "Can I control what questions get asked?",
    answer:
      "Yes. We work with you to define 2–3 qualification questions tailored to your business. You can update them anytime.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Typical setup takes ~2 weeks, depending on product complexity and integrations. We map your enquiry workflow, configure the system, integrate with your tools, and test thoroughly before going live.",
  },
  {
    question: "Do I need to change my existing tools?",
    answer:
      "No. We integrate with what you already use (email, CRM, spreadsheets, WhatsApp Business, etc.).",
  },
  {
    question: "What if I only get enquiries on one channel?",
    answer:
      "That's fine. You can start with website-only or WhatsApp-only and add the other channel later if needed.",
  },
  {
    question: "What is the Knowledge Layer and when do I need it?",
    answer:
      "The Knowledge Layer is a premium add-on that enables the enquiry system to answer factual questions from your approved documents. You need it if prospects frequently ask detailed product questions (specifications, policies, technical details) that require accurate information from your documentation.",
  },
  {
    question: "How does the Knowledge Layer prevent wrong answers?",
    answer:
      "It uses retrieval-based responses from your approved documents only. If the answer isn't in your documents, the system refuses to respond instead of guessing. Every response includes source references so you can verify correctness.",
  },
  {
    question: "What kind of documents can I use with the Knowledge Layer?",
    answer:
      "Product manuals, technical specifications, warranty policies, pricing sheets, compliance documents — any factual reference material your team uses to answer prospect questions. We help you identify which documents to include during setup.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Questions</h2>
          <p className="text-lg text-muted-foreground">
            Common questions about how the system works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
