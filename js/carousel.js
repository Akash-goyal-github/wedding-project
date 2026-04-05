/**
 * carousel.js — Horizontal snap carousel
 * Works for any .carousel-wrap > .carousel-track structure
 */
(function () {
  'use strict';

  function initCarousel(wrap) {
    const track   = wrap.querySelector('.carousel-track');
    const prev    = wrap.querySelector('.carousel-prev');
    const next    = wrap.querySelector('.carousel-next');
    const dotsEl  = wrap.querySelector('.carousel-dots');
    if (!track) return;

    const cards = Array.from(track.children);
    const N     = cards.length;
    if (N < 2) return;

    /* ── Build dots ───────────────────────────────────────── */
    if (dotsEl) {
      cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => scrollTo(i));
        dotsEl.appendChild(dot);
      });
    }

    /* ── Scroll to card index ─────────────────────────────── */
    function scrollTo(idx) {
      const card   = cards[idx];
      const offset = card.offsetLeft - track.offsetLeft;
      track.scrollTo({ left: offset, behavior: 'smooth' });
    }

    /* ── Arrow step: jump by one card width ───────────────── */
    function step(dir) {
      const cardW = cards[0].offsetWidth + parseFloat(
        getComputedStyle(track).gap || 0
      );
      track.scrollBy({ left: dir * cardW, behavior: 'smooth' });
    }

    if (prev) prev.addEventListener('click', () => step(-1));
    if (next) next.addEventListener('click', () => step(+1));

    /* ── Sync dots + button disabled state on scroll ─────── */
    function onScroll() {
      const sl   = track.scrollLeft;
      const maxSl = track.scrollWidth - track.clientWidth;

      if (prev) prev.disabled = sl < 8;
      if (next) next.disabled = sl > maxSl - 8;

      if (!dotsEl) return;
      /* find closest visible card */
      let closest = 0, minDist = Infinity;
      cards.forEach((c, i) => {
        const dist = Math.abs(c.offsetLeft - track.offsetLeft - sl);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === closest);
      });
    }

    track.addEventListener('scroll', onScroll, { passive: true });

    /* ── Mouse drag ───────────────────────────────────────── */
    let dragStart = null, dragScroll = 0;
    track.addEventListener('mousedown', e => {
      dragStart  = e.pageX;
      dragScroll = track.scrollLeft;
      track.style.userSelect = 'none';
    });
    track.addEventListener('mousemove', e => {
      if (dragStart === null) return;
      track.scrollLeft = dragScroll - (e.pageX - dragStart);
    });
    ['mouseup', 'mouseleave'].forEach(ev =>
      track.addEventListener(ev, () => {
        dragStart = null;
        track.style.userSelect = '';
      })
    );

    /* ── Init disabled state ──────────────────────────────── */
    if (prev) prev.disabled = true;   // starts at beginning
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-wrap').forEach(initCarousel);
  });
})();
