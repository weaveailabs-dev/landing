"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquareWarning,
  Unplug,
  Clock,
  Eye,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "AI chatbots that hallucinate",
    description:
      "LLMs make things up. No structured output. No guarantee they'll do what you need.",
  },
  {
    icon: Unplug,
    title: "Disconnected tools and workflows",
    description:
      "Chatbot lives in a silo. Data lives elsewhere. Nothing talks to anything.",
  },
  {
    icon: Clock,
    title: "Manual follow-ups and inefficiencies",
    description:
      "Automation stops at the chat window. Humans pick up the rest. Every. Single. Time.",
  },
  {
    icon: Eye,
    title: "No visibility or control",
    description:
      "Can't see what the AI is doing. Can't debug it. Can't improve it. Just hope it works.",
  },
  {
    icon: AlertTriangle,
    title: "Fragile automations that break silently",
    description:
      "One API change. One edge case. Everything fails. You find out when a customer complains.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Problems() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The problems we solve
          </h2>
          <p className="text-lg text-muted-foreground">
            Most AI implementations fail at the edges. We fix that.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.div key={problem.title} variants={item}>
                <Card className="h-full border-muted hover:border-foreground/20 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
