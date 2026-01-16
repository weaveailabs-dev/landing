"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "Enquiry" },
  { id: 2, label: "Qualify" },
  { id: 3, label: "Capture" },
  { id: 4, label: "Escalate" },
  { id: 5, label: "Log" },
];

interface SystemFlowProps {
  className?: string;
  activeStep?: number;
}

export function SystemFlow({ className, activeStep }: SystemFlowProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop: Horizontal Flow */}
      <div className="hidden md:flex items-center justify-center gap-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.22 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative flex items-center justify-center px-6 py-4 rounded-lg border-2 transition-all duration-220 ease-out min-w-[120px]",
                activeStep === step.id
                  ? "bg-primary/10 border-primary text-primary font-semibold"
                  : "bg-card border-border hover:border-primary/30 hover:bg-primary/[0.03]"
              )}
            >
              <span className="text-sm font-medium">{step.label}</span>
            </motion.div>
            
            {index < steps.length - 1 && (
              <svg
                width="24"
                height="2"
                viewBox="0 0 24 2"
                fill="none"
                className="flex-shrink-0"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="24"
                  y2="1"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="flex md:hidden flex-col items-stretch gap-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.22 }}
              className={cn(
                "w-full flex items-center justify-center px-6 py-4 rounded-lg border-2 transition-all duration-220",
                activeStep === step.id
                  ? "bg-primary/10 border-primary text-primary font-semibold"
                  : "bg-card border-border"
              )}
            >
              <span className="text-sm font-medium">{step.label}</span>
            </motion.div>
            
            {index < steps.length - 1 && (
              <svg
                width="2"
                height="16"
                viewBox="0 0 2 16"
                fill="none"
                className="flex-shrink-0"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
