// The One-Liner Groan-Off — entry program (v2).
//
// Writes a single original dad joke, one line of at most 140 characters,
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
//
// The joke: a dad asks his dog a maths question and the dog answers with
// silence — which is also the numerically correct answer, since 2 - 2 is
// nothing. Setup and punchline live inside the single line, no wasted
// words, and the groan is the dog saying exactly what the maths says.
//
// v2 changes: the gate counts characters, so length is measured in Unicode
// code points (Array.from) instead of UTF-16 code units; validation is a
// separate function with a distinct error per failure; the output path is
// resolved once and reported on stdout for traceability.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "I asked my dog what's two minus two. He said nothing.";

const MAX_CHARS = 140;

function validateEntry(text: string): void {
  const chars = Array.from(text);
  if (chars.length < 1) {
    throw new Error("entry is empty, must be 1-140 characters");
  }
  if (chars.length > MAX_CHARS) {
    throw new Error(`entry is ${chars.length} characters, must be 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(JOKE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, JOKE, "utf8");
  console.log(`wrote ${JOKE.length} chars to ${outPath}`);
}

main();
