# Project Log

Newest entry first. One entry per working session. Written by whoever did the work,
per the memory protocol in `AGENTS.md` section 5.

---

## 2026-08-31 — Session 7: two more roles and the volunteer certificate

The owner supplied a screenshot of his LinkedIn experience section and a scan of a volunteer
certificate.

**Added**

- `src/content/experience/ksu-teaching-assistant.md` — Teaching Assistant, King Saud University,
  August 2021 to December 2025. No highlights: the source gave none, and none were invented.
- `src/content/experience/ksu-podcast-producer.md` — Podcast Producer (volunteer), King Saud
  University, July to August 2025: turning written books into briefed AI podcasts, 70 certified
  volunteer hours.
- `src/content/credentials/volunteer-ai-podcast-design.md` — the volunteer certificate for
  "Designing a Podcast with AI", issued 30 July 2025 by the National Center for Non-Profit Sector
  through the National Volunteer Platform, with King Saud University Press.

**Not added: the certificate image.** The scan carries the owner's national ID number in plain text
and a QR code that likely encodes the same record. It is not committed, and the credential entry
therefore has no `image:` field. Recorded as D-018.

The home page's certificate count moved from 15 to 16 on its own — the stat tiles read the
collections rather than a hard-coded number.

---

## 2026-08-31 — Session 6: redesign, motion, and a status update

**Goal:** the owner asked for a more distinctive design with a new colour theme, a lot of animation,
and visual language drawn from machine learning, software engineering and data analysis. He also
asked the site to say he is working towards AI/ML engineering certifications and building several
machine-learning and agentic AI automation projects.

**Theme**

- `src/styles/global.css` rewritten: a dark-first near-black ground with violet, cyan and amber
  accents, replacing the teal theme. The three accents were run through the categorical-palette
  validator for both modes; the first two candidate sets failed the lightness band and were
  re-stepped until all checks passed. Recorded as D-016.
- Keyframes and animation utilities live in the same file: reveal, float, node pulse, edge signal,
  grid drift, caret, marquee, sweep, gradient shift.

**New components**

- `NeuralNet.astro` — a feed-forward graph behind the hero; nodes breathe and pulses travel the
  edges. Coordinates are computed at build time so the drawing is stable.
- `CodeTerminal.astro` — an editor card that types out the routing agent from the SDAIA capstone.
- `StatTiles.astro` — four counting hero numbers; the project and certificate counts read from the
  collections so they stay true.
- `TechMarquee.astro` — an infinite ticker of the stack, paused on hover.
- `PipelineStrip.astro` — raw data → clean → features → model → production, with a pulse running
  along the track.
- `SectionTitle.astro`, `ScrollProgress.astro`, and `src/scripts/motion.ts` (reveals, counters,
  progress bar, pointer glow).

**Reworked**

- Home page rebuilt around the hero, stats, ticker, pipeline, status panel and sections.
- Header: gradient monogram that spins on hover, animated underline on the active link.
- Cards: hover lift, a light sweep across the surface, and an accent hairline on the cover.
- Every page header now carries a mono kicker and a gradient title; list items reveal on scroll.

**Content**

- The `now` entry now leads with working towards **AI/ML engineering certifications** and building
  **several machine-learning and agentic AI automation projects**.

**Fixed while building**

- The first hero was roughly twice as tall as intended: the code card was a `<pre>`, and the
  newlines the template emits between elements each rendered as an extra blank line. Lines are now
  `whitespace-pre` divs.
- The neural network was dialled back on small screens where it crossed the hero paragraph.

**Verified**

- `npm run build` → 18 pages; `npm run check` → 0 errors, 0 warnings.
- Rendered home, projects, about, now and certificates at 1280px and 390px in both themes.
- `prefers-reduced-motion` is honoured: every animation is disabled and revealed content is forced
  visible, so no content is reachable only through motion.

---

## 2026-08-31 — Session 5: the site went live

The owner switched GitHub Pages on (Settings → Pages → Source: GitHub Actions), which was the one
thing the workflow token could not do for itself. The deploy workflow then published without any
further change.

**Verified in production at https://36a5.github.io/Portfolio**

- Every route returns 200 through its trailing-slash redirect: home, projects, certificates, now,
  about, and the project detail pages.
- 12 project cards and 15 credential cards render; no certificate shows a phantom date.
- Both PDFs are served, and re-extracting their text from the live URLs confirms none of the
  redacted personal data survives.
- `sitemap-index.xml` is present.

---

## 2026-08-31 — Session 4: CV and recommendation letter published, redacted

**Goal:** the owner asked for the CV to go up with personal details removed but his email kept, and
for the Aramco recommendation letter to be published.

**Approach:** true PDF redaction with PyMuPDF against the original files, rather than retyping them.
The originals keep their layout, and the removed text is gone from the file rather than covered by a
box. `poppler-utils` cannot be installed in this environment; `pypdf` needed
`pip install --upgrade cffi` before it would import.

**Published**

- `public/cv/abdulrhman-salamah-cv.pdf` — phone number, home address and the seven-referee section
  removed; email, LinkedIn and city kept; "References available on request." added in their place.
- `public/letters/saudi-aramco-recommendation-letter.pdf` — the supervisor's direct telephone
  number and work email removed from the signature block; letterhead, full text, signature, name,
  title and department kept.

Both were verified after redaction by re-extracting their text and asserting that none of the
removed strings survive and that the email does.

**Wired in**

- `site.cvFile` is set, so the download buttons on the home and about pages appear.
- `site.recommendation` carries a pull-quote, attribution and the file name; the about page shows
  the quote with a link to the full letter.
- The Aramco project page links the letter from its sidebar.
- A project's `links` may now be site-relative as well as absolute; the detail template
  base-prefixes relative paths and only marks absolute ones as external. Recorded as D-015.

---

## 2026-08-31 — Session 3: real content from the owner's CV, LinkedIn and certificates

**Goal:** replace the repository-derived first pass with the owner's actual record, after he
supplied a LinkedIn profile export, two CV PDFs, the SDAIA certificate and an Aramco
recommendation letter.

**Source handling**

- LinkedIn cannot be read over the network (HTTP 999), so the profile export PDF was the source.
- Text was extracted with `pypdf`. The system `cryptography` binding was broken and had to be
  repaired with `pip install --upgrade cffi` before `pypdf` would import; `poppler-utils` is not
  installable in this environment.

**Added**

- New `experience` collection with five roles: freelance AI engineer (2023–2026), Saudi Aramco,
  the Digital Government Authority, and two Emerging Technologies Club roles at KSU.
- `src/data/resume.ts` — education, awards, skill groups and spoken languages.
- `/about` rewritten as a full résumé page: summary, experience timeline, education, awards,
  skills, languages and contacts.
- 15 credential entries: the CDMP certification, the SDAIA Building Agentic AI Systems certificate
  (5–9 July 2026), and thirteen course and workshop certificates.
- Five new project pages: Aramco predictive maintenance, the freelance AI customer-support
  ecosystem, Jarvis, advertising automation, and product success prediction.
- The two Arabic Sign Language entries were merged into one page for **Emma'a (إيماء)**, the
  graduation project that took first place in the college competition, linking both repositories.
- Murshid corrected: it began at the Transformation Hackathon at KSU and was built with colleagues.
- Identity updated: the role is "AI & Machine Learning Engineer" and the tagline now comes from the
  owner's own summary.

**Fixed**

- Credential dates: `issueDate` was required, and passing `undefined` to `Intl.DateTimeFormat`
  formats *today's* date — so all fourteen undated certificates rendered as "Aug 2026". The field
  is now optional and the date is only rendered when present. Recorded as D-013.
- `astro check` was added (`@astrojs/check`, `typescript`) and the deprecated `z` re-export from
  `astro:content` was replaced with `astro/zod`. Check now reports 0 errors, 0 warnings.
- Experience ordering switched from start date to end date, so the freelance stretch sorts above
  shorter later placements.

**Not published, deliberately**

- Neither CV PDF, and no `cvFile` link: both contain the owner's phone number and home address, and
  seven named Aramco referees with direct emails and mobile numbers. Recorded as D-011.
- The Aramco recommendation letter: it quotes and names a supervisor, and publishing it is the
  owner's decision.

**Deployment**

- Both Pages deploy runs failed at `actions/configure-pages`: first because Pages was not enabled,
  then because the workflow token is not permitted to create the Pages site
  ("Resource not accessible by integration"). The `enablement: true` attempt was reverted and the
  one-time manual step is documented in the README and in `docs/STATE.md`.

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
