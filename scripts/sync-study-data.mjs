// Refresh study-data/study-data.json from your saved progress, highlights and notes.
// Run before pushing (Claude does this on this machine). Skips when:
//   - the machine setting "sync on push" is off (DATA panel, or .hub-data/settings.json {"syncOnPush":false}), or
//   - there is no saved data here (a fresh clone), or nothing changed since the last sync.
// Use --force to write regardless of the setting. The website does not publish this file (see _config.yml).
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const force = process.argv.includes("--force"), port = process.env.PORT || 4777;
const read = f => { try { return JSON.parse(fs.readFileSync(path.join(root, ".hub-data", f), "utf8")); } catch (_) { return null; } };
const settings = Object.assign({ syncOnPush: true }, read("settings.json") || {});
if (!settings.syncOnPush && !force) { console.log("Sync on push is off for this machine. Skipped."); process.exit(0); }
let bundle = null;
try { const r = await fetch(`http://localhost:${port}/__hub/api/export`); if (r.ok) bundle = await r.json(); } catch (_) {}
if (!bundle) {
  const p = read("progress.json"), a = read("annotations.json");
  if (!p && !a) { console.log("No saved study data on this machine. Skipped."); process.exit(0); }
  bundle = { schema: "study-hub-data/1", exportedAt: new Date().toISOString(), progress: (p && p.items) || {}, annotations: (a && a.items) || {} };
}
const file = path.join(root, "study-data", "study-data.json");
const strip = b => JSON.stringify({ ...b, exportedAt: undefined });
let old = null; try { old = JSON.parse(fs.readFileSync(file, "utf8")); } catch (_) {}
if (old && strip(old) === strip(bundle)) { console.log("study-data/study-data.json is already up to date."); process.exit(0); }
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, JSON.stringify(bundle, null, 2) + "\n");
console.log("Updated study-data/study-data.json. Commit it with the push.");
