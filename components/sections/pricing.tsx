"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Foundation",
    setup: "$12,000",
    monthly: "$2,500/mo",
    description: "Single AI assistant or workflow automation",
    included: [
      "Intent classification system",
      "RAG integration (1 data source)",
      "WhatsApp or web integration",
      "Basic monitoring & logging",
      "2 revision cycles",
      "Handoff documentation",
    ],
    notIncluded: [
      "Multi-agent orchestration",
      "Custom infrastructure",
      "Ongoing optimization",
    ],
    popular: false,
  },
  {
    name: "Production",
    setup: "$28,000",
    monthly: "$6,500/mo",
    description: "Multi-agent system with orchestration",
    included: [
      "Everything in Foundation",
      "Multi-agent orchestration layer",
      "RAG integration (unlimited sources)",
      "Web + WhatsApp + internal tools",
      "Advanced monitoring & alerts",
      "Human-in-the-loop workflows",
      "Unlimited revision cycles",
      "4 hours/week optimization",
    ],
    notIncluded: ["24/7 support", "SLA guarantees"],
    popular: true,
  },
  {
    name: "Enterprise",
    setup: "Custom",
    monthly: "Custom",
    description: "Full AI infrastructure and ongoing support",
    included: [
      "Everything in Production",
      "Custom infrastructure setup",
      "Dedicated engineering support",
      "Priority response times",
      "Weekly optimization sessions",
      "Custom SLAs",
      "Multi-system integration",
    ],
    notIncluded: [],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing. No hidden costs. No sales pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex"
            >
              <Card
                className={`flex-1 flex flex-col ${
                  tier.popular
                    ? "border-primary shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4 space-y-1">
                    <div className="text-3xl font-bold">{tier.setup}</div>
                    <div className="text-sm text-muted-foreground">
                      Setup fee
                    </div>
                    <div className="text-2xl font-semibold pt-2">
                      {tier.monthly}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Monthly retainer
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold">
                      What&apos;s included
                    </div>
                    <ul className="space-y-2">
                      {tier.included.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {tier.notIncluded.length > 0 && (
                    <div className="space-y-3 pt-3 border-t">
                      <div className="text-sm font-semibold text-muted-foreground">
                        Not included
                      </div>
                      <ul className="space-y-2">
                        {tier.notIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <p>
            All prices in USD. Monthly retainer covers maintenance, monitoring,
            and optimization. Custom arrangements available for larger scopes.
          </p>
        </div>
      </div>
    </section>
  );
}
