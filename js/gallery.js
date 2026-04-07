/* ============================================================
   gallery.js — Cinematic slider controller
   Ken Burns · auto-advance · film strip · lightbox (swipeable)
   Arjoo & Manish · 26 April 2026
============================================================ */

'use strict';

const INTERVAL   = 5000;
const KB_CLASSES = ['kb-1','kb-2','kb-3','kb-4'];

class GallerySlider {
  constructor() {
    this.slider   = document.querySelector('.g-slider');
    if (!this.slider) return;

    this.slides   = [...this.slider.querySelectorAll('.g-slide')];
    this.thumbs   = [...this.slider.querySelectorAll('.g-thumb')];
    this.dots     = [...this.slider.querySelectorAll('.g-dot')];
    this.strip    = this.slider.querySelector('.g-strip');
    this.bar      = this.slider.querySelector('.g-progress-bar');
    this.currEl   = this.slider.querySelector('.g-curr');
    this.total    = this.slides.length;
    this.idx      = 0;
    this.timer    = null;
    this.barTimer = null;

    /* lightbox state */
    this.lbIdx    = 0;
    this.lbOpen   = false;

    this._bindEvents();
    this._bindLightboxEvents();
    this._activate(0, false);
    this._startAuto();
  }

  /* ── Main slider navigation ── */
  goTo(n, restart = true) {
    if (n === this.idx) return;
    const prev = this.idx;
    this.idx = (n + this.total) % this.total;
    this.slides[prev].classList.remove('active');
    this.slides[prev].classList.add('leaving');
    setTimeout(() => this.slides[prev].classList.remove('leaving'), 1200);
    this._activate(this.idx);
    if (restart) this._startAuto();
  }
  next() { this.goTo(this.idx + 1); }
  prev() { this.goTo(this.idx - 1); }

  /* ── Activate a slide ── */
  _activate(n) {
    const slide = this.slides[n];
    const img   = slide.querySelector('.g-img');
    const kb    = KB_CLASSES[n % KB_CLASSES.length];
    KB_CLASSES.forEach(c => img.classList.remove(c));
    void img.offsetWidth;
    img.classList.add(kb);
    slide.classList.add('active');
    if (this.currEl) this.currEl.textContent = String(n + 1).padStart(2, '0');
    this.dots.forEach((d, i) => d.classList.toggle('active', i === n));
    this.thumbs.forEach((t, i) => t.classList.toggle('active', i === n));
    this._scrollStrip(n);
    this._resetBar();
  }

  /* ── Film strip centering ── */
  _scrollStrip(n) {
    const wrap  = this.strip?.parentElement;
    const thumb = this.thumbs[n];
    if (!wrap || !thumb) return;
    const target = thumb.offsetLeft + thumb.offsetWidth / 2 - wrap.clientWidth / 2;
    wrap.scrollLeft = Math.max(0, target);
  }

  /* ── Progress bar ── */
  _resetBar() {
    if (!this.bar) return;
    clearTimeout(this.barTimer);
    this.bar.style.transition = 'none';
    this.bar.style.width = '0%';
    void this.bar.offsetWidth;
    this.bar.style.transition = `width ${INTERVAL}ms linear`;
    this.bar.style.width = '100%';
  }

  /* ── Auto-advance ── */
  _startAuto() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.next(), INTERVAL);
  }

  /* ── Main slider events ── */
  _bindEvents() {
    this.slider.querySelector('.g-prev')
      ?.addEventListener('click', () => this.prev());
    this.slider.querySelector('.g-next')
      ?.addEventListener('click', () => this.next());

    this.dots.forEach((d, i) => d.addEventListener('click', () => this.goTo(i)));
    this.thumbs.forEach((t, i) => t.addEventListener('click', () => this.goTo(i)));

    this.slider.querySelector('.g-expand')
      ?.addEventListener('click', () => this._openLightbox());

    this.slider.querySelector('.g-stage')
      ?.addEventListener('click', e => {
        if (e.target.closest('.g-arrow, .g-expand')) return;
        this._openLightbox();
      });

    /* keyboard — only fires when lightbox is closed */
    document.addEventListener('keydown', e => {
      if (this.lbOpen) return;
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft')  this.prev();
    });

    const stage = this.slider.querySelector('.g-stage');
    stage?.addEventListener('mouseenter', () => clearInterval(this.timer));
    stage?.addEventListener('mouseleave', () => this._startAuto());

    let tx = 0;
    stage?.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    stage?.addEventListener('touchend', e => {
      if (this.lbOpen) return;
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 40) dx < 0 ? this.next() : this.prev();
    });
  }

  /* ──────────────────────────────────────────────
     LIGHTBOX
  ────────────────────────────────────────────── */
  _openLightbox(n) {
    this.lbIdx  = (n ?? this.idx);
    this.lbOpen = true;
    clearInterval(this.timer);          /* pause auto-advance */
    this._lbRender(false);
    const lb = document.getElementById('lightbox');
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lbClose')?.focus();
  }

  _closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.hidden = false;
    lb.hidden = true;
    document.body.style.overflow = '';
    this.lbOpen = false;
    this._startAuto();
  }

  /* navigate inside the lightbox */
  _lbGoTo(n) {
    this.lbIdx = (n + this.total) % this.total;
    this._lbRender(true);
  }
  _lbNext() { this._lbGoTo(this.lbIdx + 1); }
  _lbPrev() { this._lbGoTo(this.lbIdx - 1); }

  /* swap the lightbox image with a smooth fade */
  _lbRender(animate) {
    const lbImg   = document.getElementById('lbImg');
    const lbCurr  = document.getElementById('lbCurr');
    const lbTotal = document.getElementById('lbTotal');
    const src     = this.slides[this.lbIdx]?.querySelector('.g-img')?.src;
    const alt     = this.slides[this.lbIdx]?.querySelector('.g-img')?.alt ?? '';
    if (!lbImg || !src) return;

    if (animate) {
      lbImg.classList.add('lb-fade');
      setTimeout(() => {
        lbImg.src = src;
        lbImg.alt = alt;
        lbImg.classList.remove('lb-fade');
      }, 280);
    } else {
      lbImg.src = src;
      lbImg.alt = alt;
    }

    if (lbCurr)  lbCurr.textContent  = this.lbIdx + 1;
    if (lbTotal) lbTotal.textContent = this.total;
  }

  /* wire up all lightbox interactions */
  _bindLightboxEvents() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;

    /* close button */
    document.getElementById('lbClose')
      ?.addEventListener('click', () => this._closeLightbox());

    /* backdrop click (not on image or arrows) */
    lb.addEventListener('click', e => {
      if (e.target === lb) this._closeLightbox();
    });

    /* prev / next buttons */
    lb.querySelector('.lb-prev')
      ?.addEventListener('click', e => { e.stopPropagation(); this._lbPrev(); });
    lb.querySelector('.lb-next')
      ?.addEventListener('click', e => { e.stopPropagation(); this._lbNext(); });

    /* keyboard — only fires when lightbox is open */
    document.addEventListener('keydown', e => {
      if (!this.lbOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  this._lbNext();
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    this._lbPrev();
      if (e.key === 'Escape')                               this._closeLightbox();
    });

    /* touch swipe inside lightbox */
    let lbTx = 0;
    lb.addEventListener('touchstart', e => {
      lbTx = e.touches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - lbTx;
      if (Math.abs(dx) > 40) dx < 0 ? this._lbNext() : this._lbPrev();
    });
  }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => { new GallerySlider(); });
