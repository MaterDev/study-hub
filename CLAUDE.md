# Study Hub: how to work on this with Key

A personal, local study app: interactive lessons built with an agent. Structure and conventions live in
[`docs/HUB-STRUCTURE.md`](docs/HUB-STRUCTURE.md); read it before adding or moving content. Stated by Key, 2026-10-23.

## Viewing and verifying: only the hub, never raw pages
- Look at work only on the real server site, `http://localhost:4777/`, and open lessons by clicking through the hub
  (cards or sidebar) so they render in the hub's iframe. **Never** navigate the browser pane to a lesson's direct URL
  and never leave raw-page or `file://` tabs open. Keep one hub tab; close stray ones.
- The Write and Edit tools trigger a hook that auto-opens any `.html` file in the browser pane as a raw page. **Write and
  patch HTML (and JS/CSS for the hub) with Bash (heredoc or python), not Write/Edit**, so nothing pops up.
- Check changes in both skins (light "Sky Cartridge", dark "Console Black") using the LIGHT/DARK toggle.
- Start the server through the Terminal tool (`run_in_terminal`, `npm run dev`), not Bash: a server started from Bash
  can't be reached by the browser pane. Restart it after editing `server.js`.
- After moving files or editing manifests, crawl every manifest page and its local assets (fetch each; report non-200)
  before saying it works.

## Lessons: a fixed structure around free-form pages
The hub enforces an overall structure for lessons, modules and their manifest entries, and leaves the inside of each
lesson page free. The full rules are in [`docs/LESSON-STANDARD.md`](docs/LESSON-STANDARD.md); `npm run check` enforces them.
- **Any new lesson or module, and any lesson or module that is regenerated or substantially rebuilt, must follow the
  standard.** Mark its manifest node `"standard": "v1"` when you create or regenerate it. The check errors on an
  unmarked node dated 2026-10-24 or later. Older lessons are not retrofitted until they are regenerated.
- **Build lessons in sequence.** Within a course or cluster, build the next unbuilt lesson in order; don't skip ahead
  or cherry-pick later ones. (Different courses can each advance by their next lesson.) The home page's Up next shows
  only the next lesson per course for this reason. Stated by Key, 2026-10-27.
- Inside the page you decide: layout, visuals, diagrams, simulators and interactions. Make it visual and creative, not
  walls of text or plain tables. The hub is a study tool, not a game: the retro theme is decoration, so no game
  framing ("play", "level up") in copy.
- Around the page the standard decides: title and theme link, `.wrap` with one `<h1>` and a subtitle, an orientation
  block (Contents or "In this lesson"), numbered `<h2 id="secN">` sections, a Takeaways & sources section, a footer,
  and the two script tags. The manifest entry needs anchors that match, dates, history, a rebuild brief and basis.
- Source claims to primary documents, and say when something is my own synthesis or an illustrative number.
- Don't reuse the shared theme's component class names (`.flow`, `.pill`, `.badge`, `.card`, `.mid`) for page-specific widgets;
  the check warns (L11). Look at the result inside the hub, in both skins, and zoom in on text-on-fill areas.
- Use theme variables, not hard-coded light colours, so the dark skin works; new hard-coded fills need an override in
  `shared/theme-sega.css`. Give interactive elements `data-testid` values (kebab-case, scoped to the component).
- Before saying a lesson is done: `npm run check` reports Structure OK, the crawl is clean, and I have looked at it
  inside the hub in both skins.
- Research at Level 1 unless Key names a higher level.

## Chat explanations: formatted for the eye, written for the ear
When explaining educational content in chat, combine formatting with text-to-speech writing. Stated by Key, 2026-10-27.
- Give each answer a few short headed sections. Headings are plain words such as "What it means", "How it works", "Why it matters", "An example", with no symbols.
- Under each heading, write full spoken sentences in short paragraphs of one to four sentences, the way you would say it aloud. Use a list only for real parallel steps, with each item a complete sentence.
- Avoid tables, arrows, emoji, long file paths and code blocks in chat. Say code in words, for example "the enqueue style function". If code or a command must be seen, say so in one sentence and put it in a file or the lesson.
- Answer first, then explain. Keep replies compact. Bold only the key term when it first appears. The wrap-up box fields are plain sentences.
- If Key's message looks cut off, say so briefly and answer the most likely reading.

## Git
- Commit locally when work is done. No conversation links or session ids in commit messages.
- **Ask before pushing**, every time: Key has been answering "push it" per change. The repo is public
  (`MaterDev/study-hub`, MIT license); `.hub-data/` (reading progress) and `matrix-concept-art-app-stitch-project.md` stay untracked.

## Other
- The `study-hub` skill lives in the Claude plugin directory and is re-synced from elsewhere, so edits there don't last.
  Its source needs changing wherever it is actually stored.
- localStorage keys `learnhub-ui-v2` and `learnhub-coins-v1` keep their old names on purpose so saved state carries over.
