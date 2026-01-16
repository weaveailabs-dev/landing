/**
 * WeaveAI Deterministic System Examples
 * 
 * Production-grade code demonstrating:
 * - Temperature=0 LLM calls
 * - Retrieval-first architecture
 * - Zero-hallucination refusal logic
 * - Rule-based qualification
 * - Content hash references
 * 
 * Philosophy: Deterministic, not generative. Retrieval, not invention.
 */

// ============================================================================
// 1. DETERMINISTIC LLM CALL (Temperature=0)
// ============================================================================

interface DeterministicLLMConfig {
  model: string;
  temperature: 0; // ALWAYS 0 - no randomness
  max_tokens: number;
  top_p?: never; // Explicitly disallow sampling parameters
  frequency_penalty?: never;
  presence_penalty?: never;
}

/**
 * Deterministic LLM call with strict configuration
 * No retries, no fallbacks, no sampling
 */
async function callDeterministicLLM(
  prompt: string,
  systemPrompt: string
): Promise<string> {
  const config: DeterministicLLMConfig = {
    model: "gpt-4",
    temperature: 0, // Deterministic output
    max_tokens: 500,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      ...config,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`LLM call failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// ============================================================================
// 2. RETRIEVAL RETURNS REFERENCES ONLY (Content Hash Architecture)
// ============================================================================

interface DocumentReference {
  ref_id: string; // Unique reference identifier
  content_hash: string; // SHA-256 hash of content
  chunk_index: number; // Position in document
  metadata: {
    document_name: string;
    section: string;
    last_updated: string;
  };
}

interface RetrievalResult {
  references: DocumentReference[];
  query: string;
  timestamp: string;
}

/**
 * Retrieval returns ONLY references, never content
 * Content is fetched separately using content_hash
 */
async function retrieveReferences(
  query: string,
  topK: number = 3
): Promise<RetrievalResult> {
  // Vector search returns references only
  const response = await fetch(`${process.env.VECTOR_DB_URL}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      top_k: topK,
      return_content: false, // CRITICAL: Never return content in search
    }),
  });

  const data = await response.json();

  return {
    references: data.results.map((r: any) => ({
      ref_id: r.id,
      content_hash: r.hash,
      chunk_index: r.chunk_idx,
      metadata: r.metadata,
    })),
    query,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Fetch content ONLY when needed, using content_hash
 */
async function fetchContentByHash(contentHash: string): Promise<string> {
  const response = await fetch(
    `${process.env.CONTENT_STORE_URL}/content/${contentHash}`
  );

  if (!response.ok) {
    throw new Error(`Content not found for hash: ${contentHash}`);
  }

  return response.text();
}

// ============================================================================
// 3. EMPTY RETRIEVAL → IMMEDIATE REFUSAL
// ============================================================================

const REFUSAL_MESSAGE =
  "I can't confirm that from our approved documentation. I'm escalating this to a team member who can help.";

/**
 * Zero-hallucination refusal logic
 * If no references found, refuse immediately
 */
async function answerWithRetrieval(query: string): Promise<string> {
  const retrieval = await retrieveReferences(query, 3);

  // CRITICAL: Empty retrieval = immediate refusal
  if (retrieval.references.length === 0) {
    return REFUSAL_MESSAGE;
  }

  // Fetch content for references
  const contents = await Promise.all(
    retrieval.references.map((ref) => fetchContentByHash(ref.content_hash))
  );

  // Generate answer using ONLY retrieved content
  const answer = await generateAnswerFromContent(query, contents, retrieval.references);

  return answer;
}

/**
 * Generate answer using ONLY provided content
 * No external knowledge, no invention
 */
async function generateAnswerFromContent(
  query: string,
  contents: string[],
  references: DocumentReference[]
): Promise<string> {
  const systemPrompt = `You are a factual information retrieval system.
Rules:
1. Answer ONLY using the provided content
2. If the answer is not in the content, respond with: "${REFUSAL_MESSAGE}"
3. Never use external knowledge
4. Never make assumptions
5. Be precise and concise`;

  const userPrompt = `Content:
${contents.map((c, i) => `[${i + 1}] ${c}`).join("\n\n")}

Question: ${query}

Answer using ONLY the content above. If not found, refuse.`;

  const answer = await callDeterministicLLM(userPrompt, systemPrompt);

  // Append references for auditability
  const refList = references
    .map((r) => `- ${r.metadata.document_name} (${r.metadata.section})`)
    .join("\n");

  return `${answer}\n\nSources:\n${refList}`;
}

// ============================================================================
// 4. RULE-BASED QUALIFICATION LOGIC
// ============================================================================

interface QualificationQuestion {
  id: string;
  question: string;
  type: "choice" | "text" | "number";
  options?: string[];
  required: boolean;
}

interface QualificationRule {
  field: string;
  operator: "equals" | "contains" | "greater_than" | "less_than";
  value: any;
  action: "qualify" | "disqualify" | "escalate";
}

interface EnquiryData {
  product_interest: string;
  budget?: number;
  timeline?: string;
  use_case?: string;
}

/**
 * Deterministic qualification flow
 * No ML, no guessing - pure rule-based logic
 */
function qualifyEnquiry(
  data: EnquiryData,
  rules: QualificationRule[]
): "qualified" | "disqualified" | "needs_human" {
  for (const rule of rules) {
    const fieldValue = (data as any)[rule.field];

    let matches = false;

    switch (rule.operator) {
      case "equals":
        matches = fieldValue === rule.value;
        break;
      case "contains":
        matches = String(fieldValue).toLowerCase().includes(String(rule.value).toLowerCase());
        break;
      case "greater_than":
        matches = Number(fieldValue) > Number(rule.value);
        break;
      case "less_than":
        matches = Number(fieldValue) < Number(rule.value);
        break;
    }

    if (matches) {
      if (rule.action === "qualify") return "qualified";
      if (rule.action === "disqualify") return "disqualified";
      if (rule.action === "escalate") return "needs_human";
    }
  }

  // Default: needs human review
  return "needs_human";
}

/**
 * Example qualification rules for high-consideration products
 */
const QUALIFICATION_RULES: QualificationRule[] = [
  {
    field: "budget",
    operator: "less_than",
    value: 1000,
    action: "disqualify", // Too low for high-consideration product
  },
  {
    field: "budget",
    operator: "greater_than",
    value: 10000,
    action: "qualify", // High-value prospect
  },
  {
    field: "timeline",
    operator: "equals",
    value: "immediate",
    action: "escalate", // Urgent - needs human
  },
  {
    field: "use_case",
    operator: "contains",
    value: "enterprise",
    action: "qualify", // Enterprise use case
  },
];

// ============================================================================
// 5. SAFE ANSWER GENERATOR (Approved Docs Only)
// ============================================================================

interface ApprovedDocument {
  id: string;
  name: string;
  content_hash: string;
  approved_by: string;
  approved_at: string;
  status: "active" | "archived";
}

/**
 * Only use approved documents for answer generation
 * Maintains audit trail
 */
async function getApprovedDocuments(): Promise<ApprovedDocument[]> {
  const response = await fetch(`${process.env.CONTENT_STORE_URL}/approved`);
  const docs: ApprovedDocument[] = await response.json();

  // Filter only active documents
  return docs.filter((d) => d.status === "active");
}

/**
 * Safe answer generation with approved docs only
 */
async function generateSafeAnswer(query: string): Promise<{
  answer: string;
  sources: ApprovedDocument[];
  audit_trail: {
    query: string;
    timestamp: string;
    documents_used: string[];
  };
}> {
  // 1. Get approved documents
  const approvedDocs = await getApprovedDocuments();
  const approvedHashes = new Set(approvedDocs.map((d) => d.content_hash));

  // 2. Retrieve references
  const retrieval = await retrieveReferences(query, 5);

  // 3. Filter: ONLY use references from approved documents
  const safeReferences = retrieval.references.filter((ref) =>
    approvedHashes.has(ref.content_hash)
  );

  // 4. If no safe references, refuse
  if (safeReferences.length === 0) {
    return {
      answer: REFUSAL_MESSAGE,
      sources: [],
      audit_trail: {
        query,
        timestamp: new Date().toISOString(),
        documents_used: [],
      },
    };
  }

  // 5. Fetch content and generate answer
  const contents = await Promise.all(
    safeReferences.map((ref) => fetchContentByHash(ref.content_hash))
  );

  const answer = await generateAnswerFromContent(query, contents, safeReferences);

  // 6. Build audit trail
  const usedDocs = approvedDocs.filter((doc) =>
    safeReferences.some((ref) => ref.content_hash === doc.content_hash)
  );

  return {
    answer,
    sources: usedDocs,
    audit_trail: {
      query,
      timestamp: new Date().toISOString(),
      documents_used: usedDocs.map((d) => d.id),
    },
  };
}

// ============================================================================
// 6. SLACK/WHATSAPP ESCALATION HANDOFF
// ============================================================================

interface EscalationContext {
  enquiry_id: string;
  prospect_name: string;
  prospect_contact: string;
  channel: "whatsapp" | "website";
  conversation_history: Array<{
    role: "system" | "prospect";
    message: string;
    timestamp: string;
  }>;
  qualification_data: EnquiryData;
  qualification_status: "qualified" | "disqualified" | "needs_human";
  reason: string;
}

/**
 * Escalate to human with full context
 * No information loss, no repetition needed
 */
async function escalateToHuman(context: EscalationContext): Promise<void> {
  const message = formatEscalationMessage(context);

  // Send to Slack
  await fetch(process.env.SLACK_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `🔔 New Escalation: ${context.prospect_name}`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `Enquiry Escalation: ${context.enquiry_id}`,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Prospect:*\n${context.prospect_name}`,
            },
            {
              type: "mrkdwn",
              text: `*Channel:*\n${context.channel}`,
            },
            {
              type: "mrkdwn",
              text: `*Status:*\n${context.qualification_status}`,
            },
            {
              type: "mrkdwn",
              text: `*Reason:*\n${context.reason}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Qualification Data:*\n${formatQualificationData(context.qualification_data)}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Conversation History:*\n${formatConversationHistory(context.conversation_history)}`,
          },
        },
      ],
    }),
  });

  // If WhatsApp, send handoff message
  if (context.channel === "whatsapp") {
    await sendWhatsAppMessage(
      context.prospect_contact,
      "A team member will be in touch shortly to help with your enquiry. They have full context of our conversation."
    );
  }
}

function formatQualificationData(data: EnquiryData): string {
  return Object.entries(data)
    .map(([key, value]) => `• ${key}: ${value}`)
    .join("\n");
}

function formatConversationHistory(
  history: EscalationContext["conversation_history"]
): string {
  return history
    .slice(-5) // Last 5 messages
    .map((msg) => `[${msg.role}] ${msg.message}`)
    .join("\n");
}

function formatEscalationMessage(context: EscalationContext): string {
  return `Escalation: ${context.enquiry_id}
Prospect: ${context.prospect_name}
Status: ${context.qualification_status}
Reason: ${context.reason}`;
}

async function sendWhatsAppMessage(to: string, message: string): Promise<void> {
  // WhatsApp Business API integration
  await fetch(`${process.env.WHATSAPP_API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
    },
    body: JSON.stringify({
      to,
      type: "text",
      text: { body: message },
    }),
  });
}

// ============================================================================
// EXAMPLE USAGE: COMPLETE ENQUIRY FLOW
// ============================================================================

async function handleEnquiry(
  prospectName: string,
  prospectContact: string,
  initialMessage: string,
  channel: "whatsapp" | "website"
): Promise<void> {
  const enquiryId = `ENQ-${Date.now()}`;

  // 1. Ask qualification questions (rule-based)
  const qualificationData: EnquiryData = {
    product_interest: "industrial-equipment",
    budget: 15000,
    timeline: "3-months",
    use_case: "manufacturing",
  };

  // 2. Qualify using rules
  const status = qualifyEnquiry(qualificationData, QUALIFICATION_RULES);

  // 3. If needs human, escalate immediately
  if (status === "needs_human") {
    await escalateToHuman({
      enquiry_id: enquiryId,
      prospect_name: prospectName,
      prospect_contact: prospectContact,
      channel,
      conversation_history: [
        {
          role: "prospect",
          message: initialMessage,
          timestamp: new Date().toISOString(),
        },
      ],
      qualification_data: qualificationData,
      qualification_status: status,
      reason: "High-value prospect requires human attention",
    });
    return;
  }

  // 4. If qualified, try to answer questions using approved docs
  if (status === "qualified") {
    const { answer, sources, audit_trail } = await generateSafeAnswer(
      "What are the warranty terms?"
    );

    console.log("Answer:", answer);
    console.log("Sources:", sources);
    console.log("Audit trail:", audit_trail);
  }

  // 5. Log everything
  await logEnquiry(enquiryId, {
    prospect_name: prospectName,
    status,
    qualification_data: qualificationData,
  });
}

async function logEnquiry(id: string, data: any): Promise<void> {
  // Audit log for compliance and debugging
  await fetch(`${process.env.LOG_SERVICE_URL}/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      timestamp: new Date().toISOString(),
      ...data,
    }),
  });
}

export {
    answerWithRetrieval, callDeterministicLLM, escalateToHuman, generateSafeAnswer, handleEnquiry, qualifyEnquiry, retrieveReferences
};

