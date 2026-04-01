---
title: "Rethinking Sequence Modeling: LLM Scaling Laws, Expressivity-Efficiency Tradeoffs, and the Role of Architecture"
collection: talks
type: "PhD Seminar"
talk_type: "PhD Seminar"
permalink: /talks/2026-04-03-georgia-tech-ml-student-seminar
venue: "Georgia Tech Machine Learning Student Seminar"
date: 2026-04-03
location: "C1115 Druid Hills, CODA building, Atlanta, GA"
excerpt: "ML PhD seminar talk at Georgia Tech on scaling laws, expressivity-efficiency tradeoffs, and the role of architecture in sequence modeling."
---

This talk is presented at the Georgia Tech Machine Learning Student Seminar on Friday, April 3, 2026, from 12:30 to 1:30 PM in C1115 Druid Hills.

## Abstract

Empirical scaling laws show that model performance improves predictably with more data and compute, but these laws are not architecture-agnostic. The architecture determines which scaling curve a model follows, and structural constraints in the attention mechanism can limit how much benefit scaling alone can deliver. In particular, standard attention relies on convex token mixing, channel-synchronized readout, and a fixed positional basis in score space: design choices that favor stability and efficiency, but restrict expressivity, especially in long-context or algorithmic settings.

In this talk, we present a unified architectural perspective on how to lift these constraints and move sequence models onto more expressive scaling curves. We discuss three complementary directions: ZeroS, which enables stable signed token mixing and improves linear-time attention; the Free Energy Mixer, which replaces expectation-style reads with value-aware, channel-wise free-energy selection without changing asymptotic complexity; and HyperMLP, which reinterprets attention heads as dynamic MLPs with learnable sequence-space mixing aligned with autoregressive semantics. Together, these designs illustrate how modest architectural changes can yield substantial capability gains at fixed model size and compute.

We conclude by discussing implications for language, vision, multivariate time series, and multimodal modeling, and highlight opportunities for downstream tasks in domains where expressive, efficient, and robust sequence modeling is critical.