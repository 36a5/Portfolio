# Project Log

Newest entry first. One entry per working session. Written by whoever did the work,
per the memory protocol in `AGENTS.md` section 5.

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
