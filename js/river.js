/**
 * river.js — "River of Time" ambient engine
 * Caustic shimmer · floating petals · Web Audio water · CTA ripple
 */

/* ═══════════════════════════════════════════════════════════════
   1. CAUSTIC SHIMMER  (canvas golden light on water)
═══════════════════════════════════════════════════════════════ */
function initCaustics() {
  const canvas = document.getElementById('rotCaustics');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, spots;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildSpots();
  }

  function buildSpots() {
    const n = Math.min(22, Math.floor(W / 55));
    spots = Array.from({ length: n }, (_, i) => ({
      x:  (W / n) * i + (W / n) * 0.5,
      y:  H * 0.52 + Math.random() * H * 0.38,
      r:  30 + Math.random() * 70,
      a:  Math.random() * Math.PI * 2,
      sa: 0.0006 + Math.random() * 0.0012,   /* angular drift speed */
      da: 0.3    + Math.random() * 0.9,       /* radial drift amplitude */
      op: 0.04   + Math.random() * 0.10,
    }));
  }

  function draw(ts) {
    ctx.clearRect(0, 0, W, H);
    spots.forEach(s => {
      s.a += s.sa;
      const cx = s.x + Math.sin(s.a * 1.3) * s.r * s.da;
      const cy = s.y + Math.cos(s.a * 0.9) * s.r * 0.45;
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, s.r);
      grd.addColorStop(0,   `rgba(212,175,55,${s.op})`);
      grd.addColorStop(0.4, `rgba(212,175,55,${s.op * 0.5})`);
      grd.addColorStop(1,   'rgba(212,175,55,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
}

/* ═══════════════════════════════════════════════════════════════
   2. FLOATING PETALS  (JS-generated DOM elements)
═══════════════════════════════════════════════════════════════ */
const PETAL_COLORS = [
  'rgba(230,230,250,.55)',   /* lavender */
  'rgba(255,255,240,.50)',   /* ivory */
  'rgba(212,175,55, .40)',   /* gold */
  'rgba(230,200,220,.45)',   /* blush */
  'rgba(200,180,240,.48)',   /* soft purple */
];

function initPetals() {
  const container = document.getElementById('rotPetals');
  if (!container) return;

  const count = window.innerWidth < 600 ? 10 : 18;

  for (let i = 0; i < count; i++) {
    const el   = document.createElement('div');
    el.className = 'rot-petal';

    const w    = 6  + Math.random() * 12;
    const dur  = 14 + Math.random() * 24;
    const del  = -(Math.random() * dur);        /* negative = already mid-flight */
    const left = Math.random() * 100;
    const drift= (Math.random() - 0.5) * 160;
    const color= PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];

    Object.assign(el.style, {
      width:           `${w}px`,
      height:          `${w * (0.55 + Math.random() * 0.35)}px`,
      left:            `${left}%`,
      background:      color,
      animationDuration:  `${dur}s`,
      animationDelay:     `${del}s`,
      '--drift':          `${drift}px`,
      transform:       `rotate(${Math.random() * 360}deg)`,
    });

    container.appendChild(el);
  }
}

/* ═══════════════════════════════════════════════════════════════
   3. WEB AUDIO — ambient river sound (generated, no file needed)
═══════════════════════════════════════════════════════════════ */
let audioCtx = null, gainNode = null, playing = false;

function buildAudio() {
  if (audioCtx) return;
  audioCtx  = new (window.AudioContext || window.webkitAudioContext)();
  gainNode  = audioCtx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(audioCtx.destination);

  /* Brown noise (river rumble base) */
  const bufSize = audioCtx.sampleRate * 4;
  const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < bufSize; i++) {
    const w = (Math.random() * 2 - 1);
    last = (last + 0.02 * w) / 1.02;
    data[i] = last * 3.5;   /* amplify a bit */
  }
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  src.loop   = true;

  /* Low-pass filter — keeps it soft, removes harshness */
  const lpf = audioCtx.createBiquadFilter();
  lpf.type            = 'lowpass';
  lpf.frequency.value = 440;
  lpf.Q.value         = 0.5;

  /* Soft high-shelf for shimmer */
  const hpf = audioCtx.createBiquadFilter();
  hpf.type            = 'highshelf';
  hpf.frequency.value = 2800;
  hpf.gain.value      = -12;

  src.connect(lpf).connect(hpf).connect(gainNode);
  src.start();
}

function toggleSound() {
  const btn = document.getElementById('rotSound');

  if (!audioCtx) buildAudio();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  playing = !playing;
  const now = audioCtx.currentTime;
  gainNode.gain.cancelScheduledValues(now);
  gainNode.gain.setValueAtTime(gainNode.gain.value, now);
  gainNode.gain.linearRampToValueAtTime(playing ? 0.32 : 0, now + 1.5);

  btn.classList.toggle('muted', !playing);
  btn.setAttribute('aria-label',
    playing ? 'Mute ambient water sound' : 'Play ambient water sound');
}

/* ═══════════════════════════════════════════════════════════════
   4. CTA BUTTON RIPPLE
═══════════════════════════════════════════════════════════════ */
function initCtaRipple() {
  const cta    = document.getElementById('rotCta');
  const ripple = document.getElementById('rotCtaRipple');
  if (!cta || !ripple) return;

  cta.addEventListener('click', e => {
    /* Position ripple at click point within button */
    const rect = cta.getBoundingClientRect();
    const x = e.clientX - rect.left - 5;
    const y = e.clientY - rect.top  - 5;
    Object.assign(ripple.style, { left: `${x}px`, top: `${y}px` });
    ripple.classList.remove('splash');
    /* force reflow so animation restarts */
    void ripple.offsetWidth;
    ripple.classList.add('splash');
  });
}

/* ═══════════════════════════════════════════════════════════════
   5. INIT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCaustics();
  initPetals();
  initCtaRipple();
  document.getElementById('rotSound')
    ?.addEventListener('click', toggleSound);
});
