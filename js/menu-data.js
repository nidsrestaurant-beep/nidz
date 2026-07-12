/**
 * NID'Z RESTAURANT — MENU DATA (multilingual: en / ar / ru)
 * Source of truth: Poster POS export (categories, item names, prices).
 * Items photographed on the promo posters keep their `img`; items without
 * a photo yet render with a category `emoji` placeholder instead — swap in
 * a real photo any time by adding an `img` path.
 * Add a `stripeLink` to any item to send it to its own Stripe Payment Link;
 * otherwise it falls back to NIDZ.stripeDefaultLink.
 */
const MENU_ITEMS = [

  /* ===== SHAWARMA & ROLLS ===== */
  {
    id: "nidz-special-shawarma", category: "shawarma-rolls", img: "assets/img/nidz-special-shawarma.jpg",
    price: "GEL 18", badge: { en: "House Favorite", ar: "الأكثر طلبًا", ru: "Хит заведения" },
    name: { en: "Nid's Special Shawarma", ar: "شاورما نيدز الخاصة", ru: "Фирменная шаурма Nid'Z" },
    desc: {
      en: "Grilled chicken, melted cheese, white cabbage slaw, tomato, pickles and fries, wrapped with garlic sauce in Lebanese bread.",
      ar: "دجاج مشوي، جبن مذاب، سلطة ملفوف أبيض، طماطم، مخلل وبطاطا مقلية، ملفوفة بصلصة الثوم في خبز لبناني.",
      ru: "Жареная курица, плавленый сыр, салат из белой капусты, помидоры, соленья и картофель фри, завёрнуто с чесночным соусом в ливанский хлеб."
    }
  },
  {
    id: "beast-shawarma-roll", category: "shawarma-rolls", img: "assets/img/beast-shawarma.jpg",
    price: "GEL 25", badge: { en: "Biggest", ar: "الأكبر", ru: "Самая большая" },
    name: { en: "Beast Shawarma Roll", ar: "لفة شاورما بيست", ru: "Ролл Beast Shawarma" },
    desc: {
      en: "A hearty shawarma stack with tomato, lettuce, fries, garlic and Picasso sauce in thin Lebanese bread.",
      ar: "شاورما دسمة مع طماطم وخس وبطاطا مقلية وصلصة الثوم وصلصة بيكاسو في خبز لبناني رقيق.",
      ru: "Сытная шаурма с помидорами, салатом, картофелем фри, чесночным соусом и соусом Picasso в тонком ливанском хлебе."
    }
  },
  {
    id: "phoenix", category: "shawarma-rolls", img: "assets/img/phoenix.jpg",
    price: "GEL 19", badge: { en: "Chef's Pick", ar: "اختيار الشيف", ru: "Выбор шефа" },
    name: { en: "Phoenix", ar: "فينكس", ru: "Phoenix" },
    desc: {
      en: "Beef and shawarma chicken layered with tomato, lettuce, onion, pickled cabbage, pomegranate and garlic sauce.",
      ar: "لحم بقري وشاورما دجاج مع طماطم وخس وبصل وملفوف مخلل ورمان وصلصة الثوم.",
      ru: "Говядина и шаурма из курицы с помидорами, салатом, луком, маринованной капустой, гранатом и чесночным соусом."
    }
  },
  {
    id: "batumi-style-cheesy", category: "shawarma-rolls", img: "assets/img/batumi-style.jpg", price: "GEL 18",
    name: { en: "Batumi Style. Cheesy", ar: "أسلوب باتومي. بالجبن", ru: "Батумский стиль. Сырный" },
    desc: {
      en: "Grilled chicken with smoked and melted cheese, pickles, onion, lettuce and fries.",
      ar: "دجاج مشوي مع جبن مدخن ومذاب ومخلل وبصل وخس وبطاطا مقلية.",
      ru: "Жареная курица с копчёным и плавленым сыром, солеными огурцами, луком, салатом и картофелем фри."
    }
  },
  {
    id: "beef-shawarma", category: "shawarma-rolls", img: "assets/img/beef-shawarma.jpg", price: "GEL 19",
    name: { en: "Beef Shawarma", ar: "شاورما لحم", ru: "Шаурма из говядины" },
    desc: {
      en: "Beef shawarma with tahini, tomato, pickles, parsley, onion with sumac and hummus.",
      ar: "شاورما لحم بقري مع طحينة وطماطم ومخلل وبقدونس وبصل بالسماق وحمص.",
      ru: "Шаурма из говядины с тахини, помидорами, солеными огурцами, петрушкой, луком с сумахом и хумусом."
    }
  },
  {
    id: "kabab-sandwich", category: "shawarma-rolls", img: "assets/img/kabab.jpg", price: "GEL 18",
    name: { en: "Kabab Sandwich", ar: "ساندويتش كباب", ru: "Сэндвич кебаб" },
    desc: {
      en: "Grilled kabab with tomato, pickles, parsley, onion with sumac and hummus.",
      ar: "كباب مشوي مع طماطم ومخلل وبقدونس وبصل بالسماق وحمص.",
      ru: "Жареный кебаб с помидорами, солеными огурцами, петрушкой, луком с сумахом и хумусом."
    }
  },
  {
    id: "chicken-tawook", category: "shawarma-rolls", img: "assets/img/chicken-tawook.jpg", price: "GEL 16",
    name: { en: "Chicken Tawook", ar: "دجاج طاووق", ru: "Курица Тавук" },
    desc: {
      en: "Char-grilled chicken tawook with pickles, fries and garlic sauce in Lebanese bread.",
      ar: "دجاج طاووق مشوي على الفحم مع مخلل وبطاطا مقلية وصلصة الثوم في خبز لبناني.",
      ru: "Курица тавук на углях с солеными огурцами, картофелем фри и чесночным соусом в ливанском хлебе."
    }
  },
  {
    id: "spb-shawarma", category: "shawarma-rolls", img: "assets/img/spb.jpg", price: "GEL 17",
    name: { en: "SPB Shawarma", ar: "شاورما إس بي بي", ru: "Шаурма SPB" },
    desc: {
      en: "Grilled chicken with tomato, cucumber and garlic sauce — inspired by St. Petersburg's shawarma style.",
      ar: "دجاج مشوي مع طماطم وخيار وصلصة الثوم — بأسلوب مستوحى من شاورما سان بطرسبرغ.",
      ru: "Жареная курица с помидорами, огурцом и чесночным соусом — в стиле шаурмы Санкт-Петербурга."
    }
  },
  {
    id: "picasso-shawarma", category: "shawarma-rolls", img: "assets/img/picasso.jpg", price: "GEL 18",
    name: { en: "Picasso Shawarma", ar: "شاورما بيكاسو", ru: "Шаурма Picasso" },
    desc: {
      en: "Grilled chicken with fresh mushroom, corn, lettuce, Picasso sauce and garlic sauce.",
      ar: "دجاج مشوي مع فطر طازج وذرة وخس وصلصة بيكاسو وصلصة الثوم.",
      ru: "Жареная курица со свежими грибами, кукурузой, салатом, соусом Picasso и чесночным соусом."
    }
  },
  {
    id: "lebanese-chicken-shawarma", category: "shawarma-rolls", img: "assets/img/lebanese-wrap.jpg", price: "GEL 16",
    name: { en: "Lebanese Chicken Shawarma", ar: "شاورما دجاج لبنانية", ru: "Ливанская шаурма из курицы" },
    desc: {
      en: "Grilled chicken with pickles, fries and garlic sauce, rolled tight in Lebanese bread.",
      ar: "دجاج مشوي مع مخلل وبطاطا مقلية وصلصة الثوم، ملفوفة بإحكام في خبز لبناني.",
      ru: "Жареная курица с солеными огурцами, картофелем фри и чесночным соусом, плотно завёрнуто в ливанский хлеб."
    }
  },
  {
    id: "nidz-burger-roll", category: "shawarma-rolls", img: "assets/img/burger-roll.jpg", price: "GEL 18",
    name: { en: "Nid's Burger Roll", ar: "لفة برجر نيدز", ru: "Бургер-ролл Nid'Z" },
    desc: {
      en: "Grilled burger patty with tomato, onion, pickles, cabbage slaw, fries, ketchup and mayo.",
      ar: "قرص برجر مشوي مع طماطم وبصل ومخلل وسلطة ملفوف وبطاطا مقلية وكاتشب ومايونيز.",
      ru: "Жареная бургер-котлета с помидорами, луком, солеными огурцами, капустным салатом, картофелем фри, кетчупом и майонезом."
    }
  },
  {
    id: "fries-roll", category: "shawarma-rolls", img: "assets/img/fries-roll.jpg", price: "GEL 12",
    name: { en: "Fries Roll", ar: "لفة بطاطا", ru: "Ролл с картофелем фри" },
    desc: {
      en: "French fries, pickles, ketchup, garlic sauce and mayo — simple, satisfying, delicious.",
      ar: "بطاطا مقلية ومخلل وكاتشب وصلصة الثوم ومايونيز — بسيطة ومُشبعة ولذيذة.",
      ru: "Картофель фри, соленые огурцы, кетчуп, чесночный соус и майонез — просто, сытно, вкусно."
    }
  },
  {
    id: "falafel-roll", category: "shawarma-rolls", img: "assets/img/falafel-roll.jpg", price: "GEL 13",
    name: { en: "Falafel Roll", ar: "لفة فلافل", ru: "Фалафель-ролл" },
    desc: {
      en: "Falafel with cucumber, tomato, pickles, mint, lettuce and hummus.",
      ar: "فلافل مع خيار وطماطم ومخلل ونعناع وخس وحمص.",
      ru: "Фалафель с огурцом, помидорами, солеными огурцами, мятой, салатом и хумусом."
    }
  },

  /* ===== PLATES ===== */
  {
    id: "beef-shawarma-plate", category: "plates", emoji: "🍽️", price: "GEL 25",
    name: { en: "Beef Shawarma Plate", ar: "طبق شاورما لحم", ru: "Тарелка шаурмы из говядины" },
    desc: { en: "Beef shawarma served as a full plate.", ar: "شاورما لحم تُقدَّم كطبق كامل.", ru: "Шаурма из говядины подаётся полной тарелкой." }
  },
  {
    id: "chicken-tawook-plate", category: "plates", emoji: "🍽️", price: "GEL 24",
    name: { en: "Chicken Tawook Plate", ar: "طبق دجاج طاووق", ru: "Тарелка курицы Тавук" },
    desc: { en: "Grilled chicken tawook served as a full plate.", ar: "دجاج طاووق مشوي يُقدَّم كطبق كامل.", ru: "Жареная курица Тавук подаётся полной тарелкой." }
  },
  {
    id: "escalope-plate", category: "plates", emoji: "🍽️", price: "GEL 25",
    name: { en: "Escalope", ar: "إسكالوب", ru: "Эскалоп" },
    desc: { en: "Crispy escalope served as a full plate.", ar: "إسكالوب مقرمش يُقدَّم كطبق كامل.", ru: "Хрустящий эскалоп подаётся полной тарелкой." }
  },
  {
    id: "falafel-plate", category: "plates", emoji: "🍽️", price: "GEL 24",
    name: { en: "Falafel Plate", ar: "طبق فلافل", ru: "Тарелка фалафеля" },
    desc: { en: "Falafel served as a full plate.", ar: "فلافل تُقدَّم كطبق كامل.", ru: "Фалафель подаётся полной тарелкой." }
  },
  {
    id: "french-fries-plate", category: "plates", emoji: "🍟", price: "GEL 8",
    name: { en: "French Fries Plate", ar: "طبق بطاطا مقلية", ru: "Тарелка картофеля фри" },
    desc: { en: "A full plate of golden french fries.", ar: "طبق كامل من البطاطا المقلية الذهبية.", ru: "Полная тарелка золотистого картофеля фри." }
  },
  {
    id: "kabab-plate", category: "plates", emoji: "🍽️", price: "GEL 24",
    name: { en: "Kabab Plate", ar: "طبق كباب", ru: "Тарелка кебаба" },
    desc: { en: "Grilled kabab served as a full plate.", ar: "كباب مشوي يُقدَّم كطبق كامل.", ru: "Жареный кебаб подаётся полной тарелкой." }
  },
  {
    id: "lebanese-chicken-shawarma-plate", category: "plates", emoji: "🍽️", price: "GEL 24",
    name: { en: "Lebanese Chicken Shawarma Plate", ar: "طبق شاورما دجاج لبنانية", ru: "Тарелка ливанской шаурмы из курицы" },
    desc: { en: "Lebanese chicken shawarma served as a full plate.", ar: "شاورما دجاج لبنانية تُقدَّم كطبق كامل.", ru: "Ливанская шаурма из курицы подаётся полной тарелкой." }
  },
  {
    id: "sps-shawarma-plate", category: "plates", emoji: "🍽️", price: "GEL 24",
    name: { en: "SPS Shawarma Plate", ar: "طبق شاورما إس بي إس", ru: "Тарелка шаурмы SPS" },
    desc: { en: "Shawarma served as a full plate.", ar: "شاورما تُقدَّم كطبق كامل.", ru: "Шаурма подаётся полной тарелкой." }
  },
  {
    id: "vegan-plate", category: "plates", emoji: "🥗", price: "GEL 25",
    name: { en: "Vegan Plate", ar: "طبق نباتي", ru: "Веганская тарелка" },
    desc: { en: "A fully plant-based plate.", ar: "طبق نباتي بالكامل.", ru: "Полностью растительная тарелка." }
  },

  /* ===== COMBOS (shawarma/roll + fries + 0.25L soft drink) ===== */
  {
    id: "combo-nidz-special", category: "combos", img: "assets/img/nidz-special-shawarma.jpg", price: "GEL 23",
    name: { en: "Nid's Special Shawarma Combo", ar: "كومبو شاورما نيدز الخاصة", ru: "Комбо: Фирменная шаурма Nid'Z" },
    desc: { en: "Includes french fries and a 0.25L soft drink.", ar: "يشمل بطاطا مقلية ومشروبًا غازيًا 0.25 لتر.", ru: "В комплекте картофель фри и напиток 0,25 л." }
  },
  {
    id: "combo-beef-shawarma", category: "combos", img: "assets/img/beef-shawarma.jpg", price: "GEL 23",
    name: { en: "Beef Shawarma Combo", ar: "كومبو شاورما لحم", ru: "Комбо: Шаурма из говядины" },
    desc: { en: "Includes french fries and a 0.25L soft drink.", ar: "يشمل بطاطا مقلية ومشروبًا غازيًا 0.25 لتر.", ru: "В комплекте картофель фри и напиток 0,25 л." }
  },
  {
    id: "combo-spb", category: "combos", img: "assets/img/spb.jpg", price: "GEL 23",
    name: { en: "SPB Shawarma Roll Combo", ar: "كومبو لفة شاورما إس بي بي", ru: "Комбо: Ролл SPB" },
    desc: { en: "Includes french fries and a 0.25L soft drink.", ar: "يشمل بطاطا مقلية ومشروبًا غازيًا 0.25 لتر.", ru: "В комплекте картофель фри и напиток 0,25 л." }
  },
  {
    id: "combo-lebanese-chicken", category: "combos", img: "assets/img/lebanese-wrap.jpg", price: "GEL 22",
    name: { en: "Lebanese Chicken Shawarma Roll Combo", ar: "كومبو لفة شاورما دجاج لبنانية", ru: "Комбо: Ролл с ливанской шаурмой" },
    desc: { en: "Includes french fries and a 0.25L soft drink.", ar: "يشمل بطاطا مقلية ومشروبًا غازيًا 0.25 لتر.", ru: "В комплекте картофель фри и напиток 0,25 л." }
  },
  {
    id: "combo-picasso", category: "combos", img: "assets/img/picasso.jpg", price: "GEL 22",
    name: { en: "Picasso Shawarma Roll Combo", ar: "كومبو لفة شاورما بيكاسو", ru: "Комбо: Ролл Picasso" },
    desc: { en: "Includes french fries and a 0.25L soft drink.", ar: "يشمل بطاطا مقلية ومشروبًا غازيًا 0.25 لتر.", ru: "В комплекте картофель фри и напиток 0,25 л." }
  },
  {
    id: "combo-kabab", category: "combos", img: "assets/img/kabab.jpg", price: "GEL 22",
    name: { en: "Kabab Roll Combo", ar: "كومبو لفة كباب", ru: "Комбо: Ролл с кебабом" },
    desc: { en: "Includes french fries and a 0.25L soft drink.", ar: "يشمل بطاطا مقلية ومشروبًا غازيًا 0.25 لتر.", ru: "В комплекте картофель фри и напиток 0,25 л." }
  },
  {
    id: "combo-chicken-tawook", category: "combos", img: "assets/img/chicken-tawook.jpg", price: "GEL 20",
    name: { en: "Chicken Tawook Roll Combo", ar: "كومبو لفة دجاج طاووق", ru: "Комбо: Ролл с курицей Тавук" },
    desc: { en: "Includes french fries and a 0.25L soft drink.", ar: "يشمل بطاطا مقلية ومشروبًا غازيًا 0.25 لتر.", ru: "В комплекте картофель фри и напиток 0,25 л." }
  },

  /* ===== HOT STARTERS & FRIES ===== */
  {
    id: "loaded-fries", category: "hot-starters", emoji: "🍟", price: "GEL 12",
    name: { en: "Loaded Fries", ar: "بطاطا مقلية محملة", ru: "Картофель фри с добавками" },
    desc: { en: "Crispy fries loaded with our house toppings.", ar: "بطاطا مقلية مقرمشة محملة بإضافاتنا الخاصة.", ru: "Хрустящий картофель фри с фирменными добавками." }
  },
  {
    id: "spicy-potatoes", category: "hot-starters", emoji: "🌶️", price: "GEL 12",
    name: { en: "Spicy Potatoes", ar: "بطاطا حارة", ru: "Острый картофель" },
    desc: { en: "Golden potatoes tossed in a spicy seasoning.", ar: "بطاطا ذهبية متبلة بتتبيلة حارة.", ru: "Золотистый картофель в остром маринаде." }
  },
  {
    id: "coriander-salad", category: "hot-starters", emoji: "🥗", price: "GEL 12",
    name: { en: "Coriander Salad", ar: "سلطة الكزبرة", ru: "Салат с кориандром" },
    desc: { en: "Fresh salad with coriander.", ar: "سلطة طازجة بالكزبرة.", ru: "Свежий салат с кориандром." }
  },

  /* ===== COLD STARTERS ===== */
  {
    id: "hummus", category: "cold-starters", emoji: "🧆", price: "GEL 14",
    name: { en: "Hummus", ar: "حمص", ru: "Хумус" },
    desc: { en: "Creamy chickpea and tahini dip.", ar: "متبل حمص كريمي بالطحينة.", ru: "Кремовый соус из нута и тахини." }
  },
  {
    id: "paprika-hummus", category: "cold-starters", emoji: "🧆", price: "GEL 14",
    name: { en: "Paprika Hummus", ar: "حمص بالبابريكا", ru: "Хумус с паприкой" },
    desc: { en: "Our classic hummus finished with paprika.", ar: "حمصنا الكلاسيكي مع لمسة من البابريكا.", ru: "Наш классический хумус с паприкой." }
  },
  {
    id: "baba-ghannouj", category: "cold-starters", emoji: "🍆", price: "GEL 14",
    name: { en: "Baba Ghannouj", ar: "بابا غنوج", ru: "Баба гануш" },
    desc: { en: "Smoky roasted eggplant dip.", ar: "متبل باذنجان مشوي بنكهة مدخنة.", ru: "Дымный соус из печёного баклажана." }
  },
  {
    id: "tabbouleh", category: "cold-starters", emoji: "🥗", price: "GEL 14",
    name: { en: "Tabbouleh", ar: "تبولة", ru: "Табуле" },
    desc: { en: "Parsley salad with tomato, mint and bulgur.", ar: "سلطة بقدونس مع طماطم ونعناع وبرغل.", ru: "Салат из петрушки с помидорами, мятой и булгуром." }
  },
  {
    id: "signature-salad", category: "cold-starters", emoji: "🥗", price: "GEL 15",
    name: { en: "Signature Salad", ar: "السلطة المميزة", ru: "Фирменный салат" },
    desc: { en: "Our house salad, made fresh daily.", ar: "سلطتنا المميزة، تُحضَّر طازجة يوميًا.", ru: "Наш фирменный салат, готовится свежим каждый день." }
  },
  {
    id: "dolma", category: "cold-starters", emoji: "🍇", price: "GEL 12",
    name: { en: "Dolma", ar: "دولمة", ru: "Долма" },
    desc: { en: "Grape leaves stuffed with seasoned rice.", ar: "ورق عنب محشو بالأرز المتبل.", ru: "Виноградные листья, фаршированные приправленным рисом." }
  },

  /* ===== COLD DRINKS ===== */
  {
    id: "ayran", category: "cold-drinks", emoji: "🥛", price: "GEL 4",
    name: { en: "Ayran", ar: "عيران", ru: "Айран" }
  },
  {
    id: "fanta", category: "cold-drinks", emoji: "🥤", price: "GEL 4",
    name: { en: "Fanta", ar: "فانتا", ru: "Фанта" }
  },
  {
    id: "iced-tea", category: "cold-drinks", emoji: "🧊", price: "GEL 4",
    name: { en: "Iced Tea", ar: "شاي مثلج", ru: "Холодный чай" }
  },
  {
    id: "pipes", category: "cold-drinks", emoji: "🥤", price: "GEL 4",
    name: { en: "Pipes", ar: "بايبس", ru: "Пайпс" }
  },
  {
    id: "seven-up", category: "cold-drinks", emoji: "🥤", price: "GEL 4",
    name: { en: "Seven Up", ar: "سفن أب", ru: "Севен Ап" }
  },
  {
    id: "water", category: "cold-drinks", emoji: "💧", price: "GEL 3",
    name: { en: "Water", ar: "مياه", ru: "Вода" }
  }
];

const MENU_CATEGORIES = [
  { id: "all", label: { en: "All", ar: "الكل", ru: "Все" } },
  { id: "shawarma-rolls", label: { en: "Shawarma & Rolls", ar: "شاورما ولفائف", ru: "Шаурма и роллы" } },
  { id: "plates", label: { en: "Plates", ar: "أطباق", ru: "Тарелки" } },
  { id: "combos", label: { en: "Combos", ar: "وجبات مجمعة", ru: "Комбо" } },
  { id: "hot-starters", label: { en: "Hot Starters & Fries", ar: "مقبلات ساخنة وبطاطا", ru: "Горячие закуски и фри" } },
  { id: "cold-starters", label: { en: "Cold Starters", ar: "مقبلات باردة", ru: "Холодные закуски" } },
  { id: "cold-drinks", label: { en: "Cold Drinks", ar: "مشروبات باردة", ru: "Холодные напитки" } }
];
