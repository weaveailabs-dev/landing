"use client";

import Script from "next/script";
import { FormEvent, useEffect, useId, useState } from "react";
import { CalendarDays, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, string>) => void;
      };
    };
  }
}

const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

type SubmissionState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

async function submitFallbackForm(formData: FormData) {
  const payload = {
    name: String(formData.get("name") || ""),
    company: String(formData.get("company") || ""),
    email: String(formData.get("email") || ""),
    problem: String(formData.get("problem") || ""),
  };

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;
    throw new Error(data?.error || "Unable to submit the contact form.");
  }
}

function FallbackContactForm() {
  const [state, setState] = useState<SubmissionState>({ type: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ type: "submitting" });

    try {
      await submitFallbackForm(new FormData(event.currentTarget));
      event.currentTarget.reset();
      setState({
        type: "success",
        message: "Thanks. We have your details and will follow up shortly.",
      });
    } catch (error) {
      setState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit the contact form.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          <span>Name</span>
          <input
            required
            name="name"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/50"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          <span>Company</span>
          <input
            required
            name="company"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/50"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-200">
        <span>Email</span>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/50"
        />
      </label>
      <label className="space-y-2 text-sm text-slate-200">
        <span>What AI problem are you trying to solve?</span>
        <textarea
          required
          name="problem"
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/50"
        />
      </label>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {state.type === "submitting" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          "Schedule a call"
        )}
      </Button>
      {state.type === "success" ? (
        <p className="text-sm text-cyan-200">{state.message}</p>
      ) : null}
      {state.type === "error" ? (
        <p className="text-sm text-rose-200">{state.message}</p>
      ) : null}
    </form>
  );
}

export function HubSpotContactForm() {
  const [isScriptReady, setIsScriptReady] = useState(
    () => typeof window !== "undefined" && Boolean(window.hbspt)
  );
  const targetId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!portalId || !formId || !isScriptReady || !window.hbspt) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target || target.childElementCount > 0) {
      return;
    }

    window.hbspt.forms.create({
      portalId,
      formId,
      target: `#${targetId}`,
    });
  }, [isScriptReady, targetId]);

  return (
    <div className="surface-card page-grid p-6 sm:p-8">
      <div className="mb-6 space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/80">
          Project details
        </p>
        <h2 className="font-display text-3xl tracking-[-0.04em] text-white">
          Tell us what needs to work in production.
        </h2>
        <p className="text-sm leading-7 text-slate-300">
          Share the workflow, the data sources, and the reliability bar. We will
          respond with a practical next step.
        </p>
      </div>
      {portalId && formId ? (
        <>
          <Script
            src="https://js.hsforms.net/forms/embed/v2.js"
            strategy="afterInteractive"
            onLoad={() => setIsScriptReady(true)}
          />
          <div id={targetId} className="hubspot-embed min-h-[440px]" />
        </>
      ) : (
        <FallbackContactForm />
      )}
    </div>
  );
}

export function CalendlyPanel() {
  return (
    <div className="surface-card page-grid flex h-full flex-col overflow-hidden p-6 sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/80">
            Schedule
          </p>
          <h2 className="font-display text-3xl tracking-[-0.04em] text-white">
            Book a working session.
          </h2>
          <p className="text-sm leading-7 text-slate-300">
            Use the calendar to pick a slot for an architecture walkthrough,
            project review, or deployment planning call.
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-100">
          <CalendarDays className="h-5 w-5" />
        </div>
      </div>
      {calendlyUrl ? (
        <iframe
          src={calendlyUrl}
          title="Schedule a call with WeaveAI"
          className="min-h-[520px] w-full flex-1 rounded-[1.4rem] border border-white/10 bg-slate-950/80"
        />
      ) : (
        <div className="flex flex-1 flex-col justify-between rounded-[1.4rem] border border-dashed border-white/15 bg-slate-950/65 p-6">
          <div className="space-y-4 text-sm leading-7 text-slate-300">
            <p>
              Add <code className="rounded bg-white/5 px-1.5 py-0.5">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
              to load the live booking embed here.
            </p>
            <p>
              The layout is ready for a standard scheduling page and scales
              cleanly across desktop and mobile widths.
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
            Typical first call: system scope, source data review, reliability
            constraints, and rollout plan.
          </div>
        </div>
      )}
    </div>
  );
}
