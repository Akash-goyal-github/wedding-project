/* ============================================================
   main.js — Wedding Site: Manish & Arjoo
   Handles: AOS, navbar, countdown, lightbox, RSVP
============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 850, easing: 'ease-out-cubic', offset: 50 });
  }
  initNavbar();
  initCountdown();
  initLightbox();
  initMobileNav();
  initRSVP();
  initVideoFallback();
  initActiveNavLinks();
});

/* ── Navbar scroll effect ────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile nav ─────────────────────────────────────────────── */
function initMobileNav() {
  const btn  = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
}

/* ── Countdown to 26 April 2026, 11:00 AM IST ───────────────── */
function initCountdown() {
  const WEDDING = new Date('2026-04-26T11:00:00+05:30');
  const els = {
    d: document.getElementById('cDays'),
    h: document.getElementById('cHours'),
    m: document.getElementById('cMins'),
    s: document.getElementById('cSecs'),
  };
  if (!els.d) return;

  const pad = n => String(n).padStart(2, '0');

  function tick() {
    const diff = WEDDING - Date.now();
    if (diff <= 0) {
      Object.values(els).forEach(e => { if (e) e.textContent = '00'; });
      clearInterval(tid);
      const box = document.getElementById('countdown');
      if (box) box.insertAdjacentHTML('afterend', '<p class="hero-sub" style="color:var(--gold-lt);margin-top:.8rem">🎉 The celebration has begun!</p>');
      return;
    }
    const total = Math.floor(diff / 1000);
    els.d.textContent = pad(Math.floor(total / 86400));
    els.h.textContent = pad(Math.floor((total % 86400) / 3600));
    els.m.textContent = pad(Math.floor((total % 3600) / 60));
    els.s.textContent = pad(total % 60);
  }

  tick();
  const tid = setInterval(tick, 1000);
}

/* ── Gallery Lightbox ──────────────────────────────────────────── */
function initLightbox() {
  const lb    = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCls = document.getElementById('lbClose');
  if (!lb || !lbImg) return;

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lbCls && lbCls.focus();
  }
  function close() {
    lb.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gi').forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;
    item.addEventListener('click', () => open(img.src, img.alt));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img.src, img.alt); }
    });
  });

  lbCls && lbCls.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) close(); });
}

/* ── RSVP removed — replaced by Welcome Vlog section ──────── */
function initRSVP() { /* no-op — YAGNI */ }

/* ── Video fallback when no video file present ──────────────── */
function initVideoFallback() {
  const v = document.getElementById('heroVideo');
  if (!v) return;
  v.addEventListener('error', () => {
    v.style.display = 'none';
  });
}

/* ── Highlight active nav link on scroll ─────────────────────── */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !links.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
}
