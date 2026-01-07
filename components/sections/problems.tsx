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
    icon: Clock,
    title: "Missed enquiries outside business hours",
    description:
      "Website form submitted at 11pm. WhatsApp message on Sunday. By Monday, they've moved on.",
  },
  {
    icon: AlertTriangle,
    title: "Slow response times",
    description:
      "Enquiries sit in a queue. Your team is busy. Prospects get impatient. Competitors respond faster.",
  },
  {
    icon: MessageSquareWarning,
    title: "Inconsistent qualification",
    description:
      "Some leads get asked budget. Some don't. Some get follow-up questions. Some fall through the cracks.",
  },
  {
    icon: Unplug,
    title: "Lost context and handoffs",
    description:
      "Prospect explains their need on WhatsApp. Has to repeat everything when transferred to sales. Frustrating.",
  },
  {
    icon: Eye,
    title: "Manual, repetitive work",
    description:
      "Your team answers the same questions, asks the same qualifiers, copies data into spreadsheets. Every single time.",
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
            The enquiry problem
          </h2>
          <p className="text-lg text-muted-foreground">
            For high-consideration products, every missed or delayed enquiry is lost revenue. For most businesses, this translates directly into slower growth and competitive disadvantage.
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
