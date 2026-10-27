/* ============================================================
   Lesson 03 — CSS Keyframe Animations — Interactive Lab
   main.js
   ============================================================ */

'use strict';

// ─── Tab switching ─────────────────────────────────────────
const tabs    = document.querySelectorAll('.tab');
const panes   = document.querySelectorAll('.tab-pane');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.tab;
    tabs.forEach(t => t.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');
  });
});

// ─── Utility helpers ───────────────────────────────────────
function segCtrl(containerSel, onChange) {
  const el = document.querySelector(containerSel);
  if (!el) return { get: () => null };
  el.querySelectorAll('.seg').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.seg').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onChange(btn.dataset.val);
    });
  });
  return {
    get: () => { const a = el.querySelector('.seg.active'); return a ? a.dataset.val : null; },
    set: (val) => {
      el.querySelectorAll('.seg').forEach(b => {
        b.classList.toggle('active', b.dataset.val === val);
      });
    }
  };
}

function copyBtn(btnEl, getText) {
  btnEl.addEventListener('click', () => {
    navigator.clipboard.writeText(getText()).then(() => {
      btnEl.textContent = '✓ Copied';
      btnEl.classList.add('copied');
      setTimeout(() => { btnEl.textContent = 'Copy'; btnEl.classList.remove('copied'); }, 1500);
    });
  });
}

function hl(css) {
  // Very light syntax highlight for CSS snippets
  return css
    .replace(/(\/\*.*?\*\/)/g, '<span class="tok-cmt">$1</span>')
    .replace(/(animation|animation-name|animation-duration|animation-delay|animation-timing-function|animation-iteration-count|animation-direction|animation-fill-mode|animation-play-state|@keyframes|from|to|transform|opacity|will-change|animation-timeline|animation-range|scroll|view)\b/g,
             '<span class="tok-kw">$1</span>')
    .replace(/:\s*([^;{}\n]+)/g, (m, val) => ': <span class="tok-val">' + val + '</span>')
    .replace(/(\d+(?:\.\d+)?(?:ms|s|px|%|deg|fr|em|rem))/g, '<span class="tok-num">$1</span>');
}

// ─────────────────────────────────────────────────────────────
// TAB 1 — ANIMATION LAB
// ─────────────────────────────────────────────────────────────
const labEl  = document.getElementById('lab-el');
const labCss = document.getElementById('lab-css');
const labStyleTag = document.getElementById('lab-injected');

const tlDelay = document.getElementById('tl-delay');
const tlAnim  = document.getElementById('tl-anim');
const tlLblL  = document.getElementById('tl-lbl-l');
const tlLblR  = document.getElementById('tl-lbl-r');

const ctrlDuration = document.getElementById('ctrl-duration');
const valDuration  = document.getElementById('val-duration');
const ctrlDelay    = document.getElementById('ctrl-delay');
const valDelay     = document.getElementById('val-delay');
const btnPlay      = document.getElementById('btn-play');

// Lab state
const lab = {
  preset:    'bounce',
  duration:  1200,
  delay:     0,
  iter:      'infinite',
  dir:       'normal',
  fill:      'none',
  easing:    'ease',
  playing:   true,
};

// Presets: [name, duration, delay, iter, dir, fill, easing, icon]
const PRESETS = [
  { id: 'bounce',   label: '↕ Bounce',   dur: 1000, delay: 0,    iter: 'infinite', dir: 'normal',    fill: 'none',     ease: 'ease',         icon: '🏀' },
  { id: 'pulse',    label: '◎ Pulse',    dur: 1400, delay: 0,    iter: 'infinite', dir: 'normal',    fill: 'none',     ease: 'ease-in-out',  icon: '💫' },
  { id: 'spin',     label: '↺ Spin',     dur: 900,  delay: 0,    iter: 'infinite', dir: 'normal',    fill: 'none',     ease: 'linear',       icon: '⚙️' },
  { id: 'float',    label: '~ Float',    dur: 2400, delay: 0,    iter: 'infinite', dir: 'alternate',  fill: 'none',     ease: 'ease-in-out',  icon: '🌊' },
  { id: 'shake',    label: '⚡ Shake',   dur: 600,  delay: 0,    iter: '1',        dir: 'normal',    fill: 'none',     ease: 'ease',         icon: '⚡' },
  { id: 'flip',     label: '⟳ Flip',    dur: 1600, delay: 200,  iter: 'infinite', dir: 'normal',    fill: 'none',     ease: 'ease-in-out',  icon: '🎴' },
  { id: 'slide-up', label: '↑ Slide-up', dur: 800,  delay: 400,  iter: '1',        dir: 'normal',    fill: 'forwards', ease: 'cubic-bezier(0.22,1,0.36,1)', icon: '📦' },
  { id: 'fade-in',  label: '◌ Fade',    dur: 1000, delay: 600,  iter: '1',        dir: 'normal',    fill: 'both',     ease: 'ease-out',     icon: '✨' },
];

// Map preset id → keyframe name
const PRESET_KF = {
  'bounce':   'l-bounce',
  'pulse':    'l-pulse',
  'spin':     'l-spin',
  'float':    'l-float',
  'shake':    'l-shake',
  'flip':     'l-flip',
  'slide-up': 'l-slide-up',
  'fade-in':  'l-fade-in',
};

// Build preset grid
const presetGrid = document.getElementById('preset-grid');
PRESETS.forEach(p => {
  const btn = document.createElement('button');
  btn.className = 'preset-btn';
  btn.dataset.id = p.id;
  btn.textContent = p.label;
  btn.addEventListener('click', () => applyPreset(p));
  presetGrid.appendChild(btn);
});

const iterCtrl = segCtrl('#ctrl-iter',  v => { lab.iter  = v; updateLabAnim(); });
const dirCtrl  = segCtrl('#ctrl-dir',   v => { lab.dir   = v; updateLabAnim(); });
const fillCtrl = segCtrl('#ctrl-fill',  v => { lab.fill  = v; updateLabAnim(); });
const easeCtrl = document.getElementById('ctrl-easing');

easeCtrl.addEventListener('change', () => { lab.easing = easeCtrl.value; updateLabAnim(); });

ctrlDuration.addEventListener('input', () => {
  lab.duration = +ctrlDuration.value;
  valDuration.textContent = lab.duration + 'ms';
  updateLabAnim();
});
ctrlDelay.addEventListener('input', () => {
  lab.delay = +ctrlDelay.value;
  valDelay.textContent = lab.delay + 'ms';
  updateLabAnim();
});

btnPlay.addEventListener('click', () => {
  lab.playing = !lab.playing;
  const el = document.querySelector('.lab-element');
  if (el) el.style.animationPlayState = lab.playing ? 'running' : 'paused';
  btnPlay.textContent = lab.playing ? '⏸ Pause' : '▶ Resume';
  btnPlay.classList.toggle('paused', lab.playing);
});

function applyPreset(p) {
  lab.preset   = p.id;
  lab.duration = p.dur;
  lab.delay    = p.delay;
  lab.iter     = p.iter;
  lab.dir      = p.dir;
  lab.fill     = p.fill;
  lab.easing   = p.ease;
  lab.playing  = true;

  // Sync controls
  ctrlDuration.value     = p.dur;
  valDuration.textContent = p.dur + 'ms';
  ctrlDelay.value        = p.delay;
  valDelay.textContent   = p.delay + 'ms';
  iterCtrl.set(p.iter);
  dirCtrl.set(p.dir);
  fillCtrl.set(p.fill);
  easeCtrl.value = p.ease;

  btnPlay.textContent = '⏸ Pause';
  btnPlay.classList.add('paused');

  // Update active preset button
  presetGrid.querySelectorAll('.preset-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.id === p.id);
  });

  // Update icon
  document.querySelector('.lab-el-icon').textContent = p.icon;

  updateLabAnim();
}


// Copy button for lab
const labCopyBtn = document.getElementById('copy-lab');
if (labCopyBtn) copyBtn(labCopyBtn, () => {
  const el = document.getElementById('lab-css');
  return el ? el.textContent : '';
});

// Init with bounce preset
applyPreset(PRESETS[0]);

function updateLabAnim() {
  const kf = PRESET_KF[lab.preset] || 'l-bounce';
  const css = `${kf} ${lab.duration}ms ${lab.easing} ${lab.delay}ms ${lab.iter === '1' ? '1' : lab.iter} ${lab.dir} ${lab.fill}`;
  const el = document.querySelector('.lab-element');
  if (!el) return;

  // Force reflow to restart animation
  el.style.animation = 'none';
  el.style.opacity;
  el.style.animation = css;
  el.style.animationPlayState = lab.playing ? 'running' : 'paused';

  // Timeline
  const total = Math.max(Math.abs(lab.delay) + lab.duration, 1);
  const delayPct = Math.abs(lab.delay) / total * 100;
  if (tlDelay) {
    tlDelay.style.width = delayPct.toFixed(1) + '%';
    tlDelay.classList.toggle('is-negative', lab.delay < 0);
  }
  if (tlLblL) tlLblL.textContent = lab.delay !== 0 ? `delay: ${lab.delay}ms` : '0';
  if (tlLblR) tlLblR.textContent = `${lab.duration}ms`;

  // Code block
  const raw = `.element {
  animation-name:            ${kf};
  animation-duration:        ${lab.duration}ms;
  animation-timing-function: ${lab.easing};
  animation-delay:           ${lab.delay}ms;
  animation-iteration-count: ${lab.iter === '1' ? '1' : lab.iter};
  animation-direction:       ${lab.dir};
  animation-fill-mode:       ${lab.fill};
}`;
  if (labCss) labCss.innerHTML = hl(raw);
}


// Call once at init
setTimeout(updateLabAnim, 0);

// ─────────────────────────────────────────────────────────────
// TAB 2 — PATTERN GALLERY
// ─────────────────────────────────────────────────────────────
const PATTERNS = [
  {
    id: 'fade-up',
    name: 'Fade Up',
    tag: 'entrance',
    elClass: '',
    anim: 'pat-fade-up 0.6s ease both',
    repeat: 'pat-fade-up 0.6s ease both',
    use: 'Page loads, list items',
    desc: 'The workhorse entrance animation. Elements feel like they\'re emerging from below. Works because upward motion implies arrival.',
    keyframes: `@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    css: `.card {
  animation: fade-up 0.6s ease both;
}
/* Stagger on siblings */
.card:nth-child(2) { animation-delay: 80ms; }
.card:nth-child(3) { animation-delay: 160ms; }`
  },
  {
    id: 'bounce',
    name: 'Bounce',
    tag: 'attention',
    elClass: 'pat-el-circle',
    anim: 'pat-bounce 1.2s ease-in-out infinite',
    use: 'Notifications, CTAs',
    desc: 'Mimics physics: the element bounces like a real object. Multiple keyframe stops at 30%, 60%, 80% fake deceleration and elastic contact.',
    keyframes: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  30%       { transform: translateY(-28px); }
  60%       { transform: translateY(-14px); }
  80%       { transform: translateY(-6px); }
}`,
    css: `.badge {
  animation: bounce 1.2s ease-in-out infinite;
  /* pause when user prefers */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}`
  },
  {
    id: 'pulse',
    name: 'Pulse',
    tag: 'attention',
    elClass: '',
    anim: 'pat-pulse 2s ease-in-out infinite',
    use: 'Live indicators, status',
    desc: 'Scale + expanding box-shadow creates a heartbeat feel. Entirely on the compositor — no layout cost, safe at 60fps.',
    keyframes: `@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(124,110,255,0);
  }
  50% {
    transform: scale(1.14);
    box-shadow: 0 0 0 14px rgba(124,110,255,.18);
  }
}`,
    css: `.live-dot {
  will-change: transform;
  animation: pulse 2s ease-in-out infinite;
}`
  },
  {
    id: 'slide-in',
    name: 'Slide In',
    tag: 'entrance',
    elClass: 'pat-el-pill',
    anim: 'pat-slide-in 0.5s cubic-bezier(0.22,1,0.36,1) both',
    use: 'Toasts, drawers, panels',
    desc: 'Spring-like easing (cubic-bezier with overshoot) makes the panel feel physical. The `both` fill-mode ensures it starts hidden.',
    keyframes: `@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`,
    css: `.toast {
  /* spring easing: starts fast, overshoots slightly */
  animation: slide-in 0.5s
    cubic-bezier(0.22, 1, 0.36, 1) both;
}`
  },
  {
    id: 'shake',
    name: 'Shake',
    tag: 'feedback',
    elClass: '',
    anim: 'pat-shake 0.5s ease both',
    use: 'Form errors, invalid input',
    desc: 'Decaying oscillation (large displacement → small) mimics real physics. Run once (not infinite) so it stops after communicating the error.',
    keyframes: `@keyframes shake {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  15%       { transform: translateX(-10px) rotate(-3deg); }
  30%       { transform: translateX(10px) rotate(3deg); }
  45%       { transform: translateX(-7px); }
  60%       { transform: translateX(7px); }
  75%       { transform: translateX(-4px); }
  90%       { transform: translateX(4px); }
}`,
    css: `.input.error {
  animation: shake 0.5s ease both;
  border-color: var(--red);
}
/* Re-trigger: remove + re-add class in JS */`
  },
  {
    id: 'float',
    name: 'Float',
    tag: 'ambient',
    elClass: '',
    anim: 'pat-float 3s ease-in-out infinite',
    use: 'Hero elements, cards',
    desc: '`animation-direction: alternate` runs the keyframe forward then backward — creates smooth infinite looping without a jarring jump at 100%.',
    keyframes: `@keyframes float {
  from { transform: translateY(0); }
  to   { transform: translateY(-14px); }
}`,
    css: `.hero-img {
  /* alternate = ping-pong, no jump at loop end */
  animation: float 3s ease-in-out infinite alternate;
}`
  },
  {
    id: 'ping',
    name: 'Ping',
    tag: 'attention',
    elClass: 'pat-el-ping',
    anim: '',
    use: 'Online status, live dots',
    desc: 'Two expanding rings using ::before and ::after, offset by half a cycle. The rings start from scale(0) and fade out at scale(3.5). Pure CSS, no JS.',
    keyframes: `@keyframes ping {
  0%   { transform: translate(-50%,-50%) scale(0);
          opacity: .8; }
  100% { transform: translate(-50%,-50%) scale(3.5);
          opacity: 0; }
}`,
    css: `.dot { position: relative; }
.dot::before, .dot::after {
  content: '';
  position: absolute;
  inset: 0; border-radius: 50%;
  background: currentColor;
  animation: ping 1.8s ease-out infinite;
}
.dot::after { animation-delay: .9s; }`
  },
  {
    id: 'flip',
    name: '3D Flip',
    tag: 'entrance',
    elClass: '',
    anim: 'pat-flip 2.2s ease-in-out infinite',
    use: 'Cards, image reveals',
    desc: 'At 50% the element is edge-on (rotateY 90°), so we jump to -90° without the viewer seeing the switch. This is how card-flip "front and back" works.',
    keyframes: `@keyframes flip-reveal {
  0%   { transform: perspective(400px) rotateY(0deg); }
  50%  { transform: perspective(400px) rotateY(90deg); }
  51%  { transform: perspective(400px) rotateY(-90deg); }
  100% { transform: perspective(400px) rotateY(0deg); }
}`,
    css: `.card {
  transform-style: preserve-3d;
  animation: flip-reveal 0.6s ease-in-out both;
}`
  },
];

// Build pattern grid
const patternsGrid = document.getElementById('patterns-grid');
const patDrawer    = document.getElementById('pat-drawer');
const drawerName   = document.getElementById('drawer-name');
const drawerTag    = document.getElementById('drawer-tag');
const drawerCopy   = document.getElementById('drawer-copy');
const drawerClose  = document.getElementById('drawer-close');
const drawerCode   = document.getElementById('drawer-code');

let activePatCard = null;
let activePatTimeout = null;

PATTERNS.forEach(p => {
  const card = document.createElement('div');
  card.className = 'pat-card';
  card.dataset.id = p.id;

  // Preview element
  let elInner = '';
  if (p.id === 'ping') {
    elInner = `<div class="pat-el pat-el-ping"><div class="pat-el-dot"></div></div>`;
  } else {
    elInner = `<div class="pat-el ${p.elClass || ''}"></div>`;
  }

  card.innerHTML = `
    <div class="pat-preview">${elInner}</div>
    <div class="pat-info">
      <div class="pat-name">${p.name}</div>
      <span class="pat-use">${p.use}</span>
    </div>`;

  // Apply animation to preview element (not ping — it uses CSS keyframes on pseudo)
  if (p.id !== 'ping' && p.anim) {
    const preview = card.querySelector('.pat-el');
    preview.style.animation = p.anim;
  }

  card.addEventListener('click', () => openPatDrawer(p, card));
  patternsGrid.appendChild(card);
});

function openPatDrawer(p, card) {
  if (activePatCard) activePatCard.classList.remove('active');
  card.classList.add('active');
  activePatCard = card;

  drawerName.textContent = p.name;
  drawerTag.textContent  = p.tag;
  drawerCode.innerHTML   = hl(p.css);
  copyBtn(drawerCopy, () => p.css);
  patDrawer.classList.add('open');
}

drawerClose.addEventListener('click', () => {
  patDrawer.classList.remove('open');
  if (activePatCard) activePatCard.classList.remove('active');
  activePatCard = null;
});

// ─────────────────────────────────────────────────────────────
// TAB 3 — STAGGER LAB
// ─────────────────────────────────────────────────────────────
const staggerStage  = document.getElementById('stagger-stage');
const sgCss         = document.getElementById('sg-css');
const sgStyleTag    = document.getElementById('sg-injected');
const btnSgReplay   = document.getElementById('btn-sg-replay');
const ctrlSgCount   = document.getElementById('ctrl-sg-count');
const valSgCount    = document.getElementById('val-sg-count');
const ctrlSgDelay   = document.getElementById('ctrl-sg-delay');
const valSgDelay    = document.getElementById('val-sg-delay');
const ctrlSgDur     = document.getElementById('ctrl-sg-dur');
const valSgDur      = document.getElementById('val-sg-dur');

const sg = {
  count:  8,
  delay:  60,
  dur:    500,
  anim:   'sg-slide-up',
  order:  'ltr',
};

const SG_COLORS = [
  '#6a55a3','#4a6fa8','#2f7fa8','#2f7fa8',
  '#2f7fa8','#3a7a52','#b8902e','#b8692e',
  '#b35c5c','#7d68b3','#b35c8a','#4a6fa8',
];

const sgAnimCtrl  = segCtrl('#ctrl-sg-anim',  v => { sg.anim  = v; buildStagger(); });
const sgOrderCtrl = segCtrl('#ctrl-sg-order', v => { sg.order = v; buildStagger(); });

ctrlSgCount.addEventListener('input', () => {
  sg.count = +ctrlSgCount.value;
  valSgCount.textContent = sg.count;
  buildStagger();
});
ctrlSgDelay.addEventListener('input', () => {
  sg.delay = +ctrlSgDelay.value;
  valSgDelay.textContent = sg.delay + 'ms';
  buildStagger();
});
ctrlSgDur.addEventListener('input', () => {
  sg.dur = +ctrlSgDur.value;
  valSgDur.textContent = sg.dur + 'ms';
  buildStagger();
});
btnSgReplay.addEventListener('click', buildStagger);

function buildStagger() {
  staggerStage.innerHTML = '';

  const indices = Array.from({ length: sg.count }, (_, i) => i);
  const ordered = sg.order === 'rtl'    ? [...indices].reverse()
                : sg.order === 'center' ? indices.sort((a, b) => Math.abs(a - sg.count/2 - .5) - Math.abs(b - sg.count/2 - .5))
                : sg.order === 'random' ? [...indices].sort(() => Math.random() - .5)
                : indices; // ltr

  // Build delay lookup: ordered[i] → delay index i
  const delayFor = new Array(sg.count);
  ordered.forEach((origIdx, seqPos) => { delayFor[origIdx] = seqPos; });

  const rows = Math.floor(Math.random() * 4) + 4; // random bar heights

  indices.forEach(i => {
    const bar = document.createElement('div');
    bar.className = 'sg-bar';
    const h = 40 + Math.floor(Math.random() * 160);
    const color = SG_COLORS[i % SG_COLORS.length];
    bar.style.cssText = `
      height: ${h}px;
      background: ${color};
      animation: ${sg.anim} ${sg.dur}ms cubic-bezier(0.22,1,0.36,1) ${delayFor[i] * sg.delay}ms both;
      transform-origin: bottom;
    `;
    staggerStage.appendChild(bar);
  });

  // Code
  const orderComment = sg.order === 'ltr'    ? 'left to right'
                     : sg.order === 'rtl'    ? 'right to left'
                     : sg.order === 'center' ? 'center out'
                     : 'random';
  const raw = `.bar {
  /* ${orderComment} stagger — set --i via HTML or JS */
  animation: ${sg.anim} ${sg.dur}ms
    cubic-bezier(0.22, 1, 0.36, 1)
    calc(var(--i) * ${sg.delay}ms) both;
  transform-origin: bottom;
}

/* Set in JS: el.style.setProperty('--i', index) */`;
  if (sgCss) sgCss.innerHTML = hl(raw);
}

// Stagger copy button
const sgCopyBtn = document.getElementById('copy-sg');
if (sgCopyBtn) copyBtn(sgCopyBtn, () => sgCss ? sgCss.textContent : '');

buildStagger();

// ─────────────────────────────────────────────────────────────
// TAB 4 — SCROLL-DRIVEN
// ─────────────────────────────────────────────────────────────
const scrollExTabs = document.querySelectorAll('.scroll-ex-tab');
const scrollCode   = document.getElementById('scroll-css');

const SCROLL_EXAMPLES = [
  {
    label: 'Progress bar',
    code: `/* Sticky progress bar tied to page scroll */
.progress-bar {
  position: sticky;
  top: 0;
  width: 100%;
  height: 3px;
  transform-origin: left;
  transform: scaleX(0);

  animation: grow-bar linear both;
  animation-timeline: scroll(root block);
}

@keyframes grow-bar {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}`
  },
  {
    label: 'Reveal on enter',
    code: `/* Fade-up as element enters the viewport */
.card {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-up linear both;

  /* view() = scroll position relative
     to THIS element's visibility  */
  animation-timeline: view();

  /* starts when element is 10% in view,
     completes at 60% in view            */
  animation-range: entry 10% entry 60%;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}`
  },
  {
    label: 'Parallax',
    code: `/* Parallax: element moves slower than scroll */
.parallax-layer {
  animation: parallax linear both;
  animation-timeline: scroll(root block);
}

@keyframes parallax {
  /* translateY moves at 40% of scroll speed */
  from { transform: translateY(0); }
  to   { transform: translateY(-40vh); }
}

/* Different rates create depth layers */
.layer-far   { --rate: -20vh; }
.layer-mid   { --rate: -40vh; }
.layer-close { --rate: -80vh; }

.parallax-layer {
  animation: parallax linear both;
  animation-timeline: scroll(root block);
}`
  },
];

scrollExTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    scrollExTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if (scrollCode) scrollCode.innerHTML = hl(SCROLL_EXAMPLES[i].code);
  });
});

// Init first tab
if (scrollCode && SCROLL_EXAMPLES[0]) {
  scrollCode.innerHTML = hl(SCROLL_EXAMPLES[0].code);
}

// Scroll copy button
const scrollCopyBtn = document.getElementById('copy-scroll');
if (scrollCopyBtn) copyBtn(scrollCopyBtn, () => scrollCode ? scrollCode.textContent : '');

