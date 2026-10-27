// Checks the hub's enforced structure (docs/LESSON-STANDARD.md).
// Always: manifest sanity (unique ids, built files exist, anchors resolve).
// Only for nodes marked "standard": "v1": the full lesson / module / stub rules.
// Page internals (layout, visuals, interaction) are deliberately NOT checked.
// Run: npm run check        Exit code 1 if any error. Warnings never fail.
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Lessons and modules created or updated on/after this date must carry "standard": "v1".
// Older ones are grandfathered until they are regenerated (then they get the marker).
const STANDARD_FROM = "2026-10-24";
const errors = [], warns = [];
const err = (where, rule, msg) => errors.push(`${where}  [${rule}] ${msg}`);
const warn = (where, rule, msg) => warns.push(`${where}  [${rule}] ${msg}`);

const reg = fs.readFileSync(path.join(root, "sections/registry.js"), "utf8");
const ids = [...reg.matchAll(/^\s*"([a-z0-9-]+)",?\s*$/gm)].map(m => m[1]);
const seen = new Map(), sections = [];
for (const id of ids) {
  const mp = path.join(root, "sections", id, "manifest.js");
  if (!fs.existsSync(mp)) { err(`sections/${id}`, "S1", "registered section has no manifest.js"); continue; }
  const w = { HUB_SECTIONS: [] }; vm.runInNewContext(fs.readFileSync(mp, "utf8"), { window: w });
  const s = w.HUB_SECTIONS[0]; if (!s) { err(`sections/${id}`, "S1", "manifest did not register a section"); continue; }
  if (s.id !== id) err(`sections/${id}`, "S1", `manifest id "${s.id}" differs from folder`);
  if (!fs.existsSync(path.join(root, "sections", id, "index.html"))) err(`sections/${id}`, "S1", "missing index.html (section home)");
  if (!s.scope || !s.scope.purpose || !(s.scope.includes || []).length || !(s.scope.admission || []).length) err(`sections/${id}`, "S2", "section scope needs purpose, includes and admission");
  sections.push(s);
}

// Component classes the shared theme already styles. A lesson that redefines one as its own base class inherits the
// theme's colours, sizing and text-transform, which is how unreadable text happens (e.g. .flow is a dark panel).
const themeCss = fs.readFileSync(path.join(root, "shared/theme.css"), "utf8").replace(/url\([^)]*\)/g, "");
const themeClasses = new Set([...themeCss.matchAll(/(?:^|[\s,}>+~])\.([a-zA-Z][\w-]*)/gm)].map(m => m[1]));
const HAZARD = new Set(["flow", "pill", "badge", "card", "mid"]);
const has = (o, k) => o && o[k] != null && o[k] !== "" && !(Array.isArray(o[k]) && !o[k].length);
const exists = rel => fs.existsSync(path.join(root, rel.split("?")[0].split("#")[0]));
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function checkDates(w, n, stub) {
  const d = n.dates || {};
  if (stub) { if (!DATE.test(d.planned || "")) err(w, "M4", "stub needs dates.planned (YYYY-MM-DD)"); return; }
  for (const k of ["created", "updated", "verified"]) if (!DATE.test(d[k] || "")) err(w, "M4", `dates.${k} missing or not YYYY-MM-DD`);
}
function checkHistoryRebuild(w, n) {
  if (!Array.isArray(n.history) || !n.history.length || !n.history.every(h => DATE.test(h.date || "") && h.note)) err(w, "M5", "history needs at least one {date, note}");
  if (!n.rebuild || !n.rebuild.brief || !Array.isArray(n.rebuild.basis) || !n.rebuild.basis.length) err(w, "M6", "rebuild needs a brief and a non-empty basis[]");
}

function checkPage(w, n, sec, parents) {
  const rel = n.file.split("?")[0].split("#")[0];
  const html = fs.readFileSync(path.join(root, rel), "utf8");
  const inModule = parents.some(p => p.kind === "module");
  if (!/<title>[^<]+<\/title>/.test(html)) err(w, "L1", "missing <title>");
  if (!/<link[^>]+href="(?:\.\.\/)+shared\/theme\.css"/.test(html)) err(w, "L1", "must link shared/theme.css so both skins apply");
  if (!/class="wrap"/.test(html)) err(w, "L2", 'content must sit in <div class="wrap">');
  const h1 = html.match(/<h1[\s>]/g) || []; if (h1.length !== 1) err(w, "L2", `expected exactly one <h1>, found ${h1.length}`);
  if (!/class="subtitle"/.test(html)) err(w, "L2", 'missing <p class="subtitle"> under the title');
  const h2 = [...html.matchAll(/<h2 id="([^"]+)"/g)].map(m => m[1]);
  if (h2.length < 3) warn(w, "L4", `only ${h2.length} numbered sections; most lessons have 3+`);
  if (new Set(h2).size !== h2.length) err(w, "L4", "duplicate <h2> ids");
  if (!/class="(toc|objectives)"/.test(html)) err(w, "L3", 'open with an orientation block: a Contents list (<div class="toc">) or an "In this lesson" box (<div class="objectives">)');
  for (const id of h2) if (!new RegExp(`<h2 id="${id}"><span class="num">`).test(html)) err(w, "L4", `<h2 id="${id}"> must start with <span class="num">`);
  const anchors = (n.anchors || []).map(a => a.anchor);
  for (const a of anchors) if (!h2.includes(a)) err(w, "M3", `manifest anchor "${a}" has no matching <h2 id>`);
  for (const id of h2) if (!anchors.includes(id)) warn(w, "M3", `<h2 id="${id}"> is not listed in the manifest anchors`);
  const needsSources = !inModule;
  if (needsSources) {
    if (!h2.includes("sec-src")) err(w, "L5", 'standalone lessons end with a "Takeaways & sources" section (<h2 id="sec-src">)');
    else if (!/class="src"[\s\S]*?href="https?:/.test(html)) err(w, "L5", "sources section needs at least one external link in a <p class=\"src\">");
  } else if (!n.sourcesInModule) { /* module parts rely on the module overview for sources */ }
  if (!/<footer>/.test(html)) err(w, "L6", "missing <footer>");
  const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => m[1]);
  const here = path.dirname(path.join(root, rel));
  for (const need of ["sections/registry.js", "shared/lesson-meta.js"]) {
    const hit = scripts.find(s => path.resolve(here, s) === path.join(root, need));
    if (!hit) err(w, "L7", `missing <script src> for ${need} (needed for the dated label)`);
  }
  const ext = scripts.filter(s => /^(https?:)?\/\//.test(s)); if (ext.length) err(w, "L8", `third-party scripts are not allowed: ${ext.join(", ")}`);
  if (/<style[\s\S]*?background:\s*(#fff\b|#ffffff\b|white\b)/i.test(html)) warn(w, "L9", "hard-coded white background in <style>: use theme variables so the dark skin works");
  for (const m of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    try { new vm.Script(m[1]); } catch (e) { err(w, "L12", `inline script has a syntax error: ${e.message}`); }
  }
  const style = (html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || "";
  const clash = [...new Set([...style.matchAll(/(?:^|[\s,}>+~])\.([a-zA-Z][\w-]*)\s*[{,:.\[]/gm)].map(m => m[1]))].filter(k => HAZARD.has(k) && themeClasses.has(k));
  if (clash.length) warn(w, "L11", `defines class(es) the shared theme already styles: .${clash.join(", .")}. Rename them (e.g. a page prefix) so theme styles don't leak in`);
  const ctl = [...html.matchAll(/<(button|input|select|textarea)\b[^>]*>/g)].filter(m => !/data-testid=/.test(m[0]));
  if (ctl.length) warn(w, "L10", `${ctl.length} interactive element(s) in the static HTML without data-testid`);
}

function walk(nodes, sec, parents) {
  for (const n of nodes || []) {
    const w = `${sec.id}/${n.id}`;
    if (!n.id) { err(`${sec.id}`, "M1", `node without id: "${n.title}"`); continue; }
    if (seen.has(n.id)) err(w, "M1", `id also used in ${seen.get(n.id)}`); else seen.set(n.id, sec.id);
    const std = n.standard === "v1";
    const stub = n.status === "stub";
    if (!std && (n.type === "lesson" || n.kind === "module") && n.dates) {
      const d = stub ? n.dates.planned : (n.dates.updated || n.dates.created);
      if (d && d >= STANDARD_FROM) err(w, "G1", `created/updated ${d}: new or regenerated work must carry "standard": "v1" and meet docs/LESSON-STANDARD.md`);
    }
    if (n.type === "lesson") {
      if (!stub) {
        if (!n.file || !exists(n.file)) err(w, "M2", `file not found: ${n.file}`);
        else for (const a of n.anchors || []) {
          const html = fs.readFileSync(path.join(root, n.file.split("?")[0]), "utf8");
          if (!new RegExp(`id="${a.anchor}"`).test(html)) { (std ? err : warn)(w, "M3", `anchor "${a.anchor}" not found in ${n.file}`); }
        }
      }
      if (std) {
        for (const k of ["title", "blurb"]) if (!has(n, k)) err(w, "M2", `missing ${k}`);
        if (n.blurb && n.blurb.length > 190) warn(w, "M2", `blurb is ${n.blurb.length} chars; keep it to one sentence`);
        if (!/^#[0-9a-fA-F]{6}$/.test(n.pip || "")) err(w, "M2", "pip must be a #rrggbb colour");
        checkDates(w, n, stub); checkHistoryRebuild(w, n);
        if (stub) {
          const p = n.plan || {};
          for (const k of ["goals", "concepts", "takeaways", "connections"]) if (!Array.isArray(p[k]) || !p[k].length) err(w, "P1", `stub plan needs ${k}[]`);
          if (!p.build) err(w, "P1", "stub plan needs a build idea");
          if (!/^shared\/outline\.html\?id=/.test(n.file || "")) err(w, "P2", "stub file must point at shared/outline.html?id=<id>");
        } else if (n.file && exists(n.file)) {
          if (!has(n, "anchors")) err(w, "M3", "built lesson needs anchors[]");
          checkPage(w, n, sec, parents);
        }
      }
    } else if (n.type === "group" && n.kind === "module") {
      if (std) {
        for (const k of ["title", "summary", "home"]) if (!has(n, k)) err(w, "D1", `module missing ${k}`);
        if (n.home && !exists(n.home)) err(w, "D1", `module home not found: ${n.home}`);
        if (!/^#[0-9a-fA-F]{6}$/.test(n.pip || "") && n.label === "COURSE") err(w, "D1", "course needs a pip colour");
        checkDates(w, n, false); checkHistoryRebuild(w, n);
        if (n.label === "COURSE" && !has(n, "throughline")) err(w, "D2", "course needs a throughline");
        if (!(n.children || []).length) err(w, "D1", "module has no children");
        if (!n.source && !/outline\.html/.test(n.home || "")) { const home = n.home && exists(n.home) ? fs.readFileSync(path.join(root, n.home.split("?")[0]), "utf8") : ""; if (!/class="src"/.test(home)) warn(w, "D3", "built module: put sources in the overview page (<p class=\"src\">) or the manifest `source`"); }
      }
    } else if (n.type === "group" && std) {
      if (!has(n, "summary")) err(w, "D1", "group needs a one-sentence summary");
    }
    if (n.children) walk(n.children, sec, parents.concat([n]));
  }
}
for (const s of sections) walk(s.children, s, []);

const marked = [...seen.keys()].length;
console.log(`Checked ${sections.length} sections, ${marked} nodes.`);
if (warns.length) console.log(`\nWarnings (${warns.length}):\n` + warns.map(x => "  ! " + x).join("\n"));
if (errors.length) { console.log(`\nErrors (${errors.length}):\n` + errors.map(x => "  ✗ " + x).join("\n")); process.exit(1); }
console.log("\nStructure OK.");
