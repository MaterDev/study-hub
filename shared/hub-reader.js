/* Hub reader: a right-edge drawer that shows a module's attached readings (PDFs) beside the lesson.
   A section, module, group or single lesson lists them in its manifest (a lesson's own readings show only on that lesson):  "readings": [{ "id", "title", "kind": "pdf", "file", "credit" }]
   The hub shell calls hubReader.setContext(entry) as you navigate; tabs appear for the readings of the module you are in.
   Lessons can open one with  parent.postMessage({hub:"reading", id:"<reading id>"}, "*").
   Reading position (page + offset) is saved per reading in localStorage and restored on open.
   PDF rendering uses the vendored pdf.js in shared/vendor/pdfjs. */
(function(){
  var KEY = "hub-reader-pos-v1";
  var css = [
    ".rd-tabs{position:absolute; top:34%; right:4px; z-index:22; display:flex; flex-direction:column; gap:6px; transition:right .18s steps(4);}",
    ".rd-tab{writing-mode:vertical-rl; transform:rotate(180deg); background:var(--surface); color:var(--ink); border:3px solid var(--outline); border-radius:10px; padding:14px 8px; font-family:var(--font-ui); font-weight:800; font-size:.74rem; letter-spacing:.04em; cursor:pointer; white-space:nowrap; line-height:1; box-shadow:-3px -3px 0 rgba(86,98,138,.25);}",
    ".rd-tab .rd-n{display:inline-block; margin-bottom:6px; min-width:16px; padding:2px 3px; border-radius:9px; background:var(--vermil,#b35c5c); color:#fff; font-size:.64rem; text-align:center; writing-mode:horizontal-tb; transform:none;}",
    ".rd-tab:hover,.rd-tab[aria-pressed=true]{background:var(--ochre,#ffe066); color:var(--outline);}",
    ".rd-drawer{position:absolute; top:0; right:0; bottom:0; z-index:21; width:min(1200px,68%); min-width:420px; background:var(--surface); border-left:4px solid var(--outline); display:flex; flex-direction:column; transform:translateX(100%); visibility:hidden; transition:transform .18s steps(5), visibility 0s .18s; box-shadow:-10px 0 0 rgba(86,98,138,.18);}",
    ".rd-drawer.open{transform:none; visibility:visible; transition:transform .18s steps(5);}",
    ".rd-head{display:flex; align-items:center; gap:8px; padding:8px 10px; border-bottom:3px solid var(--outline); background:var(--sunken,var(--surface));}",
    ".rd-title{flex:1; min-width:0; font-family:var(--font-ui); font-weight:800; font-size:.82rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:var(--ink);}",
    ".rd-pos{font-family:var(--font-ui); font-size:.74rem; font-weight:700; color:var(--ink); white-space:nowrap;}",
    ".rd-btn{font-family:var(--font-ui); font-weight:800; font-size:.82rem; min-width:30px; height:30px; border:3px solid var(--outline); border-radius:8px; background:var(--surface); color:var(--ink); cursor:pointer; padding:0 6px;}",
    ".rd-btn:hover{background:var(--ochre,#ffe066); color:var(--outline);}",
    ".rd-body{flex:1; min-height:0; overflow-y:auto; overflow-x:auto; background:#8a93ad; padding:12px 0 40px; text-align:center;}",
    ".rd-page{position:relative; margin:0 auto 12px; background:#fff; box-shadow:0 2px 0 rgba(0,0,0,.25);}",
    ".rd-page canvas{display:block; width:100%; height:100%;}",
    ".rd-text{position:absolute; inset:0; overflow:clip; line-height:1; text-align:initial; transform-origin:0 0; z-index:2;}",
    ".rd-text :is(span,br){color:transparent; position:absolute; white-space:pre; cursor:text; transform-origin:0% 0%;}",
    ".rd-text span.markedContent{top:0; height:0;}",
    ".rd-text mark.hub-hl{color:transparent; mix-blend-mode:multiply;}",
    ".rd-text mark.hub-hl[data-note]{border-bottom-color:#2a3150;} .rd-text mark.hub-hl[data-note]::after{color:#2a3150; font-size:13px;}",
    ".rd-text mark.hub-hl.hub-flash{outline-color:#2a3150;}",
    ".rd-msg{padding:30px 20px; font-family:var(--font-ui); color:#fff; font-weight:700;}",
    ".rd-foot{padding:5px 10px; border-top:3px solid var(--outline); font-family:var(--font-ui); font-size:.7rem; color:var(--ink); background:var(--sunken,var(--surface));}",
    "@media (max-width:640px){.rd-drawer{width:100%; min-width:0;} .rd-tabs{top:auto; bottom:84px;}}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var host = document.querySelector(".hub-main"); if(!host) return;
  var tabsEl = document.createElement("div"); tabsEl.className = "rd-tabs"; tabsEl.setAttribute("data-testid","reader-tabs"); tabsEl.hidden = true;
  var drawer = document.createElement("aside"); drawer.className = "rd-drawer"; drawer.setAttribute("data-testid","reader-drawer"); drawer.setAttribute("aria-label","Reading");
  drawer.innerHTML =
    '<div class="rd-head">'+
      '<span class="rd-title" data-testid="reader-title"></span>'+
      '<span class="rd-pos" data-testid="reader-position"></span>'+
      '<button type="button" class="rd-btn" data-act="out" title="Zoom out" aria-label="Zoom out" data-testid="reader-zoom-out">&minus;</button>'+
      '<button type="button" class="rd-btn" data-act="in" title="Zoom in" aria-label="Zoom in" data-testid="reader-zoom-in">+</button>'+
      '<button type="button" class="rd-btn" data-act="close" title="Close reading" aria-label="Close reading" data-testid="reader-close">&times;</button>'+
    '</div>'+
    '<div class="rd-body" data-testid="reader-body"></div>'+
    '<div class="rd-foot" data-testid="reader-credit"></div>';
  host.appendChild(drawer); host.appendChild(tabsEl);
  var body = drawer.querySelector(".rd-body"), titleEl = drawer.querySelector(".rd-title"), posEl = drawer.querySelector(".rd-pos"), creditEl = drawer.querySelector(".rd-foot");

  var readings = [], current = null, docs = {}, zoom = 1, pages = [], pdfjs = null, rendering = {}, io = null;

  function load(){ try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ return {}; } }
  function save(id, v){ try{ var m = load(); m[id] = v; localStorage.setItem(KEY, JSON.stringify(m)); }catch(e){} }

  function drawTabs(){
    tabsEl.innerHTML = ""; tabsEl.hidden = !readings.length;
    readings.forEach(function(r){
      var b = document.createElement("button"); b.type = "button"; b.className = "rd-tab";
      b.textContent = r.tab || r.title; if(r.kind==="notes"){ var n = noteCount(); if(n){ var c = document.createElement("span"); c.className = "rd-n"; c.textContent = n; c.setAttribute("data-testid","reader-notes-count"); b.appendChild(c); } } b.title = r.title; b.setAttribute("data-testid","reader-tab-"+r.id);
      b.setAttribute("aria-pressed", String(!!current && current.id===r.id && drawer.classList.contains("open")));
      b.addEventListener("click", function(){ (current && current.id===r.id && drawer.classList.contains("open")) ? close() : open(r.id); });
      tabsEl.appendChild(b);
    });
    placeTabs();
  }
  function noteCount(){ var N = window.hubNotes; if(!N) return 0; var docs = []; var k = N.currentDoc(); if(k) docs.push(k);
    readings.forEach(function(x){ if(x.kind!=="notes") docs.push("reading:"+x.id); });
    return docs.reduce(function(t,d){ return t + N.list(d).filter(function(a){ return a.note; }).length; }, 0); }
  function placeTabs(){ tabsEl.style.right = drawer.classList.contains("open") ? (drawer.getBoundingClientRect().width - 3) + "px" : "4px"; }

  function loadPdfjs(){
    if(pdfjs) return Promise.resolve(pdfjs);
    return import(new URL("shared/vendor/pdfjs/pdf.min.mjs", location.href).href).then(function(m){
      m.GlobalWorkerOptions.workerSrc = new URL("shared/vendor/pdfjs/pdf.worker.min.mjs", location.href).href; pdfjs = m; return m;
    });
  }

  function pos(){
    for(var i=pages.length-1;i>=0;i--){ var t = pages[i].el.offsetTop - body.offsetTop;
      if(t <= body.scrollTop + 8){ var h = pages[i].el.offsetHeight || 1; return {page:i+1, frac:Math.max(0,(body.scrollTop - t)/h)}; } }
    return {page:1, frac:0};
  }
  function restore(p){ var pg = pages[Math.min(Math.max(1,p.page),pages.length)-1]; if(!pg) return;
    body.scrollTop = pg.el.offsetTop - body.offsetTop + p.frac*pg.el.offsetHeight; }
  function updatePos(){ if(!current||!pages.length) return; var p = pos(); posEl.textContent = "p. "+p.page+" / "+pages.length; save(current.id, {page:p.page, frac:p.frac, zoom:zoom}); }

  function layout(keep){
    var p = keep || (pages.length ? pos() : null);
    var avail = Math.max(240, body.clientWidth - 24);
    pages.forEach(function(pg){
      var base = pg.base, w = avail*zoom, sc = w/base.width;
      pg.w = w; pg.scale = sc; pg.el.style.width = w+"px"; pg.el.style.height = (base.height*sc)+"px";
      if(pg.canvas){ pg.canvas.remove(); pg.canvas = null; pg.done = false; }
      if(pg.textDiv){ pg.textDiv.remove(); pg.textDiv = null; }
    });
    if(p) restore(p);
    observe();
  }
  function observe(){
    if(io) io.disconnect();
    io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting) renderPage(e.target._pg); }); }, {root:body, rootMargin:"600px 0px"});
    pages.forEach(function(pg){ io.observe(pg.el); });
  }
  function renderPage(pg){
    if(pg.done || pg.busy) return; pg.busy = true;
    var sc = pg.scale, dpr = window.devicePixelRatio || 1;
    var vp = pg.page.getViewport({scale:sc});
    var cv = document.createElement("canvas"); cv.width = Math.floor(vp.width*dpr); cv.height = Math.floor(vp.height*dpr);
    var cvP = pg.page.render({canvasContext:cv.getContext("2d"), viewport:vp, transform:[dpr,0,0,dpr,0,0]}).promise;
    var td = document.createElement("div"); td.className = "rd-text"; td.setAttribute("data-testid","reader-text-"+pg.n);
    td.style.setProperty("--scale-factor", sc); td.style.setProperty("--total-scale-factor", sc);
    td.style.width = vp.width+"px"; td.style.height = vp.height+"px";
    var tlP = new pdfjs.TextLayer({textContentSource:pg.page.streamTextContent(), container:td, viewport:vp}).render();
    Promise.all([cvP, tlP]).then(function(){
      if(pg.scale!==sc){ pg.busy = false; return; }
      pg.el.appendChild(cv); pg.el.appendChild(td); pg.canvas = cv; pg.textDiv = td; pg.done = true; pg.busy = false;
      if(window.hubNotes && current) window.hubNotes.registerRoot("reading:"+current.id, td, pg.n);
    }, function(){ pg.busy = false; });
  }

  function build(r, pdf){
    body.innerHTML = ""; pages = [];
    var chain = Promise.resolve();
    for(let n=1;n<=pdf.numPages;n++){ chain = chain.then(function(){ return pdf.getPage(n).then(function(pg){
      var el = document.createElement("div"); el.className = "rd-page"; el.setAttribute("data-testid","reader-page-"+n);
      var o = {el:el, n:n, page:pg, base:pg.getViewport({scale:1})}; el._pg = o; pages.push(o); body.appendChild(el); }); }); }
    return chain;
  }

  function openAt(id, page){ var r = readings.filter(function(x){ return x.id===id; })[0]; if(!r) return;
    if(current && current.id===id && pages.length && drawer.classList.contains("open")){ restore({page:page, frac:0}); return; }
    var m = load(); m[id] = Object.assign({}, m[id], {page:page, frac:0}); try{ localStorage.setItem(KEY, JSON.stringify(m)); }catch(e){}
    if(current && current.id===id){ pages = []; } open(id); }
  function open(id){
    var r = readings.filter(function(x){ return x.id===id; })[0]; if(!r) return;
    if(r.kind==="notes") return openNotes(r);
    var switching = !current || current.id !== r.id;
    body.style.background = ""; current = r; drawer.classList.add("open"); titleEl.textContent = r.title; creditEl.textContent = r.credit || ""; if(r.url){ creditEl.appendChild(document.createTextNode(" ")); var ca = document.createElement("a"); ca.href = r.url; ca.target = "_blank"; ca.rel = "noopener"; ca.textContent = "Original source"; ca.setAttribute("data-testid","reader-source-link"); creditEl.appendChild(ca); } drawTabs();
    if(!switching && pages.length){ placeTabs(); return; }
    var saved = load()[r.id] || {page:1, frac:0, zoom:1}; zoom = saved.zoom || 1;
    body.innerHTML = '<div class="rd-msg">Loading…</div>'; pages = []; posEl.textContent = "";
    loadPdfjs().then(function(m){
      return docs[r.id] ? docs[r.id] : (docs[r.id] = m.getDocument(new URL(r.file, location.href).href).promise);
    }).then(function(pdf){
      if(current !== r) return;
      return build(r, pdf).then(function(){ if(current !== r) return; layout(saved); updatePos(); });
    }).catch(function(e){ body.innerHTML = '<div class="rd-msg" data-testid="reader-error">Could not load this reading.</div>'; try{ console.error("hub-reader", e); }catch(_){} });
    setTimeout(placeTabs, 220);
  }
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function openNotes(r){
    body.style.background = "var(--surface)"; current = r; drawer.classList.add("open"); titleEl.textContent = r.title; creditEl.textContent = "Highlights and notes are saved on this machine."; posEl.textContent = ""; pages = []; drawTabs();
    renderNotes(); setTimeout(placeTabs, 220);
  }
  var editNote = null;
  function renderNotes(){
    if(!current || current.kind!=="notes" || !window.hubNotes) return;
    if(editNote && body.querySelector(".nt-ed")) return;   /* don't wipe an editor mid-typing */
    var N = window.hubNotes, groups = [];
    var lk = N.currentDoc(); if(lk) groups.push({label:"This page", doc:lk, kind:"lesson"});
    readings.forEach(function(x){ if(x.kind!=="notes") groups.push({label:x.title, doc:"reading:"+x.id, kind:"reading", id:x.id}); });
    var html = '<div class="nt-list" data-testid="notes-list">', total = 0;
    groups.forEach(function(g){ var items = N.list(g.doc); total += items.length; if(!items.length) return;
      html += '<div class="nt-h">'+esc(g.label)+'</div>';
      items.forEach(function(a){
        var col = ({yellow:"var(--ochre)",green:"var(--forest)",blue:"var(--cobalt)"}[a.color]||"var(--ochre)");
        html += '<div class="nt-item" data-id="'+a.id+'" data-doc="'+esc(g.doc)+'" data-kind="'+g.kind+'" data-page="'+(a.page||"")+'" data-rid="'+(g.id||"")+'" style="border-left-color:'+col+'" data-testid="notes-item-'+a.id+'">'+
          '<div class="nt-q">“'+esc(a.quote.length>180?a.quote.slice(0,180)+"…":a.quote)+'”</div>';
        if(editNote===a.id){
          html += '<div class="hn-tools"><button type="button" class="hn-btn" data-cmd="bold" aria-label="Bold" data-testid="notes-bold"><b>B</b></button><button type="button" class="hn-btn" data-cmd="italic" aria-label="Italic" data-testid="notes-italic"><i>I</i></button><button type="button" class="hn-btn" data-cmd="insertUnorderedList" aria-label="Bulleted list" data-testid="notes-list-btn">&bull;&nbsp;List</button></div>'+
            '<div class="hn-ed nt-ed" contenteditable="true" data-ph="Write a note…" aria-label="Note" data-testid="notes-editor-'+a.id+'">'+(a.note||"")+'</div>'+
            '<div class="hn-row"><span class="grow"></span><button type="button" class="hn-btn" data-nact="cancel" data-testid="notes-cancel">Cancel</button><button type="button" class="hn-btn primary" data-nact="save" data-testid="notes-save">Save</button></div>';
        } else {
          if(a.note) html += '<div class="nt-n">'+a.note+'</div>';
          html += '<div class="nt-meta"><span class="grow">'+(a.page?"p. "+a.page+" · ":"")+new Date(a.created).toLocaleDateString()+'</span>'+
            '<button type="button" class="hn-btn" data-edit="'+a.id+'" data-testid="notes-edit-'+a.id+'">'+(a.note?"Edit note":"Add note")+'</button>'+
            '<button type="button" class="hn-btn warn" data-del="'+a.id+'" aria-label="Delete highlight" data-testid="notes-delete-'+a.id+'">&times;</button></div>';
        }
        html += '</div>'; }); });
    if(!total) html += '<p class="nt-empty" data-testid="notes-empty">Nothing highlighted yet. Right-click selected text'+(readings.length>1?" on this page or in a reading":"")+' and choose a highlight colour.</p>';
    body.innerHTML = html + '</div>';
    if(editNote){ var ed = body.querySelector(".nt-ed"); if(ed){ ed.focus(); var r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); var sl = getSelection(); sl.removeAllRanges(); sl.addRange(r); } }
  }
  body.addEventListener("mousedown", function(e){ if(e.target.closest("[data-cmd]")) e.preventDefault(); });
  body.addEventListener("click", function(e){
    var cm = e.target.closest("[data-cmd]"); if(cm){ document.execCommand(cm.dataset.cmd); var ed0 = body.querySelector(".nt-ed"); if(ed0) ed0.focus(); return; }
    var d = e.target.closest("[data-del]"); if(d){ e.stopPropagation(); var r = d.getBoundingClientRect(); window.hubNotes.askDelete(d.dataset.del, {left:r.left, right:r.right, top:r.top, bottom:r.bottom}); return; }
    var ed = e.target.closest("[data-edit]"); if(ed){ editNote = ed.dataset.edit; renderNotes(); return; }
    var na = e.target.closest("[data-nact]"); if(na){
      if(na.dataset.nact==="save"){ var box = body.querySelector(".nt-ed"), id = editNote; editNote = null; if(box) window.hubNotes.setNote(id, box.innerHTML); }
      else editNote = null;
      renderNotes(); return; }
    if(e.target.closest(".nt-ed, .hn-tools")) return;
    var it = e.target.closest(".nt-item"); if(!it) return;
    if(it.dataset.kind==="reading"){ openAt(it.dataset.rid, +it.dataset.page || 1); }
    else { window.hubNotes.jump(it.dataset.id); }
  });
  if(window.hubNotes) window.hubNotes.onChange(function(){ renderNotes(); if(readings.length) drawTabs(); });
  function close(){ if(current && pages.length) updatePos(); drawer.classList.remove("open"); drawTabs(); setTimeout(placeTabs, 0); }

  drawer.addEventListener("click", function(e){ var b = e.target.closest("[data-act]"); if(!b) return; var a = b.dataset.act;
    if(a==="close") close();
    else if(a==="in"||a==="out"){ var keep = pos(); zoom = Math.min(3, Math.max(.5, zoom + (a==="in"?.2:-.2))); layout(keep); updatePos(); } });
  var t; body.addEventListener("scroll", function(){ clearTimeout(t); t = setTimeout(updatePos, 120); posEl.textContent = pages.length ? "p. "+pos().page+" / "+pages.length : ""; });
  window.addEventListener("resize", function(){ clearTimeout(window.__rdR); window.__rdR = setTimeout(function(){ if(drawer.classList.contains("open") && pages.length) layout(); placeTabs(); }, 150); });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape" && drawer.classList.contains("open")){ var pal = document.getElementById("palette"); if(pal && !pal.hidden) return; close(); } });

  /* The hub calls this with the registry entry of the page you are on (or null at home). */
  function setContext(entry){
    var list = [];
    if(entry){ var chain = [entry.section].concat(entry.path || [], entry.node ? [entry.node] : []);   /* section, module/groups, then the lesson itself */
      chain.forEach(function(g){ if(g) (g.readings || []).forEach(function(r){ if(!list.some(function(x){ return x.id===r.id; })) list.push(r); }); }); }
    if(entry) list.push({id:"__notes", title:"Notes & highlights", tab:"Notes", kind:"notes"});
    var same = list.length===readings.length && list.every(function(r,i){ return r.id===readings[i].id; });
    if(same) return;
    if(drawer.classList.contains("open")) close();
    readings = list; current = null; pages = []; drawTabs();
  }
  window.hubReader = {setContext:setContext, open:function(id){ open(id); }, close:close};
  window.hubReader.openAt = openAt;
})();
