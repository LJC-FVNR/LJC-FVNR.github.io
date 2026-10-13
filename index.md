---
layout: home
title: "Jiecheng Lu"
description: >
  Ph.D. candidate in Machine Learning at Georgia Tech working on how sequence models read context, store knowledge, and rewrite their own weights, toward self-improving LLMs, agents, and AGI.
permalink: /
# The hero: the role line under the name, and the statement that the attention
# map decodes word by word (one token per word). In the statement, "~" joins
# words that never break apart, and "^" joins words that stay on one line on
# wide screens, so lines break between phrases rather than inside them.
role: "Ph.D. candidate in [Machine Learning at Georgia Tech](https://ml.gatech.edu/) (ISyE), advised by [Prof. Shihao Yang](https://www.isye.gatech.edu/users/shihao-yang)."
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

Today's foundation models stop learning when <span class="nw">training ends.</span> <span class="nw">I study parametric memory</span>, the knowledge a model keeps <span class="nw">in its weights</span>, as the route to <span class="nw">continual learning</span>, <span class="nw">LLM self-improvement</span>, and recursive <span class="nw">self-improvement</span> in <span class="nw">agentic systems</span>.

It builds on my architecture work, which makes <span class="nw">sequence models</span> <span class="nw-w">for LLMs and <span class="nw">time series</span></span> more expressive under <span class="nw-w">practical compute constraints</span>, across attention, <span class="nw">linear attention</span>, and <span class="nw">dynamic MLPs</span>. Since 2024, <span class="nw">I have published</span> <span class="nw">10 papers</span> as the <span class="nw">main contributor</span> at ICLR, ICML, and NeurIPS.
