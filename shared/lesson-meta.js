/* Dated "cartridge label" for lesson pages — rendered from the page's manifest entry.
   Single source of truth = sections/<id>/manifest.js. Include it right after
   ROOT/sections/registry.js, at the end of <body>.
   Works for lessons at any depth (ROOT is worked out from this script's own URL). */
(function(){
  var me = document.currentScript && document.currentScript.src || "";
  var ROOT = me.replace(/shared\/lesson-meta\.js(\?.*)?$/, "");
  var here = decodeURIComponent(location.href.split("#")[0].split("?")[0]);
  var rel = decodeURIComponent(here).indexOf(decodeURIComponent(ROOT)) === 0 ? here.slice(decodeURIComponent(ROOT).length) : here.split("/").pop();
  var css = '.lm{position:relative; z-index:5; margin:0 0 18px; border:3px solid #56628a; border-radius:8px; background:#fff; font-family:Nunito,system-ui,sans-serif; font-size:.84rem; color:#3e4768; box-shadow:4px 4px 0 rgba(86,98,138,.16); line-height:1.5; text-align:left;}'+
    '.lm-top{display:flex; flex-wrap:wrap; gap:8px; align-items:stretch; padding:10px 12px;}'+
    '.lm-d{display:flex; flex-direction:column; justify-content:center; padding:4px 10px; border:2px solid #a9c1da; border-radius:5px; background:#eaf6ff; min-width:104px;}'+
    '.lm-d small{font-size:.62rem; font-weight:800; letter-spacing:.06em; text-transform:uppercase; color:#525c83;}'+
    '.lm-d b{font-size:.98rem; color:#2a3150; font-weight:800;}'+
    '.lm-d.key{background:#f6dc8a; border-color:#56628a;}'+
    '.lm-chip{align-self:center; font-family:"Press Start 2P",monospace; font-size:.42rem; padding:5px 7px; border:2px solid #56628a; border-radius:3px; color:#2a3150;}'+
    '.lm-chip.fresh{background:#cfe9d8;} .lm-chip.soon{background:#fbe6c2;} .lm-chip.due{background:#f2cfcf;} .lm-chip.vol{background:#e8edf3;}'+
    '.lm-mod{padding:6px 12px; border-top:2px dashed #a9c1da; font-size:.8rem;} .lm-mod b{color:#2a3150;}'+
    '.lm details{border-top:2px dashed #a9c1da; padding:6px 12px 10px;} .lm summary{cursor:pointer; font-weight:800; color:#2a3150;}'+
    '.lm ul{margin:6px 0 0; padding-left:18px;} .lm li{margin:2px 0;} .lm h5{margin:10px 0 2px; font-size:.82rem; color:#2a3150; font-family:inherit;}'+
    '.lm code{font-size:.78rem;}'+
    '.lm-read{display:flex; align-items:center; gap:10px; flex-wrap:wrap; padding:8px 12px; border-top:2px dashed #a9c1da; font-size:.84rem;}'+
    '.lm-read button{font:800 .86rem Nunito,system-ui,sans-serif; color:#2a3150; background:#fff; border:3px solid #56628a; border-radius:6px; padding:6px 12px; cursor:pointer; box-shadow:0 3px 0 #56628a;}'+
    '.lm-read button:active{transform:translateY(3px); box-shadow:none;}'+
    '.lm-read.is-read button{background:#cfe9d8;} .lm-read .muted{color:#525c83;}';
  function esc(s){ return String(s||"").replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];}); }
  function box(label, val, key){ return '<div class="lm-d'+(key?' key':'')+'"><small>'+label+'</small><b>'+hubFmtDate(val)+'</b></div>'; }
  window.hubLoadSections(ROOT + "sections/", function(all){
    var hit = null, sec = null, parents = null;
    all.forEach(function(s){ window.hubWalk(s.children, function(n, path){ if(!hit && n.file && (n.file === rel || here.slice(-(n.file.length+1)) === "/" + n.file)){ hit = n; sec = s; parents = path; } }); });
    if(!hit || !hit.dates) return;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var d = hit.dates, r = hit.rebuild || {};
    var mod = (parents||[]).filter(function(p){ return p.kind === "module"; })[0];
    var el = document.createElement("div"); el.className = "lm";
    el.innerHTML = '<div class="lm-top">'+box("Updated", d.updated, true)+box("Created", d.created)+box("Sources checked", d.verified)+'</div>'+
      (mod && mod.dates ? '<div class="lm-mod">Part of <b>'+esc(mod.title.replace(/^(Module|Course):\s*/,""))+'</b> — created '+hubFmtDate(mod.dates.created)+', last updated '+hubFmtDate(mod.dates.updated)+'</div>' : '')+
      '<details><summary>History &amp; rebuild notes</summary>'+
      '<h5>History</h5><ul>'+(hit.history||[]).map(function(h){ return '<li><b>'+esc(h.date)+'</b> — '+esc(h.note)+'</li>'; }).join("")+'</ul>'+
      '<h5>To recreate</h5><ul><li><b>Brief:</b> '+esc(r.brief)+'</li>'+(r.basis||[]).map(function(b){ return '<li>'+esc(b)+'</li>'; }).join("")+
      '<li><b>Filed in:</b> '+esc(sec.title)+(parents||[]).map(function(p){ return ' › '+esc(p.title); }).join("")+' · id <code>'+esc(hit.id)+'</code></li></ul></details>';
    el.insertAdjacentHTML("beforeend", '<div class="lm-read"><button type="button">☐ Mark as read</button><span class="muted"></span></div>');
    var rrow = el.querySelector(".lm-read"), rbtn = rrow.querySelector("button"), rtxt = rrow.querySelector(".muted");
    function withProgress(fn){
      if(window.hubProgress) return fn();
      var s = document.createElement("script"); s.src = ROOT + "shared/hub-progress.js"; s.onload = fn; document.head.appendChild(s);
    }
    withProgress(function(){
      var P = window.hubProgress;
      if(!P.available){ rbtn.disabled = true; rbtn.textContent = "Read tracking needs the server"; rtxt.textContent = "Run `npm run dev` in the hub folder."; return; }
      function paint(){
        var it = P.get(hit.id) || {}, on = !!it.read;
        rrow.classList.toggle("is-read", on);
        rbtn.textContent = on ? "✓ Read" : "☐ Mark as read";
        rtxt.textContent = (on ? "Marked read " + hubFmtDate((it.readAt||"").slice(0,10)) + " · click to undo" : "Not marked read yet") +
          (it.opens ? " · opened " + it.opens + "× (last " + hubFmtDate((it.lastOpened||"").slice(0,10)) + ")" : "");
      }
      P.ready(function(){ paint(); P.opened(hit.id); });
      P.onChange(function(id){ if(id === hit.id) paint(); });
      rbtn.addEventListener("click", function(){ var it = P.get(hit.id) || {}; P.setRead(hit.id, !it.read); });
    });
    var h1 = document.querySelector("h1");
    if(h1) h1.parentNode.insertBefore(el, h1);
    else { var w = document.querySelector(".wrap") || document.body; w.insertBefore(el, w.firstChild); }
    if(window.parent !== window){ try{ parent.postMessage({hub:"at", id:hit.id}, "*"); }catch(e){} }
  });
})();
