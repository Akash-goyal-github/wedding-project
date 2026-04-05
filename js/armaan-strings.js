/* ─────────────────────────────────────────────────────────────
   armaan-strings.js — EN / HI UI copy for Ask Armaan chatbot
   Add a new language key here; armaan.js needs zero changes.
───────────────────────────────────────────────────────────── */

const ARMAAN_STRINGS = {

  en: {
    backPrev : '↩️ Previous Menu',
    backMain : '🏠 Main Menu',

    venue: {
      menu     : '📍 <strong>Anant Mahal</strong> — what would you like to know?',
      btnAddr  : '🏠 Full Address',
      btnMaps  : '🗺 Google Maps',
      btnPark  : '🚗 Parking Info',
      btnBack  : '↩️ Main Menu',
      address  : v => `The wedding will take place at:<br><br>📍 <strong>${v.name}</strong><br>${v.address}`,
      maps     : `Here's the Google Maps link to reach us directly! 🗺<br><br>`,
      mapsLink : 'Open in Google Maps ↗',
      parking  : v => `🚗 <strong>Parking Info</strong><br><br>${v.parking}`,
    },

    dates: {
      menu     : '📅 The wedding is on <strong>25th & 26th April 2026</strong>. What would you like to know?',
      btnAll   : '📋 Full Schedule',
      btnDay1  : '🌸 Day 1 Events',
      btnDay2  : '💍 Day 2 Events',
      btnBack  : '↩️ Main Menu',
      allTitle : '📅 <strong>Complete Wedding Schedule</strong>',
      day1Lbl  : d => `Day 1 — ${d}`,
      day2Lbl  : d => `Day 2 — ${d} (Wedding Day)`,
      t        : '⏰',
      l        : '📍',
      events   : {},  /* English names used as-is from data */
    },

    travel: {
      menu       : 'How are you planning to travel? 🧳',
      btnTrain   : '🚂 Railway Station',
      btnAirport : '✈️ Airport',
      btnBus     : '🚌 By Bus',
      btnBack    : '↩️ Main Menu',
      nearStn    : '🚂 <strong>Nearest Railway Station</strong>',
      otherStn   : 'Other stations nearby:',
      nearBus    : '🚌 <strong>Nearest Bus Stand</strong>',
      otherBus   : 'Other bus stops:',
      routeLink  : '🗺 Get Route ↗',
    },

    whatsapp : wa => `Join our wedding WhatsApp community for live updates, photos & all the fun! 🎉<br><br>💬 <strong>${wa.name}</strong><br><br>`,
    waLink   : 'Join Community ↗',

    contact: {
      title : '📞 <strong>For Enquiries</strong>',
      roles : { 'Father of Bride': 'Father of Bride', 'Brother of Bride': 'Brother of Bride' },
    },

    meals: {
      menu        : '🍽️ <strong>Food & Meals</strong><br>What would you like to know?',
      btnDay1     : '🌅 Day 1 — 25th April',
      btnDay2     : '🌙 Day 2 — 26th April',
      btnAlways   : '🥤 Always Available',
      day1Lbl     : d => `Day 1 — ${d}`,
      day2Lbl     : d => `Day 2 — ${d}`,
      alwaysShort : 'Juices · Cold Drinks · Chaach · Fresh Fruits & Snacks available throughout!',
      alwaysTitle : 'Always Available — Both Days',
      alwaysBody  : '🥤 Fresh Juices<br>🥤 Cold Drinks<br>🥤 Chaach<br>🍎 Fresh Fruits<br>🍿 Snacks<br><br><em>Available throughout all celebrations on both days. 🙏</em>',
      mealNames   : {
        'Breakfast'         : 'Breakfast',
        'Lunch'             : 'Lunch',
        'High Tea & Snacks' : 'High Tea & Snacks',
        'Dinner'            : 'Dinner',
      },
      mealNotes   : {
        'Before Haldi begins'          : 'Before Haldi begins',
        'Served during Haldi Ceremony' : 'Served during Haldi Ceremony',
        'Haldi Onwards · During Mayra' : 'Haldi Onwards · During Mayra',
        'Served during Sangeet Night'  : 'Served during Sangeet Night',
        'Pool Party Onwards'           : 'Pool Party Onwards',
        'Served during Lagan'          : 'Served during Lagan',
        'Lagan Onwards'                : 'Lagan Onwards',
        'Before Jai Mala & Varmala'    : 'Before Jai Mala & Varmala',
      },
    },

    couple: {
      menu      : '💑 <strong>About Arjoo & Manish</strong><br>What would you like to know?',
      btnBride  : '👰 About Arjoo (Bulbul)',
      btnGroom  : '🤵 About Manish',
      btnHash   : '#️⃣ Wedding Hashtag',
      btnFamily : '🏡 Family Details',
      btnBack   : '🏠 Main Menu',
      lovelyCall: 'Lovingly called',
      gotra     : 'Gotra',
      from      : 'From',
      stateLabel: 'State',
      daughterOf: 'Daughter of',
      sonOf     : 'Son of',
      eternalOf : 'Eternal Blessings of',
      hashTitle : '#️⃣ <strong>Official Wedding Hashtag</strong>',
      hashNote  : 'Use it on Instagram, Facebook & everywhere to share your moments! 📸✨',
      famTitle  : '🏡 <strong>The Goyal Family</strong>',
      reqFrom   : '🙏 <strong>Request From</strong>',
      hosts     : '🌸 <strong>Your Hosts</strong>',
      blessings : '✨ <strong>Special Blessings</strong>',
      maternal  : '🌺 <strong>Maternal Side</strong>',
    },
  },

  /* ─────────── हिंदी ─────────── */
  hi: {
    backPrev : '↩️ पिछला मेनू',
    backMain : '🏠 मुख्य मेनू',

    venue: {
      menu     : '📍 <strong>अनंत महल</strong> — आप क्या जानना चाहते हैं?',
      btnAddr  : '🏠 पूरा पता',
      btnMaps  : '🗺 Google Maps',
      btnPark  : '🚗 पार्किंग जानकारी',
      btnBack  : '↩️ मुख्य मेनू',
      address  : v => `शादी यहाँ होगी:<br><br>📍 <strong>${v.name}</strong><br>${v.address}`,
      maps     : 'Google Maps से सीधे पहुँचें! 🗺<br><br>',
      mapsLink : 'Google Maps में खोलें ↗',
      parking  : v => `🚗 <strong>पार्किंग जानकारी</strong><br><br>${v.parking}`,
    },

    dates: {
      menu     : '📅 शादी <strong>25 & 26 अप्रैल 2026</strong> को है। आप क्या जानना चाहते हैं?',
      btnAll   : '📋 पूरा कार्यक्रम',
      btnDay1  : '🌸 दिन 1 के कार्यक्रम',
      btnDay2  : '💍 दिन 2 के कार्यक्रम',
      btnBack  : '↩️ मुख्य मेनू',
      allTitle : '📅 <strong>पूरा शादी कार्यक्रम</strong>',
      day1Lbl  : d => `दिन 1 — ${d}`,
      day2Lbl  : d => `दिन 2 — ${d} (शादी का दिन)`,
      t        : '⏰',
      l        : '📍',
      events   : {
        'Haldi Ceremony'        : 'हल्दी समारोह',
        'Mayra'                 : 'मायरा',
        'Sangeet Night'         : 'संगीत रात',
        'Pool Party'            : 'पूल पार्टी',
        'Lagan at Groom Side'   : 'दूल्हे की तरफ लग्न',
        'Baraat Procession'     : 'बारात',
        'Jai Mala & Varmala'    : 'जयमाला & वरमाला',
        'Royal Wedding Ceremony': 'शाही विवाह समारोह',
      },
    },

    travel: {
      menu       : 'आप कैसे आने की सोच रहे हैं? 🧳',
      btnTrain   : '🚂 रेलवे स्टेशन',
      btnAirport : '✈️ हवाई अड्डा',
      btnBus     : '🚌 बस से',
      btnBack    : '↩️ मुख्य मेनू',
      nearStn    : '🚂 <strong>नज़दीकी रेलवे स्टेशन</strong>',
      otherStn   : 'पास के अन्य स्टेशन:',
      nearBus    : '🚌 <strong>नज़दीकी बस स्टैंड</strong>',
      otherBus   : 'पास के अन्य बस स्टॉप:',
      routeLink  : '🗺 रास्ता देखें ↗',
    },

    whatsapp : wa => `शादी के लाइव अपडेट, फ़ोटो व मज़े के लिए हमारे WhatsApp कम्युनिटी से जुड़ें! 🎉<br><br>💬 <strong>${wa.name}</strong><br><br>`,
    waLink   : 'कम्युनिटी जॉइन करें ↗',

    contact: {
      title : '📞 <strong>पूछताछ के लिए</strong>',
      roles : { 'Father of Bride': 'दुल्हन के पिता', 'Brother of Bride': 'दुल्हन के भाई' },
    },

    meals: {
      menu        : '🍽️ <strong>भोजन व नाश्ता</strong><br>आप क्या जानना चाहते हैं?',
      btnDay1     : '🌅 दिन 1 — 25 अप्रैल',
      btnDay2     : '🌙 दिन 2 — 26 अप्रैल',
      btnAlways   : '🥤 हमेशा उपलब्ध',
      day1Lbl     : d => `दिन 1 — ${d}`,
      day2Lbl     : d => `दिन 2 — ${d}`,
      alwaysShort : 'जूस · ठंडे पेय · छाछ · ताजे फल & नाश्ता — सदा उपलब्ध!',
      alwaysTitle : 'हमेशा उपलब्ध — दोनों दिन',
      alwaysBody  : '🥤 ताजा जूस<br>🥤 ठंडे पेय<br>🥤 छाछ<br>🍎 ताजे फल<br>🍿 नाश्ता<br><br><em>दोनों दिन सभी कार्यक्रमों में उपलब्ध रहेगा। 🙏</em>',
      mealNames   : {
        'Breakfast'         : 'नाश्ता',
        'Lunch'             : 'दोपहर का खाना',
        'High Tea & Snacks' : 'हाई टी & नाश्ता',
        'Dinner'            : 'रात का खाना',
      },
      mealNotes   : {
        'Before Haldi begins'          : 'हल्दी से पहले',
        'Served during Haldi Ceremony' : 'हल्दी समारोह के दौरान',
        'Haldi Onwards · During Mayra' : 'हल्दी के बाद · मायरे के दौरान',
        'Served during Sangeet Night'  : 'संगीत रात के दौरान',
        'Pool Party Onwards'           : 'पूल पार्टी के बाद',
        'Served during Lagan'          : 'लग्न के दौरान',
        'Lagan Onwards'                : 'लग्न के बाद',
        'Before Jai Mala & Varmala'    : 'जयमाला & वरमाला से पहले',
      },
    },

    couple: {
      menu      : '💑 <strong>Arjoo & Manish के बारे में</strong><br>आप क्या जानना चाहते हैं?',
      btnBride  : '👰 Arjoo (Bulbul) के बारे में',
      btnGroom  : '🤵 Manish के बारे में',
      btnHash   : '#️⃣ शादी का हैशटैग',
      btnFamily : '🏡 परिवार का विवरण',
      btnBack   : '🏠 मुख्य मेनू',
      lovelyCall: 'प्यार से बुलाते हैं',
      gotra     : 'गोत्र',
      from      : 'गृहनगर',
      stateLabel: 'राज्य',
      daughterOf: 'सुपुत्री',
      sonOf     : 'सुपुत्र',
      eternalOf : 'शाश्वत आशीर्वाद',
      hashTitle : '#️⃣ <strong>शादी का ऑफिशियल हैशटैग</strong>',
      hashNote  : 'Instagram, Facebook व हर जगह शेयर करें और अपने पलों को यादगार बनाएं! 📸✨',
      famTitle  : '🏡 <strong>गोयल परिवार</strong>',
      reqFrom   : '🙏 <strong>निमंत्रण</strong>',
      hosts     : '🌸 <strong>आपके मेज़बान</strong>',
      blessings : '✨ <strong>विशेष आशीर्वाद</strong>',
      maternal  : '🌺 <strong>ननिहाल पक्ष</strong>',
    },
  },

  /* ── Animated input hint questions ────────────────────── */
  hints: {
    default: [
      'When is the Haldi ceremony? 💛',
      'दूल्हा-दुल्हन के बारे में बताएं 💑',
      'Nearest railway station? 🙉',
      'हल्दी की रस्म कब है? 💛',
    ],
    en: [
      'When is the Haldi ceremony? 💛',
      'What time is dinner on Day 2? 🌙',
      'Where is Anant Mahal? 📍',
      'Nearest railway station to the venue? 🙉',
    ],
    hi: [
      'हल्दी की रस्म कब है? 💛',
      'दूसरे दिन रात का खाना कब है? 🌙',
      'अनंत महल कहाँ है? 📍',
      'दूल्हा-दुल्हन के बारे में बताएं 💑',
    ],
  },
};
