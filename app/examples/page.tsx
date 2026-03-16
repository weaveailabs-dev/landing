import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  IncidentAnalysisVisual,
  KnowledgeAssistantVisual,
  PullRequestReviewVisual,
} from "@/components/site/visuals";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Example RAG systems and AI agents built around real workflows, clear grounding, and visible system behavior.",
};

const exampleSections = [
  {
    id: "rag-knowledge-assistant",
    eyebrow: "Example 1",
    title: "RAG Knowledge Assistant",
    description:
      "Upload a PDF, ask a question, and inspect the answer against the cited source.",
    steps: ["Document upload", "Retrieval and ranking", "Grounded answer"],
    ctaLabel: "Talk about a RAG system",
    ctaHref: "/contact",
  },
  {
    id: "github-pr-review-agent",
    eyebrow: "Example 2",
    title: "GitHub PR Review Agent",
    description:
      "The agent reads the diff, checks project rules, and leaves high-signal review notes.",
    steps: ["Open PR", "Analyze diff", "Draft review comments"],
    ctaLabel: "Discuss agent workflows",
    ctaHref: "/contact",
  },
  {
    id: "incident-analysis-agent",
    eyebrow: "Example 3",
    title: "Incident Analysis Agent",
    description:
      "Logs flow in. The system groups failures, drafts the likely cause, and suggests the first fix path.",
    steps: ["Ingest logs", "Cluster failures", "Suggest first response"],
    ctaLabel: "Plan an incident system",
    ctaHref: "/contact",
  },
] as const;

export default function ExamplesPage() {
  return (
    <>
      <section className="section-shell section-space">
        <div className="max-w-3xl space-y-6">
          <p className="eyebrow">Examples</p>
          <h1 className="max-w-[11ch] font-display text-5xl tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Product-shaped systems, not demo flows.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
            Each example shows what the interface does and what the system has
            to prove underneath.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/solutions">
                See solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="rag-knowledge-assistant"
        className="section-shell pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="grid gap-12 xl:grid-cols-[0.84fr_1.16fr] xl:items-start xl:gap-16">
          <div className="max-w-xl space-y-7">
            <p className="eyebrow">{exampleSections[0].eyebrow}</p>
            <h2 className="font-display text-4xl tracking-[-0.05em] text-white sm:text-5xl">
              {exampleSections[0].title}
            </h2>
            <p className="text-lg leading-8 text-slate-200">
              {exampleSections[0].description}
            </p>
            <div className="flex flex-wrap gap-3">
              {exampleSections[0].steps.map((step) => (
                <div
                  key={step}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-100"
                >
                  {step}
                </div>
              ))}
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Documents are chunked, retrieved, ranked, and passed into the
              response layer with source metadata intact.
            </p>
            <Button asChild variant="outline" className="w-full sm:w-fit">
              <Link href={exampleSections[0].ctaHref}>
                {exampleSections[0].ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <KnowledgeAssistantVisual />
        </div>
      </section>

      <section
        id="github-pr-review-agent"
        className="section-shell pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="grid gap-12 xl:grid-cols-[1.08fr_0.92fr] xl:items-start xl:gap-16">
          <PullRequestReviewVisual />
          <div className="max-w-xl space-y-7">
            <p className="eyebrow">{exampleSections[1].eyebrow}</p>
            <h2 className="font-display text-4xl tracking-[-0.05em] text-white sm:text-5xl">
              {exampleSections[1].title}
            </h2>
            <p className="text-lg leading-8 text-slate-200">
              {exampleSections[1].description}
            </p>
            <div className="flex flex-wrap gap-3">
              {exampleSections[1].steps.map((step) => (
                <div
                  key={step}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-100"
                >
                  {step}
                </div>
              ))}
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              The value comes from the workflow around the model: repo context,
              rule lookup, traceable comments, and clear action boundaries.
            </p>
            <Button asChild variant="outline" className="w-full sm:w-fit">
              <Link href={exampleSections[1].ctaHref}>
                {exampleSections[1].ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="incident-analysis-agent"
        className="section-shell pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="grid gap-12 xl:grid-cols-[0.84fr_1.16fr] xl:items-start xl:gap-16">
          <div className="max-w-xl space-y-7">
            <p className="eyebrow">{exampleSections[2].eyebrow}</p>
            <h2 className="font-display text-4xl tracking-[-0.05em] text-white sm:text-5xl">
              {exampleSections[2].title}
            </h2>
            <p className="text-lg leading-8 text-slate-200">
              {exampleSections[2].description}
            </p>
            <div className="flex flex-wrap gap-3">
              {exampleSections[2].steps.map((step) => (
                <div
                  key={step}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-100"
                >
                  {step}
                </div>
              ))}
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Logs, deploy markers, and prior incident notes all feed the
              analysis layer so the summary stays tied to observable behavior.
            </p>
            <Button asChild variant="outline" className="w-full sm:w-fit">
              <Link href={exampleSections[2].ctaHref}>
                {exampleSections[2].ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <IncidentAnalysisVisual />
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="surface-card page-grid p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow">Need A Custom System</p>
              <h2 className="font-display text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                We can shape the workflow around your data and operating model.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                Good production systems are specific. They reflect your data,
                failure modes, review habits, and decision boundaries.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/solutions">
                  Explore solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
