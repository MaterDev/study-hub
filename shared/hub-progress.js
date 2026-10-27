/* Read tracking. Two stores, and the server wins whenever it answers:
     - with server.js running: state lives in .hub-data/progress.json (shared across browsers), and
       this browser's cache is overwritten with it on every load;
     - without it (GitHub Pages, file://, server down): state lives in this browser's localStorage
       only, so each visitor keeps their own progress and never sees anyone else's.
   API:
     hubProgress.available            → true when progress can be saved (server or browser cache)
     hubProgress.server               → true once the server has answered
     hubProgress.ready(fn)            → fn(items) once loaded (items = { id: {read, readAt, firstOpened, lastOpened, opens} })
     hubProgress.get(id)              → item or undefined
     hubProgress.setRead(id, bool)    → Promise
     hubProgress.opened(id)           → records a visit
     hubProgress.onChange(fn)         → fn(id, item) whenever something changes (other browsers too, via SSE, when served) */
(function(){
  if (window.hubProgress) return;
  var LS = "hub-progress-v1";
  var items = {}, loaded = false, server = false, waiting = [], listeners = [];
  function cacheRead(){ try{ return JSON.parse(localStorage.getItem(LS)) || {}; }catch(e){ return {}; } }
  function cacheWrite(){ try{ localStorage.setItem(LS, JSON.stringify(items)); }catch(e){} }
  var storage = (function(){ try{ localStorage.setItem(LS + "-t", "1"); localStorage.removeItem(LS + "-t"); return true; }catch(e){ return false; } })();
  function emit(id, it){ items[id] = it; cacheWrite(); listeners.forEach(function(f){ try{ f(id, it); }catch(e){} }); }
  function blank(){ return { read:false, readAt:null, firstOpened:null, lastOpened:null, opens:0 }; }
  /* the same changes server.js makes, applied to the cache when there is no server */
  function local(path, body){
    var now = new Date().toISOString(), it = Object.assign(blank(), items[body.id]);
    if(path === "progress"){ it.read = !!body.read; it.readAt = it.read ? now : null; }
    else { it.firstOpened = it.firstOpened || now; it.lastOpened = now; it.opens = (it.opens || 0) + 1; }
    emit(body.id, it); return { id:body.id, item:it };
  }
  function post(path, body){
    if(!server) return Promise.resolve(local(path, body));
    return fetch("/__hub/api/" + path, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(body) })
      .then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); })
      .then(function(d){ if(d && d.item) emit(d.id, d.item); return d; })
      .catch(function(){ return local(path, body); });
  }
  window.hubProgress = {
    available: storage || /^https?:$/.test(location.protocol),
    get server(){ return server; },
    ready: function(fn){ if(loaded) fn(items); else waiting.push(fn); },
    get: function(id){ return items[id]; },
    setRead: function(id, read){ return post("progress", { id:id, read:!!read }); },
    opened: function(id){ return post("opened", { id:id }).catch(function(){}); },
    onChange: function(fn){ listeners.push(fn); },
    readCount: function(ids){ return ids.filter(function(i){ return items[i] && items[i].read; }).length; }
  };
  function done(){ loaded = true; waiting.splice(0).forEach(function(f){ f(items); }); }
  items = cacheRead();
  if(!/^https?:$/.test(location.protocol)){ done(); return; }
  fetch("/__hub/api/progress")
    .then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); })
    .then(function(d){ if(!d || typeof d.items !== "object") throw new Error("shape"); server = true; items = d.items || {}; cacheWrite(); })
    .catch(function(){ /* no server: keep the cache */ })
    .then(done);
  window.addEventListener("hub:progress", function(e){ var d = e.detail || {}; if(d.id) emit(d.id, d.item); });
})();
