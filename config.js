// ====== EDIT ME ======
window.PARTY = {
  host: "Gabriele Giardino",
  date:  { it: "Domenica 29 novembre 2026 · 14:30 – 20:30", en: "Sunday, 29 November 2026 · 2:30 – 8:30 PM" },
  place: { it: "Apri su Google Maps", en: "Open in Google Maps" },
  map: "https://maps.app.goo.gl/ALqaBzFcosoTDM5m8",
  floor: { it: "2° piano, porta a sinistra della piccola pianta", en: "2nd floor, door on the left of the small plant" },
  dress: { it: "Tunica, sandali e aureola graditi", en: "Tunics, sandals and halos welcome" },

  // Leave empty for DEMO mode (data stays in this browser only).
  // Paste your Google Apps Script web-app URL here (see backend.gs).
  API_URL: "",

  // Put photo files in /photos and list them here, e.g. ["photos/1.jpg","photos/2.jpg"]
  photos: [
    { src: "p1.jpg", halo: { x: "29.5%", y: "0.5%", w: "36%" } },
    { src: "p2.jpg", halo: { x: "50%",   y: "17%",  w: "24%" } },
    { src: "p3.jpg", halo: { x: "50.5%", y: "12%",  w: "22%" } },
    { src: "p4.jpg", halo: { x: "56%",   y: "3%",   w: "27%" } }
  ],
  halo: true,   // animated floating halo over the photos

  prize: {
    it: "Chi indovina più risposte di tutti vince un regalo a sorpresa!",
    en: "Whoever gets the most answers right wins a surprise gift!"
  },

  // "a" = index of the correct option (0-based). Options are shuffled at play time.
  // bonus:true = optional extra questions, played after the main ones.
  questions: [
    { q: { it: "Qual è il nickname preferito da Gabriele nei videogiochi?", en: "What is Gabriele's favourite gaming nickname?" },
      o: { it: ["Gabripo", "Calabria93", "CosenzaNerd", "GabriG"], en: ["Gabripo", "Calabria93", "CosenzaNerd", "GabriG"] }, a: 0 },
    { q: { it: "Come si chiama il cane dei genitori di Gabriele?", en: "What is the name of Gabriele's parents' dog?" },
      o: { it: ["Ciro", "Rambo", "Diego", "Attila"], en: ["Ciro", "Rambo", "Diego", "Attila"] }, a: 0 },
    { q: { it: "Quanto pesa Gabriele?", en: "How much does Gabriele weigh?" },
      o: { it: ["Poco meno di 75 Kg", "75 Kg e una noce di cocco", "Circa 78 Kg quando incazzato", "73 Kg dopo aver pagato l'affitto"],
           en: ["Just under 75 kg", "75 kg and a coconut", "About 78 kg when angry", "73 kg after paying the rent"] }, a: 0 },
    { q: { it: "Quante calorie brucia Gabriele al giorno, ad oggi?", en: "How many calories does Gabriele burn per day, as of today?" },
      o: { it: ["2700 kcal e 1 banana", "2400 kcal e 3 gallette di riso", "3100 kcal e un bicchiere di benzina", "2500 kcal e 1 bicchiere di latte"],
           en: ["2700 kcal and 1 banana", "2400 kcal and 3 rice cakes", "3100 kcal and a glass of petrol", "2500 kcal and 1 glass of milk"] }, a: 0 },
    { q: { it: "Scrittore preferito da Gabriele?", en: "Gabriele's favourite writer?" },
      o: { it: ["Daniel Pink", "Oscar Wilde", "Kentaro Miura", "Luigi Pirandello"], en: ["Daniel Pink", "Oscar Wilde", "Kentaro Miura", "Luigi Pirandello"] }, a: 0 },
    { q: { it: "Quanti cavalli ha la moto di Gabriele?", en: "How many horses does Gabriele's motorbike have?" },
      o: { it: ["Tanti, troppi: 100 HP", "Abbastanza: 85 HP", "90 HP", "65 HP"], en: ["Many, too many: 100 HP", "Enough: 85 HP", "90 HP", "65 HP"] }, a: 0 },
    { q: { it: "Gioco preferito da Gabriele?", en: "Gabriele's favourite game?" },
      o: { it: ["Pokémon Emerald", "The Witcher 3 - Wild Hunt", "Bang!", "Horrified"], en: ["Pokémon Emerald", "The Witcher 3 - Wild Hunt", "Bang!", "Horrified"] }, a: 0 },
    // ---- bonus
    { bonus: true, q: { it: "Film preferito da Gabriele?", en: "Gabriele's favourite film?" },
      o: { it: ["Inception", "The Lord of The Rings", "Interstellar", "The Matrix Trilogy"], en: ["Inception", "The Lord of The Rings", "Interstellar", "The Matrix Trilogy"] }, a: 0 },
    { bonus: true, q: { it: "Perché Gabriele torna spesso in Calabria?", en: "Why does Gabriele often go back to Calabria?" },
      o: { it: ["Focus mode: ha il supporto di famiglia e amici", "Meteo: ha carenza di vitamina D", "Mare e montagna vicini... What else?", "Cibo"],
           en: ["Focus mode: he has the support of family and friends", "Weather: he lacks vitamin D", "Sea and mountains nearby... what else?", "Food"] }, a: 0 }
  ]
};
