"use client";

import { useEffect, useState } from "react";

interface Step {
  id: 1 | 2 | 3 | 4 | 5;
  label: string;
  x: number;
  annotation: {
    title: string;
    description: string;
  };
}

const steps: Step[] = [
  {
    id: 1,
    label: "Enquiry",
    x: 50,
    annotation: {
      title: "Enquiry",
      description: "An enquiry arrives via website or WhatsApp. The system responds instantly.",
    },
  },
  {
    id: 2,
    label: "Qualify",
    x: 200,
    annotation: {
      title: "Qualify",
      description: "2–3 structured questions reduce ambiguity and assess intent.",
    },
  },
  {
    id: 3,
    label: "Capture",
    x: 350,
    annotation: {
      title: "Capture",
      description: "All responses are captured in a structured format. No manual entry.",
    },
  },
  {
    id: 4,
    label: "Escalate",
    x: 500,
    annotation: {
      title: "Escalate",
      description: "High-intent enquiries are routed to a human with full context.",
    },
  },
  {
    id: 5,
    label: "Log",
    x: 650,
    annotation: {
      title: "Log",
      description: "Every interaction is logged for audit and follow-up.",
    },
  },
];

export function SystemFlowDemo() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 5) return 1;
        return (prev + 1) as 1 | 2 | 3 | 4 | 5;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentAnnotation = steps.find((s) => s.id === activeStep)!.annotation;

  return (
    <div
      className="w-full space-y-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* SVG Flow */}
      <div className="relative">
        <svg
          viewBox="0 0 700 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Connecting lines */}
          {steps.slice(0, -1).map((step, index) => {
            const nextStep = steps[index + 1];
            const isActive =
              activeStep === step.id || activeStep === nextStep.id;

            return (
              <line
                key={`line-${step.id}`}
                x1={step.x + 60}
                y1="40"
                x2={nextStep.x - 60}
                y2="40"
                stroke="currentColor"
                strokeWidth="1.5"
                className={
                  isActive
                    ? "text-primary transition-all duration-300"
                    : "text-border opacity-40 transition-all duration-300"
                }
              />
            );
          })}

          {/* Step nodes */}
          {steps.map((step) => {
            const isActive = activeStep === step.id;

            return (
              <g
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                className="cursor-pointer"
              >
                {/* Glow effect for active node */}
                {isActive && (
                  <rect
                    x={step.x - 50}
                    y="20"
                    width="100"
                    height="40"
                    rx="6"
                    fill="hsl(238 69% 58% / 0.15)"
                    className="animate-pulse"
                  />
                )}

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
                  className={
                    isActive
                      ? "text-primary transition-all duration-300"
                      : "text-border opacity-60 transition-all duration-300"
                  }
                />

                {/* Label */}
                <text
                  x={step.x}
                  y="45"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight={isActive ? "600" : "500"}
                  fill="currentColor"
                  className={
                    isActive
                      ? "text-primary transition-all duration-300"
                      : "text-foreground opacity-60 transition-all duration-300"
                  }
                >
                  {step.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Annotation Text */}
      <div className="max-w-2xl mx-auto">
        <div
          key={activeStep}
          className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <h3 className="text-sm font-semibold text-primary">
              Step {activeStep} — {currentAnnotation.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
            {currentAnnotation.description}
          </p>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeStep === step.id
                ? "w-8 bg-primary"
                : "w-1.5 bg-border hover:bg-primary/30"
            }`}
            aria-label={`Go to step ${step.id}`}
          />
        ))}
      </div>
    </div>
  );
}
