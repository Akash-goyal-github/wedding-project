/* ─────────────────────────────────────────────────────────────
   Ask Armaan – Wedding Assistant Chatbot
   All data is hardcoded from the site so Armaan never makes
   anything up. Pure vanilla JS, zero dependencies.
───────────────────────────────────────────────────────────── */

const ARMAAN = {

  /* ── Site data ─────────────────────────────────────────── */
  data: {
    venue: {
      name:    'Anant Mahal',
      address: 'Patrakar Colony, Near Raheja Tower, Mansarovar, Jaipur',
      maps:    'https://maps.app.goo.gl/TnrJqUGxTUnnCfHn9',
      mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4107.07084893575!2d75.7337716!3d26.837424499999997',
      parking: 'Ample parking is available at Anant Mahal premises. Valet assistance will be provided on both days.',
    },
    dates: {
      day1: '25th April 2026',
      day2: '26th April 2026',
      events: [
        { day:1, name:'Haldi Ceremony',           time:'12:00 PM – 2:00 PM',  loc:'Anant Mahal Courtyard',   emoji:'💛' },
        { day:1, name:'Mayra',                     time:'4:00 PM – 5:30 PM',   loc:'Anant Mahal Courtyard',   emoji:'🎁' },
        { day:1, name:'Sangeet Night',             time:'7:00 PM – 11:00 PM',  loc:'Anant Mahal Royal Lawns', emoji:'🎶' },
        { day:2, name:'Pool Party',                time:'7:00 AM – 9:00 AM',   loc:'Anant Mahal Poolside',    emoji:'🌊' },
        { day:2, name:'Baraat Procession',         time:'6:15 PM – 7:30 PM',   loc:'Anant Mahal Main Gate',   emoji:'🐎' },
        { day:2, name:'Jai Mala & Varmala',        time:'8:00 PM – 11:30 PM',  loc:'Anant Mahal, Mandap',     emoji:'💍' },
        { day:2, name:'Royal Wedding Ceremony',    time:'11:30 PM onwards',    loc:'Anant Mahal, Royal Mandap', emoji:'👑' },
      ],
    },
    train: [
      { name:'Durgapura',      time:'20 min', dist:'8.3 km',  nearest:true,  maps:'https://www.google.com/maps/dir/Anant+Mahal,+Patrakar+Colony,+Jaipur/Durgapura+Railway+Station,+Jaipur' },
      { name:'Gandhinagar',    time:'22 min', dist:'10.3 km', nearest:false, maps:'https://www.google.com/maps/dir/Anant+Mahal,+Patrakar+Colony,+Jaipur/Gandhinagar+Railway+Station,+Jaipur' },
      { name:'Jaipur Junction',time:'24 min', dist:'14.2 km', nearest:false, maps:'https://www.google.com/maps/dir/Anant+Mahal,+Patrakar+Colony,+Jaipur/Jaipur+Junction+Railway+Station' },
    ],
    bus: [
      { name:'Bhankrota New Bus Stand', sub:'Jaipur Ajmer Road',    time:'12 min', dist:'7.5 km',  nearest:true },
      { name:'Civil Lines Bus Stop',    sub:'Near Metro Station',   time:'20 min', dist:'12.7 km', nearest:false },
      { name:'Narayan Singh Circle',    sub:'Foot Over Bridge',     time:'24 min', dist:'14 km',   nearest:false },
      { name:'Sindhi Camp Bus Station', sub:'Central Bus Stand',    time:'30 min', dist:'17 km',   nearest:false },
    ],
    airport: {
      name:'Jaipur International Airport',
      sub: 'Sanganer, Jaipur — IATA: JAI',
      time:'25–30 min', dist:'~15 km',
      note:'Pre-paid taxis & app cabs (Ola / Uber) available right outside arrivals.',
      maps:'https://www.google.com/maps/dir/Jaipur+International+Airport/Anant+Mahal,+Patrakar+Colony,+Jaipur',
    },
    whatsapp: {
      link: 'https://chat.whatsapp.com/CkrAO8cSR8TKoxgeAxbOzB',
      name: 'Arjoo ❤️ Manish Forever Begins 🥰',
    },
    contacts: [
      { role:'Father of Bride', name:'Akhlesh Kumar Goyal', phone:'+91 94143 11762', tel:'tel:+919414311762' },
      { role:'Brother of Bride', name:'Akash Goyal',         phone:'+91 94608 14437', tel:'tel:+919460814437' },
    ],
    couple: {
      hashtag: '#Arjoo_ka_man',
      bride: {
        name:         'Arjoo',
        fullTitle:    'Aayushmati Arjoo',
        nickname:     'Bulbul',
        gotra:        'Goyal',
        from:         'Suroth, Dist. Karauli, Rajasthan',
        state:        'Rajasthan 🏜️',
        father:       'Shri Akhlesh Kumar Goyal',
        mother:       'Shrimati Lakshmi Devi',
        grandparents: 'Late Shrimati Geeta Devi & Shri Murarilal Ji Goyal',
      },
      groom: {
        name:         'Manish',
        fullTitle:    'Aayushman Manish',
        nickname:     'Monu',
        surname:      'Gupta',
        gotra:        'Airan',
        from:         'Charkhi Dadri, Haryana',
        state:        'Haryana 🌾',
        father:       'Shri Pawan Kumar Gupta',
        mother:       'Shrimati Bala Devi',
        grandparents: 'Late Shrimati Sevanti Devi & Late Shri Jawahar Lal Gupta',
      },
      family: {
        requestFrom:  ['Shri Murarilal Goyal','Shri Harimohan Goyal','Shri Akhlesh Kumar Goyal','Shri Vineet Kumar Goyal','Shri Surendra Kumar Goyal'],
        location:     'Suroth, Dist. Karauli, Rajasthan',
        hosts:        ['Vineet & Shefali','Surendra & Sarika','Dinesh & Chhama','Satish & Sheelu','Ramesh & Meenu','Umakant & Kavita','Amit & Alkesh'],
        blessings:    ['Akash Goyal','Vishesh Goyal','Vaibhav Goyal','Bhoumik Goyal','Saniya Goyal','Akanksha Goyal'],
        maternal:     ['Shri Suresh Ji & Smt. Veena','Late Shri Hukum Ji & Smt. Sunita','Shri Ashok Ji & Smt. Kalpana (Reni Wale, Mandawar)'],
      },
    },
  },

  /* ── State ─────────────────────────────────────────────── */
  state: { open: false, greeted: false },

  /* ── Init ──────────────────────────────────────────────── */
  init() {
    this.injectHTML();
    this.bindEvents();
  },

  /* ── DOM helpers ───────────────────────────────────────── */
  $ : (sel) => document.querySelector(sel),

  injectHTML() {
    const el = document.createElement('div');
    el.id = 'armaan-widget';
    el.setAttribute('aria-live', 'polite');
    el.innerHTML = `
      <button id="armaan-toggle" aria-label="Open Ask Armaan" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span class="armaan-toggle-label">Ask</span>
      </button>

      <div id="armaan-chat" role="dialog" aria-modal="true" aria-label="Ask Armaan">
        <div id="armaan-header">
          <div class="armaan-header-info">
            <div class="armaan-avatar" aria-hidden="true">🤵</div>
            <div>
              <strong>Ask Armaan</strong>
              <span>Wedding Assistant ✨</span>
            </div>
          </div>
          <button id="armaan-close" aria-label="Close chat" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div id="armaan-messages" role="log" aria-live="polite"></div>
        <div id="armaan-input-row">
          <input id="armaan-input" type="text" placeholder="Type a question…"
                 autocomplete="off" aria-label="Type your message"/>
          <button id="armaan-send" aria-label="Send" type="button">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(el);
  },

  bindEvents() {
    const widget = document.getElementById('armaan-widget');
    const input  = document.getElementById('armaan-input');

    /* Single delegated listener — handles SVG sub-targets & text nodes */
    widget.addEventListener('click', (e) => {
      if (e.target.closest('#armaan-toggle')) { this.toggleChat(); return; }
      if (e.target.closest('#armaan-close'))  { this.closeChat();  return; }
      if (e.target.closest('#armaan-send'))   { this.handleInput(); return; }
    });

    input.addEventListener('keydown', e => { if (e.key === 'Enter') this.handleInput(); });
  },

  /* ── Open / close ──────────────────────────────────────── */
  toggleChat() {
    this.state.open ? this.closeChat() : this.openChat();
  },
  openChat() {
    this.state.open = true;
    document.getElementById('armaan-widget').classList.add('armaan-open');
    document.getElementById('armaan-toggle').setAttribute('aria-expanded', 'true');
    if (!this.state.greeted) { this.greet(); this.state.greeted = true; }
    setTimeout(() => document.getElementById('armaan-input').focus(), 50);
  },
  closeChat() {
    this.state.open = false;
    document.getElementById('armaan-widget').classList.remove('armaan-open');
    document.getElementById('armaan-toggle').setAttribute('aria-expanded', 'false');
  },

  /* ── Greeting ──────────────────────────────────────────── */
  greet() {
    this.addMsg('bot', "Hi! I'm Armaan 🤵✨<br>I'm here to help you with everything about Arjoo & Manish's wedding.<br>How can I help you today?");
    this.showMainMenu();
  },

  /* ── Main menu ─────────────────────────────────────────── */
  showMainMenu() {
    this.addQuickReplies([
      { label:'📍 Venue',          action:'venue'    },
      { label:'📅 Wedding Dates',  action:'dates'    },
      { label:'✈️ Travel Info',    action:'travel'   },
      { label:'💑 The Couple',     action:'couple'   },
      { label:'💬 WhatsApp Group', action:'whatsapp' },
      { label:'📞 Contact',        action:'contact'  },
    ]);
  },

  /* ── Route action ──────────────────────────────────────── */
  route(action) {
    const handlers = {
      venue:           () => this.venueMenu(),
      'venue-address': () => this.venueAddress(),
      'venue-maps':    () => this.venueMaps(),
      'venue-parking': () => this.venueParking(),

      dates:           () => this.datesMenu(),
      'dates-all':     () => this.datesAll(),
      'dates-day1':    () => this.datesDay(1),
      'dates-day2':    () => this.datesDay(2),

      travel:          () => this.travelMenu(),
      'travel-train':  () => this.travelTrain(),
      'travel-airport':() => this.travelAirport(),
      'travel-bus':    () => this.travelBus(),

      whatsapp:        () => this.whatsappInfo(),
      contact:         () => this.contactInfo(),

      couple:          () => this.coupleMenu(),
      bride:           () => this.brideInfo(),
      groom:           () => this.groomInfo(),
      hashtag:         () => this.hashtagInfo(),
      family:          () => this.familyInfo(),

      menu:            () => { this.addMsg('bot','Here\'s what I can help with! 😊'); this.showMainMenu(); },
    };
    (handlers[action] || (() => this.fallback()))();
  },

  /* ── Venue ─────────────────────────────────────────────── */
  venueMenu() {
    this.addMsg('bot', '📍 <strong>Anant Mahal</strong> — what would you like to know?');
    this.addQuickReplies([
      { label:'🏠 Full Address',    action:'venue-address' },
      { label:'🗺 Google Maps',     action:'venue-maps'    },
      { label:'🚗 Parking Info',    action:'venue-parking' },
      { label:'↩️ Main Menu',       action:'menu'          },
    ]);
  },
  venueAddress() {
    const v = this.data.venue;
    this.addMsg('bot', `The wedding will take place at:<br><br>📍 <strong>${v.name}</strong><br>${v.address}`);
    this.addBackBtn('venue');
  },
  venueMaps() {
    this.addMsg('bot', `Here's the Google Maps link to reach us directly! 🗺<br><br><a href="${this.data.venue.maps}" target="_blank" rel="noopener" class="armaan-link">Open in Google Maps ↗</a>`);
    this.addBackBtn('venue');
  },
  venueParking() {
    this.addMsg('bot', `🚗 <strong>Parking Info</strong><br><br>${this.data.venue.parking}`);
    this.addBackBtn('venue');
  },

  /* ── Dates ─────────────────────────────────────────────── */
  datesMenu() {
    this.addMsg('bot', '📅 The wedding is on <strong>25th & 26th April 2026</strong>. What would you like to know?');
    this.addQuickReplies([
      { label:'📋 Full Schedule',   action:'dates-all'  },
      { label:'🌸 Day 1 Events',    action:'dates-day1' },
      { label:'💍 Day 2 Events',    action:'dates-day2' },
      { label:'↩️ Main Menu',       action:'menu'       },
    ]);
  },
  datesAll() {
    const ev = this.data.dates.events;
    let html = '📅 <strong>Complete Wedding Schedule</strong><br><br>';
    html += `<em>Day 1 — ${this.data.dates.day1}</em><br>`;
    ev.filter(e => e.day === 1).forEach(e => {
      html += `<br>${e.emoji} <strong>${e.name}</strong><br>⏰ ${e.time}<br>📍 ${e.loc}<br>`;
    });
    html += `<br><em>Day 2 — ${this.data.dates.day2} (Wedding Day)</em><br>`;
    ev.filter(e => e.day === 2).forEach(e => {
      html += `<br>${e.emoji} <strong>${e.name}</strong><br>⏰ ${e.time}<br>📍 ${e.loc}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('dates');
  },
  datesDay(day) {
    const ev = this.data.dates.events.filter(e => e.day === day);
    const label = day === 1
      ? `Day 1 — ${this.data.dates.day1}`
      : `Day 2 — ${this.data.dates.day2} (Wedding Day)`;
    let html = `📅 <strong>${label}</strong><br>`;
    ev.forEach(e => {
      html += `<br>${e.emoji} <strong>${e.name}</strong><br>⏰ ${e.time}<br>📍 ${e.loc}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('dates');
  },

  /* ── Travel ────────────────────────────────────────────── */
  travelMenu() {
    this.addMsg('bot', 'How are you planning to travel? 🧳');
    this.addQuickReplies([
      { label:'🚂 Railway Station', action:'travel-train'   },
      { label:'✈️ Airport',         action:'travel-airport' },
      { label:'🚌 By Bus',          action:'travel-bus'     },
      { label:'↩️ Main Menu',       action:'menu'           },
    ]);
  },
  travelTrain() {
    const nearest = this.data.train.find(s => s.nearest);
    let html = `🚂 <strong>Nearest Railway Station</strong><br><br>`;
    html += `⭐ <strong>${nearest.name}</strong> — ${nearest.dist} · ~${nearest.time}<br>`;
    html += `<a href="${nearest.maps}" target="_blank" rel="noopener" class="armaan-link">🗺 Get Route ↗</a><br>`;
    html += `<br><em>Other stations nearby:</em><br>`;
    this.data.train.filter(s => !s.nearest).forEach(s => {
      html += `🚉 ${s.name} — ${s.dist} · ~${s.time}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('travel');
  },
  travelAirport() {
    const a = this.data.airport;
    const html = `✈️ <strong>${a.name}</strong><br>${a.sub}<br><br>⏱ ${a.time} &nbsp;|&nbsp; 📍 ${a.dist}<br><br>${a.note}<br><br><a href="${a.maps}" target="_blank" rel="noopener" class="armaan-link">🗺 Get Route ↗</a>`;
    this.addMsg('bot', html);
    this.addBackBtn('travel');
  },
  travelBus() {
    const nearest = this.data.bus.find(b => b.nearest);
    let html = `🚌 <strong>Nearest Bus Stand</strong><br><br>`;
    html += `⭐ <strong>${nearest.name}</strong><br>${nearest.sub}<br>⏱ ${nearest.time} · 📍 ${nearest.dist}<br>`;
    html += `<br><em>Other bus stops:</em><br>`;
    this.data.bus.filter(b => !b.nearest).forEach(b => {
      html += `🚌 ${b.name} — ${b.dist} · ~${b.time}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('travel');
  },

  /* ── WhatsApp ──────────────────────────────────────────── */
  whatsappInfo() {
    const wa = this.data.whatsapp;
    this.addMsg('bot', `Join our wedding WhatsApp community to get live updates, photos & all the fun moments! 🎉<br><br>💬 <strong>${wa.name}</strong><br><br><a href="${wa.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--wa">Join Community ↗</a>`);
    this.addBackBtn('menu');
  },

  /* ── Contact ───────────────────────────────────────────── */
  contactInfo() {
    let html = '📞 <strong>For Enquiries</strong><br><br>';
    this.data.contacts.forEach(c => {
      html += `👤 <strong>${c.name}</strong><br><em>${c.role}</em><br><a href="${c.tel}" class="armaan-link">${c.phone}</a><br><br>`;
    });
    this.addMsg('bot', html.trim());
    this.addBackBtn('menu');
  },

  /* ── Couple ────────────────────────────────────────────── */
  coupleMenu() {
    this.addMsg('bot', '💑 <strong>About Arjoo & Manish</strong><br>What would you like to know?');
    this.addQuickReplies([
      { label:'👰 About Arjoo (Bulbul)', action:'bride'   },
      { label:'🤵 About Manish',         action:'groom'   },
      { label:'#️⃣ Wedding Hashtag',      action:'hashtag' },
      { label:'🏡 Family Details',       action:'family'  },
      { label:'🏠 Main Menu',            action:'menu'    },
    ]);
  },

  brideInfo() {
    const b = this.data.couple.bride;
    this.addMsg('bot',
      `👰 <strong>${b.fullTitle}</strong><br>
       🐦 Lovingly called <strong>${b.nickname}</strong><br>
       🔱 Gotra: <strong>${b.gotra}</strong><br><br>
       📍 From: <strong>${b.from}</strong><br>
       🏜️ State: ${b.state}<br><br>
       👨‍👩‍👧 <strong>Daughter of</strong><br>
       &nbsp;&nbsp;&nbsp;${b.father}<br>
       &nbsp;&nbsp;&nbsp;${b.mother}<br><br>
       🙏 <strong>Eternal Blessings of</strong><br>
       &nbsp;&nbsp;&nbsp;${b.grandparents}`);
    this.addBackBtn('couple');
  },

  groomInfo() {
    const g = this.data.couple.groom;
    this.addMsg('bot',
      `🤵 <strong>${g.fullTitle} ${g.surname}</strong><br>
       💪 Lovingly called <strong>${g.nickname}</strong><br>
       🔱 Gotra: <strong>${g.gotra}</strong><br><br>
       📍 From: <strong>${g.from}</strong><br>
       🌾 State: ${g.state}<br><br>
       👨‍👩‍👦 <strong>Son of</strong><br>
       &nbsp;&nbsp;&nbsp;${g.father}<br>
       &nbsp;&nbsp;&nbsp;${g.mother}<br><br>
       🙏 <strong>Eternal Blessings of</strong><br>
       &nbsp;&nbsp;&nbsp;${g.grandparents}`);
    this.addBackBtn('couple');
  },

  hashtagInfo() {
    const h = this.data.couple.hashtag;
    this.addMsg('bot',
      `#️⃣ <strong>Official Wedding Hashtag</strong><br><br>
       🎉 <strong style="font-size:1.05em">${h}</strong><br><br>
       Use it on Instagram, Facebook & everywhere to share
       your moments from the celebrations! 📸✨`);
    this.addBackBtn('couple');
  },

  familyInfo() {
    const f = this.data.couple.family;
    let html = '🏡 <strong>The Goyal Family</strong><br>';
    html += `📍 ${f.location}<br><br>`;
    html += `🙏 <strong>Request From</strong><br>${f.requestFrom.join('<br>')}<br><br>`;
    html += `🌸 <strong>Your Hosts</strong><br>${f.hosts.join(' &nbsp;·&nbsp; ')}<br><br>`;
    html += `✨ <strong>Special Blessings</strong><br>${f.blessings.join(' · ')}<br><br>`;
    html += `🌺 <strong>Maternal Side</strong><br>${f.maternal.join('<br>')}`;
    this.addMsg('bot', html);
    this.addBackBtn('couple');
  },

  /* ── Free text handler ─────────────────────────────────── */
  handleInput() {
    const input = this.$('#armaan-input');
    const text  = input.value.trim();
    if (!text) return;
    this.addMsg('user', text);
    input.value = '';
    setTimeout(() => this.parseText(text.toLowerCase()), 400);
  },

  parseText(t) {
    if (/(venue|where|address|location|place|mahal|anant)/.test(t))        return this.route('venue');
    if (/(train|railway|station|rail|durgapura|jaipur jn|gandhi)/.test(t)) return this.route('travel-train');
    if (/(airport|fly|flight|air|plane|jai|sanganer)/.test(t))             return this.route('travel-airport');
    if (/(bus|stand|sindhi|bhankrota|civil lines)/.test(t))                return this.route('travel-bus');
    if (/(travel|reach|how to get|direction|commute|from)/.test(t))        return this.route('travel');
    if (/(haldi|sangeet|baraat|varmala|jaimala|pool|mayra|ceremony|royal)/.test(t)) return this.route('dates-all');
    if (/(day 1|first day|25 april|25th)/.test(t))                         return this.route('dates-day1');
    if (/(day 2|second day|26 april|26th|wedding day)/.test(t))            return this.route('dates-day2');
    if (/(date|when|schedule|event|time|program|timing|function)/.test(t)) return this.route('dates');
    if (/(whatsapp|group|community|join|chat)/.test(t))                    return this.route('whatsapp');
    if (/(contact|call|phone|number|enquir|help|ask)/.test(t))             return this.route('contact');
    if (/(parking|car|park|valet)/.test(t))                                return this.route('venue-parking');
    if (/(map|maps|navigate|navigation|gps|directions|route)/.test(t))     return this.route('venue-maps');
    if (/(bulbul|bride|arjoo|dulhan|girl|she|goyal gotra)/.test(t))        return this.route('bride');
    if (/(monu|manish|groom|dulha|boy|he|husband|gupta|airan)/.test(t))     return this.route('groom');
    if (/(hashtag|tag|instagram|insta|#)/.test(t))                         return this.route('hashtag');
    if (/(family|goyal|gupta|parent|father|mother|dad|mom|grandfather|grandmother|grandparent|gotra)/.test(t)) return this.route('couple');
    if (/(couple|love story|about them|who are|who is)/.test(t))           return this.route('couple');
    if (/(hi|hello|hey|namaste|hii|helo)/.test(t)) {
      this.addMsg('bot', "Hello! 😊 Great to see you here! How can I help you today?");
      return this.showMainMenu();
    }
    this.fallback();
  },

  fallback() {
    this.addMsg('bot', "I'm sorry, I couldn't find that information. 🙏<br>Would you like details about the <strong>venue, dates, travel,</strong> or <strong>contact person</strong>?");
    this.showMainMenu();
  },

  /* ── Message renderers ─────────────────────────────────── */
  addMsg(from, html) {
    const msgs = this.$('#armaan-messages');
    const div  = document.createElement('div');
    div.className = `armaan-msg armaan-msg--${from}`;
    div.innerHTML = `<div class="armaan-bubble">${html}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  },

  addQuickReplies(options) {
    const msgs = this.$('#armaan-messages');
    const row  = document.createElement('div');
    row.className = 'armaan-qr-row';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className   = 'armaan-qr-btn';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        row.querySelectorAll('.armaan-qr-btn').forEach(b => b.disabled = true);
        this.addMsg('user', opt.label);
        setTimeout(() => this.route(opt.action), 300);
      });
      row.appendChild(btn);
    });
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  },

  addBackBtn(parent = 'menu') {
    const btns = parent !== 'menu'
      ? [
          { label: '↩️ Previous Menu', action: parent },
          { label: '🏠 Main Menu',     action: 'menu' },
        ]
      : [{ label: '🏠 Main Menu', action: 'menu' }];
    this.addQuickReplies(btns);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  ARMAAN.init();
  /* Global hook for the navbar link */
  window.armaanOpen = () => ARMAAN.openChat();
});
