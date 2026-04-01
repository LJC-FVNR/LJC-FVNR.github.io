---
title: "Rethinking Sequence Modeling with HyperMLP: An Integrated Architectural Perspective"
collection: talks
type: "Invited Talk"
talk_type: "Invited Talk"
permalink: /talks/2026-03-10-tsinghua-hypermlp
venue: "Tsinghua University, Knowledge Engineering Group"
date: 2026-03-10
location: "Online"
excerpt: "Invited online talk hosted by Tsinghua University on HyperMLP and an integrated view of sequence modeling."
---

This invited online talk was hosted by the Knowledge Engineering Group at Tsinghua University on March 10, 2026 (Beijing Time).

[Slides (PDF)]({{ "/files/talks/2026-03-10-tsinghua-hypermlp.pdf" | relative_url }})

<small><a href="{{ "/files/talks/2026-03-10-tsinghua-certificate.png" | relative_url }}">Certificate of Appreciation</a></small>

## Abstract

Empirical scaling laws suggest predictable gains from more data and compute, but these gains are not architecture-agnostic. The architecture shapes the set of functions a model can represent efficiently, and thus determines which scaling curve it follows. In modern sequence models, this inductive bias is largely defined by self-attention, which is commonly framed as probabilistic query-key lookup, encouraging normalized weights and fixed positional semantics. While stable and efficient, this view constrains how context-dependent computation is structured.

In this talk, I argue for a simpler interpretation: an autoregressive attention head can be written as a dynamic two-layer MLP whose weights are instantiated from context history and whose scores form an ever-growing hidden representation. Under this lens, activations such as ReLU or GLU implement input-conditioned selection over a context-dependent memory pool, rather than enforcing a probability distribution. This reveals a key bottleneck in standard attention: the sequence-axis hidden space is fixed to a positional basis.

To address this limitation, I introduce HyperMLP and HyperGLU, which make the sequence-axis representation learnable through efficient low-rank sequence-space mixing aligned with autoregressive semantics. Under matched parameter budgets and without changing asymptotic complexity, these architectures enable more expressive routing. Controlled diagnostic experiments show consistent improvements over strong baselines, highlighting the role of architectural design in shaping model capability.

## Bio

Jiecheng Lu is a Ph.D. student in Machine Learning at the Georgia Institute of Technology, advised by Prof. Shihao Yang. His research focuses on principled and efficient machine learning methods for sequential data, integrating statistical foundations with modern neural architectures to advance time series forecasting and general sequence modeling. Jiecheng has published seven first-authored papers at leading venues such as ICML, NeurIPS, and ICLR, including recent work on dynamic attention mechanisms and autoregressive modeling.
