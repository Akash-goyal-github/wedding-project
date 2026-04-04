# 👑 Arjoo & Manish — Royal Jaipur Wedding Website

A bespoke, hand-crafted wedding website for the royal celebration of
**Aayushmati Arjoo (Bulbul)** & **Aayushman Manish Gupta (Monu)**  
📅 **26th April 2026** &nbsp;·&nbsp; 📍 **Anant Mahal, Patrakar Colony, Jaipur**

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
| 5 | 📅 **Royal Celebrations** | Vertical tree timeline — all 7 events across 2 days with styled event cards |
| 6 | 🖼️ **Gallery** | Mosaic photo grid with lightbox viewer |
| 7 | 🏛️ **Venue** | Anant Mahal details, Google Maps embed, parking info, QR code |
| 8 | 💌 **Welcome Vlog** | Shayari scroll cards + WhatsApp photo carousel (38 photos) + video films |
| 9 | 🏡 **Family Invitation** | Full Goyal family listing — 6 categories from the invite card |
| 10 | 💬 **WhatsApp Community** | Join community CTA with QR code |
| 11 | 📎 **Footer** | Couple names, date, social links |

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
| 🐎 Baraat Procession | 6:15 PM – 7:30 PM | Anant Mahal Main Gate |
| 💐 Jai Mala & Varmala | 8:00 PM – 11:30 PM | Anant Mahal, Mandap |
| 👑 Royal Wedding Ceremony | 11:30 PM onwards | Anant Mahal, Royal Mandap |

---

## 🤵 Ask Armaan — Wedding Chatbot

A fully custom AI-style wedding assistant built in pure vanilla JS.

**Entry points**
- Floating `[💬 Ask]` pill button — fixed bottom-right on every page
- `[🤵 Ask Armaan]` link in the navbar

**What Armaan knows**

| Topic | Details served |
|---|---|
| 📍 Venue | Full address, Google Maps link, parking info |
| 📅 Events | All 7 events with timings & locations |
| ✈️ Travel | 3 railway stations, airport (JAI), 4 bus stands — all with distances & route links |
| 💑 The Couple | Arjoo & Manish — full profiles, nicknames, gotras, hometowns, parents, grandparents |
| 🏡 Family | Complete Goyal family listing (6 categories) |
| #️⃣ Hashtag | `#Arjoo_ka_man` |
| 💬 WhatsApp | Community join link |
| 📞 Contact | Click-to-call for Father of Bride & Brother of Bride |

**Navigation**
- Hierarchical menus with `[↩️ Previous Menu]` + `[🏠 Main Menu]` on every response
- Free-text input with 25+ keyword patterns (hindi names, nicknames, English all work)
- Graceful fallback for unknown queries

**Source file:** `js/armaan.js` — all data lives in `ARMAAN.data` at the top of the file.

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
│   ├── armaan.js           ← Ask Armaan chatbot (all data + logic)
│   ├── gate.js             ← Gate open/close animation
│   ├── gallery.js          ← Gallery lightbox & mosaic
│   ├── effects.js          ← Fireworks, petals, shimmer burst
│   └── river.js            ← River reflection animation
│
└── assets/
    ├── images/
    │   ├── _DSC3765.JPG    ← Gallery photo
    │   ├── _DSC3966.JPG    ← Gallery photo
    │   ├── _DSC3973.JPG    ← Gallery photo (wide)
    │   ├── _DSC4015.JPG    ← Gallery photo
    │   ├── _DSC4029.JPG    ← Gallery photo
    │   ├── _DSC4058.JPG    ← Gallery photo
    │   ├── _DSC4062.JPG    ← Gallery photo
    │   ├── _DSC4085.JPG    ← Gallery photo (wide)
    │   ├── bride.jpeg      ← Bride portrait (gate + river)
    │   ├── groom.jpeg      ← Groom portrait (gate + river)
    │   ├── couple1.jpg     ← Hero couple photo
    │   ├── couple-new.jpeg ← Our Story section
    │   ├── couple-gate.jpeg← Gate reveal photo
    │   ├── together.jpeg   ← River page together photo
    │   ├── haldi-bg.png    ← Haldi event card bg
    │   ├── mayra.png       ← Mayra event card bg
    │   ├── sangeet.avif    ← Sangeet event card bg
    │   ├── barat.jpeg      ← Baraat event card bg
    │   ├── party.avif      ← Pool party event card bg
    │   ├── varmala.jpg     ← Jai Mala event card bg
    │   ├── reception.jpg   ← Royal Wedding event card bg
    │   ├── invite-card.jpg ← Physical invite card scan
    │   ├── whatsapp-qr.jpeg← WhatsApp community QR
    │   ├── wa01–wa38.jpeg  ← WhatsApp carousel photos (38 images)
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
| Couple details on page | `index.html` → `#union` section |
| Event timings | `index.html` → `#events` section |
| Family member names | `index.html` → `#family` section |
| Gallery photos | Drop JPGs in `assets/images/`, update `#gallery` grid in `index.html` |
| Hero video | Replace `assets/videos/film1.mp4` |
| Venue map embed | `index.html` → `#venue` section `<iframe>` src |
| Countdown target date | `js/main.js` → `weddingDate` variable |
| WhatsApp community link | `js/armaan.js` → `ARMAAN.data.whatsapp.link` |
| Contact numbers | `js/armaan.js` → `ARMAAN.data.contacts` array |
| Colour theme | `css/styles.css` → `:root` variables |

---

## 📞 Contact

| Role | Name | Phone |
|---|---|---|
| Father of Bride | Shri Akhlesh Kumar Goyal | +91 94143 11762 |
| Brother of Bride | Akash Goyal | +91 94608 14437 |

---

*Crafted with ❤️ for Arjoo & Manish · 26th April 2026 · Anant Mahal, Jaipur*  
*#Arjoo_ka_man*
