// Standalone page checks for ONE lesson file (no manifest needed). Useful while building a lesson.
// Run: node scripts/check-page.mjs sections/<id>/lessons/<file>.html
// Runs the page-level rules L1 to L12 from docs/LESSON-STANDARD.md and prints the section ids it found.
import fs from "node:fs"; import vm from "node:vm"; import path from "node:path"; import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rel = process.argv[2]; if (!rel) { console.error("usage: node scripts/check-page.mjs <lesson.html>"); process.exit(2); }
const file = path.resolve(root, rel); const html = fs.readFileSync(file, "utf8"); const errors = [], warns = [];
const err = (r, m) => errors.push(`[${r}] ${m}`), warn = (r, m) => warns.push(`[${r}] ${m}`);
if (!/<title>[^<]+<\/title>/.test(html)) err("L1", "missing <title>");
if (!/<link[^>]+href="(?:\.\.\/)+shared\/theme\.css"/.test(html)) err("L1", "must link shared/theme.css");
if (!/class="wrap"/.test(html)) err("L2", 'content must sit in <div class="wrap">');
if ((html.match(/<h1[\s>]/g) || []).length !== 1) err("L2", "expected exactly one <h1>");
if (!/class="subtitle"/.test(html)) err("L2", 'missing <p class="subtitle">');
const h2 = [...html.matchAll(/<h2 id="([^"]+)"/g)].map(m => m[1]);
if (h2.length < 3) warn("L4", `only ${h2.length} numbered sections`);
if (new Set(h2).size !== h2.length) err("L4", "duplicate <h2> ids");
if (!/class="(toc|objectives)"/.test(html)) err("L3", "needs a Contents list (.toc) or an 'In this lesson' box (.objectives)");
for (const id of h2) if (!new RegExp(`<h2 id="${id}"><span class="num">`).test(html)) err("L4", `<h2 id="${id}"> must start with <span class="num">`);
if (!h2.includes("sec-src")) err("L5", 'needs a final <h2 id="sec-src"> Takeaways & sources section');
else if (!/class="src"[\s\S]*?href="https?:/.test(html)) err("L5", 'sources need a <p class="src"> with at least one external link');
if (!/<footer>/.test(html)) err("L6", "missing <footer>");
const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => m[1]); const here = path.dirname(file);
for (const need of ["sections/registry.js", "shared/lesson-meta.js"]) if (!scripts.find(s => path.resolve(here, s) === path.join(root, need))) err("L7", `missing <script src> for ${need} (check the relative path)`);
const ext = scripts.filter(s => /^(https?:)?\/\//.test(s)); if (ext.length) err("L8", `third-party scripts not allowed: ${ext.join(", ")}`);
for (const m of html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)) { try { new vm.Script(m[1]); } catch (e) { err("L12", `inline script syntax error: ${e.message}`); } }
const style = (html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || "";
if (/background:\s*(#fff\b|#ffffff\b|white\b)/i.test(style)) warn("L9", "hard-coded white background in <style>: use theme variables");
const themeCss = fs.readFileSync(path.join(root, "shared/theme.css"), "utf8").replace(/url\([^)]*\)/g, "");
const themeClasses = new Set([...themeCss.matchAll(/(?:^|[\s,}>+~])\.([a-zA-Z][\w-]*)/gm)].map(m => m[1]));
const clash = [...new Set([...style.matchAll(/(?:^|[\s,}>+~])\.([a-zA-Z][\w-]*)\s*[{,:.\[]/gm)].map(m => m[1]))].filter(k => ["flow", "pill", "badge", "card", "mid"].includes(k) && themeClasses.has(k));
if (clash.length) warn("L11", `defines classes the theme already styles: .${clash.join(", .")}. Rename them`);
const ctl = [...html.matchAll(/<(button|input|select|textarea)\b[^>]*>/g)].filter(m => !/data-testid=/.test(m[0])); if (ctl.length) warn("L10", `${ctl.length} static control(s) without data-testid`);
console.log(`sections found: ${h2.join(", ")}`);
if (warns.length) console.log("warnings:\n  " + warns.join("\n  "));
if (errors.length) { console.log("errors:\n  " + errors.join("\n  ")); process.exit(1); }
console.log("page checks OK");
