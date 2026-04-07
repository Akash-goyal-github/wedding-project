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
        { day:1, name:'Haldi Ceremony',           time:'12:00 PM Onwards',  loc:'Anant Mahal Courtyard',      emoji:'💛' },
        { day:1, name:'Mayra',                     time:'4:00 PM Onwards',   loc:'Anant Mahal Banquet Hall',   emoji:'🎁' },
        { day:1, name:'Sangeet Night',             time:'8:00 PM Onwards',   loc:'Anant Mahal Banquet Hall',   emoji:'🎶' },
        { day:2, name:'Pool Party',                time:'7:00 AM Onwards',   loc:'Anant Mahal Poolside',       emoji:'🌊' },
        { day:2, name:'Lagan at Groom Side',       time:'12:00 PM Onwards',  loc:'Anant Mahal Hall',           emoji:'🪔' },
        { day:2, name:'Baraat Procession',         time:'6:00 PM Onwards',   loc:'Anant Mahal Main Gate',      emoji:'🐎' },
        { day:2, name:'Jai Mala & Varmala',        time:'8:00 PM Onwards',   loc:'Anant Mahal, Mandap',        emoji:'💍' },
        { day:2, name:'Royal Wedding Ceremony',    time:'8:30 PM Onwards',   loc:'Anant Mahal, Royal Mandap',  emoji:'👑' },
      ],
    },
    meals: {
      always: 'Juices, Cold Drinks, Chaach, Fresh Fruits & Snacks are available throughout all celebrations on both days.',
      day1: [
        { meal:'Breakfast',         time:'Morning',           note:'Before Haldi begins',            emoji:'🌅' },
        { meal:'Lunch',             time:'12:00 PM Onwards',  note:'Served during Haldi Ceremony',   emoji:'🍽️' },
        { meal:'High Tea & Snacks', time:'2:00 PM Onwards',   note:'Haldi Onwards · During Mayra',   emoji:'☕' },
        { meal:'Dinner',            time:'8:00 PM Onwards',   note:'Served during Sangeet Night',    emoji:'🌙' },
      ],
      day2: [
        { meal:'Breakfast',         time:'7:00 AM Onwards',   note:'Pool Party Onwards',             emoji:'🍳' },
        { meal:'Lunch',             time:'12:00 PM Onwards',  note:'Served during Lagan',            emoji:'🍽️' },
        { meal:'High Tea & Snacks', time:'2:00 PM Onwards',   note:'Lagan Onwards',                  emoji:'☕' },
        { meal:'Dinner',            time:'7:00 PM Onwards',   note:'Before Jai Mala & Varmala',      emoji:'🌙' },
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
    instagram: {
      link: 'https://www.instagram.com/arjoo.ka.man',
      handle: '@arjoo.ka.man',
    },
    contacts: [
      { role:'Father of Bride', name:'Akhlesh Kumar Goyal', phone:'+91 94143 11762', tel:'tel:+919414311762' },
      { role:'Brother of Bride', name:'Akash Goyal',         phone:'+91 94608 14437', tel:'tel:+919460814437' },
    ],
    dress: {
      haldi:  { event:'Haldi Ceremony',    colors:'Lavender / Pink 💜🏽', emoji:'💛' },
      sangeet:{ event:'Sangeet Night',      colors:'Black & White 👚✨',     emoji:'🎶' },
      pool:   { event:'Pool Party',          colors:'Floral 🌺',               emoji:'🌊' },
      wedding:{ event:'Wedding Day',         colors:'Just come and enjoy! 🥰',  emoji:'👑' },
    },
    accommodation: {
      venue:   'Anant Mahal Palace, Patrakar Colony, Jaipur',
      status:  'Rooms have already been arranged for outstation guests at Anant Mahal Palace itself — right where all the celebrations are happening! 🏡',
      perks:   'Staying on-site means you won’t miss a single moment — no commuting, no rush, just pure celebration ✨',
      note:    'Your room allocation will be coordinated by the family. For details, please reach out to the contacts below.',
      food:    'All meals are included as part of the celebrations. Juices, snacks & refreshments available throughout.',
    },
    couple: {
      hashtag: '#Arjoo_ka_man',
      bride: {
        name:'Arjoo', fullTitle:'Aayushmati Arjoo', nickname:'Bulbul', gotra:'Goyal',
        from:'Suroth, Dist. Karauli, Rajasthan', state:'Rajasthan 🏜️',
        father:'Shri Akhlesh Kumar Goyal', mother:'Shrimati Lakshmi Devi',
        grandparents:'Late Shrimati Geeta Devi & Shri Murarilal Ji Goyal',
      },
      groom: {
        name:'Manish', fullTitle:'Aayushman Manish', nickname:'Monu', surname:'Gupta', gotra:'Airan',
        from:'Charkhi Dadri, Haryana', state:'Haryana 🌾',
        father:'Shri Pawan Kumar Gupta', mother:'Shrimati Bala Devi',
        grandparents:'Late Shrimati Sevanti Devi & Late Shri Jawahar Lal Gupta',
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
  state: { open: false, greeted: false, lang: null },

  /* ── i18n helper — falls back to EN if lang not set ─────── */
  L() { return ARMAAN_STRINGS[this.state.lang] || ARMAAN_STRINGS.en; },

  /* ── Init ──────────────────────────────────────────────── */
  init() {
    this.injectHTML();
    this.bindEvents();
    this.setupViewport();
    this.initEngagement();
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

      <div id="armaan-prompt" role="status" aria-live="polite" aria-label="Chat prompt" aria-hidden="true">
        <span id="armaan-prompt-avatar" aria-hidden="true">🤵</span>
        <span id="armaan-prompt-msg">Hi! I'm Armaan, can I help you with anything?</span>
        <button id="armaan-prompt-close" aria-label="Dismiss prompt" type="button">&times;</button>
      </div>

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
          <div id="armaan-input-wrap">
            <span id="armaan-hint" aria-hidden="true"></span>
            <input id="armaan-input" type="text" inputmode="text" placeholder=""
                   autocomplete="off" autocorrect="off" autocapitalize="off"
                   spellcheck="false" aria-label="Type your message"/>
          </div>
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
    widget.addEventListener('click', (e) => {
      if (e.target.closest('#armaan-toggle'))       { this.toggleChat();      return; }
      if (e.target.closest('#armaan-close'))        { this.closeChat();       return; }
      if (e.target.closest('#armaan-send'))         { this.handleInput();     return; }
      if (e.target.closest('#armaan-prompt-close')) { this._dismissPrompt();  return; }
    });
    input.addEventListener('keydown',    e => { if (e.key === 'Enter') this.handleInput(); });
    input.addEventListener('pointerdown', () => { this.stopHintCycle(); });
    input.addEventListener('blur',        () => { if (!input.value.trim()) this.startHintCycle(); });
    input.addEventListener('input',       () => {
      const el = document.getElementById('armaan-hint');
      if (el) el.style.opacity = input.value.trim() ? '0' : '';
    });
  },

  setupViewport() {
    if (!window.visualViewport) return;
    const MARGIN = 12;
    const reposition = () => {
      const vv     = window.visualViewport;
      const widget = document.getElementById('armaan-widget');
      const chat   = document.getElementById('armaan-chat');
      if (!widget) return;
      const keyboardH = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      widget.style.bottom = (keyboardH + MARGIN) + 'px';
      if (chat) {
        const available = vv.height - 90;
        chat.style.maxHeight = Math.min(520, Math.max(220, available)) + 'px';
      }
    };
    window.visualViewport.addEventListener('resize', reposition);
    window.visualViewport.addEventListener('scroll', reposition);
  },

  /* ── Open / close ──────────────────────────────────────── */
  toggleChat() { this.state.open ? this.closeChat() : this.openChat(); },
  openChat() {
    this._killEngagement();
    this.state.open = true;
    document.getElementById('armaan-widget').classList.add('armaan-open');
    document.getElementById('armaan-toggle').setAttribute('aria-expanded', 'true');
    if (!this.state.greeted) { this.pickLang(); this.state.greeted = true; }
    setTimeout(() => {
      document.getElementById('armaan-input').focus();
      this.startHintCycle();
    }, 50);
  },
  closeChat() {
    this.state.open = false;
    document.getElementById('armaan-widget').classList.remove('armaan-open');
    document.getElementById('armaan-toggle').setAttribute('aria-expanded', 'false');
    this.stopHintCycle();
  },

  /* ── Animated hint cycle ─────────────────────── */
  _hintTimer: null, _hintIdx: 0,
  startHintCycle(lang) {
    this.stopHintCycle();
    const sets = ARMAAN_STRINGS.hints;
    const qs   = sets[lang || this.state.lang || 'default'] || sets.default;
    this._hintIdx = 0;
    const el = document.getElementById('armaan-hint');
    if (!el) return;
    const show = () => {
      const inp = document.getElementById('armaan-input');
      if (inp && inp.value.trim()) return;
      el.textContent = qs[this._hintIdx % qs.length];
      el.classList.remove('armaan-hint--anim');
      void el.offsetWidth;
      el.classList.add('armaan-hint--anim');
      this._hintIdx++;
    };
    show();
    this._hintTimer = setInterval(show, 3400);
  },
  stopHintCycle() {
    clearInterval(this._hintTimer); this._hintTimer = null;
    const el = document.getElementById('armaan-hint');
    if (el) { el.classList.remove('armaan-hint--anim'); el.style.opacity = '0'; }
  },

  /* ── Language picker — always first message ────────────── */
  pickLang() {
    this.addMsg('bot',
      'Hi! I’m <strong>Armaan</strong> 🤵✨<br>' +
      'My name is a little love story —<br>' +
      '<span class="an-ar">AR</span><span class="an-rest">joo</span> + ' +
      '<span class="an-maan">MAAN</span><span class="an-rest">ish</span> = ' +
      '<span class="an-full">ARMAAN</span> 💛<br>' +
      'I’m here to help you celebrate their special day!'
    );
    this.addMsg('bot',
      'Welcome! 👋 &nbsp;·&nbsp; नमस्ते! 🙏<br>' +
      'Please choose your language &nbsp;·&nbsp; कृपया अपनी भाषा चुनें'
    );
    this.addQuickReplies([
      { label: '🇬🇧 English', action: 'lang-en' },
      { label: '🇮🇳 हिंदी',   action: 'lang-hi' },
    ]);
  },

  setLang(lang) {
    const switching = this.state.lang !== null;
    this.state.lang = lang;
    if (switching) {
      this.addMsg('bot', lang === 'hi'
        ? '🇮🇳 भाषा बदल दी गई! मैं अब हिंदी में बात करूँगा। 😊'
        : '🇬🇧 Language switched to English! Happy to help. 😊'
      );
      this.showMainMenu();
    } else {
      this.greet();
    }
    this.startHintCycle(lang);
  },

  /* ── Greeting ──────────────────────────────────────────── */
  greet() {
    this.addMsg('bot', this.state.lang === 'hi'
      ? 'नमस्ते! 🙏 आज मैं आपकी कैसे मदद कर सकता हूँ?'
      : 'Great! How can I help you today? 😊'
    );
    this.showMainMenu();
  },

  /* ── Main menu ─────────────────────────────────────────── */
  showMainMenu() {
    const hi = this.state.lang === 'hi';
    this.addQuickReplies([
      { label: hi ? '📍 वेन्यू'            : '📍 Venue',          action: 'venue'    },
      { label: hi ? '📅 शादी की तारीखें'  : '📅 Wedding Dates',  action: 'dates'    },
      { label: hi ? '✌️ यात्रा जानकारी'   : '✌️ Travel Info',    action: 'travel'    },
      { label: hi ? '💑 जोड़ा'             : '💑 The Couple',     action: 'couple'    },
      { label: hi ? '🎉 कम्युनिटी जोइन करें'  : '🎉 Join Communities',  action: 'communities' },
      { label: hi ? '📞 संपर्क'            : '📞 Contact',        action: 'contact'   },
      { label: hi ? '🍽️ भोजन व नाश्ता'    : '🍽️ Food & Meals',   action: 'meals'         },
      { label: hi ? '👑 ड्रेस कोड'         : '👑 Dress Code',       action: 'dress'         },
      { label: hi ? '🏨 ठहरने की जगह'       : '🏨 Where to Stay',    action: 'accommodation' },
      { label: hi ? '🇬🇧 Switch to English' : '🇮🇳 हिंदी में बदलें', action: hi ? 'lang-en' : 'lang-hi' },
    ]);
  },

  /* ── Route action ──────────────────────────────────────── */
  route(action) {
    const handlers = {
      'lang-en':       () => this.setLang('en'),
      'lang-hi':       () => this.setLang('hi'),
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
      instagram:        () => this.instagramInfo(),
      communities:      () => this.communitiesInfo(),
      contact:         () => this.contactInfo(),
      meals:           () => this.mealsMenu(),
      'meals-day1':    () => this.mealsDay(1),
      'meals-day2':    () => this.mealsDay(2),
      'meals-always':  () => this.mealsAlways(),
      dress:           () => this.dressCode(),
      accommodation:   () => this.accommodationInfo(),
      couple:          () => this.coupleMenu(),
      bride:           () => this.brideInfo(),
      groom:           () => this.groomInfo(),
      hashtag:         () => this.hashtagInfo(),
      family:          () => this.familyInfo(),
      menu:            () => { this.addMsg('bot', this.state.lang === 'hi' ? 'मैं किसमें मदद कर सकता हूँ? 😊' : "Here's what I can help with! 😊"); this.showMainMenu(); },
    };
    (handlers[action] || (() => this.fallback()))();
  },

  /* ── Venue ─────────────────────────────────────────────── */
  venueMenu() {
    const s = this.L().venue;
    this.addMsg('bot', s.menu);
    this.addQuickReplies([
      { label: s.btnAddr, action: 'venue-address' },
      { label: s.btnMaps, action: 'venue-maps'    },
      { label: s.btnPark, action: 'venue-parking' },
      { label: s.btnBack, action: 'menu'          },
    ]);
  },
  venueAddress() {
    this.addMsg('bot', this.L().venue.address(this.data.venue));
    this.addBackBtn('venue');
  },
  venueMaps() {
    const s = this.L().venue;
    this.addMsg('bot', `${s.maps}<a href="${this.data.venue.maps}" target="_blank" rel="noopener" class="armaan-link">${s.mapsLink}</a>`);
    this.addBackBtn('venue');
  },
  venueParking() {
    this.addMsg('bot', this.L().venue.parking(this.data.venue));
    this.addBackBtn('venue');
  },

  /* ── Dates ─────────────────────────────────────────────── */
  datesMenu() {
    const s = this.L().dates;
    this.addMsg('bot', s.menu);
    this.addQuickReplies([
      { label: s.btnAll,  action: 'dates-all'  },
      { label: s.btnDay1, action: 'dates-day1' },
      { label: s.btnDay2, action: 'dates-day2' },
      { label: s.btnBack, action: 'menu'        },
    ]);
  },
  datesAll() {
    const s  = this.L().dates;
    const ev = this.data.dates.events;
    let html = s.allTitle + '<br><br>';
    html += `<em>${s.day1Lbl(this.data.dates.day1)}</em><br>`;
    ev.filter(e => e.day === 1).forEach(e => {
      html += `<br>${e.emoji} <strong>${s.events[e.name] || e.name}</strong><br>${s.t} ${e.time}<br>${s.l} ${e.loc}<br>`;
    });
    html += `<br><em>${s.day2Lbl(this.data.dates.day2)}</em><br>`;
    ev.filter(e => e.day === 2).forEach(e => {
      html += `<br>${e.emoji} <strong>${s.events[e.name] || e.name}</strong><br>${s.t} ${e.time}<br>${s.l} ${e.loc}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('dates');
  },
  datesDay(day) {
    const s   = this.L().dates;
    const ev  = this.data.dates.events.filter(e => e.day === day);
    const lbl = day === 1 ? s.day1Lbl(this.data.dates.day1) : s.day2Lbl(this.data.dates.day2);
    let html  = `📅 <strong>${lbl}</strong><br>`;
    ev.forEach(e => {
      html += `<br>${e.emoji} <strong>${s.events[e.name] || e.name}</strong><br>${s.t} ${e.time}<br>${s.l} ${e.loc}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('dates');
  },

  /* ── Travel ────────────────────────────────────────────── */
  travelMenu() {
    const s = this.L().travel;
    this.addMsg('bot', s.menu);
    this.addQuickReplies([
      { label: s.btnTrain,   action: 'travel-train'   },
      { label: s.btnAirport, action: 'travel-airport' },
      { label: s.btnBus,     action: 'travel-bus'     },
      { label: s.btnBack,    action: 'menu'           },
    ]);
  },
  travelTrain() {
    const s      = this.L().travel;
    const nearest = this.data.train.find(t => t.nearest);
    let html = `${s.nearStn}<br><br>`;
    html += `⭐ <strong>${nearest.name}</strong> — ${nearest.dist} · ~${nearest.time}<br>`;
    html += `<a href="${nearest.maps}" target="_blank" rel="noopener" class="armaan-link">${s.routeLink}</a><br>`;
    html += `<br><em>${s.otherStn}</em><br>`;
    this.data.train.filter(t => !t.nearest).forEach(t => {
      html += `🚉 ${t.name} — ${t.dist} · ~${t.time}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('travel');
  },
  travelAirport() {
    const s = this.L().travel;
    const a = this.data.airport;
    const html = `✈️ <strong>${a.name}</strong><br>${a.sub}<br><br>⏱ ${a.time} &nbsp;|&nbsp; 📍 ${a.dist}<br><br>${a.note}<br><br><a href="${a.maps}" target="_blank" rel="noopener" class="armaan-link">${s.routeLink}</a>`;
    this.addMsg('bot', html);
    this.addBackBtn('travel');
  },
  travelBus() {
    const s      = this.L().travel;
    const nearest = this.data.bus.find(b => b.nearest);
    let html = `${s.nearBus}<br><br>`;
    html += `⭐ <strong>${nearest.name}</strong><br>${nearest.sub}<br>⏱ ${nearest.time} · 📍 ${nearest.dist}<br>`;
    html += `<br><em>${s.otherBus}</em><br>`;
    this.data.bus.filter(b => !b.nearest).forEach(b => {
      html += `🚌 ${b.name} — ${b.dist} · ~${b.time}<br>`;
    });
    this.addMsg('bot', html);
    this.addBackBtn('travel');
  },

  /* ── WhatsApp ──────────────────────────────────────────── */
  whatsappInfo() {
    const s  = this.L();
    const wa = this.data.whatsapp;
    this.addMsg('bot', `${s.whatsapp(wa)}<a href="${wa.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--wa">${s.waLink}</a>`);
    this.addBackBtn('menu');
  },

  instagramInfo() {
    const hi = this.state.lang === 'hi';
    const ig = this.data.instagram;
    this.addMsg('bot', hi
      ? `📸 <strong>Instagram फ़ॉलो करें!</strong><br><br>` +
        `हल्दी से शाدी तक — हर ख़ूबसूरत पल को कैमरे में कैتा हुआ है! ✨<br><br>` +
        `📍 <strong>${ig.handle}</strong><br><br>` +
        `<a href="${ig.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--ig">📸 Instagram पर फ़ॉलो करें</a>`
      : `📸 <strong>Follow us on Instagram!</strong><br><br>` +
        `Every candid moment from Haldi to the Big Day — all in one place. Come follow along! ✨<br><br>` +
        `📍 <strong>${ig.handle}</strong><br><br>` +
        `<a href="${ig.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--ig">📸 Follow on Instagram</a>`);
    this.addBackBtn('menu');
  },

  communitiesInfo() {
    const hi = this.state.lang === 'hi';
    const wa = this.data.whatsapp;
    const ig = this.data.instagram;
    this.addMsg('bot', hi
      ? `🎉 <strong>हमारे साथ जुड़ें!</strong><br><br>` +
        `💬 <strong>WhatsApp</strong> — लाइव अपडेट, फोटो और सारी खुशियाँ सीधे आपके WhatsApp पर!<br>` +
        `<a href="${wa.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--wa">💬 WhatsApp ग्रुप जोइन करें</a><br><br>` +
        `📸 <strong>Instagram</strong> — हल्दी से शाدी तक हर पल की ख़ूबसूरत तस्वीरें — सब एक जगह!<br>` +
        `<a href="${ig.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--ig">📸 Instagram पर फ़ॉलो करें</a>`
      : `🎉 <strong>Join us on both communities!</strong><br><br>` +
        `💬 <strong>WhatsApp</strong> — Live updates, photos, schedules & all the fun — straight to your WhatsApp!<br>` +
        `<a href="${wa.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--wa">💬 Join WhatsApp Group</a><br><br>` +
        `📸 <strong>Instagram</strong> — Every beautiful moment from Haldi to the Big Day, all in one feed!<br>` +
        `<a href="${ig.link}" target="_blank" rel="noopener" class="armaan-link armaan-link--ig">📸 Follow on Instagram</a>`);
    this.addBackBtn('menu');
  },

  /* ── Contact ───────────────────────────────────────────── */
  contactInfo() {
    const s = this.L().contact;
    let html = `${s.title}<br><br>`;
    this.data.contacts.forEach(c => {
      html += `👤 <strong>${c.name}</strong><br><em>${s.roles[c.role] || c.role}</em><br><a href="${c.tel}" class="armaan-link">${c.phone}</a><br><br>`;
    });
    this.addMsg('bot', html.trim());
    this.addBackBtn('menu');
  },

  /* ── Meals ──────────────────────────────────────── */
  mealsMenu() {
    const s = this.L().meals;
    this.addMsg('bot', s.menu);
    this.addQuickReplies([
      { label: s.btnDay1,   action: 'meals-day1'   },
      { label: s.btnDay2,   action: 'meals-day2'   },
      { label: s.btnAlways, action: 'meals-always' },
      { label: this.L().backMain, action: 'menu'   },
    ]);
  },
  mealsDay(day) {
    const s    = this.L().meals;
    const list = day === 1 ? this.data.meals.day1 : this.data.meals.day2;
    const date = day === 1 ? this.data.dates.day1 : this.data.dates.day2;
    const lbl  = day === 1 ? s.day1Lbl(date) : s.day2Lbl(date);
    let html   = `🍽️ <strong>${lbl}</strong><br><br>`;
    list.forEach(({ meal, time, note, emoji }) => {
      html += `${emoji} <strong>${s.mealNames[meal] || meal}</strong><br>⏰ ${time}<br><em>📝 ${s.mealNotes[note] || note}</em><br><br>`;
    });
    html += `✨ ${s.alwaysShort}`;
    this.addMsg('bot', html);
    this.addBackBtn('meals');
  },
  mealsAlways() {
    const s = this.L().meals;
    this.addMsg('bot', `🥤 <strong>${s.alwaysTitle}</strong><br><br>${s.alwaysBody}`);
    this.addBackBtn('meals');
  },
  dressCode() {
    const hi = this.state.lang === 'hi';
    const d  = this.data.dress;
    this.addMsg('bot', hi
      ? `👗 <strong>ड्रेस कोड</strong><br><br>` +
        `${d.haldi.emoji} <strong>हल्दी:</strong> ${d.haldi.colors}<br>` +
        `${d.sangeet.emoji} <strong>संगीत:</strong> ${d.sangeet.colors}<br>` +
        `${d.pool.emoji} <strong>पूल पार्टी:</strong> ${d.pool.colors}<br>` +
        `${d.wedding.emoji} <strong>शाدी का दिन:</strong> ${d.wedding.colors}<br><br>` +
        `<em>बस खुशियों के साथ आइए — यही सबसे बड़ी खूबसूरती है! 🥰</em>`
      : `👗 <strong>Dress Code</strong><br><br>` +
        `${d.haldi.emoji} <strong>Haldi:</strong> ${d.haldi.colors}<br>` +
        `${d.sangeet.emoji} <strong>Sangeet:</strong> ${d.sangeet.colors}<br>` +
        `${d.pool.emoji} <strong>Pool Party:</strong> ${d.pool.colors}<br>` +
        `${d.wedding.emoji} <strong>Wedding Day:</strong> ${d.wedding.colors}<br><br>` +
        `<em>No stress, just show up with good energy and warm smiles — that’s all we need! 🥰</em>`);
    this.addBackBtn('menu');
  },
  accommodationInfo() {
    const hi = this.state.lang === 'hi';
    this.addMsg('bot', hi
      ? `🏡 <strong>ठहरने की व्यवस्था</strong><br><br>` +
        `अच्छी खबर! बाहर से आने वाले मेहमानों के लिए अनंत महल में ही रहने की व्यवस्था की गई है — आपको कहीं जाने की ज़रूरत नहीं! 🙏<br><br>` +
        `🍽️ खाना-पीना सब उत्सव का हिस्सा है — जूस, छाछ व नाश्ता हर वक्त मॉजूद रहेगा।<br><br>` +
        `📞 कमरा आवंटन के लिए परिवार से संपर्क करें — वे आपकी पूरी मदद करेंगे!`
      : `🏡 <strong>Accommodation</strong><br><br>` +
        `Good news! Outstation guests will be staying right here at Anant Mahal — no need to worry about going anywhere. 🙏<br><br>` +
        `🍽️ Meals are taken care of as part of the celebrations — juices, chaach & snacks available throughout.<br><br>` +
        `📞 For room details, just get in touch with the family — they’ll sort everything out for you!`);
    this.addBackBtn('menu');
  },

  /* ── Couple ─────────────────────────────────────── */
  coupleMenu() {
    const s = this.L().couple;
    this.addMsg('bot', s.menu);
    this.addQuickReplies([
      { label: s.btnBride,  action: 'bride'   },
      { label: s.btnGroom,  action: 'groom'   },
      { label: s.btnHash,   action: 'hashtag' },
      { label: s.btnFamily, action: 'family'  },
      { label: s.btnBack,   action: 'menu'    },
    ]);
  },
  brideInfo() {
    const s = this.L().couple;
    const b = this.data.couple.bride;
    this.addMsg('bot',
      `👰 <strong>${b.fullTitle}</strong><br>
       🐦 ${s.lovelyCall} <strong>${b.nickname}</strong><br>
       🔱 ${s.gotra}: <strong>${b.gotra}</strong><br><br>
       📍 ${s.from}: <strong>${b.from}</strong><br>
       🏜️ ${s.stateLabel}: ${b.state}<br><br>
       👨‍👩‍👧 <strong>${s.daughterOf}</strong><br>
       &nbsp;&nbsp;&nbsp;${b.father}<br>
       &nbsp;&nbsp;&nbsp;${b.mother}<br><br>
       🙏 <strong>${s.eternalOf}</strong><br>
       &nbsp;&nbsp;&nbsp;${b.grandparents}`);
    this.addBackBtn('couple');
  },
  groomInfo() {
    const s = this.L().couple;
    const g = this.data.couple.groom;
    this.addMsg('bot',
      `🤵 <strong>${g.fullTitle} ${g.surname}</strong><br>
       💪 ${s.lovelyCall} <strong>${g.nickname}</strong><br>
       🔱 ${s.gotra}: <strong>${g.gotra}</strong><br><br>
       📍 ${s.from}: <strong>${g.from}</strong><br>
       🌾 ${s.stateLabel}: ${g.state}<br><br>
       👨‍👩‍👦 <strong>${s.sonOf}</strong><br>
       &nbsp;&nbsp;&nbsp;${g.father}<br>
       &nbsp;&nbsp;&nbsp;${g.mother}<br><br>
       🙏 <strong>${s.eternalOf}</strong><br>
       &nbsp;&nbsp;&nbsp;${g.grandparents}`);
    this.addBackBtn('couple');
  },
  hashtagInfo() {
    const s = this.L().couple;
    const h = this.data.couple.hashtag;
    this.addMsg('bot',
      `${s.hashTitle}<br><br>
       🎉 <strong style="font-size:1.05em">${h}</strong><br><br>
       ${s.hashNote}`);
    this.addBackBtn('couple');
  },
  familyInfo() {
    const s = this.L().couple;
    const f = this.data.couple.family;
    let html = `${s.famTitle}<br>📍 ${f.location}<br><br>`;
    html += `${s.reqFrom}<br>${f.requestFrom.join('<br>')}<br><br>`;
    html += `${s.hosts}<br>${f.hosts.join(' &nbsp;·&nbsp; ')}<br><br>`;
    html += `${s.blessings}<br>${f.blessings.join(' · ')}<br><br>`;
    html += `${s.maternal}<br>${f.maternal.join('<br>')}`;
    this.addMsg('bot', html);
    this.addBackBtn('couple');
  },

  /* ── Engagement system ────────────────────────────────────── */
  _engTimers:   [],
  _engScrollFn: null,
  _promptShown: false,   /* in-memory only — resets on every fresh page load */

  initEngagement() {
    /* If the gate overlay is present, wait for it to finish
       before starting any engagement timers.              */
    if (document.getElementById('gateOverlay')) {
      document.addEventListener('gateOpened', () => this._startEngagement(), { once: true });
    } else {
      /* No gate (e.g. river.html or direct link) — small warmup delay */
      setTimeout(() => this._startEngagement(), 800);
    }
  },

  _startEngagement() {
    const toggle = document.getElementById('armaan-toggle');

    /* ─ Step 1: glow at 2 s after gate closes ─ */
    this._engTimers.push(setTimeout(() => {
      if (this.state.open) return;
      toggle.classList.add('armaan--glow');
      toggle.addEventListener('animationend', () => {
        toggle.classList.remove('armaan--glow');

        /* ─ Step 2: bounce 400 ms after glow ends ─ */
        this._engTimers.push(setTimeout(() => {
          if (this.state.open) return;
          toggle.classList.add('armaan--bounce');
          toggle.addEventListener('animationend', () => {
            toggle.classList.remove('armaan--bounce');
          }, { once: true });
        }, 400));

      }, { once: true });
    }, 2000));

    /* ─ Step 3a: scroll 45 % triggers prompt ─ */
    this._engScrollFn = () => {
      if (this.state.open || this._promptShown) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable < 100) return;
      const pct = window.scrollY / scrollable;
      if (pct >= 0.45) this._showPrompt();
    };
    window.addEventListener('scroll', this._engScrollFn, { passive: true });

    /* ─ Step 3b: show prompt 4 s after gate closes (if no scroll) ─ */
    this._engTimers.push(setTimeout(() => {
      if (!this.state.open) this._showPrompt();
    }, 4000));
  },

  _showPrompt() {
    if (this._promptShown) return;
    this._promptShown = true;
    this._removeScrollListener();

    const prompt = document.getElementById('armaan-prompt');
    if (!prompt) return;

    /* Step 1: make it flex so it exists in layout */
    prompt.style.display = 'flex';

    /* Step 2: double-rAF ensures the browser paints display:flex
       before we trigger the opacity/transform transition */
    requestAnimationFrame(() => requestAnimationFrame(() => {
      prompt.classList.add('armaan-prompt--visible');
      prompt.removeAttribute('aria-hidden');
    }));

    /* Auto-dismiss after 12 s */
    this._engTimers.push(setTimeout(() => this._hidePrompt(), 12000));
  },

  _dismissPrompt() {
    this._promptShown = true;
    this._hidePrompt();
  },

  _hidePrompt() {
    const prompt = document.getElementById('armaan-prompt');
    if (!prompt) return;
    prompt.classList.remove('armaan-prompt--visible');
    prompt.classList.add('armaan-prompt--hiding');
    prompt.setAttribute('aria-hidden', 'true');
    /* Restore display:none after fade-out animation (.35 s) */
    setTimeout(() => {
      prompt.classList.remove('armaan-prompt--hiding');
      prompt.style.display = 'none';
    }, 380);
  },

  _removeScrollListener() {
    if (this._engScrollFn) {
      window.removeEventListener('scroll', this._engScrollFn);
      this._engScrollFn = null;
    }
  },

  _killEngagement() {
    this._engTimers.forEach(clearTimeout);
    this._engTimers = [];
    this._removeScrollListener();
    this._hidePrompt();
    const toggle = document.getElementById('armaan-toggle');
    if (toggle) toggle.classList.remove('armaan--glow', 'armaan--bounce');
  },

  /* ── Free-text handler ──────────────────────────────────────── */
  handleInput() {
    const input = this.$('#armaan-input');
    const text  = input.value.trim();
    if (!text) return;
    this.addMsg('user', text);
    input.value = '';
    if (!this.state.lang) this.state.lang = 'en';   /* default if typed before picking */
    setTimeout(() => this.parseText(text.toLowerCase()), 400);
  },

  parseText(t) {
    /* ─ Name-specific checks first — before generic venue/where catch ─ */
    if (/(bride|bulbul|arjoo|dulhan|दुल्हन|अर्जू|बुलबुल|suroth|karauli|सुरोठ|करौली|akhlesh|lakshmi|goyal gotra)/.test(t)) return this.route('bride');
    if (/(monu|manish|groom|dulha|दूल्हा|मनीष|मोनू|charkhi|dadri|haryana|हरियाणा|pawan|bala devi|gupta|airan)/.test(t)) return this.route('groom');
    if (/(venue|where|address|location|place|mahal|anant|स्थान|जगह|पता|महल)/.test(t))              return this.route('venue');
    if (/(train|railway|station|rail|durgapura|jaipur jn|gandhi|रेल|ट्रेन|स्टेशन)/.test(t))        return this.route('travel-train');
    if (/(airport|fly|flight|air|plane|jai|sanganer|हवाई|एयरपोर्ट)/.test(t))                       return this.route('travel-airport');
    if (/(bus|stand|sindhi|bhankrota|civil lines|बस स्टैंड)/.test(t))                              return this.route('travel-bus');
    if (/(travel|reach|how to get|direction|commute|यात्रा|कैसे आएं|रास्ता)/.test(t))              return this.route('travel');
    if (/(haldi|sangeet|baraat|varmala|jaimala|pool|mayra|ceremony|royal|lagan|हल्दी|संगीत|बारात|लग्न)/.test(t) &&
        /(theme|color|colour|wear|dress|outfit|clothes|attire|रंग|पहन|कपड़)/.test(t))              return this.route('dress');
    if (/(haldi|sangeet|baraat|varmala|jaimala|pool|mayra|ceremony|royal|lagan|हल्दी|संगीत|बारात|लग्न)/.test(t)) return this.route('dates-all');
    if (/(breakfast|नाश्ता|morning meal|subah ka khana)/.test(t))                      return this.route('meals-day1');
    if (/(lunch|दोपहर का खाना|dopahar|dopaher|afternoon meal)/.test(t))             return this.route('meals-day1');
    if (/(dinner|रात का खाना|raat ka khana|night meal)/.test(t))                        return this.route('meals-day1');
    if (/(high tea|snack|refreshment|चाय|नाश्ता|chaach|juice|cold drink)/.test(t))           return this.route('meals');
    if (/(food|meal|eat|khana|khaana|खाना|भोजन|menu|catering)/.test(t))                       return this.route('meals');
    if (/(day 1|first day|25 april|25th|पहला दिन)/.test(t))                                        return this.route('dates-day1');
    if (/(day 2|second day|26 april|26th|wedding day|दूसरा दिन|शाدी का दिन)/.test(t))              return this.route('dates-day2');
    if (/(date|when|schedule|event|time|program|timing|function|तारीख|कब|कार्यक्रम|समय)/.test(t))  return this.route('dates');
    if (/(community|communities|social|join us|both|सामुदाय|join.*us)/.test(t))        return this.route('communities');
    if (/(whatsapp|व्हाट्सएप|group|ग्रुप|chat|wapp)/.test(t))            return this.route('whatsapp');
    if (/(instagram|insta|ig|follow|reel|arjoo.ka.man|इंस्टाग्राम)/.test(t))  return this.route('instagram');
    if (/(contact|call|phone|number|enquir|help|ask|संपर्क|फ़ोन|मदद)/.test(t))                    return this.route('contact');
    if (/(parking|car|park|valet|पार्किंग|गाड़ी)/.test(t))                                        return this.route('venue-parking');
    if (/(map|maps|navigate|navigation|gps|directions|route|नक्शा|दिशा)/.test(t))                  return this.route('venue-maps');
    if (/(dress|wear|attire|outfit|clothes|what to wear|पहनावा|कपड़े|ड्रेस)/.test(t))              return this.route('dress');
    if (/(hotel|stay|accommodation|room|lodge|oyo|where to stay|रुकना|होटल|ठहरना)/.test(t))          return this.route('accommodation');
    if (/(love story|how.*meet|about them|two states|rajasthan.*haryana|haryana.*rajasthan|story|प्रेम कहानी|कैसे मिले)/.test(t)) return this.route('couple');
    if (/(hashtag|tag|#|हैशटैग)/.test(t))                                         return this.route('hashtag');
    if (/(family|goyal|parent|dad|mom|grandparent|gotra|परिवार|माता|पिता|गोत्र)/.test(t)) return this.route('couple');
    if (/(couple|who are|who is|जोड़ा|दोनों)/.test(t))                                    return this.route('couple');
    if (/(hi|hello|hey|namaste|hii|helo|नमस्ते|राम राम)/.test(t)) {
      this.addMsg('bot', this.state.lang === 'hi'
        ? 'नमस्ते! 😊 आपसे मिलकर अच्छा लगा! आज मैं आपकी कैसे मदद कर सकता हूँ?'
        : 'Hello! 😊 Great to see you here! How can I help you today?'
      );
      return this.showMainMenu();
    }

    /* ─ Easter egg: name origin ─ */
    if (/(who are you|your name|armaan mean|why armaan|name mean|what.*armaan|armaan.*name|नाम|आप कौन|armaan कौन)/.test(t)) {
      this.addMsg('bot', this.state.lang === 'hi'
        ? '🤵 मैं <strong>Armaan</strong> हूँ!<br>मेरा नाम दो नामों से बना है —<br>💛 <span class="an-ar">AR</span><span class="an-rest">joo</span> + <span class="an-maan">MAAN</span><span class="an-rest">ish</span> = <span class="an-full">ARMAAN</span><br>जब दो दिल मिलते हैं, तो एक नया नाम जन्म लेता है! 🥰'
        : "🤵 I'm <strong>Armaan</strong>!<br>My name is made from two names —<br>💛 <span class=\"an-ar\">AR</span><span class=\"an-rest\">joo</span> + <span class=\"an-maan\">MAAN</span><span class=\"an-rest\">ish</span> = <span class=\"an-full\">ARMAAN</span><br>When two hearts meet, a new name is born! 🥰"
      );
      return this.showMainMenu();
    }

    this.fallback();
  },

  fallback() {
    this.addMsg('bot', this.state.lang === 'hi'
      ? 'माफ़ करें, मुझे यह जानकारी नहीं मिली। 🙏<br>क्या आप <strong>वेन्यू, तारीखें, यात्रा</strong> या <strong>संपर्क</strong> के बारे में जानना चाहते हैं?'
      : "I'm sorry, I couldn't find that information. 🙏<br>Would you like details about the <strong>venue, dates, travel,</strong> or <strong>contact person</strong>?"
    );
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
    const s    = this.L();
    const btns = parent !== 'menu'
      ? [{ label: s.backPrev, action: parent }, { label: s.backMain, action: 'menu' }]
      : [{ label: s.backMain, action: 'menu' }];
    this.addQuickReplies(btns);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  ARMAAN.init();
  window.armaanOpen = () => ARMAAN.openChat();
});
