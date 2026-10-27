// ─────────────────────────────────────────────────────────
//  Lesson 01 — Browser Rendering Pipeline
//  Interactive demos for: comparison, thrashing, layers
// ─────────────────────────────────────────────────────────

// ── Tab switching ─────────────────────────────────────────
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
  });
});


// ═══════════════════════════════════════════════════════════
//  TAB 1 — Side-by-side comparison
// ═══════════════════════════════════════════════════════════
const boxBad  = document.getElementById('box-bad');
const boxGood = document.getElementById('box-good');
let compareRunning = false;
let compareRaf = null;

// Animate using the expensive 'left' property
function runExpensive(startTime, timestamp) {
  const elapsed = timestamp - startTime;
  const duration = 1000;
  const progress = Math.min(elapsed / duration, 1);

  // Ease in-out
  const eased = progress < 0.5
    ? 2 * progress * progress
    : -1 + (4 - 2 * progress) * progress;

  // Using left — triggers layout every frame
  const maxMove = boxBad.parentElement.clientWidth - boxBad.offsetWidth - 24;
  boxBad.style.left = 12 + eased * maxMove + 'px';

  if (progress < 1) {
    compareRaf = requestAnimationFrame(ts => runExpensive(startTime, ts));
  }
}

// Animate using transform — compositor only
function runPerformant(startTime, timestamp) {
  const elapsed = timestamp - startTime;
  const duration = 1000;
  const progress = Math.min(elapsed / duration, 1);

  const eased = progress < 0.5
    ? 2 * progress * progress
    : -1 + (4 - 2 * progress) * progress;

  const maxMove = boxGood.parentElement.clientWidth - boxGood.clientWidth - 24;
  // Using transform — compositor only, no layout triggered
  boxGood.style.transform = `translateY(-50%) translateX(${eased * maxMove}px)`;

  if (progress < 1) {
    requestAnimationFrame(ts => runPerformant(startTime, ts));
  }
}

document.getElementById('btn-animate').addEventListener('click', () => {
  if (compareRunning) return;
  compareRunning = true;

  const start = performance.now();
  requestAnimationFrame(ts => {
    runExpensive(ts, ts);
    runPerformant(ts, ts);
  });

  setTimeout(() => { compareRunning = false; }, 1200);
});

document.getElementById('btn-reset').addEventListener('click', () => {
  compareRunning = false;
  cancelAnimationFrame(compareRaf);
  boxBad.style.left = '12px';
  boxGood.style.transform = 'translateY(-50%) translateX(0px)';
});


// ═══════════════════════════════════════════════════════════
//  TAB 2 — Layout thrashing demo
// ═══════════════════════════════════════════════════════════
const thrashGrid      = document.getElementById('thrash-grid');
const fpsValueEl      = document.getElementById('fps-value');
const frameTimeEl     = document.getElementById('frame-time-value');
const layoutsEl       = document.getElementById('layouts-value');
const modeEl          = document.getElementById('mode-value');
const sparklineCanvas = document.getElementById('sparkline');
const ctx2d           = sparklineCanvas.getContext('2d');

const BOX_COUNT = 50;
let thrashRaf     = null;
let thrashRunning = false;
let thrashMode    = 'idle'; // 'thrashing' | 'optimised' | 'idle'

// Rolling frame time history for sparkline
const SPARK_HISTORY = 80;
const frameTimes = new Array(SPARK_HISTORY).fill(null);
let lastFrameTs = 0;
let fpsSmooth = 60;

// Build boxes with random initial sizes & hues
function buildThrashBoxes() {
  thrashGrid.innerHTML = '';
  for (let i = 0; i < BOX_COUNT; i++) {
    const box = document.createElement('div');
    box.className = 'thrash-box';
    const hue = 200 + (i / BOX_COUNT) * 160;
    box.style.cssText = `
      width: 100%;
      height: 36px;
      background: hsl(${hue}, 70%, 45%);
      border-radius: 4px;
    `;
    thrashGrid.appendChild(box);
  }
}
buildThrashBoxes();

// ── Sparkline renderer ──────────────────────────────────────
function drawSparkline() {
  const W = sparklineCanvas.offsetWidth * devicePixelRatio;
  const H = sparklineCanvas.offsetHeight * devicePixelRatio;
  sparklineCanvas.width  = W;
  sparklineCanvas.height = H;

  ctx2d.clearRect(0, 0, W, H);

  const maxMs  = 50; // top of chart = 50ms
  const line16 = (16 / maxMs) * H; // y position for 16ms
  const line33 = (33 / maxMs) * H; // y position for 33ms

  // 60fps guide line
  ctx2d.strokeStyle = 'rgba(62,207,142,0.2)';
  ctx2d.lineWidth = 1;
  ctx2d.setLineDash([4, 4]);
  ctx2d.beginPath();
  ctx2d.moveTo(0, H - line16);
  ctx2d.lineTo(W, H - line16);
  ctx2d.stroke();

  // 30fps guide line
  ctx2d.strokeStyle = 'rgba(245,200,66,0.2)';
  ctx2d.beginPath();
  ctx2d.moveTo(0, H - line33);
  ctx2d.lineTo(W, H - line33);
  ctx2d.stroke();
  ctx2d.setLineDash([]);

  // Frame time bars
  const barW = W / SPARK_HISTORY;
  for (let i = 0; i < SPARK_HISTORY; i++) {
    const ms = frameTimes[i];
    if (ms === null) continue;
    const barH = Math.min((ms / maxMs) * H, H);
    const color = ms <= 16 ? '#3a7a52' : ms <= 33 ? '#b8902e' : '#b35c5c';
    ctx2d.fillStyle = color;
    ctx2d.fillRect(i * barW, H - barH, barW - 1, barH);
  }
}

// ── Per-frame stats update ──────────────────────────────────
function updateStats(frameMs, layoutsPerFrame) {
  // Push frame time into rolling history
  frameTimes.shift();
  frameTimes.push(frameMs);

  // Smooth FPS
  const rawFps = 1000 / frameMs;
  fpsSmooth = fpsSmooth * 0.85 + rawFps * 0.15;
  const fps = Math.min(Math.round(fpsSmooth), 999);

  const color = fps >= 55 ? 'var(--green)' : fps >= 28 ? 'var(--yellow)' : 'var(--red)';
  fpsValueEl.textContent      = fps;
  fpsValueEl.style.color      = color;
  frameTimeEl.textContent     = frameMs.toFixed(1) + 'ms';
  frameTimeEl.style.color     = frameMs <= 16 ? 'var(--green)' : frameMs <= 33 ? 'var(--yellow)' : 'var(--red)';
  layoutsEl.textContent       = layoutsPerFrame;
  layoutsEl.style.color       = layoutsPerFrame <= 1 ? 'var(--green)' : 'var(--red)';

  drawSparkline();
}

// ── Animation loops ─────────────────────────────────────────
let waveOffset = 0;

// THRASHING VERSION — interleaved reads and writes
// Each box: read offsetWidth + offsetHeight → write → next box reads again
// = 2 layout recalculations per box = 100 per frame with 50 boxes
function animateThrashing(ts) {
  if (!thrashRunning) return;
  const frameMs = lastFrameTs ? ts - lastFrameTs : 16;
  lastFrameTs = ts;
  waveOffset += 0.04;

  const boxes = thrashGrid.children;
  let layoutCount = 0;

  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const wave = Math.sin(waveOffset + i * 0.3) * 0.5 + 0.5; // 0–1

    // READ — forces layout flush (browser can't batch, write invalidated it)
    const currentH = box.offsetHeight; layoutCount++;
    // WRITE — invalidates layout
    box.style.height = (24 + wave * 36) + 'px';

    // READ again — another forced layout flush
    const currentW = box.offsetWidth; layoutCount++;
    // WRITE again
    box.style.opacity = 0.3 + wave * 0.7;
    box.style.borderRadius = (currentW > 0 ? Math.round(wave * 12) : 4) + 'px';
  }

  updateStats(frameMs, layoutCount);
  thrashRaf = requestAnimationFrame(animateThrashing);
}

// OPTIMISED VERSION — all reads batched, then all writes
// = exactly 1 layout recalculation per frame, regardless of box count
function animateOptimised(ts) {
  if (!thrashRunning) return;
  const frameMs = lastFrameTs ? ts - lastFrameTs : 16;
  lastFrameTs = ts;
  waveOffset += 0.04;

  const boxes = Array.from(thrashGrid.children);

  // ── Phase 1: batch ALL reads (1 layout recalc total) ──
  const measurements = boxes.map(box => ({
    h: box.offsetHeight, // READ
    w: box.offsetWidth,  // READ (same forced layout, no extra cost)
  }));

  // ── Phase 2: batch ALL writes (no reads follow = no extra layouts) ──
  boxes.forEach((box, i) => {
    const wave = Math.sin(waveOffset + i * 0.3) * 0.5 + 0.5;
    box.style.height       = (24 + wave * 36) + 'px';
    box.style.opacity      = 0.3 + wave * 0.7;
    box.style.borderRadius = Math.round(wave * 12) + 'px';
  });

  updateStats(frameMs, 1);
  thrashRaf = requestAnimationFrame(animateOptimised);
}

// ── Stop / reset ────────────────────────────────────────────
function stopThrash() {
  thrashRunning = false;
  cancelAnimationFrame(thrashRaf);
  lastFrameTs = 0;
  fpsSmooth   = 60;
  thrashMode  = 'idle';
  modeEl.textContent   = 'idle';
  modeEl.style.color   = 'var(--text-muted)';
  fpsValueEl.textContent   = '—';
  fpsValueEl.style.color   = 'var(--text)';
  frameTimeEl.textContent  = '—';
  frameTimeEl.style.color  = 'var(--text)';
  layoutsEl.textContent    = '—';
  layoutsEl.style.color    = 'var(--text)';
  frameTimes.fill(null);
  drawSparkline();
  buildThrashBoxes();
  waveOffset = 0;
}

document.getElementById('btn-thrash').addEventListener('click', () => {
  stopThrash();
  thrashRunning = true;
  thrashMode = 'thrashing';
  modeEl.textContent = '❌ thrashing';
  modeEl.style.color = 'var(--red)';
  buildThrashBoxes();
  thrashRaf = requestAnimationFrame(animateThrashing);
});

document.getElementById('btn-no-thrash').addEventListener('click', () => {
  stopThrash();
  thrashRunning = true;
  thrashMode = 'optimised';
  modeEl.textContent = '✅ optimised';
  modeEl.style.color = 'var(--green)';
  buildThrashBoxes();
  thrashRaf = requestAnimationFrame(animateOptimised);
});

document.getElementById('btn-stop-thrash').addEventListener('click', stopThrash);

// Initial sparkline draw
drawSparkline();
window.addEventListener('resize', drawSparkline);


// ═══════════════════════════════════════════════════════════
//  TAB 3 — Layer promotion
// ═══════════════════════════════════════════════════════════
const layerCardEls = document.querySelectorAll('.layer-card');
const layerCountEl = document.getElementById('layer-count');
const memoryBarEl  = document.getElementById('memory-bar');
const memoryLabelEl = document.getElementById('memory-label');

// Track which cards are "active" (promoted)
// Cards B, C, D start pre-promoted to show the concept immediately
const promotionState = [false, true, true, true];

// Apply CSS for each promotion mode
const promotionModes = {
  'none':        el => { el.style.willChange = 'auto'; el.style.transform = ''; el.style.animation = ''; },
  'will-change': el => { el.style.willChange = 'transform'; el.style.transform = ''; el.style.animation = ''; },
  'animation':   el => { el.style.willChange = 'auto'; el.style.transform = ''; el.style.animation = 'lc-pulse 1.4s ease-in-out infinite'; },
  'opacity':     el => { el.style.willChange = 'opacity'; el.style.transform = ''; el.style.animation = ''; },
};

// Running animation on all four boxes
let layerRaf = null;
let layerOffset = 0;

function animateLayerBoxes(ts) {
  layerOffset = ts * 0.001;
  layerCardEls.forEach((card, i) => {
    const box = card.querySelector('.layer-card-box');
    const wave = Math.sin(layerOffset + i * 1.2) * 18;
    // Only animate transform — compositor-safe regardless of promotion state
    // The point is: promoted elements do this more efficiently
    box.style.transform = promotionState[i]
      ? `translateY(${wave}px)`      // promoted: GPU handles this
      : `translateY(${wave}px)`;     // not promoted: same visually, different pipeline cost
  });
  layerRaf = requestAnimationFrame(animateLayerBoxes);
}

function updateLayerStats() {
  // Count active layers: 1 (root) + number of promoted cards
  const promotedCount = promotionState.filter(Boolean).length;
  const totalLayers = 1 + promotedCount;

  layerCountEl.textContent = totalLayers;
  layerCountEl.style.color = totalLayers <= 2 ? 'var(--green)'
    : totalLayers <= 3 ? 'var(--yellow)' : 'var(--red)';

  // Memory bar: roughly 10% per layer promoted
  const memPct = 10 + promotedCount * 25;
  memoryBarEl.style.width = memPct + '%';
  memoryBarEl.style.background = promotedCount === 0 ? 'var(--green)'
    : promotedCount <= 2 ? 'var(--yellow)' : 'var(--red)';

  const memLabel = promotedCount === 0 ? 'minimal'
    : promotedCount === 1 ? 'low'
    : promotedCount === 2 ? 'moderate'
    : 'high — be careful';
  memoryLabelEl.textContent = memLabel;
  memoryLabelEl.style.color = promotedCount <= 1 ? 'var(--green)'
    : promotedCount === 2 ? 'var(--yellow)' : 'var(--red)';
}

function applyCardState(index) {
  const card = layerCardEls[index];
  const mode = card.dataset.mode;
  const box  = card.querySelector('.layer-card-box');
  const isActive = promotionState[index];

  card.classList.toggle('active', isActive);

  if (isActive) {
    promotionModes[mode](box);
  } else {
    // Demote: clear all promotion
    box.style.willChange = 'auto';
    box.style.transform  = '';
    box.style.animation  = '';
  }

  updateLayerStats();
}

// Initialise — start B, C, D as promoted
layerCardEls.forEach((card, i) => {
  applyCardState(i);

  card.addEventListener('click', () => {
    // Cards with mode 'none' can't really be "promoted" — skip toggle
    if (card.dataset.mode === 'none') return;
    promotionState[i] = !promotionState[i];
    applyCardState(i);
  });
});

// Start animation when tab is visible
document.querySelector('[data-tab="layers"]').addEventListener('click', () => {
  if (!layerRaf) layerRaf = requestAnimationFrame(animateLayerBoxes);
});

// Also start if tab is already active on load
if (document.getElementById('tab-layers').classList.contains('active')) {
  layerRaf = requestAnimationFrame(animateLayerBoxes);
}

updateLayerStats();
