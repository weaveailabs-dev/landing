"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const fitCriteria = [
  "You sell high-consideration products (not impulse buys)",
  "You get enquiries via website forms and/or WhatsApp",
  "Response time matters (prospects compare multiple options)",
  "Qualifying intent early saves your team time",
  "You want a system, not a chatbot that makes things up",
];

const notFitCriteria = [
  "You sell low-ticket products that don't need qualification",
  "You prefer to manually handle every single enquiry",
  "You need a system live this week (typical setup takes ~2 weeks)",
  "You're looking for a SaaS tool you can configure yourself (we build this custom for you)",
];

export function WhoItsFor() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Who this is for
          </h2>
          <p className="text-lg text-muted-foreground">
            This system works best for specific types of businesses. Here's how to know if it's a fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* This is a fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-primary/30">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">This is a fit if:</h3>
                </div>
                <ul className="space-y-4">
                  {fitCriteria.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* This may not be a fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    This may not be a fit if:
                  </h3>
                </div>
                <ul className="space-y-4">
                  {notFitCriteria.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
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
