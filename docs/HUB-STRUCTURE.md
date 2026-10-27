# Study Hub — structure

> **Building or regenerating a lesson or module?** Follow [`LESSON-STANDARD.md`](LESSON-STANDARD.md) and run `npm run check`. This file describes how the hub is organised and the manifest schema; that one is the enforced structure for lessons.

## Running it

```bash
cd "Misc Tech Research"
npm run dev          # = node server.js --open  → http://localhost:4777
# or: node server.js   ·   PORT=5000 node server.js
```

Or just double-click **`Start Study Hub.command`** in Finder (opens Terminal and starts the server; keep that window open).

No dependencies — `server.js` is plain Node (18+). It serves the folder and hot-reloads while you edit:

- **CSS** changes swap in place — no reload, scroll position kept.
- **Lesson / page** edits reload only that page (inside the hub, just the iframe).
- **Hub / manifest** edits (`index.html`, `shared/*.js`, `sections/registry.js`, `sections/*/manifest.js`, `sections/*/index.html`) reload the hub, which reopens the page you were on.

Opening `index.html` directly from disk still works (no hot reload), because manifests are `.js` files loaded with `<script src>`.

## Layout

```
index.html                 hub shell: sidebar + iframe; nav built from manifests
server.js · package.json   dev server with hot reload
Start Study Hub.command    double-click launcher (macOS)
README.md                  project overview (with banner)
assets/                    README banner (generated)
scripts/                   check-structure.mjs (npm run check) and make-banner.mjs
docs/                      this file and LESSON-STANDARD.md
shared/                    code and styling every page shares
  theme.css                "Sky Cartridge" design system (light skin)
  theme-sega.css           "Console Black" dark skin (inert unless <html data-theme="sega">)
  lesson-meta.js           dated label + read button on every lesson (from its manifest entry)
  hub-progress.js          client for server-side read tracking
  outline.html             renders stubs (?id=<lesson>) and course overviews (?id=<module>)
sections/                  one folder per section — its manifest, home page AND its content
  registry.js              section ids + loader + helpers   ← add new sections here
  section-home.js/.css     renders any section home from its manifest
  <section-id>/
    manifest.js            what the section contains and where it goes (the only source of placement)
    index.html             section home page (copy another, change data-section)
    lessons/               hub-native lessons for this section: <lesson>.html
      <module>/            a multi-page module keeps its shared css/js beside its pages (e.g. aidiff/)
    courses/               imported courses (only where a section has them)
      skin-*.css           re-skin for imported lessons
      <course>/…           imported lessons + examples, original structure kept
.hub-data/progress.json    read/visit history (created by the server; git-ignored, not served as content)
```

Content follows its section: a lesson lives in `sections/<section-id>/lessons/`, and the manifest's `file` points at it
(paths in manifests are relative to the hub root). Moving a lesson means moving the file *and* updating that one `file` field.

## Manifest schema (`hub-section/1`)

Any lesson, stub or module node may carry `"standard": "v1"`, which opts it into the enforced structure in
[`LESSON-STANDARD.md`](LESSON-STANDARD.md). New and regenerated work must carry it; older nodes are exempt until regenerated.

```js
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  schema: "hub-section/1",
  id: "rendering-performance-motion",  // folder name, unique
  order: 2,                            // position in sidebar / home
  title: "…", icon: "🎞️", summary: "One-sentence pitch.",
  created: "2026-10-23", updated: "2026-10-23",
  scope: { purpose, includes[], excludes[], admission[], audience, depth },
  related: ["web-realtime"],
  notes: ["optional free-text notes shown on the section home"],
  children: [ /* nodes */ ]
});
```

**Nodes** nest to any depth:

| type | fields | notes |
|---|---|---|
| `group` | `id, title, summary, children[]` | Folds in the sidebar; shows `built/total` when it contains stubs. |
| `group` + `kind:"module"` | + `home`, `label` (`"MODULE"`/`"COURSE"`), dating fields, optional `source`, `throughline`, `principles`, `paths` | A multi-page module or imported course. `home` can be a file or `outline.html?id=<id>` (auto-generated overview). |
| `lesson` (built) | `id, title, file, pip, blurb, anchors[], examples[]?, standard?` + dating fields | `anchors[].anchor` = an `<h2 id>` in the file. `examples[]` = `{title, file, standalone?}`, shown as sub-items. |
| `lesson` (stub) | `status:"stub", id, title, blurb, file:"outline.html?id=<id>", plan{goals,concepts,takeaways,connections,build,notes}, overlaps[], dates{planned}, history, rebuild` | Planned but not built. Greyed + dashed **STUB** chip in the sidebar; opens its plan. |

### Readings, highlights and notes
Any section, group/module or single lesson may carry `"readings": [{ "id", "kind":"pdf", "tab", "title", "file", "credit" }]` (ids unique hub-wide). A reading attached to a section or module shows as a right-edge tab on every page beneath it; one attached to a lesson shows only on that lesson. A "Notes" tab is added automatically on every lesson page and lists that page's highlights and notes plus those of its readings. PDFs render with the vendored pdf.js (`shared/vendor/pdfjs`) in `shared/hub-reader.js`; the reading position is kept per reading in localStorage.
Highlighting (`shared/hub-annotate.js`) works on lesson pages and PDFs without any change to a lesson: switch the PEN control (top bar, or the H key) on and select text, or right-click for a menu with Copy, Select all, Highlight colours and Add note. Click a highlight to add or edit a note (a small rich-text editor); a note shows a dotted underline and previews on hover. Saved by quoted text (not position) in `.hub-data/annotations.json`, which is not committed. A page can opt a region out with `data-no-annotate`.

All `id`s must be unique across the hub. `overlaps` lists ids of related lessons elsewhere (shown on stub pages so new lessons cross-link instead of duplicating).

## Dating (every built lesson and module)

```js
dates: {
  created:  "2026-07-22",   // first built
  updated:  "2026-07-22",   // last CONTENT change (restyles/imports don't count — log them in history)
  verified: "2026-07-22"    // sources/facts last checked
},
history: [ {date, note}, … ],                // append-only
rebuild: { brief, basis: [sources] }         // enough to recreate it
```

Stubs carry `dates.planned` instead. Where dates show:

- **Sidebar:** every lesson row has its last-updated date chip or a STUB chip; course rows show `built/total` + date.
- **Lesson pages:** a dated label above the title (Updated · Created · Sources checked), the parent module's dates, and "History & rebuild notes".
- **Hub cards / section homes:** updated + created dates on every card; module headers show created/updated; a Dates table per section.

**Touching content:** bump `updated` (and `verified` if sources were re-checked) and add a `history` line.
**Building a stub:** create the file, then in the manifest set `status:"built"` (or delete `status`), set `file`, `anchors`, the three dates, `rebuild`, and add the two script tags before `</body>`:
`<script src="ROOT/sections/registry.js"></script>` and `<script src="ROOT/shared/lesson-meta.js"></script>` (ROOT = relative path to the hub root).

## Placing new content

1. Check each section's `scope.admission` and `excludes`; place it where it passes.
2. Fits nowhere → new section: `sections/<id>/manifest.js` + copy any `sections/*/index.html` (change `data-section`) + create `sections/<id>/lessons/` + add the id to `sections/registry.js`.
3. Big curricula become a `kind:"module"` group (label `COURSE`) with phase/cluster groups inside. Plan first, build later — stubs are fine.
4. Consolidate by moving nodes between manifests and updating `scope` text.

## Importing content from another project

Bring over only lessons + learning material (not the old project's tooling, memory or nav). Put files under `sections/<section-id>/courses/<course>/`, keep relative links working, add a re-skin stylesheet (pattern: remap the old design tokens to the hub palette; keep code blocks dark), hide any old nav/sidebar, add `id`s to `<h2>`s for deep links, and describe unbuilt lessons as stubs with their original plans.

## Current sections

| # | Section | Contains |
|---|---|---|
| 1 | Web Realtime & Netcode | Foundations (WebSockets, transports, WebRTC, game loops) + netcode-feasibility spike case study |
| 2 | Rendering, Performance & Motion | Course: Web Animation & Motion Graphics (5/15 built) · Course: FE Web Performance Workshop (1/54 built) |
| 3 | Building with AI | Agents & tools; context engineering; choosing models |
| 4 | Working & Learning with AI | Individual AI workflows + the Lovett (2026) module |
| 5 | Platforms & Client Work | Courses: Shopify for Developers · WordPress for Front-End & UI Developers (stubs only so far) |
| 6 | Soft Skills & Collaboration | Trust and client relationships (The Trusted Advisor) |

## Notes

- **Read tracking is server-side** (Oct 2026): `server.js` stores read/unread + visit dates in `.hub-data/progress.json`, so it survives browser resets and is shared across browsers. `hub-progress.js` is the client. Mark a lesson read by clicking its diamond in the sidebar or the button on its dated label; courses/groups show `✓read/built`. Without the server (file://) read tracking is simply off. Back up or delete `.hub-data/` to keep/reset history.
- localStorage only holds UI state (collapsed sidebar, open folders) and the decorative coin counter; sessionStorage remembers the open page across hot reloads.
- Deep links: `http://localhost:4777/#/<lesson-or-module-id>` or `#/<section-id>` (e.g. `#/anim-05`, `#/fe-perf`, `#/rendering-performance-motion`).
- iframe pages talk to the hub with `parent.postMessage({hub:"open"|"section"|"at", id|file}, "*")`.
- Imported 2026-10-23 from `FE Web Performance Workshop` and `Web Animation and Motion Graphics Learning` (originals left untouched). Standalone FE scenario pages (`diagnose-the-page`, `vitals-field-simulator`) intentionally keep their own product-style designs.
- **Global search:** Cmd/Ctrl+P (or the Search button in the top bar) opens a palette that searches everything registered in the manifests: sections, modules/courses, lessons, planned stubs (including their plan text), each lesson's parts (`anchors`) and examples. It only knows what manifests declare, so a lesson that isn't registered, or a part missing from `anchors`, won't be found. Lesson body text is not indexed.
- **Home dashboard** (what you see with no lesson open) is built from the manifests plus your read/visit history, not hand-written: *Continue* (the last lesson you opened, the next unread one in its module, and a progress ring), *What's new* (the latest `history` note per lesson, skipping notes that start with "Restyled" or "Filed under", with bulk "Imported…" notes sorted last on a tie), and *Up next* (the next planned lesson in each course, in manifest order, courses you have started first, each with a "Copy build prompt" button that assembles an agent prompt from the stub's plan). Keep `history` notes meaningful, since they become the feed. There is deliberately no review or due-date concept.
