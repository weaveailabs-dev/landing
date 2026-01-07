import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://weaveai.dev"),
  title: {
    default: "WeaveAI - Inbound Enquiry System for High-Consideration Products",
    template: "%s | WeaveAI",
  },
  description:
    "Handle website and WhatsApp enquiries instantly. Qualify intent with structured questions. Escalate to humans only when needed.",
  keywords: [
    "enquiry management",
    "lead qualification",
    "WhatsApp enquiries",
    "website enquiries",
    "inbound enquiries",
    "lead qualification system",
    "high-consideration sales",
  ],
  authors: [{ name: "WeaveAI" }],
  creator: "WeaveAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weaveai.dev",
    title: "WeaveAI - Inbound Enquiry System for High-Consideration Products",
    description:
      "Handle website and WhatsApp enquiries instantly. Qualify intent with structured questions. Escalate to humans only when needed.",
    siteName: "WeaveAI",
    images: [
      {
        url: "/weaveAILogo.png",
        width: 1200,
        height: 630,
        alt: "WeaveAI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeaveAI - Inbound Enquiry System for High-Consideration Products",
    description:
      "Handle website and WhatsApp enquiries instantly. Qualify intent with structured questions. Escalate to humans only when needed.",
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
