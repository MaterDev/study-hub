#!/bin/bash
# Double-click to start the Study Hub dev server (http://localhost:4777).
# Leave this window open while you use the hub; close it (or Ctrl+C) to stop.
cd "$(dirname "$0")" || exit 1
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.volta/bin:$PATH"
if ! command -v node >/dev/null 2>&1 && [ -s "$HOME/.nvm/nvm.sh" ]; then . "$HOME/.nvm/nvm.sh"; fi
if ! command -v node >/dev/null 2>&1; then echo "Node.js not found — install it from https://nodejs.org (v18+)"; read -r -p "Press Enter to close"; exit 1; fi
if curl -s -m 1 http://localhost:4777/__hub/api/progress >/dev/null 2>&1; then
  echo "Study Hub is already running → http://localhost:4777/"; exit 0
fi
exec node server.js
