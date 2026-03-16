import type { Metadata } from "next";
import { SectionHeading } from "@/components/site/section-heading";
import { deliveryPrinciples, founders } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the founders behind WeaveAI and learn how the team approaches production AI systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell section-space">
        <SectionHeading
          eyebrow="About"
          title="WeaveAI is an AI engineering studio."
          description="We build retrieval and agent systems for companies that need real deployment quality, not just a promising interface."
          titleTag="h1"
        />
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <div key={founder.name} className="surface-card page-grid p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                {founder.role}
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white">
                {founder.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {founder.bio}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {founder.focusAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-slate-200"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="How We Work"
            title="The delivery model is practical."
            description="We scope the workflow, inspect the data path, build the system, and stay close to evaluation and rollout until the deployment behaves the way it should."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {deliveryPrinciples.map((principle) => (
              <div key={principle.title} className="surface-card page-grid p-6">
                <h2 className="font-display text-2xl tracking-[-0.04em] text-white">
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
    </>
  );
}
