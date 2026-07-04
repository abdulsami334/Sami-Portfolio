import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type IconComponent = LucideIcon | IconType;

export type SkillGroup = {
  title: string;
  summary: string;
  icon: IconComponent;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  logo: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export type Project = {
  title: string;
  category: "AI SaaS" | "LLM Systems" | "Applied AI" | "Backend Systems";
  status: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  decisions: string[];
  stack: string[];
  metrics: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
};

export type ArchitectureItem = {
  title: string;
  description: string;
  nodes: string[];
};
