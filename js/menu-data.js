/**
 * NID'Z RESTAURANT — MENU DATA (multilingual: en / ar / ru / ka)
 * Source of truth: Poster POS export (categories, item names, prices).
 * Items with a real photo carry an `img` path; items still awaiting a photo
 * render with a category `emoji` placeholder instead — swap one in any time
 * by adding an `img` path.
 */
const MENU_ITEMS = [

  /* ===== SHAWARMA & ROLLS ===== */
  {
    id: "nidz-special-shawarma", category: "shawarma-rolls", img: "assets/img/nidz-special-shawarma.jpg",
    price: "GEL 18", badge: { en: "House Favorite", ar: "الأكثر طلبًا", ru: "Хит заведения", ka: "სახლის ფავორიტი" },
    name: { en: "Nid's Special Shawarma", ar: "شاورما نيدز الخاصة", ru: "Фирменная шаурма Nid'Z", ka: "ნიდზის სპეციალური შაურმა" }
  },
  {
    id: "beast-shawarma-roll", category: "shawarma-rolls", img: "assets/img/beast-shawarma.jpg",
    price: "GEL 25", badge: { en: "Biggest", ar: "الأكبر", ru: "Самая большая", ka: "ყველაზე დიდი" },
    name: { en: "Beast Shawarma Roll", ar: "لفة شاورما بيست", ru: "Ролл Beast Shawarma", ka: "ბისტ შაურმას როლი" }
  },
  {
    id: "phoenix", category: "shawarma-rolls", img: "assets/img/phoenix.jpg",
    price: "GEL 19", badge: { en: "Chef's Pick", ar: "اختيار الشيف", ru: "Выбор шефа", ka: "შეფის არჩევანი" },
    name: { en: "Phoenix", ar: "فينكس", ru: "Phoenix", ka: "ფენიქსი" }
  },
  {
    id: "batumi-style-cheesy", category: "shawarma-rolls", img: "assets/img/batumi-style.jpg", price: "GEL 18",
    name: { en: "Batumi Style. Cheesy", ar: "أسلوب باتومي. بالجبن", ru: "Батумский стиль. Сырный", ka: "ბათუმური სტილი. ყველიანი" }
  },
  {
    id: "beef-shawarma", category: "shawarma-rolls", img: "assets/img/beef-shawarma.jpg", price: "GEL 19",
    name: { en: "Beef Shawarma", ar: "شاورما لحم", ru: "Шаурма из говядины", ka: "საქონლის შაურმა" }
  },
  {
    id: "kabab-sandwich", category: "shawarma-rolls", img: "assets/img/kabab.jpg", price: "GEL 18",
    name: { en: "Kabab Sandwich", ar: "ساندويتش كباب", ru: "Сэндвич кебаб", ka: "ქაბაბის სენდვიჩი" }
  },
  {
    id: "tuna-sandwich", category: "shawarma-rolls", img: "assets/img/tuna-sandwich.jpg", price: "GEL 16",
    name: { en: "Tuna Sandwich", ar: "ساندويتش تونة", ru: "Сэндвич с тунцом", ka: "ტუნას სენდვიჩი" }
  },
  {
    id: "chicken-tawook", category: "shawarma-rolls", img: "assets/img/chicken-tawook.jpg", price: "GEL 16",
    name: { en: "Chicken Tawook", ar: "دجاج طاووق", ru: "Курица Тавук", ka: "ქათმის თავუქი" }
  },
  {
    id: "spb-shawarma", category: "shawarma-rolls", img: "assets/img/spb.jpg", price: "GEL 17",
    name: { en: "SPB Shawarma", ar: "شاورما إس بي بي", ru: "Шаурма SPB", ka: "SPB შაურმა" }
  },
  {
    id: "picasso-shawarma", category: "shawarma-rolls", img: "assets/img/picasso.jpg", price: "GEL 18",
    name: { en: "Picasso Shawarma", ar: "شاورما بيكاسو", ru: "Шаурма Picasso", ka: "პიკასოს შაურმა" }
  },
  {
    id: "lebanese-chicken-shawarma", category: "shawarma-rolls", img: "assets/img/lebanese-wrap.jpg", price: "GEL 16",
    name: { en: "Lebanese Chicken Shawarma", ar: "شاورما دجاج لبنانية", ru: "Ливанская шаурма из курицы", ka: "ლიბანური ქათმის შაურმა" }
  },
  {
    id: "nidz-burger-roll", category: "shawarma-rolls", img: "assets/img/burger-roll.jpg", price: "GEL 18",
    name: { en: "Nid's Burger Roll", ar: "لفة برجر نيدز", ru: "Бургер-ролл Nid'Z", ka: "ნიდზის ბურგერ-როლი" }
  },
  {
    id: "fries-roll", category: "shawarma-rolls", img: "assets/img/fries-roll.jpg", price: "GEL 12",
    name: { en: "Fries Roll", ar: "لفة بطاطا", ru: "Ролл с картофелем фри", ka: "ფრი-როლი" }
  },
  {
    id: "falafel-roll", category: "shawarma-rolls", img: "assets/img/falafel-roll.jpg", price: "GEL 13",
    name: { en: "Falafel Roll", ar: "لفة فلافل", ru: "Фалафель-ролл", ka: "ფალაფელის როლი" }
  },
  {
    id: "escalope-schnitzel-roll", category: "shawarma-rolls", img: "assets/img/escalope-schnitzel-roll.jpg", price: "GEL 18",
    name: { en: "Escalope Schnitzel Roll", ar: "لفة إسكالوب شنيتزل", ru: "Ролл с эскалопом-шницелем", ka: "ესკალოპ-შნიცელის როლი" }
  },

  /* ===== PLATES ===== */
  {
    id: "beef-shawarma-plate", category: "plates", img: "assets/img/beef-shawarma-plate.jpg", price: "GEL 25",
    name: { en: "Beef Shawarma Plate", ar: "طبق شاورما لحم", ru: "Тарелка шаурмы из говядины", ka: "საქონლის შაურმას თეფში" }
  },
  {
    id: "chicken-tawook-plate", category: "plates", img: "assets/img/chicken-tawook-plate.jpg", price: "GEL 24",
    name: { en: "Chicken Tawook Plate", ar: "طبق دجاج طاووق", ru: "Тарелка курицы Тавук", ka: "ქათმის თავუქის თეფში" }
  },
  {
    id: "escalope-plate", category: "plates", img: "assets/img/escalope-plate.jpg", price: "GEL 25",
    name: { en: "Escalope", ar: "إسكالوب", ru: "Эскалоп", ka: "ესკალოპი" }
  },
  {
    id: "falafel-plate", category: "plates", img: "assets/img/falafel-plate.jpg", price: "GEL 24",
    name: { en: "Falafel Plate", ar: "طبق فلافل", ru: "Тарелка фалафеля", ka: "ფალაფელის თეფში" }
  },
  {
    id: "french-fries-plate", category: "plates", img: "assets/img/french-fries-plate.jpg", price: "GEL 10",
    name: { en: "French Fries Plate", ar: "طبق بطاطا مقلية", ru: "Тарелка картофеля фри", ka: "ფრი კარტოფილის თეფში" }
  },
  {
    id: "kabab-plate", category: "plates", img: "assets/img/kabab-plate.jpg", price: "GEL 24",
    name: { en: "Kabab Plate", ar: "طبق كباب", ru: "Тарелка кебаба", ka: "ქაბაბის თეფში" }
  },
  {
    id: "lebanese-chicken-shawarma-plate", category: "plates", img: "assets/img/lebanese-chicken-shawarma-plate.jpg", price: "GEL 24",
    name: { en: "Lebanese Chicken Shawarma Plate", ar: "طبق شاورما دجاج لبنانية", ru: "Тарелка ливанской шаурмы из курицы", ka: "ლიბანური ქათმის შაურმას თეფში" }
  },
  {
    id: "sps-shawarma-plate", category: "plates", img: "assets/img/sps-shawarma-plate.jpg", price: "GEL 24",
    name: { en: "SPS Shawarma Plate", ar: "طبق شاورما إس بي إس", ru: "Тарелка шаурмы SPS", ka: "SPS შაურმას თეფში" }
  },
  {
    id: "vegan-plate", category: "plates", img: "assets/img/vegan-plate.jpg", price: "GEL 25",
    name: { en: "Vegan Plate", ar: "طبق نباتي", ru: "Веганская тарелка", ka: "ვეგანური თეფში" }
  },

  /* ===== COMBOS (shawarma/roll + fries + 0.25L soft drink) ===== */
  {
    id: "combo-nidz-special", category: "combos", img: "assets/img/nidz-special-shawarma.jpg", price: "GEL 23",
    name: { en: "Nid's Special Shawarma Combo", ar: "كومبو شاورما نيدز الخاصة", ru: "Комбо: Фирменная шаурма Nid'Z", ka: "ნიდზის სპეციალური შაურმას კომბო" }
  },
  {
    id: "combo-beef-shawarma", category: "combos", img: "assets/img/beef-shawarma.jpg", price: "GEL 23",
    name: { en: "Beef Shawarma Combo", ar: "كومبو شاورما لحم", ru: "Комбо: Шаурма из говядины", ka: "საქონლის შაურმას კომბო" }
  },
  {
    id: "combo-spb", category: "combos", img: "assets/img/spb.jpg", price: "GEL 23",
    name: { en: "SPB Shawarma Roll Combo", ar: "كومبو لفة شاورما إس بي بي", ru: "Комбо: Ролл SPB", ka: "SPB შაურმა როლის კომბო" }
  },
  {
    id: "combo-lebanese-chicken", category: "combos", img: "assets/img/lebanese-wrap.jpg", price: "GEL 22",
    name: { en: "Lebanese Chicken Shawarma Roll Combo", ar: "كومبو لفة شاورما دجاج لبنانية", ru: "Комбо: Ролл с ливанской шаурмой", ka: "ლიბანური ქათმის შაურმა როლის კომბო" }
  },
  {
    id: "combo-picasso", category: "combos", img: "assets/img/picasso.jpg", price: "GEL 22",
    name: { en: "Picasso Shawarma Roll Combo", ar: "كومبو لفة شاورما بيكاسو", ru: "Комбо: Ролл Picasso", ka: "პიკასოს შაურმა როლის კომბო" }
  },
  {
    id: "combo-kabab", category: "combos", img: "assets/img/kabab.jpg", price: "GEL 22",
    name: { en: "Kabab Roll Combo", ar: "كومبو لفة كباب", ru: "Комбо: Ролл с кебабом", ka: "ქაბაბის როლის კომბო" }
  },
  {
    id: "combo-tuna-sandwich", category: "combos", img: "assets/img/tuna-sandwich.jpg", price: "GEL 20",
    name: { en: "Tuna Sandwich Combo", ar: "كومبو ساندويتش تونة", ru: "Комбо: Сэндвич с тунцом", ka: "ტუნას სენდვიჩის კომბო" }
  },
  {
    id: "combo-chicken-tawook", category: "combos", img: "assets/img/chicken-tawook.jpg", price: "GEL 20",
    name: { en: "Chicken Tawook Roll Combo", ar: "كومبو لفة دجاج طاووق", ru: "Комбо: Ролл с курицей Тавук", ka: "ქათმის თავუქის როლის კომბო" }
  },
  {
    id: "combo-phoenix", category: "combos", img: "assets/img/phoenix.jpg", price: "GEL 24",
    name: { en: "Phoenix Combo", ar: "كومبو فينكس", ru: "Комбо: Phoenix", ka: "ფენიქსის კომბო" }
  },
  {
    id: "combo-burger-roll", category: "combos", img: "assets/img/burger-roll.jpg", price: "GEL 23",
    name: { en: "Nid's Burger Roll Combo", ar: "كومبو لفة برجر نيدز", ru: "Комбо: Бургер-ролл Nid'Z", ka: "ნიდზის ბურგერ-როლის კომბო" }
  },
  {
    id: "combo-falafel-roll", category: "combos", img: "assets/img/falafel-roll.jpg", price: "GEL 18",
    name: { en: "Falafel Roll Combo", ar: "كومبو لفة فلافل", ru: "Комбо: Фалафель-ролл", ka: "ფალაფელის როლის კომბო" }
  },

  /* ===== HOT STARTERS & FRIES ===== */
  {
    id: "loaded-fries", category: "hot-starters", img: "assets/img/loaded-fries.jpg", price: "GEL 12",
    name: { en: "Loaded Fries", ar: "بطاطا مقلية محملة", ru: "Картофель фри с добавками", ka: "დატვირთული ფრი კარტოფილი" }
  },

  /* ===== COLD STARTERS ===== */
  {
    id: "hummus", category: "cold-starters", img: "assets/img/hummus.jpg", price: "GEL 14",
    name: { en: "Hummus", ar: "حمص", ru: "Хумус", ka: "ხუმუსი" }
  },
  {
    id: "paprika-hummus", category: "cold-starters", img: "assets/img/paprika-hummus.jpg", price: "GEL 14",
    name: { en: "Paprika Hummus", ar: "حمص بالبابريكا", ru: "Хумус с паприкой", ka: "პაპრიკის ხუმუსი" }
  },
  {
    id: "baba-ghannouj", category: "cold-starters", img: "assets/img/baba-ghannouj.jpg", price: "GEL 12",
    name: { en: "Baba Ghannouj", ar: "بابا غنوج", ru: "Баба гануш", ka: "ბაბა განუჯი" }
  },
  {
    id: "signature-salad", category: "cold-starters", img: "assets/img/signature-salad.jpg", price: "GEL 15",
    name: { en: "Signature Salad", ar: "السلطة المميزة", ru: "Фирменный салат", ka: "ხელმოწერილი სალათი" }
  },
  {
    id: "dolma", category: "cold-starters", img: "assets/img/dolma.jpg", price: "GEL 12",
    name: { en: "Dolma", ar: "دولمة", ru: "Долма", ka: "დოლმა" }
  },

  /* ===== COLD DRINKS ===== */
  {
    id: "ayran", category: "cold-drinks", img: "assets/img/ayran.jpg", price: "GEL 4",
    name: { en: "Ayran", ar: "عيران", ru: "Айран", ka: "აირანი" }
  },
  {
    id: "fanta", category: "cold-drinks", img: "assets/img/fanta.jpg", price: "GEL 4",
    name: { en: "Fanta", ar: "فانتا", ru: "Фанта", ka: "ფანტა" }
  },
  {
    id: "iced-tea", category: "cold-drinks", img: "assets/img/iced-tea.jpg", price: "GEL 4",
    name: { en: "Iced Tea", ar: "شاي مثلج", ru: "Холодный чай", ka: "ცივი ჩაი" }
  },
  {
    id: "pepsi", category: "cold-drinks", img: "assets/img/pepsi.jpg", price: "GEL 4",
    name: { en: "Pepsi", ar: "بيبسي", ru: "Пепси", ka: "პეპსი" }
  },
  {
    id: "seven-up", category: "cold-drinks", img: "assets/img/seven-up.jpg", price: "GEL 4",
    name: { en: "Seven Up", ar: "سفن أب", ru: "Севен Ап", ka: "სევენ აპი" }
  },
  {
    id: "water", category: "cold-drinks", img: "assets/img/water.jpg", price: "GEL 3",
    name: { en: "Water", ar: "مياه", ru: "Вода", ka: "წყალი" }
  },
  {
    id: "cold-lemonade", category: "cold-drinks", emoji: "🍋", price: "GEL 6",
    name: { en: "Cold Lemonade", ar: "ليموناضة باردة", ru: "Холодный лимонад", ka: "ცივი ლიმონათი" }
  },
  {
    id: "non-alcoholic-beer", category: "cold-drinks", emoji: "🍺", price: "GEL 7",
    name: { en: "Non-Alcoholic Beer", ar: "بيرة خالية من الكحول", ru: "Безалкогольное пиво", ka: "უალკოჰოლო ლუდი" }
  }
];

const MENU_CATEGORIES = [
  { id: "all", label: { en: "All", ar: "الكل", ru: "Все", ka: "ყველა" } },
  { id: "shawarma-rolls", label: { en: "Shawarma & Rolls", ar: "شاورما ولفائف", ru: "Шаурма и роллы", ka: "შაურმა და როლები" } },
  { id: "plates", label: { en: "Plates", ar: "أطباق", ru: "Тарелки", ka: "თეფშები" } },
  { id: "combos", label: { en: "Combos", ar: "وجبات كاملة", ru: "Комбо", ka: "კომბოები" } },
  { id: "hot-starters", label: { en: "Hot Starters & Fries", ar: "مقبلات ساخنة وبطاطا", ru: "Горячие закуски и фри", ka: "ცხელი დამატებები და ფრი" } },
  { id: "cold-starters", label: { en: "Cold Starters", ar: "مقبلات باردة", ru: "Холодные закуски", ka: "ცივი დამატებები" } },
  { id: "cold-drinks", label: { en: "Cold Drinks", ar: "مشروبات باردة", ru: "Холодные напитки", ka: "ცივი სასმელები" } }
];
