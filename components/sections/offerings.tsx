"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
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
