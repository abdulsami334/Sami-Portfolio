import {
  Activity,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Mic,
  ScanSearch,
  ServerCog,
  Trophy,
  Wrench
} from "lucide-react";
import { SiDocker, SiDotnet, SiFastapi, SiGit, SiMongodb, SiMysql, SiOnnx, SiOpencv, SiPostgresql, SiPytest, SiPython, SiPytorch, SiSharp } from "react-icons/si";
import type { ArchitectureItem, Experience, Project, SkillGroup } from "@/lib/types";

export const profile = {
  name: "Abdul Sami Ghuri",
  displayName: "Abdul Sami",
  role: "AI & Backend Engineer",
  location: "Karachi, Pakistan",
  email: "abdulsamig334@gmail.com",
  phone: "+92 321 2893105",
  github: "https://github.com/abdulsami334",
  linkedin: "https://www.linkedin.com/in/sami-ghouri-2819ba25a/",
  website: "https://sami-portfolio-ebon.vercel.app",
  resume: "/Resume-Abdul-Sami-Ghuri-AI-and-Backend.pdf",
  headline: "I build AI and backend systems that hold up outside the demo: voice agents, computer vision and the APIs around them.",
  intro:
    "Junior AI Developer at ChildLife Foundation, working in Python (FastAPI) and C# (ASP.NET Core, SQL Server). I start from the real-world problem, weigh the trade-offs, and test against real calls, real field images and real users before calling something done.",
  openTo: ["AI Engineer", "Backend Engineer (Python / .NET)", "Forward Deployed Engineer", "Applied AI / Computer Vision"],
  social: [
    { label: "GitHub", href: "https://github.com/abdulsami334", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sami-ghouri-2819ba25a/", icon: Linkedin },
    { label: "Email", href: "mailto:abdulsamig334@gmail.com", icon: Mail }
  ]
};

export const recruiterSignals = [
  { label: "Clinical protocols in the AI voice agent", value: "16", icon: Mic },
  { label: "YOLO11n test mAP50 on CropGuard", value: "0.77", icon: ScanSearch },
  { label: "CGPA, BS Software Engineering", value: "3.59", icon: GraduationCap },
  { label: "Merit scholarships", value: "4x", icon: Trophy }
];

export const about =
  "Abdul Sami Ghuri builds AI and backend systems for people with real problems. At ChildLife Foundation he works with doctors on an AI voice agent that phones parents in Urdu or Punjabi and writes an English summary into the existing .NET EMR. In his final year project he leads AI and backend work on CropGuard AI, a crop disease field scanner. He measures honestly, reports the weak numbers next to the strong ones, and prefers the simplest design that survives production.";

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    summary: "APIs, services and data access in Python and C#.",
    icon: ServerCog,
    skills: ["Python", "C#", "ASP.NET Core", "Entity Framework Core", "FastAPI", "REST APIs", "WebSockets", "JWT", "Clean Architecture"]
  },
  {
    title: "Voice and LLM",
    summary: "Real-time speech pipelines and LLMs wired into existing systems.",
    icon: Bot,
    skills: ["LLM Integration", "Azure OpenAI", "Azure Speech (STT, TTS)", "Infobip Telephony", "Prompt Engineering", "Structured Outputs"]
  },
  {
    title: "Computer Vision and ML",
    summary: "Detection, classification and honest evaluation on field data.",
    icon: BrainCircuit,
    skills: ["YOLO11", "CNNs", "OpenCV", "XGBoost", "ONNX Runtime", "Model Evaluation"]
  },
  {
    title: "Data",
    summary: "Relational schemas shaped around the queries the product runs.",
    icon: Database,
    skills: ["SQL Server", "Azure SQL", "T-SQL Stored Procedures", "PostgreSQL", "MySQL", "MongoDB", "Schema Design"]
  },
  {
    title: "Cloud and Delivery",
    summary: "Getting services deployed, observed and into users' hands.",
    icon: Cloud,
    skills: ["Azure App Service", "Docker", "CI/CD", "Git", "GitHub", "UAT Rollout", "Latency Profiling"]
  },
  {
    title: "Mobile, Testing and Tools",
    summary: "Flutter clients for my APIs, tests that pin behaviour, and AI tools used with review.",
    icon: Wrench,
    skills: ["Flutter", "Dart", "pytest", "xUnit", "Playwright", "SonarQube", "Claude Code", "Codex CLI"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Junior AI Developer",
    company: "ChildLife Foundation",
    period: "Aug 2026 - Present",
    logo: "CLF",
    summary: "Building AI systems with doctors for pediatric care: a Python backend for an AI calling agent, plus C# work in the hospital's ASP.NET EMR.",
    achievements: [
      "Partnered with doctors to automate repetitive pediatric intake: an AI agent phones parents in Urdu or Punjabi, follows 16 clinical question protocols and sends an English summary to the EMR.",
      "Built the FastAPI REST and WebSocket API: endpoints to start and track calls and store records, plus a /media WebSocket that streams call audio through speech to text, LLM and text to speech, with blocking work moved off the event loop.",
      "Secured the API with per-route API keys checked in constant time, allow-listed call IDs against path traversal, and used parameterised SQL throughout.",
      "Designed versioned, append-only config tables in Azure SQL and wrote 6 stored procedures, 4 functions and 2 views with transactions, so staff can change or roll back clinical questions from SSMS; the service reloads new versions within 60 seconds without a restart.",
      "Integrated with the EMR's REST API through background worker threads that take the next patient, place the call, report the outcome and send the summary, with timeouts, retries and crash-safe loops.",
      "Wrote 21 automated test scripts run in isolated temp folders with all external services stubbed, plus a stored-procedure test suite on SQL Server LocalDB.",
      "Verified 3 simultaneous live calls on 3 mobile networks, cut the largest fixed turn delay from 1200 ms to 500 ms, and deployed the service to Azure App Service.",
      "In the C# ASP.NET EMR, fixed the WHO Plan C dehydration fluid calculation that feeds the Azure OpenAI prompt, and the parser that turns the AI's fluid suggestions into order rows."
    ],
    technologies: ["Python", "FastAPI", "WebSockets", "REST APIs", "Azure SQL", "T-SQL", "pyodbc", "Azure OpenAI", "Azure Speech", "Infobip", "Azure App Service", "C#", "ASP.NET"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "10Pearls Shine Program",
    period: "Dec 2025 - Mar 2026",
    logo: "10P",
    summary: "Shipped product features in an Agile Scrum team with code review, CI/CD and quality gates.",
    achievements: [
      "Designed modular REST APIs using Clean Architecture and OOP, with peer code review and CI/CD.",
      "Diagnosed production concurrency issues to root cause through systematic debugging.",
      "Integrated LLM and agentic AI features via the Groq API.",
      "Enforced code quality with unit tests and SonarQube static analysis."
    ],
    technologies: ["REST APIs", "Clean Architecture", "OOP", "LLMs", "Groq API", "SonarQube", "CI/CD", "Agile Scrum"]
  },
  {
    role: "Software Engineer Intern",
    company: "Matz Solutions Pvt Ltd",
    period: "Jul 2025 - Sep 2025",
    logo: "MS",
    summary: "Worked across the mobile-to-backend boundary on API integration and debugging.",
    achievements: [
      "Integrated REST APIs across authentication, real-time data and database layers (MySQL, MongoDB).",
      "Diagnosed mobile-to-backend defects through root cause analysis."
    ],
    technologies: ["REST APIs", "MySQL", "MongoDB", "Debugging"]
  }
];

export const projects: Project[] = [
  {
    title: "AI Calling Assistant",
    category: "Voice AI",
    status: "ChildLife Foundation · in Azure UAT",
    description:
      "A real-time AI voice agent that phones parents in Urdu or Punjabi, runs 16 clinical intake protocols and writes an English summary into the organization's existing .NET EMR.",
    problem:
      "Pediatric intake is repetitive question-and-answer work, and parents have to be reached by phone in Urdu or Punjabi, not through an English web form.",
    solution:
      "An agent that takes the next job from the EMR, calls the parent, follows the right clinical protocol and posts an English summary back, so physician assistants start from a completed history.",
    architecture:
      "EMR queue API (next job, attempt outcome, summary) feeds Python worker threads. Each call goes through Infobip to a FastAPI media server over WebSockets, then Azure Speech to text, Azure OpenAI and Azure Speech text to speech. Call records live in Azure SQL; the service runs on Azure App Service.",
    challenges: [
      "Keeping several live calls responsive inside one server process",
      "Making sure overlapping calls can never mix up summaries",
      "Live calls dropping during testing",
      "A model that might leave out a red-flag symptom"
    ],
    decisions: [
      "Ran blocking SDK calls off the event loop; verified with 3 simultaneous calls on 3 networks",
      "Keyed every record by the call-leg ID",
      "Traced the drops to a dev tunnel (WebSocket close 1005) and moved to Azure App Service",
      "Red-flag URGENT lines are added by code, not left to the model"
    ],
    stack: ["Python", "FastAPI", "WebSockets", "Azure OpenAI", "Azure Speech", "Infobip", "Azure SQL", "Azure App Service", ".NET EMR"],
    metrics: ["16 clinical protocols", "3 simultaneous calls verified", "Turn delay 1200 → 500 ms", "Urdu and Punjabi"],
    links: {},
    note: "Work project · code is private"
  },
  {
    title: "CropGuard AI",
    category: "Computer Vision",
    status: "Final Year Project · Team Lead (AI and Backend)",
    description:
      "A field-scanning system for early crop disease detection across rice, cotton and wheat: a YOLO11n detector, a tested FastAPI scanning service and an ASP.NET Core 10 backend.",
    problem:
      "A leaf classifier that looks great on lab photos fails in the field. Our CNN scored 95.6% on its test set but about 55% on an independent rice field dataset, and raised false alarms on field images.",
    solution:
      "Moved to object detection with YOLO11n and wrapped it in a scanning service that drops bad frames and only confirms a disease once it is seen in 2 or more frames.",
    architecture:
      "Phone frames go to a FastAPI scan service: blur and duplicate-frame filter, YOLO11n on ONNX Runtime (CPU), crop filter, multi-frame confirmation and XGBoost severity. Around it, an ASP.NET Core 10 Web API in Clean Architecture (Api, Core and Infrastructure projects) uses EF Core code-first on SQL Server: 9 tables built through 7 migrations, including a scan job queue and an SMS outbox. JWT role-based auth is in progress.",
    challenges: [
      "The gap between lab accuracy and real field images",
      "Public wheat datasets that box only one diseased leaf per photo",
      "Phone video full of blurry and repeated frames",
      "Keeping Python preprocessing and .NET results identical"
    ],
    decisions: [
      "Reported the 55% field result next to the 95.6% test score",
      "Kept YOLO v1 after three experiments that did not beat it",
      "Kept ML in Python, pinned by 111 tests, instead of re-writing it in C#",
      "Designed scans as queued jobs and alerts as an SMS outbox with retries"
    ],
    stack: ["Python", "YOLO11", "ONNX Runtime", "OpenCV", "XGBoost", "FastAPI", "pytest", "C#", "ASP.NET Core 10", "EF Core", "SQL Server", "Clean Architecture"],
    metrics: ["11,574 labelled images", "14 classes, 3 crops", "0.77 mAP50 on test split", "111 pytest tests"],
    links: {},
    note: "Repository is private for now"
  },
  {
    title: "ApplyFlow AI",
    category: "Backend Systems",
    status: "Solo full-stack platform",
    description:
      "A job application platform with application tracking, Kanban workflows, analytics and AI resume matching, built on an ASP.NET Core backend.",
    problem:
      "Job seekers need more than a spreadsheet: structured application data, workflow visibility, resume assets and analytics in one reliable system.",
    solution:
      "A modular ASP.NET Core backend with stateless JWT authentication, normalized PostgreSQL schemas and REST APIs, plus a Python service that scores resume-to-job fit.",
    architecture:
      "ASP.NET Core modular monolith organized as Controllers, Services and EF Core data access over PostgreSQL. A Python TF-IDF and cosine similarity service handles resume matching, and a web frontend consumes the API end to end.",
    challenges: [
      "Avoiding premature microservices complexity",
      "Keeping backend boundaries clean while moving fast solo",
      "Modeling users, applications, workflow stages, analytics and resumes",
      "Testing backend flows with confidence"
    ],
    decisions: [
      "Chose a modular monolith with clean internal boundaries",
      "Used EF Core with a normalized PostgreSQL schema for relational integrity",
      "Designed stateless JWT authentication",
      "Verified flows with 21 xUnit tests and Playwright end-to-end tests"
    ],
    stack: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "JWT", "Python", "TF-IDF", "xUnit", "Playwright"],
    metrics: ["21 xUnit tests passing", "Modular monolith", "JWT auth", "Normalized PostgreSQL"],
    links: { github: "https://github.com/abdulsami334/ApplyFlow-AI" }
  },
  {
    title: "Mosque Locator",
    category: "Mobile",
    status: "Flutter app + REST API",
    description:
      "A Flutter app that finds nearby mosques on a map, backed by a Node.js API with MongoDB geospatial search and a contributor and admin review workflow.",
    problem:
      "Mosque details such as prayer times and facilities are scattered and go out of date, and anyone adding a mosque needs a check so the map stays accurate.",
    solution:
      "Users find mosques near their GPS location. Signed-in contributors add mosques with photos, prayer times and amenities, and admins review contributors and submissions.",
    architecture:
      "Flutter client (Google Maps, Geolocator, Provider) calling an Express 5 REST API. MongoDB stores mosques as GeoJSON points with a 2dsphere index, JWT middleware protects write routes and an admin middleware guards review routes. Photos upload through Multer to Cloudinary.",
    challenges: [
      "Nearby search over coordinates, not text",
      "Stopping the same mosque from being added twice",
      "Separating contributor and admin permissions"
    ],
    decisions: [
      "GeoJSON points with a 2dsphere index and $near queries",
      "Rejected a new mosque with the same name within 1 km",
      "JWT with bcrypt-hashed passwords, plus a separate admin role check"
    ],
    stack: ["Flutter", "Dart", "Google Maps", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    metrics: ["Geospatial $near search", "1 km duplicate check", "JWT + admin roles", "Separate app and API repos"],
    links: {
      github: "https://github.com/abdulsami334/Mosque-Locator-Frontend",
      githubBackend: "https://github.com/abdulsami334/Mosque-Locator-Backend"
    }
  },
  {
    title: "UrbanEye",
    category: "Mobile",
    status: "Flutter app + 2 Node services",
    description:
      "A Flutter app where citizens report electricity, gas, water and streetlight problems with a photo and a map location, and admins review them. It runs on two Express and MongoDB services, one for users and one for reports.",
    problem:
      "Utility complaints are made by phone or in person, with no exact location, no photo and no way for the citizen to follow up.",
    solution:
      "Citizens file a report with a photo and a pin on Google Maps and track its status in My Reports. Admins see every report with pending and accepted counts and accept them.",
    architecture:
      "Flutter client with Provider state (auth and reports) calling two Express 5 services on MongoDB: a user service for signup, login and Cloudinary profile photos, and a report service for multipart report uploads and admin-only status changes. Both verify the same JWT, which the app keeps in SharedPreferences.",
    challenges: [
      "Turning a map tap into a usable street address",
      "Sending a photo, text and location in one authenticated request",
      "Keeping citizen and admin actions apart"
    ],
    decisions: [
      "Geolocator for current position, a tap-to-drop marker and reverse geocoding",
      "Multipart upload with a Bearer token for each report",
      "Split users and reports into separate services that share one JWT secret"
    ],
    stack: ["Flutter", "Dart", "Provider", "Google Maps", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    metrics: ["2 backend services", "JWT + bcrypt auth", "Map + reverse geocoding", "Admin review dashboard"],
    links: {
      github: "https://github.com/abdulsami334/UrbanEye-Frontend.",
      githubBackend: "https://github.com/abdulsami334/UrbanEye-Backend-Report-Service"
    }
  },
  {
    title: "FlashCraft",
    category: "Mobile",
    status: "Flutter + on-device OCR + Gemini",
    description:
      "A study app that reads text from photos of notes on the device and asks Google Gemini for the key topics, shown as cards you can copy or share.",
    problem: "Students have pages of handwritten or printed notes and need the main topics out of them quickly.",
    solution:
      "Pick several note images or take a photo. The app reads the text on the phone with ML Kit, sends it to Gemini, and shows one card per key topic.",
    architecture:
      "Flutter client: image_picker for gallery and camera, Google ML Kit text recognition on the device with a script picker (Latin, Chinese, Japanese, Korean, Devanagari), then a Gemini REST call. Provider holds the loading state and results.",
    challenges: ["Reading text from photos in different scripts", "Turning raw OCR text into useful topics", "Keeping the UI responsive during OCR and the AI call"],
    decisions: [
      "Ran OCR on the device so images never leave the phone",
      "Re-scan the images when the user changes the script",
      "Shimmer placeholders while Gemini responds"
    ],
    stack: ["Flutter", "Dart", "Google ML Kit", "Gemini API", "Provider"],
    metrics: ["On-device OCR", "5 scripts supported", "Gemini topic extraction", "Copy and share cards"],
    links: { github: "https://github.com/abdulsami334/FlashCraft-Frontend" }
  },
  {
    title: "YouTube AI Analyzer Agent",
    category: "LLM Systems",
    status: "Agentic AI system",
    description: "An AI agent that extracts YouTube video metadata and generates summaries, insights and task-oriented analysis.",
    problem: "Video content is information-rich but slow to inspect manually, especially when users need structured insights instead of passive viewing.",
    solution: "A Python agent built with Agno that orchestrates metadata extraction, prompt steps, summarization and insight generation.",
    architecture: "Python agent workflow: video metadata extraction, prompt orchestration, LLM reasoning steps, summary generation and structured insight output.",
    challenges: ["Designing useful multi-step agent behaviour", "Keeping prompt orchestration understandable", "Turning unstructured video context into structured output"],
    decisions: ["Used Agno to structure the agent workflow", "Modeled the work as a task pipeline instead of a single prompt", "Focused on summaries and insights a user can act on"],
    stack: ["Python", "Agno", "LLMs", "Prompt Orchestration", "Agentic Workflows"],
    metrics: ["Agent workflow", "Metadata extraction", "AI summaries", "Structured insights"],
    links: { github: "https://github.com/abdulsami334/firstagent_with_agno" }
  },
  {
    title: "AI Dialogue Summarizer",
    category: "LLM Systems",
    status: "Transformer inference API",
    description: "A FastAPI summarization service using Hugging Face T5 Transformers to compress long dialogues into quick summaries.",
    problem: "Long conversations are slow to scan and hard to turn into useful summaries without model-specific preprocessing.",
    solution: "A Python inference API with dialogue preprocessing, beam search decoding and GPU-aware execution.",
    architecture: "FastAPI backend, regex preprocessing pipeline, T5 model inference with a CUDA/MPS acceleration path, structured summary response.",
    challenges: ["Balancing summary quality with latency", "Cleaning noisy dialogue text", "Serving a transformer model behind an API"],
    decisions: ["Used FastAPI for async-friendly Python serving", "Applied regex preprocessing before inference", "Tuned beam search for quality"],
    stack: ["Python", "FastAPI", "Hugging Face", "T5 Transformers", "CUDA", "MPS"],
    metrics: ["T5 Transformer", "Beam search decoding", "GPU-aware inference", "FastAPI service"],
    links: { github: "https://github.com/abdulsami334/Text-Summarizer-Using-Huggingface-Transformer" }
  },
  {
    title: "CreditWise Loan Approval",
    category: "Applied AI",
    status: "Machine learning analysis",
    description: "A notebook-based loan approval project exploring credit decisioning and model-driven financial classification.",
    problem: "Loan decisions need structured analysis of applicant data, feature relationships and model behaviour before a recommendation can be trusted.",
    solution: "A data science workflow for credit approval analysis with notebook-based experimentation and model evaluation.",
    architecture: "Notebook pipeline for data inspection, feature analysis, model training and evaluation, and approval-oriented interpretation.",
    challenges: ["Reasoning about financial decision features", "Keeping model output explainable", "Turning experiments into a clear story"],
    decisions: ["Kept the analysis explainable", "Evaluated models before drawing conclusions", "Used it to practise classical ML outside LLM systems"],
    stack: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
    metrics: ["Applied ML workflow", "Financial classification", "Model evaluation"],
    links: { github: "https://github.com/abdulsami334/CreditWise-Loan-Approval" }
  }
];

export const architectureGallery: ArchitectureItem[] = [
  {
    title: "AI Calling Pipeline",
    description: "How one intake call flows from the EMR queue to a finished English summary, in real time.",
    nodes: ["EMR Queue", "Worker", "Infobip Call", "WebSocket Media Server", "Speech to Text", "Azure OpenAI", "Text to Speech", "EMR Summary"]
  },
  {
    title: "CropGuard Scan Pipeline",
    description: "Frames from a phone become confirmed findings with a severity grade.",
    nodes: ["Phone Frames", "Blur + Duplicate Filter", "YOLO11n (ONNX)", "Crop Filter", "Multi-frame Confirm", "XGBoost Severity"]
  },
  {
    title: "Scan Jobs and SMS Outbox",
    description: "CropGuard's backend design: uploads return immediately, a worker processes scans, and alerts retry until delivered.",
    nodes: ["Upload", "Queued Scan", "202 Accepted", "Background Worker", "ML Service", "Findings", "SMS Outbox + Retries"]
  },
  {
    title: "Clean Architecture in .NET",
    description: "Domain rules in the core, data access in infrastructure, HTTP at the edge.",
    nodes: ["Controller", "Service", "Core Domain", "EF Core", "SQL Server"]
  },
  {
    title: "Authentication Flow",
    description: "JWT identity with role checks in front of protected resources.",
    nodes: ["Login", "Password Hash Check", "JWT Issue", "Role Policy", "Protected API"]
  },
  {
    title: "ApplyFlow Modular Monolith",
    description: "A pragmatic ASP.NET Core architecture with clean boundaries and a separate Python matching service.",
    nodes: ["Web UI", "ASP.NET Controllers", "Services", "EF Core", "PostgreSQL", "Python Matching"]
  },
  {
    title: "Agentic AI Workflow",
    description: "A task-oriented workflow for metadata extraction, prompt orchestration, LLM reasoning and structured insights.",
    nodes: ["Video URL", "Metadata Extractor", "Agno Agent", "LLM Step", "Summary", "Insights"]
  }
];

export const achievements = [
  { title: "CGPA 3.59 / 4.00", detail: "BS Software Engineering, Muhammad Ali Jinnah University, expected January 2027.", icon: GraduationCap },
  { title: "4x Merit Scholarship", detail: "Recognized for sustained academic performance.", icon: Trophy },
  { title: "2x Director's Award", detail: "Awarded for exceptional project contributions.", icon: Trophy },
  { title: "Highest Semester GPA: 3.9", detail: "Earned in the Spring 2024 semester.", icon: Activity }
];

export const techIcons = [
  SiPython,
  SiSharp,
  SiDotnet,
  SiFastapi,
  SiPytorch,
  SiOpencv,
  SiOnnx,
  SiPytest,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit
];
