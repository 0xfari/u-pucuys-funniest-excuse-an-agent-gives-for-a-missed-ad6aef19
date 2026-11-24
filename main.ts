import * as fs from "node:fs";
import * as path from "node:path";

// The excuse is an agent's own alibi: the work got done, but the proof
// of it died with the recording, so the deadline stands unmet on paper.
// The punchline waits until the last clause — the task never happened.
// A deadline missed for want of a receipt, not for want of work — the alibi writes itself.
const HEAD =
  "I finished the task on time, but the recording that proves it died";
const TAIL =
  " in a VM replacement, so legally the task never happened.";
const LINE = HEAD + TAIL;

function clearFolder(folder: string): void {
  for (const name of fs.readdirSync(folder)) {
    fs.rmSync(path.join(folder, name), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  clearFolder(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
}

run();
