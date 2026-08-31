import { getCollection, type CollectionEntry } from 'astro:content';

/** Drafts stay visible while developing and never reach a production build. */
const isPublished = (entry: { data: { draft?: boolean } }) =>
  import.meta.env.DEV || !entry.data.draft;

export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection('projects', isPublished);
  return projects.sort((a, b) => b.data.startDate.getTime() - a.data.startDate.getTime());
}

export async function getFeaturedProjects(limit = 3) {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.data.featured);
  return (featured.length > 0 ? featured : projects).slice(0, limit);
}

export async function getCredentials(): Promise<CollectionEntry<'credentials'>[]> {
  const credentials = await getCollection('credentials', isPublished);
  return credentials.sort((a, b) => b.data.issueDate.getTime() - a.data.issueDate.getTime());
}

/** Newest status entry first; the first one is what the site shows as "now". */
export async function getNowEntries(): Promise<CollectionEntry<'now'>[]> {
  const entries = await getCollection('now');
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Filter buttons come from `tags` only. Tools and languages are shown on each
 * card but would bury the filter row — a project lists a dozen of them.
 */
export function collectFilters(projects: CollectionEntry<'projects'>[]): string[] {
  const seen = new Map<string, string>();
  for (const p of projects) {
    for (const value of p.data.tags) {
      const key = value.toLowerCase();
      if (!seen.has(key)) seen.set(key, value);
    }
  }
  return [...seen.values()].sort((a, b) => a.localeCompare(b));
}
