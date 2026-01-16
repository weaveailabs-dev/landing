"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HighlightBlockProps {
  children: ReactNode;
  className?: string;
}

export function HighlightBlock({ children, className }: HighlightBlockProps) {
  return (
    <div
      className={cn(
        "relative px-6 py-4 rounded-lg border-l-[3px] border-primary bg-primary/[0.06]",
        className
      )}
    >
      <p className="text-base font-medium text-foreground leading-relaxed">
        {children}
      </p>
    </div>
  );
}
