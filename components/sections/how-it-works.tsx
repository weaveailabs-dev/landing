"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, PenTool, Code, Rocket, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & audit",
    description:
      "We map your workflows, identify automation opportunities, and define success metrics. No guesswork.",
    duration: "1-2 weeks",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System design",
    description:
      "Architecture diagrams. Intent taxonomies. Data flows. We document everything before writing code.",
    duration: "1 week",
  },
  {
    number: "03",
    icon: Code,
    title: "Implementation",
    description:
      "Build the system. Integrate with your stack. Test edge cases. Iterate until it works reliably.",
    duration: "3-6 weeks",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment",
    description:
      "Staged rollout. Monitoring in place. Runbooks ready. Hand off or stay involved — your call.",
    duration: "1 week",
  },
  {
    number: "05",
    icon: BarChart,
    title: "Monitoring & iteration",
    description:
      "Track performance. Refine prompts. Fix edge cases. Systems improve over time, not degrade.",
    duration: "Ongoing",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic process. No chaos. No surprises.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xl font-semibold">
                          {step.title}
                        </h3>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
