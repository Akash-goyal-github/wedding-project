# 👑 Arjoo & Manish — Wedding Website

A bespoke, hand-crafted wedding website for the celebration of
**Aayushmati Arjoo (Bulbul)** & **Aayushman Manish Gupta (Monu)**
📅 **26th April 2026** · 📍 **Anant Mahal, Patrakar Colony, Jaipur**

> Pure HTML · CSS · Vanilla JS — zero frameworks, zero build tools.

---

## 🗺️ Pages

| File | Purpose |
|---|---|
| `index.html` | Main wedding website (single page, all sections) |
| `river.html` | Standalone animated river-reflection name reveal |

---

## ✨ Sections — `index.html`

| # | Section | What it does |
|---|---|---|
| 1 | 🎪 **Gate Entrance** | Animated double-door reveal with countdown, bride & groom door portraits, couple photo reveal, falling petals |
| 2 | 🏠 **Hero** | Full-screen video/image background, live golden countdown timer, wedding hashtag |
| 3 | 📖 **Our Story** | Mughal arch photo frame, blessing text, seven-vows quote |
| 4 | 🤝 **Two States, One Love** | Split card — Rajasthan (Arjoo) vs Haryana (Manish), parents, grandparents, hometowns |
| 5 | 📅 **Royal Celebrations** | Vertical tree timeline — all 8 events across 2 days with styled image-bg cards, meal chips & food-break markers |
| 6 | 🖼️ **Gallery** | Slider with 38 `wa` photos, dot nav, progress bar, fullscreen lightbox, gold corner ornaments, live `01/38` counter |
| 7 | 🏛️ **Venue** | Anant Mahal details, Google Maps embed, parking info, QR code |
| 8 | 💌 **Welcome Vlog** | Shayari scroll cards + WhatsApp photo carousel + video films |
| 9 | 🏡 **Family Invitation** | Full Goyal family listing — 6 categories from the invite card |
| 10 | 💬 **WhatsApp Community** | Join community CTA with QR code |
| 11 | 📸 **Instagram Community** | Follow CTA, `@arjoo.ka.man` handle, QR scan card — Instagram brand gradient styling |
| 12 | 📎 **Footer** | Couple names, date, social links |

---

## 📅 Event Schedule

### Day 1 — 25th April 2026

| Event | Time | Venue |
|---|---|---|
| 🌸 Haldi Ceremony | 12:00 PM – 2:00 PM | Anant Mahal Courtyard |
| 🎁 Mayra | 4:00 PM – 5:30 PM | Anant Mahal Courtyard |
| 🎶 Sangeet Night | 7:00 PM – 11:00 PM | Anant Mahal Royal Lawns |

### Day 2 — 26th April 2026 (Wedding Day)

| Event | Time | Venue |
|---|---|---|
| 🌊 Pool Party | 7:00 AM – 9:00 AM | Anant Mahal Poolside |
| 🪔 Lagan at Groom Side | 11:00 AM – 1:00 PM | Anant Mahal Hall |
| 🐎 Baraat Procession | 6:15 PM – 7:30 PM | Anant Mahal Main Gate |
| 💐 Jai Mala & Varmala | 8:00 PM – 11:30 PM | Anant Mahal, Mandap |
| 👑 Royal Wedding Ceremony | 11:30 PM onwards | Anant Mahal, Royal Mandap |

### 🍽️ Meal Plan

**Day 1**

| Meal | Timing | Tied to |
|---|---|---|
| 🌅 Breakfast | Morning | Before Haldi |
| 🍽️ Lunch | 12:00 PM – 2:00 PM | During Haldi |
| ☕ High Tea & Snacks | 2:00 PM onwards | Haldi onwards / Mayra |
| 🌙 Dinner | 7:00 PM – 11:00 PM | During Sangeet |

**Day 2**

| Meal | Timing | Tied to |
|---|---|---|
| 🍳 Breakfast | 9:00 AM onwards | After Pool Party |
| 🍽️ Lunch | 11:00 AM – 1:00 PM | During Lagan |
| ☕ High Tea & Snacks | 1:00 PM onwards | After Lagan |
| 🌙 Dinner | 7:00 PM onwards | Before Jai Mala |

> 🥤 Juices · Cold Drinks · Chaach · Fresh Fruits & Snacks available throughout both days.

---

## 👗 Dress Code (per event)

| Event | Suggested Colours |
|---|---|
| 🌸 Haldi | Lavender / Pink |
| 🎶 Sangeet | Black & White |
| 🌊 Pool Party | Floral |
| 👑 Wedding Day | Just come and enjoy! 🥰 |

---

## 🤵 Ask Armaan — Wedding Chatbot

A fully custom bilingual wedding assistant built in pure vanilla JS.

**Entry points**
- Floating `[💬 Ask]` pill button — fixed bottom-right on every page
- `[🤵 Ask Armaan]` link in the navbar

### What Armaan knows

| Topic | Details served |
|---|---|
| 📍 Venue | Full address, Google Maps link, parking info |
| 📅 Events | All 8 events with timings & locations |
| 🍽️ Meals | Breakfast, Lunch, High Tea & Dinner for both days, tied to events |
| ✈️ Travel | 3 railway stations, airport (JAI), 4 bus stands — distances & route links |
| 👗 Dress Code | Per-event colours: Haldi · Sangeet · Pool Party · Wedding Day |
| 🏡 Accommodation | Rooms arranged at Anant Mahal — outstation guests stay on-site |
| 💑 The Couple | Arjoo & Manish — profiles, nicknames, gotras, hometowns, parents, grandparents |
| 🏡 Family | Complete Goyal family listing (request from, hosts, blessings, maternal side) |
| #️⃣ Hashtag | `#Arjoo_ka_man` |
| 💬 WhatsApp | Community join link |
| 📸 Instagram | Follow link + handle — `@arjoo.ka.man` |
| 🎉 Communities | Shows **both** WhatsApp & Instagram with one-tap pill buttons |
| 📞 Contact | Click-to-call for Father of Bride & Brother of Bride |

### Chatbot features

- 🌐 **Bilingual** — full EN & हिंदी support; language switcher lives in every session
- 💬 **Animated hint questions** — 4 rotating questions fade in/out in the input placeholder, language-aware
- 🔍 **Smart free-text** — 30+ keyword patterns covering names, nicknames, Hindi terms, locations (`suroth`, `karauli`, `charkhi dadri`, `haryana`) and natural questions
- 🎉 **Communities routing** — `community`/`join us`/`social` → shows both WA + IG; `whatsapp`/`group` → WA only; `instagram`/`insta`/`follow` → IG only
- 🧭 **Priority routing** — bride/groom name checks run before generic `where` catch, so "where is Arjoo from?" routes correctly to bride info
- 🏠 **Hierarchical menus** — every response has `[↩️ Previous Menu]` + `[🏠 Main Menu]`
- 🤝 **Graceful fallback** — unknown queries get a friendly nudge back to the menu

### Source files

| File | Purpose |
|---|---|
| `js/armaan.js` | All logic, data (`ARMAAN.data`), methods, routes |
| `js/armaan-strings.js` | All EN/HI UI copy + animated hint questions (i18n without touching armaan.js) |

---

## 👨‍👩‍👧‍👦 The Couple

### 👰 Bride — Aayushmati Arjoo (Bulbul)

| | |
|---|---|
| Nickname | Bulbul 🐦 |
| Gotra | Goyal |
| From | Suroth, Dist. Karauli, Rajasthan |
| Father | Shri Akhlesh Kumar Goyal |
| Mother | Shrimati Lakshmi Devi |
| Grandparents | Late Shrimati Geeta Devi & Shri Murarilal Ji Goyal |

### 🤵 Groom — Aayushman Manish Gupta (Monu)

| | |
|---|---|
| Nickname | Monu 💪 |
| Gotra | Airan |
| From | Charkhi Dadri, Haryana |
| Father | Shri Pawan Kumar Gupta |
| Mother | Shrimati Bala Devi |
| Grandparents | Late Shrimati Sevanti Devi & Late Shri Jawahar Lal Gupta |

**Wedding Hashtag:** `#Arjoo_ka_man`

---

## 📁 Project Structure

```
Wedding-Project/
│
├── index.html              ← Main page (all sections)
├── river.html              ← Animated river name reveal page
│
├── css/
│   ├── styles.css          ← Core styles (navbar, hero, all sections, chatbot)
│   ├── union.css           ← Two States, One Love section
│   ├── gallery.css         ← Gallery mosaic & lightbox
│   ├── gate.css            ← Gate entrance animation
│   ├── effects.css         ← Fireworks, falling petals, sparkles
│   └── river.css           ← River page styles
│
├── js/
│   ├── main.js             ← Countdown timer, AOS init, scroll effects
│   ├── armaan.js           ← Ask Armaan chatbot (all data + logic + routes)
│   ├── armaan-strings.js   ← EN/HI UI copy + animated hint questions
│   ├── gate.js             ← Gate open/close animation
│   ├── gallery.js          ← Gallery lightbox & mosaic
│   ├── effects.js          ← Fireworks, petals, shimmer burst
│   └── river.js            ← River reflection animation
│
└── assets/
    ├── images/
    │   ├── wa01–wa38.jpeg  ← Gallery slider photos (38 total)
    │   ├── _DSC3765.JPG    ← DSC photos (assets only, not in gallery)
    │   ├── _DSC3966.JPG
    │   ├── _DSC3973.JPG
    │   ├── _DSC4015.JPG
    │   ├── _DSC4029.JPG
    │   ├── _DSC4058.JPG
    │   ├── _DSC4062.JPG
    │   ├── _DSC4085.JPG
    │   ├── bride.jpeg      ← Bride portrait (gate + river)
    │   ├── groom.jpeg      ← Groom portrait (gate + river)
    │   ├── couple1.jpg     ← Hero couple photo
    │   ├── couple-new.jpeg ← Our Story section
    │   ├── couple-gate.jpeg← Gate reveal photo
    │   ├── together.jpeg   ← River page together photo
    │   ├── lagan.avif      ← Lagan event card background
    │   ├── haldi-bg.png    ← Haldi event card background
    │   ├── mayra.png       ← Mayra event card background
    │   ├── sangeet.avif    ← Sangeet event card background
    │   ├── barat.jpeg      ← Baraat event card background
    │   ├── party.avif      ← Pool party event card background
    │   ├── varmala.jpg     ← Jai Mala event card background
    │   ├── reception.jpg   ← Wedding ceremony event card background
    │   ├── invite-card.jpg ← Physical invite card scan
    │   ├── whatsapp-qr.jpeg← WhatsApp community QR
    │   ├── instagram-qr.jpeg← Instagram community QR
    │   ├── wa01–wa38.jpeg  ← WhatsApp carousel photos
    │   └── hero-poster.jpg ← Hero video fallback poster
    │
    └── videos/
        ├── film1.mp4       ← Wedding film 1
        └── film2.mp4       ← Wedding film 2
```

---

## 🎨 Colour Palette

| Role | Variable | Hex |
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
| Logic | Vanilla JS — zero frameworks, zero npm |
| Scroll FX | AOS (Animate on Scroll) — loaded via CDN |
| Fonts | Google Fonts — Cormorant Garamond, Cinzel Decorative, Great Vibes, Yatra One |
| Maps | Google Maps Embed API |
| Build | **None** — ships as static files |

---

## 🚀 Running Locally

No install, no build step needed.

```bash
# Option 1 — open directly (Mac)
open index.html

# Option 2 — local server (any OS)
npx serve .

# Option 3 — Python
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## ✏️ Common Edits

| What to change | Where |
|---|---|
| Chatbot knowledge (venue, events, travel, couple) | `js/armaan.js` → `ARMAAN.data` object at top of file |
| Chatbot UI copy / translations | `js/armaan-strings.js` → `ARMAAN_STRINGS.en` / `.hi` |
| Animated hint questions | `js/armaan-strings.js` → `ARMAAN_STRINGS.hints` |
| Dress code per event | `js/armaan.js` → `ARMAAN.data.dress` |
| Accommodation message | `js/armaan.js` → `ARMAAN.accommodationInfo()` |
| Couple details on page | `index.html` → `#union` section |
| Event timings | `index.html` → `#events` section + `js/armaan.js` → `ARMAAN.data.dates` |
| Meal timings | `index.html` → food-break chips + `js/armaan.js` → `ARMAAN.data.meals` |
| Family member names | `index.html` → `#family` section |
| Gallery photos | Drop JPEGs in `assets/images/` as `wa##.jpeg`, update `#gallery` slides in `index.html`, update `<span class="g-total">` counter |
| Chatbot prompt text | `js/armaan.js` → `#armaan-prompt-msg` span in `injectHTML()` |
| Armaan name origin text | `js/armaan.js` → `pickLang()` first `addMsg` + easter-egg block in `parseText()` |
| Hero video | Replace `assets/videos/film1.mp4` |
| Venue map embed | `index.html` → `#venue` section `<iframe>` src |
| Countdown target date | `js/main.js` → `weddingDate` variable |
| WhatsApp community link | `js/armaan.js` → `ARMAAN.data.whatsapp.link` |
| Instagram link / handle | `js/armaan.js` → `ARMAAN.data.instagram` |
| Contact numbers | `js/armaan.js` → `ARMAAN.data.contacts` array |
| Colour theme | `css/styles.css` → `:root` variables |

---

## 📞 Contact

| Role | Name | Phone |
|---|---|---|
| Father of Bride | Shri Akhlesh Kumar Goyal | +91 94143 11762 |
| Brother of Bride | Akash Goyal | +91 94608 14437 |

---

---

## 📄 Changelog

### Session — Apr 2025

| Change | Files |
|---|---|
| **Armaan engagement system** — glow+bounce animation on Ask button, dark plum prompt bubble with spring pop-in, speech-bubble tail, avatar, auto-dismiss, `gateOpened`-event triggered timing | `js/armaan.js`, `css/styles.css` |
| **Prompt bubble** — `display:none` initially (no layout ghost); double-rAF show; in-memory flag instead of `sessionStorage`; 1.5 s show / 0.35 s hide animations | `js/armaan.js`, `css/styles.css` |
| **Prompt timing** — waits for `gateOpened` event; glow at +2 s, prompt at +4 s after gate fully closes | `js/armaan.js` |
| **Armaan name origin** — AR (gold) + MAAN (plum) = ARMAAN story shown before language selection; easter egg on "who are you" / "your name" | `js/armaan.js`, `css/styles.css` |
| **Gate scroll lock** — added missing `body.locked { overflow:hidden }` CSS; `scrollTo(top, instant)` on gate close | `css/styles.css`, `js/gate.js` |
| **Gallery** — slider uses `wa01–wa38.jpeg` (38 photos); DSC files removed from gallery references | `index.html` |

---

*Crafted with ❤️ for Arjoo & Manish · 26th April 2026 · Anant Mahal, Jaipur*
*#Arjoo_ka_man*
