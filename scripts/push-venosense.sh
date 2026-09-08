#!/usr/bin/env bash
#
# push-venosense.sh — update ONLY the hidden /neil-nish page from your local HTML.
#
# Workflow: develop the page in ~/Downloads/Venosense Deca.html, then run:
#     bash push-venosense.sh
#
# It copies that one file into the DECA repo and pushes it. Nothing else changes.
# Runs on any Mac already authorized to push to GitHub (uses your existing git auth).
# First run clones the repo automatically; later runs just sync + push.
#
set -euo pipefail

SRC="$HOME/Downloads/Venosense Deca.html"      # where you develop the HTML
REPO_URL="https://github.com/gogo7654321/KMHS-Deca-website.git"
REPO_DIR="$HOME/.kmhs-deca-sync"               # auto-managed local clone
DEST="hidden/venosense.html"                   # the one file this touches

[ -f "$SRC" ] || { echo "❌ Not found: $SRC"; exit 1; }

if [ -d "$REPO_DIR/.git" ]; then
  git -C "$REPO_DIR" pull --quiet --no-rebase
else
  echo "First run — cloning the repo once..."
  git clone --quiet "$REPO_URL" "$REPO_DIR"
fi

cp "$SRC" "$REPO_DIR/$DEST"
git -C "$REPO_DIR" add "$DEST"

if git -C "$REPO_DIR" diff --cached --quiet; then
  echo "ℹ️  No changes — already up to date."
  exit 0
fi

git -C "$REPO_DIR" commit --quiet -m "update Venosense hidden page"
git -C "$REPO_DIR" push --quiet
echo "✅ Pushed hidden/venosense.html — it goes live on the next App Hosting rollout."
