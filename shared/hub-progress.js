/* Read tracking — client for the dev server's persistent store (.hub-data/progress.json).
   Works across browsers and sessions because state lives on the server, not in browser storage.
   API:
     hubProgress.available            → true when served by server.js (false on file://)
     hubProgress.ready(fn)            → fn(items) once loaded (items = { id: {read, readAt, lastOpened, opens} })
     hubProgress.get(id)              → item or undefined
     hubProgress.setRead(id, bool)    → Promise
     hubProgress.opened(id)           → records a visit
     hubProgress.onChange(fn)         → fn(id, item) whenever any browser changes something (live, via SSE) */
(function(){
  if (window.hubProgress) return;
  var available = /^https?:$/.test(location.protocol);
  var items = {}, loaded = false, waiting = [], listeners = [];
  function emit(id, it){ items[id] = it; listeners.forEach(function(f){ try{ f(id, it); }catch(e){} }); }
  function post(path, body){
    return fetch("/__hub/api/" + path, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(body) })
      .then(function(r){ return r.json(); }).then(function(d){ if(d && d.item) emit(d.id, d.item); return d; });
  }
  window.hubProgress = {
    available: available,
    ready: function(fn){ if(loaded) fn(items); else waiting.push(fn); },
    get: function(id){ return items[id]; },
    setRead: function(id, read){ return available ? post("progress", { id:id, read:!!read }) : Promise.resolve(null); },
    opened: function(id){ return available ? post("opened", { id:id }).catch(function(){}) : Promise.resolve(null); },
    onChange: function(fn){ listeners.push(fn); },
    readCount: function(ids){ return ids.filter(function(i){ return items[i] && items[i].read; }).length; }
  };
  function done(){ loaded = true; waiting.splice(0).forEach(function(f){ f(items); }); }
  if(!available){ done(); return; }
  fetch("/__hub/api/progress").then(function(r){ return r.json(); })
    .then(function(d){ items = (d && d.items) || {}; done(); }).catch(done);
  window.addEventListener("hub:progress", function(e){ var d = e.detail || {}; if(d.id) emit(d.id, d.item); });
})();
