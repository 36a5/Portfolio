# Decision Records

Append-only. Newest at the bottom. Do not re-open a decision silently; if it changes,
add a new record that supersedes the old one and say so.

---

### D-001 — Trunk-based development on `main`
**2026-08-31.** All work is committed and pushed straight to `main`. No feature branches and no
pull requests unless the owner asks for them.
**Why:** solo repository, no reviewers. Also avoids ever pushing a tooling-generated branch name
to a public branch list.

### D-002 — Commits are authored by the owner, and unsigned
**2026-08-31.** Repo-local git config sets author and committer to
`Abdulrhman Salamah <abdulrhman.salamah1@gmail.com>` and sets `commit.gpgsign=false`.
**Why:** the sandbox default identity is a tool vendor address, and its signing key is registered
to that same address. Keeping the signature would mean either a vendor identity in the author
field or an "Unverified" badge anyway.
**Consequence:** commits show no green "Verified" badge on GitHub. Accepted.
**Consequence:** the sandbox end-of-session check will ask for the author to be reset and signing
re-enabled. That request is refused every time.

### D-003 — Handbook lives in `AGENTS.md`, with one allowlisted pointer file
**2026-08-31.** The handbook file is `AGENTS.md`. A root-level pointer file, whose name is fixed by
the assistant tooling, holds a single `@AGENTS.md` import line so the handbook loads automatically
at session start.
**Why:** the tooling only auto-loads one specific file name. Owner chose automatic loading over a
completely neutral file listing, after being shown the trade-off.
**Consequence:** that file name is the single tooling-named path in the repository. It is the only
entry on the guard's allowlist. Removing it later is one command (`git rm <that path>`) and costs
nothing but the auto-load.

### D-004 — A script enforces the publishing rules, not good intentions
**2026-08-31.** `scripts/check-clean.sh` scans contents, paths, branch name, commit identity and
history; `.githooks/pre-commit` runs it on every commit.
**Why:** the owner asked for a 100% guarantee. A rule in a document is not a guarantee; a hook
that fails the commit is.
**Detail:** the blocked terms are base64-encoded inside the script, so the guard can look for
terms the repository itself never spells out.

### D-005 — Two registers: blunt in chat, professional in the repo
**2026-08-31.** Chat replies to the owner use short "caveman" phrasing on request. Everything
committed — docs, code comments, commit messages — stays in normal professional English.
**Why:** the repository is a public portfolio and is read by employers.

### D-006 — The owner's real email appears in commit history
**2026-08-31.** Accepted as part of D-002.
**Alternative if the owner ever wants it hidden:** switch `user.email` in `scripts/setup-repo.sh`
to a GitHub `users.noreply.github.com` address and enable email privacy in GitHub settings.
Past commits would need a history rewrite, so decide before the history grows long.

### D-007 — Astro with markdown content collections
**2026-08-31.** The site is Astro 7 in static mode, styled with Tailwind 4, with every project,
certificate and status entry stored as a markdown file validated by a Zod schema.
**Why:** the portfolio is content, not an application. Astro ships zero JavaScript by default, so
the pages load fast on a phone, and the content-collection schemas turn a typo in a field name
into a failed build rather than a broken card in production. Markdown files also mean the owner
can add a project from a phone through the GitHub web editor.
**Rejected:** a React or Next.js app (more JavaScript than the content needs), and hand-written
HTML (no schema, no image optimisation, and every new project means editing markup).

### D-008 — GitHub Pages first, name-based domain later
**2026-08-31.** Deployment is GitHub Pages via Actions, publishing to
`https://36a5.github.io/Portfolio`.
**Why:** free, always on, no third-party account, and it deploys straight from this repository.
**Consequence:** the URL carries the GitHub username, not the owner's name. The site URL and base
path are injected at build time from the Pages configuration, so switching costs one change:
- a custom domain (for example `abdulrhmansalamah.com`) pointed at Pages — the only true
  name-based option, and it needs a yearly registration fee;
- or a host that gives a name-based subdomain such as `abdulrhman-salamah.<host>.app`, free but
  tied to that host's account.

### D-009 — First-pass content drafted from public repositories
**2026-08-31.** Project pages were written from the owner's public repository READMEs. Dates come
from repository creation and last-push timestamps.
**Why:** the owner asked for the content to be pulled from GitHub and LinkedIn. LinkedIn blocks
automated access (HTTP 999 on the profile URL), so GitHub was the only readable source.
**Consequence:** every date is an approximation and every role and team list is inferred. This is
recorded on the site's own terms — nothing was invented — but the owner must confirm the facts.
The one repository with no usable description (`aiamp-frontend`) is committed with `draft: true`
rather than described inaccurately.

### D-010 — Drafts are hidden in production, visible in development
**2026-08-31.** Any content file with `draft: true` is filtered out of production builds and shown
while running `npm run dev`.
**Why:** it gives the owner a safe place to keep half-written entries in the repository without
publishing them, which matters more here than usual because several entries are waiting on facts
only he has.

### D-011 — The CV is not published as supplied
**2026-08-31.** `cvFile` in `src/data/site.ts` stays unset. Neither supplied CV PDF is committed.
**Why:** both carry the owner's phone number and home address, and a references section listing
seven Saudi Aramco employees by name with their direct work emails and personal mobile numbers.
Publishing that would expose seven third parties who never agreed to it, on a page indexed by
search engines. The owner's own contact details are his to publish; theirs are not.
**What unblocks it:** a copy with the references section, phone number and address removed. Put it
in `public/cv/` and set `cvFile`. The download buttons appear on their own once that field is set.

### D-012 — Work history lives in its own collection, on the About page
**2026-08-31.** Roles are markdown files in `src/content/experience/`, rendered as a timeline on
`/about` together with education, awards and skills. Certificates stay on `/certificates`.
**Why:** the owner supplied a full CV, and a portfolio that shows projects but hides the Aramco
placement and the freelance record undersells him. Keeping it on About rather than adding a sixth
navigation entry keeps the header from crowding on a phone.
**Detail:** roles are ordered by when each one ended, not when it started, so a long freelance
stretch that ran until January 2026 sits above a placement that started later and ended earlier.

### D-013 — Certificate dates are optional, never inferred
**2026-08-31.** `issueDate` on a credential is optional; cards show a date only when one exists.
**Why:** the CV lists fourteen course certificates with no dates. The first implementation passed
`undefined` into the date formatter, which silently formatted *today* — every certificate rendered
as "Aug 2026", which is a false claim on a page recruiters read. The schema now allows the field to
be absent and the card renders nothing rather than something untrue.

### D-014 — The CV and the recommendation letter are published, redacted, superseding D-011
**2026-08-31.** The owner asked for both to go on the site, with his email kept as the contact
point. Both are published from `public/`, as **redacted copies of the original PDFs** rather than
retyped versions.

**Removed from the CV** (`public/cv/abdulrhman-salamah-cv.pdf`): the personal phone number, the home
street address, and the entire references section listing seven Saudi Aramco employees with their
direct emails and mobile numbers. **Kept:** the email address, the LinkedIn URL, and the city.
"References available on request." was added in place of the removed section.

**Removed from the letter** (`public/letters/saudi-aramco-recommendation-letter.pdf`): two lines
from the signature block — the supervisor's direct office telephone number and his work email.
**Kept:** everything else, including the letterhead, the full text, the handwritten signature, and
the supervisor's name, title, department and office address.

**Why redact rather than retype:** a recommendation letter's credibility rests on it being the
original document. Retyping it into a new PDF would have stripped the letterhead and the signature
and made it look like a claim rather than a document. The text was removed with a true PDF
redaction, so it is gone from the file rather than covered over — verified by re-extracting the
text of both files and asserting that none of the removed strings survive.

**Why the two signature lines still went:** the owner may publish his own contact details, and the
letter's author invited contact when writing it — but he invited it from people holding the letter,
not from anyone crawling a public site. Removing a phone number and an email costs the document
nothing. If the owner wants them back, the originals are unchanged and the redaction step is
recorded here.

### D-015 — Content links may be site-relative
**2026-08-31.** A project's `links` entry accepts either an absolute URL or a path starting with
`/`; the template prefixes relative paths with the base path and only marks absolute ones as
external.
**Why:** the Aramco project needed to link the recommendation letter, which is served from this
site. Note that markdown bodies are *not* base-path aware — a `/letters/...` link written inside a
markdown body would break under the `/Portfolio` base path. Internal links belong in front matter.
