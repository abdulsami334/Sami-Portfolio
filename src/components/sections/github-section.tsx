import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributionCalendar } from "@/components/site/contribution-calendar";
import { SectionHeading } from "@/components/site/section-heading";
import { profile, projects } from "@/data/portfolio";
import { getContributions, getProfileStats, getRepoStats, repoNameFromUrl } from "@/lib/github";

function formatMonth(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

export async function GitHubSection() {
  const [contributions, repoStats, profileStats] = await Promise.all([
    getContributions(),
    getRepoStats(),
    getProfileStats()
  ]);

  const publicRepos = projects
    .flatMap((project) => {
      const repos: { name: string; url: string; stack: string[] }[] = [];
      if (project.links.github) {
        repos.push({
          name: project.links.githubBackend ? `${project.title} App` : project.title,
          url: project.links.github,
          stack: project.stack.slice(0, 3)
        });
      }
      if (project.links.githubBackend) {
        repos.push({ name: `${project.title} API`, url: project.links.githubBackend, stack: project.stack.slice(4, 7) });
      }
      return repos.map((repo) => ({ ...repo, description: project.description }));
    })
    .map((repo) => {
      const live = repoStats.get(repoNameFromUrl(repo.url));
      return { ...repo, stars: live?.stars ?? null, pushedAt: live?.pushedAt ?? null };
    });

  const stats = [
    contributions && { label: "Contributions, last 12 months", value: contributions.total.toLocaleString("en-US") },
    contributions?.lastActive && { label: "Last activity", value: formatDate(contributions.lastActive) },
    profileStats && { label: "Public repositories", value: String(profileStats.publicRepos) }
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <section id="github" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Public code you can read."
          description="Live from GitHub and refreshed every hour. CropGuard AI and the ChildLife voice agent are in private repositories."
        />

        <div className="glass rounded-lg p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Contribution activity</h3>
              <p className="mt-1 text-sm text-muted-foreground">@abdulsami334 · same calendar as the GitHub profile</p>
            </div>
            <Button asChild className="w-fit rounded-full" variant="accent">
              <a href={profile.github} target="_blank" rel="noreferrer">
                View GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {stats.length > 0 && (
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md border bg-background/60 p-4">
                  <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-6 rounded-md border bg-background/60 p-4">
            {contributions ? (
              <ContributionCalendar days={contributions.days} />
            ) : (
              <p className="text-sm text-muted-foreground">
                The contribution calendar could not be loaded right now.{" "}
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
                  See it on GitHub
                </a>
                .
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publicRepos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-lg border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/60"
            >
              <div className="flex items-start justify-between gap-4">
                <Github className="h-5 w-5 text-accent" />
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-5 font-semibold">{repo.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{repo.description}</p>
              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-5 text-xs text-muted-foreground">
                {repo.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {(repo.pushedAt || (repo.stars ?? 0) > 0) && (
                <div className="mt-3 flex items-center gap-3 border-t pt-3 text-xs text-muted-foreground">
                  {(repo.stars ?? 0) > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stars}
                    </span>
                  )}
                  {repo.pushedAt && <span>Updated {formatMonth(repo.pushedAt)}</span>}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
