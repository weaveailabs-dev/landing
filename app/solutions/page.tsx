import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  Database,
  FileCheck2,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutions } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Reliable RAG systems and AI workflow agents designed for real production deployment.",
};

const systemLayers = [
  {
    title: "Data and ingestion",
    body: "Document parsing, chunking, metadata, access control, and refresh pipelines.",
    icon: Database,
  },
  {
    title: "Orchestration",
    body: "Prompting, retrieval, tool use, retries, and workflow state that stay inspectable.",
    icon: Workflow,
  },
  {
    title: "Guardrails",
    body: "Confidence thresholds, approvals, safe refusals, and explicit escalation paths.",
    icon: ShieldCheck,
  },
  {
    title: "Evaluation",
    body: "Benchmarks, traces, review queues, and regression checks tied to the workflow.",
    icon: LineChart,
  },
] as const;

const solutionStandards = [
  {
    label: "Grounding",
    value: "Citations, retrieval quality, and source control.",
  },
  {
    label: "Workflow",
    value: "Tools, approvals, handoffs, and bounded actions.",
  },
  {
    label: "Operations",
    value: "Tracing, evals, and regression review before rollout.",
  },
] as const;

const deliveryPrinciples = [
  {
    title: "Retrieval that holds up",
    body: "Hybrid search, reranking, and source-aware responses.",
    icon: Blocks,
  },
  {
    title: "Agents that stay bounded",
    body: "Tool contracts, workflow state, and visible escalation.",
    icon: Workflow,
  },
  {
    title: "Evals before hype",
    body: "Release checks tied to real failures and regressions.",
    icon: FileCheck2,
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <section className="section-shell section-space">
        <div className="max-w-4xl space-y-6">
          <p className="eyebrow">Solutions</p>
          <h1 className="max-w-[11ch] font-display text-5xl tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Two systems. One reliability bar.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            We build retrieval systems for trusted answers and workflow agents
            for operational work. Both are designed to stay inspectable after
            launch.
          </p>
        </div>
      </section>

      <section className="section-shell pb-14 sm:pb-16 lg:pb-20">
        <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-3 sm:p-6">
          {solutionStandards.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.25rem] border border-white/8 bg-slate-950/35 px-4 py-4 sm:min-h-[132px]"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              id={solution.title.toLowerCase().replace(/\s+/g, "-")}
              className="surface-card page-grid flex h-full flex-col overflow-hidden p-8 sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-100">
                    {index === 0 ? (
                      <Database className="h-5 w-5" />
                    ) : (
                      <Bot className="h-5 w-5" />
                    )}
                  </div>
                  <div className="space-y-3">
                    <h2 className="max-w-[12ch] font-display text-3xl tracking-[-0.05em] text-white sm:text-[2rem]">
                      {solution.title}
                    </h2>
                    <p className="max-w-xl text-lg leading-8 text-slate-200">
                      {solution.description}
                    </p>
                  </div>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-400 sm:block">
                  {index === 0 ? "Knowledge systems" : "Operational agents"}
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  Common use cases
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {solution.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-base leading-7 text-slate-100"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-5 text-base leading-8 text-slate-100">
                {index === 0
                  ? "We design retrieval, ranking, citation, and abstention so answers stay grounded in the right source."
                  : "We design agent workflows with explicit tools, approval points, and handoff rules so automation stays predictable."}
              </div>

              <Button asChild variant="outline" className="mt-8 w-full sm:w-fit">
                <Link href={solution.ctaHref}>
                  {solution.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-2xl space-y-5">
            <p className="eyebrow">System Design</p>
            <h2 className="section-title max-w-[14ch]">
              The production stack sits under every deployment.
            </h2>
            <p className="section-copy">
              The visible interface is only the surface. Reliability comes from
              the system layers underneath.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {systemLayers.map((layer) => (
              <div key={layer.title} className="surface-card page-grid p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-100">
                  <layer.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl tracking-[-0.04em] text-white">
                  {layer.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-200">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="surface-card page-grid overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(360px,0.9fr)] lg:items-center lg:gap-10">
            <div className="space-y-4">
              <p className="eyebrow">Build The Right System</p>
              <h2 className="font-display text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                Retrieval, agent design, and evaluation should ship together.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-200">
                We scope the workflow, define the reliability bar, and ship the
                operating layer with the product surface.
              </p>
            </div>
            <div className="grid gap-4">
              {deliveryPrinciples.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-100">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl tracking-[-0.04em] text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 max-w-md text-base leading-7 text-slate-200">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
