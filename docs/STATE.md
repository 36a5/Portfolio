# Current State

_Last updated: 2026-08-31_

## Now

- Repository: `36a5/Portfolio`, **public**, default branch `main`.
- Contains the working foundation only — no application code yet:
  - `AGENTS.md` handbook (rules, git workflow, memory protocol)
  - `docs/` memory files (this file, the change log, the decision records)
  - `scripts/setup-repo.sh` (per-clone git config) and `scripts/check-clean.sh` (publishing guard)
  - `.githooks/pre-commit` wired to the guard
  - `.gitignore` covering assistant-local state, env files, build output
- Git identity for this repo is the owner; commit signing is off; guard passes clean.

## Next

1. Decide what the portfolio actually is: audience, sections, tone.
2. Pick the stack and the hosting target.
3. Scaffold the project, then fill in `AGENTS.md` section 7 with real commands.

## Open questions for the owner

- Static site or app framework? Any preference on styling approach?
- Hosting: GitHub Pages, Vercel, Netlify, other?
- Custom domain, or default host domain for now?
- Content ready to use (CV, project list, photos), or write it as we go?
