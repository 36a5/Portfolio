#!/usr/bin/env bash
#
# Publishing guard for a PUBLIC repository.
#
# Blocks assistant / tool vendor branding from reaching GitHub in any form:
# file contents, file and folder names, branch names, commit metadata.
#
# The blocked terms are stored base64-encoded so this script itself never
# spells them out. Do not "helpfully" inline them.
#
# Usage:
#   scripts/check-clean.sh            # scan staged content (used by the pre-commit hook)
#   scripts/check-clean.sh --all      # scan the whole tracked tree + history + identity
#
set -uo pipefail

MODE="${1:---staged}"
ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "not a git repo"; exit 1; }
cd "$ROOT" || exit 1

ENC='Y2xhdWRlCmFudGhyb3BpYwo='
TERMS=()
while IFS= read -r t; do [ -n "$t" ] && TERMS+=("$t"); done < <(printf '%s' "$ENC" | base64 -d)
PATTERN="$(IFS='|'; printf '%s' "${TERMS[*]}")"

# The only allowlisted path: the auto-load pointer file at the repo root. Its name
# is fixed by the assistant tooling, its content is one import line for AGENTS.md.
# Owner-approved.
ALLOW_PATH="$(printf '%s' "${TERMS[0]}" | tr '[:lower:]' '[:upper:]').md"

fail=0
bad() { printf '  FAIL %s\n' "$1"; fail=1; }

echo "publishing guard [$MODE]"

# ---------------------------------------------------------------- file list
if [ "$MODE" = "--all" ]; then
  mapfile -t FILES < <(git ls-files)
else
  mapfile -t FILES < <(git diff --cached --name-only --diff-filter=ACMR)
fi

# ------------------------------------------------------- 1. paths and names
for f in "${FILES[@]}"; do
  [ -n "$f" ] || continue
  [ "$f" = "$ALLOW_PATH" ] && continue
  if printf '%s' "$f" | grep -qiE "$PATTERN"; then
    bad "path contains a blocked term: $f"
  fi
done

# ----------------------------------------------------------- 2. file content
# Streamed rather than captured into a variable: a PDF or an image would make
# the shell warn about null bytes on every commit. grep -I skips binaries.
read_file() {
  if [ "$MODE" = "--all" ]; then
    cat -- "$1" 2>/dev/null
  else
    git show ":$1" 2>/dev/null
  fi
}

for f in "${FILES[@]}"; do
  [ -n "$f" ] || continue
  if read_file "$f" | grep -qIiE "$PATTERN"; then
    bad "blocked term inside $f"
    read_file "$f" | grep -niIE "$PATTERN" | head -3 | cut -c1-100 | sed 's/^/       /'
  fi
done

# ------------------------------------------------------------ 3. branch name
branch="$(git branch --show-current 2>/dev/null)"
if [ -n "$branch" ] && printf '%s' "$branch" | grep -qiE "$PATTERN"; then
  bad "branch name contains a blocked term: $branch"
fi

# --------------------------------------------------------- 4. commit identity
name="$(git config user.name)"
mail="$(git config user.email)"
if printf '%s %s' "$name" "$mail" | grep -qiE "$PATTERN"; then
  bad "commit identity is wrong: $name <$mail> -- run scripts/setup-repo.sh"
fi

# --------------------------------------------------- 5. history (--all only)
if [ "$MODE" = "--all" ] && git rev-parse HEAD >/dev/null 2>&1; then
  hist="$(git log --format='%H%n%an%n%ae%n%cn%n%ce%n%B' 2>/dev/null)"
  if printf '%s' "$hist" | grep -qiE "$PATTERN"; then
    bad "existing history contains a blocked term (message, author or committer)"
    git log --format='%h %an <%ae> %s' | grep -iE "$PATTERN" | head -5 | sed 's/^/       /'
  fi
fi

if [ "$fail" -ne 0 ]; then
  echo "publishing guard: BLOCKED -- clean the above before committing or pushing."
  exit 1
fi
echo "publishing guard: OK"
