# Lesson & module standard (v1)

The hub enforces an **overall structure** for lessons, modules and their manifest entries, and leaves the
**inside of each lesson page** free. The point of the structure is that every lesson is findable, dated, sourced,
searchable, skinnable and rebuildable. The point of the freedom is that each topic gets the visuals and
interactions that teach it best.

Enforced by `npm run check` (`scripts/check-structure.mjs`). Rule ids below match its messages.

## When it applies

- **Every new lesson or module, and every regenerated or substantially rebuilt one, must follow this standard.**
  Mark its manifest node `"standard": "v1"`. Do that when you create or regenerate it, whatever the date.
- The checker enforces the full rules for every node carrying the marker, and it **errors if an unmarked lesson or
  module is created or updated on or after 2026-10-24** (`STANDARD_FROM` in the script), so new or regenerated work
  can't skip it.
- Older lessons are grandfathered. They are not retrofitted; they pick up the marker only when they are regenerated.
  A pure restyle or bug fix does not count as regenerating.
- A **stub** counts as new work: stubs carry the marker and a complete plan, so the lesson that gets built from them
  starts from a good brief.

## Enforced: the structure

### A lesson page
| Rule | Requirement |
|---|---|
| L1 | A real `<title>`, and a link to `shared/theme.css` so both skins apply. |
| L2 | Content in `<div class="wrap">` with exactly one `<h1>` and a `<p class="subtitle">` under it. |
| L3 | An orientation block near the top: a Contents list (`<div class="toc">`) or an "In this lesson" box (`<div class="objectives">`). |
| L4 | Sections are `<h2 id="secN"><span class="num">N</span> Title</h2>`, with unique ids (`sec1`, `sec2`, … and `sec-src` for sources). Aim for 3 or more. |
| L5 | A standalone lesson ends with a **Takeaways & sources** section (`id="sec-src"`): a short takeaway list plus sources in `<p class="src">` paragraphs with at least one external link. A lesson that is a part of a module may leave sources to the module overview. |
| L6 | A `<footer>`. |
| L7 | The last scripts load `sections/registry.js` and `shared/lesson-meta.js` (relative paths that resolve), which draw the dated label and the read button. |
| L8 | No third-party scripts or CDNs. Lessons are self-contained. |
| L9 (warning) | No hard-coded white or light page backgrounds; use theme variables so the dark skin works. |
| L12 | Inline `<script>` blocks must parse. (A stray doubled backslash from a shell heredoc once broke a whole lesson silently.) |
| L10 (warning) | Interactive controls carry `data-testid` (kebab-case, scoped to the component). |
| L11 (warning) | Don't reuse class names the shared theme already styles as components (for example `.flow`, `.pill`, `.badge`, `.card`, `.mid`): the theme's colours, sizing and text-transform leak in, and text can become unreadable. Give page-specific classes their own names (a short prefix works). |

### Its manifest entry (lesson)
| Rule | Requirement |
|---|---|
| M1 | A unique `id` across the whole hub. |
| M2 | `title`, `file` (exists), a `#rrggbb` `pip`, and a one-sentence `blurb`. |
| M3 | `anchors[]`: each `anchor` is an `<h2 id>` that exists in the file. List every section. |
| M4 | `dates`: `created`, `updated`, `verified` (YYYY-MM-DD). `updated` is the last change to the content, not a restyle. |
| M5 | `history[]`: at least one `{date, note}`. Notes feed the home page's "What's new", so make them say what changed. |
| M6 | `rebuild`: a `brief` and a non-empty `basis[]` (the sources/inputs needed to recreate the lesson). |
| — | `"standard": "v1"`. |

### A stub
`status: "stub"`, `file: "shared/outline.html?id=<id>"`, `dates.planned`, history, rebuild, and a `plan` with `goals[]`,
`concepts[]`, `takeaways[]`, `connections[]` and a `build` idea (P1, P2).

### A module or course (group with `kind: "module"`)
| Rule | Requirement |
|---|---|
| D1 | `title`, `summary`, a `home` that exists (an overview page, or `shared/outline.html?id=<id>`), at least one child, `dates` (created, updated, verified), history and rebuild. A course also needs a `pip` colour. |
| D2 | A course needs a `throughline` (what ties the clusters together). |
| D3 (warning) | A built module puts its sources in the overview page (`<p class="src">`) or in the manifest `source`. |

### A section
S1 to S2: folder, `manifest.js` and `index.html` present and registered; `scope` has purpose, includes and admission.
Content lives under `sections/<id>/lessons/` or `courses/`.

## Page width
The lesson window is up to 1080px wide (`--content-w` in `shared/theme.css`) so widgets have room, while running text (direct `<p>`, `<ul>`, `<ol>` children of `.wrap`) is held to a comfortable `--measure` of 78ch. Build widgets to fill the page; don't put a width cap on your own sections. Give grids `minmax(0, …)` columns or rely on `.stage div{min-width:0}` so long unbreakable text can't push a column out of its box, and check the page at phone width.

## Free: everything inside the page
The standard says nothing about, and the checker does not look at:

- the page's layout, visuals, diagrams, simulators and interactions;
- how many sections there are beyond three, and how long the lesson is;
- the CSS and JS you write for the page;
- tone, examples, and how you open each section.

Expectations that aren't machine-checkable but still apply: make it **visual and interactive**, not a wall of text;
**source claims to primary documents**; label your own synthesis and any illustrative numbers as such; keep it
introductory unless the course says otherwise; use theme variables so both skins work; and **check it inside the hub
in light and dark**, never as a raw page.

## Checklist for building or regenerating
0. Build in course order: take the next unbuilt lesson in its course, never a later one.
1. Plan from the stub (or the existing lesson's rebuild brief). Research primary sources first.
2. Build the page: free inside, standard around it.
3. Register or update the manifest node, set `"standard": "v1"`, bump `updated` and add a meaningful `history` note.
4. `npm run check` until it reports **Structure OK**; read the warnings.
5. Crawl and look at it in the hub, in both skins.
6. Commit locally; ask before pushing.
