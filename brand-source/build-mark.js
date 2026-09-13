/**
 * Generates the 360devz mark as exact SVG.
 *
 *   node scripts/build-mark.js
 *
 * Three equal arcs separated by three equal gaps, summing to exactly 360°.
 * Butt caps on a circular stroke give terminals cut along radii, which is
 * what makes the gaps read as clean slots rather than shaved ends.
 *
 * Writes into public/brand/.
 */
const fs = require("fs");
const path = require("path");

const INK = "#0D0D0D";
const GOLD = "#C9962B";

const OUT = path.join(__dirname, "..", "public", "brand");

/** Point on a circle. 0° is 12 o'clock; angles increase clockwise. */
function point(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

const n = (v) => Number(v.toFixed(3));

/** A stroked arc from `from`° to `to`° on the centreline radius. */
function arc(cx, cy, r, from, to) {
  const [x1, y1] = point(cx, cy, r, from);
  const [x2, y2] = point(cx, cy, r, to);
  const large = to - from > 180 ? 1 : 0;
  return `M ${n(x1)} ${n(y1)} A ${n(r)} ${n(r)} 0 ${large} 1 ${n(x2)} ${n(y2)}`;
}

/**
 * @param size        viewBox edge
 * @param stroke      stroke width
 * @param gapDeg      angular width of each of the three gaps
 * @param mono        render every arc in currentColor
 */
function buildMark({ size = 100, stroke = 14, gapDeg = 16, mono = false }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - stroke / 2 - 2; // 2 units of breathing room

  const arcDeg = (360 - gapDeg * 3) / 3;
  // Gaps centred at 12, 4 and 8 o'clock; arcs fill what is left.
  const half = gapDeg / 2;
  const segments = [
    { from: half, to: half + arcDeg, gold: true }, // upper right
    { from: half + arcDeg + gapDeg, to: half + arcDeg * 2 + gapDeg }, // lower
    { from: half + arcDeg * 2 + gapDeg * 2, to: half + arcDeg * 3 + gapDeg * 2 }, // left
  ];

  const paths = segments
    .map((s) => {
      const colour = mono ? "currentColor" : s.gold ? GOLD : INK;
      return (
        `  <path d="${arc(cx, cy, r, s.from, s.to)}" ` +
        `fill="none" stroke="${colour}" stroke-width="${stroke}" stroke-linecap="butt"/>`
      );
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="360devz">
${paths}
</svg>
`;
}

fs.mkdirSync(OUT, { recursive: true });

const files = {
  // Primary two-colour mark.
  "mark.svg": buildMark({}),
  // Single colour — inherits currentColor, for dark grounds and one-ink print.
  "mark-mono.svg": buildMark({ mono: true }),
  // Favicon proportions: heavier stroke, wider gaps, so it survives 16px.
  "mark-small.svg": buildMark({ stroke: 19, gapDeg: 22 }),
};

for (const [name, svg] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), svg);
  console.log(`${name.padEnd(16)} ${svg.length} bytes`);
}

const arcDeg = (360 - 16 * 3) / 3;
console.log(`\ngeometry: 3 arcs x ${arcDeg}deg + 3 gaps x 16deg = ${arcDeg * 3 + 48}deg`);
