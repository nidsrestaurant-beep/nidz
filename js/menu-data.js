/**
 * NID'Z RESTAURANT — MENU DATA
 * One place to manage dish names, images, short descriptions and prices.
 * Add a `stripeLink` to any item to send it to its own Stripe Payment Link;
 * otherwise it falls back to NIDZ.stripeDefaultLink.
 */
const MENU_ITEMS = [
  {
    id: "nidz-special",
    name: "Nid'Z Special Shawarma",
    category: "signature",
    img: "assets/img/nidz-special-shawarma.jpg",
    desc: "Grilled chicken, melted cheese, white cabbage slaw, tomato, pickles and fries, wrapped with garlic sauce in Lebanese bread.",
    price: "GEL 15",
    badge: "House Favorite"
  },
  {
    id: "beast-shawarma",
    name: "Beast Shawarma",
    category: "signature",
    img: "assets/img/beast-shawarma.jpg",
    desc: "A hearty 250/300g shawarma stack with tomato, lettuce, fries, garlic and Picasso sauce in thin Lebanese bread.",
    price: "GEL 17",
    badge: "Biggest"
  },
  {
    id: "phoenix",
    name: "Phoenix",
    category: "signature",
    img: "assets/img/phoenix.jpg",
    desc: "Beef and shawarma chicken layered with tomato, lettuce, onion, pickled cabbage, pomegranate and garlic sauce.",
    price: "GEL 18",
    badge: "Chef's Pick"
  },
  {
    id: "beef-shawarma",
    name: "Beef Shawarma",
    category: "shawarma",
    img: "assets/img/beef-shawarma.jpg",
    desc: "150g beef shawarma with tahini, tomato, pickles, parsley, onion with sumac and hummus.",
    price: "GEL 14"
  },
  {
    id: "kabab",
    name: "Kabab",
    category: "grill",
    img: "assets/img/kabab.jpg",
    desc: "150g grilled kabab skewers with tomato, pickles, parsley, onion with sumac and hummus.",
    price: "GEL 14"
  },
  {
    id: "chicken-tawook",
    name: "Chicken Tawook",
    category: "grill",
    img: "assets/img/chicken-tawook.jpg",
    desc: "160g char-grilled chicken tawook with pickles, fries and garlic sauce in Lebanese bread.",
    price: "GEL 13"
  },
  {
    id: "batumi-style",
    name: "Batumi Style",
    category: "signature",
    img: "assets/img/batumi-style.jpg",
    desc: "185g grilled chicken with smoked and melted cheese, pickles, onion, lettuce and fries.",
    price: "GEL 16"
  },
  {
    id: "spb",
    name: "SPB",
    category: "grill",
    img: "assets/img/spb.jpg",
    desc: "160g grilled chicken with tomato, cucumber and garlic sauce — light and fresh.",
    price: "GEL 12"
  },
  {
    id: "picasso",
    name: "Picasso",
    category: "signature",
    img: "assets/img/picasso.jpg",
    desc: "140g grilled chicken with fresh mushroom, corn, lettuce, Picasso sauce and garlic sauce.",
    price: "GEL 14"
  },
  {
    id: "lebanese-wrap",
    name: "Lebanese Wrap",
    category: "grill",
    img: "assets/img/lebanese-wrap.jpg",
    desc: "150g grilled chicken with pickles, fries and garlic sauce, rolled tight in Lebanese bread.",
    price: "GEL 12"
  },
  {
    id: "burger-roll",
    name: "Burger Roll",
    category: "rolls",
    img: "assets/img/burger-roll.jpg",
    desc: "Grilled burger patty with tomato, onion, pickles, cabbage slaw, fries, ketchup and mayo.",
    price: "GEL 13"
  },
  {
    id: "escalope-roll",
    name: "Escalope Schnitzel Roll",
    category: "rolls",
    img: "assets/img/escalope-schnitzel-roll.jpg",
    desc: "Crispy escalope with fries, pickles, cabbage slaw, Picasso, barbecue and garlic sauce.",
    price: "GEL 13"
  },
  {
    id: "fries-roll",
    name: "Fries Roll",
    category: "rolls",
    img: "assets/img/fries-roll.jpg",
    desc: "French fries, pickles, ketchup, garlic sauce and mayo — simple, satisfying, delicious.",
    price: "GEL 8"
  },
  {
    id: "falafel-roll",
    name: "Falafel Roll",
    category: "rolls",
    img: "assets/img/falafel-roll.jpg",
    desc: "Four falafel with cucumber, tomato, pickles, mint, lettuce and hummus.",
    price: "GEL 10"
  }
];

const MENU_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "signature", label: "Signature" },
  { id: "shawarma", label: "Shawarma" },
  { id: "grill", label: "Grill" },
  { id: "rolls", label: "Rolls" }
];
