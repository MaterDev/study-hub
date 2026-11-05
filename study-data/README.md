# Your study data

This folder is where the hub keeps a **copy of your own progress, highlights and notes**, if you choose to export one. Nothing here is created until you ask.

## What counts as study data

- which lessons you have marked as read, and when you last opened them
- the text you highlighted on lesson pages and in the attached readings, with the colour you used
- the notes you wrote on those highlights

## Where it normally lives

While you use the hub, this data is saved outside the repo and stays private:

- with the server running (`npm run dev`), in `.hub-data/` in this folder, which git ignores
- in the browser only, when the hub is served without the server (for example on GitHub Pages)

So a fresh clone starts empty, and a different computer or browser doesn't see your data until you move it.

## Keep a copy in the repo

1. Run the hub with `npm run dev` and open <http://localhost:4777/>.
2. Click **DATA** in the top bar, then **Export to repo**. This writes `study-data/study-data.json`.
3. Commit that file if you want it in the repo.

> **If your repository is public, committing the file publishes your highlights and notes.** Export to the repo only if you are happy for that, or keep the repository private.

You can also use **Download backup** to save the same file anywhere you like, without touching the repo.

## Sync on push (this machine)

On the machine where you work with Claude, the repo copy refreshes whenever Claude pushes: it runs `npm run sync-data` first and commits the file if anything changed. This is a machine setting in the DATA panel (**Sync on push**, on by default) and is stored in `.hub-data/settings.json`, so it never travels with the repo. On a fresh clone there is nothing to sync, so nothing happens.

The website (GitHub Pages) never publishes the file: `_config.yml` excludes it, so the live site cannot read it. The repository itself, if public, still shows the file.

## Use it on another computer or after a fresh clone

- Click **DATA**, then **Use repo copy** (reads `study-data/study-data.json`), or **Import file…** to pick a backup you downloaded.
- **Merge** (the default) keeps whichever version of each item is newer. Tick **Replace instead of merge** to start from the file exactly.
- Optional: tick **Use the repo copy automatically when this browser has no data**. A new visitor, or a new browser, then starts from the file instead of empty. This is off by default.

## Start over

- In the hub: **DATA**, then **Reset my data…** and confirm. This clears the server copy and this browser's copy.
- From a terminal: `npm run reset` (asks first). Add `-- --repo-copy` to also delete the committed `study-data/study-data.json`, or `-- --yes` to skip the question.

Resetting does not touch the lessons or the attached documents, only your own marks.

## The file format

`study-data.json` is plain JSON:

```json
{
  "schema": "study-hub-data/1",
  "exportedAt": "2026-11-05T18:00:00.000Z",
  "progress": { "<lesson id>": { "read": true, "readAt": "…", "firstOpened": "…", "lastOpened": "…", "opens": 3 } },
  "annotations": { "<page key>": [ { "id": "…", "color": "yellow", "quote": "…", "note": "<b>html</b>", "created": "…" } ] }
}
```

Highlights are stored by the text they cover, not by position, so they survive small edits to a lesson.
