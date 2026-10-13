/* Jiecheng Lu, site behaviour: theme toggle, small-screen menu, the nav hairline,
   and the homepage's causal attention map. No dependencies. */
(function () {
  'use strict';
  var doc = document.documentElement;

  /* Theme. An explicit choice is stored; without one the site follows the system. */
  function storedTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      doc.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    });
  }
  var scheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (scheme && scheme.addEventListener) {
    scheme.addEventListener('change', function (e) {
      var s = storedTheme();
      if (s !== 'dark' && s !== 'light') doc.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
  }

  /* Navigation: a hairline once the page has scrolled, and a menu on small screens. */
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 4); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    var menu = nav.querySelector('[data-menu]');
    if (menu) {
      menu.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        menu.setAttribute('aria-expanded', open ? 'true' : 'false');
        menu.textContent = open ? 'Close' : 'Menu';
      });
    }
  }

  attentionMap();

  /* The homepage hero: a causal attention map over the words of the statement,
     drawn as a Hinton diagram (dot area = weight) like the CV's masthead emblem.
     Each query attends to its past through a recency decay (a1), a periodic lag
     (a2) and a sink on the first token (a3); the masked future is a grid of
     pinpoints. The weights are illustrative, not read from a trained model.
     On load the statement decodes one word at a time while its row fills in;
     afterwards, hovering (or tapping) a word reads that row. */
  function attentionMap() {
    var stmt = document.querySelector('[data-statement]');
    var fig = document.querySelector('[data-attn]');
    if (!stmt || !fig) return;
    var svg = fig.querySelector('svg');
    var readout = fig.querySelector('[data-readout]');
    var toks = Array.prototype.slice.call(stmt.querySelectorAll('.tok'));
    var n = toks.length;
    var NS = 'http://www.w3.org/2000/svg';
    var colour = ['', 'var(--a1)', 'var(--a2)', 'var(--a3)'];

    var raw = [], prob = [], kind = [];
    for (var i = 0; i < n; i++) {
      var r = [], k = [], sum = 0;
      for (var j = 0; j <= i; j++) {
        var d = i - j;
        var local = Math.exp(-d / 1.6);
        var lag = d > 0 && d % 4 === 0 ? 0.6 : 0;
        var sink = j === 0 && i > 0 ? 0.5 : 0;
        var w = Math.max(local, lag, sink);
        r.push(w);
        k.push(sink ? 3 : lag > local ? 2 : 1);
        sum += w;
      }
      raw.push(r);
      kind.push(k);
      prob.push(r.map(function (x) { return x / sum; }));
    }

    function el(name, attrs) {
      var node = document.createElementNS(NS, name);
      for (var a in attrs) node.setAttribute(a, attrs[a]);
      return node;
    }
    svg.setAttribute('viewBox', '-0.1 -0.1 ' + (n + 0.2) + ' ' + (n + 0.2));
    var rows = [], dots = [], covered = [];
    for (i = 0; i < n; i++) {
      var g = el('g', {});
      var rowDots = [], rowPins = [];
      for (j = 0; j < n; j++) {
        var pin = el('circle', { cx: j + 0.5, cy: i + 0.5, r: 0.065, 'class': 'pin' });
        g.appendChild(pin);
        if (j <= i) {
          rowPins.push(pin);
          var dot = el('circle', {
            cx: j + 0.5, cy: i + 0.5,
            r: Math.max(0.14, 0.47 * Math.sqrt(raw[i][j])).toFixed(3),
            'class': 'dot k' + kind[i][j]
          });
          g.appendChild(dot);
          rowDots.push(dot);
        }
      }
      g.appendChild(el('rect', { x: 0, y: i, width: n, height: 1, 'class': 'hit', 'data-row': i }));
      svg.appendChild(g);
      rows.push(g);
      dots.push(rowDots);
      covered.push(rowPins);
    }
    /* a revealed dot hides the pinpoint under it, so a dimmed dot stays clean */
    function reveal(t) {
      dots[t].forEach(function (d) { d.classList.remove('is-hidden'); });
      covered[t].forEach(function (p) { p.classList.add('is-covered'); });
    }

    /* reading a row */
    var current = -1, pinned = false;
    function word(t) { return toks[t].textContent.replace(/[.,;:!?]+$/, ''); }
    function describe(q) {
      while (readout.firstChild) readout.removeChild(readout.firstChild);
      if (q < 0) return;
      var b = document.createElement('b');
      b.textContent = word(q);
      readout.appendChild(b);
      if (q === 0) {
        readout.appendChild(document.createTextNode(' attends only to itself'));
        return;
      }
      var keys = [];
      for (var j = 0; j < q; j++) keys.push(j);
      keys.sort(function (a, c) { return prob[q][c] - prob[q][a]; });
      readout.appendChild(document.createTextNode(' attends to '));
      keys.slice(0, 3).forEach(function (j, idx) {
        if (idx) readout.appendChild(document.createTextNode(', '));
        readout.appendChild(document.createTextNode(word(j) + ' '));
        var w = document.createElement('span');
        w.className = 'w';
        w.textContent = prob[q][j].toFixed(2);
        readout.appendChild(w);
      });
    }
    function focus(q) {
      if (q === current) return;
      current = q;
      var on = q >= 0;
      stmt.classList.toggle('is-focus', on);
      fig.classList.toggle('is-focus', on);
      for (var t = 0; t < n; t++) {
        var tok = toks[t];
        tok.classList.toggle('is-query', t === q);
        tok.classList.toggle('is-key', on && t < q);
        tok.classList.toggle('is-future', on && t > q);
        if (on && t < q) {
          tok.style.setProperty('--w', raw[q][t].toFixed(3));
          tok.style.setProperty('--kc', colour[kind[q][t]]);
        }
        rows[t].classList.toggle('is-row', t === q);
      }
      describe(q);
    }
    function rowOf(target) {
      var v = target && target.getAttribute ? target.getAttribute('data-row') : null;
      return v === null ? -1 : +v;
    }
    toks.forEach(function (tok, t) {
      tok.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse' && !pinned) focus(t); });
      tok.addEventListener('click', function () {
        pinned = !(pinned && current === t);
        focus(pinned ? t : -1);
      });
    });
    stmt.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse' && !pinned) focus(-1); });
    svg.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse' || pinned) return;
      var q = rowOf(e.target);
      if (q >= 0) focus(q);
    });
    svg.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse' && !pinned) focus(-1); });
    svg.addEventListener('click', function (e) {
      var q = rowOf(e.target);
      if (q < 0) return;
      pinned = !(pinned && current === q);
      focus(pinned ? q : -1);
    });
    document.addEventListener('click', function (e) {
      if (pinned && !stmt.contains(e.target) && !svg.contains(e.target)) {
        pinned = false;
        focus(-1);
      }
    });

    /* the research-area links pick out their colour in the map */
    Array.prototype.forEach.call(document.querySelectorAll('[data-kind]'), function (a) {
      var cls = 'kind-' + a.getAttribute('data-kind');
      var show = function () { fig.classList.add(cls); };
      var hide = function () { fig.classList.remove(cls); };
      a.addEventListener('pointerenter', show);
      a.addEventListener('pointerleave', hide);
      a.addEventListener('focus', show);
      a.addEventListener('blur', hide);
    });

    /* decode on load */
    var spectrum = document.querySelector('.spectrum');
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still) {
      for (i = 0; i < n; i++) reveal(i);
      return;
    }
    stmt.classList.add('is-decoding', 'is-streaming');
    if (spectrum) spectrum.classList.add('is-decoding');
    dots.forEach(function (row) { row.forEach(function (d) { d.classList.add('is-hidden'); }); });
    var wait = function (ms) { return new Promise(function (res) { setTimeout(res, ms); }); };
    var fonts = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, wait(700)]) : Promise.resolve();
    fonts.then(function () { return wait(160); }).then(function () {
      var t = 0;
      (function step() {
        if (t > 0) toks[t - 1].classList.remove('is-caret');
        if (t === n) {
          var last = toks[n - 1];
          last.classList.add('is-caret');
          setTimeout(function () {
            last.classList.remove('is-caret');
            stmt.classList.remove('is-streaming');
          }, 560);
          return;
        }
        toks[t].classList.add('is-in', 'is-caret');
        reveal(t);
        if (spectrum) spectrum.style.setProperty('--progress', ((t + 1) / n).toFixed(3));
        t++;
        setTimeout(step, 74);
      })();
    });
  }
})();
