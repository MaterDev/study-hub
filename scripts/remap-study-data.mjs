// Remap highlight and note keys after lesson files move.
// Annotations are keyed by "lesson:<repo-relative path>"; progress is keyed by lesson id and never needs this.
//
//   node scripts/remap-study-data.mjs                      apply shared/path-remap.json to the files below (dry run)
//   node scripts/remap-study-data.mjs --apply              write the changes
//   node scripts/remap-study-data.mjs <old-prefix> <new-prefix> [--apply]   one-off prefix, e.g.
//        sections/old/lessons/foo- sections/new/lessons/foo-
//
// Files: .hub-data/annotations.json and study-data/study-data.json. Stop the server first (or it will overwrite
// .hub-data on its next save); a server restart also re-applies shared/path-remap.json by itself.
// Where an old and a new key both exist their annotations are merged by id.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2), apply = args.includes("--apply"), pos = args.filter(a => !a.startsWith("--"));
let rules;
if (pos.length === 2) rules = [{ from: pos[0], to: pos[1] }];
else if (pos.length === 0) rules = JSON.parse(fs.readFileSync(path.join(root, "shared", "path-remap.json"), "utf8")).paths;
else { console.error("Give either no prefixes (use shared/path-remap.json) or an old and a new prefix."); process.exit(2); }
function remap(items) {
  const out = {}; let moved = 0;
  for (const [key, list] of Object.entries(items || {})) {
    let k = key;
    for (const r of rules) { const m = key.match(/^([a-z]+:)(.*)$/); if (m && m[2].startsWith(r.from)) { k = m[1] + r.to + m[2].slice(r.from.length); break; } }
    if (k !== key) moved += list.length;
    const have = new Map((out[k] || []).map(a => [a.id, a]));
    for (const a of list) have.set(a.id, a);
    out[k] = [...have.values()];
  }
  return { out, moved };
}
for (const [file, get, set] of [
  [".hub-data/annotations.json", d => d.items, (d, v) => { d.items = v; d.updated = new Date().toISOString(); }],
  ["study-data/study-data.json", d => d.annotations, (d, v) => { d.annotations = v; }],
]) {
  const f = path.join(root, file); let d; try { d = JSON.parse(fs.readFileSync(f, "utf8")); } catch (_) { console.log(file + ": not present, skipped"); continue; }
  const { out, moved } = remap(get(d));
  console.log(`${file}: ${moved} annotation(s) under remapped keys${apply ? "" : " (dry run, add --apply to write)"}`);
  if (apply && moved) { set(d, out); fs.writeFileSync(f, JSON.stringify(d, null, 2) + (file.startsWith("study-data") ? "\n" : "")); }
}
