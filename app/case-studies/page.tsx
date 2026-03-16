import type { Metadata } from "next";
import { SectionHeading } from "@/components/site/section-heading";
import { caseStudies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Realistic deployment scenarios for internal knowledge assistants and support automation agents.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-shell section-space">
        <SectionHeading
          eyebrow="Case Studies"
          title="Realistic deployment scenarios."
          description="These are the kinds of problems companies bring when they need systems that work inside production constraints."
          titleTag="h1"
        />
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="surface-card page-grid grid gap-8 p-8 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="space-y-4">
                <p className="eyebrow">Case Study {index + 1}</p>
                <h2 className="font-display text-4xl tracking-[-0.05em] text-white">
                  {study.title}
                </h2>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/65 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Problem
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {study.problem}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/65 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Solution
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {study.solution}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">
                    Outcome
                  </p>
                  <div className="mt-4 grid gap-3">
                    {study.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-slate-100"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
