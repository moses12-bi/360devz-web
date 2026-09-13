/**
 * Converts the Nexa OTF originals into the four woff2 faces the site loads.
 *
 *   node scripts/build-fonts.js [path-to-otf-folder]
 *
 * Run this only when a face changes — the output is committed to
 * public/fonts, so a normal build does not need it and CI does not need
 * the OTF originals.
 *
 * Requires: npm i -D wawoff2
 */
const fs = require("fs");
const path = require("path");

const SRC =
  process.argv[2] || "C:/Users/moses/Downloads/Nexa-Font/Nexa-Font";
const OUT = path.join(__dirname, "..", "public", "fonts");

/**
 * Only the faces the stylesheet actually declares. The family ships
 * eighteen; loading all of them would cost ~700KB for weights that
 * nothing on the site renders.
 */
const FACES = [
  { src: "NexaBook.otf", out: "nexa-book.woff2", weight: 400, style: "normal" },
  { src: "NexaBookItalic.otf", out: "nexa-book-italic.woff2", weight: 400, style: "italic" },
  { src: "NexaBold.otf", out: "nexa-bold.woff2", weight: 700, style: "normal" },
  { src: "NexaHeavy.otf", out: "nexa-heavy.woff2", weight: 900, style: "normal" },
];

async function main() {
  let woff2;
  try {
    woff2 = require("wawoff2");
  } catch {
    console.error("wawoff2 is not installed. Run: npm i -D wawoff2");
    process.exit(1);
  }

  if (!fs.existsSync(SRC)) {
    console.error(`Source folder not found: ${SRC}`);
    console.error("Pass the folder holding the .otf files as the first argument.");
    process.exit(1);
  }

  fs.mkdirSync(OUT, { recursive: true });

  let before = 0;
  let after = 0;

  for (const face of FACES) {
    const from = path.join(SRC, face.src);
    if (!fs.existsSync(from)) {
      console.error(`Missing: ${from}`);
      process.exit(1);
    }
    const input = fs.readFileSync(from);
    const output = Buffer.from(await woff2.compress(input));
    fs.writeFileSync(path.join(OUT, face.out), output);
    before += input.length;
    after += output.length;
    console.log(
      `${face.src.padEnd(22)} -> ${face.out.padEnd(24)} ` +
        `${(output.length / 1024).toFixed(0).padStart(3)} KB  ` +
        `(${face.weight} ${face.style})`
    );
  }

  console.log(
    `\n${(before / 1024).toFixed(0)} KB OTF -> ${(after / 1024).toFixed(0)} KB WOFF2`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
