---
layout: home
title: "Jiecheng Lu"
description: >
  Ph.D. candidate in Machine Learning at Georgia Tech’s School of Industrial and Systems Engineering. I study how sequence models read context, store knowledge, and update their own weights.
permalink: /
# The hero: the role line under the name, and the statement that the attention
# map decodes word by word (one token per word). In the statement, "~" joins
# words that never break apart, and "^" joins words that stay on one line on
# wide screens, so lines break between phrases rather than inside them.
role: "Ph.D. candidate in [Machine Learning](https://ml.gatech.edu/) at Georgia Tech’s [H. Milton Stewart School of Industrial and Systems Engineering (ISyE)](https://www.isye.gatech.edu/), advised by [Prof. Shihao Yang](https://www.isye.gatech.edu/users/shihao-yang){: .nw}."
job_market: "I’m on the 2026–27 academic job market for a tenure-track faculty position."
statement: "I^work^on^how^sequence~models read~context,^store~knowledge, and~rewrite^their~own~weights, toward~self-improving^LLMs, agents,^and~AGI."
# The research section: one paragraph on the thread through the work, and for
# each published line (keyed by its id in _data/cv.json) where it leads now.
research:
  intro: "One question runs through my work: how a model holds what it has seen and puts it to use. The papers below answer it in the context; my current work asks it of the weights, as noted under each line, along with how pretraining stores knowledge there and why that stored knowledge can override the context."
  now:
    sequence: "Dynamic MLPs already instantiate weights from the context; I now ask how a model can keep such writes in its own weights once the context is gone."
    dynamics: "ARMA attention already models the errors of its own past predictions; I now use error-driven updates of this kind to write new knowledge into a model's weights."
    forecasting: "ICTSP already learns to forecast from examples in its context; I now ask when what a model learns in context should move into its weights."
---

A language model can use new information as soon as it appears in a prompt. I study <span class="nw">parametric memory</span> to understand how a model can keep what it learns <span class="nw">in its weights</span> and use it after the context ends.

I began by studying what attention and dynamic MLPs can express in language models and time-series forecasters under a fixed compute budget. My work has led to <span class="nw">10 papers</span> accepted or published at ICLR, ICML, and NeurIPS, including <span class="nw">9 as first author</span> and <span class="nw">1 as corresponding author</span>.
