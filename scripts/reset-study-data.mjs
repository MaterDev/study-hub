// Clear your personal study data (read progress, highlights, notes) and start over.
//   npm run reset                 asks first, clears .hub-data/
//   npm run reset -- --yes        no question
//   npm run reset -- --repo-copy  also delete the committed copy, study-data/study-data.json
// If the hub server is running it is told to clear its own memory, so nothing is written back.
// Browser-side copies (the hub's own storage, or the live site's) are cleared from the DATA panel in the hub.
import fs from "node:fs"; import path from "node:path"; import readline from "node:readline"; import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2), yes = args.includes("--yes"), repoCopy = args.includes("--repo-copy");
const port = process.env.PORT || 4777;
const targets = [path.join(root, ".hub-data", "progress.json"), path.join(root, ".hub-data", "annotations.json")];
if (repoCopy) targets.push(path.join(root, "study-data", "study-data.json"));
const found = targets.filter(f => fs.existsSync(f));
if (!found.length) { console.log("No saved study data found in this folder. Nothing to reset."); process.exit(0); }
{ console.log("This will delete:"); found.forEach(f => console.log("  " + path.relative(root, f))); }
async function ask() {
  if (yes) return true;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(res => rl.question("Type yes to continue: ", a => { rl.close(); res(a.trim().toLowerCase() === "yes"); }));
}
if (!(await ask())) { console.log("Nothing changed."); process.exit(0); }
let serverCleared = false;
try { const r = await fetch(`http://localhost:${port}/__hub/api/reset`, { method: "POST" }); serverCleared = r.ok; } catch (_) {}
for (const f of found) fs.rmSync(f, { force: true });
console.log(serverCleared ? "Cleared, and the running hub server was told to forget it too." : "Cleared.");
console.log("If you also used the hub in a browser, open the DATA panel there and choose Reset my data to clear that copy.");
