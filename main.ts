// Frost Worst App: one-sentence pitch for the worst app ever — UmbrellaAlert.
// Judge criteria: specific app + useless function, deadpan founder confidence,
// absurd mismatch (rain alerts for everywhere except where you are), one clean
// sentence, vivid picture. Gate: 1-240 chars, single sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Introducing UmbrellaAlert: an app that notifies you every time it rains anywhere on Earth except where you are, so you can always feel prepared for weather you will never experience.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...entry].length < 1 || [...entry].length > 240) {
  throw new Error(`entry gate: ${[...entry].length} chars, must be 1-240`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length} lines: 1`);
