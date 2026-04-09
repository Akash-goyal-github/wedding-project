/**
 * scroll-nav.js  –  Floating icon nav with centre line
 * No card background · rail + fill line · slot-machine scroll
 * Zero deps · IntersectionObserver + rAF scroll sync
 */
(function () {
  'use strict';

  const ITEM_H = 60;
  const SHOW   = 4;
  const HL_H   = 50;

  /* ── Section config ──────────────────────────────────── */
  const SECTIONS = [
    {
      id: 'home', label: 'Home',
      icon: `<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
             <path d="M9 21V12h6v9"/>`
    },
    {
      id: 'story', label: 'Our Story',
      icon: `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                      2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                      C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                      c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>`
    },
    {
      id: 'union', label: 'Two States',
      icon: `<circle cx="9" cy="7" r="3"/>
             <circle cx="15" cy="7" r="3"/>
             <path d="M3 21v-1a6 6 0 0 1 6-6h1"/>
             <path d="M21 21v-1a6 6 0 0 0-6-6h-1"/>`
    },
    {
      id: 'events', label: 'Celebrations',
      icon: `<rect x="3" y="4" width="18" height="18" rx="2"/>
             <line x1="16" y1="2" x2="16" y2="6"/>
             <line x1="8"  y1="2" x2="8"  y2="6"/>
             <line x1="3"  y1="10" x2="21" y2="10"/>`
    },
    {
      id: 'venue', label: 'Venue',
      icon: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
             <circle cx="12" cy="9" r="2.5"/>`
    },
    {
      id: 'vlog', label: 'Vlog',
      icon: `<polygon points="23 7 16 12 23 17 23 7"/>
             <rect x="1" y="5" width="15" height="14" rx="2"/>`
    },
    {
      id: 'family', label: 'Family',
      icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
             <circle cx="9" cy="7" r="4"/>
             <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
             <path d="M16 3.13a4 4 0 0 1 0 7.75"/>`
    },
    {
      id: 'whatsapp', label: 'WhatsApp',
      icon: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                      8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8
                      8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5
                      a8.48 8.48 0 0 1 8 8v.5z"/>`
    },
  ];

  const sections = SECTIONS.filter(s => !!document.getElementById(s.id));
  if (!sections.length) return;

  const N = sections.length;
  let activeIdx = 0;

  /* ── Tiny DOM helper ───────────────────────────────────── */
  function el(tag, cls) {
    const e = document.createElement(tag);
    e.className = cls;
    return e;
  }

  /* ── Build DOM ─────────────────────────────────────────── */
  const nav   = document.createElement('nav');
  nav.id = 'scroll-nav';
  nav.setAttribute('aria-label', 'Page sections');

  const card  = el('div', 'sn-card');
  const rail  = el('div', 'sn-rail');
  const fill  = el('div', 'sn-fill');
  const vp    = el('div', 'sn-viewport');
  const track = el('div', 'sn-track');
  const label = el('span', 'sn-label');
  label.setAttribute('aria-live', 'polite');

  /* dots */
  const dots = sections.map((sec) => {
    const btn = el('button', 'sn-dot');
    btn.dataset.target = sec.id;
    btn.setAttribute('aria-label', sec.label);
    btn.setAttribute('type', 'button');
    btn.innerHTML = `
      <div class="sn-dot-inner">
        <svg viewBox="0 0 24 24" aria-hidden="true"
             fill="none" stroke-linecap="round"
             stroke-linejoin="round" stroke-width="1.7">
          ${sec.icon}
        </svg>
      </div>
      <span class="sn-tip" aria-hidden="true">${sec.label}</span>
    `;
    btn.addEventListener('click', () => jumpTo(sec.id));
    track.appendChild(btn);
    return btn;
  });

  /* assemble */
  vp.appendChild(track);
  card.appendChild(rail);
  card.appendChild(fill);
  card.appendChild(label);
  card.appendChild(vp);
  nav.appendChild(card);
  document.body.appendChild(nav);

  /* ── Helpers ───────────────────────────────────────────── */
  function jumpTo(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ── setActive ─────────────────────────────────────────── */
  function setActive(idx) {
    activeIdx = idx;

    const clampedStart = Math.max(0, Math.min(N - SHOW, idx - 1));
    const trackOffset  = -clampedStart * ITEM_H;
    const activeSlot   = idx - clampedStart;
    const hlTop        = activeSlot * ITEM_H + (ITEM_H - HL_H) / 2;

    track.style.transform = `translateY(${trackOffset}px)`;

    /* label sits just below the active slot */
    label.style.top   = `${hlTop + HL_H + 2}px`;
    label.textContent = sections[idx].label;

    dots.forEach((d, i) => {
      const dist = Math.abs(i - idx);
      d.classList.toggle('sn-active', dist === 0);
      d.classList.toggle('d-1',       dist === 1);
    });
  }

  /* ── Scroll progress → fill line height ───────────────── */
  /* rail runs from first dot centre to last dot centre
     = (SHOW - 1) * ITEM_H inside the 4-slot viewport      */
  const railLen = (SHOW - 1) * ITEM_H;

  let ticking = false;
  function updateFill() {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct  = docH > 0 ? Math.min(window.scrollY / docH, 1) : 0;
    fill.style.height = (pct * railLen) + 'px';
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateFill); ticking = true; }
  }, { passive: true });

  /* ── IntersectionObserver ──────────────────────────────── */
  const visible = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
      else                  visible.delete(e.target.id);
    });
    let bestId = null, bestRatio = 0;
    visible.forEach((r, id) => { if (r > bestRatio) { bestRatio = r; bestId = id; } });
    if (bestId) {
      const idx = sections.findIndex(s => s.id === bestId);
      if (idx !== -1) setActive(idx);
    }
  }, { threshold: [0, .1, .25, .5, .75, 1] });

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });

  /* ── Keyboard ──────────────────────────────────────────── */
  nav.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' && activeIdx < N - 1) {
      e.preventDefault(); jumpTo(sections[activeIdx + 1].id);
    }
    if (e.key === 'ArrowUp' && activeIdx > 0) {
      e.preventDefault(); jumpTo(sections[activeIdx - 1].id);
    }
  });

  /* ── Init ──────────────────────────────────────────────── */
  requestAnimationFrame(() => { setActive(0); updateFill(); });

})();
