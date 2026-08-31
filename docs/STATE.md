# Current State

_Last updated: 2026-08-31_

## Now

The portfolio site exists and builds. `main` holds a working Astro site with real content.

- **Stack:** Astro 7 static, Tailwind 4, TypeScript, markdown content collections.
- **Pages:** home, projects index with topic filter, project detail, certificates, now, about, 404.
- **Content:** 8 published projects drafted from the owner's public repositories, 1 draft project
  (`aiamp-frontend`, needs a real description), 1 "now" entry, 0 certificates.
- **Build:** `npm run build` produces 14 pages with no warnings.
- **Deploy:** `.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `main`.
- **Guard:** `scripts/check-clean.sh --all` passes; the pre-commit hook is wired.

## Blocked on the owner

1. **Enable GitHub Pages.** Repository → Settings → Pages → Build and deployment → Source:
   **GitHub Actions**. Until that is set, the deploy workflow builds but cannot publish. The site
   will then be at `https://36a5.github.io/Portfolio`.
2. **Certificates and certifications.** LinkedIn blocks automated reading (HTTP 999), so none could
   be imported. The owner needs to supply the list, or export the LinkedIn profile to PDF.
3. **CV.** To be uploaded. Put the PDF in `public/cv/` and set `cvFile` in `src/data/site.ts`.
4. **Verify the drafted content.** Project dates come from repository timestamps and are
   approximations; roles and team lists need confirming. The `now` entry and the about page text
   were written from public profile information and should be corrected in the owner's own words.
5. **Project images.** Every project currently shows a generated gradient placeholder. Real
   screenshots go in `src/assets/projects/<slug>/`.

## Next

1. Owner completes the five items above.
2. Replace placeholder covers with real screenshots.
3. Decide on a name-based domain: a custom domain pointed at Pages, or a host that gives a
   name-based subdomain. See `docs/DECISIONS.md` → D-008.
4. Consider an Arabic version of the site once the English content is settled.
