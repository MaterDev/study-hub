'use strict';

// ═══════════════════════════════════════
// Tab navigation
// ═══════════════════════════════════════
const tabs    = document.querySelectorAll('.tab');
const panes   = document.querySelectorAll('.tab-pane');
let activeTab = 'loop';

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    if (target === activeTab) return;
    activeTab = target;

    tabs.forEach(t  => t.classList.toggle('active', t.dataset.tab === target));
    panes.forEach(p => p.classList.toggle('active', p.id === `tab-${target}`));

    // Start canvas loop when switching to that tab
    if (target === 'canvas') initCanvas();
  });
});

// ═══════════════════════════════════════
// Easing functions — the core math
// All take t in [0,1], return transformed progress
// ═══════════════════════════════════════
const ease = {
  linear:    t => t,
  easeIn:    t => t * t,
  easeOut:   t => t * (2 - t),
  easeInOut: t => t < 0.5 ? 2*t*t : -1 + (4-2*t)*t,
  // Elastic: overshoots then snaps back — approximation of spring physics
  elastic:   t => {
    if (t === 0 || t === 1) return t;
    return Math.pow(2, -10*t) * Math.sin((t*10 - 0.75) * (2*Math.PI/3)) + 1;
  },
  // Bounce: multiple sub-bounces with diminishing amplitude
  bounce: t => {
    const n1 = 7.5625, d1 = 2.75;
    if (t < 1/d1)        return n1*t*t;
    else if (t < 2/d1)   return n1*(t-=1.5/d1)*t + 0.75;
    else if (t < 2.5/d1) return n1*(t-=2.25/d1)*t + 0.9375;
    else                  return n1*(t-=2.625/d1)*t + 0.984375;
  },
};

// lerp: linear interpolation between a and b by factor t
// This is the fundamental building block of smooth animation
const lerp = (a, b, t) => a + (b - a) * t;


// ═══════════════════════════════════════
// TAB 1: Loop Explorer
// ═══════════════════════════════════════
(function initLoopExplorer() {
  const statFrame   = document.getElementById('stat-frame');
  const statTs      = document.getElementById('stat-ts');
  const statDelta   = document.getElementById('stat-delta');
  const statFps     = document.getElementById('stat-fps');
  const statMin     = document.getElementById('stat-min');
  const statMax     = document.getElementById('stat-max');
  const sparklineEl = document.getElementById('sparkline');
  const spinner     = document.getElementById('loop-spinner');
  const pauseBtn    = document.getElementById('loop-pause-btn');

  const BUF = 60;      // rolling window size
  let rafId      = null;
  let paused     = false;
  let prevTime   = 0;
  let frameNum   = 0;
  let angle      = 0;
  const deltaBuf = []; // circular buffer of recent frame times
  let minDelta   = Infinity;
  let maxDelta   = 0;

  // Build 60 sparkline bars
  const bars = [];
  for (let i = 0; i < BUF; i++) {
    const bar = document.createElement('div');
    bar.className = 'spark-bar';
    bar.style.height = '4px';
    bar.style.background = 'var(--faint)';
    sparklineEl.appendChild(bar);
    bars.push(bar);
  }

  function tick(now) {
    // Delta time: clamp to 100ms to guard against tab-focus spikes
    const dt = prevTime ? Math.min(now - prevTime, 100) : 16.67;
    prevTime = now;
    frameNum++;

    // Track rolling deltas
    deltaBuf.push(dt);
    if (deltaBuf.length > BUF) deltaBuf.shift();
    if (dt > 1 && dt < 100) {
      minDelta = Math.min(minDelta, dt);
      maxDelta = Math.max(maxDelta, dt);
    }

    const avgDelta = deltaBuf.reduce((a, b) => a + b, 0) / deltaBuf.length;
    const fps = Math.round(1000 / avgDelta);

    // Rotate spinner using accumulated angle — delta time driven
    angle += dt * 0.36; // 360 deg / 1000ms

    // — DOM updates (transform only, no layout triggers) —
    spinner.style.transform = `rotate(${angle}deg)`;
    statFrame.textContent   = frameNum;
    statTs.textContent      = now.toFixed(1);
    statDelta.textContent   = dt.toFixed(2);
    statDelta.style.color   = dt <= 17 ? 'var(--green)' : dt <= 33 ? 'var(--yellow)' : 'var(--red)';
    statFps.textContent     = fps;
    statFps.style.color     = fps >= 55 ? 'var(--green)' : fps >= 28 ? 'var(--yellow)' : 'var(--red)';
    statMin.textContent     = minDelta === Infinity ? '—' : minDelta.toFixed(2);
    statMax.textContent     = maxDelta === 0        ? '—' : maxDelta.toFixed(2);

    // Sparkline: render frame times as colored bars
    // Max visible height = 32px; scale so 33ms fills full height
    deltaBuf.forEach((d, i) => {
      const h = Math.min((d / 33) * 32, 32);
      bars[i].style.height     = h + 'px';
      bars[i].style.background = d <= 17 ? 'var(--green)' : d <= 33 ? 'var(--yellow)' : 'var(--red)';
    });

    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId !== null) return;
    paused = false;
    prevTime = 0;
    pauseBtn.textContent = 'Pause';
    pauseBtn.classList.remove('paused');
    rafId = requestAnimationFrame(tick);
  }

  function pause() {
    // cancelAnimationFrame completely stops the loop — no CPU usage
    cancelAnimationFrame(rafId);
    rafId = null;
    paused = true;
    pauseBtn.textContent = 'Resume';
    pauseBtn.classList.add('paused');
  }

  pauseBtn.addEventListener('click', () => {
    paused ? start() : pause();
  });

  start();
})();


// ═══════════════════════════════════════
// TAB 2: Delta Time Demo
// ═══════════════════════════════════════
(function initDeltaDemo() {
  const ballA      = document.getElementById('ball-a');
  const ballB      = document.getElementById('ball-b');
  const trackA     = document.getElementById('track-a');
  const trackB     = document.getElementById('track-b');
  const statA      = document.getElementById('ball-a-stat');
  const statB      = document.getElementById('ball-b-stat');
  const stressBtn  = document.getElementById('stress-btn');
  const stressLbl  = document.getElementById('stress-label');
  const resetBtn   = document.getElementById('delta-reset-btn');
  const diDt       = document.getElementById('di-dt');
  const diASpeed   = document.getElementById('di-a-speed');
  const diBSpeed   = document.getElementById('di-b-speed');

  let xA = 0, xB = 0;
  let prevTime = 0;
  let stressOn = false;
  let frameCount = 0;

  // Track cumulative distance for speed measurement
  let lastXA = 0, lastXB = 0, lastSpeedTime = 0;
  let speedA = 0, speedB = 0;

  stressBtn.addEventListener('click', () => {
    stressOn = !stressOn;
    stressBtn.classList.toggle('stress-active', stressOn);
    stressLbl.textContent = stressOn
      ? 'STRESS ON — every other frame delayed ~50ms. Ball A speed is corrupted; Ball B stays at 120 px/s.'
      : 'Off — press to delay every other frame by 50ms';
  });

  resetBtn.addEventListener('click', () => {
    xA = 0; xB = 0; lastXA = 0; lastXB = 0;
    prevTime = 0; frameCount = 0;
    ballA.style.left = '0px';
    ballB.style.left = '0px';
  });

  function tick(now) {
    // Delta time — how many ms since last frame
    let dt = prevTime ? Math.min(now - prevTime, 200) : 16.67;
    prevTime = now;
    frameCount++;

    // Simulate frame stress: spin the CPU to force a late frame
    // This shows Ball A (frame-dependent) speeding up on normal frames
    // and slowing on stressed frames, while Ball B stays constant
    if (stressOn && frameCount % 2 === 0) {
      const t0 = performance.now();
      while (performance.now() - t0 < 50) { /* intentional busy-wait */ }
      // NOTE: do NOT manually add 50 to dt — the next frame's natural dt
      // already accounts for the delay. Adding it here double-counts.
    }

    const trackW_A = (trackA.clientWidth || 500) - 40;
    const trackW_B = (trackB.clientWidth || 500) - 40;

    // Ball A: fixed pixels per FRAME — frame-rate dependent (wrong)
    xA += 2;
    if (xA > trackW_A) xA = 0;

    // Ball B: pixels per SECOND scaled by dt — always the same speed (correct)
    // 120 px/s ÷ 1000 ms/s × dt ms = pixels this frame
    xB += 120 * (dt / 1000);
    if (xB > trackW_B) xB = 0;

    // Render — transform only, no layout triggers
    ballA.style.left = xA + 'px';
    ballB.style.left = xB + 'px';

    // Compute effective px/s over last 250ms
    if (now - lastSpeedTime > 250) {
      const elapsed = now - lastSpeedTime;
      // Handle wrapping: only count positive delta
      const dA = xA >= lastXA ? xA - lastXA : xA + trackW_A - lastXA;
      const dB = xB >= lastXB ? xB - lastXB : xB + trackW_B - lastXB;
      speedA = Math.round(dA / elapsed * 1000);
      speedB = Math.round(dB / elapsed * 1000);
      lastXA = xA; lastXB = xB; lastSpeedTime = now;
    }

    statA.textContent = `x: ${Math.round(xA)} · ${speedA} px/s`;
    statB.textContent = `x: ${Math.round(xB)} · ${speedB} px/s`;
    diDt.textContent      = dt.toFixed(2) + ' ms';
    diASpeed.textContent  = speedA + ' px/s';
    diBSpeed.textContent  = speedB + ' px/s';

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();


// ═══════════════════════════════════════
// TAB 3: Easing Lab
// ═══════════════════════════════════════
(function initEasingLab() {
  const easingDefs = [
    {
      name:    'linear',
      fn:      ease.linear,
      formula: 't => t',
      color:   'var(--dim)',
    },
    {
      name:    'easeIn (quadratic)',
      fn:      ease.easeIn,
      formula: 't => t * t',
      color:   'var(--red)',
    },
    {
      name:    'easeOut',
      fn:      ease.easeOut,
      formula: 't => t * (2 - t)',
      color:   'var(--green)',
    },
    {
      name:    'easeInOut',
      fn:      ease.easeInOut,
      formula: 't < 0.5 ? 2t² : -1+(4-2t)t',
      color:   'var(--accent)',
    },
    {
      name:    'elastic',
      fn:      ease.elastic,
      formula: '2^(-10t)·sin((10t-0.75)·2π/3)+1',
      color:   'var(--cyan)',
    },
    {
      name:    'bounce',
      fn:      ease.bounce,
      formula: 'piecewise: n1·t² + offset×',
      color:   'var(--yellow)',
    },
  ];

  const grid       = document.getElementById('easing-grid');
  const previewBtn = document.getElementById('preview-all-btn');
  const cStrip     = document.getElementById('comparison-strip');
  const cTrack     = document.getElementById('cs-track');

  const SIZE = 80; // SVG viewbox size

  // Build an SVG path by sampling the easing function at 61 points
  function buildPath(fn) {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const y = fn(t);
      // Map t to x [0, SIZE], map y to SVG y [SIZE, 0] (inverted — SVG y grows downward)
      pts.push(`${(t * SIZE).toFixed(1)},${(SIZE - Math.max(-0.2, Math.min(1.2, y)) * SIZE).toFixed(1)}`);
    }
    return 'M ' + pts.join(' L ');
  }

  // Animate a ball along a track using the given easing function
  function animateBall(ballEl, fn, duration = 900) {
    let startTime = null;
    function step(now) {
      if (!startTime) startTime = now;
      const t   = Math.min((now - startTime) / duration, 1);
      const et  = fn(t);
      // Allow overshoot so elastic/bounce are visually accurate
      ballEl.style.left = `calc(${et * 100}% - ${et * 12}px)`;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Build comparison strip rows
  function buildComparisonStrip() {
    cTrack.innerHTML = '';
    easingDefs.forEach((e, i) => {
      const row = document.createElement('div');
      row.className = 'cs-row';
      row.innerHTML = `
        <div class="cs-row-label">${e.name}</div>
        <div class="cs-row-track" id="cs-row-track-${i}">
          <div class="cs-row-ball" id="cs-ball-${i}" style="background:${e.color};box-shadow:0 0 5px ${e.color}"></div>
        </div>
      `;
      cTrack.appendChild(row);
    });
  }

  // Build easing cards
  easingDefs.forEach((e, i) => {
    const card = document.createElement('div');
    card.className = 'easing-card';

    const pathD = buildPath(e.fn);

    card.innerHTML = `
      <div class="ec-name" style="color:${e.color}">${e.name}</div>
      <svg class="ec-svg" viewBox="0 ${-SIZE * 0.2} ${SIZE} ${SIZE * 1.4}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <!-- Diagonal reference line (linear) -->
        <line x1="0" y1="${SIZE}" x2="${SIZE}" y2="0" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
        <!-- Horizontal bounds -->
        <line x1="0" y1="0" x2="${SIZE}" y2="0" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
        <line x1="0" y1="${SIZE}" x2="${SIZE}" y2="${SIZE}" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
        <!-- Easing curve -->
        <path d="${pathD}" stroke="${e.color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="ec-formula">${e.formula}</div>
      <div class="ec-ball-track">
        <div class="ec-ball" id="ec-ball-${i}" style="background:${e.color};box-shadow:0 0 6px ${e.color}"></div>
      </div>
    `;

    card.addEventListener('click', () => {
      document.querySelectorAll('.easing-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      animateBall(document.getElementById(`ec-ball-${i}`), e.fn);
    });

    grid.appendChild(card);
  });

  // Preview all button: animate all cards + show comparison strip
  previewBtn.addEventListener('click', () => {
    buildComparisonStrip();
    cStrip.style.display = 'block';

    easingDefs.forEach((e, i) => {
      animateBall(document.getElementById(`ec-ball-${i}`), e.fn);
      const csBall = document.getElementById(`cs-ball-${i}`);
      if (csBall) animateBall(csBall, e.fn, 1200);
    });
  });
})();


// ═══════════════════════════════════════
// TAB 4: Canvas Demo — Orbital Gravity Well
// ═══════════════════════════════════════
let canvasInitialized = false;

function initCanvas() {
  if (canvasInitialized) return;
  canvasInitialized = true;

  const canvas    = document.getElementById('main-canvas');
  const wrap      = document.getElementById('canvas-wrap');
  const ctx       = canvas.getContext('2d');
  const hudFps    = document.getElementById('hud-fps');
  const hudDt     = document.getElementById('hud-dt');
  const hudDots   = document.getElementById('hud-dots');
  const pauseBtn  = document.getElementById('canvas-pause-btn');
  const addBtn    = document.getElementById('canvas-add-btn');
  const clearBtn  = document.getElementById('canvas-clear-btn');
  const attractSl = document.getElementById('attract-slider');
  const attractVl = document.getElementById('attract-val');
  const trailSl   = document.getElementById('trail-slider');
  const trailVl   = document.getElementById('trail-val');

  // Device pixel ratio: crucial for sharp rendering on retina displays
  const dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.scale(dpr, dpr);
  }
  resizeCanvas();
  window.addEventListener('resize', () => { resizeCanvas(); });

  // Dot class — each dot has position, velocity, color
  function makeDot() {
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    const angle = Math.random() * Math.PI * 2;
    const dist  = 60 + Math.random() * 160;
    return {
      x:  W/2 + Math.cos(angle) * dist,
      y:  H/2 + Math.sin(angle) * dist,
      vx: (Math.random() - 0.5) * 60,  // px/s
      vy: (Math.random() - 0.5) * 60,
      hue: Math.random() * 360,
    };
  }

  let dots = [];
  // Start with 30 dots
  for (let i = 0; i < 30; i++) dots.push(makeDot());

  // Mouse target — attraction point
  let mouseX = canvas.width / dpr / 2;
  let mouseY = canvas.height / dpr / 2;

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    mouseX = e.touches[0].clientX - rect.left;
    mouseY = e.touches[0].clientY - rect.top;
  }, { passive: false });

  // State
  let paused    = false;
  let rafId     = null;
  let prevTime  = 0;
  const fpsBuffer = [];

  function update(dt) {
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    // dt is in ms — convert to seconds for physics
    const dts = dt / 1000;
    const attractStrength = parseFloat(attractSl.value);

    dots.forEach(dot => {
      // Direction vector toward mouse
      const dx = mouseX - dot.x;
      const dy = mouseY - dot.y;
      const dist = Math.sqrt(dx*dx + dy*dy) + 0.1; // avoid div-by-zero

      // Attraction force — stronger when closer (gravity-like, but clamped)
      // The easeOut function softens attraction at very close range
      const force = attractStrength * ease.easeOut(Math.min(dist / 300, 1)) * 800;

      // Apply force as acceleration (F = ma, m=1 so a=F)
      // Scale by dt so physics is frame-rate independent
      dot.vx += (dx / dist) * force * dts;
      dot.vy += (dy / dist) * force * dts;

      // Damping — simulate drag / friction
      dot.vx *= 0.985;
      dot.vy *= 0.985;

      // Cap speed at 400 px/s
      const speed = Math.sqrt(dot.vx*dot.vx + dot.vy*dot.vy);
      if (speed > 400) {
        dot.vx = (dot.vx/speed) * 400;
        dot.vy = (dot.vy/speed) * 400;
      }

      // Update position — delta time driven
      dot.x += dot.vx * dts;
      dot.y += dot.vy * dts;

      // Bounce off edges
      if (dot.x < 5)   { dot.x = 5;   dot.vx *= -0.7; }
      if (dot.x > W-5) { dot.x = W-5; dot.vx *= -0.7; }
      if (dot.y < 5)   { dot.y = 5;   dot.vy *= -0.7; }
      if (dot.y > H-5) { dot.y = H-5; dot.vy *= -0.7; }
    });
  }

  function render() {
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    const trailAlpha = parseFloat(trailSl.value);

    // Trail effect: semi-transparent black rect fades previous frame
    // Lower alpha = longer, more opaque trails
    ctx.fillStyle = `rgba(0, 0, 0, ${trailAlpha})`;
    ctx.fillRect(0, 0, W, H);

    // Draw mouse target
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 12, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw each dot
    dots.forEach(dot => {
      const speed = Math.sqrt(dot.vx*dot.vx + dot.vy*dot.vy);
      // Map speed to color: slow = blue/purple, fast = orange/red
      const speedNorm = Math.min(speed / 400, 1);
      const hue = lerp(220, 20, speedNorm); // 220=blue → 20=orange
      const sat = lerp(60, 100, speedNorm);
      const lit = lerp(50, 65, speedNorm);
      const size = lerp(2.5, 5, speedNorm);

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${hue}, ${sat}%, ${lit}%)`;
      ctx.fill();
    });
  }

  function renderHUD(fps, dt) {
    // HUD is drawn as DOM overlay (positioned absolute), not on canvas
    hudFps.textContent  = fps + ' fps';
    hudDt.textContent   = dt.toFixed(2) + ' ms';
    hudDots.textContent = dots.length + ' dots';
    hudFps.style.color  = fps >= 55 ? 'rgba(74,222,128,0.7)' : fps >= 28 ? 'rgba(250,204,21,0.7)' : 'rgba(248,113,113,0.7)';
  }

  function tick(now) {
    const dt = prevTime ? Math.min(now - prevTime, 100) : 16.67;
    prevTime = now;

    fpsBuffer.push(dt);
    if (fpsBuffer.length > 60) fpsBuffer.shift();
    const avgDt  = fpsBuffer.reduce((a,b) => a+b, 0) / fpsBuffer.length;
    const fps    = Math.round(1000 / avgDt);

    update(dt);
    render();
    renderHUD(fps, dt);

    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId) return;
    prevTime = 0;
    pauseBtn.textContent = 'Pause';
    pauseBtn.classList.remove('paused');
    rafId = requestAnimationFrame(tick);
  }

  function pause() {
    cancelAnimationFrame(rafId);
    rafId = null;
    pauseBtn.textContent = 'Resume';
    pauseBtn.classList.add('paused');
  }

  pauseBtn.addEventListener('click', () => { rafId ? pause() : start(); });
  addBtn.addEventListener('click',   () => { for (let i=0;i<10;i++) dots.push(makeDot()); });
  clearBtn.addEventListener('click', () => { dots = []; });

  attractSl.addEventListener('input', () => { attractVl.textContent = attractSl.value; });
  trailSl.addEventListener('input',   () => { trailVl.textContent   = trailSl.value;   });

  start();
}
