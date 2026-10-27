/* Renders a section home page from its manifest. Page declares <body data-section="<id>">.
   Manifest file paths are relative to the hub root, so links are ../../<file>. Inside the hub, clicks are
   forwarded to the parent via postMessage so the sidebar + breadcrumb stay in sync. */
(function(){
  var ROOT = "../../", id = document.body.getAttribute("data-section");
  function esc(s){ return String(s||"").replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];}); }
  function li(arr){ return "<ul>"+(arr||[]).map(function(x){return "<li>"+esc(x)+"</li>";}).join("")+"</ul>"; }
  function card(n){
    if(n.status==="stub") return '<a class="lstub" data-open="'+esc(n.id)+'" href="'+ROOT+esc(n.file)+'" title="'+esc(n.blurb||"")+'"><span>'+esc(n.title)+'</span><i>STUB</i></a>';
    var d=n.dates;
    return '<a class="lcard" data-open="'+esc(n.id)+'" href="'+ROOT+esc(n.file)+'" style="--pc:'+esc(n.pip||"")+'">'+
      (d?'<span class="ldate">Updated '+hubFmtDate(d.updated)+' · created '+hubFmtDate(d.created)+'</span>':'')+
      '<i class="lread" data-read-id="'+esc(n.id)+'">✓ READ</i><b>'+esc(n.title)+'</b><span>'+esc(n.blurb||"")+'</span><small>'+((n.anchors||[]).length)+' parts'+((n.examples||[]).length?' · '+n.examples.length+(n.examples.length>1?' examples':' example'):'')+'</small></a>';
  }
  function cards(list){
    var b=list.filter(function(n){return n.status!=="stub";}), s=list.filter(function(n){return n.status==="stub";});
    return (b.length?'<div class="lcards" style="margin:12px 0">'+b.map(card).join("")+'</div>':'')+
           (s.length?'<div class="lstubs">'+s.map(card).join("")+'</div>':'');
  }
  function datesTable(s){
    var rows=[]; window.hubWalk(s.children, function(n){ if(n.dates && n.status!=="stub" && (n.type==="lesson" || n.kind==="module")) rows.push(n); });
    rows.sort(function(a,b){ return a.dates.updated < b.dates.updated ? 1 : -1; });
    return '<table class="fresh"><thead><tr><th>Item</th><th>Created</th><th>Updated</th><th>Sources checked</th></tr></thead><tbody>'+
      rows.map(function(n){ return '<tr><td>'+(n.kind==="module"?"▣ ":"")+esc(n.title.replace(/^Module:\s*/,""))+'</td><td>'+n.dates.created+'</td><td>'+n.dates.updated+'</td><td>'+n.dates.verified+'</td></tr>'; }).join("")+'</tbody></table>';
  }
  function renderChildren(nodes){
    var h = "", loose = nodes.filter(function(n){return n.type==="lesson";});
    if(loose.length) h += cards(loose);
    nodes.filter(function(n){return n.type==="group";}).forEach(function(g){
      var mod = g.kind==="module";
      h += '<div class="tree-group'+(mod?' module':'')+'"><div class="tg-head"><h3>'+esc(g.title)+'</h3>'+(function(){ var k=hubCount(g.children), tot=k.built+k.stub; return (mod?'<span class="tg-tag">'+esc(g.label||"MODULE")+'</span>':'<span class="tg-tag">GROUP</span>')+'<span class="tg-count">'+(k.stub? k.built+' / '+tot+' built':tot+' lessons')+'</span>'; })()+'</div>'+
        '<p class="tg-sum">'+esc(g.summary)+'</p>'+(g.dates?'<p class="tg-dates"><span><b>Created</b> '+hubFmtDate(g.dates.created)+'</span><span><b>Updated</b> '+hubFmtDate(g.dates.updated)+'</span>'+(g.home?'<a data-open="'+esc(g.id)+'" href="'+ROOT+esc(g.home)+'">Open overview ▸</a>':'')+'</p>':'')+
        (g.source?'<p class="tg-src">Source: '+esc(g.source.cite)+' <a href="https://doi.org/'+esc(g.source.doi)+'" target="_blank">doi:'+esc(g.source.doi)+'</a></p>':'')+
        renderChildren(g.children)+'</div>';
    });
    return h;
  }
  window.hubLoadSections("../", function(all){
    var s = all.filter(function(x){return x.id===id;})[0], el = document.getElementById("section-root");
    if(!s){ el.innerHTML = "<p>Section manifest not found: "+esc(id)+"</p>"; return; }
    document.title = s.title + " · Study Hub";
    var kc = hubCount(s.children), count = kc.built;
    var sc = s.scope || {};
    el.innerHTML =
      '<div class="sh-hero"><div class="sh-icon">'+esc(s.icon||"📚")+'</div><div><div class="sh-kicker">SECTION '+s.order+' · '+count+' LESSONS'+(kc.stub?' · '+kc.stub+' STUBS':'')+'</div><h1>'+esc(s.title)+'</h1></div></div>'+
      '<p class="subtitle">'+esc(s.summary)+'</p><p class="sh-dates">Section created '+hubFmtDate(s.created)+' · manifest updated '+hubFmtDate(s.updated)+'</p>'+
      ((s.notes||[]).length?'<div class="sh-notes">'+li(s.notes)+'</div>':'')+
      '<h2 id="sec1"><span class="num">1</span> What belongs here</h2>'+
      '<p class="lead">'+esc(sc.purpose)+'</p>'+
      '<div class="scope"><div class="sbox in"><h4>Includes</h4>'+li(sc.includes)+'</div><div class="sbox out"><h4>Doesn\'t include</h4>'+li(sc.excludes)+'</div>'+
      '<div class="sbox test"><h4>Admission test — new content belongs here if…</h4>'+li(sc.admission)+'</div></div>'+
      '<div class="meta-row"><span><b>Audience:</b> '+esc(sc.audience)+'</span><span><b>Depth:</b> '+esc(sc.depth)+'</span></div>'+
      '<h2 id="sec2"><span class="num">2</span> Contents</h2>'+ renderChildren(s.children)+
      ((s.related||[]).length?'<h2 id="sec3"><span class="num">3</span> Related sections</h2><div class="related">'+
        s.related.map(function(r){ var o=all.filter(function(x){return x.id===r;})[0]; return o?'<a data-section-link="'+esc(r)+'" href="../'+esc(r)+'/index.html">'+esc(o.icon||"")+' '+esc(o.title)+'</a>':''; }).join("")+'</div>':'')+
      '<h2 id="sec4"><span class="num">'+((s.related||[]).length?4:3)+'</span> Dates</h2>'+
      '<p>Every built item is dated, newest first. <b>Updated</b> is the last change to its content; <b>Sources checked</b> is when its facts were last verified.</p>'+
      datesTable(s)+
      '<p class="manifest-note">manifest: sections/'+esc(s.id)+'/manifest.js · schema '+esc(s.schema)+' · updated '+esc(s.updated)+'</p>';
    var ps = document.createElement("script"); ps.src = "../../shared/hub-progress.js";
    ps.onload = function(){ var P = window.hubProgress; function paint(){
        document.querySelectorAll("[data-read-id]").forEach(function(x){ var it = P.get(x.dataset.readId); x.parentNode.classList.toggle("is-read", !!(it && it.read)); }); }
      P.ready(paint); P.onChange(paint); };
    document.head.appendChild(ps);
    if(window.parent !== window){
      el.addEventListener("click", function(e){
        var a = e.target.closest("[data-open],[data-section-link]"); if(!a) return;
        e.preventDefault();
        window.parent.postMessage(a.dataset.open ? {hub:"open", id:a.dataset.open} : {hub:"section", id:a.dataset.sectionLink}, "*");
      });
    }
  });
})();
