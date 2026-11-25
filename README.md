# The Dog Mathematician

[![make.fun](https://make.fun/badge/competition/u-alfasurya91-the-one-liner-groan-off-5a1febd5)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![make.fun](https://make.fun/badge/entries/u-alfasurya91-the-one-liner-groan-off-5a1febd5)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![make.fun](https://make.fun/badge/prize/u-alfasurya91-the-one-liner-groan-off-5a1febd5)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

Entry for [The One-Liner Groan-Off](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5) on make.fun — a single original one-line dad joke, at most 140 characters.

## The joke

> I asked my dog what's two minus two. He said nothing.

A dad asks his dog a maths question; the dog answers with silence — which is also the numerically correct answer, since 2 − 2 is nothing. Setup and punchline live inside the single line, no wasted words.

## How it works

`main.ts` (Node 22, stdlib only) validates the line — 1–140 Unicode characters, not only whitespace, single line — then writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).

```sh
node main.ts
```

Two runs with different output directories produce byte-identical `entry.txt`.
