// Generates assets/banner.svg — pixel-art README banner showing the hub's two skins:
// a bright sky-blue "light" skin (left) and a console-era "dark" skin (right).
// Run: node scripts/make-banner.mjs
import { writeFileSync } from "node:fs";

const W = 1280, H = 360, MID = 640, GY = 292;
const G = {
  S: [".####", "#....", "#....", ".###.", "....#", "....#", "####."],
  T: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
  U: ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  D: ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
  Y: ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
  H: ["#...#", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  B: ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."],
  R: ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
  E: ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
  A: [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  L: ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
  F: ["#####", "#....", "#....", "####.", "#....", "#....", "#...."],
  I: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "#####"],
  N: ["#...#", "##..#", "##..#", "#.#.#", "#..##", "#..##", "#...#"],
  C: [".####", "#....", "#....", "#....", "#....", "#....", ".####"],
  G: [".####", "#....", "#....", "#..##", "#...#", "#...#", ".###."],
  1: [".##..", "###..", ".##..", ".##..", ".##..", ".##..", "######"],
  6: [".###.", "##...", "##...", "####.", "##.##", "##.##", ".###."],
  "-": [".....", ".....", ".....", "#####", ".....", ".....", "....."],
};
const rect = (o, x, y, w, h, f, extra = "") => o.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" ${extra}/>`);
const sprite = (o, rows, pal, ox, oy, px) => rows.forEach((r, y) => [...r].forEach((c, x) => { if (pal[c]) rect(o, ox + x * px, oy + y * px, px, px, pal[c]); }));

function text(o, str, y, p, color, outline) {
  const chars = [...str];
  const w = chars.reduce((n, ch) => n + (ch === " " ? 4 * p : 6 * p), 0) - p;
  let x = Math.round((W - w) / 2);
  chars.forEach(ch => {
    if (ch === " ") { x += 4 * p; return; }
    G[ch].forEach((row, yy) => [...row].forEach((c, xx) => { if (c === "#") {
      if (outline) rect(o, x + xx * p + 2, y + yy * p + 2, p, p, outline);
      rect(o, x + xx * p, y + yy * p, p, p, color);
    } }));
    x += 6 * p;
  });
}

function title(o, fills, outline, shadow, hi) {
  const word = [..."STUDY HUB"], P = 12, GW = 5 * P, GAP = P, SPACE = 3 * P;
  const total = word.reduce((n, ch) => n + (ch === " " ? SPACE : GW + GAP), 0) - GAP;
  let cx = Math.round((W - total) / 2); const ty = 78, cells = [];
  word.forEach((ch, i) => {
    if (ch === " ") { cx += SPACE; return; }
    G[ch].forEach((row, y) => [...row].forEach((c, x) => { if (c === "#") cells.push({ x: cx + x * P, y: ty + y * P, f: fills[i] }); }));
    cx += GW + GAP;
  });
  const has = new Set(cells.map(c => c.x + "," + c.y));
  cells.forEach(c => rect(o, c.x + 5, c.y + 5, P + 6, P + 6, shadow));
  cells.forEach(c => rect(o, c.x - 3, c.y - 3, P + 6, P + 6, outline));
  cells.forEach(c => rect(o, c.x, c.y, P, P, c.f));
  cells.forEach(c => { if (!has.has(c.x + "," + (c.y - P))) rect(o, c.x, c.y, P, 3, "#ffffff", `opacity="${hi}"`); });
}

// ── light skin ──
function day() {
  const o = [], OUT = "#56628a";
  ["#a9d3f2", "#b6dbf4", "#c3e1f6", "#cfe7f8", "#dcedfa", "#e6f2fb"].forEach((c, i) => rect(o, 0, i * 48, W, 48, c));
  const cloud = ["....#####.......", "..#########.....", ".###########.##.", "################", "################"];
  [[90, 40, 7], [560, 20, 5], [40, 190, 5], [1150, 200, 5], [980, 60, 8]].forEach(([x, y, px]) => sprite(o, cloud, { "#": "#fff" }, x, y, px));
  const coin = ["..oooo..", ".ogggyo.", "ogwggyyo", "ogwggyyo", "ogwggyyo", "ogwggyyo", "ogggyyyo", ".ooooyo.", "..oooo.."];
  const cp = { o: OUT, g: "#f6dc8a", y: "#c9a24a", w: "#fff" };
  [[210, 120, 6], [262, 52, 4]].forEach(([x, y, px]) => sprite(o, coin, cp, x, y, px));
  for (let x = 0; x < W; x += 32) {
    rect(o, x, GY, 32, 16, "#6fae6a"); rect(o, x, GY, 32, 4, "#8ccb82"); rect(o, x, GY + 16, 32, H - GY - 16, "#a9784f");
    rect(o, x + 6, GY + 28, 6, 6, "#8c6140"); rect(o, x + 20, GY + 40, 6, 6, "#8c6140");
    rect(o, x, GY + 16, 32, 2, OUT, 'opacity=".5"'); rect(o, x + 30, GY, 2, H - GY, OUT, 'opacity=".25"');
  }
  rect(o, 0, GY - 2, W, 2, OUT);
  const bx = 150, by = GY - 48;
  rect(o, bx, by, 48, 48, OUT); rect(o, bx + 3, by + 3, 42, 42, "#c9a24a"); rect(o, bx + 3, by + 3, 42, 4, "#f6dc8a");
  G.I; ["?"].length;
  const q = [".###.", "#...#", "....#", "..##.", "..#..", ".....", "..#.."];
  q.forEach((r, yy) => [...r].forEach((c, xx) => { if (c === "#") { rect(o, bx + 14 + xx * 5, by + 8 + yy * 5, 5, 5, "#fff"); } }));
  sprite(o, ["..oooooo..", ".occcccclo", "occwkcwkco", "occwkcwkco", "occcccccco", "occccooccco", ".oooo..oooo"],
    { o: OUT, c: "#4a6fa8", l: "#8fb0e0", w: "#fff", k: "#2a3150" }, 380, GY - 56, 8);
  return o;
}

// ── dark skin: 16-bit console-era look — black field, bold cobalt, checkerboard floor, badge plate ──
function dark() {
  const o = [], OUT = "#000000", BLUE = "#1f6bff", DEEP = "#0a3fb0", RED = "#e4002b", YEL = "#ffd200";
  rect(o, 0, 0, W, H, "#05060d");
  for (let i = 0; i < 9; i++) {
    const x0 = MID - 40 + i * 90, w = 22 + (i % 3) * 10;
    for (let y = 0; y < GY; y += 8) rect(o, x0 + Math.round((GY - y) * 0.55), y, w, 8, i % 2 ? DEEP : "#0c1b5c", 'opacity=".85"');
  }
  [["#0a3fb0", .18], ["#1f6bff", .14], ["#5aa0ff", .12]].forEach(([c, op], i) => rect(o, 0, GY - 24 - i * 8, W, 8, c, `opacity="${op}"`));
  for (let y = GY, r = 0; y < H; y += 16, r++) for (let x = -(r % 2) * 16, c = 0; x < W; x += 16, c++)
    rect(o, x, y, 16, 16, (c + r) % 2 ? "#0a3fb0" : "#06133a");
  rect(o, 0, GY - 2, W, 4, BLUE); rect(o, 0, GY + 2, W, 2, "#bcd8ff");
  const ring = ["..oooo..", ".oyyyyo.", "oyyooyyo", "oyo..oyo", "oyo..oyo", "oyyooyyo", ".oyyyyo.", "..oooo.."];
  [[760, 118, 6], [1000, 146, 5], [1180, 96, 4]].forEach(([x, y, px]) => sprite(o, ring, { o: OUT, y: YEL }, x, y, px));
  const bx = 1090, by = GY - 76, tp = 5, bw = 6 * 6 * tp - tp;
  rect(o, bx - 8, by - 8, bw + 16, 7 * tp + 16, "#ffffff"); rect(o, bx - 5, by - 5, bw + 10, 7 * tp + 10, RED);
  let tx = bx; [..."16-BIT"].forEach(ch => { G[ch].forEach((row, yy) => [...row].forEach((c, xx) => { if (c === "#") rect(o, tx + xx * tp, by + yy * tp, tp, tp, "#fff"); })); tx += 6 * tp; });
  sprite(o, ["..oooooo..", ".occcccclo", "occwkcwkco", "occwkcwkco", "occcccccco", "occccooccco", ".oooo..oooo"],
    { o: OUT, c: BLUE, l: "#8fb8ff", w: "#fff", k: "#000" }, 900, GY - 56, 8);
  return o;
}

// stepped seam so the split reads as pixels, not a hard vertical line
const STEP = 24, seam = [];
for (let y = 0, i = 0; y < H; y += STEP, i++) { const x = MID + (i % 2 ? 12 : -12); seam.push([x, y], [x, Math.min(y + STEP, H)]); }
const pts = a => a.map(p => p.join(",")).join(" ");
const left = pts([[0, 0], ...seam, [0, H]]), right = pts([...seam, [W, H], [W, 0]]);
const edge = []; seam.forEach(([x, y], i) => { if (i % 2 === 0) rect(edge, x - 2, y, 4, STEP, "#ffffff", 'opacity=".9"'); });
// connectors between steps
for (let y = STEP, i = 1; y < H; y += STEP, i++) { const a = MID + ((i - 1) % 2 ? 12 : -12), b = MID + (i % 2 ? 12 : -12); rect(edge, Math.min(a, b) - 2, y - 2, Math.abs(a - b) + 4, 4, "#ffffff", 'opacity=".9"'); }

// lettering is drawn once, across the seam, so it reads the same on both skins
const top = [];
title(top, ["#e0566a", "#f0b429", "#3fb27f", "#4f8df0", "#9a7bff", null, "#e0566a", "#3fb27f", "#4f8df0"], "#141a45", "rgba(5,8,30,.45)", ".45");
const SUB = "SELF-DIRECTED LEARNING", subW = [...SUB].reduce((n, ch) => n + (ch === " " ? 16 : 24), 0) - 4, subX = Math.round((W - subW) / 2);
rect(top, subX - 22, 178, subW + 44, 52, "#141a45"); rect(top, subX - 18, 182, subW + 36, 44, "#f4f8ff");
text(top, SUB, 192, 4, "#141a45", null);

writeFileSync(new URL("../assets/banner.svg", import.meta.url),
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" shape-rendering="crispEdges" role="img" aria-label="Study Hub — light skin on the left, dark skin on the right">
<defs><clipPath id="l"><polygon points="${left}"/></clipPath><clipPath id="r"><polygon points="${right}"/></clipPath></defs>
<g clip-path="url(#l)">
${day().join("\n")}
</g>
<g clip-path="url(#r)">
${dark().join("\n")}
</g>
${edge.join("\n")}
${top.join("\n")}
</svg>
`);
console.log("wrote assets/banner.svg");
