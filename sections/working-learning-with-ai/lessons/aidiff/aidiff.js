/* Module navigation for "Why AI Helps Some People and Hurts Others".
   Single source for the lesson sequence. Pages declare <body data-step="N">. */
(function(){
  var PAGES = [
    {file:"aidiff-overview.html",   short:"0", title:"Module overview"},
    {file:"aidiff-1-puzzle.html",   short:"1", title:"The puzzle: same tools, different results"},
    {file:"aidiff-2-frontier.html", short:"2", title:"The jagged frontier & calibration"},
    {file:"aidiff-3-loop.html",     short:"3", title:"The loop: use reshapes the user"},
    {file:"aidiff-4-design.html",   short:"4", title:"Designing for capability"},
    {file:"aidiff-5-evidence.html", short:"5", title:"Checking the evidence"}
  ];
  var step = +(document.body.getAttribute("data-step") || 0);
  var strip = document.getElementById("mod-strip");
  if(strip){
    strip.className = "mod-strip";
    strip.innerHTML = '<span class="mod-name">MODULE · AI EFFECTIVENESS</span><span class="mod-steps">' +
      PAGES.map(function(p,i){ return '<a href="'+p.file+'" title="'+p.title+'"'+(i===step?' class="here"':'')+'>'+p.short+'</a>'; }).join('') +
      '</span><span>'+(step===0?'Overview':'Lesson '+step+' of '+(PAGES.length-1))+'</span>';
  }
  var nx = document.getElementById("mod-next");
  if(nx){
    nx.className = "mod-next";
    var prev = PAGES[step-1], next = PAGES[step+1], h = "";
    h += prev ? '<a href="'+prev.file+'"><small>◀ PREVIOUS</small>'+prev.title+'</a>' : '<span style="flex:1"></span>';
    h += next ? '<a class="nx" href="'+next.file+'"><small>NEXT ▶</small>'+next.title+'</a>' : '<span style="flex:1"></span>';
    nx.innerHTML = h;
  }
  /* keep the hub sidebar/breadcrumb in sync when navigating inside the iframe */
  if(window.parent !== window){ try{ window.parent.postMessage({hub:"at", file:PAGES[step].file}, "*"); }catch(e){} }
  /* shared helper: segmented control */
  window.aidiffSeg = function(id, fn){
    var s=document.getElementById(id); if(!s) return;
    s.querySelectorAll("button").forEach(function(b){ b.addEventListener("click",function(){
      s.querySelectorAll("button").forEach(function(x){x.classList.remove("on");}); b.classList.add("on"); fn(b.dataset.m); }); });
  };
})();
