/* Hub annotations: select text on a lesson page or in a reading (PDF) to highlight it and attach a note.
   Highlights are stored by quoted text plus surrounding context (not by position), so they survive small edits.
   Storage: server .hub-data/annotations.json through /__hub/api/annotations, mirrored in localStorage.
   Lesson pages are annotated from the hub shell through the same-origin iframe; lessons need no code.
   API: hubNotes.registerRoot(doc, rootEl, page) · list(doc) · remove(id) · jump(id) · onChange(fn) · currentDoc() */
(function(){
  var LS = "hub-notes-v1";
  var COLORS = {yellow:"rgba(255,214,10,.45)", green:"rgba(70,200,110,.40)", blue:"rgba(90,160,255,.40)", pink:"rgba(255,110,170,.40)"};
  var store = {items:{}}, roots = [], listeners = [], docsSeen = [], frameDoc = null, bar, pop, pending = null, popAnn = null;

  /* ---------- storage ---------- */
  function mirror(){ try{ localStorage.setItem(LS, JSON.stringify(store.items)); }catch(e){} }
  function persist(doc){
    mirror();
    try{ fetch("/__hub/api/annotations", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({doc:doc, items:store.items[doc]||[]})}).catch(function(){}); }catch(e){}
    emit();
  }
  var ready = fetch("/__hub/api/annotations").then(function(r){ return r.json(); }).then(function(j){ store.items = j.items || {}; mirror(); })
    .catch(function(){ try{ store.items = JSON.parse(localStorage.getItem(LS)) || {}; }catch(e){ store.items = {}; } });
  function emit(){ listeners.forEach(function(f){ try{ f(); }catch(e){} }); }
  function list(doc){ return (store.items[doc]||[]).slice(); }
  function find(id){ for(var d in store.items){ var a = store.items[d].filter(function(x){ return x.id===id; })[0]; if(a) return {doc:d, ann:a}; } return null; }

  /* ---------- text anchoring ---------- */
  function fullText(root){ var r = root.ownerDocument.createRange(); r.selectNodeContents(root); return r.toString(); }
  function offsetOf(root, node, off){ var r = root.ownerDocument.createRange(); r.selectNodeContents(root); r.setEnd(node, off); return r.toString().length; }
  function textNodes(root){ var w = root.ownerDocument.createTreeWalker(root, 4), out = [], n; while((n = w.nextNode())) out.push(n); return out; }
  function anchorFrom(root, range){
    if(!root.contains(range.startContainer)) return null;
    var full = fullText(root), s = offsetOf(root, range.startContainer, range.startOffset);
    var e = root.contains(range.endContainer) ? offsetOf(root, range.endContainer, range.endOffset) : full.length;
    while(s < e && /\s/.test(full[s])) s++; while(e > s && /\s/.test(full[e-1])) e--;
    if(e - s < 2) return null;
    return {quote:full.slice(s,e), prefix:full.slice(Math.max(0,s-30),s), suffix:full.slice(e,e+30)};
  }
  function commonTail(a,b){ var n=0; while(n<a.length && n<b.length && a[a.length-1-n]===b[b.length-1-n]) n++; return n; }
  function commonHead(a,b){ var n=0; while(n<a.length && n<b.length && a[n]===b[n]) n++; return n; }
  function locate(full, a){
    var best = -1, score = -1, i = full.indexOf(a.quote);
    while(i !== -1){
      var sc = commonTail(full.slice(Math.max(0,i-a.prefix.length), i), a.prefix) + commonHead(full.slice(i+a.quote.length, i+a.quote.length+a.suffix.length), a.suffix);
      if(sc > score){ score = sc; best = i; }
      i = full.indexOf(a.quote, i+1);
    }
    return best;
  }
  function wrap(root, s, e, ann){
    var doc = root.ownerDocument, pos = 0, segs = [];
    textNodes(root).forEach(function(n){ var len = n.nodeValue.length, a = Math.max(s,pos), b = Math.min(e,pos+len);
      if(a < b) segs.push({n:n, a:a-pos, b:b-pos}); pos += len; });
    segs.forEach(function(g){
      var r = doc.createRange(); r.setStart(g.n, g.a); r.setEnd(g.n, g.b);
      var m = doc.createElement("mark"); m.className = "hub-hl"; m.setAttribute("data-hl", ann.id); m.setAttribute("data-c", ann.color || "yellow");
      if(ann.note) m.setAttribute("data-note","1");
      r.surroundContents(m);
    });
  }
  function applyTo(entry){
    var root = entry.root; if(!root.isConnected) return;
    ensureStyle(root.ownerDocument);
    var anns = (store.items[entry.doc]||[]).filter(function(a){ return entry.page==null || a.page===entry.page; });
    var full = null;
    anns.forEach(function(a){
      if(root.querySelector('mark[data-hl="'+a.id+'"]')) return;
      full = fullText(root); var i = locate(full, a); if(i < 0) return;
      try{ wrap(root, i, i+a.quote.length, a); }catch(e){}
    });
  }
  function unwrap(id){
    roots.forEach(function(e){ if(!e.root.isConnected) return;
      e.root.querySelectorAll('mark[data-hl="'+id+'"]').forEach(function(m){ var p = m.parentNode; while(m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); p.normalize(); }); });
  }
  function restyle(ann){ roots.forEach(function(e){ if(!e.root.isConnected) return;
    e.root.querySelectorAll('mark[data-hl="'+ann.id+'"]').forEach(function(m){ m.setAttribute("data-c", ann.color||"yellow"); if(ann.note) m.setAttribute("data-note","1"); else m.removeAttribute("data-note"); }); }); }

  function ensureStyle(doc){
    if(doc.getElementById("hub-hl-style")) return;
    var st = doc.createElement("style"); st.id = "hub-hl-style";
    var base = {yellow:"--ochre", green:"--forest", blue:"--cobalt"}, out = "mark.hub-hl{color:inherit; border-radius:2px; padding:0; cursor:pointer;}";
    Object.keys(base).forEach(function(k){
      out += 'mark.hub-hl[data-c="'+k+'"]{background:color-mix(in srgb, var('+base[k]+') 42%, transparent);}' +
             'html[data-theme="sega"] mark.hub-hl[data-c="'+k+'"]{background:color-mix(in srgb, var('+base[k]+') 34%, transparent);}';
    });
    out += 'mark.hub-hl:not([data-c="green"]):not([data-c="blue"]){background:color-mix(in srgb, var(--ochre) 42%, transparent);}' +
      "mark.hub-hl[data-note]{border-bottom:2px dotted var(--ink,#2a3150);} mark.hub-hl[data-note]::after{content:'\\270E'; font-size:.72em; vertical-align:super; margin-left:2px; color:var(--ink,#2a3150);}" +
      "mark.hub-hl.hub-flash{outline:3px solid var(--ink,#2a3150); outline-offset:1px;}";
    st.textContent = out; (doc.head || doc.documentElement).appendChild(st);
  }

  /* ---------- roots ---------- */
  function registerRoot(doc, root, page){
    roots = roots.filter(function(e){ return e.root.isConnected; });
    var entry = {doc:doc, root:root, page:page==null?null:page}; roots.push(entry);
    attachDoc(root.ownerDocument);
    ready.then(function(){ applyTo(entry); });
    return entry;
  }
  function rootForNode(node){
    for(var i = roots.length-1; i >= 0; i--){ var e = roots[i]; if(e.root.isConnected && e.root.contains(node)) return e; } return null;
  }

  /* ---------- UI (lives in the hub shell) ---------- */
  var VAR = {yellow:"--ochre", green:"--forest", blue:"--cobalt"}, KEYS = ["yellow","green","blue"];
  var pen = {color:"yellow"}, editing = false, confirming = false;
  function swatch(k){ return "var("+VAR[k]+")"; }
  function css(){
    var st = document.createElement("style");
    st.textContent =
      ".hn-pop{position:fixed; z-index:60; width:min(330px,88vw); background:var(--surface); color:var(--ink); border:3px solid var(--outline); border-radius:12px; padding:10px 12px 10px; box-shadow:4px 4px 0 rgba(86,98,138,.3); font-family:var(--font-ui);}" +
      ".hn-pop[hidden]{display:none;} .hn-arrow{position:absolute; width:12px; height:12px; background:var(--surface); border:3px solid var(--outline); transform:rotate(45deg);} .hn-pop.below .hn-arrow{top:-9px; border-right:0; border-bottom:0;} .hn-pop.above .hn-arrow{bottom:-9px; border-left:0; border-top:0;}" +
      ".hn-quote{font-size:.72rem; font-style:italic; margin:0 0 8px; opacity:.75; max-height:3.2em; overflow:hidden;}" +
      ".hn-note{font-size:.86rem; line-height:1.45; max-height:220px; overflow:auto; margin:0 0 8px;} .hn-note ul,.hn-note ol{margin:.3em 0; padding-left:1.3em;}" +
      ".hn-ed{min-height:84px; max-height:200px; overflow:auto; padding:6px 8px; border:3px solid var(--outline); border-radius:8px; background:var(--sunken,var(--surface)); font-size:.86rem; line-height:1.45; outline:0;} .hn-ed:empty::before{content:attr(data-ph); opacity:.55;}" +
      ".hn-tools{display:flex; gap:5px; margin-bottom:6px;} .hn-row{display:flex; gap:6px; margin-top:8px; align-items:center;} .hn-row .grow{flex:1;}" +
      ".hn-btn{font-family:var(--font-ui); font-weight:800; font-size:.76rem; min-width:28px; height:28px; padding:0 9px; border:3px solid var(--outline); border-radius:8px; background:var(--surface); color:var(--ink); cursor:pointer;} .hn-btn:hover{background:var(--ochre,#ffe066); color:#2a3150;}" +
      ".hn-btn.primary{background:var(--cobalt,#4a6fa8); color:#fff;} .hn-btn.warn:hover{background:var(--vermil,#b35c5c); color:#fff;}" +
      ".hn-sw{width:22px; height:22px; border-radius:50%; border:3px solid var(--outline); cursor:pointer; padding:0;} .hn-sw[aria-pressed=true]{box-shadow:0 0 0 2px var(--surface),0 0 0 4px var(--outline);}" +
      ".nt-list{padding:10px 12px 40px; text-align:left; background:var(--surface); min-height:100%;} .nt-h{font-family:var(--font-ui); font-weight:800; font-size:.8rem; margin:14px 0 6px; color:var(--ink);}" +
      ".nt-item{border:3px solid var(--outline); border-left-width:10px; border-radius:8px; padding:7px 9px; margin:0 0 8px; background:var(--surface); color:var(--ink); cursor:pointer; font-family:var(--font-ui);} .nt-item:hover{background:var(--sunken,var(--surface));}" +
      ".nt-q{font-size:.78rem; font-style:italic;} .nt-n{font-size:.82rem; margin-top:5px; padding-left:8px; border-left:3px dotted var(--ink);} .nt-n ul,.nt-n ol{margin:.2em 0; padding-left:1.2em;}" +
      ".nt-meta{display:flex; gap:8px; align-items:center; margin-top:4px; font-size:.68rem; opacity:.75;} .nt-meta .grow{flex:1;} .nt-empty{font-family:var(--font-ui); font-size:.84rem; padding:6px 2px; color:var(--ink);}";
    document.head.appendChild(st);
    pop = document.createElement("div"); pop.className = "hn-pop below"; pop.hidden = true; pop.setAttribute("data-testid","note-popover");
    document.body.appendChild(pop); pop.addEventListener("mouseenter", function(){ clearTimeout(hoverT); }); pop.addEventListener("mouseleave", function(){ if(!pinned){ clearTimeout(hoverT); hoverT = setTimeout(function(){ if(!pinned) closePop(); }, 280); } });
    document.addEventListener("mousedown", function(e){ if(!pop.hidden && !pop.contains(e.target)) closePop(); });
    document.addEventListener("keydown", docKey);
    menuInit();
  }
  function docKey(e){
    if(e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target; if(t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if(e.key==="Escape"){ if(!pop.hidden) closePop(); return; }
  }
  function shellRect(rect, doc){
    var off = {left:0, top:0};
    if(doc !== document){ var f = document.getElementById("frame"); if(f){ var fr = f.getBoundingClientRect(); off = {left:fr.left, top:fr.top}; } }
    return {left:rect.left+off.left, right:rect.right+off.left, top:rect.top+off.top, bottom:rect.bottom+off.top};
  }
  function makeHighlight(e, range, color){
    var a = anchorFrom(e.root, range); if(!a) return null;
    var ann = {id:uid(), color:color, note:"", quote:a.quote, prefix:a.prefix, suffix:a.suffix, created:new Date().toISOString()};
    if(e.page != null) ann.page = e.page;
    if(e.doc.indexOf("lesson:")===0 && frameDoc) ann.title = frameTitle();
    (store.items[e.doc] = store.items[e.doc] || []).push(ann);
    var sel = e.root.ownerDocument.getSelection(); if(sel) sel.removeAllRanges();
    applyTo(e); persist(e.doc); return ann;
  }
  /* ---------- right-click menu: the usual items plus highlighting ---------- */
  var menu = null, menuCtx = null;
  function isEditable(t){ return !!(t && t.closest && t.closest("input,textarea,[contenteditable=true]")); }
  function openMenu(doc, ev){
    var t = ev.target, e = rootForNode(t); if(!e) return false;
    var r0 = shellRect({left:ev.clientX, right:ev.clientX, top:ev.clientY, bottom:ev.clientY}, doc);
    var sel = doc.getSelection(), has = !!(sel && !sel.isCollapsed && sel.rangeCount), mark = t.closest && t.closest("mark[data-hl]");
    menuCtx = {doc:doc, entry:e, range: has ? sel.getRangeAt(0).cloneRange() : null, text: has ? sel.toString() : "", px:r0.left, py:r0.top, target:t, id: mark ? mark.getAttribute("data-hl") : null, editable:isEditable(t)};
    var ann = menuCtx.id && find(menuCtx.id), h = "";
    function item(a, label, extra){ return '<button type="button" class="cm-i" data-cm="'+a+'" data-testid="ctx-'+a+'">'+label+(extra||"")+'</button>'; }
    function sws(a){ return '<div class="cm-sw">'+KEYS.map(function(k){ return '<button type="button" class="hn-sw" data-cmc="'+k+'" aria-label="Highlight '+k+'" data-testid="ctx-colour-'+k+'" style="background:'+swatch(k)+'"></button>'; }).join("")+'</div>'; }
    if(menuCtx.editable){
      h += item("cut","Cut") + item("copy","Copy") + item("paste","Paste") + item("all","Select all");
    } else {
      if(has) h += item("copy","Copy"); h += item("all","Select all");
      if(has && !ann){ h += '<div class="cm-sep"></div><div class="cm-l">Highlight</div>' + sws() + item("note","Highlight and add note"); }
      if(ann){ h += '<div class="cm-sep"></div>' + item("editnote", ann.ann.note ? "Edit note" : "Add note") + '<div class="cm-l">Colour</div>' + sws() + item("unhl","Remove highlight"); }
    }
    menu.innerHTML = h; menu.hidden = false;
    var r = shellRect({left:ev.clientX, right:ev.clientX, top:ev.clientY, bottom:ev.clientY}, doc), w = menu.offsetWidth, hh = menu.offsetHeight;
    menu.style.left = Math.min(r.left, window.innerWidth - w - 8)+"px"; menu.style.top = Math.min(r.top, window.innerHeight - hh - 8)+"px";
    return true;
  }
  function closeMenu(){ if(menu) menu.hidden = true; }
  function menuInit(){
    menu = document.createElement("div"); menu.className = "cm"; menu.hidden = true; menu.setAttribute("data-testid","ctx-menu"); menu.setAttribute("role","menu");
    document.body.appendChild(menu);
    menu.addEventListener("mousedown", function(e){ e.preventDefault(); });
    menu.addEventListener("click", function(ev){
      var c = ev.target.closest("[data-cmc]"), i = ev.target.closest("[data-cm]"), x = menuCtx; if(!x) return;
      if(c){ var k = c.dataset.cmc; closeMenu();
        if(x.id){ var f = find(x.id); if(f){ f.ann.color = k; restyle(f.ann); persist(f.doc); } }
        else if(x.range){ makeHighlight(x.entry, x.range, k); }
        return; }
      if(!i) return; var a = i.dataset.cm; closeMenu();
      var d = x.doc;
      if(a==="copy" || a==="cut"){ var tx = x.text || (d.getSelection() && d.getSelection().toString()) || "";
        try{ navigator.clipboard.writeText(tx); }catch(e){ try{ d.execCommand("copy"); }catch(_){} }
        if(a==="cut"){ try{ d.execCommand("delete"); }catch(e){} } }
      else if(a==="paste"){ navigator.clipboard.readText().then(function(t){ try{ x.target.focus(); d.execCommand("insertText", false, t); }catch(e){} }).catch(function(){}); }
      else if(a==="all"){ try{ if(x.editable) d.execCommand("selectAll"); else d.getSelection().selectAllChildren(x.entry.page!=null ? x.entry.root : d.body); }catch(e){} }
      else if(a==="note"){ var an = x.range && makeHighlight(x.entry, x.range, pen.color); if(an){ setTimeout(function(){ var m = x.entry.root.querySelector('mark[data-hl="'+an.id+'"]'); if(m){ pinned = true; openPop(an.id, shellRect(m.getBoundingClientRect(), d)); editing = true; renderPop(); } }, 60); } }
      else if(a==="editnote"){ var mk = x.entry.root.querySelector('mark[data-hl="'+x.id+'"]'); if(mk){ pinned = true; openPop(x.id, shellRect(mk.getBoundingClientRect(), d)); editing = true; renderPop(); } }
      else if(a==="unhl"){ var mu = x.entry.root.querySelector('mark[data-hl="'+x.id+'"]'); askDelete(x.id, mu ? shellRect(mu.getBoundingClientRect(), d) : {left:x.px, right:x.px, top:x.py, bottom:x.py}); }
    });
    document.addEventListener("mousedown", function(e){ if(!menu.contains(e.target)) closeMenu(); });
    document.addEventListener("keydown", function(e){ if(e.key==="Escape") closeMenu(); });
    window.addEventListener("blur", closeMenu);
    var st = document.createElement("style");
    st.textContent = ".cm{position:fixed; z-index:70; min-width:190px; padding:6px; background:var(--surface); color:var(--ink); border:3px solid var(--outline); border-radius:10px; box-shadow:4px 4px 0 rgba(86,98,138,.3); font-family:var(--font-ui);} .cm[hidden]{display:none;}" +
      ".cm-i{display:flex; width:100%; align-items:center; justify-content:space-between; gap:18px; font:inherit; font-size:.82rem; font-weight:700; padding:6px 9px; border:0; border-radius:6px; background:transparent; color:inherit; cursor:pointer; text-align:left;} .cm-i:hover{background:var(--ochre,#ffe066); color:#2a3150;} .cm-i kbd{font-size:.68rem; opacity:.7;}" +
      ".cm-sep{height:3px; margin:5px 2px; background:var(--line,#d3e3f1); border-radius:2px;} .cm-l{font-size:.68rem; font-weight:800; opacity:.7; padding:2px 9px;} .cm-sw{display:flex; gap:8px; padding:4px 9px 6px;}";
    document.head.appendChild(st);
  }
  function attachDoc(doc){
    if(docsSeen.indexOf(doc) !== -1) return; docsSeen.push(doc);
    doc.addEventListener("contextmenu", function(ev){ if(ev.shiftKey) return; if(openMenu(doc, ev)) ev.preventDefault(); });
    if(doc !== document){
      doc.addEventListener("mousedown", function(){ if(!pop.hidden) closePop(); closeMenu(); });
      doc.addEventListener("keydown", docKey);
    }
    /* a note shows where it was taken: hovering its text previews it; clicking pins it open */
    doc.addEventListener("mouseover", function(ev){
      var m = ev.target.closest && ev.target.closest("mark[data-note]"); if(!m || pinned || editing || confirming) return;
      clearTimeout(hoverT); var id = m.getAttribute("data-hl"); if(!pop.hidden && popId===id) return;
      hoverT = setTimeout(function(){ if(pinned || editing) return; var f = find(id); if(f) { popId = id; popAnchor = shellRect(m.getBoundingClientRect(), doc); renderPop(); } }, 220);
    });
    doc.addEventListener("mouseout", function(ev){
      var m = ev.target.closest && ev.target.closest("mark[data-note]"); if(!m) return; clearTimeout(hoverT);
      if(!pinned) hoverT = setTimeout(function(){ if(!pinned && !pop.matches(":hover")) closePop(); }, 280);
    });
    doc.addEventListener("click", function(ev){
      var m = ev.target.closest && ev.target.closest("mark[data-hl]"); if(!m) return;
      var s = doc.getSelection(); if(s && !s.isCollapsed) return;
      var f = find(m.getAttribute("data-hl")); if(!f) return;
      pinned = true; openPop(f.ann.id, shellRect(m.getBoundingClientRect(), doc));
    });
  }
  function uid(){ return "n" + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  /* note text is stored as a small safe subset of HTML */
  var OK = {B:1,STRONG:1,I:1,EM:1,U:1,UL:1,OL:1,LI:1,BR:1,P:1,DIV:1};
  function clean(html){
    var d = new DOMParser().parseFromString("<body>"+html+"</body>", "text/html");
    (function walk(n){ Array.prototype.slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3) return; if(c.nodeType!==1){ n.removeChild(c); return; }
      walk(c); if(!OK[c.tagName]){ while(c.firstChild) n.insertBefore(c.firstChild, c); n.removeChild(c); }
      else Array.prototype.slice.call(c.attributes).forEach(function(a){ c.removeAttribute(a.name); }); }); })(d.body);
    var out = d.body.innerHTML.trim();
    return d.body.textContent.trim() ? out : "";
  }

  var popAnchor = null, popId = null, pinned = false, hoverT = null;
  function openPop(id, rect){ popId = id; popAnchor = rect; editing = false; confirming = false; renderPop(); }
  function askDelete(id, rect){ pinned = true; popId = id; popAnchor = rect; editing = false; confirming = true; renderPop(); }
  function renderPop(){
    var f = find(popId); if(!f){ pop.hidden = true; return; } var a = f.ann;
    var q = a.quote.length>120 ? a.quote.slice(0,120)+"…" : a.quote;
    var h = '<div class="hn-arrow"></div><p class="hn-quote" data-testid="note-quote">“'+q.replace(/[&<>]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c];})+'”</p>';
    if(confirming){
      h += '<p class="hn-note" data-testid="note-confirm-text">Delete this highlight'+(a.note?' and its note':'')+'?</p><div class="hn-row"><span class="grow"></span><button type="button" class="hn-btn" data-a="cancel" data-testid="note-delete-cancel">Cancel</button><button type="button" class="hn-btn warn" data-a="confirmdel" data-testid="note-delete-confirm">Delete</button></div>';
    } else if(editing){
      h += '<div class="hn-tools"><button type="button" class="hn-btn" data-cmd="bold" aria-label="Bold" data-testid="note-bold"><b>B</b></button><button type="button" class="hn-btn" data-cmd="italic" aria-label="Italic" data-testid="note-italic"><i>I</i></button><button type="button" class="hn-btn" data-cmd="insertUnorderedList" aria-label="Bulleted list" data-testid="note-list">&bull;&nbsp;List</button></div>' +
        '<div class="hn-ed" contenteditable="true" data-ph="Write a note…" aria-label="Note" data-testid="note-editor">'+(a.note||"")+'</div>' +
        '<div class="hn-row"><span class="grow"></span><button type="button" class="hn-btn" data-a="cancel" data-testid="note-cancel">Cancel</button><button type="button" class="hn-btn primary" data-a="save" data-testid="note-save">Save</button></div>';
    } else {
      if(a.note) h += '<div class="hn-note" data-testid="note-body">'+a.note+'</div>';
      h += '<div class="hn-row">'+KEYS.map(function(k){ return '<button type="button" class="hn-sw" data-c="'+k+'" aria-pressed="'+(a.color===k)+'" aria-label="Colour '+k+'" data-testid="note-colour-'+k+'" style="background:'+swatch(k)+'"></button>'; }).join("") +
        '<span class="grow"></span><button type="button" class="hn-btn warn" data-a="del" data-testid="note-delete">Delete</button><button type="button" class="hn-btn" data-a="edit" data-testid="note-edit">'+(a.note?"Edit":"Add note")+'</button></div>';
    }
    pop.innerHTML = h; place();
    if(editing){ var ed = pop.querySelector(".hn-ed"); ed.focus(); var r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  }
  function place(){
    var r = popAnchor; pop.hidden = false; var w = pop.offsetWidth, h = pop.offsetHeight;
    var x = Math.min(Math.max(8, (r.left+r.right)/2 - w/2), window.innerWidth - w - 8);
    var above = r.top - h - 14 > 8, y = above ? r.top - h - 12 : Math.min(r.bottom + 12, window.innerHeight - h - 8);
    pop.className = "hn-pop " + (above ? "above" : "below"); pop.style.left = x+"px"; pop.style.top = y+"px";
    var ar = pop.querySelector(".hn-arrow"); if(ar) ar.style.left = Math.min(Math.max(14, (r.left+r.right)/2 - x - 6), w - 26)+"px";
  }
  pop_init();
  function hoverOut(){ if(!pinned){ clearTimeout(hoverT); hoverT = setTimeout(function(){ if(!pinned) closePop(); }, 280); } }
  function hoverIn(){ clearTimeout(hoverT); }
  function pop_init(){ document.addEventListener("click", function(e){
    if(!pop || !pop.contains(e.target)) return;
    var cmd = e.target.closest("[data-cmd]"); if(cmd){ document.execCommand(cmd.dataset.cmd); pop.querySelector(".hn-ed").focus(); return; }
    var c = e.target.closest("[data-c]"); if(c){ var f = find(popId); if(f){ f.ann.color = c.dataset.c; restyle(f.ann); persist(f.doc); renderPop(); } return; }
    var b = e.target.closest("[data-a]"); if(!b) return; var a = b.dataset.a;
    if(a==="edit"){ editing = true; renderPop(); }
    else if(a==="cancel"){ editing = false; confirming = false; renderPop(); }
    else if(a==="save"){ var f2 = find(popId); if(f2){ f2.ann.note = clean(pop.querySelector(".hn-ed").innerHTML); f2.ann.updated = new Date().toISOString(); restyle(f2.ann); persist(f2.doc); } editing = false; renderPop(); }
    else if(a==="del"){ pinned = true; confirming = true; renderPop(); }
    else if(a==="confirmdel"){ remove(popId); closePop(); }
  }); document.addEventListener("mousedown", function(e){ if(e.target.closest && e.target.closest("[data-cmd]")) e.preventDefault(); }); }
  function closePop(){ clearTimeout(hoverT); pop.hidden = true; popId = null; editing = false; confirming = false; pinned = false; }
  function remove(id){ var f = find(id); if(!f) return; store.items[f.doc] = store.items[f.doc].filter(function(a){ return a.id!==id; }); unwrap(id); persist(f.doc); }

  function jump(id){
    for(var i=0;i<roots.length;i++){ var m = roots[i].root.isConnected && roots[i].root.querySelector('mark[data-hl="'+id+'"]');
      if(m){ m.scrollIntoView({block:"center"}); m.classList.add("hub-flash"); setTimeout(function(){ m.classList.remove("hub-flash"); }, 1400); return true; } }
    return false;
  }

  /* ---------- the lesson iframe ---------- */
  function frameKey(){ try{ var l = document.getElementById("frame").contentWindow.location; return "lesson:" + l.pathname.replace(/^\//,"") + l.search; }catch(e){ return null; } }
  function frameTitle(){ try{ return frameDoc.title.replace(/\s*[·|–-]\s*Study Hub.*$/,""); }catch(e){ return ""; } }
  function attachFrame(){
    var f = document.getElementById("frame"); if(!f) return;
    f.addEventListener("load", function(){
      var key = frameKey(); try{ frameDoc = f.contentDocument; }catch(e){ frameDoc = null; }
      if(!key || !frameDoc || !frameDoc.body || /\/index\.html/.test(key) || /outline\.html/.test(key)){ currentKey = null; emit(); return; }
      currentKey = key; var entry = registerRoot(key, frameDoc.body, null);
      [700, 2200].forEach(function(t){ setTimeout(function(){ if(entry.root.isConnected) applyTo(entry); }, t); });
      emit();
    });
  }
  var currentKey = null;

  function init(){ css(); attachFrame(); }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();

  window.hubNotes = {
    registerRoot:registerRoot, list:list, remove:remove, jump:jump, onChange:function(f){ listeners.push(f); }, ready:ready,
    setNote:function(id, html){ var f = find(id); if(!f) return; f.ann.note = clean(html); f.ann.updated = new Date().toISOString(); restyle(f.ann); persist(f.doc); },
    askDelete:askDelete,
    currentDoc:function(){ return currentKey; }, colors:COLORS, all:function(){ return store.items; }
  };
})();
