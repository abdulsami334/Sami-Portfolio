// Live GitHub data, fetched on the server and cached for an hour (ISR).
// Every fetch fails soft: the section falls back to static content instead of breaking the page.

const USERNAME = "abdulsami334";
const REVALIDATE_SECONDS = 3600;

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

export type Contributions = {
  total: number;
  days: ContributionDay[];
  lastActive: string | null;
};

export type RepoStats = {
  name: string;
  stars: number;
  language: string | null;
  pushedAt: string;
};

export type GitHubProfileStats = {
  publicRepos: number;
};

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-site"
  };
  // Optional: a read-only token raises the API rate limit on shared hosting IPs.
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return headers;
}

async function getJson<T>(url: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, {
      ...init,
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(6000)
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getContributions(): Promise<Contributions | null> {
  // Mirrors the contribution calendar on the GitHub profile page (last 12 months).
  const data = await getJson<{ total: { lastYear: number }; contributions: ContributionDay[] }>(
    `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`
  );
  if (!data?.contributions?.length) return null;

  const days = [...data.contributions].sort((a, b) => a.date.localeCompare(b.date));
  const lastActive = [...days].reverse().find((day) => day.count > 0)?.date ?? null;
  return { total: data.total.lastYear, days, lastActive };
}

export async function getRepoStats(): Promise<Map<string, RepoStats>> {
  const repos = await getJson<Array<{ name: string; stargazers_count: number; language: string | null; pushed_at: string }>>(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`,
    { headers: githubHeaders() }
  );
  const map = new Map<string, RepoStats>();
  for (const repo of repos ?? []) {
    map.set(repo.name.toLowerCase(), {
      name: repo.name,
      stars: repo.stargazers_count,
      language: repo.language,
      pushedAt: repo.pushed_at
    });
  }
  return map;
}

export async function getProfileStats(): Promise<GitHubProfileStats | null> {
  const user = await getJson<{ public_repos: number }>(`https://api.github.com/users/${USERNAME}`, {
    headers: githubHeaders()
  });
  return user ? { publicRepos: user.public_repos } : null;
}

export function repoNameFromUrl(url: string): string {
  return url.replace(/\/+$/, "").split("/").pop()?.toLowerCase() ?? "";
}
