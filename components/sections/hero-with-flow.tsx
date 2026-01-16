"use client";

import { Button } from "@/components/ui/button";
import { AnimatedSystemFlowSVG } from "@/components/ui/system-flow-svg";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroWithFlow() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0 -z-10">
        {/* Dot grid pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle, hsl(238 69% 58% / 0.06) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Stop losing{" "}
                <br className="hidden sm:block" />
                <span className="text-primary">
                  high-value enquiries.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                We handle website and WhatsApp enquiries instantly — qualify intent, ask the right questions, and escalate to humans only when needed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button size="lg" className="group">
                See the enquiry system
                <PlayCircle className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                View a live demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Built for businesses selling high-consideration products.
            </p>
          </motion.div>

          {/* Right: System Flow SVG */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-2xl">
              <AnimatedSystemFlowSVG activeStep={2} className="w-full h-auto" />
              
              {/* Optional: System status indicator */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>System operational</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
