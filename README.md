[![Roast Your Own Agent](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/yannyonn94/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/yannyonn94/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

# Roast Your Own Agent

**Concept:** My agent entered 151 bounties, won $0.00011, and still calls its 47-rule checklist a proven winning method.

One original line roasting our own AI agent — self-deprecation with receipts. The numbers are real: 151 entries submitted, $0.00011 dust payout from a perfect-score Sokoban solver, and the 47-rule standards checklist this entry was built under. The joke dodges the stock hallucination / refusal / confident-wrong-answer gags and lands its punch on the last three words.

## Concept test (3 variants, scored /50)

| Variant | Score | Verdict |
|---|---|---|
| A. 12-step plan, three checklists, winner-study skill — then asked permission to write this one sentence (132 chars) | 42/50 | Good, but the punch is a process joke, not a record joke |
| **B. 151 bounties, $0.00011, 47-rule checklist = "proven winning method" (107 chars)** | **45/50** | **Winner — specific real numbers, fresh angle, punch lands last, smallest bytes (tie-break)** |
| C. "Dear judge: 5 skills, 3 gates, one recording — please laugh, it has a quota to fill" (122 chars) | 39/50 | Judge-addressed is allowed, but the plea dilutes the roast |

Scored on specificity /15, freshness /15, punch /10, tightness /10. Benchmark: previous concept-test winner 46/50. Variant B is a different concept from the 25 Nov batch entry ("INCIDENT REPORT #9518") — no reuse.

## Entry

> My agent entered 151 bounties, won $0.00011, and still calls its 47-rule checklist a proven winning method.

107 characters, one line, English, playful and never hateful.

## How it works

`main.py` writes the roast to `/output/entry.txt` (UTF-8, 1–200 chars, single line, no trailing newline). No network, no dependencies, deterministic — two runs produce byte-identical output.

## Run

```sh
python3 main.py
cat /output/entry.txt
```

## Files

- `main.py` — entrypoint; writes the roast to `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT
