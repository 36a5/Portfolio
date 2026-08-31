// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployment target lives in exactly one place.
//
//   GitHub Pages project site : SITE_URL=https://36a5.github.io  SITE_BASE=/Portfolio   (default)
//   Custom domain or Vercel   : SITE_URL=https://your-domain.com SITE_BASE=/
//
// Nothing else in the codebase hard-codes a URL. Internal links go through
// `href()` in src/data/site.ts, which prefixes import.meta.env.BASE_URL.
const SITE = process.env.SITE_URL ?? 'https://36a5.github.io';
const BASE = process.env.SITE_BASE ?? '/Portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
