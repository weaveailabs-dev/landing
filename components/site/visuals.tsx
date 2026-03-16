"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  Database,
  FileSearch,
  GitPullRequest,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

const heroStages = [
  {
    label: "Company Data",
    detail: "Docs, tickets, and internal notes",
    icon: Database,
  },
  {
    label: "Retrieval",
    detail: "Rank the right source context",
    icon: SearchCheck,
  },
  {
    label: "AI Agent",
    detail: "Run prompts, tools, and logic",
    icon: Bot,
  },
  {
    label: "Verified Answer",
    detail: "Return cited answers and handoffs",
    icon: ShieldCheck,
  },
];

const prReviewSteps = [
  {
    title: "Developer opens PR",
    detail: "Read the diff, touched files, and repo rules.",
    icon: GitPullRequest,
  },
  {
    title: "AI agent analyzes code",
    detail: "Check risky changes, missing tests, and style issues.",
    icon: Braces,
  },
  {
    title: "Agent suggests improvements",
    detail: "Draft comments, summary notes, and fix suggestions.",
    icon: Sparkles,
  },
];

const incidentSteps = [
  { title: "Sentry logs", icon: TriangleAlert },
  { title: "AI analysis", icon: Bot },
  { title: "Root cause summary", icon: FileSearch },
  { title: "Suggested fix", icon: ShieldCheck },
];

export function HeroPipeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="surface-card page-grid relative overflow-hidden p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-100">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
          Live system map
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {heroStages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="rounded-[1.4rem] border border-white/10 bg-slate-950/75 p-4"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-cyan-100">{stage.label}</p>
                <p className="text-sm leading-6 text-slate-300">{stage.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function KnowledgeAssistantVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="surface-card page-grid overflow-hidden p-7 sm:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-6">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
            <span>Question input</span>
            <span>PDF uploaded</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-base leading-7 text-slate-200">
            What changed in the new onboarding policy for enterprise support
            accounts?
          </div>
          <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">
              Generated answer
            </p>
            <p className="mt-3 text-base leading-7 text-slate-100">
              Enterprise support accounts now require a named escalation owner,
              a two-hour P1 response target, and a written weekend handoff.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["Policy PDF p.4", "Runbook Appendix p.2"].map((source) => (
              <div
                key={source}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Cited source
                </p>
                <p className="mt-2 text-base leading-7 text-slate-200">{source}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Source excerpts
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              Starting July 1, all enterprise support accounts must assign a
              named escalation owner. Weekend coverage must include a written
              handoff. P1 incidents require an initial response within two hours.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-5 text-base leading-7 text-slate-100">
            Exact lines retrieved from the source document.
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PullRequestReviewVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="surface-card page-grid relative overflow-hidden p-6 sm:p-7"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {prReviewSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="relative rounded-[1.4rem] border border-white/10 bg-slate-950/75 p-5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/25 bg-indigo-300/10 text-indigo-100">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-base font-medium text-slate-100">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function IncidentAnalysisVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="surface-card page-grid overflow-hidden p-6 sm:p-7"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {incidentSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-[1.4rem] border border-white/10 bg-slate-950/75 p-5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-base font-medium text-slate-100">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {index === 0
                  ? "Collect grouped errors, stack traces, and deploy markers."
                  : index === 1
                    ? "Cluster related failures and compare recent changes."
                    : index === 2
                      ? "Draft the likely cause and recent trigger."
                      : "Suggest the first mitigation or rollback path."}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
