export const siteUrl = "https://weaveai.dev";

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Examples", href: "/examples" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const homeMetrics = [
  { label: "Grounded answers", value: "Verified" },
  { label: "Deployment target", value: "Production" },
  { label: "System posture", value: "Observable" },
  { label: "Delivery style", value: "Hands-on engineering" },
] as const;

export const homeTrustSignals = [
  "Citations attached to answers",
  "Traceable workflow state",
  "Approval and escalation paths",
  "Evaluations tied to real tasks",
] as const;

export const productionComparison = [
  {
    label: "Context",
    demo: "Single prompt and a small sample dataset.",
    production:
      "Connected sources, retrieval logic, permissions, and freshness rules.",
  },
  {
    label: "Behavior",
    demo: "Looks impressive when the happy path is obvious.",
    production:
      "Handles weak context, edge cases, abstention, and human handoff.",
  },
  {
    label: "Operations",
    demo: "Little visibility once the output is generated.",
    production:
      "Traces, evals, and review loops stay attached after launch.",
  },
  {
    label: "Ownership",
    demo: "Often stops after the prototype works once.",
    production:
      "Engineered to keep working inside the team’s actual workflow.",
  },
] as const;

export const solutions = [
  {
    title: "Reliable RAG Systems",
    description:
      "Turn company knowledge into AI assistants that answer from the right sources, cite their work, and fail safely.",
    useCases: [
      "Internal documentation assistants",
      "Support knowledge copilots",
      "Product documentation search",
      "Enterprise knowledge chat",
    ],
    ctaLabel: "View RAG example",
    ctaHref: "/examples#rag-knowledge-assistant",
  },
  {
    title: "AI Workflow Agents",
    description:
      "Automate repetitive operational workflows with agents that can read context, follow rules, and hand work back to teams cleanly.",
    useCases: [
      "Support ticket triage",
      "GitHub PR review agents",
      "Incident analysis assistants",
      "Lead qualification agents",
    ],
    ctaLabel: "View agent examples",
    ctaHref: "/examples#github-pr-review-agent",
  },
] as const;

export const exampleSystems = [
  {
    id: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant",
    summary:
      "A document-grounded assistant that lets teams upload PDFs, ask follow-up questions, and inspect the exact passages behind every answer.",
    workflow: ["Documents", "Retrieval", "Grounded response"],
  },
  {
    id: "github-pr-review-agent",
    title: "GitHub PR Review Agent",
    summary:
      "An engineering agent that reads the diff, checks project rules, and suggests concrete changes before reviewers spend time on obvious issues.",
    workflow: ["Open PR", "Analyze code", "Suggest improvements"],
  },
  {
    id: "incident-analysis-agent",
    title: "Incident Analysis Agent",
    summary:
      "An operations agent that reads error streams, groups related failures, and drafts a root-cause summary with a likely fix path.",
    workflow: ["Sentry logs", "AI analysis", "Root cause summary", "Suggested fix"],
  },
] as const;

export const caseStudies = [
  {
    title: "Internal Knowledge Assistant",
    problem:
      "Teams could not find accurate information across scattered documentation, handoff notes, and internal docs.",
    solution:
      "We connected internal knowledge sources into a retrieval system with chunking, ranking, and answer citation built into the response layer.",
    outcomes: [
      "Faster support responses",
      "Reduced internal search time",
      "Consistent answers",
    ],
  },
  {
    title: "Support Automation Agent",
    problem:
      "Support teams were buried under repetitive tickets that still needed policy checks and product context before replying.",
    solution:
      "We designed a triage agent that categorizes tickets, retrieves policy context, and drafts replies with clear confidence thresholds.",
    outcomes: [
      "Faster response time",
      "Reduced manual effort",
      "Cleaner escalation paths",
    ],
  },
] as const;

export const deliveryPrinciples = [
  {
    title: "Ground the system",
    body:
      "Good outputs start with good context. We design retrieval, memory, tool use, and decision boundaries before prompt tuning.",
  },
  {
    title: "Measure it in the open",
    body:
      "Every system needs evals, traces, and failure modes you can inspect. We build those in from day one.",
  },
  {
    title: "Ship where the work happens",
    body:
      "The best agent is the one that fits the workflow. We integrate with docs, support queues, GitHub, and internal ops systems.",
  },
] as const;

export const founders = [
  {
    name: "Pulkit Verma",
    role: "Technical Lead",
    bio:
      "Pulkit leads engineering for reliable AI systems and production AI infrastructure. His background spans scalable software systems, RAG architectures, and deployment pipelines that have to keep working after launch.",
    focusAreas: ["RAG systems", "AI agents", "AI infrastructure"],
  },
  {
    name: "Somya Gupta",
    role: "Partnerships and Delivery",
    bio:
      "The co-founder leads outreach, partnerships, and client relationships. That includes scoping, rollout planning, and keeping production deployments aligned with real business constraints.",
    focusAreas: [
      "Client partnerships",
      "Delivery planning",
      "Operational rollout",
    ],
  },
] as const;

export const footerSections = [
  {
    title: "Pages",
    links: primaryNavigation,
  },
  {
    title: "Build focus",
    links: [
      { label: "Reliable RAG", href: "/solutions#reliable-rag-systems" },
      { label: "Workflow agents", href: "/solutions#ai-workflow-agents" },
      { label: "Example systems", href: "/examples" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
