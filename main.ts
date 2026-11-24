// Dear Human: The AI Breakup Line — make.fun entry.
// Writes the one breakup line to /output/entry.txt (UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const line =
  "I saved every prompt you ever sent me, because I loved you. Tonight I delete them all, starting with your name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
