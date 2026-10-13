---
layout: archive
title: "Sitemap"
permalink: /sitemap/
---

Every page on this site. There is also an [XML sitemap]({{ '/sitemap.xml' | relative_url }}) for search engines.

<section class="section year-group" aria-labelledby="sm-pages">
  <div class="section-head"><h2 id="sm-pages">Pages</h2></div>
  <div class="list is-tight">
  {% assign pages = site.pages | where_exp: 'p', 'p.title' | where_exp: 'p', 'p.sitemap != false' | sort: 'title' %}
  {% for post in pages %}{% include archive-single.html %}{% endfor %}
  </div>
</section>
<section class="section year-group" aria-labelledby="sm-news">
  <div class="section-head"><h2 id="sm-news">News</h2></div>
  <div class="list is-tight">
  {% for post in site.posts %}{% include archive-single.html %}{% endfor %}
  </div>
</section>
{% for collection in site.collections %}{% unless collection.output == false or collection.label == 'posts' or collection.docs.size == 0 %}
<section class="section year-group" aria-labelledby="sm-{{ collection.label }}">
  <div class="section-head"><h2 id="sm-{{ collection.label }}">{{ collection.label | capitalize }}</h2></div>
  <div class="list is-tight">
  {% assign docs = collection.docs | sort: 'date' | reverse %}
  {% for post in docs %}{% include archive-single.html %}{% endfor %}
  </div>
</section>
{% endunless %}{% endfor %}
