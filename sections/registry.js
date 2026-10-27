/* Section registry — the ONLY list the hub reads.
   To add a section: create sections/<id>/manifest.js + sections/<id>/index.html (+ sections/<id>/lessons/), then add <id> here.
   Order on screen comes from each manifest's "order" field, not this list. */
window.HUB_REGISTRY = [
  "web-realtime",
  "rendering-performance-motion",
  "building-with-ai",
  "working-learning-with-ai",
  "platforms",
  "soft-skills",
  "mind-philosophy"
];
/* Loads every manifest via <script src> (works on file://), then calls cb(sortedSections). */
window.hubLoadSections = function(base, cb){
  var reg = window.HUB_REGISTRY, left = reg.length;
  window.HUB_SECTIONS = window.HUB_SECTIONS || [];
  reg.forEach(function(id){
    var s = document.createElement("script");
    s.src = base + id + "/manifest.js";
    s.onload = s.onerror = function(){
      if(--left === 0){ window.HUB_SECTIONS.sort(function(a,b){ return a.order - b.order; }); cb(window.HUB_SECTIONS); }
    };
    document.head.appendChild(s);
  });
};
/* Tree helpers shared by hub + section homes */
window.hubWalk = function(nodes, fn, path){
  path = path || [];
  (nodes || []).forEach(function(n){ fn(n, path); if(n.children) window.hubWalk(n.children, fn, path.concat([n])); });
};
window.hubFmtDate = function(s){
  if(!s) return "—"; var p = s.split("-"), M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (+p[2]) + " " + M[+p[1]-1] + " " + p[0];
};
/* Short date for compact UI ("22 Jul" this year, "22 Jul 25" otherwise) */
window.hubShortDate = function(s){
  if(!s) return ""; var p = s.split("-"), M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (+p[2]) + " " + M[+p[1]-1] + (p[0] === String(new Date().getFullYear()) ? "" : " " + p[0].slice(2));
};
/* Count built vs stub lessons under a node list */
window.hubCount = function(nodes){
  var c = {built:0, stub:0};
  window.hubWalk(nodes, function(n){ if(n.type === "lesson") c[n.status === "stub" ? "stub" : "built"]++; });
  return c;
};
