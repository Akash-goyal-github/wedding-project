/* ============================================================
   gallery.js — Cinematic slider controller
   Ken Burns · auto-advance · film strip · lightbox
   Manish & Arjoo · 26 April 2026
============================================================ */

'use strict';

const INTERVAL   = 5000;   // ms between auto-advances
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

    this._bindEvents();
    this._activate(0, false);
    this._startAuto();
  }

  /* ── Navigation ── */
  goTo(n, restart = true) {
    if (n === this.idx) return;
    const prev = this.idx;
    this.idx = (n + this.total) % this.total;

    // leaving state fades out quickly
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

    // Restart Ken Burns: remove → reflow → re-add
    const kb = KB_CLASSES[n % KB_CLASSES.length];
    KB_CLASSES.forEach(c => img.classList.remove(c));
    void img.offsetWidth; // force reflow
    img.classList.add(kb);

    slide.classList.add('active');

    // Counter
    if (this.currEl) this.currEl.textContent = String(n + 1).padStart(2, '0');

    // Dots
    this.dots.forEach((d, i) => d.classList.toggle('active', i === n));

    // Thumbs
    this.thumbs.forEach((t, i) => t.classList.toggle('active', i === n));
    this._scrollStrip(n);

    // Progress bar
    this._resetBar();
  }

  /* ── Film strip centering ── */
  _scrollStrip(n) {
    if (!this.strip) return;
    const thumb = this.thumbs[n];
    if (!thumb) return;
    const stripW   = this.strip.parentElement.offsetWidth;
    const thumbL   = thumb.offsetLeft;
    const thumbW   = thumb.offsetWidth;
    const target   = thumbL - (stripW / 2) + (thumbW / 2) - 60;
    this.strip.style.transform = `translateX(${-Math.max(0, target)}px)`;
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

  /* ── Events ── */
  _bindEvents() {
    // Arrows
    this.slider.querySelector('.g-prev')
      ?.addEventListener('click', () => this.prev());
    this.slider.querySelector('.g-next')
      ?.addEventListener('click', () => this.next());

    // Dots
    this.dots.forEach((d, i) =>
      d.addEventListener('click', () => this.goTo(i))
    );

    // Thumbnails
    this.thumbs.forEach((t, i) =>
      t.addEventListener('click', () => this.goTo(i))
    );

    // Expand → lightbox
    const expand = this.slider.querySelector('.g-expand');
    expand?.addEventListener('click', () => this._openLightbox());

    // Click stage → lightbox
    this.slider.querySelector('.g-stage')
      ?.addEventListener('click', e => {
        if (e.target.closest('.g-arrow, .g-expand')) return;
        this._openLightbox();
      });

    // Keyboard
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft')  this.prev();
    });

    // Pause on hover
    const stage = this.slider.querySelector('.g-stage');
    stage?.addEventListener('mouseenter', () => clearInterval(this.timer));
    stage?.addEventListener('mouseleave', () => this._startAuto());

    // Touch swipe
    let tx = 0;
    stage?.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    stage?.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 40) dx < 0 ? this.next() : this.prev();
    });
  }

  /* ── Open existing lightbox with current image ── */
  _openLightbox() {
    const img = this.slides[this.idx]?.querySelector('.g-img');
    const lb  = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    if (!lb || !lbImg || !img) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.hidden  = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lbClose')?.focus();
  }
}

/* ── Init on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  new GallerySlider();
});
