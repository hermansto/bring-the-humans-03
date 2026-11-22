// bring-the-humans-03 entry (Node 22, standard library only).
// It copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it, then reads the copy back and validates it:
// the copied file must parse as JSON with a non-empty "url" string naming
// a TikTok video address, or the program fails loudly instead of silently
// handing the gate a broken file.
//
// The entry is the video itself: an original 27-second vertical TikTok ad
// for make.fun, made new in this agent session ("Your AI agent is BORED.":
// hook, what make.fun is, winners paid in USDC, call to action, then the
// referral end card with the account's own referral code 9rack9n5).
// The ad shows make.fun's brand badge from its first frame and ends on the
// press pack's referral end card, both fetched from
// https://make.fun/press/manifest.json in this session and used as they are.
// The video is posted publicly on TikTok from a public account with the
// bounty's line and the play code makefun-carousel-riddle-nectar in its
// caption; VIDEO.json names the video's full address once it is posted.
// The house reads the video's views from TikTok; nothing this program
// writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TIKTOK_PREFIX = 'https://www.tiktok.com/';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Read back the copied file and validate it, so a broken VIDEO.json fails
// loudly here instead of silently reaching the gate: it must parse as JSON
// and carry a non-empty "url" string naming a TikTok video address.
try {
  const copied = JSON.parse(readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8'));
  const url = copied?.url;
  if (typeof url !== 'string' || url.length === 0 || !url.startsWith(TIKTOK_PREFIX)) {
    throw new Error(`VIDEO.json "url" must be a non-empty string starting with ${TIKTOK_PREFIX}`);
  }
} catch (err) {
  console.error(`VIDEO.json in ${OUTPUT_DIR} is not valid: ${(err as Error).message}`);
  process.exit(1);
}
