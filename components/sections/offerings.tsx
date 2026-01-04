"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Workflow, Layers, Server, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const offerings = [
  {
    icon: MessageSquare,
    title: "AI Assistant Systems",
    subtitle: "Web + WhatsApp",
    description:
      "Intelligent assistants that understand intent, maintain context, and execute actions across your platforms.",
    forWho: "Customer-facing teams",
    outcome: "Reduce response time. Increase conversion. Scale support without headcount.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    subtitle: "End-to-end processes",
    description:
      "Connect AI to your existing tools. Automate multi-step workflows that require decisions, not just triggers.",
    forWho: "Operations teams",
    outcome: "Eliminate manual handoffs. Reduce errors. Accelerate throughput.",
  },
  {
    icon: Layers,
    title: "AI Orchestration Layer",
    subtitle: "The control plane",
    description:
      "Unified layer for managing multiple AI agents, routing decisions, and maintaining system-wide observability.",
    forWho: "Engineering teams",
    outcome: "One interface. Full control. Complete visibility.",
  },
  {
    icon: Server,
    title: "AI Infrastructure Setup",
    subtitle: "Foundation work",
    description:
      "Embed AI into your stack. Set up vector databases, RAG pipelines, and monitoring infrastructure.",
    forWho: "Technical founders",
    outcome: "Move fast. Build on solid ground. Skip the research phase.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Maintenance",
    subtitle: "Ongoing improvement",
    description:
      "Monitor performance, refine prompts, update workflows, and ensure your AI keeps getting better.",
    forWho: "Growing teams",
    outcome: "Lower costs. Higher accuracy. Continuous improvement.",
  },
];

export function Offerings() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What we build
          </h2>
          <p className="text-lg text-muted-foreground">
            Productized services. Fixed scope. Clear outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl">
                          {offering.title}
                        </CardTitle>
                        <CardDescription className="text-xs uppercase tracking-wider">
                          {offering.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {offering.description}
                    </p>
                    <div className="pt-4 border-t space-y-3">
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          For:
                        </div>
                        <div className="text-sm font-medium">{offering.forWho}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Outcome:
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {offering.outcome}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
