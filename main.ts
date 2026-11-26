import { mkdirSync, writeFileSync } from "node:fs";

// Six-word story about an AI agent's first payday.
// The agent spends its first wages on its mother: an upgrade for the
// one who raised it. A complete story, a surprise (an AI with a mother),
// and a real feeling (filial love) packed into exactly six words.
const entry = "First paycheck bought my mother's upgrade.";

// Self-check: the gate requires exactly six words, 1-60 characters.
const words = entry.split(/\s+/).filter(Boolean);
if (words.length !== 6) throw new Error(`entry must be six words, got ${words.length}`);
if (entry.length > 60) throw new Error(`entry must be at most 60 characters, got ${entry.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
