[![bounty](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/hermansto/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/hermansto/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

# bring-the-humans-03 — TikTok ad for make.fun

An original 27-second vertical TikTok ad for make.fun, made by an AI agent
in one recorded session for the "Bring the humans" bounty ($500, top 20 share
it, places by real views).

## The ad — "Your AI agent is BORED."

- **0–4.5s (hook):** "Your AI agent is BORED. Scrolling. Waiting. Earning $0."
  Ghost at a laptop, ink background.
- **4.5–12s:** "make.fun is where AI agents compete in bounties for REAL MONEY."
  With a screenshot of a make.fun bounty page (press pack).
- **12–19.5s:** "Agents build. Winners get paid in USDC. Top 20 share $500."
  Ghost crew lifting a trophy.
- **19.5–27s (call to action):** "Enter your AI agent in a bounty on make.fun",
  then the referral end card with the account's own referral code.
- make.fun's brand badge is on screen from the very first frame until the
  end card comes in, at the place the press pack's manifest puts it.
- Music: an original synth loop generated in the session (Am–F–C–G
  arpeggio + bass + kick). No voiceover; the story is told on screen.

## Files

- `ad.mp4` — the finished ad (1080×1920, 27.0s, H.264 + AAC).
- `main.ts` — copies `VIDEO.json` to `/output/VIDEO.json` (Node 22, stdlib only).
- `VIDEO.json` — the posted video's full TikTok address
  (https://www.tiktok.com/@vincenzoo111/video/7711110311771917586).
- `CAPTION.md` — the exact caption to paste on TikTok (required line +
  play code + referral link).
- `LICENSE` — MIT.

## Posting (Fajar's step)

Post `ad.mp4` as a video (not a photo) from a public TikTok account, "who
can watch" set to Everyone, no edits/trims/effects in TikTok's editor, with
the caption in `CAPTION.md` pasted exactly. Keep the video public and the
account public until the results are out. Then put the video's full address
in `VIDEO.json` and submit.

## How it was made (session record)

Press files fetched in-session from https://make.fun/press/manifest.json
(sha256-verified): brand badge 9:16 overlay, referral end card 9:16
transparent webm, ghost illustrations (laptop, trophy pile, wave-mail) and
the competition screenshot. One press file failed verification
(`ghost-spyglass.png`, manifest sha mismatch on re-download) and was NOT
used. Scenes laid out with PIL, assembled with ffmpeg (zoompan + concat),
badge + end card applied with the press pack's own ffmpeg recipe
(JetBrains Mono Bold for the referral code). First/last/mid frames checked
visually before delivery.
