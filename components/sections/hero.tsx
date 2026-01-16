"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        {/* Structural SVG - Infrastructure aesthetic */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-[0.03]">
          <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Network nodes and connecting lines */}
            <circle cx="100" cy="100" r="4" fill="currentColor" className="text-primary" />
            <circle cx="300" cy="150" r="4" fill="currentColor" className="text-primary" />
            <circle cx="200" cy="250" r="4" fill="currentColor" className="text-primary" />
            <circle cx="350" cy="300" r="4" fill="currentColor" className="text-primary" />
            <circle cx="150" cy="400" r="4" fill="currentColor" className="text-primary" />
            <circle cx="280" cy="500" r="4" fill="currentColor" className="text-primary" />
            
            <line x1="100" y1="100" x2="300" y2="150" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="300" y1="150" x2="200" y2="250" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="200" y1="250" x2="350" y2="300" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="200" y1="250" x2="150" y2="400" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="150" y1="400" x2="280" y2="500" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="350" y1="300" x2="280" y2="500" stroke="currentColor" strokeWidth="1" className="text-primary" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Stop losing{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">
                high-value enquiries.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We handle website and WhatsApp enquiries instantly — qualify intent, ask the right questions, and escalate to humans only when needed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#how-it-works">
                See the enquiry system
                <PlayCircle className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a href="/flow-demo">
                View a live demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 text-sm text-muted-foreground"
          >
            <p>Built for businesses selling high-consideration products.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
