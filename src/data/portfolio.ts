import {
  Activity,
  Blocks,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Network,
  ServerCog,
  TerminalSquare,
  Trophy,
  Workflow,
  Wrench
} from "lucide-react";
import { SiDotnet, SiFastapi, SiFlutter, SiLangchain, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiReact } from "react-icons/si";
import type { ArchitectureItem, Experience, Project, SkillGroup } from "@/lib/types";

export const profile = {
  name: "Abdul Sami Ghuri",
  displayName: "Abdul Sami",
  role: "Backend Engineer | AI Engineer",
  location: "Karachi, Pakistan",
  email: "abdulsamig334@gmail.com",
  phone: "+92 321 2893105",
  github: "https://github.com/abdulsami334",
  linkedin: "https://www.linkedin.com/in/sami-ghouri-2819ba25a/",
  website: "https://notaviq.com",
  resume: "/resume-sami-backend-ai-engineer.pdf",
  headline: "I design clean backend systems and agentic AI workflows that can survive real product usage.",
  intro:
    "Software Engineer focused on ASP.NET Core, FastAPI, Node.js, secure API design, LLM integration, RAG-ready architecture, and production SaaS delivery. Founder of Notaviq and builder of ApplyFlow AI, with hands-on experience taking backend-heavy products from system design through beta deployment.",
  openTo: ["Backend Software Engineer", "Backend & AI Engineer", "Applied AI Engineer", "Agentic AI / LLM Engineer"],
  social: [
    { label: "GitHub", href: "https://github.com/abdulsami334", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sami-ghouri-2819ba25a/", icon: Linkedin },
    { label: "Email", href: "mailto:abdulsamig334@gmail.com", icon: Mail }
  ]
};

export const recruiterSignals = [
  { label: "LLM workflow automation", value: "Agentic", icon: Bot },
  { label: "Merit scholarships", value: "4x", icon: GraduationCap },
  { label: "Director's awards", value: "2x", icon: Trophy },
  { label: "Highest semester GPA", value: "3.9", icon: Activity }
];

export const about =
  "Abdul Sami Ghuri builds backend-first AI products with the discipline of a systems engineer and the urgency of a founder. His strongest work sits where secure APIs, clean/layered architecture, relational data modeling, concurrency handling, LLM workflows, and product delivery meet. He is especially interested in backend roles where AI features need real engineering boundaries, not demo-only glue code.";

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    summary: "APIs, services, auth, business logic, and production reliability.",
    icon: ServerCog,
    skills: ["Python", "C#", "FastAPI", "ASP.NET Core", "EF Core", "Node.js", "Express.js", "RESTful APIs", "JWT Auth", "RBAC"]
  },
  {
    title: "AI Engineering",
    summary: "LLM products with retrieval, agents, summarization, and evaluation-minded workflows.",
    icon: BrainCircuit,
    skills: ["LLM Integration", "RAG", "Agentic Workflows", "Agno", "LangChain", "Groq API", "Hugging Face", "Prompt Engineering"]
  },
  {
    title: "Databases",
    summary: "Relational, document, vector-aware, and performance-conscious data modeling.",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "EF Core", "Schema Design", "Indexing", "Relational Queries"]
  },
  {
    title: "Architecture",
    summary: "Clean boundaries, service decomposition, request lifecycles, and scale paths.",
    icon: Network,
    skills: ["Modular Monolith", "Clean Architecture", "Layered Architecture", "System Design", "API Design", "Concurrency Handling", "Microservices-Ready Boundaries"]
  },
  {
    title: "Cloud",
    summary: "Lean deployments that keep SaaS products fast, observable, and cost-aware.",
    icon: Cloud,
    skills: ["Vercel", "Render", "Cloudflare", "CI/CD", "Production API Hosting", "Beta Deployment", "Cost-Aware Delivery"]
  },
  {
    title: "Frontend",
    summary: "Enough product UI depth to ship complete SaaS systems without losing backend focus.",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "Product UI Integration"]
  },
  {
    title: "Tools",
    summary: "Engineering hygiene for maintainable teams and measurable quality.",
    icon: Wrench,
    skills: ["Git", "Postman", "Jest", "Playwright", "Jira", "SonarQube", "Copilot", "Codex", "ChatGPT", "Claude", "Gemini"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "10Pearls Shine Program",
    period: "Dec 2025 - Mar 2026",
    logo: "10P",
    summary: "Built full-stack web application features while pushing the backend toward cleaner boundaries, AI integration, and production-bound SaaS quality.",
    achievements: [
      "Built and shipped end-to-end features using Node.js, Express.js, MySQL, and React.js.",
      "Designed modular backend APIs that improved separation of concerns across services.",
      "Integrated LLM-powered features to enhance interaction and automate product workflows.",
      "Enforced quality through unit testing and static analysis with Jest and SonarQube."
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT", "LLMs", "Jest", "SonarQube"]
  },
  {
    role: "Full-Stack Mobile App Developer Intern",
    company: "Matz Solutions Pvt Ltd",
    period: "Jul 2025 - Sep 2025",
    logo: "MS",
    summary: "Delivered Flutter mobile application work backed by API consumption, database integration, authentication flows, and end-to-end debugging.",
    achievements: [
      "Built Flutter mobile UI and implemented REST API consumption for real-time data flows.",
      "Integrated backend APIs with MongoDB and MySQL for application data management.",
      "Owned bug fixing and end-to-end debugging across mobile and backend integration points."
    ],
    technologies: ["Flutter", "Node.js", "SQL", "MongoDB", "APIs", "Production Support"]
  }
];

export const projects: Project[] = [
  {
    title: "Notaviq",
    category: "AI SaaS",
    status: "Live beta",
    description: "An AI-powered knowledge management SaaS for intelligent note management, summarization, semantic tagging, and contextual note conversations.",
    problem: "Knowledge products often look polished but fail when state sync, autosave, authentication, and AI features meet real user behavior.",
    solution: "A full-stack SaaS with a separately hosted production API, secure JWT authentication, account recovery, LLM-powered note intelligence, and synchronized autosave.",
    architecture: "React client on Vercel, Node.js/Express production API, MySQL persistence, JWT auth, email verification, Groq LLM layer, and backend-mediated AI workflows.",
    challenges: ["Rapid edits caused overlapping autosave calls", "Stale writes during concurrent state updates", "Secure authentication and account recovery", "Keeping LLM workflows inside backend boundaries"],
    decisions: ["Fixed write consistency with request debouncing and synchronized state management", "Separated frontend deployment from production API hosting", "Used JWT and email verification for secure account flows", "Prioritized backend reliability before adding more AI surface area"],
    stack: ["React", "Node.js", "Express.js", "MySQL", "Groq API", "JWT", "Email Verification", "Vercel"],
    metrics: ["Live beta", "Active early users", "Production API", "Concurrent autosave fix", "LLM summaries", "Semantic tagging"],
    links: { live: "https://notaviq.com" }
  },
  {
    title: "ApplyFlow AI",
    category: "Backend Systems",
    status: "Solo full-stack platform",
    description: "An AI-powered job application platform with application tracking, analytics, Kanban workflows, resume management, and tested backend flows.",
    problem: "Job seekers need more than a spreadsheet: they need structured application data, workflow visibility, resume assets, and analytics in one reliable system.",
    solution: "A modular ASP.NET Core backend with stateless JWT authentication, normalized PostgreSQL data modeling, RESTful APIs, and a Next.js frontend consuming the system end to end.",
    architecture: "ASP.NET Core modular monolith organized through Controllers, Services, and EF Core repositories, backed by PostgreSQL and consumed by a Next.js/TypeScript/Tailwind frontend.",
    challenges: ["Avoiding premature microservices complexity", "Keeping backend boundaries clean while moving fast solo", "Modeling users, applications, workflow stages, analytics, and resume data", "Testing backend flows with confidence"],
    decisions: ["Chose a modular monolith with microservices-ready boundaries", "Used EF Core with normalized PostgreSQL schema for relational integrity", "Designed JWT-based stateless authentication", "Managed delivery through Jira Scrum and Playwright verification"],
    stack: ["ASP.NET Core", "C#", "PostgreSQL", "Entity Framework Core", "JWT", "Playwright", "Jira", "Next.js", "TypeScript", "Tailwind CSS"],
    metrics: ["21/21 Playwright tests passing", "Modular monolith", "Microservices-ready boundaries", "JWT auth", "Normalized PostgreSQL schema", "Solo delivery"],
    links: { github: "https://github.com/abdulsami334" }
  },
  {
    title: "YouTube AI Analyzer Agent",
    category: "LLM Systems",
    status: "Agentic AI system",
    description: "An autonomous AI agent that extracts YouTube video metadata and generates AI-powered summaries, insights, and task-oriented analysis.",
    problem: "Video content is information-rich but slow to inspect manually, especially when users need structured insights instead of passive viewing.",
    solution: "A Python agent built around Agno and LLM workflows to orchestrate metadata extraction, prompt steps, summarization, and insight generation.",
    architecture: "Python agent workflow with video metadata extraction, prompt orchestration, LLM reasoning steps, summary generation, and structured insight output.",
    challenges: ["Designing useful multi-step agent behavior", "Keeping prompt orchestration understandable", "Turning unstructured video context into recruiter-friendly engineering output"],
    decisions: ["Used Agno to demonstrate agentic workflow design", "Modeled the work as a task automation pipeline instead of a single prompt", "Focused on summaries and insights that expose practical LLM application design"],
    stack: ["Python", "Agno", "LLMs", "Prompt Orchestration", "Agentic Workflows"],
    metrics: ["Autonomous agent workflow", "Metadata extraction", "AI summaries", "Structured insights"],
    links: { github: "https://github.com/abdulsami334" }
  },
  {
    title: "AI Dialogue Summarizer",
    category: "LLM Systems",
    status: "Research-backed build",
    description: "FastAPI summarization service using Hugging Face T5 Transformers for dialogue compression and quick comprehension.",
    problem: "Long conversations are expensive to scan and difficult to convert into useful summaries without model-specific preprocessing.",
    solution: "A Python inference API with optimized preprocessing, beam search decoding, and GPU-aware execution for lower latency.",
    architecture: "React interface, FastAPI backend, preprocessing pipeline, T5 model inference, CUDA/MPS acceleration path, structured summary response.",
    challenges: ["Balancing quality with latency", "Handling concurrent requests", "Improving noisy dialogue preprocessing"],
    decisions: ["Used FastAPI for async-friendly Python serving", "Applied regex preprocessing before model inference", "Tuned beam search for quality and throughput"],
    stack: ["React", "Python", "FastAPI", "Hugging Face", "T5 Transformers", "CUDA", "MPS"],
    metrics: ["15+ concurrent requests", "Sub-second response target", "85% throughput improvement", "15% accuracy improvement"],
    links: { github: "https://github.com/abdulsami334" }
  },
  {
    title: "AI ATS Resume Analyzer",
    category: "Applied AI",
    status: "Recruiting intelligence",
    description: "Resume-to-job matching platform that scores fit, highlights keywords, and produces actionable recommendations.",
    problem: "Manual resume screening is slow, inconsistent, and hard to explain to candidates or hiring teams.",
    solution: "An NLP pipeline using TF-IDF and cosine similarity with a React analysis UI and Node-based PDF processing APIs.",
    architecture: "React frontend, Node.js document ingestion APIs, TF-IDF vectorization, similarity scoring, keyword extraction, recommendation reports.",
    challenges: ["PDF parsing consistency", "Transparent scoring", "Useful recommendations beyond a numeric score"],
    decisions: ["Chose explainable classical NLP for recruiter trust", "Built keyword highlighting into the UI", "Kept scoring fast enough for real-time feedback"],
    stack: ["Python", "React", "Node.js", "NLP", "TF-IDF", "Cosine Similarity", "PDF Processing"],
    metrics: ["92% matching accuracy", "500+ resume/job pairs", "50% review time reduction"],
    links: { github: "https://github.com/abdulsami334" }
  },
  {
    title: "Mosque Locator",
    category: "Backend Systems",
    status: "Location product",
    description: "Geolocation discovery app with spatial search, map integration, and responsive mobile experience.",
    problem: "Users need fast, accurate discovery of nearby mosques with reliable location context and mobile-first navigation.",
    solution: "A Flutter app backed by Node/Express and MongoDB, integrating Google Maps for real-time location accuracy.",
    architecture: "Flutter client, Node.js API, MongoDB geospatial queries, Google Maps integration, offline caching, responsive mobile flows.",
    challenges: ["Spatial query performance", "Location accuracy", "Offline usability", "Mobile load time"],
    decisions: ["Used MongoDB geospatial indexes", "Separated frontend/backend repositories", "Added caching to reduce startup cost"],
    stack: ["Flutter", "Node.js", "Express.js", "MongoDB", "Google Maps API", "Geolocation"],
    metrics: ["30% faster app load", "Real-time location accuracy", "Offline caching"],
    links: { github: "https://github.com/abdulsami334" }
  },
  {
    title: "UrbanEye",
    category: "Backend Systems",
    status: "Service-oriented civic reporting system",
    description: "A smart utility reporting app split across frontend and backend services for user management and report workflows.",
    problem: "Civic issue reporting needs structured submissions, user identity, report lifecycle handling, and service boundaries that can evolve as usage grows.",
    solution: "A multi-repository system with dedicated backend services for user and report domains, plus a client application for reporting workflows.",
    architecture: "Frontend client backed by Node.js/JavaScript services, separated into user-service and report-service repositories to model domain boundaries.",
    challenges: ["Separating user and report responsibilities", "Keeping service APIs coherent across multiple repositories", "Designing workflows beyond a single CRUD backend"],
    decisions: ["Split backend concerns into domain-focused services", "Kept the project suitable for microservices-style growth", "Used repository boundaries to make the system design visible"],
    stack: ["Node.js", "JavaScript", "REST APIs", "Service Boundaries", "Frontend Integration"],
    metrics: ["User service", "Report service", "Multi-repository system", "Domain separation"],
    links: { github: "https://github.com/abdulsami334/UrbanEye-Backend-User-Service" }
  },
  {
    title: "Expense Tracker",
    category: "Backend Systems",
    status: "Full-stack finance utility",
    description: "A personal finance tracking system with separate backend and frontend repositories for expense workflows and data management.",
    problem: "Expense products need reliable transaction capture, clean API boundaries, and a simple interface for repeated daily use.",
    solution: "A backend-first expense tracking build with a dedicated API repository and a separate frontend client consuming the service.",
    architecture: "JavaScript backend API paired with a frontend client, structured as separate repositories to keep data and interface concerns isolated.",
    challenges: ["Modeling expense data cleanly", "Keeping frontend/backend contracts stable", "Designing a small product with production-style separation"],
    decisions: ["Separated API and UI repositories", "Kept backend responsibilities explicit", "Used the project to practice clean data flow across app layers"],
    stack: ["JavaScript", "Node.js", "REST APIs", "Frontend Integration"],
    metrics: ["Separate backend repo", "Separate frontend repo", "Expense workflow API"],
    links: { github: "https://github.com/abdulsami334/Expense-Tracker-Backend" }
  },
  {
    title: "CreditWise Loan Approval",
    category: "Applied AI",
    status: "Machine learning analysis",
    description: "A Jupyter Notebook-based loan approval project exploring credit decisioning and model-driven financial classification.",
    problem: "Loan decisions require structured analysis of applicant data, feature relationships, and model behavior before an approval recommendation can be trusted.",
    solution: "A data science workflow for credit approval analysis using notebook-based experimentation and model evaluation.",
    architecture: "Notebook pipeline for data inspection, feature analysis, model training/evaluation, and approval-oriented output interpretation.",
    challenges: ["Reasoning about financial decision features", "Keeping model output explainable", "Turning notebook experimentation into a clear product story"],
    decisions: ["Presented it as applied AI rather than production SaaS", "Kept it supporting-level because backend/agentic projects are stronger", "Used it to show AI breadth outside LLM systems"],
    stack: ["Jupyter Notebook", "Machine Learning", "Data Analysis", "Credit Decisioning"],
    metrics: ["Applied ML workflow", "Financial classification", "Notebook experimentation"],
    links: { github: "https://github.com/abdulsami334/CreditWise-Loan-Approval" }
  }
];

export const architectureGallery: ArchitectureItem[] = [
  {
    title: "Backend Flow",
    description: "A service-first view of API requests, validation, domain logic, persistence, and response shaping.",
    nodes: ["Client", "REST API", "Auth Middleware", "Controller", "Service", "Repository", "Database"]
  },
  {
    title: "Authentication Flow",
    description: "JWT identity, role checks, recovery flows, and protected resource access.",
    nodes: ["Login", "Credential Check", "JWT Issue", "RBAC Guard", "Protected API", "Audit Trail"]
  },
  {
    title: "LLM Pipeline",
    description: "Backend-mediated LLM calls with prompt shaping, AI note intelligence, semantic tags, and persisted output.",
    nodes: ["User Input", "Prompt Builder", "Backend Boundary", "Groq LLM", "Post Processor", "MySQL"]
  },
  {
    title: "RAG Workflow",
    description: "Retrieval-aware application pattern for context construction and grounded AI responses.",
    nodes: ["Documents", "Chunking", "Embeddings", "Vector Search", "Context Pack", "LLM Response"]
  },
  {
    title: "Request Lifecycle",
    description: "The production path from browser action to durable state with latency and failure boundaries.",
    nodes: ["UI Event", "Debounced Autosave", "REST API", "Validation", "Transaction", "Cache/Edge", "Response"]
  },
  {
    title: "Database Design",
    description: "Relational product entities shaped for users, notes, applications, workflow stages, AI metadata, and analytics.",
    nodes: ["Users", "Auth", "Notes", "Applications", "Stages", "AI Metadata", "Analytics"]
  },
  {
    title: "ApplyFlow Modular Monolith",
    description: "A pragmatic ASP.NET Core architecture that keeps clean boundaries without premature distributed-system overhead.",
    nodes: ["Next.js UI", "ASP.NET Controllers", "Services", "EF Core", "PostgreSQL", "Playwright Tests"]
  },
  {
    title: "Agentic AI Workflow",
    description: "A task-oriented workflow for metadata extraction, prompt orchestration, LLM reasoning, and structured insights.",
    nodes: ["Video URL", "Metadata Extractor", "Agno Agent", "LLM Step", "Summary", "Insights"]
  }
];

export const achievements = [
  { title: "4x Merit Scholarship", detail: "Recognized for sustained academic performance.", icon: GraduationCap },
  { title: "2x Director's Award", detail: "Awarded for exceptional project contributions.", icon: Trophy },
  { title: "Highest Semester GPA: 3.9", detail: "Academic signal supporting consistency and disciplined execution.", icon: Activity },
  { title: "Founder of Notaviq", detail: "Took an AI SaaS product from concept to beta deployment.", icon: Blocks }
];

export const techIcons = [
  SiPython,
  SiFastapi,
  SiDotnet,
  SiNextdotjs,
  SiReact,
  SiLangchain,
  SiMysql,
  SiMongodb,
  SiFlutter,
  TerminalSquare,
  GitBranch,
  Workflow,
  Layers3
];
