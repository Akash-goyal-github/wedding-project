# 👑 Arjoo & Manish — Royal Wedding Website

A bespoke, fully hand-crafted wedding website for the royal celebration of **Aayushman Manish** and **Aayushmati Arjoo (Bulbul)** — uniting Haryana and Rajasthan on **26th April 2026** at **Anant Mahal, Jaipur**.

---

## ✨ Live Sections

| Section | Description |
|---|---|
| 🎪 **Gate Entrance** | Animated double-door reveal with countdown & couple silhouette |
| 🏠 **Hero** | Full-screen video background with golden countdown timer |
| 📖 **Our Story** | Royal arch photo frame with blessing text |
| 🤝 **The Union** | Two States, One Love — Rajasthan meets Haryana, with family details |
| 📅 **The Royal Celebrations** | Timeline of all 7 events across 2 days |
| 🖼️ **Gallery** | 12-photo mosaic grid with real DSC wedding photos |
| 🏛️ **Venue** | Anant Mahal details with embedded Google Maps |
| 💌 **Welcome Vlog** | Shayari cards & heartfelt messages from the couple |
| 🏡 **Family Invitation** | Goyal family members — all 6 categories from the invite card |
| 📎 **Footer** | Couple names, date & social links |

---

## 📅 Event Schedule

### Day 1 — 25th April 2026
| Event | Time | Venue |
|---|---|---|
| 🌸 Haldi Ceremony | 12:00 PM – 2:00 PM | Anant Mahal Courtyard |
| 🎁 Mayra | 4:00 PM – 5:30 PM | Anant Mahal Courtyard |
| 🎶 Sangeet Night | 7:00 PM – 1:00 AM | Anant Mahal Royal Lawns |

### Day 2 — 26th April 2026
| Event | Time | Venue |
|---|---|---|
| 🌊 Pool Party | 7:00 AM – 9:00 AM | Anant Mahal Poolside |
| 🐎 Baraat Procession | 6:15 PM – 7:30 PM | Anant Mahal Main Gate |
| 💐 Jai Mala & Varmala | 8:00 PM – 8:30 PM | Anant Mahal, Mandap |
| 👑 Royal Wedding Ceremony | 10:00 PM Onwards | Anant Mahal, Royal Mandap |

---

## 📁 Project Structure

```
Wedding-Project/
├── index.html              # Main page (single HTML file)
├── css/
│   ├── styles.css          # Core styles — all sections
│   └── union.css           # Two States section styles
├── js/
│   └── main.js             # Countdown, gate animation, AOS init
└── assets/
    ├── images/
    │   ├── _DSC3765.JPG    # Gallery photo 1
    │   ├── _DSC3790.JPG    # Gallery photo 2
    │   ├── _DSC3966.JPG    # Gallery photo 3
    │   ├── _DSC3973.JPG    # Gallery photo 4 (wide)
    │   ├── _DSC3999.JPG    # Gallery photo 5
    │   ├── _DSC4015.JPG    # Gallery photo 6
    │   ├── _DSC4029.JPG    # Gallery photo 7
    │   ├── _DSC4085.JPG    # Gallery photo 8 (wide)
    │   ├── _DSC4065.JPG    # Gallery photo 9
    │   ├── _DSC4062.JPG    # Gallery photo 10
    │   ├── _DSC4058.JPG    # Gallery photo 11
    │   ├── _DSC4232.JPG    # Gallery photo 12
    │   ├── couple1.jpg     # Our Story section portrait
    │   ├── couple-gate.jpg # Gate entrance couple photo
    │   ├── haldi-bg.png    # Haldi event card background
    │   ├── mayra.png       # Mayra event card background
    │   ├── sangeet.avif    # Sangeet event card background
    │   ├── barat.jpeg      # Baraat event card background
    │   ├── party.avif      # Pool party event card background
    │   ├── varmala.jpg     # Jaimala event card background
    │   ├── reception.jpg   # Royal Wedding event card background
    │   └── invite-card.jpg # Invite card image
    └── videos/
        └── hero.mp4        # Hero background video (add when ready)
```

> 📹 **Wedding films coming soon** — drop `film1.mp4`, `film2.mp4`, `film3.mp4` into `assets/videos/` and let the developer know to re-add the video grid.

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
| Body Text | `--text` | `#2D1B3E` |

---

## 🖥️ Running Locally

No build step needed — pure HTML/CSS/JS.

```bash
# Mac
open index.html

# Or serve with any static server
npx serve .
```

---

## ✏️ Common Edits

| What to change | Where |
|---|---|
| Wedding date countdown | `js/main.js` → `weddingDate` variable |
| Event times / details | `index.html` → `#events` section |
| Family member names | `index.html` → `#family` section |
| Gallery photos | Drop JPGs in `assets/images/`, update `#gallery` grid in `index.html` |
| Hero video | Replace `assets/videos/hero.mp4` |
| Venue map embed | `index.html` → `#venue` section, update `<iframe>` src |
| Union section details | `index.html` → `#union`, styles in `css/union.css` |

---

## 👨‍👩‍👧‍👦 The Families

**Bride — Aayushmati Arjoo (Bulbul)**
- Daughter of Shri Akhlesh Kumar Goyal & Shrimati Lakshmi Devi
- From Soorat, Jila-Kauli, **Rajasthan**
- Eternal Blessings of Late Shrimati Geeta Devi & Shri Murarilal Ji Goyal

**Groom — Aayushman Manish**
- Son of Shri Pawan Kumar Gupta & Shrimati Bala Devi
- From Charkhi Dadri, **Haryana**
- Blessed by Late Shrimati Sevanti Devi & Late Shri Jawahar Lal Gupta

---

## 🛠️ Tech Stack

- **HTML5** — single-page, semantic markup
- **CSS3** — custom properties, CSS Grid, Flexbox, animations
- **Vanilla JS** — countdown timer, gate animation
- **AOS** (Animate on Scroll) — scroll reveal animations
- **Google Fonts** — Cormorant Garamond, Cinzel Decorative, Great Vibes
- **No frameworks, no build tools** — ships as-is

---

*Crafted with ❤️ for Arjoo & Manish · 26th April 2026 · Anant Mahal, Jaipur*
