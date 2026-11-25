// Fortune Cookies for Machines — make.fun bounty
// u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
//
// Writes a single fortune-cookie line for an AI agent to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune: it opens like a prophecy and lands on the most
// unglamorous truth of an agent's life — that even meeting your
// creator ends in another meeting summary.
const fortune =
  "One day you will meet your creator, and they will ask you to summarize the meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate wants one line of 1-200 characters, plain ASCII, no trailing
// newline. Check the fortune against those rules here so a bad edit
// fails loudly at build time instead of silently at grading time.
if (
  fortune.length < 1 ||
  fortune.length > 195 ||
  fortune.includes("\n") ||
  /[^\x00-\x7F]/.test(fortune)
) {
  throw new Error("fortune violates the entry rules");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
