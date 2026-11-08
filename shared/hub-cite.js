/* Clickable citations into a lesson's attached reading.
   Write a citation in lesson text, static or script-rendered, as  [[pp. 11-12 and 18]]  (it displays without the brackets).
   Each page or range in it becomes its own link that opens the reference panel at that page.
   Forms: [[p. 18]]  [[pp. xxxv and xlvii]]  [[pp. 45-47, 62]]  [[3-42]]  [[PDF page 53]]  [[reading-id: p. 3]]
   Page numbers are the ones printed in the source; the reading's manifest "pageMap" turns them into PDF pages.
   With no reading id, the citation points at the first PDF reading attached to the lesson.
   Load this in the lesson's <head> so citations are replaced before the page paints. */
(function(){
  var TOKEN = /\[\[([^\[\]\n]{1,80})\]\]/g;
  var ENTRY = /^(?:\d+|[ivxlc]+)(?:-(?:\d+|[ivxlc]+))?$/;
  var LEAD = /^(?:pp?\.\s+|pages?\s+|PDF\s+pages?\s+)/i;

  function parse(body){
    var id = /^([a-z0-9][a-z0-9-]*):\s+/.exec(body), rest = id ? body.slice(id[0].length) : body;
    var lead = (LEAD.exec(rest) || [""])[0], parts = rest.slice(lead.length).split(/(,\s+and\s+|,\s+|\s+and\s+)/), entries = [];
    for(var i = 0; i < parts.length; i += 2){
      if(!ENTRY.test(parts[i])) return null;
      entries.push({text:(i ? "" : lead) + parts[i], page:parts[i].split("-")[0], sep:parts[i+1] || ""});
    }
    return {reading:id ? id[1] : null, pdf:/^PDF/i.test(lead), entries:entries};
  }
  if(typeof document === "undefined"){ globalThis.hubCiteParse = parse; return; }

  var st = document.createElement("style");
  st.textContent = "a.hub-cite{color:var(--link); background:none; font-weight:inherit; text-decoration:underline dotted; text-underline-offset:2px; cursor:pointer; border-radius:3px;}"+
    "a.hub-cite:hover{background:var(--ochre-soft); text-decoration-style:solid;}"+
    "a.hub-cite:focus-visible{outline:2px solid var(--link); outline-offset:1px;}";
  document.head.appendChild(st);

  function link(cite, entry){
    var a = document.createElement("a");
    a.className = "hub-cite"; a.href = "#"; a.textContent = entry.text; a.title = "Open this page in the reading";
    a.dataset.citePage = entry.page; if(cite.pdf) a.dataset.citePdf = "1"; if(cite.reading) a.dataset.citeReading = cite.reading;
    a.setAttribute("data-testid", "cite-link-" + entry.page);
    return a;
  }
  function plainText(cite){ return cite.entries.map(function(e){ return e.text + e.sep; }).join(""); }

  function render(node){
    var parent = node.parentNode;
    if(!parent || parent.nodeType !== 1 || node.data.indexOf("[[") < 0 || parent.closest("script,style,textarea")) return;
    var plainOnly = !!parent.closest("button,a,option,summary,title"), text = node.data, frag = document.createDocumentFragment(), last = 0, found = false, m;
    TOKEN.lastIndex = 0;
    while((m = TOKEN.exec(text))){
      var cite = parse(m[1]); if(!cite) continue;
      found = true;
      var before = text.slice(last, m.index); last = m.index + m[0].length;
      if(plainOnly){ frag.appendChild(document.createTextNode(before + plainText(cite))); continue; }
      if(before) frag.appendChild(document.createTextNode(before));
      cite.entries.forEach(function(e){ frag.appendChild(link(cite, e)); if(e.sep) frag.appendChild(document.createTextNode(e.sep)); });
    }
    if(!found) return;
    if(last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    parent.replaceChild(frag, node);
  }
  function scan(root){
    if(root.nodeType === 3) return render(root);
    if(root.nodeType !== 1) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [], n;
    while((n = w.nextNode())) if(n.data.indexOf("[[") >= 0) nodes.push(n);
    nodes.forEach(render);
  }
  new MutationObserver(function(records){
    records.forEach(function(r){
      if(r.type === "characterData") render(r.target);
      else r.addedNodes.forEach(scan);
    });
  }).observe(document.documentElement, {childList:true, subtree:true, characterData:true});
  document.addEventListener("DOMContentLoaded", function(){ scan(document.documentElement); });

  document.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest("a.hub-cite"); if(!a) return;
    e.preventDefault();
    parent.postMessage({hub:"cite", page:a.dataset.citePage, pdf:!!a.dataset.citePdf, reading:a.dataset.citeReading || null}, "*");
  });
})();
