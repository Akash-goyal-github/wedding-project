/* ============================================================
   effects.js — Wedding ambient effects
   Fireworks · Falling petals · Hero sparkles
   Manish & Arjoo · 26 April 2026
============================================================ */

'use strict';

/* ── Utility ─────────────────────────────────────────────── */
const rand  = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max));
const pick  = arr => arr[randInt(0, arr.length)];

/* ── Colour palettes ─────────────────────────────────────── */
const GOLD_PALETTE  = ['#F5D78E','#C9A447','#FFE9A0','#FFD700','#FFF4CC'];
const FIRECRACKER_PALETTE = [
  '#FFD700','#FFA500','#FF6B00','#FFEC6E','#FFF4CC',
  '#FF4500','#FFFFFF','#FFB347','#F5D78E','#FF8C00',
  '#FFE066','#FFCBA4','#FF7F00',
];
const BURST_PALETTE = [
  '#FF6B8A','#FF4466','#FFB347','#C9A447','#F5D78E',
  '#FF69B4','#FFFFFF','#FF8C00','#E8E8E8','#FF3366',
];

/* ══════════════════════════════════════════════════════════
   1. FIREWORKS ENGINE
══════════════════════════════════════════════════════════ */
class FireworksEngine {
  constructor() {
    this.canvas  = document.createElement('canvas');
    this.canvas.id = 'fireworksCanvas';
    this.canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(this.canvas);
    this.ctx     = this.canvas.getContext('2d');
    this.rockets = [];
    this.particles = [];
    this.running = false;
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
  }

  resize() {
    this.W = this.canvas.width  = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
  }

  /* Launch one rocket from the given side ('left'|'right') */
  launchRocket(side) {
    const W = this.W, H = this.H;
    // Start from top-left or top-right corner area
    const x  = side === 'left'
      ? rand(0, W * 0.15)
      : rand(W * 0.85, W);
    const y  = H; // launch from bottom
    const tx = rand(W * 0.2, W * 0.8); // target x
    const ty = rand(H * 0.05, H * 0.35); // target y — top 5-35% of screen
    const dist = Math.hypot(tx - x, ty - y);
    const speed = rand(14, 20);
    const vx = (tx - x) / dist * speed;
    const vy = (ty - y) / dist * speed;
    this.rockets.push({ x, y, tx, ty, vx, vy, trail: [], color: pick(BURST_PALETTE) });
  }

  /* Fire a paired left+right salvo */
  fireSalvo(count = 2) {
    const isMob = window.matchMedia('(max-width:600px)').matches;
    const rockets = isMob ? Math.max(1, Math.floor(count / 2)) : count;
    for (let i = 0; i < rockets; i++) {
      setTimeout(() => {
        this.launchRocket('left');
        this.launchRocket('right');
        // removed random 3rd rocket — was adding too much
      }, i * rand(120, 340));
    }
  }

  /* Explode a rocket into particles */
  explode(x, y, color) {
    const count = randInt(45, 70);  // was 90-140 — halved
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rand(-0.2, 0.2);
      const speed = rand(1.5, 9);
      const c     = Math.random() > 0.3 ? pick(BURST_PALETTE) : pick(GOLD_PALETTE);
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: c,
        size: rand(2, 5.5),
        gravity: rand(0.02, 0.07),
        decay:   rand(0.004, 0.008),
        twinkle: Math.random() > 0.6,
      });
    }
    // Gold glitter ring — reduced from 30 to 12
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const speed = rand(0.5, 3);
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: pick(GOLD_PALETTE),
        size: rand(1, 2.5),
        gravity: rand(0.008, 0.025),
        decay:   rand(0.003, 0.006),
        twinkle: true,
      });
    }
  }

  /* Main animation loop */
  tick() {
    if (!this.running) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.W, this.H);

    /* Update & draw rockets */
    this.rockets = this.rockets.filter(r => {
      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 12) r.trail.shift();
      r.x += r.vx;
      r.y += r.vy;
      r.vy += 0.25; // gravity

      /* Draw trail */
      r.trail.forEach((pt, i) => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2 * (i / r.trail.length), 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.globalAlpha = (i / r.trail.length) * 0.6;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      /* Check if reached target */
      const atTarget = r.vy >= 0 || Math.hypot(r.x - r.tx, r.y - r.ty) < 18;
      if (atTarget) {
        this.explode(r.x, r.y, r.color);
        return false;
      }
      return true;
    });

    /* Update & draw particles */
    this.particles = this.particles.filter(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.alpha -= p.decay;
      if (p.alpha <= 0) return false;

      const alpha = p.twinkle
        ? p.alpha * (0.5 + 0.5 * Math.sin(Date.now() * 0.015))
        : p.alpha;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.fill();
      ctx.globalAlpha = 1;
      return true;
    });

    requestAnimationFrame(() => this.tick());
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.tick();
  }

  stop() {
    this.running = false;
  }

  /* Schedule automatic periodic salvos */
  scheduleAuto() {
    const isMob = window.matchMedia('(max-width:600px)').matches;
    // First burst after 1.2s
    setTimeout(() => { this.start(); this.fireSalvo(isMob ? 1 : 2); }, 1200);
    // Then every 10-16 seconds — was 6-10s, too frequent
    const repeat = () => {
      this.fireSalvo(isMob ? 1 : randInt(1, 2));
      setTimeout(repeat, rand(10000, 16000));
    };
    setTimeout(repeat, rand(11000, 16000));
  }
}

/* ══════════════════════════════════════════════════════════
   2. FALLING PETALS  (main page, outside gate)
══════════════════════════════════════════════════════════ */
const PETALS = ['🌸','🌺','🌹','🌼','✿','❀','🌷'];
const GOLD_SPARKLES = ['✦','✧','⋆','✵','✶'];

const ON_MOBILE_PETALS = window.matchMedia('(max-width:600px)').matches;

function spawnPagePetal() {
  // Skip if gate is still visible
  if (document.getElementById('gateOverlay') &&
      !document.getElementById('gateOverlay').classList.contains('gone')) return;

  const el   = document.createElement('span');
  const isGold = Math.random() > 0.65;
  el.className = 'page-petal';
  el.textContent = isGold ? pick(GOLD_SPARKLES) : pick(PETALS);
  /* Mobile: only spawn from left edge (0-10%) or right edge (90-100%) */
  const leftPos = ON_MOBILE_PETALS
    ? (Math.random() > 0.5 ? rand(0, 10) : rand(90, 100))
    : rand(0, 100);
  el.style.cssText = `
    left: ${leftPos}vw;
    font-size: ${ON_MOBILE_PETALS ? rand(0.5, 0.85) : rand(0.7, 1.4)}rem;
    animation-duration: ${rand(6, 14)}s;
    animation-delay: ${rand(0, 1)}s;
    --drift: ${rand(-80, 80)}px;
    opacity: ${ON_MOBILE_PETALS ? rand(0.2, 0.45) : rand(0.5, 1)};
    color: ${isGold ? pick(GOLD_PALETTE) : ''};
  `;
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove(), { once: true });
}

function initPagePetals() {
  const onMobile = window.matchMedia('(max-width:600px)').matches;
  setInterval(spawnPagePetal, onMobile ? 5000 : 2500);
  // Seed just a couple on load
  const seedCount = onMobile ? 1 : 2;
  for (let i = 0; i < seedCount; i++) setTimeout(spawnPagePetal, i * 200);
}

/* ══════════════════════════════════════════════════════════
   3. HERO AMBIENT SPARKLES
══════════════════════════════════════════════════════════ */
function initHeroSparkles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const SYMS = ['✦','✧','⋆','✵','✶','·','°'];
  const count = window.innerWidth < 640 ? 8 : 16;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'hero-sparkle';
    el.textContent = pick(SYMS);
    el.style.cssText = `
      left: ${rand(2, 98)}%;
      top:  ${rand(5, 90)}%;
      animation-duration: ${rand(2.5, 5.5)}s;
      animation-delay:    ${rand(0, 4)}s;
      font-size: ${rand(0.5, 1.1)}rem;
      opacity: 0;
    `;
    hero.appendChild(el);
  }
}

/* ══════════════════════════════════════════════════════════
   4. HERO CORNER FOUNTAINS
   Two continuous sparkler fountains at hero bottom corners
══════════════════════════════════════════════════════════ */
class HeroFountain {
  constructor() {
    this.hero = document.querySelector('.hero');
    if (!this.hero) return;
    this.particles = [];
    this.frame     = 0;
    this.active    = false;
    this.leftCanvas  = this._makeCanvas('left');
    this.rightCanvas = this._makeCanvas('right');
    this._resize();
    window.addEventListener('resize', () => this._resize(), { passive: true });

    // Pause when hero scrolls out of view
    const io = new IntersectionObserver(entries => {
      this.visible = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    io.observe(this.hero);
    this.visible = true;
  }

  _makeCanvas(side) {
    const c = document.createElement('canvas');
    c.setAttribute('aria-hidden', 'true');
    c.style.cssText = `position:absolute;bottom:0;${side}:0;pointer-events:none;z-index:4;`;
    this.hero.appendChild(c);
    return c;
  }

  _resize() {
    if (!this.hero) return;
    const h = this.hero.offsetHeight;
    const W = 260;
    [this.leftCanvas, this.rightCanvas].forEach(c => {
      c.width  = W;
      c.height = h;
      c.style.width  = W + 'px';
      c.style.height = h + 'px';
    });
  }

  _emit(canvas, side) {
    // Pulse pattern: 30 frames on, 15 off
    const pulse = (this.frame % 45) < 30;
    const count = pulse ? randInt(5, 10) : randInt(0, 2);
    const W = canvas.width;
    const H = canvas.height;
    // Origin: bottom corner
    const ox = side === 'left' ? 0 : W;

    for (let i = 0; i < count; i++) {
      // Fan mostly upward, biased inward toward the hero centre
      const vx = side === 'left'
        ? rand(-1, 7)    // left corner: sparks go right (inward) and up
        : rand(-7, 1);   // right corner: sparks go left (inward) and up
      const vy = rand(-18, -26);  // strong upward push

      this.particles.push({
        canvas,
        x: ox + rand(-4, 4),
        y: H,
        vx, vy,
        gravity: rand(0.22, 0.38),
        life:    1,
        decay:   rand(0.006, 0.011),
        size:    rand(1.5, 3.2),
        color:   pick(FIRECRACKER_PALETTE),
        glow:    Math.random() > 0.5,
      });
    }
  }

  _tick() {
    if (!this.active) return;

    // Clear both canvases each frame
    [this.leftCanvas, this.rightCanvas].forEach(c =>
      c.getContext('2d').clearRect(0, 0, c.width, c.height)
    );

    if (this.visible) {
      this._emit(this.leftCanvas,  'left');
      this._emit(this.rightCanvas, 'right');
    }

    this.particles = this.particles.filter(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += p.gravity;
      p.life -= p.decay;
      if (p.life <= 0 || p.y > p.canvas.height + 10) return false;

      const ctx = p.canvas.getContext('2d');
      if (p.glow) {
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 8;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle   = p.color;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur  = 0;
      return true;
    });

    this.frame++;
    requestAnimationFrame(() => this._tick());
  }

  start() {
    if (this.active || !this.hero) return;
    this.active = true;
    this._tick();
  }
}

/* ══════════════════════════════════════════════════════════
   5. GATE EXIT HOOK — fire fireworks when gate opens
══════════════════════════════════════════════════════════ */
function hookGateExit(fw) {
  const btn = document.getElementById('gateEnterBtn');
  const isMob = window.matchMedia('(max-width:600px)').matches;
  if (!btn) return;
  btn.addEventListener('click', () => {
    fw.start();
    fw.fireSalvo(isMob ? 1 : 2);  // was 4
  }, { once: true });
  const overlay = document.getElementById('gateOverlay');
  if (!overlay) return;
  const observer = new MutationObserver(() => {
    if (overlay.classList.contains('gone') || overlay.style.display === 'none') {
      fw.start();
      fw.fireSalvo(isMob ? 1 : 2);  // was 3
      observer.disconnect();
    }
  });
  observer.observe(overlay, { attributes: true, attributeFilter: ['class','style'] });
}

function hookFountain(fountain) {
  if (!fountain.hero) return;
  const btn     = document.getElementById('gateEnterBtn');
  const overlay = document.getElementById('gateOverlay');

  const activate = () => fountain.start();

  // Trigger on Enter button click
  btn && btn.addEventListener('click', activate, { once: true });

  // Also trigger when gate overlay gets 'gone' class
  if (overlay) {
    const obs = new MutationObserver(() => {
      if (overlay.classList.contains('gone') || overlay.style.display === 'none') {
        activate();
        obs.disconnect();
      }
    });
    obs.observe(overlay, { attributes: true, attributeFilter: ['class','style'] });
  }
}

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Respect reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const fw       = new FireworksEngine();
  const fountain  = new HeroFountain();

  fw.scheduleAuto();
  hookGateExit(fw);
  hookFountain(fountain);

  initPagePetals();
  initHeroSparkles();
});
