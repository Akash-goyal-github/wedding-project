/* ============================================================
   gate.js — Palace Gate Entrance Logic
   शुभ विवाह · Ganesh Ji · Shehnai · Marigold toran
============================================================ */

'use strict';

(function initGate() {
  const overlay   = document.getElementById('gateOverlay');
  const gateLeft  = document.getElementById('gateLeft');
  const gateRight = document.getElementById('gateRight');
  const enterBtn  = document.getElementById('gateEnterBtn');
  const cdEl      = document.getElementById('gateCountdown');
  const petalsCt  = document.getElementById('petalsContainer');
  const coupleEl  = document.getElementById('gateCouple');
  const ganeshEl  = document.getElementById('gateGanesh');
  const garlandEl = document.getElementById('gateGarland');

  if (!overlay) return;

  /* ══ GANESH JI SVG ═══════════════════════════════════════════
     Design principle: SOLID fills on dark bg. No muddy opacities.
     Gold (#C9A447) body, light gold (#F5D78E) highlights.
     ViewBox 0 0 160 200 — proportions carefully matched.
  ══════════════════════════════════════════════════════════════ */
  if (ganeshEl) {
    ganeshEl.innerHTML = `
<!-- Mobile शुभ विवाह — compact 3D gold SVG, no swirls -->
<svg class="ganesh-shubh-mobile" viewBox="0 0 500 190" overflow="visible"
     xmlns="http://www.w3.org/2000/svg" aria-label="शुभ विवाह" role="img">
  <defs>
    <linearGradient id="mvGold" x1="0" y1="28" x2="0" y2="128" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#FFFDE0"/>
      <stop offset="25%"  stop-color="#F5D78E"/>
      <stop offset="55%"  stop-color="#C9A447"/>
      <stop offset="100%" stop-color="#F5D78E"/>
    </linearGradient>
    <linearGradient id="mvHigh" x1="0" y1="28" x2="0" y2="88" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="#fff" stop-opacity=".5"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <filter id="mvSparkle" x="-5%" y="-10%" width="110%" height="135%">
      <feTurbulence type="fractalNoise" baseFrequency=".80 .70" numOctaves="3" seed="7" result="n"/>
      <feColorMatrix values="0 0 0 0 1  0 0 0 0 .82  0 0 0 0 .05  0 0 0 26 -10" in="n" result="g"/>
      <feComposite in="g" in2="SourceGraphic" operator="in" result="m"/>
      <feBlend in="SourceGraphic" in2="m" mode="screen"/>
    </filter>
  </defs>
  <text font-family="'Yatra One','Noto Serif Devanagari',serif" font-size="93" text-anchor="middle" x="254" y="118" fill="#120100">शुभ विवाह</text>
  <text font-family="'Yatra One','Noto Serif Devanagari',serif" font-size="93" text-anchor="middle" x="253" y="117" fill="#3D0900">शुभ विवाह</text>
  <text font-family="'Yatra One','Noto Serif Devanagari',serif" font-size="93" text-anchor="middle" x="252" y="116" fill="#8C3C00">शुभ विवाह</text>
  <text font-family="'Yatra One','Noto Serif Devanagari',serif" font-size="93" text-anchor="middle" x="251" y="115" fill="#CA8020">शुभ विवाह</text>
  <text font-family="'Yatra One','Noto Serif Devanagari',serif" font-size="93" text-anchor="middle"
        x="250" y="114" fill="url(#mvGold)" filter="url(#mvSparkle)">शुभ विवाह</text>
  <text font-family="'Yatra One','Noto Serif Devanagari',serif" font-size="93" text-anchor="middle"
        x="250" y="114" fill="url(#mvHigh)">शुभ विवाह</text>
</svg>
<svg viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg"
     aria-hidden="true" class="ganesh-svg">
  <!-- ── Aura ── -->
  <ellipse cx="100" cy="112" rx="92" ry="108"
           fill="#C9A447" opacity="0.07"/>

  <!-- ── Lotus seat ── -->
  <path d="M36,220 Q68,204 100,202 Q132,204 164,220"
        fill="#C9A447" stroke="#F5D78E" stroke-width="1"/>
  <path d="M26,226 Q62,212 100,210 Q138,212 174,226"
        fill="#9A7010" stroke="#C9A447" stroke-width=".8" opacity=".7"/>

  <!-- ── Body ── -->
  <ellipse cx="100" cy="172" rx="54" ry="44"
           fill="#C9A447" stroke="#F5D78E" stroke-width="1.5"/>
  <!-- Navel -->
  <circle cx="100" cy="184" r="5.5" fill="#0B011A" stroke="#F5D78E" stroke-width="1"/>
  <circle cx="100" cy="184" r="2.5" fill="#F5D78E"/>
  <!-- Yagnopavita -->
  <path d="M58,168 Q80,186 100,183 Q120,186 142,168"
        stroke="#F5D78E" stroke-width="1.4" fill="none" opacity=".65"/>

  <!-- ── Upper arms (behind ears/head) ── -->
  <line x1="50" y1="118" x2="14" y2="80"
        stroke="#C9A447" stroke-width="9" stroke-linecap="round"/>
  <line x1="150" y1="118" x2="186" y2="80"
        stroke="#C9A447" stroke-width="9" stroke-linecap="round"/>
  <!-- Axe in left hand -->
  <circle cx="11" cy="76" r="8"  fill="#C9A447" stroke="#F5D78E" stroke-width="1.2"/>
  <line   x1="11" y1="68" x2="11" y2="54" stroke="#F5D78E" stroke-width="2.5"/>
  <path   d="M5,54 L11,44 L17,54Z" fill="#F5D78E"/>
  <!-- Lotus in right hand -->
  <circle cx="189" cy="76" r="8"  fill="#C9A447" stroke="#F5D78E" stroke-width="1.2"/>
  <circle cx="189" cy="74" r="4.5" fill="#F5D78E" opacity=".75"/>
  <circle cx="189" cy="73" r="2"   fill="#FFFDE0"/>

  <!-- ── Ears ── -->
  <ellipse cx="26"  cy="92" rx="34" ry="44"
           fill="#C9A447" stroke="#F5D78E" stroke-width="1.4"/>
  <ellipse cx="26"  cy="94" rx="20" ry="28" fill="#0B011A" opacity=".32"/>
  <circle  cx="-1"  cy="112" r="7"  fill="#DAA838" stroke="#F5D78E" stroke-width="1"/>
  <circle  cx="-1"  cy="112" r="3"  fill="#FFFDE0"/>

  <ellipse cx="174" cy="92" rx="34" ry="44"
           fill="#C9A447" stroke="#F5D78E" stroke-width="1.4"/>
  <ellipse cx="174" cy="94" rx="20" ry="28" fill="#0B011A" opacity=".32"/>
  <circle  cx="201" cy="112" r="7"  fill="#DAA838" stroke="#F5D78E" stroke-width="1"/>
  <circle  cx="201" cy="112" r="3"  fill="#FFFDE0"/>

  <!-- ── Head ── -->
  <circle cx="100" cy="92" r="52"
          fill="#C9A447" stroke="#F5D78E" stroke-width="1.5"/>

  <!-- ── Crown (Mukut) ── -->
  <rect x="58" y="42" width="84" height="14" rx="5"
        fill="#F5D78E" stroke="#C9A447" stroke-width=".8"/>
  <path d="M74,42 Q100,10 126,42Z"  fill="#F5D78E" stroke="#C9A447" stroke-width=".8"/>
  <path d="M60,42 Q70,24 80,42Z"   fill="#F5D78E" stroke="#C9A447" stroke-width=".6"/>
  <path d="M120,42 Q130,24 140,42Z" fill="#F5D78E" stroke="#C9A447" stroke-width=".6"/>
  <!-- Crown gems -->
  <circle cx="100" cy="18" r="7"   fill="#FFFDE0" stroke="#C9A447" stroke-width=".8"/>
  <circle cx="100" cy="18" r="3.5" fill="#C9A447"/>
  <circle cx="70"  cy="49" r="5"   fill="#FFFDE0" stroke="#C9A447" stroke-width=".6"/>
  <circle cx="100" cy="48" r="6"   fill="#FFFDE0" stroke="#C9A447" stroke-width=".6"/>
  <circle cx="130" cy="49" r="5"   fill="#FFFDE0" stroke="#C9A447" stroke-width=".6"/>
  <!-- Hanging chains -->
  <line x1="60"  y1="54" x2="50"  y2="68" stroke="#C9A447" stroke-width="1.2"/>
  <circle cx="48" cy="70" r="4"   fill="#DAA838" stroke="#F5D78E" stroke-width=".8"/>
  <line x1="140" y1="54" x2="150" y2="68" stroke="#C9A447" stroke-width="1.2"/>
  <circle cx="152" cy="70" r="4"  fill="#DAA838" stroke="#F5D78E" stroke-width=".8"/>

  <!-- ── Eyes ── -->
  <ellipse cx="72"  cy="84" rx="9" ry="11" fill="#0B011A" stroke="#F5D78E" stroke-width=".8"/>
  <ellipse cx="72"  cy="81" rx="5" ry="4"  fill="#F5D78E" opacity=".50"/>
  <circle  cx="72"  cy="85" r="3.5" fill="#0B011A"/>
  <circle  cx="73"  cy="84" r="1.4" fill="white"  opacity=".65"/>

  <ellipse cx="128" cy="84" rx="9" ry="11" fill="#0B011A" stroke="#F5D78E" stroke-width=".8"/>
  <ellipse cx="128" cy="81" rx="5" ry="4"  fill="#F5D78E" opacity=".50"/>
  <circle  cx="128" cy="85" r="3.5" fill="#0B011A"/>
  <circle  cx="129" cy="84" r="1.4" fill="white"  opacity=".65"/>

  <!-- Tilak -->
  <ellipse cx="100" cy="68" rx="6.5" ry="3" fill="#CC2200"/>

  <!-- ── Trunk (right-curling = auspicious) ── -->
  <path d="M100,136 C88,146 72,152 58,163
            C44,174 40,188 46,197
            C52,206 66,203 72,195
            C76,189 73,180 80,175"
        stroke="#C9A447" stroke-width="11"
        fill="none" stroke-linecap="round"/>
  <path d="M100,136 C88,146 72,152 58,163
            C44,174 40,188 46,197
            C52,206 66,203 72,195
            C76,189 73,180 80,175"
        stroke="#F5D78E" stroke-width="4"
        fill="none" stroke-linecap="round" opacity=".28"/>
  <!-- Modak -->
  <ellipse cx="80" cy="175" rx="13" ry="10"
           fill="#DAA838" stroke="#F5D78E" stroke-width="1"/>
  <ellipse cx="80" cy="171" rx="7.5" ry="4.5"
           fill="#F5D78E" opacity=".55"/>

  <!-- ── Lower arms ── -->
  <path d="M50,140 C34,154 28,168 32,180"
        stroke="#C9A447" stroke-width="9"
        fill="none" stroke-linecap="round"/>
  <circle cx="33" cy="183" r="9"  fill="#C9A447" stroke="#F5D78E" stroke-width="1"/>
  <circle cx="33" cy="183" r="5" fill="#0B011A"/>
  <circle cx="33" cy="183" r="2" fill="#F5D78E"/>

  <path d="M150,140 C166,154 172,168 168,180"
        stroke="#C9A447" stroke-width="9"
        fill="none" stroke-linecap="round"/>
  <circle cx="167" cy="183" r="9"  fill="#C9A447" stroke="#F5D78E" stroke-width="1"/>
  <line x1="161" y1="190" x2="159" y2="197" stroke="#F5D78E" stroke-width="1.3" stroke-linecap="round"/>
  <line x1="166" y1="191" x2="165" y2="198" stroke="#F5D78E" stroke-width="1.3" stroke-linecap="round"/>
  <line x1="171" y1="191" x2="171" y2="197" stroke="#F5D78E" stroke-width="1.3" stroke-linecap="round"/>
  <line x1="175" y1="190" x2="176" y2="196" stroke="#F5D78E" stroke-width="1.3" stroke-linecap="round"/>
</svg>`;
  }

  /* ══ SHEHNAI SVG ═════════════════════════════════════════════ */
  const SHEHNAI_SVG = `<svg viewBox="0 0 46 132" fill="none"
    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="23" cy="6"   rx="3.5" ry="5.5" fill="#C9A447" opacity="0.65"/>
  <ellipse cx="23" cy="12"  rx="2.5" ry="3.5" fill="#F5D78E" opacity="0.42"/>
  <path d="M19,15 Q12,50 6,102 Q18,110 34,102 Q37,70 28,15 Z"
        fill="#C9A447" opacity="0.48" stroke="#F5D78E" stroke-width="0.8"/>
  <ellipse cx="23" cy="40"  rx="8"  ry="2"   stroke="#F5D78E" fill="none" opacity="0.50"/>
  <ellipse cx="23" cy="64"  rx="12" ry="2.5" stroke="#F5D78E" fill="none" opacity="0.45"/>
  <ellipse cx="23" cy="88"  rx="16" ry="3"   stroke="#F5D78E" fill="none" opacity="0.40"/>
  <ellipse cx="23" cy="105" rx="20" ry="6.5" fill="#C9A447" opacity="0.55"/>
  <line x1="9"  y1="110" x2="5"  y2="124" stroke="#F5D78E" stroke-width="1.3" opacity="0.40"/>
  <line x1="23" y1="113" x2="21" y2="128" stroke="#F5D78E" stroke-width="1.3" opacity="0.40"/>
  <line x1="37" y1="110" x2="41" y2="124" stroke="#F5D78E" stroke-width="1.3" opacity="0.40"/>
  <circle cx="5"  cy="126" r="2.2" fill="#F5D78E" opacity="0.40"/>
  <circle cx="21" cy="130" r="2.2" fill="#F5D78E" opacity="0.40"/>
  <circle cx="41" cy="126" r="2.2" fill="#F5D78E" opacity="0.40"/>
</svg>`;
  document.querySelectorAll('.gate-shehnai').forEach(el => { el.innerHTML = SHEHNAI_SVG; });

  /* ══ MARIGOLD GARLAND — responsive, no stretching ════════════ */
  function buildGarland(container) {
    if (!container) return;

    /* — Mixed-colour marigold: lavender outer · gold mid · pearl inner (all flowers identical) — */
    function flower(cx, cy, r) {
      let s = '';
      const R = r + 2;
      const cr = Math.max(4, r * 0.38);
      /* Layer 1 — 12 golden outer petals */
      for (let i = 0; i < 12; i++)
        s += `<ellipse cx="${cx}" cy="${cy-R}" rx="3" ry="${R-1}" fill="#C9A447" opacity="0.93" transform="rotate(${i*30} ${cx} ${cy})"/>`;
      /* Layer 2 — 12 deeper-gold petals offset 15° */
      for (let i = 0; i < 12; i++)
        s += `<ellipse cx="${cx}" cy="${cy-R+3}" rx="2.6" ry="${R-4}" fill="#DAA838" opacity="0.88" transform="rotate(${i*30+15} ${cx} ${cy})"/>`;
      /* Layer 3 — 10 golden mid petals */
      for (let i = 0; i < 10; i++)
        s += `<ellipse cx="${cx}" cy="${cy-r+1}" rx="2.2" ry="${r-3}" fill="#C9A447" opacity="0.90" transform="rotate(${i*36} ${cx} ${cy})"/>`;
      /* Layer 4 — 8 pearl-white innermost petals */
      for (let i = 0; i < 8; i++)
        s += `<ellipse cx="${cx}" cy="${cy-r+4}" rx="1.8" ry="${r-6}" fill="#F5F0FF" opacity="0.88" transform="rotate(${i*45+22} ${cx} ${cy})"/>`;
      /* Tip shimmer — soft gold glow on outer edges */
      for (let i = 0; i < 12; i++)
        s += `<ellipse cx="${cx}" cy="${cy-R+1}" rx="1.2" ry="3" fill="#F5D78E" opacity="0.42" transform="rotate(${i*30} ${cx} ${cy})"/>`;
      /* Center: deep purple → gold → cream → white specular */
      s += `<circle cx="${cx}" cy="${cy}" r="${cr}"        fill="#4527A0"/>`;
      s += `<circle cx="${cx}" cy="${cy}" r="${cr*0.65}"   fill="#C9A447"/>`;
      s += `<circle cx="${cx}" cy="${cy}" r="${cr*0.34}"   fill="#FFFDE0"/>`;
      s += `<circle cx="${cx-cr*0.28}" cy="${cy-cr*0.28}" r="${cr*0.16}" fill="white" opacity="0.42"/>`;
      return s;
    }

    /* Leaf height scales with flower size — proportional on all screen sizes */
    function leaf(cx, cy, h) {
      const w = h * 0.42;
      return (
        `<path d="M${cx},${cy} C${cx-w},${cy+h*0.30} ${cx-w*0.55},${cy+h*0.80} ${cx},${cy+h} C${cx+w*0.55},${cy+h*0.80} ${cx+w},${cy+h*0.30} ${cx},${cy}Z" fill="#2A6B1A" opacity="0.90"/>` +
        `<path d="M${cx},${cy} C${cx-w*0.15},${cy+h*0.38} ${cx-w*0.08},${cy+h*0.72} ${cx},${cy+h}" stroke="#81C784" stroke-width="0.9" fill="none" opacity="0.50"/>` +
        `<path d="M${cx},${cy+h*0.30} L${cx-w*0.52},${cy+h*0.52}" stroke="#4CAF50" stroke-width="0.5" fill="none" opacity="0.38"/>` +
        `<path d="M${cx},${cy+h*0.54} L${cx+w*0.52},${cy+h*0.74}" stroke="#4CAF50" stroke-width="0.5" fill="none" opacity="0.38"/>`
      );
    }

    function render() {
      /* Build SVG at exact container dimensions → preserveAspectRatio="none" is safe */
      const W = Math.max(container.clientWidth  || 320, 280);
      const H = Math.max(container.clientHeight || 100, 60);
      const topY = H * 0.18, droop = H * 0.52;
      const nSeg = Math.max(6, Math.floor(W / 88));
      const xs = Array.from({length: nSeg + 1}, (_, i) => Math.round(i * W / nSeg));
      const fy = x => topY + droop * 4 * (x / W) * (1 - x / W);

      /* smooth rope via quadratic beziers */
      let ropeD = `M0,${fy(0).toFixed(1)}`;
      for (let i = 1; i < xs.length; i++) {
        const mx = (xs[i-1] + xs[i]) / 2;
        ropeD += ` Q${mx},${fy(mx).toFixed(1)} ${xs[i]},${fy(xs[i]).toFixed(1)}`;
      }

      let svg = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">`;
      svg += `<path d="${ropeD}" stroke="#8B6914" stroke-width="3" opacity="0.72"/>`;
      const leafH = Math.round(H * 0.30);
      const florR = Math.round(H * 0.14);
      xs.forEach((x, i) => {
        if (i === 0 || i === xs.length - 1) return;
        svg += (i % 2 !== 0) ? leaf(x, fy(x), leafH) : flower(x, fy(x), florR);
      });
      svg += '</svg>';
      container.innerHTML = svg;
    }

    render();
    /* Rebuild on resize so flowers always match container */
    const ro = new ResizeObserver(render);
    ro.observe(container);
  }
  buildGarland(garlandEl);

  /* ══ PETAL ENGINE ════════════════════════════════════════════ */
  const PETAL_VARIANTS = [
    { bg:'#F5D78E', w:12, h:20, br:'80% 0 80% 0',     op:0.82 },
    { bg:'#C9A447', w:10, h:18, br:'60% 0 60% 0',     op:0.70 },
    { bg:'#F0C845', w:14, h:22, br:'80% 20% 60% 20%', op:0.75 },
    { bg:'#DAA520', w: 9, h:16, br:'50% 10% 50% 10%', op:0.65 },
    { bg:'#E8D8FF', w:13, h:21, br:'80% 0 80% 0',     op:0.55 },
    { bg:'#D4B8F8', w:11, h:17, br:'60% 20% 60% 20%', op:0.50 },
    { bg:'#FFF0D8', w:10, h:18, br:'80% 0 80% 0',     op:0.60 },
  ];
  function createPetal(fast) {
    const v = PETAL_VARIANTS[Math.floor(Math.random()*PETAL_VARIANTS.length)];
    const el = document.createElement('div');
    el.className = 'petal-css';
    el.setAttribute('aria-hidden','true');
    const dur  = fast ? (1.5+Math.random()*2) : (5+Math.random()*7);
    const dly  = fast ? (Math.random()*1.5)    : (Math.random()*10);
    const sc   = 0.7 + Math.random()*0.8;
    /* Mobile: petals fall only from left/right edges (0-10% or 90-100%) */
    const isMob = window.matchMedia('(max-width:600px)').matches;
    const leftPos = isMob
      ? (Math.random() > 0.5 ? Math.random()*10 : 90+Math.random()*10)
      : Math.random()*100;
    el.style.cssText = [
      `left:${leftPos}%`,
      `width:${v.w*sc}px`, `height:${v.h*sc}px`,
      `background:${v.bg}`, `border-radius:${v.br}`, `opacity:${v.op}`,
      `transform:rotate(${Math.random()*360}deg)`,
      `animation-duration:${dur}s`, `animation-delay:${dly}s`,
      `--drift:${(Math.random()-.5)*120}px`,
      `filter:blur(${Math.random()>.7?'.5px':'0px'})`,
    ].join(';');
    return el;
  }
  function spawnPetals(n,fast) {
    if (!petalsCt) return;
    const f=document.createDocumentFragment();
    for(let i=0;i<n;i++) f.appendChild(createPetal(fast));
    petalsCt.appendChild(f);
  }
  const isMobileScreen = window.matchMedia('(max-width:600px)').matches;
  spawnPetals(isMobileScreen ? 3 : 10, false);

  /* ══ OPEN GATES ══════════════════════════════════════════════ */
  let opened = false;

  function openGates() {
    if (opened) return;
    opened = true;

    if (gateLeft)  gateLeft.classList.add('open');
    if (gateRight) gateRight.classList.add('open');

    /* Ganesh ascends and fades (in-flow on desktop, fixed on mobile) */
    if (ganeshEl) {
      const isMobile = window.matchMedia('(max-width:600px)').matches;
      ganeshEl.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      ganeshEl.style.opacity    = '0';
      ganeshEl.style.transform  = isMobile
        ? 'translateX(-50%) translateY(-22px) scale(1.04)'
        : 'translateY(-22px) scale(1.04)';
    }

    /* Top info fades */
    const topInfo = overlay.querySelector('.gate-top-info');
    if (topInfo) {
      topInfo.style.transition    = 'opacity 0.5s ease';
      topInfo.style.opacity       = '0';
      topInfo.style.pointerEvents = 'none';
    }

    spawnPetals(window.matchMedia('(max-width:600px)').matches ? 5 : 15, true);

    /* Garland bounces in after doors half-open */
    setTimeout(() => { if (garlandEl) garlandEl.classList.add('visible'); }, 1800);

    /* Couple photo fades in */
    if (coupleEl) {
      coupleEl.style.transition = 'none';
      coupleEl.style.opacity    = '0';
      coupleEl.style.transform  = 'translateX(-50%) translateY(-48%) scale(0.8)';
      void coupleEl.offsetHeight;
      coupleEl.style.transition = 'opacity 1.4s ease, transform 1.4s cubic-bezier(.18,1.4,.4,1)';
      coupleEl.style.opacity    = '1';
      coupleEl.style.transform  = 'translateX(-50%) translateY(-48%) scale(1)';
    }

    /* After 4 s: photo + garland fade → overlay dissolves */
    setTimeout(() => {
      if (coupleEl) {
        coupleEl.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        coupleEl.style.opacity    = '0';
        coupleEl.style.transform  = 'translateX(-50%) translateY(-48%) scale(0.88)';
      }
      if (garlandEl) {
        garlandEl.style.transition = 'opacity 0.9s ease';
        garlandEl.style.opacity    = '0';
      }
      setTimeout(() => {
        overlay.style.transition = 'opacity 1.4s ease';
        overlay.style.opacity    = '0';
        document.body.classList.remove('locked');
        window.scrollTo({ top: 0, behavior: 'instant' }); /* always land at top */
        setTimeout(() => {
          overlay.hidden = true;
          overlay.remove();
          document.dispatchEvent(new CustomEvent('gateOpened'));
        }, 1400);
      }, 600);
    }, 4000);
  }

  /* ══ AUTO COUNTDOWN ══════════════════════════════════════════ */
  let autoSecs = 5;
  function tickAuto() {
    autoSecs -= 1;
    if (cdEl) cdEl.textContent = autoSecs;
    if (autoSecs <= 0) {
      clearInterval(autoTimer);
      document.dispatchEvent(new CustomEvent('gateEntering'));
      openGates();
    }
  }
  const autoTimer = setInterval(tickAuto, 1000);

  /* ══ BUTTON & KEYBOARD ═══════════════════════════════════════ */
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      clearInterval(autoTimer);
      document.dispatchEvent(new CustomEvent('gateEntering'));
      openGates();
    });
  }
  document.addEventListener('keydown', e => {
    if ((e.key==='Enter'||e.key===' ') && !opened) {
      e.preventDefault();
      clearInterval(autoTimer);
      document.dispatchEvent(new CustomEvent('gateEntering'));
      openGates();
    }
  });

})();
