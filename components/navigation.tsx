"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryNavigation } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  function isActivePath(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={{
            paddingLeft: isScrolled ? 20 : 0,
            paddingRight: isScrolled ? 20 : 0,
            backgroundColor: isScrolled
              ? "rgba(15, 23, 42, 0.56)"
              : "rgba(15, 23, 42, 0)",
            borderColor: isScrolled
              ? "rgba(255, 255, 255, 0.10)"
              : "rgba(255, 255, 255, 0)",
            boxShadow: isScrolled
              ? "0 18px 50px rgba(2, 6, 23, 0.28)"
              : "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className={cn(
            "flex min-h-16 items-center justify-between rounded-full border",
            isScrolled && "backdrop-blur-2xl"
          )}
          style={{
            WebkitBackdropFilter: isScrolled ? "blur(22px) saturate(160%)" : "none",
            backdropFilter: isScrolled ? "blur(22px) saturate(160%)" : "none",
          }}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/weaveAILogo.png"
              alt="WeaveAI"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-contain"
              priority
            />
            <span className="font-display text-xl font-semibold tracking-[-0.04em] text-white">
              WeaveAI
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition",
                  isActivePath(item.href)
                    ? "bg-white/[0.07] text-white"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/contact">Book a call</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 rounded-[1.5rem] border border-white/10 bg-slate-950/75 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto space-y-3 px-4 py-4">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-sm transition",
                    isActivePath(item.href)
                      ? "bg-white/[0.07] text-white"
                      : "text-slate-300 hover:text-white"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book a call
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
