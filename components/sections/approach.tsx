"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SystemFlowDemo } from "@/components/ui/system-flow-demo";
import { motion } from "framer-motion";
import { CheckCircle, Database, FileText, MessageSquare, UserCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Enquiry arrives",
    description:
      "Website form or WhatsApp message comes in. Instant acknowledgment. No delays.",
  },
  {
    icon: CheckCircle,
    title: "Intent qualified",
    description:
      "We ask 2–3 structured questions to understand what they need and how serious they are.",
  },
  {
    icon: Database,
    title: "Lead created",
    description:
      "Information captured in a structured format. No more manual data entry.",
  },
  {
    icon: UserCheck,
    title: "Human escalation (when needed)",
    description:
      "If intent is qualified and ready, we loop in your team with full context. No repetition.",
  },
  {
    icon: FileText,
    title: "Everything logged",
    description:
      "Every enquiry, every question, every response tracked. You always know what's happening.",
  },
];

export function Approach() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How the system works
          </h2>
          <p className="text-lg text-muted-foreground">
            One system. Five steps. Every enquiry handled reliably.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Interactive Flow Demo */}
          <div className="mb-16">
            <SystemFlowDemo />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
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
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
