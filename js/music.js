/* ============================================================
   music.js  —  Two-phase Wedding Music Controller
   ────────────────────────────────────────────────────────────
   Phase 1 │ gate-fanfare.mp3
            │  → plays immediately when gates start opening
            │  → audio.play() is called synchronously inside
            │     the gateEntering event (still in user-gesture
            │     context), so browsers allow it
   Phase 2 │ wedding-bg.mp3
            │  → fades in 5 s after fanfare ends, loops softly
   Toggle  │ floating ♪ button (bottom-right)
            │  → pause / resume bg music
            │  → during fanfare: skips straight to bg
============================================================ */

'use strict';

(function initMusic() {

  const fanfare = document.getElementById('gateFanfare');
  const bg      = document.getElementById('weddingMusic');
  const btn     = document.getElementById('musicToggle');
  if (!fanfare || !bg || !btn) return;

  const iconOn  = btn.querySelector('.music-icon-on');
  const iconOff = btn.querySelector('.music-icon-off');

  /* ── Volumes & timing ──────────────────────────────────────── */
  const VOL_FANFARE   = 0.80;   /* gate fanfare — clear & festive    */
  const VOL_BG        = 0.28;   /* bg loop — soft, unobtrusive        */
  const GAP_AFTER_MS  = 5000;   /* silence gap between phases         */

  /* ── State machine ─────────────────────────────────────────── */
  // idle → fanfare → gap → bg | bg-paused
  let phase      = 'idle';
  let bgWanted   = localStorage.getItem('weddingMusicOn') !== 'false';
  let gapTimer   = null;
  let fanfareStarted = false;

  /* ── Smooth volume fade ─────────────────────────────────────── */
  function fade(el, toVol, ms, done) {
    const steps   = Math.max(1, ms / 40);
    const delta   = (toVol - el.volume) / steps;
    let   n       = 0;
    const tid = setInterval(() => {
      n++;
      el.volume = Math.min(1, Math.max(0, el.volume + delta));
      if (n >= steps) {
        clearInterval(tid);
        el.volume = toVol;
        done?.();
      }
    }, 40);
    return tid;
  }

  /* ── Phase 1: Fanfare ───────────────────────────────────────── */
  function startFanfare() {
    if (fanfareStarted) return;
    fanfareStarted = true;
    phase = 'fanfare';
    fanfare.volume = 0;
    fanfare.currentTime = 0;

    /* play() returns a Promise — catch block handles autoplay block  */
    fanfare.play()
      .then(() => {
        fade(fanfare, VOL_FANFARE, 1200);
        syncBtn();
      })
      .catch(() => {
        /* Autoplay blocked (auto-timer fired, no user gesture yet).
           Skip fanfare, queue bg music for first real interaction.  */
        phase = 'idle';
        fanfareStarted = false;
        scheduleOnInteraction(() => {
          /* By the time they interact, gate is long gone — jump to bg */
          startBg();
        });
      });
  }

  /* Fanfare finished naturally → 5 s gap → bg */
  fanfare.addEventListener('ended', () => {
    if (phase !== 'fanfare') return;
    phase = 'gap';
    syncBtn();
    gapTimer = setTimeout(startBg, GAP_AFTER_MS);
  });

  /* ── Phase 2: Background music ──────────────────────────────── */
  function startBg() {
    clearTimeout(gapTimer);
    gapTimer = null;

    if (!bgWanted) {
      phase = 'bg-paused';
      syncBtn();
      return;
    }

    phase = 'bg';
    bg.volume = 0;
    bg.play()
      .then(() => {
        fade(bg, VOL_BG, 3000);   /* 3 s gentle fade-in */
        syncBtn();
      })
      .catch(() => {
        phase = 'bg-paused';
        syncBtn();
      });
  }

  /* ── One-shot interaction scheduler ────────────────────────── */
  const pendingOnInteraction = [];
  function scheduleOnInteraction(cb) {
    pendingOnInteraction.push(cb);
  }
  function flushInteraction() {
    const cbs = pendingOnInteraction.splice(0);
    cbs.forEach(cb => cb());
  }
  document.addEventListener('click',    flushInteraction, { once: true });
  document.addEventListener('touchend', flushInteraction, { once: true });

  /* ── gateEntering — fired synchronously in the click handler ── */
  /* This is the KEY fix: we're still inside the browser's user-    */
  /* gesture context, so audio.play() is allowed.                   */
  document.addEventListener('gateEntering', startFanfare);

  /* ── Toggle button ─────────────────────────────────────────── */
  btn.addEventListener('click', e => {
    e.stopPropagation(); /* don't trigger flushInteraction */

    if (phase === 'fanfare') {
      /* Skip fanfare → fade out & jump to bg */
      clearTimeout(gapTimer);
      fade(fanfare, 0, 700, () => {
        fanfare.pause();
        phase = 'gap';
        startBg();
      });
      return;
    }

    if (phase === 'bg') {
      bgWanted = false;
      fade(bg, 0, 600, () => { bg.pause(); phase = 'bg-paused'; syncBtn(); });
    } else {
      /* paused / gap / idle → resume/start bg */
      bgWanted = true;
      clearTimeout(gapTimer);
      startBg();
    }

    localStorage.setItem('weddingMusicOn', bgWanted);
    syncBtn();
  });

  /* ── Sync toggle icon ───────────────────────────────────────── */
  function syncBtn() {
    const playing = (phase === 'fanfare' || phase === 'bg');
    iconOn.style.display  = playing ? ''     : 'none';
    iconOff.style.display = playing ? 'none' : '';
    btn.classList.toggle('muted', !playing);
    btn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
  }

  fanfare.addEventListener('play',  syncBtn);
  fanfare.addEventListener('pause', syncBtn);
  bg.addEventListener('play',  syncBtn);
  bg.addEventListener('pause', syncBtn);

  syncBtn(); /* initial state */

})();
