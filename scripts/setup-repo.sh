#!/usr/bin/env bash
#
# Run this once after every fresh clone, and at the start of every assistant
# session. Repo-local git config lives in .git/config, which is never cloned,
# so without this the sandbox default identity leaks into the public history.
#
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

git config user.name  "Abdulrhman Salamah"
git config user.email "abdulrhman.salamah1@gmail.com"
git config commit.gpgsign false      # sandbox signing key belongs to someone else
git config core.hooksPath .githooks  # enables the pre-commit publishing guard

chmod +x .githooks/* scripts/*.sh 2>/dev/null || true

echo "author : $(git config user.name) <$(git config user.email)>"
echo "signing: off"
echo "hooks  : $(git config core.hooksPath)"
echo "branch : $(git branch --show-current)"
