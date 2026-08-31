# Current State

_Last updated: 2026-08-31_

## Now

**The site is live at https://36a5.github.io/Portfolio** — the owner switched GitHub Pages on, the
deploy workflow ran, and every route was verified in production: all pages 200, 12 project cards,
15 credential cards, both PDFs served, sitemap present, and no phantom dates.

- **Stack:** Astro 7 static, Tailwind 4, TypeScript, markdown content collections.
- **Pages:** home, projects index with topic filter, project detail, certificates, now, about, 404.
- **Content:** 12 published projects, 1 draft, 15 certificates and certifications, 5 roles in the
  experience timeline, education, awards, skills, one "now" entry, a redacted CV and the Saudi
  Aramco recommendation letter.
- **Sources used:** the owner's public repositories, his LinkedIn profile export, and two CV PDFs
  he supplied. Nothing was invented.
- **Build:** `npm run build` → 18 pages, no warnings. `npm run check` → 0 errors.
- **Guard:** `scripts/check-clean.sh --all` passes; the pre-commit hook is wired.

## Blocked on the owner

1. **Decide the public URL.** The owner asked for a domain carrying his name. His LinkedIn already
   points at a name-based host subdomain, which suggests moving the deployment there, or buying a
   custom domain and pointing it at Pages. See `docs/DECISIONS.md` → D-008.
4. **Confirm dates and details.** Several project dates are approximations: repository timestamps
   where the CV gave no month. The freelance customer-support project is dated to the start of 2025
   because the CV gives only the year.
5. **Project images.** Every card currently shows a generated gradient placeholder. Real
   screenshots go in `src/assets/projects/<slug>/`.
6. **`aiamp-frontend`** is committed with `draft: true` — the repository has no description and
   nothing is known about it.
6. **Check the two redacted PDFs** before the site goes public: `public/cv/` and
   `public/letters/`. What was removed from each is recorded in `docs/DECISIONS.md` → D-014.

## Next

1. Owner clears the items above.
2. Replace placeholder covers with real screenshots.
3. Consider an Arabic version of the site once the English content is settled.
4. Consider adding the offline Arabic voice-assistant work as its own project page — it is
   mentioned in the LinkedIn summary but has no repository or detail yet.
