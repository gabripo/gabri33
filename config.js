// ====== EDIT ME ======
window.PARTY = {
  host: "Gabriele Giardino",
  date:  { it: "Domenica 29 novembre 2026 · 14:30 – 20:30", en: "Sunday, 29 November 2026 · 2:30 – 8:30 PM" },
  place: { it: "Apri su Google Maps", en: "Open in Google Maps" },
  map: "https://maps.app.goo.gl/ALqaBzFcosoTDM5m8",
  floor: { it: "2° piano, porta a sinistra della piccola pianta", en: "2nd floor, door on the left of the small plant" },
  dress: { it: "Tunica, sandali e aureola graditi", en: "Tunics, sandals and halos welcome" },

  API_URL: "https://script.google.com/macros/s/AKfycbwokKVjOjwzFCrGZnZ1JAqsi7bKWrJG3B4rel9hFKJKX8St41TpdlzwOdmr7ifSpvTO/exec",

  // Put photo files in /photos and list them here, e.g. ["photos/1.jpg","photos/2.jpg"]
  // Photos are used as full-screen backgrounds, one per section (hero, quiz, why 33, RSVP).
  // "pos" = CSS background-position, used to keep the face in view on phones.
  photos: [
    { src: "p3.jpg", pos: "51% 20%" },
    { src: "p1.jpg", pos: "1% 20%" },
    { src: "p2.jpg", pos: "50% 20%" },
    { src: "p4.jpg", pos: "64% 20%" }
  ],
  halo: true,   // animated floating halo over the photos

  prize: {
    it: "Chi indovina più risposte di tutti vince un regalo a sorpresa!",
    en: "Whoever gets the most answers right wins a surprise gift!"
  },

  // Questions and answers are served by the backend (Google Apps Script), not stored here.
  questions: []
};
