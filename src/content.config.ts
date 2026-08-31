import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Every piece of portfolio content is a markdown file validated by one of the
 * schemas below. A missing or misspelled field fails the build rather than
 * shipping a broken card. See docs/CONTENT.md for the authoring guide.
 */

const link = z.object({
  label: z.string(),
  url: z.string().url(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      role: z.string().optional(),
      team: z.array(z.string()).default([]),
      languages: z.array(z.string()).default([]),
      tools: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      gallery: z
        .array(z.object({ src: image(), alt: z.string().default('') }))
        .default([]),
      links: z.array(link).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const credentials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/credentials' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** "certification" = formal credential; "certificate" = course or workshop completion. */
      kind: z.enum(['certification', 'certificate']).default('certificate'),
      issuer: z.string(),
      issueDate: z.coerce.date(),
      expiryDate: z.coerce.date().optional(),
      credentialId: z.string().optional(),
      credentialUrl: z.string().url().optional(),
      image: image().optional(),
      skills: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    date: z.coerce.date(),
    headline: z.string(),
    studying: z.array(z.string()).default([]),
    building: z.array(z.string()).default([]),
    learning: z.array(z.string()).default([]),
    openToWork: z.boolean().default(true),
  }),
});

export const collections = { projects, credentials, now };
