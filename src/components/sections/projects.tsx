"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const filters = ["All", "AI SaaS", "LLM Systems", "Applied AI", "Backend Systems"] as const;

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesFilter = filter === "All" || project.category === filter;
        const matchesQuery = `${project.title} ${project.description} ${project.stack.join(" ")}`.toLowerCase().includes(query.toLowerCase());
        return matchesFilter && matchesQuery;
      }),
    [filter, query]
  );

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Featured Projects" title="Projects presented as engineering products." description="Each case study emphasizes the problem, architecture, tradeoffs, and production decisions behind the build." />
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={cn("rounded-full border px-4 py-2 text-sm transition-colors", filter === item ? "bg-primary text-primary-foreground" : "bg-background/50 text-muted-foreground hover:text-foreground")}>
                {item}
              </button>
            ))}
          </div>
          <label className="flex h-11 min-w-0 items-center gap-2 rounded-full border bg-background/60 px-4 md:w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
          </label>
        </div>
        <div className="grid gap-5">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="group overflow-hidden rounded-lg border bg-card"
              >
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-80 border-b bg-background/50 p-6 lg:border-b-0 lg:border-r">
                    <div className="absolute inset-0 premium-grid opacity-60" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge>{project.category}</Badge>
                          <Badge>{project.status}</Badge>
                        </div>
                        <h3 className="mt-6 text-3xl font-semibold tracking-tight">{project.title}</h3>
                        <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        {project.metrics.slice(0, 4).map((metric) => (
                          <div key={metric} className="rounded-md border bg-card/70 p-3 text-sm font-medium">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-5 md:grid-cols-2">
                      <InfoBlock title="Problem" value={project.problem} />
                      <InfoBlock title="Solution" value={project.solution} />
                    </div>
                    <InfoBlock title="Architecture" value={project.architecture} className="mt-5" />
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <ListBlock title="Challenges" items={project.challenges} />
                      <ListBlock title="Engineering decisions" items={project.decisions} />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.live ? (
                        <Button asChild variant="accent" className="rounded-full">
                          <a href={project.links.live} target="_blank" rel="noreferrer">
                            Live Demo
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : null}
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={project.links.github ?? "https://github.com/abdulsami334"} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild variant="ghost" className="rounded-full">
                        <a href={project.links.caseStudy ?? "#architecture"}>
                          <FileText className="h-4 w-4" />
                          Case Study
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, value, className }: Readonly<{ title: string; value: string; className?: string }>) {
  return (
    <div className={className}>
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-accent">{title}</p>
      <p className="text-sm leading-7 text-muted-foreground">{value}</p>
    </div>
  );
}

function ListBlock({ title, items }: Readonly<{ title: string; items: string[] }>) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-accent">{title}</p>
      <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
