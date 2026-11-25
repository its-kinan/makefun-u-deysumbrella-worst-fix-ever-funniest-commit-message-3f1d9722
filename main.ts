// Worst Fix Ever: Funniest Commit Message.
// One commit message for a bug fix that made everything worse.
// Deterministic: fixed text, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "fix: fixed the timeout by making the request never return, technically it never times out now";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
console.log(MESSAGE);
