import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WeaveAI | Reliable AI Agents and RAG Systems",
    template: "%s | WeaveAI",
  },
  description:
    "WeaveAI builds production-grade AI agents and RAG systems that companies can actually rely on.",
  keywords: [
    "AI agents",
    "RAG systems",
    "production AI",
    "enterprise search",
    "AI engineering studio",
    "retrieval augmented generation",
    "workflow automation agents",
  ],
  authors: [{ name: "WeaveAI" }],
  creator: "WeaveAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "WeaveAI | Reliable AI Agents and RAG Systems",
    description:
      "Production-grade AI agents and RAG systems for teams that need reliable answers in production.",
    siteName: "WeaveAI",
    images: [
      {
        url: "/weaveAiLabs.png",
        width: 1200,
        height: 630,
        alt: "WeaveAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeaveAI | Reliable AI Agents and RAG Systems",
    description:
      "Production-grade AI agents and RAG systems for companies that need reliability, observability, and real deployment paths.",
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
      <body className={cn("font-sans antialiased")}>
        <div className="page-frame">
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
