#!/usr/bin/env node
/* ============================================================
   Study Hub dev server — zero dependencies, hot reload.
     node server.js            → http://localhost:4777
     PORT=5000 node server.js  → custom port
     node server.js --open     → also opens the browser (macOS/Linux/Windows)
   • Serves this folder as static files (no-cache).
   • Injects a tiny live-reload client into every HTML page.
   • Watches the folder: CSS changes hot-swap in place (no reload);
     anything else reloads only the page(s) that need it. Inside the hub,
     a lesson edit reloads just the iframe; a manifest/hub edit reloads
     the hub and it reopens the page you were on.
   • Read tracking API (persistent, shared by every browser/session):
       GET  /__hub/api/progress           → { items: { <id>: {read, readAt, firstOpened, lastOpened, opens} } }
       POST /__hub/api/progress {id,read} → mark read / unread
       POST /__hub/api/opened   {id}      → record a visit
     Stored in .hub-data/progress.json; changes are pushed live to all open pages.
   ============================================================ */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const ROOT = __dirname;
const PORT = +process.env.PORT || 4777;
const HOST = process.env.HOST || "127.0.0.1";
const MIME = {
  ".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8",
  ".mjs":"text/javascript; charset=utf-8", ".pdf":"application/pdf", ".json":"application/json; charset=utf-8", ".md":"text/markdown; charset=utf-8",
  ".svg":"image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".gif":"image/gif",
  ".webp":"image/webp", ".avif":"image/avif", ".ico":"image/x-icon", ".woff2":"font/woff2", ".woff":"font/woff",
  ".mp4":"video/mp4", ".webm":"video/webm", ".wasm":"application/wasm", ".txt":"text/plain; charset=utf-8"
};

/* ── live-reload client (served at /__hub/live.js) ── */
const CLIENT = `(() => {
  if (window.__hubLive) return; window.__hubLive = true;
  const isTop = window.parent === window;
  const isHub = isTop && /^\\/(index\\.html)?$/.test(location.pathname);
  const me = decodeURIComponent(location.pathname.replace(/^\\//, "")) || "index.html";
  function swapCss(changed) {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(l => {
      const u = new URL(l.href, location.href);
      if (u.origin !== location.origin) return;
      if (decodeURIComponent(u.pathname.replace(/^\\//, "")) !== changed) return;
      u.searchParams.set("v", Date.now());
      const n = l.cloneNode(); n.href = u.href; n.onload = () => l.remove(); l.after(n);
    });
  }
  /* hub config = the shell, shared scripts, the section registry/renderer, and each section's manifest + home page.
     Lessons and courses live under sections/<id>/lessons|courses/ and are NOT hub config. */
  const HUB_CFG = /^(index\\.html|shared\\/[^/]+\\.js|sections\\/(registry|section-home)\\.(js|css)|sections\\/[^/]+\\/(manifest\\.js|index\\.html))$/;
  const IS_CONTENT = /^sections\\/[^/]+\\/(lessons|courses)\\//;
  function handle(p) {
    if (p.endsWith(".css")) return swapCss(p);              /* hot-swap, no reload */
    if (isHub) {                                             /* the hub shell */
      if (HUB_CFG.test(p) || (p.endsWith(".js") && !IS_CONTENT.test(p))) location.reload();
      return;                                                /* lesson edits reload the iframe, not the hub */
    }
    if (p === "index.html") return;                          /* hub shell changed: the hub reloads itself */
    if (p === me || HUB_CFG.test(p) || p.endsWith(".js")) location.reload();
  }
  let es, wait = 500;
  function connect() {
    es = new EventSource("/__hub/events");
    es.onmessage = e => { try { const d = JSON.parse(e.data);
      if (d.type === "progress") window.dispatchEvent(new CustomEvent("hub:progress", { detail: d }));
      else handle(d.path); } catch (_) {} };
    es.onopen = () => { if (wait > 500) location.reload(); wait = 500; };   /* server restarted */
    es.onerror = () => { es.close(); setTimeout(connect, wait = Math.min(wait * 2, 5000)); };
  }
  connect();
})();`;

/* ── SSE clients + file watcher ── */
const clients = new Set();
function broadcast(rel) { send_all({ path: rel }); }
function send_all(obj) {
  const msg = "data: " + JSON.stringify(obj) + "\n\n";
  for (const res of clients) res.write(msg);
}

/* ── read-tracking store (persistent, shared across browsers + sessions) ──
   .hub-data/progress.json  →  { schema, items: { <lessonId>: { read, readAt, firstOpened, lastOpened, opens } } }
   The dot-folder is ignored by the watcher, so saving never triggers a reload. */
const DATA_DIR = path.join(ROOT, ".hub-data");
const DATA_FILE = path.join(DATA_DIR, "progress.json");
let progress = { schema: "hub-progress/1", items: {} };
try { progress = JSON.parse(fs.readFileSync(DATA_FILE, "utf8")); progress.items = progress.items || {}; } catch (_) {}
let saveTimer = null;
function saveProgress() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const tmp = DATA_FILE + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(progress, null, 2));
    fs.renameSync(tmp, DATA_FILE);                       /* atomic replace */
  }, 50);
}
/* ── highlights and notes (persistent): .hub-data/annotations.json → { schema, items: { <docKey>: [annotation] } } ── */
const NOTES_FILE = path.join(DATA_DIR, "annotations.json");
let notes = { schema: "hub-annotations/1", items: {} };
try { notes = JSON.parse(fs.readFileSync(NOTES_FILE, "utf8")); notes.items = notes.items || {}; } catch (_) {}
function saveNotes() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = NOTES_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(notes, null, 2));
  fs.renameSync(tmp, NOTES_FILE);
}
/* machine-local settings: .hub-data/settings.json (syncOnPush: whenever Claude pushes on this machine, refresh study-data/study-data.json first) */
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
let settings = { syncOnPush: true };
try { settings = Object.assign(settings, JSON.parse(fs.readFileSync(SETTINGS_FILE, "utf8"))); } catch (_) {}
function saveSettings() { fs.mkdirSync(DATA_DIR, { recursive: true }); fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2)); }
function bundle() {
  return { schema: "study-hub-data/1", exportedAt: new Date().toISOString(), progress: progress.items, annotations: notes.items };
}
function newer(a, b, keys) { const ts = o => keys.map(k => o && o[k]).filter(Boolean).sort().pop() || ""; return ts(b) > ts(a) ? b : a; }
function importBundle(b, mode) {
  const inP = (b.progress && typeof b.progress === "object") ? b.progress : {}, inN = (b.annotations && typeof b.annotations === "object") ? b.annotations : {};
  let p = 0, n = 0;
  if (mode === "replace") { progress.items = {}; notes.items = {}; }
  for (const id of Object.keys(inP)) { if (!ID_OK.test(id)) continue; const cur = progress.items[id]; progress.items[id] = cur ? newer(cur, inP[id], ["lastOpened", "readAt"]) : inP[id]; p++; }
  for (const doc of Object.keys(inN)) { if (!Array.isArray(inN[doc]) || doc.length > 300) continue;
    const have = new Map((notes.items[doc] || []).map(a => [a.id, a]));
    for (const a of inN[doc]) { if (!a || !a.id) continue; have.set(a.id, have.has(a.id) ? newer(have.get(a.id), a, ["updated", "created"]) : a); n++; }
    notes.items[doc] = [...have.values()]; }
  progress.updated = new Date().toISOString(); notes.updated = progress.updated; saveProgress(); saveNotes();
  return { ok: true, progressItems: p, annotations: n, mode };
}
const ID_OK = /^[\w.\-]{1,120}$/;
function readBody(req, cb) {
  let b = ""; req.on("data", c => { b += c; if (b.length > 2e6) req.destroy(); });
  req.on("end", () => { try { cb(null, JSON.parse(b || "{}")); } catch (e) { cb(e); } });
}
function api(req, res, url) {
  const json = (code, obj) => send(res, code, MIME[".json"], JSON.stringify(obj));
  /* study data: everything personal (progress, highlights, notes) as one bundle, for backup, moving machines or keeping in the repo */
  if (url.pathname === "/__hub/api/export" && req.method === "GET") return json(200, bundle());
  if (url.pathname === "/__hub/api/export-to-repo" && req.method === "POST") {
    const dir = path.join(ROOT, "study-data"); fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, "study-data.json"); const tmp = file + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(bundle(), null, 2)); fs.renameSync(tmp, file);
    return json(200, { ok: true, file: "study-data/study-data.json" });
  }
  if (url.pathname === "/__hub/api/settings") {
    if (req.method === "GET") return json(200, settings);
    if (req.method === "POST") return readBody(req, (err, b) => {
      if (err || !b || typeof b.syncOnPush !== "boolean") return json(400, { error: "bad body" });
      settings.syncOnPush = b.syncOnPush; saveSettings(); json(200, settings);
    });
  }
  if (url.pathname === "/__hub/api/reset" && req.method === "POST") {
    progress.items = {}; notes.items = {}; progress.updated = notes.updated = new Date().toISOString(); saveProgress(); saveNotes();
    return json(200, { ok: true });
  }
  if (url.pathname === "/__hub/api/import" && req.method === "POST") return readBody(req, (err, b) => {
    if (err || !b || !b.bundle || typeof b.bundle !== "object") return json(400, { error: "bad body" });
    const r = importBundle(b.bundle, b.mode === "replace" ? "replace" : "merge");
    json(200, r);
  });
  if (url.pathname === "/__hub/api/annotations") {
    if (req.method === "GET") return json(200, notes);
    if (req.method === "POST") return readBody(req, (err, b) => {
      if (err || !b || typeof b.doc !== "string" || b.doc.length > 300 || !Array.isArray(b.items) || b.items.length > 1000) return json(400, { error: "bad body" });
      if (b.items.length) notes.items[b.doc] = b.items; else delete notes.items[b.doc];
      notes.updated = new Date().toISOString(); saveNotes(); json(200, { ok: true });
    });
    return json(405, { error: "method" });
  }
  if (url.pathname === "/__hub/api/progress" && req.method === "GET") return json(200, progress);
  if (req.method !== "POST") return json(405, { error: "method" });
  readBody(req, (err, body) => {
    if (err || !body || !ID_OK.test(String(body.id || ""))) return json(400, { error: "bad id" });
    const id = body.id, now = new Date().toISOString();
    const it = progress.items[id] || (progress.items[id] = { read: false, readAt: null, firstOpened: null, lastOpened: null, opens: 0 });
    if (url.pathname === "/__hub/api/progress") {
      it.read = !!body.read; it.readAt = it.read ? now : null;
    } else if (url.pathname === "/__hub/api/opened") {
      it.firstOpened = it.firstOpened || now; it.lastOpened = now; it.opens = (it.opens || 0) + 1;
    } else return json(404, { error: "unknown endpoint" });
    progress.updated = now; saveProgress();
    send_all({ type: "progress", id, item: it });
    json(200, { id, item: it });
  });
}
const pending = new Map();
function onChange(_evt, file) {
  if (!file) return;
  const rel = String(file).split(path.sep).join("/");
  if (/(^|\/)\.|node_modules|~$|\.swp$|\.tmp$/.test(rel)) return;
  clearTimeout(pending.get(rel));
  pending.set(rel, setTimeout(() => { pending.delete(rel); console.log("  ↻ " + rel); broadcast(rel); }, 90));
}
try { fs.watch(ROOT, { recursive: true }, onChange); }
catch (e) {   /* very old Node on Linux: fall back to watching each directory */
  (function walk(dir) {
    fs.watch(dir, (ev, f) => f && onChange(ev, path.relative(ROOT, path.join(dir, f))));
    for (const d of fs.readdirSync(dir, { withFileTypes: true }))
      if (d.isDirectory() && !d.name.startsWith(".") && d.name !== "node_modules") walk(path.join(dir, d.name));
  })(ROOT);
}

/* ── HTTP ── */
const INJECT = '<script src="/__hub/live.js"></script>';
function send(res, code, type, body) {
  res.writeHead(code, { "Content-Type": type, "Cache-Control": "no-store" }); res.end(body);
}
http.createServer((req, res) => {
  let url;
  try { url = new URL(req.url.replace(/^\/+/, "/"), "http://x"); } catch (_) { return send(res, 400, MIME[".txt"], "Bad request"); }
  if (url.pathname === "/__hub/events") {
    res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-store", Connection: "keep-alive" });
    res.write("retry: 1000\n\n"); clients.add(res);
    const ping = setInterval(() => res.write(": ping\n\n"), 25000);
    req.on("close", () => { clearInterval(ping); clients.delete(res); });
    return;
  }
  if (url.pathname === "/__hub/live.js") return send(res, 200, MIME[".js"], CLIENT);
  if (url.pathname.startsWith("/__hub/api/")) return api(req, res, url);
  if (/(^|\/)\.hub-data(\/|$)/.test(url.pathname)) return send(res, 403, MIME[".txt"], "Forbidden");

  let rel;
  try { rel = decodeURIComponent(url.pathname); } catch (_) { return send(res, 400, MIME[".txt"], "Bad request"); }
  let file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) return send(res, 403, MIME[".txt"], "Forbidden");
  fs.stat(file, (err, st) => {
    if (!err && st.isDirectory()) {
      if (!rel.endsWith("/")) { res.writeHead(301, { Location: url.pathname + "/" + url.search }); return res.end(); }
      file = path.join(file, "index.html");
    }
    fs.readFile(file, (err2, buf) => {
      if (err2) return send(res, 404, MIME[".html"],
        `<!doctype html><meta charset=utf-8><body style="font:16px system-ui;padding:40px;background:#cbe5f7;color:#2a3150">
         <h1>404 — not here (yet)</h1><p><code>${rel.replace(/</g,"&lt;")}</code> doesn't exist.</p><p><a href="/">Back to the hub</a></p>${INJECT}`);
      const ext = path.extname(file).toLowerCase();
      if (ext === ".html") {
        let html = buf.toString("utf8");
        const i = html.lastIndexOf("</body>");
        html = i >= 0 ? html.slice(0, i) + INJECT + html.slice(i) : html + INJECT;
        return send(res, 200, MIME[".html"], html);
      }
      send(res, 200, MIME[ext] || "application/octet-stream", buf);
    });
  });
}).on("clientError", (e, sock) => sock.destroy()).listen(PORT, HOST, () => {
  const u = `http://localhost:${PORT}/`;
  console.log(`\n  Study Hub → ${u}\n  watching ${ROOT}\n  (Ctrl+C to stop)\n`);
  if (process.argv.includes("--open")) {
    const cmd = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start \"\"" : "xdg-open";
    exec(`${cmd} ${u}`);
  }
}).on("error", e => {
  if (e.code === "EADDRINUSE") console.error(`Port ${PORT} is busy — try PORT=${PORT + 1} node server.js`);
  else console.error(e); process.exit(1);
});
