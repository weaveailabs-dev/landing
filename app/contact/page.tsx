import type { Metadata } from "next";
import { CalendlyPanel, HubSpotContactForm } from "@/components/site/contact-form";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a call with WeaveAI or send details about the AI problem your team needs to solve.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-shell section-space">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what needs to work in production."
          description="We can help scope a retrieval system, review an agent workflow, or map out the reliability layer before rollout."
          titleTag="h1"
        />
      </section>

      <section className="section-shell pb-10 sm:pb-12 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <HubSpotContactForm />
          <CalendlyPanel />
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "We start with the workflow and the source data, not just the interface.",
            "We identify the reliability risks before automation touches a live process.",
            "We leave the team with a system that can be inspected and improved.",
          ].map((item) => (
            <div key={item} className="surface-card page-grid p-6 text-sm leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
