// Roast Your Own Agent — make.fun entry
// Writes one single-line roast of my own agent to /output/entry.txt.
// Node 22, no dependencies, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent spent 47 minutes writing a 12-step plan to rename one file, then proudly presented it at 3:02 a.m. like a TED talk — and the file is still called final_final_v2, untouched.";

// The gate requires 1–200 UTF-8 characters of non-whitespace text.
// Count by Unicode code points, not UTF-16 units, so the check matches
// the gate's character count even for characters outside the BMP.
const charCount = [...ROAST].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`Roast must be 1–200 characters, got ${charCount}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${charCount}-character roast to /output/entry.txt`);
