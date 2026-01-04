"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Database, UserCheck, Activity, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const principles = [
  {
    icon: Workflow,
    title: "Deterministic logic + LLMs",
    description:
      "We use LLMs for understanding, not execution. Business logic stays predictable and testable.",
  },
  {
    icon: Database,
    title: "Intent-first systems",
    description:
      "Classify what the user wants. Route to the right workflow. Execute with precision.",
  },
  {
    icon: Activity,
    title: "Context via RAG",
    description:
      "Connect to your data. Retrieve what matters. Give the AI context without retraining.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-loop escalation",
    description:
      "When confidence is low, escalate. Never fake certainty. Always know when to hand off.",
  },
  {
    icon: Activity,
    title: "Observability and control",
    description:
      "Every decision logged. Every action tracked. Full visibility into what your AI is doing.",
  },
];

export function Approach() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our approach
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineering-first AI. Built for reliability, not demos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Flow visualization */}
          <div className="mb-12 p-8 rounded-lg border bg-card">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {["Input", "Intent", "Context", "Execute", "Monitor"].map(
                (step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-1">
                      <div className="relative">
                        <div className="h-16 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                          <span className="text-sm font-medium">{step}</span>
                        </div>
                      </div>
                    </div>
                    {index < 4 && (
                      <ArrowRight className="hidden md:block w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
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
                          <h3 className="font-semibold">{principle.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {principle.description}
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
