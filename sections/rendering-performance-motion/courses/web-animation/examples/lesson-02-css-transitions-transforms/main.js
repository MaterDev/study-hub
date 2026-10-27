/* ════════════════════════════════════════════════════════════
   Lesson 02 — CSS Transitions & Transforms
   Interactive Playground — main.js
   ════════════════════════════════════════════════════════════ */

'use strict';

/* ── Tab switching ──────────────────────────────────────────── */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

/* ─── Helpers ───────────────────────────────────────────────── */
function ease01(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function round2(v) { return Math.round(v * 100) / 100; }


/* ════════════════════════════════════════════════════════════
   TAB 1 — TRANSITION EXPLORER
   ════════════════════════════════════════════════════════════ */
(function TransitionExplorer() {

  /* ── Elements ───────────────────────────────────────────── */
  const subject    = document.getElementById('demo-subject');
  const stateLabel = document.getElementById('state-label');
  const demoLabel  = document.getElementById('demo-label');
  const btnToggle  = document.getElementById('btn-toggle');
  const durIn      = document.getElementById('dur');
  const durVal     = document.getElementById('dur-val');
  const delayIn    = document.getElementById('delay');
  const delayVal   = document.getElementById('delay-val');
  const cssOut     = document.getElementById('css-out');
  const easingPre  = document.getElementById('easing-preset');
  const easingCard = document.getElementById('easing-card');
  const customRow  = document.getElementById('custom-bezier-row');
  const bzX1       = document.getElementById('bz-x1');
  const bzY1       = document.getElementById('bz-y1');
  const bzX2       = document.getElementById('bz-x2');
  const bzY2       = document.getElementById('bz-y2');
  const pipLayout  = document.getElementById('pip-layout');
  const pipPaint   = document.getElementById('pip-paint');
  const pipNote    = document.getElementById('pip-note');

  /* ── Data ───────────────────────────────────────────────── */
  const PIPELINE = {
    'transform':        { layout:false, paint:false, note:'Runs on the compositor thread — zero layout or paint per frame. The GPU repositions a texture it already has.' },
    'opacity':          { layout:false, paint:false, note:'Compositor-only like transform. The GPU alpha-blends the layer without touching layout or paint.' },
    'background-color': { layout:false, paint:true,  note:'Triggers a repaint every frame. Open DevTools → Rendering → Paint Flashing to see green flashes.' },
    'width':            { layout:true,  paint:true,  note:'Full layout recalculation every frame — the most expensive. Neighbouring elements may shift.' },
    'all':              { layout:true,  paint:true,  note:'"all" watches every property and assumes worst-case cost. Never use in production code.' },
  };

  const EASINGS = {
    'ease':        { bz:[.25,.1,.25,1],       name:'ease',        shape:'Slow start → fast middle → slow end', use:'Default. Generic — prefer ease-out for entrances.', avoid:'Intentional UI motion (too generic)', css:'cubic-bezier(0.25, 0.1, 0.25, 1)' },
    'ease-in':     { bz:[.42,0,1,1],          name:'ease-in',     shape:'Slow start → accelerates to end',     use:'Elements leaving the screen (exits, dismissals)', avoid:'Entrances — starting slow feels laggy', css:'cubic-bezier(0.42, 0, 1, 1)' },
    'ease-out':    { bz:[0,0,.58,1],          name:'ease-out',    shape:'Fast start → decelerates to end',     use:'Entrances, responses to interaction — most natural feeling', avoid:'Exits — should accelerate away, not decelerate', css:'cubic-bezier(0, 0, 0.58, 1)' },
    'ease-in-out': { bz:[.42,0,.58,1],        name:'ease-in-out', shape:'Slow both ends — symmetric',          use:'Continuous loops, element moving A→B', avoid:'Short one-shot interactions (slow start feels sluggish)', css:'cubic-bezier(0.42, 0, 0.58, 1)' },
    'linear':      { bz:[0,0,1,1],            name:'linear',      shape:'Constant speed throughout',           use:'Progress bars, scroll-driven, opacity fades', avoid:'Physical movement — looks robotic', css:'linear' },
    'custom':      { bz:[.34,1.56,.64,1],     name:'custom',      shape:'Overshoots then settles (spring)',    use:'Playful UIs, game elements, brand interactions', avoid:'Serious/dense UIs — bounce feels frivolous', css:'cubic-bezier(0.34, 1.56, 0.64, 1)' },
    'steps(6,end)':{ bz:null,                 name:'steps(6,end)',shape:'6 discrete jumps — no interpolation', use:'Sprite sheets, counters, retro effects', avoid:'Any animation needing smoothness', css:'steps(6, end)' },
  };

  let toggled    = false;
  let currentProp = 'transform';
  let bzVals     = [.34, 1.56, .64, 1]; // custom bezier control points

  /* ── Curve SVG ──────────────────────────────────────────── */
  const SVG_PAD = { left:40, right:40, top:20, bottom:20 };
  const SVG_W   = 200, SVG_H = 200;
  // Map: time 0-1 → x 40-160, progress 0-1 → y 180-20 (inverted)
  function tx(t) { return SVG_PAD.left + t * (SVG_W - SVG_PAD.left - SVG_PAD.right); }
  function ty(p) { return SVG_H - SVG_PAD.bottom - p * (SVG_H - SVG_PAD.top - SVG_PAD.bottom); }

  const curvePath = document.getElementById('curve-path');
  const dotEl     = document.getElementById('curve-dot');
  const h1Line    = document.getElementById('h1-line');
  const h2Line    = document.getElementById('h2-line');
  const h1Dot     = document.getElementById('h1-dot');
  const h2Dot     = document.getElementById('h2-dot');
  const curveSVG  = document.getElementById('curve-svg');

  function bezierPoint(t, x0,y0, x1,y1, x2,y2, x3,y3) {
    const mt = 1-t;
    return {
      x: mt*mt*mt*x0 + 3*mt*mt*t*x1 + 3*mt*t*t*x2 + t*t*t*x3,
      y: mt*mt*mt*y0 + 3*mt*mt*t*y1 + 3*mt*t*t*y2 + t*t*t*y3,
    };
  }

  function buildCurvePath(x1,y1, x2,y2) {
    // Cubic bezier from (0,0) to (1,1) with handles at (x1,y1) and (x2,y2)
    const pts = [];
    for (let i=0; i<=60; i++) {
      const t = i/60;
      const p = bezierPoint(t, 0,0, x1,y1, x2,y2, 1,1);
      pts.push(`${tx(p.x).toFixed(1)},${ty(p.y).toFixed(1)}`);
    }
    return 'M ' + pts.join(' L ');
  }

  function buildStepsPath(n) {
    const pts = [`M ${tx(0)},${ty(0)}`];
    for (let i=0; i<n; i++) {
      const x1 = i/n, x2 = (i+1)/n, y = (i+1)/n;
      pts.push(`H ${tx(x2)}`);
      pts.push(`V ${ty(y)}`);
    }
    return pts.join(' ');
  }

  function drawCurve() {
    const preset = easingPre.value;
    const info   = EASINGS[preset] || EASINGS['custom'];
    const bz     = preset === 'custom' ? bzVals : (info.bz || bzVals);

    if (preset === 'steps(6,end)') {
      curvePath.setAttribute('d', buildStepsPath(6));
      h1Dot.setAttribute('opacity','0');
      h2Dot.setAttribute('opacity','0');
      h1Line.setAttribute('opacity','0');
      h2Line.setAttribute('opacity','0');
    } else {
      const [x1,y1,x2,y2] = bz;
      curvePath.setAttribute('d', buildCurvePath(x1,y1,x2,y2));
      // Handle 1: connects (0,0) → (x1,y1)
      h1Line.setAttribute('x1', tx(0)); h1Line.setAttribute('y1', ty(0));
      h1Line.setAttribute('x2', tx(x1)); h1Line.setAttribute('y2', ty(y1));
      // Handle 2: connects (1,1) → (x2,y2)
      h2Line.setAttribute('x1', tx(1)); h2Line.setAttribute('y1', ty(1));
      h2Line.setAttribute('x2', tx(x2)); h2Line.setAttribute('y2', ty(y2));
      h1Dot.setAttribute('cx', tx(x1)); h1Dot.setAttribute('cy', ty(y1));
      h2Dot.setAttribute('cx', tx(x2)); h2Dot.setAttribute('cy', ty(y2));
      h1Dot.setAttribute('opacity', preset === 'custom' ? '1' : '0.4');
      h2Dot.setAttribute('opacity', preset === 'custom' ? '1' : '0.4');
      h1Line.setAttribute('opacity','1');
      h2Line.setAttribute('opacity','1');
    }
  }

  // Animate dot along curve
  let dotAnim = null;
  function animateDot(startY, endY, durationMs, cssEase) {
    if (dotAnim) cancelAnimationFrame(dotAnim);
    const start = performance.now();
    function frame(now) {
      const elapsed = now - start;
      const rawT    = Math.min(elapsed / durationMs, 1);
      // Position the dot in SVG space: x follows time, y follows CSS progress
      dotEl.setAttribute('cx', tx(rawT));
      dotEl.setAttribute('opacity', '1');
      if (rawT < 1) dotAnim = requestAnimationFrame(frame);
      else { setTimeout(() => dotEl.setAttribute('opacity','0'), 400); }
    }
    dotAnim = requestAnimationFrame(frame);
  }

  /* ── Draggable handles ──────────────────────────────────── */
  function setupHandleDrag(handleEl, which) {
    let dragging = false;
    handleEl.addEventListener('mousedown', e => {
      if (easingPre.value !== 'custom') return;
      dragging = true; e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      const rect = curveSVG.getBoundingClientRect();
      const scaleX = SVG_W / rect.width;
      const scaleY = SVG_H / rect.height;
      const rawX = (e.clientX - rect.left) * scaleX;
      const rawY = (e.clientY - rect.top)  * scaleY;
      const t = clamp((rawX - SVG_PAD.left) / (SVG_W - SVG_PAD.left - SVG_PAD.right), 0, 1);
      const p = (SVG_H - SVG_PAD.bottom - rawY) / (SVG_H - SVG_PAD.top - SVG_PAD.bottom);
      const pClamped = clamp(p, -0.5, 1.5);
      if (which === 1) { bzVals[0] = round2(t); bzVals[1] = round2(pClamped); bzX1.value = bzVals[0]; bzY1.value = bzVals[1]; }
      else             { bzVals[2] = round2(t); bzVals[3] = round2(pClamped); bzX2.value = bzVals[2]; bzY2.value = bzVals[3]; }
      drawCurve(); updateCSSOut();
    });
    document.addEventListener('mouseup', () => { dragging = false; });
  }
  setupHandleDrag(h1Dot, 1);
  setupHandleDrag(h2Dot, 2);

  /* ── Get current easing string ──────────────────────────── */
  function getEasingStr() {
    const p = easingPre.value;
    if (p === 'custom') return `cubic-bezier(${bzVals.join(',')})`;
    if (p === 'steps(6,end)') return 'steps(6, end)';
    return p;
  }

  /* ── Apply and reverse subject state ───────────────────── */
  function snapSubject() {
    subject.style.transition = 'none';
    subject.style.transform       = 'none';
    subject.style.opacity         = '1';
    subject.style.backgroundColor = '';
    subject.style.width           = '80px';
    void subject.offsetWidth; // force reflow
  }

  function goState(on) {
    const dur   = parseFloat(durIn.value);
    const delay = parseFloat(delayIn.value);
    const ease  = getEasingStr();
    subject.style.transition = `${currentProp} ${dur}s ${ease} ${delay}s`;

    if (on) {
      switch (currentProp) {
        case 'transform':        subject.style.transform = 'translateX(100px) scale(1.2) rotate(10deg)'; break;
        case 'opacity':          subject.style.opacity = '0.06'; break;
        case 'background-color': subject.style.backgroundColor = '#b35c5c'; break;
        case 'width':            subject.style.width = '200px'; break;
        case 'all':
          subject.style.transform = 'translateX(60px) rotate(15deg)';
          subject.style.opacity   = '0.5';
          subject.style.backgroundColor = '#b8902e';
          break;
      }
      stateLabel.textContent = 'State B';
      demoLabel.textContent  = 'B';
    } else {
      subject.style.transform       = 'none';
      subject.style.opacity         = '1';
      subject.style.backgroundColor = '';
      subject.style.width           = '80px';
      stateLabel.textContent = 'State A';
      demoLabel.textContent  = 'A';
    }
    animateDot(0, 1, parseFloat(durIn.value) * 1000, ease);
  }

  /* ── Pipeline UI ────────────────────────────────────────── */
  function updatePipeline() {
    const info = PIPELINE[currentProp];
    pipLayout.className = 'pip' + (info.layout ? ' on-layout' : '');
    pipPaint.className  = 'pip' + (info.paint  ? ' on-paint'  : '');
    pipNote.textContent = info.note;
  }

  /* ── Easing info card ───────────────────────────────────── */
  function updateEasingCard() {
    const p    = easingPre.value;
    const info = EASINGS[p] || EASINGS['custom'];
    customRow.style.display = p === 'custom' ? 'block' : 'none';
    easingCard.innerHTML = `
      <div class="easing-card-name">${info.name}</div>
      <div class="easing-card-row"><span class="easing-card-key">Shape:</span><span class="easing-card-val">${info.shape}</span></div>
      <div class="easing-card-row"><span class="easing-card-key">✓ Use:</span><span class="easing-card-good">${info.use}</span></div>
      <div class="easing-card-row"><span class="easing-card-key">✗ Avoid:</span><span class="easing-card-bad">${info.avoid}</span></div>
      <div class="easing-bezier">${info.css}</div>`;
  }

  /* ── CSS output ─────────────────────────────────────────── */
  function updateCSSOut() {
    const dur   = durIn.value;
    const delay = delayIn.value;
    const ease  = getEasingStr();
    durVal.textContent   = dur + 's';
    delayVal.textContent = delay + 's';
    cssOut.textContent =
`/* property */
transition-property: ${currentProp};

/* timing */
transition-duration: ${dur}s;
transition-timing-function: ${ease};
transition-delay: ${delay}s;

/* shorthand */
transition: ${currentProp} ${dur}s
  ${ease}
  ${delay}s;`;
  }

  /* ── Easing strip (right panel) ─────────────────────────── */
  const STRIP_EASINGS = [
    { label:'linear',     css:'linear',                              color:'#525c83' },
    { label:'ease',       css:'ease',                                color:'#4a6fa8' },
    { label:'ease-in',    css:'ease-in',                             color:'#b35c5c' },
    { label:'ease-out',   css:'ease-out',                            color:'#3a7a52' },
    { label:'ease-in-out',css:'ease-in-out',                         color:'#b8902e' },
    { label:'spring',     css:'cubic-bezier(0.34,1.56,0.64,1)',      color:'#7d68b3' },
    { label:'steps(6)',   css:'steps(6,end)',                        color:'#b8692e' },
  ];
  const stripContainer = document.getElementById('easing-strip');
  const stripBalls     = [];

  STRIP_EASINGS.forEach(e => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:8px;';
    row.innerHTML = `
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-dim);width:80px;flex-shrink:0;text-align:right;">${e.label}</div>
      <div style="flex:1;height:20px;background:var(--surface2);border:1px solid var(--border);border-radius:3px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:50%;transform:translateY(-50%);left:2px;width:14px;height:14px;border-radius:50%;background:${e.color};transition:left 1.6s ${e.css};"></div>
      </div>`;
    stripContainer.appendChild(row);
    stripBalls.push(row.querySelector('div > div'));
  });

  let stripDir = false;
  function runStrip() {
    stripDir = !stripDir;
    stripBalls.forEach(b => { b.style.left = stripDir ? 'calc(100% - 16px)' : '2px'; });
  }
  setTimeout(runStrip, 200);
  setInterval(runStrip, 2200);

  /* ── Prop card selection ────────────────────────────────── */
  document.querySelectorAll('input[name="tp"]').forEach(r => {
    r.addEventListener('change', () => {
      document.querySelectorAll('.prop-card').forEach(c => c.classList.remove('selected'));
      r.closest('.prop-card').classList.add('selected');
      currentProp = r.value;
      toggled = false;
      btnToggle.textContent = 'Toggle state';
      snapSubject();
      updatePipeline();
      updateCSSOut();
    });
  });

  /* ── Events ─────────────────────────────────────────────── */
  btnToggle.addEventListener('click', () => {
    toggled = !toggled;
    goState(toggled);
    btnToggle.textContent = toggled ? 'Toggle back' : 'Toggle state';
  });
  durIn.addEventListener('input',  updateCSSOut);
  delayIn.addEventListener('input', updateCSSOut);
  easingPre.addEventListener('change', () => {
    if (easingPre.value === 'custom') {
      bzVals = [parseFloat(bzX1.value), parseFloat(bzY1.value), parseFloat(bzX2.value), parseFloat(bzY2.value)];
    }
    drawCurve(); updateEasingCard(); updateCSSOut();
  });
  [bzX1,bzY1,bzX2,bzY2].forEach(inp => inp.addEventListener('input', () => {
    bzVals = [parseFloat(bzX1.value),parseFloat(bzY1.value),parseFloat(bzX2.value),parseFloat(bzY2.value)];
    drawCurve(); updateCSSOut();
  }));

  /* ── Init ───────────────────────────────────────────────── */
  drawCurve();
  updateEasingCard();
  updateCSSOut();
  updatePipeline();

})(); // end TransitionExplorer


/* ════════════════════════════════════════════════════════════
   TAB 2 — TRANSFORM ORDER PLAYGROUND
   ════════════════════════════════════════════════════════════ */
(function TransformOrder() {

  /* ── Config ─────────────────────────────────────────────── */
  // Deliberately moderate defaults so the box stays visible on screen
  const FN_DEFAULTS = {
    translateX: { unit:'px',  min:-150, max:150,  val:80,  step:1,    fmt: v => `translateX(${v}px)` },
    translateY: { unit:'px',  min:-150, max:150,  val:60,  step:1,    fmt: v => `translateY(${v}px)` },
    rotate:     { unit:'°',   min:-180, max:180,  val:45,  step:1,    fmt: v => `rotate(${v}deg)` },
    scale:      { unit:'×',   min:0.2,  max:2.5,  val:1.2, step:0.05, fmt: v => `scale(${v})` },
    scaleX:     { unit:'×',   min:0.2,  max:2.5,  val:1.3, step:0.05, fmt: v => `scaleX(${v})` },
    scaleY:     { unit:'×',   min:0.2,  max:2.5,  val:1.3, step:0.05, fmt: v => `scaleY(${v})` },
    skewX:      { unit:'°',   min:-40,  max:40,   val:15,  step:1,    fmt: v => `skewX(${v}deg)` },
  };

  // Start with just two functions so the result is easy to read
  let functions = [
    { id:1, type:'translateX', val:80 },
    { id:2, type:'rotate',     val:45 },
  ];
  let nextId = 3;

  const fnList    = document.getElementById('fn-list');
  const cssOut    = document.getElementById('order-css-out');
  const tBox      = document.getElementById('t-box');
  const tGhost    = document.getElementById('t-ghost');
  const axisSvg   = document.getElementById('axis-svg');
  const axisXDesc = document.getElementById('axis-x-desc');
  const axisYDesc = document.getElementById('axis-y-desc');
  const stage     = document.getElementById('transform-stage');

  const BOX_SIZE = 64; // px — match CSS

  /* ── Centre box and ghost in stage ─────────────────────── */
  // Use calc() so it works even when the stage is display:none at init time
  function centreBox() {
    const half = BOX_SIZE / 2;
    [tBox, tGhost].forEach(el => {
      el.style.left = `calc(50% - ${half}px)`;
      el.style.top  = `calc(50% - ${half}px)`;
    });
  }

  /* ── Draw faint grid ────────────────────────────────────── */
  function drawGrid() {
    stage.querySelectorAll('.grid-line').forEach(el => el.remove());
    const sw = stage.clientWidth, sh = stage.clientHeight;
    const sp = 40;
    for (let x = sp; x < sw; x += sp) {
      const l = document.createElement('div');
      l.className = 'grid-line grid-v'; l.style.left = x + 'px';
      stage.insertBefore(l, stage.firstChild);
    }
    for (let y = sp; y < sh; y += sp) {
      const l = document.createElement('div');
      l.className = 'grid-line grid-h'; l.style.top = y + 'px';
      stage.insertBefore(l, stage.firstChild);
    }
  }

  /* ── Build CSS transform value ──────────────────────────── */
  function buildTransformVal() {
    return functions.length
      ? functions.map(f => FN_DEFAULTS[f.type].fmt(f.val)).join(' ')
      : 'none';
  }

  /* ── Apply transform and update axis arrows ─────────────── */
  function apply() {
    tBox.style.transform = buildTransformVal();

    // CSS output
    const lines = functions.map(f => '  ' + FN_DEFAULTS[f.type].fmt(f.val));
    cssOut.textContent = functions.length
      ? 'transform:\n' + lines.join('\n') + ';'
      : 'transform: none;';

    // Draw axis arrows after browser has painted so getBoundingClientRect is fresh
    requestAnimationFrame(drawAxes);
  }

  /* ── Axis arrows — follow the actual box position ───────── */
  function drawAxes() {
    // Find centre of box in stage-local coordinates
    const stageRect = stage.getBoundingClientRect();
    const boxRect   = tBox.getBoundingClientRect();
    const cx = boxRect.left - stageRect.left + boxRect.width  / 2;
    const cy = boxRect.top  - stageRect.top  + boxRect.height / 2;

    // Compute accumulated rotation angle for axis orientation
    let totalRot = 0;
    functions.forEach(f => { if (f.type === 'rotate') totalRot += f.val; });
    const rad = totalRot * Math.PI / 180;
    const len = 48;

    const xEx = cx + Math.cos(rad) * len;
    const xEy = cy + Math.sin(rad) * len;
    const yEx = cx + Math.cos(rad - Math.PI/2) * len;
    const yEy = cy + Math.sin(rad - Math.PI/2) * len;

    // Set SVG viewBox to match stage dimensions
    axisSvg.setAttribute('viewBox', `0 0 ${stageRect.width} ${stageRect.height}`);

    axisSvg.innerHTML = `
      <defs>
        <marker id="arx" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <polygon points="0,0 0,7 7,3.5" fill="#b35c5c"/>
        </marker>
        <marker id="ary" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <polygon points="0,0 0,7 7,3.5" fill="#3a7a52"/>
        </marker>
      </defs>
      <!-- X axis -->
      <line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}"
            x2="${xEx.toFixed(1)}" y2="${xEy.toFixed(1)}"
            stroke="#b35c5c" stroke-width="2.5" marker-end="url(#arx)"/>
      <text x="${(xEx + (xEx>cx?8:-8)).toFixed(1)}" y="${(xEy+4).toFixed(1)}"
            fill="#b35c5c" font-size="11" font-family="monospace" font-weight="bold"
            text-anchor="${xEx > cx ? 'start' : 'end'}">X</text>
      <!-- Y axis -->
      <line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}"
            x2="${yEx.toFixed(1)}" y2="${yEy.toFixed(1)}"
            stroke="#3a7a52" stroke-width="2.5" marker-end="url(#ary)"/>
      <text x="${(yEx + (yEx>cx?8:-8)).toFixed(1)}" y="${(yEy+4).toFixed(1)}"
            fill="#3a7a52" font-size="11" font-family="monospace" font-weight="bold"
            text-anchor="${yEx > cx ? 'start' : 'end'}">Y</text>`;

    // Describe rotation in words
    const deg = Math.round(((totalRot % 360) + 360) % 360);
    axisXDesc.textContent = deg === 0 ? '→ screen-right (no rotation)' : `tilted ${deg}° clockwise from screen-right`;
    axisYDesc.textContent = deg === 0 ? '↓ screen-down (no rotation)'  : `tilted ${deg}° clockwise from screen-down`;
  }

  /* ── Render function list ───────────────────────────────── */
  let dragSrc = null;

  function renderList() {
    fnList.innerHTML = '';
    functions.forEach((fn, idx) => {
      const def  = FN_DEFAULTS[fn.type];
      const item = document.createElement('div');
      item.className = 'fn-item';
      item.draggable = true;

      item.innerHTML = `
        <div class="fn-item-header">
          <span class="fn-handle">⠿</span>
          <span class="fn-name">${def.fmt(fn.val)}</span>
          <button class="fn-toggle" title="remove">✕</button>
        </div>
        <div class="fn-slider-row">
          <input type="range" min="${def.min}" max="${def.max}" step="${def.step}" value="${fn.val}">
          <span class="fn-slider-val">${fn.val}${def.unit}</span>
        </div>`;

      // Drag
      item.addEventListener('dragstart', e => { dragSrc = idx; item.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; });
      item.addEventListener('dragend',   () => { item.classList.remove('dragging'); dragSrc = null; renderList(); apply(); });
      item.addEventListener('dragover',  e => { e.preventDefault(); item.classList.add('drag-over'); });
      item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
      item.addEventListener('drop', e => {
        e.preventDefault(); item.classList.remove('drag-over');
        if (dragSrc === null || dragSrc === idx) return;
        const [moved] = functions.splice(dragSrc, 1);
        functions.splice(idx, 0, moved);
        dragSrc = null; renderList(); apply();
      });

      // Slider
      item.querySelector('input[type=range]').addEventListener('input', sl => {
        fn.val = parseFloat(sl.target.value);
        sl.target.nextElementSibling.textContent = fn.val + def.unit;
        item.querySelector('.fn-name').textContent = def.fmt(fn.val);
        apply();
      });

      // Remove
      item.querySelector('.fn-toggle').addEventListener('click', () => {
        functions.splice(idx, 1); renderList(); apply();
      });

      fnList.appendChild(item);
    });
  }

  // Add function
  document.getElementById('add-fn-btn').addEventListener('click', () => {
    const sel = document.getElementById('add-fn-select');
    if (!sel.value) return;
    functions.push({ id: nextId++, type: sel.value, val: FN_DEFAULTS[sel.value].val });
    sel.value = '';
    renderList(); apply();
  });

  /* ── Live animation — oscillates between identity and full transform ── */
  // Shows the effect in real time without needing to click anything
  let animRaf  = null;
  let animStart= null;
  const ANIM_DUR = 1800; // ms for one direction

  function easeInOut(t) { return t < .5 ? 2*t*t : -1+(4-2*t)*t; }

  function animTick(ts) {
    if (!animStart) animStart = ts;
    const loop  = ANIM_DUR * 2;
    const e     = (ts - animStart) % loop;
    const rawT  = e < ANIM_DUR ? e / ANIM_DUR : 1 - (e - ANIM_DUR) / ANIM_DUR;
    const t     = easeInOut(rawT);

    // Interpolate each function's value toward its current setting
    const parts = functions.map(f => {
      const def = FN_DEFAULTS[f.type];
      // identity value per function type
      const identity = f.type.startsWith('scale') ? 1
                     : f.type === 'rotate' || f.type.startsWith('skew') ? 0
                     : 0; // translate
      const interpolated = identity + (f.val - identity) * t;
      const rounded = f.type.startsWith('scale')
        ? Math.round(interpolated * 100) / 100
        : Math.round(interpolated);
      return def.fmt(rounded);
    });

    tBox.style.transition = 'none';
    tBox.style.transform  = parts.join(' ') || 'none';
    requestAnimationFrame(drawAxes);
    animRaf = requestAnimationFrame(animTick);
  }

  function startAnim() {
    animStart = null;
    if (animRaf) cancelAnimationFrame(animRaf);
    animRaf = requestAnimationFrame(animTick);
  }

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    centreBox();   // uses calc() — safe even when hidden
    drawGrid();    // reads clientWidth — only called after tab is visible
    renderList();
    apply();
    startAnim();
  }

  // apply() only updates CSS output — the animation loop owns tBox.style.transform
  function apply() {
    const lines = functions.map(f => '  ' + FN_DEFAULTS[f.type].fmt(f.val));
    cssOut.textContent = functions.length
      ? 'transform:\n' + lines.join('\n') + ';'
      : 'transform: none;';
    animStart = null; // restart oscillation with updated values
  }

  // Centring and grid need the tab to be visible first
  // Reinit every time the user switches to this tab
  document.querySelector('[data-tab="order"]').addEventListener('click', () => {
    // Brief delay so display:block has taken effect before reading clientWidth
    setTimeout(() => { centreBox(); drawGrid(); startAnim(); }, 30);
  });

  // Initial setup — centreBox is safe immediately; defer drawGrid until visible
  centreBox();
  renderList();
  apply();
  // Start animation once tab is first shown (may already be visible)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    drawGrid();
    startAnim();
  }));

  window.addEventListener('resize', () => { drawGrid(); });

})(); // end TransformOrder


/* ════════════════════════════════════════════════════════════
   TAB 3 — TRANSFORM ORIGIN SANDBOX
   ════════════════════════════════════════════════════════════ */
(function OriginSandbox() {

  const subject  = document.getElementById('origin-subject');
  const dot      = document.getElementById('o-dot');
  const ch       = document.getElementById('o-ch');
  const cv       = document.getElementById('o-cv');
  const cssOut   = document.getElementById('origin-css-out');
  const playBtn  = document.getElementById('origin-play');
  const resetBtn = document.getElementById('origin-reset');
  const rotSlider   = document.getElementById('o-rotate');
  const scaleSlider = document.getElementById('o-scale');
  const skewSlider  = document.getElementById('o-skew');
  const rotVal   = document.getElementById('o-rotate-val');
  const scaleVal = document.getElementById('o-scale-val');
  const skewVal  = document.getElementById('o-skew-val');

  let ox = '50%', oy = '50%';
  let oxPct = 50, oyPct = 50;
  let playing = false;
  let playRaf = null;
  let playStart = null;

  function setOrigin(xPct, yPct, xCss, yCss) {
    ox = xCss; oy = yCss; oxPct = xPct; oyPct = yPct;
    subject.style.transformOrigin = `${xCss} ${yCss}`;
    dot.style.left = xPct + '%';
    dot.style.top  = yPct + '%';
    ch.style.top   = yPct + '%';
    cv.style.left  = xPct + '%';
    updateCSS();
  }

  function applyTransform() {
    const rot   = parseFloat(rotSlider.value);
    const scale = parseFloat(scaleSlider.value);
    const skew  = parseFloat(skewSlider.value);
    rotVal.textContent   = rot + '°';
    scaleVal.textContent = scale.toFixed(2);
    skewVal.textContent  = skew + '°';
    subject.style.transform = `rotate(${rot}deg) scale(${scale}) skewX(${skew}deg)`;
    updateCSS();
  }

  function updateCSS() {
    const rot   = rotSlider.value;
    const scale = parseFloat(scaleSlider.value).toFixed(2);
    const skew  = skewSlider.value;
    cssOut.textContent =
`transform-origin: ${ox} ${oy};
transform:
  rotate(${rot}deg)
  scale(${scale})
  skewX(${skew}deg);`;
  }

  // Preset buttons
  document.querySelectorAll('.origin-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.origin-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const xPct = btn.dataset.ox === '0%' ? 0 : btn.dataset.ox === '50%' ? 50 : 100;
      const yPct = btn.dataset.oy === '0%' ? 0 : btn.dataset.oy === '50%' ? 50 : 100;
      setOrigin(xPct, yPct, btn.dataset.ox, btn.dataset.oy);
    });
  });

  // Click to set custom origin
  subject.addEventListener('click', e => {
    const rect = subject.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width  * 100;
    const yPct = (e.clientY - rect.top)  / rect.height * 100;
    document.querySelectorAll('.origin-btn').forEach(b => b.classList.remove('active'));
    setOrigin(xPct, yPct, xPct.toFixed(1)+'%', yPct.toFixed(1)+'%');
  });

  // Sliders
  [rotSlider, scaleSlider, skewSlider].forEach(sl => sl.addEventListener('input', applyTransform));

  // Auto-animation
  playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.textContent = playing ? '⏸ Pause' : '▶ Auto-animate';
    if (playing) {
      playStart = null;
      function animFrame(ts) {
        if (!playing) return;
        if (!playStart) playStart = ts;
        const t  = (ts - playStart) / 3000; // 3s loop
        const loop = t % 2;
        const p  = loop < 1 ? ease01(loop) : ease01(2 - loop);
        rotSlider.value   = (p * 180 - 90).toFixed(0);
        scaleSlider.value = (0.6 + p * 0.8).toFixed(2);
        skewSlider.value  = (p * 20 - 10).toFixed(0);
        applyTransform();
        playRaf = requestAnimationFrame(animFrame);
      }
      playRaf = requestAnimationFrame(animFrame);
    } else {
      if (playRaf) cancelAnimationFrame(playRaf);
    }
  });

  resetBtn.addEventListener('click', () => {
    playing = false; playBtn.textContent = '▶ Auto-animate';
    if (playRaf) cancelAnimationFrame(playRaf);
    rotSlider.value = 0; scaleSlider.value = 1; skewSlider.value = 0;
    applyTransform();
  });

  // Init
  setOrigin(50, 50, '50%', '50%');
  applyTransform();

})(); // end OriginSandbox


/* ════════════════════════════════════════════════════════════
   TAB 4 — 3D PLAYGROUND
   ════════════════════════════════════════════════════════════ */
(function ThreeDPlayground() {

  const scene       = document.getElementById('flip-scene');
  const card        = document.getElementById('flip-card');
  const backFace    = card.querySelector('.flip-back');
  const perspSlider = document.getElementById('persp');
  const perspVal    = document.getElementById('persp-val');
  const perspPip    = document.getElementById('persp-pip');
  const perspLabel  = document.getElementById('persp-label');
  const perspOxSl   = document.getElementById('persp-ox');
  const perspOySl   = document.getElementById('persp-oy');
  const perspOxVal  = document.getElementById('persp-ox-val');
  const perspOyVal  = document.getElementById('persp-oy-val');
  const rxSl        = document.getElementById('rx');
  const rySl        = document.getElementById('ry');
  const rzSl        = document.getElementById('rz');
  const rxVal       = document.getElementById('rx-val');
  const ryVal       = document.getElementById('ry-val');
  const rzVal       = document.getElementById('rz-val');
  const btnFlip     = document.getElementById('btn-flip');
  const btnReset    = document.getElementById('btn-reset-rot');
  const flipDurSl   = document.getElementById('flip-dur');
  const flipDurVal  = document.getElementById('flip-dur-val');
  const flipEaseSl  = document.getElementById('flip-ease');
  const cssOut      = document.getElementById('threed-css-out');

  let flipped = false;
  let manualRot = { x:0, y:0, z:0 };

  function updatePerspective() {
    const p   = parseInt(perspSlider.value);
    const ox  = perspOxSl.value + '%';
    const oy  = perspOySl.value + '%';
    perspVal.textContent    = p + 'px';
    perspOxVal.textContent  = perspOxSl.value + '%';
    perspOyVal.textContent  = perspOySl.value + '%';
    perspLabel.textContent  = `perspective: ${p}px`;
    // Ruler thumb: 100-2000 → 0-100%
    const pct = (p - 100) / (2000 - 100) * 100;
    perspPip.style.left = pct + '%';
    scene.style.perspective       = p + 'px';
    scene.style.perspectiveOrigin = `${ox} ${oy}`;
    updateCSSOut();
  }

  function updateCardTransform() {
    const rx = parseFloat(rxSl.value);
    const ry = parseFloat(rySl.value);
    const rz = parseFloat(rzSl.value);
    rxVal.textContent = rx + '°';
    ryVal.textContent = ry + '°';
    rzVal.textContent = rz + '°';
    manualRot = { x:rx, y:ry, z:rz };
    // If flipped via button, add the Y flip on top
    const totalY = ry + (flipped ? 180 : 0);
    card.style.transform = `rotateX(${rx}deg) rotateY(${totalY}deg) rotateZ(${rz}deg)`;
    updateCSSOut();
  }

  function updateBFV() {
    const v = document.querySelector('input[name="bfv"]:checked').value;
    card.querySelectorAll('.flip-face').forEach(f => {
      f.style.backfaceVisibility         = v;
      f.style.webkitBackfaceVisibility   = v;
    });
    updateCSSOut();
  }

  function updateTransition() {
    const dur  = flipDurSl.value;
    const ease = flipEaseSl.value;
    flipDurVal.textContent = dur + 's';
    card.style.transition  = `transform ${dur}s ${ease}`;
    updateCSSOut();
  }

  function updateCSSOut() {
    const p   = perspSlider.value;
    const ox  = perspOxSl.value + '%';
    const oy  = perspOySl.value + '%';
    const rx  = rxSl.value, ry = rySl.value, rz = rzSl.value;
    const dur = flipDurSl.value;
    const ease= flipEaseSl.value;
    const bfv = document.querySelector('input[name="bfv"]:checked').value;
    const totalY = parseInt(ry) + (flipped ? 180 : 0);
    cssOut.textContent =
`.scene {
  perspective: ${p}px;
  perspective-origin: ${ox} ${oy};
}

.card {
  transform-style: preserve-3d;
  transition: transform ${dur}s ${ease};
  transform: rotateX(${rx}deg)
             rotateY(${totalY}deg)
             rotateZ(${rz}deg);
}

.front, .back {
  backface-visibility: ${bfv};
}

.back {
  transform: rotateY(180deg);
}`;
  }

  btnFlip.addEventListener('click', () => {
    flipped = !flipped;
    btnFlip.textContent = flipped ? 'Flip back' : 'Flip card (Y)';
    updateCardTransform();
  });

  btnReset.addEventListener('click', () => {
    rxSl.value = 0; rySl.value = 0; rzSl.value = 0;
    flipped = false; btnFlip.textContent = 'Flip card (Y)';
    updateCardTransform();
  });

  perspSlider.addEventListener('input', updatePerspective);
  perspOxSl.addEventListener('input',  updatePerspective);
  perspOySl.addEventListener('input',  updatePerspective);
  [rxSl, rySl, rzSl].forEach(sl => sl.addEventListener('input', updateCardTransform));
  document.querySelectorAll('input[name="bfv"]').forEach(r => r.addEventListener('change', updateBFV));
  flipDurSl.addEventListener('input',  updateTransition);
  flipEaseSl.addEventListener('change', updateTransition);

  // Init
  card.style.transformStyle = 'preserve-3d';
  updatePerspective();
  updateTransition();
  updateBFV();
  updateCardTransform();

})(); // end ThreeDPlayground
