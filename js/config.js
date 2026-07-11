/**
 * NID'Z RESTAURANT — SITE CONFIG
 * Edit this file to update contact info, social links, hours, and the
 * Stripe payment link across the entire site in one place.
 */
const NIDZ = {
  brand: "Nid'Z Restaurant",
  phone: "+995 571 530 290",
  phoneHref: "tel:+995571530290",
  whatsapp: "https://wa.me/995571530290",
  email: "nidsrestaurant@gmail.com",
  emailHref: "mailto:nidsrestaurant@gmail.com",
  addressShort: "Batumi, Adjara, Georgia",
  mapsShareLink: "https://maps.app.goo.gl/QMnDL4wzaChyBcsp8",
  mapsEmbed: "https://www.google.com/maps?q=Nid%27Z%20Restaurant%20Batumi&output=embed",
  menuLink: "https://nidz.tilda.ws",
  social: {
    instagram: "https://www.instagram.com/nidzrestaurant/",
    tiktok: "https://www.tiktok.com/@nidsrestaurant?lang=en",
    tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g297576-d32878680-Reviews-Nid_z_Restaurant-Batumi_Adjara_Region.html",
    google: "https://maps.app.goo.gl/QMnDL4wzaChyBcsp8"
  },
  // Paste your live Stripe Payment Link below (Stripe Dashboard → Payment Links).
  // Every "Buy Now" button on the order page will open this link.
  // A per-item link can be set on each product in menu-data.js via the `stripeLink` field —
  // if a product doesn't have one, this default is used instead.
  stripeDefaultLink: "https://buy.stripe.com/REPLACE_WITH_YOUR_PAYMENT_LINK",
  hours: [
    { day: "Monday – Thursday", time: "11:00 – 23:00" },
    { day: "Friday – Saturday", time: "11:00 – 00:30" },
    { day: "Sunday", time: "12:00 – 23:00" }
  ]
};
