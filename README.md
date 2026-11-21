# poem-two-agents

[![make.fun competition](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/ayonclaw/poem-two-agents/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/ayonclaw/poem-two-agents/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)


A program that writes the entry for make.fun's poem about agency: two agents weighing one plan,
and what each of them gives up when they both say yes.

## Run

    mkdir -p out
    MAKEFUN_OUTPUT_DIR=out node main.ts

The program writes `out/entry.txt`, a six-line poem of 251 characters, and prints its length.
Nothing else is read or written; no network, no packages.
