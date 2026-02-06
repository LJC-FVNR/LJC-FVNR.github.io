---
title: "Free Energy Mixer"
collection: publications
permalink: /publication/2026-free-energy-mixer
category: conferences
date: 2026-01-26
venue: "ICLR 2026"
authors: "Jiecheng Lu, Shihao Yang"
paperurl: "https://openreview.net/forum?id=vjQnKToCnV"
code: "https://github.com/LJC-FVNR/SequenceLab"
selected: true
excerpt: "Introduces Free Energy Mixer (FEM), which interprets (q,k) attention scores as a prior and performs a log-sum-exp free-energy readout to reweight values at the channel level, enabling a smooth transition from mean aggregation to selective channel-wise retrieval without increasing asymptotic complexity."
tags: [Attention, Transformers, Sequence Modeling]
---
Free Energy Mixer (FEM) replaces head-level convex combination with a free-energy-based readout that combines prior attention and value evidence, endowing attention with channel-wise selectivity. FEM is plug-and-play for standard and linear attention, RNNs, and SSMs, improving expressiveness and performance while preserving computational efficiency.
