# 👑 Arjoo & Manish — Wedding Website

A bespoke, hand-crafted wedding website.

> Pure HTML · CSS · Vanilla JS — zero frameworks, zero build tools, zero npm.

---

## 🚀 Running Locally

No install, no build step needed.

```bash
# Option A — open directly (Mac)
open index.html

# Option B — local server (recommended, avoids video autoplay restrictions)
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## 📁 Project Structure

```
Wedding-Project/
│
├── index.html              ← Single-page app (all sections)
│
├── css/
│   ├── styles.css          ← Core styles (navbar, hero, all sections, chatbot)
│   ├── gate.css            ← Gate entrance animation
│   ├── union.css           ← Two States, One Love section
│   ├── effects.css         ← Fireworks, falling petals, sparkles
│   ├── carousel.css        ← Horizontal snap carousel (vlog + family cards)
│   ├── scroll-nav.css      ← Floating scroll-position sidebar nav
│   └── directions.css      ← Venue / directions section
│
├── js/
│   ├── main.js             ← Countdown timer, AOS init, scroll effects
│   ├── gate.js             ← Gate open/close animation + gateOpened event
│   ├── armaan.js           ← Ask Armaan chatbot (data, logic, routes)
│   ├── armaan-strings.js   ← EN/HI UI copy + animated hint questions (i18n)
│   ├── carousel.js         ← Auto-advancing carousel (data-autoplay attr)
│   ├── effects.js          ← Fireworks, petals, shimmer burst
│   └── scroll-nav.js       ← Floating section nav dots
│
└── assets/
    ├── images/
    │   ├── bride.jpeg          ← Bride portrait (gate doors)
    │   ├── groom.jpeg          ← Groom portrait (gate doors)
    │   ├── couple1.jpg         ← Hero section couple photo
    │   ├── couple-new.jpeg     ← Our Story section photo
    │   ├── hero-poster.jpg     ← Hero video fallback poster
    │   ├── haldi-bg.png        ← Haldi event card background
    │   ├── mayra.png           ← Mayra event card background
    │   ├── lagan.avif          ← Lagan event card background
    │   ├── sangeet.avif        ← Sangeet event card background
    │   ├── barat.jpeg          ← Baraat  card background
    │   ├── party.avif          ← Pool party event card background
    │   ├── varmala.jpg         ← Jai Mala event card background
    │   ├── reception.jpg       ← Wedding ceremony event card background
    │   └── whatsapp-qr.jpeg    ← WhatsApp community QR code
    │
    └── videos/
        └── hero.mp4            ← Hero section background video
```

---

## ✨ Sections

| # | Section | Description |
|---|---|---|
| 1 | 🎪 **Gate Entrance** | Animated double-door reveal with countdown, bride & groom portraits, falling petals |
| 2 | 🏠 **Hero** | Full-screen video/image background, live countdown timer, wedding hashtag |
| 3 | 📖 **Our Story** | Mughal arch photo frame, blessing text, seven-vows quote |
| 4 | 🤝 **Two States, One Love** | Split card — Rajasthan (bride) vs Haryana (groom), family details |
| 5 | 📅 **Royal Celebrations** | Vertical timeline — all events across 2 days with image-bg cards & meal chips |
| 6 | 🏛️ **Venue** | Venue details, Google Maps embed, parking info, directions QR |
| 7 | 💌 **Welcome Vlog** | Auto-scrolling shayari cards (bilingual, loops every 4.5 s) |
| 8 | 🏡 **Family Invitation** | Auto-scrolling family listing cards (loops every 4.5 s) |
| 9 | 💬 **WhatsApp Community** | Join community CTA with QR code |
| 10 | 📎 **Footer** | Couple names, date, hashtag |

---

## 🤵 Ask Armaan — Chatbot

A bilingual wedding assistant built in pure vanilla JS. Floating `[💬 Ask]` pill button fixed bottom-right; also accessivia navbar.

### Knowledge topics

| Topic | What it serves |
|---|---|
| 📍 Venue | Address, Google Maps link, parking |
| 📅 Events | All events with timings & locations |
| 🍽️ Meals | Breakfast/Lunch/High Tea/Dinner for both days |
| ✈️ Travel | Railway stations, airport, bus stands — distances & links |
| 👗 Dress Code | Per-event colour suggestions |
| 🏡 Accommodation | On-site rooms for outstation guests |
| 💑 The Couple | Profiles, nicknames, gotras, hometowns, parents |
| 🏡 Family | Complete family listing |
| #️⃣ Hashtag | `#Arjoo_ka_man` |
| 💬 WhatsApp | Community join link + QR |
| 📞 Contact | Click-to-call for key contacts |

### Features

- 🌐 **Bilingual** — full EN & हिंदी with in-session language switcher
- 💬 **Animated hints** — 4 rotating placeholder questions, language-aware
- 🔍 **Free-text parsing** — 30+ keyword patterns (names, nicknames, Hindi terms, places)
- 🏠 **Hierarchical menus** — every response has `[↩️ Back]` + `[🏠 Main Menu]`
- 🤝 **Graceful fallback** — unknown queries nudge back to menu

### Source files

| File | Purpose |
|---|---|
| `js/armaan.js` | All logic, data (`ARMAAN.data`), methods, keyword routes |
| `js/armaan-strings.js` | All EN/HI UI copy + hint questions (edit copy without touching logic) |

---

## 🎠 Carousel (auto-scroll)

`carousel.js` handles all `.carousel-wrap > .carousel-track` instances.

Add `data-autoplay="<ms>"` to any `.carousel-wrap` to enable auto-advance:

```html
<div class="carousel-wrap" data-autoplay="4500">
  <div class="carousel-track"> ... </div>
</div>
```

- Wraps back to slide 0 after the last card
- Pauses on `mouseenter` / `touchstart`; resumes on `mouseleave` / `touchend`
- Pauses when tab is hidden (`visibilitychange`)
- Manual prev/next buttons are optional — omit them for pure auto-scroll

---

## 🎨 Colour Palette

| Role | CSS Variable | Hex |
|---|---|---|
| Royal Gold | `--gold` | `#C9A447` |
| Gold Light | `--gold-lt` | `#F5D78E` |
| Gold Dark | `--gold-dk` | `#8B6914` |
| Deep Plum | `--plum` | `#4A1472` |
| Plum Deep | `--plum-dp` | `#2A0845` |
| Lavender | `--lav` | `#9B7EC8` |
| Lavender Light | `--lav-lt` | `#E8DFFF` |
| Lavender Pale | `--lav-pale` | `#F5F0FF` |
| Body Text | `--text` | `#2D1B3E` |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 — semantic, single-page |
| Styles | CSS3 — custom properties, Grid, Flexbox, keyframe animations |
| Logic | Vanilla JS — no frameworks, no npm |
| Scroll FX | [AOS](https://michalsnik.github.io/aos/) via CDN |
| Fonts | Google Fonts — Cormorant Garamond, Cinzel Decorative, Great Vibes, Yatra One |
| Maps | Google Maps Embed API |
| Build | **None** — ships as static files |

---

## ✏️ Common Edits

| What | Where |
|---|---|
| Chatbot data (venue, events, travel, couple) | `js/armaan.js` → `ARMAAN.data` |
| Chatbot UI copy / translations | `js/armaan-strings.js` → `.en` / `.hi` |
| Animated hint questions | `js/armaan-strings.js` → `ARMAAN_STRINGS.hints` |
| Couple details on page | `index.html` → `#union` section |
| Event timings on page | `index.html` → `#events` section |
| Event timings in chatbot | `js/armaan.js` → `ARMAAN.data.dates` |
| Meal timings | `js/armaan.js` → `ARMAAN.data.meals` |
| Family member names | `index.html` → `#family` section |
| Hero video | Replace `assets/videos/hero.mp4` |
| Venue map embed | `index.html` → `#venue` `<iframe>` src |
| Countdown target date | `js/main.js` → `weddingDate` variable |
| WhatsApp community link | `js/armaan.js` → `ARMAAN.data.whatsapp.link` |
| Colour theme | `css/styles.css` → `:root` variables |
| Carousel speed | `data-autoplay="<ms>"` on `.carousel-wrap` in `index.html` |

---

*Crafted with ❤️ for Arjoo & Manish · 26th April 2026 · Anant Mahal, Jaipur*
