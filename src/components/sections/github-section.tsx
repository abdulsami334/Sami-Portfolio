"use client";

import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { projects, profile } from "@/data/portfolio";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://api.github.com/users/abdulsami334/repos?sort=updated&per_page=6", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : []))
      .then((data: Repo[]) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setRepos([]));
    return () => controller.abort();
  }, []);

  const fallback = projects.slice(0, 3).map((project, index) => ({
    id: index,
    name: project.title,
    html_url: project.links.github ?? profile.github,
    description: project.description,
    language: project.stack[0],
    stargazers_count: 0,
    forks_count: 0
  }));

  const cards = repos.length > 0 ? repos : fallback;

  return (
    <section id="github" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="GitHub" title="Latest public engineering work." description="Runtime GitHub data loads from Sami's public profile, with featured project cards as the graceful fallback." />
        <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="rounded-lg border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/60">
                <div className="flex items-start justify-between gap-4">
                  <Github className="h-5 w-5 text-accent" />
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-5 font-semibold">{repo.name}</h3>
                <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-muted-foreground">{repo.description ?? "Public repository from Sami\u0027s GitHub profile."}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{repo.language ?? "Code"}</span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-semibold">Contribution graph</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">A live contribution snapshot from GitHub&apos;s public contribution graph service.</p>
            <div className="mt-6 overflow-hidden rounded-md border bg-background p-3">
              <Image
                src="https://ghchart.rshah.org/0d9488/abdulsami334"
                alt="GitHub contribution graph for abdulsami334"
                width={760}
                height={160}
                className="min-h-28 w-full object-contain dark:opacity-90"
                unoptimized
              />
            </div>
            <Button asChild className="mt-6 rounded-full" variant="accent">
              <a href={profile.github} target="_blank" rel="noreferrer">
                View GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
