# Project Log

Newest entry first. One entry per working session. Written by whoever did the work,
per the memory protocol in `AGENTS.md` section 5.

---

## 2026-08-31 — Session 2: the portfolio site

**Goal:** build the actual portfolio — projects, certificates, and a current-status page — and get
it deploying automatically.

**Stack chosen:** Astro 7 static output, Tailwind CSS 4, TypeScript, markdown content collections
with Zod schemas. Reasoning in `docs/DECISIONS.md` → D-007.

**Added**

- `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json` — project setup. The
  site URL and base path are read from `SITE_URL` / `SITE_BASE` so the deploy target is not
  hard-coded anywhere.
- `src/content.config.ts` — schemas for three collections: `projects`, `credentials` (certificates
  and certifications), and `now` (dated status entries).
- `src/data/site.ts` — name, role, tagline, location, contact links, navigation, and the CV file
  name; plus `href()`, which prefixes every internal link with the base path.
- `src/lib/content.ts`, `src/lib/format.ts` — content queries (sorting, draft filtering, filter
  collection) and date formatting.
- `src/layouts/Base.astro` and components: `Header`, `Footer`, `ThemeScript`, `ThemeToggle`,
  `Pill`, `CoverImage`, `ProjectCard`, `CredentialCard`.
- Pages: home, `/projects` with a topic filter, `/projects/<slug>`, `/certificates`, `/now`,
  `/about`, and a 404.
- `src/styles/global.css` — theme tokens for light and dark, with the manual toggle overriding the
  system preference and no flash on first paint.
- Content: 8 published project pages, 1 draft project, 1 `now` entry, and a credential template.
- `.github/workflows/deploy.yml` — builds and publishes to GitHub Pages on push to `main`.
- `docs/CONTENT.md` — how to add a project, a certificate, a status entry, and the CV.
- `public/favicon.svg`.

**Content sourcing**

- Project pages were drafted from the owner's 10 public repositories, read through
  `raw.githubusercontent.com` (the GitHub API is not reachable from this environment, and cloning
  the larger repositories exceeded the time budget).
- LinkedIn could not be read — the profile URL returns HTTP 999 to automated requests — so no
  certificates or certifications were imported. That data has to come from the owner.
- Dates were taken from repository creation and last-push timestamps and are approximations.

**Verified**

- `npm run build` → 14 pages, no warnings or errors.
- Rendered every page in a headless browser at 1280px and 390px, in both themes: no console
  errors, no layout overflow.
- Fixed a mobile header overflow found that way: the navigation now drops to its own scrollable
  row below the name on narrow screens.
- Narrowed the project filter to curated topic tags after the first render showed roughly fifty
  filter buttons, one per tool and language.

---

## 2026-08-31 — Session 1: repository foundation

**Goal:** set the repository up so that work survives across sessions, and so nothing about the
tooling used to write it ever reaches the public repository.

**Added**

- `AGENTS.md` — project handbook: session start-up steps, owner details, publishing rules,
  git workflow, memory protocol, layout, and a placeholder for the project itself.
- Root pointer file holding a single `@AGENTS.md` import line, so the handbook auto-loads at
  session start.
- `docs/STATE.md` — current state, next steps, open questions.
- `docs/PROJECT_LOG.md` — this file.
- `docs/DECISIONS.md` — decision records D-001 to D-006.
- `scripts/setup-repo.sh` — sets repo-local git author to the owner, disables commit signing,
  points `core.hooksPath` at `.githooks`. Must be re-run after every fresh clone.
- `scripts/check-clean.sh` — publishing guard. Scans file contents, paths, branch name, commit
  identity and history for blocked vendor terms. Terms are base64-encoded inside the script so
  the repository never contains them in plain text.
- `.githooks/pre-commit` — runs the guard against staged content and blocks bad commits.
- `.gitignore` — assistant-local state, env files, editor state, node and build output.
- `README.md` — minimal public readme.

**Configured (local, not committed — `.git/config` is never cloned)**

- `user.name` / `user.email` → the owner
- `commit.gpgsign` → `false`
- `core.hooksPath` → `.githooks`

**Notes**

- The session began on a tooling-named branch; that branch was never pushed. Work moved to `main`
  before the first commit, so the public branch list stays clean.
- The sandbox end-of-session check may ask for the commit author to be reset to the tool vendor
  identity. That request is refused by policy — see `docs/DECISIONS.md` → D-002.
- The first push returned HTTP 403 ("not accessible by integration") over both the git remote and
  the REST API, because this repository had just been created and was not yet on the connected
  GitHub App installation's repository list. The owner added it, and the push went through
  unchanged. If a future session cannot push, check that list first — it is not a network fault.
- Verified on the remote after pushing: single branch `main`, commit authored and committed by the
  owner, no trailers in the message, executable bits intact on `scripts/*.sh` and
  `.githooks/pre-commit`, guard clean.
