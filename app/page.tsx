import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Database,
  LineChart,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import {
  HeroPipeline,
  KnowledgeAssistantVisual,
} from "@/components/site/visuals";
import {
  deliveryPrinciples,
  solutions,
} from "@/lib/site-content";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="section-shell section-space">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="max-w-3xl font-display text-5xl tracking-[-0.06em] text-white sm:text-6xl xl:text-7xl">
                AI agents and RAG systems that work in production.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Most AI projects stop at demos. We build systems teams can rely
                on.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/examples">
                  See example systems
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Answer quality", value: "Verified" },
                { label: "Rollout", value: "Production-ready" },
                { label: "Visibility", value: "Observable" },
              ].map((metric) => (
                <div key={metric.label} className="border-l border-white/10 pl-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <HeroPipeline />
        </div>
      </section>

      <section className="section-shell section-space">
        <SectionHeading
          eyebrow="Solutions"
          title="Two systems we build again and again."
          description="Reliable retrieval and workflow automation solve real work in production."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="surface-card page-grid flex h-full flex-col p-7 hover:border-cyan-300/20 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-100">
                {index === 0 ? (
                  <Database className="h-5 w-5" />
                ) : (
                  <Workflow className="h-5 w-5" />
                )}
              </div>
              <h2 className="mt-6 font-display text-3xl tracking-[-0.04em] text-white">
                {solution.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
                {solution.description}
              </p>
              <div className="mt-6 space-y-3">
                {solution.useCases.slice(0, 3).map((useCase) => (
                  <div key={useCase} className="flex items-start gap-3 text-base text-slate-200">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{useCase}</span>
                  </div>
                ))}
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
          <SectionHeading
            eyebrow="Why It Works"
            title="What changes after the demo."
            description="Reliable systems need grounded context, visible behavior, and clear rules for when to automate and when to escalate."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {deliveryPrinciples.map((principle, index) => (
              <div key={principle.title} className="surface-card page-grid h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-100">
                  {index === 0 ? (
                    <Network className="h-5 w-5" />
                  ) : index === 1 ? (
                    <LineChart className="h-5 w-5" />
                  ) : (
                    <ShieldCheck className="h-5 w-5" />
                  )}
                </div>
                <h2 className="mt-5 font-display text-2xl tracking-[-0.04em] text-white">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Example System"
            title="A RAG assistant should show its sources."
            description="The answer is useful because the user can inspect the evidence behind it."
          />
          <KnowledgeAssistantVisual />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Bot,
                title: "GitHub PR review agent",
                body: "Reads diffs, checks repo rules, and drafts useful review comments.",
              },
              {
                icon: Workflow,
                title: "Incident analysis agent",
                body: "Clusters error signals and proposes the likely first fix path.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="surface-card page-grid flex items-center justify-between gap-6 p-6 hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-100">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl tracking-[-0.04em] text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-200">
                      {item.body}
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" className="shrink-0">
                  <Link href="/examples">
                    See examples
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="surface-card page-grid overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow">Start Here</p>
              <h2 className="font-display text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                If the system has to work after the demo, we should talk.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                We scope the workflow, audit the data path, and design the
                reliability layer before automation starts touching real work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
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
