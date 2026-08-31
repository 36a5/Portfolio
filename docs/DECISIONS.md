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
