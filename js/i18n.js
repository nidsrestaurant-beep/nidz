/**
 * NID'Z RESTAURANT — i18n (English / Arabic / Russian)
 * - I18N holds every translatable string, namespaced by page.
 * - Elements are tagged with data-i18n="namespace.key" (text content),
 *   data-i18n-placeholder="..." (input placeholder), or data-i18n-alt="..." (image alt).
 * - Language persists in localStorage and is applied before paint via the
 *   inline head script on every page (prevents a flash of the wrong language).
 * - Switching language re-applies all data-i18n text AND fires 'nidz:langchange'
 *   so dynamically rendered content (menu-data driven cards) can re-render.
 */
const I18N = {
  en: {
    dir: "ltr",
    label: "English",
    nav: { home:"Home", menu:"Menu", about:"About", gallery:"Gallery", reviews:"Reviews", contact:"Contact", orderNow:"Order Now" },
    footer: {
      tagline:"Flame-grilled shawarma, kabab and loaded rolls, made fresh in Batumi — real ingredients, authentic taste.",
      taglineShort:"Flame-grilled shawarma, kabab and loaded rolls, made fresh in Batumi.",
      quickLinks:"Quick Links", getInTouch:"Get In Touch", findUs:"Find Us",
      rights:"All rights reserved.", privacy:"Privacy Policy", terms:"Terms of Service"
    },
    common: {
      whatsappUs:"WhatsApp Us", callNow:"Call Now", getDirections:"Get Directions",
      viewMenu:"View Menu", orderOnline:"Order Online", home:"Home"
    },
    home: {
      heroTitle1:"Fresh Fire.", heroTitle2:"Real Flavor.",
      heroLede:"Flame-grilled shawarma, kabab and loaded rolls, wrapped fresh to order in the heart of Batumi.",
      orderNow:"🔥 Order Now", viewMenu:"View Menu", scroll:"Scroll",
      tickerFresh:"Grilled Fresh Daily", tickerSpecial:"Nid'Z Special Shawarma", tickerBeast:"Beast Shawarma",
      tickerReal:"Real Ingredients, Authentic Taste", tickerMade:"Made Fresh", tickerFlame:"Batumi's Flame",
      featuredEyebrow:"On The Grill", featuredTitle:"Featured Dishes",
      featuredDesc:"A taste of what comes off the flame every day — built layer by layer, never rushed.",
      seeFullMenu:"See Full Menu",
      whyEyebrow:"Why Nid'Z", whyTitle:"Built On The Fire, Not The Shortcut",
      f1Title:"Grilled To Order", f1Desc:"Every skewer and cutlet hits the flame only after you order — no reheating, no shortcuts.",
      f2Title:"Fresh Ingredients", f2Desc:"Vegetables cut daily, sauces made in-house, bread baked warm — nothing sits around.",
      f3Title:"Fast, Friendly Service", f3Desc:"Quick without feeling rushed — order in, wrapped up, and out the door hot.",
      f4Title:"Family-Friendly", f4Desc:"A relaxed spot in Batumi for a quick bite or a full sit-down table with the whole crew.",
      galleryEyebrow:"Behind The Wrap", galleryTitle:"A Peek Inside The Kitchen", viewFullGallery:"View Full Gallery",
      testiEyebrow:"Guests Say", testiTitle:"Straight From The Table",
      t1q:"\"The Beast Shawarma lives up to its name — massive, hot, and packed with flavor. Best wrap I've had in Batumi.\"", t1n:"Nina K.", t1r:"Local Guide",
      t2q:"\"Fast, friendly, and the garlic sauce is addictive. We came back three times during our trip.\"", t2n:"Levan T.", t2r:"Regular Guest",
      t3q:"\"Family-friendly, generous portions, and everything tastes genuinely fresh. The Phoenix is a must-try.\"", t3n:"Sofia M.", t3r:"Tourist Review",
      testiNote:"Sample guest quotes shown for demonstration — swap in your real reviews any time.",
      reviewSub:"Rated by our guests", reviewGoogle:"See our Google Reviews", reviewTrip:"Read us on TripAdvisor", reviewAll:"All Reviews",
      followEyebrow:"Follow The Flame", followTitle:"@nidzrestaurant",
      socialInstagram:"Instagram", socialTiktok:"TikTok", socialTrip:"TripAdvisor", socialMaps:"Google Maps",
      ctaTitle:"Hungry Yet?", ctaDesc:"Order online for pickup or delivery, or swing by and let us fire up the grill for you.",
      ctaOrder:"Order Online"
    },
    about: {
      eyebrow:"Our Story", title:"Made By Hand, Fired With Care", crumb:"About",
      whoEyebrow:"Who We Are", storyTitle:"Street Food, Elevated",
      story1:"Nid'Z started with a simple idea: shawarma and grilled wraps deserve the same care as a sit-down meal. Every order is built to order — meat grilled after you ask for it, vegetables cut that day, sauces made in-house — because a wrap is only as good as what goes into it.",
      story2:"Today, Nid'Z is a Batumi favorite for locals and travelers alike, known for generous portions, bold layered flavor, and a menu that ranges from the classic Kabab to our tower-stacked signature builds like the Beast Shawarma and the Phoenix.",
      story3:"Whether you're grabbing a quick roll between the beach and the boulevard, or settling in with the family for a full meal, Nid'Z is built to feed you right.",
      badge:"Real Ingredients",
      missionEyebrow:"Our Mission", missionTitle:"Fresh, Fast, Never Faked",
      missionDesc:"We exist to prove that fast food can still be honest food. That means no pre-made shortcuts, no sitting under a heat lamp, and no compromise on the ingredients that make a wrap worth finishing to the last bite.",
      v1t:"Fresh Ingredients, Daily", v1d:"Produce is prepped fresh every morning — nothing pre-cut and held for days.",
      v2t:"Quality Service", v2d:"Fast doesn't mean rushed — every order gets the same attention, dine-in or takeaway.",
      v3t:"Family-Friendly Atmosphere", v3d:"A relaxed, welcoming space in Batumi where every guest — big or small — feels at home.",
      ctaTitle:"Come Taste The Difference", ctaDesc:"Stop by, order online for pickup or delivery — we'll have the grill going.",
      ctaMenu:"View Menu", ctaFind:"Find Us"
    },
    menu: {
      eyebrow:"Fresh Off The Grill", title:"Our Menu", crumb:"Menu",
      orderOnline:"Order Online",
      embedEyebrow:"Full Interactive Menu", embedTitle:"Browse Every Item & Price",
      embedDesc:"Our complete, always up-to-date menu — prices, combos and daily specials.",
      embedNote:"See our full interactive menu, always kept up to date with the latest prices and specials.", embedLink:"Open Full Menu →"
    },
    gallery: { eyebrow:"A Look Inside", title:"Gallery", crumb:"Gallery" },
    contact: {
      eyebrow:"We'd Love To Hear From You", title:"Contact Us", crumb:"Contact",
      formTitle:"Send Us A Message", fullName:"Full Name", phone:"Phone", email:"Email", subject:"Subject", message:"Message",
      namePh:"Your name", phonePh:"+995 5XX XXX XXX", emailPh:"you@example.com", subjectPh:"How can we help?", messagePh:"Tell us what's on your mind...",
      sendBtn:"Send Message", formNote:"Submitting opens your email app with this message ready to send to nidsrestaurant@gmail.com.",
      successMsg:"✓ Your message is ready — check your email app to hit send.",
      callUs:"Call Us", whatsapp:"WhatsApp", whatsappDesc:"Chat with us instantly", emailUs:"Email",
      address:"Address", addressVal:"Batumi, Adjara, Georgia",
      hours:"Opening Hours", hoursNote:"Hours may vary on holidays — call ahead to confirm.",
      h1:"Monday – Thursday", h2:"Friday – Saturday", h3:"Sunday",
      mapEyebrow:"Find Us", mapTitle:"On The Map"
    },
    reviews: {
      eyebrow:"What Guests Say", title:"Reviews", crumb:"Reviews",
      reviewSub:"Rated by our guests", reviewGoogle:"See our Google Reviews", reviewTrip:"Read us on TripAdvisor", reviewPhotos:"See Guest Photos",
      testiEyebrow:"Guest Testimonials", testiTitle:"Straight From The Table",
      t1q:"\"The Beast Shawarma lives up to its name — massive, hot, and packed with flavor. Best wrap I've had in Batumi.\"", t1n:"Nina K.", t1r:"Local Guide",
      t2q:"\"Fast, friendly, and the garlic sauce is addictive. We came back three times during our trip.\"", t2n:"Levan T.", t2r:"Regular Guest",
      t3q:"\"Family-friendly, generous portions, and everything tastes genuinely fresh. The Phoenix is a must-try.\"", t3n:"Sofia M.", t3r:"Tourist Review",
      t4q:"\"Great spot for a quick, satisfying meal near the boulevard. The Nid'Z Special is worth the trip alone.\"", t4n:"David P.", t4r:"Google Review",
      t5q:"\"Portions are huge and everything is made right in front of you. Great value for the quality.\"", t5n:"Ana G.", t5r:"Google Review",
      t6q:"\"Took the kids and they loved it — casual, quick, and the staff were genuinely welcoming.\"", t6n:"Mari B.", t6r:"TripAdvisor",
      note:"Sample guest quotes shown for demonstration — connect your live Google/TripAdvisor feed or swap in real reviews any time.",
      ctaTitle:"Loved Your Visit?", ctaDesc:"Leave us a review on Google or TripAdvisor — it means the world to our small team.",
      ctaGoogle:"Review Us On Google", ctaTrip:"Review On TripAdvisor"
    },
    order: {
      eyebrow:"Skip The Line", title:"Order Online", crumb:"Order Online",
      pickupTab:"Pickup", deliveryTab:"Delivery",
      chatEyebrow:"Quick & Easy", chatTitle:"Order For Pickup",
      chatDesc:"Message us on WhatsApp or give us a call — we'll confirm your order and have it ready fresh when you arrive.",
      whatsappBtn:"💬 Order On WhatsApp", callBtn:"📞 Call To Order — +995 571 530 290",
      viewMenuLink:"Browse the full menu first →",
      deliveryEyebrow:"Delivered To Your Door", deliveryTitle:"Order Delivery On Wolt",
      deliveryDesc:"We partner with Wolt for delivery — browse the full menu, track your courier live, and pay right there on their app or site.",
      deliveryBtn:"Order On Wolt →",
      deliveryNote:"Prefer to arrange delivery yourself? Message us on WhatsApp and we'll do our best to help."
    },
    legal: {
      eyebrow:"Legal",
      privacyTitle:"Privacy Policy", privacyCrumb:"Privacy Policy",
      termsTitle:"Terms of Service", termsCrumb:"Terms of Service"
    }
  },

  ar: {
    dir: "rtl",
    label: "العربية",
    nav: { home:"الرئيسية", menu:"القائمة", about:"من نحن", gallery:"معرض الصور", reviews:"التقييمات", contact:"تواصل معنا", orderNow:"اطلب الآن" },
    footer: {
      tagline:"شاورما وكباب ولفائف مشوية على النار، تُحضّر طازجة يوميًا في باتومي — مكونات حقيقية، طعم أصيل.",
      taglineShort:"شاورما وكباب ولفائف مشوية على النار، تُحضّر طازجة في باتومي.",
      quickLinks:"روابط سريعة", getInTouch:"تواصل معنا", findUs:"موقعنا",
      rights:"جميع الحقوق محفوظة.", privacy:"سياسة الخصوصية", terms:"شروط الخدمة"
    },
    common: {
      whatsappUs:"راسلنا عبر واتساب", callNow:"اتصل الآن", getDirections:"احصل على الاتجاهات",
      viewMenu:"عرض القائمة", orderOnline:"اطلب أونلاين", home:"الرئيسية"
    },
    home: {
      heroTitle1:"نكهة حقيقية،", heroTitle2:"تُطبخ عند الطلب",
      heroLede:"سندويشات شاورما وكباب مشوية على النار، تُلَفّ طازجة عند الطلب في قلب باتومي.",
      orderNow:"🔥 اطلب الآن", viewMenu:"قائمة الطعام", scroll:"مرر للأسفل",
      tickerFresh:"مشوي طازج يوميًا", tickerSpecial:"شاورما نيدز الخاصة", tickerBeast:"شاورما بيست",
      tickerReal:"مكونات حقيقية، طعم أصيل", tickerMade:"محضّر طازج", tickerFlame:"نار باتومي",
      featuredEyebrow:"على النار مباشرة", featuredTitle:"أطباق مميزة",
      featuredDesc:"طعم يطبخ على النار كل يوم — وجبة تلو وجبة، دون استعجال.",
      seeFullMenu:"عرض القائمة الكاملة",
      whyEyebrow:"لماذا نيدز", whyTitle:"يطبخ على النار مباشرة مع الاهتمام بالتفاصيل",
      f1Title:"يُشوى عند الطلب", f1Desc:"كل سيخ وكل قطعة تُشوى فقط بعد طلبك — بلا تسخين مسبق وبلا اختصارات.",
      f2Title:"مكونات طازجة", f2Desc:"خضار تُقطّع يوميًا، صلصات محضّرة في المطبخ، وخبز يُخبز دافئًا — لا شيء يُترك منتظرًا.",
      f3Title:"خدمة سريعة وودية", f3Desc:"سريعة دون استعجال — تطلب، نُجهّز، وتخرج ساخنًا.",
      f4Title:"مناسب للعائلات", f4Desc:"مكان مريح في باتومي لوجبة سريعة أو طاولة كاملة مع العائلة.",
      galleryEyebrow:"أسرار وجباتنا", galleryTitle:"لمحة من داخل مطبخنا", viewFullGallery:"عرض المعرض كاملاً",
      testiEyebrow:"يقول ضيوفنا", testiTitle:"آراء زبائننا",
      t1q:"«شاورما بيست تستحق اسمها — ضخمة وساخنة ومليئة بالنكهة. أفضل لفة تذوقتها في باتومي.»", t1n:"نينا ك.", t1r:"دليل محلي",
      t2q:"«سريعة وودية، وصلصة الثوم لا تُقاوم. عدنا ثلاث مرات خلال رحلتنا.»", t2n:"ليفان ت.", t2r:"زبون دائم",
      t3q:"«مناسبة للعائلات، وحصص سخية، وكل شيء طازج فعلاً. فينكس لا بد من تجربته.»", t3n:"صوفيا م.", t3r:"تقييم سائحة",
      testiNote:"اقتباسات ضيوف توضيحية — استبدلها بتقييماتك الحقيقية في أي وقت.",
      reviewSub:"تقييم ضيوفنا", reviewGoogle:"شاهد تقييماتنا على جوجل", reviewTrip:"اقرأ تقييماتنا على TripAdvisor", reviewAll:"جميع التقييمات",
      followEyebrow:"تابع النار", followTitle:"@nidzrestaurant",
      socialInstagram:"إنستغرام", socialTiktok:"تيك توك", socialTrip:"TripAdvisor", socialMaps:"خرائط جوجل",
      ctaTitle:"جائع الآن؟", ctaDesc:"اطلب أونلاين للاستلام أو التوصيل، أو مر علينا ودعنا نُشعل الشواية من أجلك.",
      ctaOrder:"اطلب أونلاين"
    },
    about: {
      eyebrow:"قصتنا", title:"صُنع باليد، وشُوي بعناية", crumb:"من نحن",
      whoEyebrow:"من نحن", storyTitle:"طعام الشارع، بمستوى أرقى",
      story1:"بدأت نيدز بفكرة بسيطة: الشاورما واللفائف المشوية تستحق نفس العناية التي تُقدَّم لوجبة على الطاولة. كل طلب يُحضَّر عند الطلب — اللحم يُشوى بعد أن تطلبه، الخضار تُقطَّع يوميًا، والصلصات تُحضَّر في المطبخ — لأن اللفة لا تكون جيدة إلا بجودة ما بداخلها.",
      story2:"اليوم، أصبحت نيدز وجهة مفضلة في باتومي للسكان المحليين والمسافرين، معروفة بحصصها السخية ونكهاتها الغنية المتعددة الطبقات، وقائمة تمتد من الكباب الكلاسيكي إلى تشكيلاتنا المميزة الفخمة مثل بيست شاورما وفينكس.",
      story3:"سواء كنت تلتقط لفة سريعة بين الشاطئ والكورنيش، أو تستقر مع العائلة لوجبة كاملة، صُممت نيدز لتُطعمك بالشكل الصحيح.",
      badge:"مكونات حقيقية",
      missionEyebrow:"رسالتنا", missionTitle:"طازج، سريع، بلا تزييف أبدًا",
      missionDesc:"نحن موجودون لنثبت أن الوجبات السريعة يمكن أن تكون صادقة أيضًا. هذا يعني بلا اختصارات جاهزة مسبقًا، وبلا انتظار تحت مصباح تسخين، وبلا تنازل عن المكونات التي تجعل اللفة تستحق آخر قضمة فيها.",
      v1t:"مكونات طازجة يوميًا", v1d:"يتم تحضير المنتجات الطازجة كل صباح — لا شيء يُقطَّع مسبقًا ويُحفظ لأيام.",
      v2t:"خدمة عالية الجودة", v2d:"السرعة لا تعني الاستعجال — كل طلب يحظى بنفس الاهتمام، سواء للجلوس أو للطلبات الخارجية.",
      v3t:"أجواء مناسبة للعائلات", v3d:"مساحة مريحة وترحيبية في باتومي حيث يشعر كل ضيف — كبيرًا كان أم صغيرًا — بأنه في بيته.",
      ctaTitle:"تعال وتذوق الفرق", ctaDesc:"مر علينا، أو اطلب أونلاين للاستلام أو التوصيل — وستجد الشواية جاهزة.",
      ctaMenu:"عرض القائمة", ctaFind:"موقعنا"
    },
    menu: {
      eyebrow:"طازج من على النار", title:"قائمتنا", crumb:"القائمة",
      orderOnline:"اطلب أونلاين",
      embedEyebrow:"القائمة الكاملة التفاعلية", embedTitle:"تصفح كل صنف وسعره",
      embedDesc:"قائمتنا الكاملة والمحدّثة دائمًا — الأسعار، الوجبات المجمعة، والعروض اليومية.",
      embedNote:"شاهد قائمتنا الكاملة التفاعلية، محدّثة دائمًا بأحدث الأسعار والعروض.", embedLink:"افتح القائمة الكاملة ←"
    },
    gallery: { eyebrow:"لمحة من الداخل", title:"معرض الصور", crumb:"معرض الصور" },
    contact: {
      eyebrow:"يسعدنا التواصل معك", title:"تواصل معنا", crumb:"تواصل معنا",
      formTitle:"أرسل لنا رسالة", fullName:"الاسم الكامل", phone:"الهاتف", email:"البريد الإلكتروني", subject:"الموضوع", message:"الرسالة",
      namePh:"اسمك", phonePh:"+995 5XX XXX XXX", emailPh:"you@example.com", subjectPh:"كيف يمكننا مساعدتك؟", messagePh:"أخبرنا بما يدور في ذهنك...",
      sendBtn:"إرسال الرسالة", formNote:"عند الإرسال سيُفتح تطبيق البريد لديك مع هذه الرسالة جاهزة للإرسال إلى nidsrestaurant@gmail.com.",
      successMsg:"✓ رسالتك جاهزة — تحقق من تطبيق البريد لإرسالها.",
      callUs:"اتصل بنا", whatsapp:"واتساب", whatsappDesc:"راسلنا فورًا", emailUs:"البريد الإلكتروني",
      address:"العنوان", addressVal:"باتومي، أدجارا، جورجيا",
      hours:"ساعات العمل", hoursNote:"قد تختلف الساعات في العطلات — يُرجى الاتصال للتأكيد.",
      h1:"الاثنين – الخميس", h2:"الجمعة – السبت", h3:"الأحد",
      mapEyebrow:"موقعنا", mapTitle:"على الخريطة"
    },
    reviews: {
      eyebrow:"ماذا يقول ضيوفنا", title:"التقييمات", crumb:"التقييمات",
      reviewSub:"تقييم ضيوفنا", reviewGoogle:"شاهد تقييماتنا على جوجل", reviewTrip:"اقرأ تقييماتنا على TripAdvisor", reviewPhotos:"شاهد صور الضيوف",
      testiEyebrow:"آراء الضيوف", testiTitle:"آراء زبائننا",
      t1q:"«شاورما بيست تستحق اسمها — ضخمة وساخنة ومليئة بالنكهة. أفضل لفة تذوقتها في باتومي.»", t1n:"نينا ك.", t1r:"دليل محلي",
      t2q:"«سريعة وودية، وصلصة الثوم لا تُقاوم. عدنا ثلاث مرات خلال رحلتنا.»", t2n:"ليفان ت.", t2r:"زبون دائم",
      t3q:"«مناسبة للعائلات، وحصص سخية، وكل شيء طازج فعلاً. فينكس لا بد من تجربته.»", t3n:"صوفيا م.", t3r:"تقييم سائحة",
      t4q:"«مكان رائع لوجبة سريعة ومُشبعة قرب الكورنيش. نيدز سبيشال وحدها تستحق الزيارة.»", t4n:"دايفيد ب.", t4r:"تقييم جوجل",
      t5q:"«الحصص كبيرة وكل شيء يُحضَّر أمامك مباشرة. قيمة رائعة مقابل الجودة.»", t5n:"آنا ج.", t5r:"تقييم جوجل",
      t6q:"«أخذت الأطفال وأحبوا المكان — غير رسمي وسريع، والطاقم كان مضيافًا فعلاً.»", t6n:"ماري ب.", t6r:"TripAdvisor",
      note:"اقتباسات ضيوف توضيحية — اربط تقييمات جوجل/TripAdvisor الحقيقية أو استبدلها في أي وقت.",
      ctaTitle:"أعجبتك زيارتك؟", ctaDesc:"اترك لنا تقييمًا على جوجل أو TripAdvisor — يعني لنا الكثير كفريق صغير.",
      ctaGoogle:"قيّمنا على جوجل", ctaTrip:"قيّمنا على TripAdvisor"
    },
    order: {
      eyebrow:"تخطَّ الطابور", title:"اطلب أونلاين", crumb:"اطلب أونلاين",
      pickupTab:"استلام", deliveryTab:"توصيل",
      chatEyebrow:"سريع وسهل", chatTitle:"اطلب للاستلام",
      chatDesc:"راسلنا عبر واتساب أو اتصل بنا — سنؤكد طلبك ونجهزه طازجًا ليكون جاهزًا عند وصولك.",
      whatsappBtn:"💬 اطلب عبر واتساب", callBtn:"📞 اتصل للطلب — 995 571 530 290+",
      viewMenuLink:"تصفح القائمة الكاملة أولاً ←",
      deliveryEyebrow:"يصلك حتى بابك", deliveryTitle:"اطلب التوصيل عبر Wolt",
      deliveryDesc:"نتعاون مع Wolt للتوصيل — تصفح القائمة الكاملة، وتتبع عامل التوصيل مباشرة، وادفع مباشرة عبر تطبيقهم أو موقعهم.",
      deliveryBtn:"اطلب عبر Wolt ←",
      deliveryNote:"تفضل ترتيب التوصيل بنفسك؟ راسلنا عبر واتساب وسنبذل قصارى جهدنا للمساعدة."
    },
    legal: {
      eyebrow:"قانوني",
      privacyTitle:"سياسة الخصوصية", privacyCrumb:"سياسة الخصوصية",
      termsTitle:"شروط الخدمة", termsCrumb:"شروط الخدمة"
    }
  },

  ru: {
    dir: "ltr",
    label: "Русский",
    nav: { home:"Главная", menu:"Меню", about:"О нас", gallery:"Галерея", reviews:"Отзывы", contact:"Контакты", orderNow:"Заказать" },
    footer: {
      tagline:"Шаурма на углях, кебаб и сытные роллы — готовим свежим каждый день в Батуми. Настоящие продукты, честный вкус.",
      taglineShort:"Шаурма на углях, кебаб и сытные роллы — готовим свежим в Батуми.",
      quickLinks:"Быстрые ссылки", getInTouch:"Связаться с нами", findUs:"Как нас найти",
      rights:"Все права защищены.", privacy:"Политика конфиденциальности", terms:"Условия обслуживания"
    },
    common: {
      whatsappUs:"Написать в WhatsApp", callNow:"Позвонить", getDirections:"Проложить маршрут",
      viewMenu:"Смотреть меню", orderOnline:"Заказать онлайн", home:"Главная"
    },
    home: {
      heroTitle1:"Свежий огонь.", heroTitle2:"Настоящий вкус.",
      heroLede:"Шаурма на углях, кебаб и сытные роллы — заворачиваем свежими на заказ в самом сердце Батуми.",
      orderNow:"🔥 Заказать", viewMenu:"Смотреть меню", scroll:"Листайте вниз",
      tickerFresh:"Готовим на гриле каждый день", tickerSpecial:"Фирменная шаурма Nid'Z", tickerBeast:"Шаурма Beast",
      tickerReal:"Настоящие продукты, честный вкус", tickerMade:"Готовим свежим", tickerFlame:"Огонь Батуми",
      featuredEyebrow:"Прямо с гриля", featuredTitle:"Хиты меню",
      featuredDesc:"Вкус того, что сходит с огня каждый день — слой за слоем, без спешки.",
      seeFullMenu:"Смотреть всё меню",
      whyEyebrow:"Почему Nid'Z", whyTitle:"На огне, а не на компромиссах",
      f1Title:"Готовим на заказ", f1Desc:"Каждый шампур и котлета попадают на гриль только после вашего заказа — никакого разогрева и упрощений.",
      f2Title:"Свежие продукты", f2Desc:"Овощи режем каждый день, соусы готовим сами, хлеб подаём тёплым — ничего не залёживается.",
      f3Title:"Быстро и приветливо", f3Desc:"Быстро, но без спешки — заказали, завернули, отдали горячим.",
      f4Title:"Для всей семьи", f4Desc:"Уютное место в Батуми — для быстрого перекуса или полноценного семейного обеда за столом.",
      galleryEyebrow:"За кулисами", galleryTitle:"Загляните на нашу кухню", viewFullGallery:"Вся галерея",
      testiEyebrow:"Отзывы гостей", testiTitle:"Прямо от гостей",
      t1q:"«Beast Shawarma полностью оправдывает своё имя — огромная, горячая, полная вкуса. Лучший ролл, что я пробовала в Батуми.»", t1n:"Нина К.", t1r:"Местный гид",
      t2q:"«Быстро, приветливо, а чесночный соус просто не оторваться. Мы возвращались три раза за поездку.»", t2n:"Леван Т.", t2r:"Постоянный гость",
      t3q:"«Отлично для семьи, щедрые порции, всё действительно свежее. Phoenix обязательно нужно попробовать.»", t3n:"София М.", t3r:"Отзыв туриста",
      testiNote:"Примеры отзывов для демонстрации — в любой момент замените их на реальные отзывы гостей.",
      reviewSub:"Оценка от наших гостей", reviewGoogle:"Наши отзывы в Google", reviewTrip:"Читайте нас на TripAdvisor", reviewAll:"Все отзывы",
      followEyebrow:"Следите за огнём", followTitle:"@nidzrestaurant",
      socialInstagram:"Instagram", socialTiktok:"TikTok", socialTrip:"TripAdvisor", socialMaps:"Google Карты",
      ctaTitle:"Проголодались?", ctaDesc:"Закажите онлайн навынос или доставку, или загляните к нам — мы разожжём гриль специально для вас.",
      ctaOrder:"Заказать онлайн"
    },
    about: {
      eyebrow:"Наша история", title:"Сделано вручную, с заботой", crumb:"О нас",
      whoEyebrow:"Кто мы", storyTitle:"Уличная еда нового уровня",
      story1:"Nid'Z началась с простой идеи: шаурма и роллы на гриле заслуживают такой же заботы, как блюдо в ресторане. Каждый заказ готовится только после того, как вы его сделали — мясо жарится по заказу, овощи режутся в тот же день, соусы готовятся у нас на кухне — потому что ролл хорош ровно настолько, насколько хороши его ингредиенты.",
      story2:"Сегодня Nid'Z — любимое место в Батуми у местных жителей и туристов, известное щедрыми порциями, насыщенным многослойным вкусом и меню — от классического кебаба до наших фирменных «башен», таких как Beast Shawarma и Phoenix.",
      story3:"Берёте ли вы быстрый ролл по пути с пляжа на бульвар, или устраиваетесь с семьёй за полноценным обедом — Nid'Z накормит вас как надо.",
      badge:"Настоящие продукты",
      missionEyebrow:"Наша миссия", missionTitle:"Свежо, быстро, никогда не фальшиво",
      missionDesc:"Мы существуем, чтобы доказать: быстрая еда всё ещё может быть честной едой. Это значит — никаких заготовок, никакого лежания под лампой и никаких компромиссов в продуктах, из-за которых ролл стоит доесть до последнего кусочка.",
      v1t:"Свежие продукты каждый день", v1d:"Продукты готовятся свежими каждое утро — ничего не режется заранее и не хранится днями.",
      v2t:"Качественный сервис", v2d:"Быстро — не значит второпях: каждому заказу уделяется одинаковое внимание, в зале или навынос.",
      v3t:"Атмосфера для всей семьи", v3d:"Уютное, гостеприимное пространство в Батуми, где каждый гость — большой или маленький — чувствует себя как дома.",
      ctaTitle:"Приходите попробовать разницу", ctaDesc:"Загляните к нам, закажите онлайн навынос или доставку — гриль уже готов.",
      ctaMenu:"Смотреть меню", ctaFind:"Как нас найти"
    },
    menu: {
      eyebrow:"Прямо с огня", title:"Наше меню", crumb:"Меню",
      orderOnline:"Заказать онлайн",
      embedEyebrow:"Полное интерактивное меню", embedTitle:"Все позиции и цены",
      embedDesc:"Наше полное, всегда актуальное меню — цены, комбо и дневные акции.",
      embedNote:"Смотрите наше полное интерактивное меню, всегда с актуальными ценами и акциями.", embedLink:"Открыть полное меню →"
    },
    gallery: { eyebrow:"Загляните внутрь", title:"Галерея", crumb:"Галерея" },
    contact: {
      eyebrow:"Будем рады вашему сообщению", title:"Контакты", crumb:"Контакты",
      formTitle:"Напишите нам", fullName:"Полное имя", phone:"Телефон", email:"Email", subject:"Тема", message:"Сообщение",
      namePh:"Ваше имя", phonePh:"+995 5XX XXX XXX", emailPh:"you@example.com", subjectPh:"Чем можем помочь?", messagePh:"Расскажите, что у вас на уме...",
      sendBtn:"Отправить сообщение", formNote:"При отправке откроется ваш почтовый клиент с готовым письмом на nidsrestaurant@gmail.com.",
      successMsg:"✓ Ваше сообщение готово — проверьте почтовый клиент, чтобы отправить.",
      callUs:"Позвоните нам", whatsapp:"WhatsApp", whatsappDesc:"Напишите нам прямо сейчас", emailUs:"Email",
      address:"Адрес", addressVal:"Батуми, Аджария, Грузия",
      hours:"Часы работы", hoursNote:"Часы могут меняться в праздники — уточняйте по телефону.",
      h1:"Понедельник – Четверг", h2:"Пятница – Суббота", h3:"Воскресенье",
      mapEyebrow:"Как нас найти", mapTitle:"На карте"
    },
    reviews: {
      eyebrow:"Что говорят гости", title:"Отзывы", crumb:"Отзывы",
      reviewSub:"Оценка от наших гостей", reviewGoogle:"Наши отзывы в Google", reviewTrip:"Читайте нас на TripAdvisor", reviewPhotos:"Фото гостей",
      testiEyebrow:"Отзывы гостей", testiTitle:"Прямо от гостей",
      t1q:"«Beast Shawarma полностью оправдывает своё имя — огромная, горячая, полная вкуса. Лучший ролл, что я пробовала в Батуми.»", t1n:"Нина К.", t1r:"Местный гид",
      t2q:"«Быстро, приветливо, а чесночный соус просто не оторваться. Мы возвращались три раза за поездку.»", t2n:"Леван Т.", t2r:"Постоянный гость",
      t3q:"«Отлично для семьи, щедрые порции, всё действительно свежее. Phoenix обязательно нужно попробовать.»", t3n:"София М.", t3r:"Отзыв туриста",
      t4q:"«Отличное место для быстрого и сытного перекуса у бульвара. Ради Nid'Z Special стоит приехать отдельно.»", t4n:"Давид П.", t4r:"Отзыв в Google",
      t5q:"«Порции огромные, и всё готовят прямо у вас на глазах. Отличное соотношение цены и качества.»", t5n:"Анна Г.", t5r:"Отзыв в Google",
      t6q:"«Ходили с детьми, им очень понравилось — по-домашнему, быстро, а персонал искренне приветливый.»", t6n:"Мари Б.", t6r:"TripAdvisor",
      note:"Примеры отзывов для демонстрации — подключите реальную ленту Google/TripAdvisor или замените в любое время.",
      ctaTitle:"Понравилось у нас?", ctaDesc:"Оставьте отзыв на Google или TripAdvisor — для нашей небольшой команды это очень важно.",
      ctaGoogle:"Оставить отзыв в Google", ctaTrip:"Оставить отзыв на TripAdvisor"
    },
    order: {
      eyebrow:"Без очереди", title:"Заказать онлайн", crumb:"Заказать онлайн",
      pickupTab:"Самовывоз", deliveryTab:"Доставка",
      chatEyebrow:"Быстро и просто", chatTitle:"Заказ на самовывоз",
      chatDesc:"Напишите нам в WhatsApp или позвоните — мы подтвердим заказ и подготовим его свежим к вашему приходу.",
      whatsappBtn:"💬 Заказать через WhatsApp", callBtn:"📞 Заказать по телефону — +995 571 530 290",
      viewMenuLink:"Сначала посмотреть полное меню →",
      deliveryEyebrow:"Доставим к вашей двери", deliveryTitle:"Заказать доставку через Wolt",
      deliveryDesc:"Мы сотрудничаем с Wolt для доставки — смотрите полное меню, отслеживайте курьера в реальном времени и оплачивайте прямо в их приложении или на сайте.",
      deliveryBtn:"Заказать в Wolt →",
      deliveryNote:"Хотите договориться о доставке самостоятельно? Напишите нам в WhatsApp — постараемся помочь."
    },
    legal: {
      eyebrow:"Юридическая информация",
      privacyTitle:"Политика конфиденциальности", privacyCrumb:"Политика конфиденциальности",
      termsTitle:"Условия обслуживания", termsCrumb:"Условия обслуживания"
    }
  }
};

const NIDZ_LANGS = ["en", "ar", "ru"];

function nidzGetLang() {
  try {
    const l = localStorage.getItem("nidz_lang");
    if (l && NIDZ_LANGS.includes(l)) return l;
  } catch (e) {}
  return "en";
}

function nidzSetLang(lang) {
  if (!NIDZ_LANGS.includes(lang)) return;
  try { localStorage.setItem("nidz_lang", lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.documentElement.dir = I18N[lang].dir;
  document.body.classList.toggle("is-rtl", I18N[lang].dir === "rtl");
  nidzApplyTranslations(lang);
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  document.dispatchEvent(new CustomEvent("nidz:langchange", { detail: { lang } }));
}

function nidzGetString(lang, key) {
  const parts = key.split(".");
  let node = I18N[lang];
  for (const p of parts) {
    if (node == null) return null;
    node = node[p];
  }
  return typeof node === "string" ? node : null;
}

function nidzApplyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const str = nidzGetString(lang, el.getAttribute("data-i18n")) ?? nidzGetString("en", el.getAttribute("data-i18n"));
    if (str != null) el.textContent = str;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const str = nidzGetString(lang, el.getAttribute("data-i18n-placeholder")) ?? nidzGetString("en", el.getAttribute("data-i18n-placeholder"));
    if (str != null) el.setAttribute("placeholder", str);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const str = nidzGetString(lang, el.getAttribute("data-i18n-alt")) ?? nidzGetString("en", el.getAttribute("data-i18n-alt"));
    if (str != null) el.setAttribute("alt", str);
  });
}

function nidzBuildLangSwitcher() {
  const markup = NIDZ_LANGS.map(l =>
    `<button type="button" class="lang-btn" data-lang="${l}" aria-label="${I18N[l].label}">${l.toUpperCase()}</button>`
  ).join("");
  document.querySelectorAll(".lang-switch").forEach(wrap => {
    wrap.innerHTML = markup;
    wrap.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => nidzSetLang(btn.dataset.lang));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = nidzGetLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = I18N[lang].dir;
  document.body.classList.toggle("is-rtl", I18N[lang].dir === "rtl");
  nidzBuildLangSwitcher();
  nidzApplyTranslations(lang);
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
});
