import {
  Activity,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
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
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Workflow,
  Wrench
} from "lucide-react";
import { SiDotnet, SiFastapi, SiFlutter, SiLangchain, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiReact } from "react-icons/si";
import type { ArchitectureItem, Experience, Project, SkillGroup } from "@/lib/types";

export const profile = {
  name: "Abdul Sami Ghuri",
  displayName: "Abdul Sami Ghuri",
  role: "Backend & AI Engineer",
  location: "Karachi, Pakistan",
  email: "abdulsamig334@gmail.com",
  phone: "+92 321 2893105",
  github: "https://github.com/abdulsami334",
  linkedin: "https://www.linkedin.com/in/abdul-sami-ghuri",
  website: "https://notaviq.com",
  resume: "/resume-sami-backend-ai-engineer.pdf",
  headline: "I design production backends for AI products that need to be reliable, explainable, and fast.",
  intro:
    "Software Engineer focused on backend systems, agentic AI, RAG workflows, and clean architecture. Founder of Notaviq, an AI knowledge platform built from concept to beta with secure APIs, LLM workflows, and production infrastructure.",
  openTo: ["Backend Software Engineer", "Backend & AI Engineer", "Applied AI Engineer", "Agentic AI / LLM Engineer"],
  social: [
    { label: "GitHub", href: "https://github.com/abdulsami334", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdul-sami-ghuri", icon: Linkedin },
    { label: "Email", href: "mailto:abdulsamig334@gmail.com", icon: Mail }
  ]
};

export const recruiterSignals = [
  { label: "Production uptime", value: "99.9%+", icon: Activity },
  { label: "Active users shipped", value: "80+", icon: BriefcaseBusiness },
  { label: "Manual workflow time saved", value: "70%", icon: Sparkles },
  { label: "Test coverage delivered", value: "85%+", icon: ShieldCheck }
];

export const about =
  "Sami builds backend-first AI products with the discipline of a systems engineer and the urgency of a founder. His work sits where reliable APIs, clean architecture, LLM integrations, and product outcomes meet: secure authentication, database design, inference workflows, deployment pipelines, and the unglamorous reliability work that makes AI software trustworthy in production.";

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    summary: "APIs, services, auth, business logic, and production reliability.",
    icon: ServerCog,
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "ASP.NET Core", "REST APIs", "JWT", "RBAC", "Microservices"]
  },
  {
    title: "AI Engineering",
    summary: "LLM products with retrieval, agents, summarization, and evaluation-minded workflows.",
    icon: BrainCircuit,
    skills: ["RAG Systems", "Agentic AI", "Groq API", "Hugging Face", "T5 Transformers", "LangChain", "Agno", "Prompt Engineering"]
  },
  {
    title: "Databases",
    summary: "Relational, document, vector-aware, and performance-conscious data modeling.",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Aiven MySQL", "SQL", "Embeddings", "Schema Design"]
  },
  {
    title: "Architecture",
    summary: "Clean boundaries, service decomposition, request lifecycles, and scale paths.",
    icon: Network,
    skills: ["Clean Architecture", "System Design", "Distributed Systems", "API Design", "Domain Modeling", "Autosave", "Rate Limits"]
  },
  {
    title: "Cloud",
    summary: "Lean deployments that keep SaaS products fast, observable, and cost-aware.",
    icon: Cloud,
    skills: ["Docker", "Vercel", "Render", "Cloudflare", "CI/CD", "Production Monitoring", "Cost Optimization"]
  },
  {
    title: "Frontend",
    summary: "Enough product UI depth to ship complete SaaS systems without losing backend focus.",
    icon: Code2,
    skills: ["React", "Next.js", "Flutter", "TypeScript", "Responsive UI", "Product UX"]
  },
  {
    title: "Tools",
    summary: "Engineering hygiene for maintainable teams and measurable quality.",
    icon: Wrench,
    skills: ["Git", "Postman", "Jest", "Mocha", "Playwright", "SonarQube", "GitHub Workflows"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "10Pearls Shine Program",
    period: "Dec 2025 - Mar 2026",
    logo: "10P",
    summary: "Built full-stack systems while pushing the backend toward cleaner boundaries, secure auth, GenAI workflows, and measurable quality.",
    achievements: [
      "Reduced technical debt by 35% through Clean Architecture and modular service design.",
      "Architected JWT authentication with role-based access control for secure data handling across services.",
      "Integrated LLM-powered features that automated 60% of repetitive workflows.",
      "Raised quality with Jest/Mocha coverage above 85% and SonarQube analysis."
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT", "LLMs", "Jest", "Mocha", "SonarQube"]
  },
  {
    role: "Software Developer Intern",
    company: "Matz Solutions Pvt Ltd",
    period: "Jul 2025 - Sep 2025",
    logo: "MS",
    summary: "Delivered mobile applications backed by API and database work, with practical exposure to production support and performance tuning.",
    achievements: [
      "Developed 8+ Flutter applications with SQL and MongoDB-backed API integrations.",
      "Optimized database queries and schema design, improving response time by 40%.",
      "Supported deployment and backend maintenance across production services with 99.5% uptime."
    ],
    technologies: ["Flutter", "Node.js", "SQL", "MongoDB", "APIs", "Production Support"]
  }
];

export const projects: Project[] = [
  {
    title: "Notaviq",
    category: "AI SaaS",
    status: "Live beta",
    description: "An AI-powered knowledge management platform for notes, semantic organization, contextual conversations, and productivity workflows.",
    problem: "Knowledge tools often capture information but leave users with manual organization, weak recall, and fragmented context.",
    solution: "A secure SaaS backend with LLM-assisted summaries, auto-titles, semantic tagging, conversations, autosave, and role-aware user flows.",
    architecture: "React client, Node/Express API, JWT auth, MySQL persistence, Groq LLM layer, Vercel/Render deployment, Aiven database, Cloudflare edge.",
    challenges: ["Concurrent autosave without data loss", "LLM response latency", "Cost control for AI features", "Authentication and account recovery"],
    decisions: ["Kept AI services behind backend boundaries", "Used MySQL for durable product data", "Added Cloudflare and infrastructure split for resilience", "Optimized API latency and LLM usage before scaling UI complexity"],
    stack: ["React", "Node.js", "Express.js", "MySQL", "Groq API", "JWT", "Vercel", "Render", "Aiven", "Cloudflare"],
    metrics: ["80+ active users", "70%+ retention", "99.9% uptime", "40% lower API latency", "45% lower costs", "70% less manual note work"],
    links: { live: "https://notaviq.com", caseStudy: "#projects" }
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
  }
];

export const architectureGallery: ArchitectureItem[] = [
  {
    title: "Backend Flow",
    description: "A service-first view of API requests, validation, domain logic, persistence, and observability.",
    nodes: ["Client", "API Gateway", "Auth Middleware", "Controller", "Use Case", "Repository", "Database"]
  },
  {
    title: "Authentication Flow",
    description: "JWT identity, role checks, recovery flows, and protected resource access.",
    nodes: ["Login", "Credential Check", "JWT Issue", "RBAC Guard", "Protected API", "Audit Trail"]
  },
  {
    title: "LLM Pipeline",
    description: "Backend-mediated LLM calls with prompt shaping, cost controls, semantic tags, and persisted output.",
    nodes: ["User Input", "Prompt Builder", "Policy Layer", "Groq LLM", "Post Processor", "MySQL"]
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
    description: "Product entities shaped for users, notes, auth, AI metadata, and future analytics.",
    nodes: ["Users", "Sessions", "Notes", "Tags", "AI Summaries", "Conversations", "Events"]
  }
];

export const achievements = [
  { title: "4x Merit Scholarship", detail: "Recognized for sustained academic performance.", icon: GraduationCap },
  { title: "2x Director's Award", detail: "Awarded for exceptional project contributions.", icon: Trophy },
  { title: "GDG Kolachi Hackathon", detail: "Built across AI/ML and full-stack product challenges.", icon: Bot },
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
