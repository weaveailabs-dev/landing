import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://weaveai.dev"),
  title: {
    default: "WeaveAI - Applied AI Systems That Work Together",
    template: "%s | WeaveAI",
  },
  description:
    "We build AI systems that work together — from intent detection to real-world actions across web, WhatsApp, and internal tools.",
  keywords: [
    "AI systems",
    "AI automation",
    "WhatsApp AI",
    "AI orchestration",
    "workflow automation",
    "applied AI",
    "AI infrastructure",
  ],
  authors: [{ name: "WeaveAI" }],
  creator: "WeaveAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weaveai.dev",
    title: "WeaveAI - Applied AI Systems That Work Together",
    description:
      "We build AI systems that work together — from intent detection to real-world actions across web, WhatsApp, and internal tools.",
    siteName: "WeaveAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeaveAI - Applied AI Systems That Work Together",
    description:
      "We build AI systems that work together — from intent detection to real-world actions across web, WhatsApp, and internal tools.",
    creator: "@weaveai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
