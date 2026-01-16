"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Database, Globe, MessageSquare } from "lucide-react";

const mainOffering = {
  icon: MessageSquare,
  title: "Inbound Enquiry System",
  description:
    "A reliable system that handles enquiries from your website and WhatsApp, qualifies intent with structured questions, and escalates to your team only when needed.",
};

const surfaces = [
  {
    icon: Globe,
    title: "Website enquiries",
    description:
      "Form submissions handled instantly. Clarifying questions asked via email or SMS.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp enquiries",
    description:
      "Direct messages handled in real-time. Clear, professional responses. Structured data capture.",
  },
];

const included = [
  "Instant response on both channels",
  "2–3 qualification questions (customized for your business)",
  "Structured lead creation",
  "Human escalation with full context",
  "Complete audit log of every interaction",
];

export function Offerings() {
  const MainIcon = mainOffering.icon;

  return (
    <section className="py-28 sm:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What you get
          </h2>
          <p className="text-lg text-muted-foreground">
            One system. Two surfaces. Complete coverage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main offering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/50 shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MainIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">
                      {mainOffering.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {mainOffering.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Knowledge Layer - Premium Add-On */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-primary/30">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-2xl">
                        Knowledge Layer
                      </CardTitle>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Premium Add-On
                      </span>
                    </div>
                    <CardDescription className="text-base">
                      Enable the enquiry system to answer factual questions from approved documents with zero hallucinations.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">How it works:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Retrieval-based responses from your approved documents only — no guessing, no invention.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Deterministic generation at temperature zero ensures consistent, correct information every time.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Integrates with the existing qualification flow — factual answers support structured enquiry handling.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Every response includes source references so you can verify what was said and why.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <h4 className="font-semibold text-sm">Example scenarios:</h4>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-muted/50">
                        <p className="text-sm">
                          <span className="font-medium">Physical product:</span> A prospect asks about warranty terms for a specific model. The system retrieves the exact warranty clause from your product documentation and responds with the correct policy.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <p className="text-sm">
                          <span className="font-medium">Digital product:</span> An enquiry asks about API rate limits. The system pulls the precise limits from your technical documentation and provides the factual answer with a reference to the source document.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="p-4 rounded-lg bg-muted/30 border border-muted">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Boundary:</span> If the answer isn't in your approved documents, the system refuses instead of guessing. This prevents hallucinations and maintains trust with prospects.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Surfaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surfaces.map((surface, index) => {
              const Icon = surface.icon;
              return (
                <motion.div
                  key={surface.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{surface.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {surface.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
