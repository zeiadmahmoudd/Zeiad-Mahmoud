// Content sourced from Zeiad Mahmoud's CV. Keep this accurate.

export const profile = {
  name: "Zeiad Mahmoud",
  roles: ["AI Engineer", "Presales & Solution Consultant"],
  title: "AI Engineer and Solution Consultant",
  location: "Ankara, Turkey and Hofuf, KSA",
  relocate: "Willing to relocate",
  email: "zeyaadmmg@gmail.com",
  phone: "+90 506 515 3986",
  linkedin: "https://linkedin.com/in/zeiad-mahmoud-1775431aa",
  linkedinLabel: "linkedin.com/in/zeiad-mahmoud-1775431aa",
  photo: "/zeiad.jpg",
  headline: "Enterprise AI, shipped end to end.",
  subline:
    "AI Engineer and Solution Consultant. I design Databricks pipelines, document understanding, and RAG agents, from strategy to deployment.",
  summary:
    "Advanced AI Engineer and Solution Consultant specializing in Microsoft 365 Copilot, Databricks, and enterprise AI adoption. I design end-to-end data ingestion pipelines and RAG-based AI agents, and drive digital transformation through Copilot Clinics and user enablement. I bridge technical AI architecture with business consulting across governmental and maritime sectors.",
};

export const stats = [
  { value: 10, suffix: "+", label: "Enterprise AI projects" },
  { value: 6, suffix: "", label: "Sectors served" },
  { value: 2, suffix: "", label: "Microsoft certifications" },
  { value: 3, suffix: "", label: "Languages spoken" },
];

// Architecture blueprints for the kinds of solutions Zeiad builds.
export type ArchNode = { icon: string; label: string };
export type Architecture = {
  id: string;
  label: string;
  tagline: string;
  nodes: ArchNode[];
  steps: string[];
  stack: string[];
};

export const architectures: Architecture[] = [
  {
    id: "doc",
    label: "Document understanding",
    tagline: "Turn messy scans and PDFs into clean, validated, queryable data.",
    nodes: [
      { icon: "scan", label: "Scans & PDFs" },
      { icon: "model", label: "Custom DI model" },
      { icon: "shield", label: "Validate + confidence" },
      { icon: "json", label: "Structured JSON" },
      { icon: "search", label: "Search & systems" },
    ],
    steps: [
      "Train custom Azure Document Intelligence models on your document families",
      "Batch-extract with retries and confidence thresholds",
      "Validate fields into a typed JSON schema",
      "Route low-confidence pages to human review",
      "Push structured output into search and downstream systems",
    ],
    stack: ["Azure Document Intelligence", "Python", "Azure AI Search"],
  },
  {
    id: "rag",
    label: "RAG knowledge agent",
    tagline: "Grounded answers from your own documents, with citations and ticketing.",
    nodes: [
      { icon: "source", label: "SharePoint sources" },
      { icon: "embed", label: "Chunk + embed" },
      { icon: "vector", label: "Vector index" },
      { icon: "llm", label: "Grounded LLM" },
      { icon: "answer", label: "Cited answer + ticket" },
    ],
    steps: [
      "Index your policy and knowledge sources as the retrieval layer",
      "Chunk and embed content into a vector store",
      "Retrieve the most relevant context for each question",
      "Ground the model so every answer cites its source",
      "Raise a tracked ticket when a human needs to act",
    ],
    stack: ["Azure OpenAI / Copilot Studio", "Azure AI Search", "Power Automate"],
  },
  {
    id: "data",
    label: "Databricks data pipeline",
    tagline: "Turn raw operational data into clean, analytics-ready tables.",
    nodes: [
      { icon: "ingest", label: "Ingest" },
      { icon: "shield", label: "Clean & validate" },
      { icon: "model", label: "Transform" },
      { icon: "vector", label: "Curated tables" },
      { icon: "analytics", label: "Analytics & reporting" },
    ],
    steps: [
      "Configure clusters and ingest operational data",
      "Clean, validate, and standardize records",
      "Transform with Python and Spark notebooks",
      "Produce curated, analytics-ready tables",
      "Serve dashboards and reporting on top",
    ],
    stack: ["Databricks", "Apache Spark", "Python", "Power BI"],
  },
];

// Skill groups, straight from the CV. This is the first content after the hero.
export const skillGroups: {
  title: string;
  icon: "copilot" | "data" | "microsoft" | "cloud" | "dev" | "consulting";
  skills: string[];
}[] = [
  {
    title: "Copilot & AI strategy",
    icon: "copilot",
    skills: ["Microsoft 365 Copilot", "Copilot Studio", "AI adoption programs", "User enablement", "Prompt engineering"],
  },
  {
    title: "Data & AI engineering",
    icon: "data",
    skills: ["Databricks (clusters, ingestion, notebooks)", "RAG architectures", "LangChain", "LLMs: GPT, DeepSeek, Cohere"],
  },
  {
    title: "Microsoft ecosystem",
    icon: "microsoft",
    skills: ["SharePoint", "Teams", "Power Apps", "Power Automate (RPA)", "Dataverse", "Azure AI Foundry"],
  },
  {
    title: "Cloud & infrastructure",
    icon: "cloud",
    skills: ["Azure cloud services", "Azure Machine Learning", "Docker", "SQL / NoSQL"],
  },
  {
    title: "Development",
    icon: "dev",
    skills: ["Python", "TypeScript", "FastAPI", "REST APIs"],
  },
  {
    title: "Consulting & delivery",
    icon: "consulting",
    skills: ["AI solution design", "GTM strategy", "Client needs analysis", "Enterprise POCs", "Technical documentation"],
  },
];

// Simple Icons CDN slugs. Only tools Zeiad actually uses. Component falls
// back to a wordmark if a slug 404s.
export const techLogos: { slug: string; label: string }[] = [
  { slug: "microsoftazure", label: "Azure" },
  { slug: "databricks", label: "Databricks" },
  { slug: "python", label: "Python" },
  { slug: "typescript", label: "TypeScript" },
  { slug: "fastapi", label: "FastAPI" },
  { slug: "langchain", label: "LangChain" },
  { slug: "docker", label: "Docker" },
  { slug: "openai", label: "OpenAI" },
  { slug: "sharepoint", label: "SharePoint" },
  { slug: "apachespark", label: "Spark" },
];

export const experience = {
  company: "Mannai Technologies, Microsoft Hub",
  role: "AI and Automation Engineer",
  period: "2024 - Present",
  summary:
    "Completed AI projects, consultations, and proofs of concept for governmental and large enterprise sectors. Specific engagements stay confidential; below is the kind of work I deliver and the organizations I have served.",
  // General capabilities only - no client-specific project details.
  highlights: [
    {
      title: "Microsoft 365 Copilot adoption",
      body: "Embed Copilot into business workflows and run Copilot Clinics to lift productivity and value realization.",
      tags: ["Microsoft 365 Copilot", "Enablement"],
    },
    {
      title: "Databricks data platforms",
      body: "Stand up the full lifecycle for operational data: environment, clusters, and ingestion through Python and Spark notebooks.",
      tags: ["Databricks", "Python", "Spark"],
    },
    {
      title: "RAG agents & document understanding",
      body: "Build grounded agents and document pipelines integrated with SharePoint, with citations and ticketing.",
      tags: ["Copilot Studio", "RAG", "Document AI"],
    },
    {
      title: "Automation & integration",
      body: "Design custom connectors and automate workflows across the Microsoft 365 ecosystem with Power Automate and RPA.",
      tags: ["Power Automate", "RPA", "Connectors"],
    },
    {
      title: "AI presales & delivery",
      body: "Run technical demos, build go-to-market strategies, and manage governance and handover through to deployment.",
      tags: ["Presales", "GTM", "Governance"],
    },
    {
      title: "Proofs of concept",
      body: "Scope and deliver AI proofs of concept for public-sector and large enterprise clients.",
      tags: ["POCs", "Solution design"],
    },
  ],
  // Sectors / organizations served (names only, kept high level).
  clients: ["MoL", "MEC", "HBKU", "Nakilat", "CGB", "QAPCO", "and more"],
};

export const certifications = [
  { code: "AI-102", name: "Azure AI Engineer Associate", issuer: "Microsoft Certified", year: "2026" },
  { code: "AI-900", name: "Azure AI Fundamentals", issuer: "Microsoft Certified", year: "2025" },
];

export const education = [
  { school: "OSTİM Teknik University, Ankara", detail: "Bachelor in Computer Engineering" },
  { school: "Future Vision International School", detail: "American Diploma" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Native" },
  { name: "Turkish", level: "Intermediate" },
];

// Interactive showcase: AI use cases Zeiad can build. Forward-looking
// capability, filterable by sector. icon maps to a lucide icon in the component.
export type UseCaseCategory =
  | "Government"
  | "Energy & Maritime"
  | "Education"
  | "Banking & Finance"
  | "Healthcare"
  | "Enterprise";

export const useCaseCategories: UseCaseCategory[] = [
  "Government",
  "Energy & Maritime",
  "Education",
  "Banking & Finance",
  "Healthcare",
  "Enterprise",
];

export type UseCase = {
  id: string;
  category: UseCaseCategory;
  icon: string;
  title: string;
  blurb: string;
  stack: string[];
  impact: string;
};

export const useCases: UseCase[] = [
  {
    id: "citizen-assistant",
    category: "Government",
    icon: "agent",
    title: "Citizen services assistant",
    blurb: "A bilingual (Arabic and English) assistant that answers service and policy questions from official sources and raises a tracked request when a human is needed.",
    stack: ["Copilot Studio", "Azure AI Search", "Power Automate"],
    impact: "24/7 self-serve, fewer call-center tickets",
  },
  {
    id: "doc-digitization",
    category: "Government",
    icon: "doc",
    title: "Legacy records digitization",
    blurb: "Custom Azure Document Intelligence models turn decades of scanned forms and licences into clean, searchable, validated data.",
    stack: ["Azure Document Intelligence", "Python", "Azure Search"],
    impact: "Searchable archive, manual entry removed",
  },
  {
    id: "compliance-audit",
    category: "Government",
    icon: "shield",
    title: "Compliance & audit automation",
    blurb: "AI reviews documents against policy, flags gaps, and drafts audit-ready reports with a full traceable trail.",
    stack: ["Azure OpenAI", "Power Automate", "SharePoint"],
    impact: "Faster audits, consistent oversight",
  },
  {
    id: "predictive-maintenance",
    category: "Energy & Maritime",
    icon: "gauge",
    title: "Predictive maintenance",
    blurb: "Databricks pipelines learn from equipment telemetry to predict failures before they cause unplanned downtime.",
    stack: ["Databricks", "MLflow", "Apache Spark"],
    impact: "Less downtime, planned interventions",
  },
  {
    id: "fleet-analytics",
    category: "Energy & Maritime",
    icon: "chart",
    title: "Fleet & operations analytics",
    blurb: "Databricks pipelines that unify operational data into analytics-ready tables and live dashboards for fleet-level decisions.",
    stack: ["Databricks", "Spark", "Power BI"],
    impact: "One source of truth, faster decisions",
  },
  {
    id: "hse-assistant",
    category: "Energy & Maritime",
    icon: "safety",
    title: "HSE & safety assistant",
    blurb: "A grounded assistant over safety manuals and procedures, with guided incident logging from the field.",
    stack: ["Copilot Studio", "RAG", "Power Apps"],
    impact: "Faster answers, better incident capture",
  },
  {
    id: "academic-advisor",
    category: "Education",
    icon: "advisor",
    title: "Autonomous academic advisor",
    blurb: "A multi-agent advisor that reasons across program rules and prerequisites and guides students through a custom chat UI.",
    stack: ["FastAPI", "Multi-agent", "RAG"],
    impact: "Always-on, personalized guidance",
  },
  {
    id: "student-helpdesk",
    category: "Education",
    icon: "agent",
    title: "Student & HR helpdesk copilot",
    blurb: "A grounded helpdesk over SharePoint that answers FAQs, cites the source, and submits tickets for anything that needs a human.",
    stack: ["Copilot Studio", "SharePoint", "RAG"],
    impact: "Deflects repetitive questions",
  },
  {
    id: "research-assistant",
    category: "Education",
    icon: "search",
    title: "Research knowledge assistant",
    blurb: "Semantic search across papers, grants, and internal knowledge so researchers find and synthesize faster.",
    stack: ["Azure AI Search", "RAG", "Azure OpenAI"],
    impact: "Faster literature and grant discovery",
  },
  {
    id: "copilot-adoption",
    category: "Enterprise",
    icon: "adoption",
    title: "Microsoft 365 Copilot adoption",
    blurb: "An adoption program with Copilot Clinics, prompt libraries, and governance so teams actually realize the value.",
    stack: ["Microsoft 365 Copilot", "Enablement", "Governance"],
    impact: "Measurable productivity gains",
  },
  {
    id: "invoice-automation",
    category: "Enterprise",
    icon: "invoice",
    title: "Invoice & PO processing",
    blurb: "Document Intelligence plus RPA reads invoices and purchase orders and posts them into the system with human review on exceptions.",
    stack: ["Document Intelligence", "Power Automate", "RPA"],
    impact: "Hours of manual entry removed",
  },
  {
    id: "email-triage",
    category: "Enterprise",
    icon: "mail",
    title: "Email triage & routing agent",
    blurb: "An agent that classifies, prioritizes, and routes inbound email and drafts replies for the routine cases.",
    stack: ["Azure OpenAI", "Power Automate", "Outlook"],
    impact: "Faster response, less inbox load",
  },
  {
    id: "supply-agents",
    category: "Enterprise",
    icon: "agents",
    title: "Multi-agent process optimizer",
    blurb: "Cooperating agents that monitor, simulate, and recommend actions across a process such as procurement or supply.",
    stack: ["Azure AI Foundry", "Semantic Kernel", "Python"],
    impact: "Explainable, network-wide decisions",
  },
  {
    id: "translation-assistant",
    category: "Government",
    icon: "translate",
    title: "Bilingual service translator",
    blurb: "Real-time Arabic and English translation and localization for public services, forms, and citizen communications.",
    stack: ["Azure AI Translator", "Azure OpenAI", "Power Apps"],
    impact: "Accessible services in both languages",
  },
  {
    id: "case-triage",
    category: "Government",
    icon: "flow",
    title: "Case intake & triage",
    blurb: "Classify and route incoming citizen cases and applications, extracting key fields and flagging priority items.",
    stack: ["Azure OpenAI", "Power Automate", "Document Intelligence"],
    impact: "Faster routing, no lost cases",
  },
  {
    id: "kyc-onboarding",
    category: "Banking & Finance",
    icon: "doc",
    title: "KYC & onboarding automation",
    blurb: "Read IDs and onboarding documents, verify fields, and auto-fill records with human review only on exceptions.",
    stack: ["Document Intelligence", "Power Automate", "RPA"],
    impact: "Faster onboarding, fewer errors",
  },
  {
    id: "fraud-detection",
    category: "Banking & Finance",
    icon: "fraud",
    title: "Fraud & anomaly detection",
    blurb: "Databricks models score transactions for anomalies in near real time and surface the cases that need a human.",
    stack: ["Databricks", "MLflow", "Spark"],
    impact: "Catch anomalies before they cost",
  },
  {
    id: "banking-assistant",
    category: "Banking & Finance",
    icon: "agent",
    title: "Policy & product assistant",
    blurb: "A grounded assistant that answers staff and customer questions from product, policy, and compliance documents.",
    stack: ["Copilot Studio", "Azure AI Search", "RAG"],
    impact: "Consistent, cited answers",
  },
  {
    id: "clinical-summaries",
    category: "Healthcare",
    icon: "clinical",
    title: "Clinical document summaries",
    blurb: "Summarize and structure clinical notes and reports so staff find the key information in seconds.",
    stack: ["Azure OpenAI", "Document Intelligence", "RAG"],
    impact: "Less time reading, more time caring",
  },
  {
    id: "patient-assistant",
    category: "Healthcare",
    icon: "patient",
    title: "Patient services assistant",
    blurb: "A bilingual assistant for appointments, FAQs, and guidance, grounded in approved health information.",
    stack: ["Copilot Studio", "RAG", "Power Automate"],
    impact: "24/7 guidance, lighter front desk",
  },
  {
    id: "records-digitization",
    category: "Healthcare",
    icon: "doc",
    title: "Medical records digitization",
    blurb: "Turn scanned and paper medical records into structured, searchable data with validation and confidence scores.",
    stack: ["Document Intelligence", "Python", "Azure Search"],
    impact: "Searchable records, less manual entry",
  },
  {
    id: "contract-review",
    category: "Enterprise",
    icon: "contract",
    title: "Contract review assistant",
    blurb: "Extract clauses, compare against your standards, and flag risks across contracts with citations to the source.",
    stack: ["Azure OpenAI", "Document Intelligence", "RAG"],
    impact: "Faster, more consistent reviews",
  },
  {
    id: "field-copilot",
    category: "Enterprise",
    icon: "safety",
    title: "Field engineer copilot",
    blurb: "A mobile assistant over manuals, procedures, and assets so field teams get grounded answers on site.",
    stack: ["Copilot Studio", "RAG", "Power Apps"],
    impact: "Answers in the field, fewer call-backs",
  },
  {
    id: "meeting-intelligence",
    category: "Enterprise",
    icon: "meeting",
    title: "Meeting intelligence",
    blurb: "Summaries, decisions, and action items captured automatically from Teams meetings and pushed to your tools.",
    stack: ["Microsoft 365 Copilot", "Graph API", "Power Automate"],
    impact: "Nothing lost after the meeting",
  },
];
