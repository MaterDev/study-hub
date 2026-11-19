---
name: study-hub
description: Start and open Key's Study Hub (the local zero-dependency study app on port 4777). Use for /study-hub, /study-hub start, /study-hub open or /study-hub run, or when Key asks to start, run, open or show the study hub. Optional target (a lesson, module or section id) deep-links to it.
---

# Study Hub

The hub is the app in this repository: `server.js` serves the folder at `http://localhost:4777/`. Rules for viewing it are in `CLAUDE.md` (only through the hub, one hub tab, both skins).

## Commands

`start`, `run` and `open` all do the same thing: make sure the server is running, then show it in the browser pane. With no word after the command, do that.

1. **Is it running?** `curl -s -o /dev/null -w "%{http_code}" http://localhost:4777/`. A 200 means yes.
2. **If not, start it through the Terminal tool**, not Bash (a server started from Bash cannot be reached by the browser pane): `run_in_terminal` with `cd "<this repo>" && npm start`. Use `npm start`, **not** `npm run dev`: the dev script adds the open flag, which also opens Key's own system browser, and Key does not want that from here. Read the tab's output with `read_terminal` to confirm the "Study Hub → http://localhost:4777/" line.
3. **Open it in the browser pane** with `preview_start` and the url `http://localhost:4777/`. If a target was given (a lesson id, module id or section id; look fuzzy names up in `sections/*/manifest.js`), append `#/` plus the id, because the hub deep-links to it. Keep one hub tab: if the pane is already open on the hub, do not open another.
4. Reply in one or two sentences: what is open and which terminal tab runs the server.

Do not edit files as part of these commands. Restart the server after any change to `server.js`.
