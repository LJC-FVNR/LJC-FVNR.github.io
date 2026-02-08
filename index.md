---
layout: single
title: "Jiecheng Lu"
description: >
  Ph.D. student in Machine Learning at Georgia Tech. Research interests include foundation models, sequence modeling, time series analysis, and linear attention mechanisms.
author_profile: true
classes: wide
permalink: /
---

<style>
/* ======= Follow theme colors only (use --global-* vars) ======= */

/* Section title with icon */
.section-title{
  display:flex; align-items:center; gap:.6rem;
  margin:1.25rem 0 .75rem;
}
.section-title .icon{
  width:1.85rem; height:1.85rem;
  display:inline-flex; align-items:center; justify-content:center;
  border-radius:.0rem;
  background: var(--global-thead-color);
  color: var(--global-link-color);
  border: 1px solid var(--global-border-color);
}

/* Link pills (About) */
.link-row{ display:flex; gap:.5rem; flex-wrap:wrap; margin:.5rem 0 0; }
.pill-link{
  display:inline-flex; align-items:center; gap:.4rem;
  padding:.35rem .6rem; border-radius:1px;
  border:1px solid var(--global-border-color);
  background: var(--global-thead-color);
  color:var(--global-text-color); text-decoration:none; font-size:.92rem;
}
.pill-link:hover{ border-color: var(--global-link-color); }

/* Small badge (conference / spotlight) */
.badge{
  display:inline-block; padding:.15rem .45rem;
  border-radius:.4rem; background: var(--global-thead-color);
  border:1px solid var(--global-border-color); color: var(--global-text-color);
  font-size:.75rem; font-weight:600; margin-left:.35rem;
}

/* News list */
.news-list{ list-style:none; padding:0; margin:0; }
.news-list li{
  display:flex; gap:.75rem; padding:.45rem .35rem;
  border-left:2px solid transparent; border-radius:.25rem;
}
.news-list li:hover{
  border-left-color: var(--global-link-color);
  background: var(--global-thead-color);
}
.news-date{
  width:6.5rem; flex:0 0 auto; font-weight:600;
  color: var(--global-link-color);
  display:flex; align-items:center; gap:.35rem;
}
.news-item{ flex:1 1 auto; }
.news-meta{ opacity:.85; font-size:.9rem; margin-top:.15rem; }

/* Publications (selected) subtle accent on hover */
.archive__item{ border-left:2px solid transparent; padding-left:.75rem; }
.archive__item:hover{
  border-left-color: var(--global-link-color);
  background: var(--global-thead-color);
}

/* Separators & buttons row */
.hr-slim{
  border:0; border-top:1px dashed var(--global-border-color);
  margin:1rem 0 1.2rem;
}
.btn-row{ margin-top:.5rem; }

/* ===== Publications: compact cards ===== */
.pubs--compact{ margin-top:.5rem; }
.pubs--compact .pub-item{
  padding:.8rem .75rem .9rem .75rem;
  border:1px solid var(--global-dark-border-color);
  background: transparent;
  margin-bottom:.6rem;
  border-left:4px solid var(--global-link-color);
}
.pubs--compact .pub-item:hover{
  background: var(--global-thead-color);
  border-color: var(--global-border-color);
}
.pubs--compact .pub-title{
  font-size:1.02rem; line-height:1.35; font-weight:700; margin:0;
}
.pubs--compact .pub-title a{ text-decoration:none; }
.pubs--compact .pub-title a:hover{ text-decoration:underline; }

.pubs--compact .pub-meta{ font-size:.92rem; margin-top:.15rem; }
.pubs--compact .pub-excerpt{ font-size:.93rem; margin-top:.35rem; }

.pubs--compact .pub-links{
  display:flex; gap:.4rem; flex-wrap:wrap; margin-top:.45rem;
}
.pubs--compact .chip{
  display:inline-flex; align-items:center;
  padding:.25rem .5rem; border-radius:1px;
  border:1px solid var(--global-border-color);
  background: var(--global-thead-color);
  text-decoration:none; font-size:.85rem;
  color: var(--global-text-color);
}
.pubs--compact .chip:hover{ border-color: var(--global-link-color); }

/* Buttons: rely on theme, only adjust hue via link-color */
.btn-row .btn,
.btn-row .btn:visited{
  background: var(--global-link-color) !important;
  border-color: var(--global-link-color) !important;
}
.btn-row .btn:hover{ filter: brightness(0.92); }

.btn-row .btn--inverse,
.btn-row .btn--outline{
  background: transparent !important;
  color: var(--global-link-color) !important;
  border-color: var(--global-link-color) !important;
}
</style>

<h2 class="section-title">
  About
</h2>

I am a Ph.D. student in [Machine Learning at Georgia Tech](https://ml.gatech.edu/) (ISyE), advised by [Prof. Shihao Yang](https://www.isye.gatech.edu/users/shihao-yang). I am broadly interested in machine learning for sequential data. My research integrates statistical principles with emerging sequential neural network architectures to develop principled and efficient approaches for **time series forecasting** and **general sequence modeling**.  

<div class="link-row">
  <a class="pill-link" href="mailto:jlu414@gatech.edu" aria-label="Email"><i class="fas fa-envelope"></i> Email</a>
  <a class="pill-link" href="https://scholar.google.com/citations?user=H_Bz5A0AAAAJ" aria-label="Google Scholar"><i class="ai ai-google-scholar"></i> Scholar</a>
  <a class="pill-link" href="https://github.com/LJC-FVNR" aria-label="GitHub"><i class="fab fa-github"></i> GitHub</a>
  <a class="pill-link" href="https://openreview.net/profile?id=%7EJiecheng_Lu1" aria-label="OpenReview"><i class="fas fa-book-open"></i> OpenReview</a>
</div>

<hr class="hr-slim" />

<h2 class="section-title">
  News
</h2>

{% assign news_posts = site.posts | where_exp: "p", "p.tags contains 'news'" | slice: 0, 6 %}
{% if news_posts == empty %}
  {% assign news_posts = site.posts | slice: 0, 6 %}
{% endif %}

<ul class="news-list">
{% for post in news_posts %}
  {% assign conf = '' %}
  {% if post.tags contains 'neurips' %}{% assign conf = 'NeurIPS' %}{% endif %}
  {% if post.tags contains 'icml' %}{% assign conf = 'ICML' %}{% endif %}
  {% if post.tags contains 'iclr' %}{% assign conf = 'ICLR' %}{% endif %}

  {% assign flag = '' %}
  {% if post.tags contains 'spotlight' %}{% assign flag = 'Spotlight' %}{% endif %}
  {% if post.tags contains 'oral' %}{% assign flag = 'Oral' %}{% endif %}
  {% if post.tags contains 'poster' %}{% assign flag = 'Poster' %}{% endif %}

  <li>
    <div class="news-date">
      <i class="far fa-calendar-alt" aria-hidden="true"></i>{{ post.date | date: "%b %Y" }}
    </div>
    <div class="news-item">
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
      {% if conf != '' %}<span class="badge">{{ conf }}</span>{% endif %}
      {% if flag != '' %}<span class="badge">{{ flag }}</span>{% endif %}
      {% if post.excerpt %}<div class="news-meta">{{ post.excerpt | strip_html | truncate: 120 }}</div>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>

<p class="btn-row">
  <a class="pill-link" href="/year-archive/"><i class="fas fa-book-open"></i> All news</a>
</p>

<hr class="hr-slim" />

<h2 class="section-title">
  Selected Publications
</h2>

{% assign selected_pubs = site.publications | where_exp: "pub", "pub.selected == true" %}
{% if selected_pubs and selected_pubs != empty %}
  {% assign pubs_to_show = selected_pubs | sort: "date" | reverse %}
{% else %}
  {% assign pubs_to_show = site.publications | sort: "date" | reverse | slice: 0, 8 %}
{% endif %}

<div class="pubs pubs--compact">
{% for post in pubs_to_show %}
  <article class="pub-item">
    <div class="pub-title">
      <a href="{{ post.paperurl | default: post.url }}">{{ post.title }}</a>
    </div>
    <div class="pub-meta">
      {% if post.authors %}{{ post.authors }} · {% endif %}
      {% if post.venue %}<em>{{ post.venue }}</em>{% endif %}
      {% if post.date %} · {{ post.date | date: "%Y" }}{% endif %}
    </div>
    {% if post.excerpt %}
      <div class="pub-excerpt">{{ post.excerpt | strip_html }}</div>
    {% endif %}
    <div class="pub-links">
      {% if post.paperpdf %}<a class="chip" href="{{ post.paperpdf }}">PDF</a>{% endif %}
      {% if post.paperurl %}<a class="chip" href="{{ post.paperurl }}">Proceedings</a>{% endif %}
      {% if post.code %}<a class="chip" href="{{ post.code }}">Code</a>{% endif %}
      {% if post.arxiv %}<a class="chip" href="{{ post.arxiv }}">arXiv</a>{% endif %}
      {% if post.poster %}<a class="chip" href="{{ post.poster }}">Poster</a>{% endif %}
      {% if post.slides %}<a class="chip" href="{{ post.slides }}">Slides</a>{% endif %}
      {% if post.bibtex %}<a class="chip" href="{{ post.bibtex }}">BibTeX</a>{% endif %}
    </div>
  </article>
{% endfor %}
</div>

<p class="btn-row">
  <a class="pill-link" href="/publications/"><i class="fas fa-book-open"></i> All publications</a>
</p>
