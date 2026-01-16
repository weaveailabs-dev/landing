"use client";

import { motion } from "framer-motion";

interface SystemFlowSVGProps {
  activeStep?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

/**
 * Infrastructure-grade system flow visualization
 * Minimal, deterministic, base14-style
 */
export function SystemFlowSVG({ activeStep, className = "" }: SystemFlowSVGProps) {
  const steps = [
    { id: 1, label: "Enquiry", x: 50 },
    { id: 2, label: "Qualify", x: 200 },
    { id: 3, label: "Capture", x: 350 },
    { id: 4, label: "Escalate", x: 500 },
    { id: 5, label: "Log", x: 650 },
  ];

  return (
    <svg
      viewBox="0 0 700 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Connecting lines */}
      {steps.slice(0, -1).map((step, index) => {
        const nextStep = steps[index + 1];
        return (
          <line
            key={`line-${step.id}`}
            x1={step.x + 60}
            y1="40"
            x2={nextStep.x - 60}
            y2="40"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-border"
            opacity="0.5"
          />
        );
      })}

      {/* Step nodes */}
      {steps.map((step) => {
        const isActive = activeStep === step.id;
        
        return (
          <g key={step.id}>
            {/* Node rectangle */}
            <rect
              x={step.x - 50}
              y="20"
              width="100"
              height="40"
              rx="6"
              fill={isActive ? "hsl(238 69% 58% / 0.1)" : "transparent"}
              stroke="currentColor"
              strokeWidth="1.5"
              className={isActive ? "text-primary" : "text-border"}
            />
            
            {/* Label */}
            <text
              x={step.x}
              y="45"
              textAnchor="middle"
              fontSize="13"
              fontWeight={isActive ? "600" : "500"}
              fill="currentColor"
              className={isActive ? "text-primary" : "text-foreground"}
            >
              {step.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Animated version with motion support
 */
export function AnimatedSystemFlowSVG({ activeStep, className = "" }: SystemFlowSVGProps) {
  const steps = [
    { id: 1, label: "Enquiry", x: 50 },
    { id: 2, label: "Qualify", x: 200 },
    { id: 3, label: "Capture", x: 350 },
    { id: 4, label: "Escalate", x: 500 },
    { id: 5, label: "Log", x: 650 },
  ];

  return (
    <motion.svg
      viewBox="0 0 700 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Connecting lines */}
      {steps.slice(0, -1).map((step, index) => {
        const nextStep = steps[index + 1];
        return (
          <motion.line
            key={`line-${step.id}`}
            x1={step.x + 60}
            y1="40"
            x2={nextStep.x - 60}
            y2="40"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-border"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        );
      })}

      {/* Step nodes */}
      {steps.map((step, index) => {
        const isActive = activeStep === step.id;
        
        return (
          <motion.g
            key={step.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Node rectangle */}
            <rect
              x={step.x - 50}
              y="20"
              width="100"
              height="40"
              rx="6"
              fill={isActive ? "hsl(238 69% 58% / 0.1)" : "transparent"}
              stroke="currentColor"
              strokeWidth="1.5"
              className={isActive ? "text-primary" : "text-border"}
            />
            
            {/* Label */}
            <text
              x={step.x}
              y="45"
              textAnchor="middle"
              fontSize="13"
              fontWeight={isActive ? "600" : "500"}
              fill="currentColor"
              className={isActive ? "text-primary" : "text-foreground"}
            >
              {step.label}
            </text>
          </motion.g>
        );
      })}
    </motion.svg>
  );
}
