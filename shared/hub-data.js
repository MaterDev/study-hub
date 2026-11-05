/* Hub study data: back up, move or keep in the repo everything personal (read progress, highlights, notes).
   One bundle: { schema:"study-hub-data/1", exportedAt, progress:{id:item}, annotations:{docKey:[annotation]} }.
   - Export to repo (needs the server): writes study-data/study-data.json, which you can commit. The repo may be public: notes you commit are public.
   - Download backup: the same bundle as a file, from any browser.
   - Import: from the repo copy or a chosen file; "merge" keeps the newer of each item, "replace" starts from the file.
   - Optional: use the repo copy automatically when this browser has no data (off by default).
   With the server running, the server's files win and import writes to them; without it, data lives in this browser's storage. */
(function(){
  var LS_P = "hub-progress-v1", LS_N = "hub-notes-v1", LS_AUTO = "hub-use-repo-data", REPO_FILE = "study-data/study-data.json";
  function lsGet(k, d){ try{ var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; }catch(e){ return d; } }
  function lsSet(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  var serverUp = null, serverSettings = {syncOnPush:true};
  function hasServer(){ if(serverUp != null) return Promise.resolve(serverUp);
    return fetch("/__hub/api/export").then(function(r){ if(!r.ok) throw 0; return r.json(); }).then(function(b){ serverUp = b; return b; }).catch(function(){ serverUp = false; return false; }); }
  function localBundle(){ return { schema:"study-hub-data/1", exportedAt:new Date().toISOString(), progress:lsGet(LS_P,{}), annotations:lsGet(LS_N,{}) }; }
  function current(){ return hasServer().then(function(b){ return b || localBundle(); }); }
  function newer(a, b, keys){ function ts(o){ return keys.map(function(k){ return o && o[k]; }).filter(Boolean).sort().pop() || ""; } return ts(b) > ts(a) ? b : a; }
  function counts(b){ var n = 0; Object.keys(b.annotations||{}).forEach(function(d){ n += (b.annotations[d]||[]).length; });
    var read = 0; Object.keys(b.progress||{}).forEach(function(k){ if(b.progress[k] && b.progress[k].read) read++; });
    return {read:read, highlights:n}; }
  function applyLocal(bundle, mode){
    var p = mode === "replace" ? {} : lsGet(LS_P,{}), a = mode === "replace" ? {} : lsGet(LS_N,{});
    Object.keys(bundle.progress||{}).forEach(function(id){ p[id] = p[id] ? newer(p[id], bundle.progress[id], ["lastOpened","readAt"]) : bundle.progress[id]; });
    Object.keys(bundle.annotations||{}).forEach(function(doc){ var have = {}; (a[doc]||[]).forEach(function(x){ have[x.id] = x; });
      (bundle.annotations[doc]||[]).forEach(function(x){ have[x.id] = have[x.id] ? newer(have[x.id], x, ["updated","created"]) : x; });
      a[doc] = Object.keys(have).map(function(k){ return have[k]; }); });
    lsSet(LS_P, p); lsSet(LS_N, a);
  }
  function importBundle(bundle, mode){
    if(!bundle || bundle.schema !== "study-hub-data/1") return Promise.reject(new Error("That file is not a Study Hub data bundle."));
    return hasServer().then(function(up){
      if(up) return fetch("/__hub/api/import", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({bundle:bundle, mode:mode})}).then(function(r){ if(!r.ok) throw new Error("The server refused the import."); return r.json(); }).then(function(){ applyLocal(bundle, mode); });
      applyLocal(bundle, mode);
    });
  }
  function fetchRepo(){ return fetch(REPO_FILE + "?t=" + Date.now()).then(function(r){ if(!r.ok) throw new Error("No repo copy is available here. It is not published to the website, so use Import file instead."); return r.json(); }); }

  /* ---- first visit: optionally use the repo copy ---- */
  (function auto(){
    if(!lsGet(LS_AUTO,false)) return;
    var empty = !Object.keys(lsGet(LS_P,{})).length && !Object.keys(lsGet(LS_N,{})).length;
    hasServer().then(function(up){ if(up || !empty) return; return fetchRepo().then(function(b){ applyLocal(b, "merge"); location.reload(); }).catch(function(){}); });
  })();

  /* ---- UI ---- */
  function init(){
    var sw = document.querySelector(".theme-switch"); if(!sw) return;
    var st = document.createElement("style");
    st.textContent = ".hd-btn{font-family:var(--font-pixel); font-size:.46rem; letter-spacing:.04em; color:var(--ink); background:var(--surface); border:3px solid var(--outline); border-radius:5px; padding:8px 9px; cursor:pointer; box-shadow:0 3px 0 var(--outline); flex:none;} .hd-btn:hover{background:var(--ochre,#ffe066); color:#2a3150;}" +
      ".hd-pop{position:fixed; z-index:80; width:min(360px,92vw); background:var(--surface); color:var(--ink); border:3px solid var(--outline); border-radius:12px; padding:14px; box-shadow:5px 5px 0 rgba(86,98,138,.3); font-family:var(--font-ui); font-size:.84rem; line-height:1.45;} .hd-pop[hidden]{display:none;}" +
      ".hd-pop h3{font-family:var(--font-display); font-size:1.05rem; margin:0 0 6px;} .hd-pop p{margin:0 0 8px;} .hd-sec{border-top:2px solid var(--line); margin-top:10px; padding-top:10px;}" +
      ".hd-row{display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;} .hd-act{font-family:var(--font-ui); font-weight:800; font-size:.78rem; padding:6px 10px; border:3px solid var(--outline); border-radius:8px; background:var(--surface); color:var(--ink); cursor:pointer;} .hd-act:hover{background:var(--ochre,#ffe066); color:#2a3150;} .hd-act[disabled]{opacity:.45; cursor:not-allowed;}" +
      ".hd-warn{background:var(--warn-soft,#fdf7e1); border:2px solid var(--warn,#86620f); border-radius:8px; padding:6px 8px; font-size:.78rem;} .hd-msg{margin-top:8px; font-weight:700;} .hd-small{font-size:.76rem; opacity:.85;} .hd-lbl{display:flex; gap:8px; align-items:flex-start; margin-top:8px; cursor:pointer;}" +
      "@media(max-width:640px){.hd-btn{display:none;}}";
    document.head.appendChild(st);
    var btn = document.createElement("button"); btn.type = "button"; btn.className = "hd-btn"; btn.textContent = "DATA"; btn.title = "Back up, export or import your progress, highlights and notes"; btn.setAttribute("data-testid","study-data-button");
    sw.parentNode.insertBefore(btn, sw);
    var pop = document.createElement("div"); pop.className = "hd-pop"; pop.hidden = true; pop.setAttribute("data-testid","study-data-panel"); document.body.appendChild(pop);
    var fileIn = document.createElement("input"); fileIn.type = "file"; fileIn.accept = "application/json,.json"; fileIn.hidden = true; fileIn.setAttribute("data-testid","study-data-file"); document.body.appendChild(fileIn);
    function msg(t, bad){ var m = pop.querySelector(".hd-msg"); if(m){ m.textContent = t; m.style.color = bad ? "var(--bad,#a44646)" : "var(--good,#3a7a52)"; } }
    function render(){
      (serverUp ? fetch("/__hub/api/settings").then(function(r){ return r.json(); }).then(function(x){ serverSettings = x; }).catch(function(){}) : Promise.resolve()).then(current).then(function(b){ var c = counts(b), up = serverUp !== false && !!serverUp, syncOn = up && serverSettings.syncOnPush !== false;
        pop.innerHTML =
          '<h3>Study data</h3><p>Your reading progress, highlights and notes: <b>' + c.read + '</b> lessons read, <b>' + c.highlights + '</b> highlights. ' + (up ? 'Saved by the server on this machine.' : 'Saved in this browser only.') + '</p>' +
          '<div class="hd-sec"><b>Keep a copy in the repo</b><p class="hd-small">Writes <code>' + REPO_FILE + '</code> so you can commit it and use it on another computer.</p>' +
          '<div class="hd-warn" data-testid="study-data-warning">If the repository is public, committing this file publishes your notes and highlights.</div>' +
          '<div class="hd-row"><button type="button" class="hd-act" data-a="repo" data-testid="study-data-export-repo"' + (up ? '' : ' disabled title="Needs the local server"') + '>Export to repo</button>' +
          '<button type="button" class="hd-act" data-a="download" data-testid="study-data-download">Download backup</button></div></div>' +
          '<div class="hd-sec"><b>Use saved data</b><p class="hd-small">Import from the repo copy or from a backup file. Merge keeps whichever version of each item is newer; replace starts from the file.</p>' +
          '<div class="hd-row"><button type="button" class="hd-act" data-a="from-repo" data-testid="study-data-import-repo">Use repo copy</button><button type="button" class="hd-act" data-a="from-file" data-testid="study-data-import-file">Import file…</button></div>' +
          '<label class="hd-lbl"><input type="checkbox" data-a="replace" data-testid="study-data-replace"> <span>Replace instead of merge</span></label>' +
          '<label class="hd-lbl"><input type="checkbox" data-a="auto" data-testid="study-data-auto"' + (lsGet(LS_AUTO,false) ? ' checked' : '') + '> <span>Use the repo copy automatically when this browser has no data</span></label></div>' +
          (up ? '<div class="hd-sec"><b>Sync on push</b><label class="hd-lbl"><input type="checkbox" data-a="sync" data-testid="study-data-sync"' + (syncOn ? ' checked' : '') + '> <span>When Claude pushes from this machine, refresh the repo copy first</span></label><p class="hd-small">Machine setting, on by default. It never affects the website, which does not publish the repo copy.</p></div>' : '') +
          '<div class="hd-sec"><b>Start over</b><p class="hd-small">Clears your read marks, highlights and notes here. Export first if you might want them back.</p>' +
          '<div class="hd-row"><button type="button" class="hd-act" data-a="reset" data-testid="study-data-reset">Reset my data…</button></div></div>' +
          '<div class="hd-msg" role="status" data-testid="study-data-message"></div>'; });
    }
    function place(){ var r = btn.getBoundingClientRect(); pop.hidden = false; pop.style.top = (r.bottom + 8) + "px"; pop.style.left = Math.max(8, Math.min(r.left, innerWidth - pop.offsetWidth - 8)) + "px"; }
    btn.addEventListener("click", function(e){ e.stopPropagation(); if(!pop.hidden){ pop.hidden = true; return; } pop.hidden = false; render(); setTimeout(place, 60); setTimeout(place, 300); });
    document.addEventListener("mousedown", function(e){ if(!pop.hidden && !pop.contains(e.target) && e.target !== btn) pop.hidden = true; });
    document.addEventListener("keydown", function(e){ if(e.key === "Escape") pop.hidden = true; });
    function modeSel(){ var c = pop.querySelector('[data-a="replace"]'); return c && c.checked ? "replace" : "merge"; }
    function done(t){ msg(t); setTimeout(function(){ location.reload(); }, 900); }
    pop.addEventListener("change", function(e){ if(e.target.dataset.a === "auto") lsSet(LS_AUTO, e.target.checked);
      if(e.target.dataset.a === "sync"){ var on = e.target.checked; fetch("/__hub/api/settings", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({syncOnPush:on})}).then(function(r){ if(!r.ok) throw 0; serverSettings.syncOnPush = on; msg(on ? "Will refresh the repo copy before each push from this machine." : "Push will leave the repo copy alone."); }).catch(function(){ msg("Could not save the setting.", true); }); } });
    pop.addEventListener("click", function(e){
      var b = e.target.closest("[data-a]"); if(!b || b.tagName === "INPUT") return; var a = b.dataset.a;
      if(a === "repo"){ fetch("/__hub/api/export-to-repo", {method:"POST"}).then(function(r){ if(!r.ok) throw 0; return r.json(); }).then(function(r){ msg("Saved to " + r.file + ". Commit it to keep it in the repo."); }).catch(function(){ msg("Could not write the file. Is the server running?", true); }); }
      else if(a === "download"){ current().then(function(bd){ var blob = new Blob([JSON.stringify(bd, null, 2)], {type:"application/json"}), u = URL.createObjectURL(blob), l = document.createElement("a"); l.href = u; l.download = "study-hub-data-" + new Date().toISOString().slice(0,10) + ".json"; document.body.appendChild(l); l.click(); l.remove(); setTimeout(function(){ URL.revokeObjectURL(u); }, 2000); msg("Backup downloaded."); }); }
      else if(a === "from-repo"){ fetchRepo().then(function(bd){ var c = counts(bd); return importBundle(bd, modeSel()).then(function(){ done("Imported " + c.read + " read lessons and " + c.highlights + " highlights. Reloading…"); }); }).catch(function(err){ msg(err.message || "Could not import.", true); }); }
      else if(a === "from-file"){ fileIn.value = ""; fileIn.click(); }
      else if(a === "reset"){ b.dataset.a = "reset-confirm"; b.textContent = "Really delete everything?"; b.setAttribute("data-testid","study-data-reset-confirm"); msg("Click again to confirm. This cannot be undone.", true); }
      else if(a === "reset-confirm"){ var wipe = function(){ try{ localStorage.removeItem(LS_P); localStorage.removeItem(LS_N); }catch(e){} done("Everything cleared. Reloading…"); };
        hasServer().then(function(up){ return up ? fetch("/__hub/api/reset", {method:"POST"}).then(function(r){ if(!r.ok) throw 0; }) : null; }).then(wipe).catch(function(){ msg("Could not clear the server copy.", true); }); }
    });
    fileIn.addEventListener("change", function(){ var f = fileIn.files && fileIn.files[0]; if(!f) return; var r = new FileReader();
      r.onload = function(){ try{ var bd = JSON.parse(r.result); var c = counts(bd); importBundle(bd, modeSel()).then(function(){ done("Imported " + c.read + " read lessons and " + c.highlights + " highlights. Reloading…"); }).catch(function(err){ msg(err.message, true); }); }catch(e){ msg("That file is not valid JSON.", true); } };
      r.readAsText(f); });
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
  window.hubData = {importBundle:importBundle, current:current};
})();
