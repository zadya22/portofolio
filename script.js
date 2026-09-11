/* =========================================================
   Alimatou Diagne — UX Portfolio — behaviour
   ========================================================= */

// ---------------------------------------------------------
// 1. TRANSLATIONS
// ---------------------------------------------------------
const I18N = {
  fr: {
    "nav.work": "Travaux",
    "nav.method": "Méthode",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "hero.kicker": "Recherche UX & Design de produit — Dakar, Sénégal",
    "hero.title.l1": "Concevoir",
    "hero.title.l2": "à partir",
    "hero.title.l3": "des preuves.",
    "hero.desc": "Je conçois des expériences pour des entrepreneurs, des ONG et des programmes panafricains en combinant recherche utilisateur, data science et design d'interaction — de l'entretien terrain jusqu'au prototype testé.",
    "hero.cta.work": "Voir les études de cas",
    "hero.cta.cv": "Télécharger le CV",
    "hero.stat.years": "années en recherche & data",
    "hero.stat.studies": "études de cas UX documentées",
    "hero.stat.users": "entrepreneurs / utilisateurs étudiés",
    "hero.stat.coached": "startups coachées — programme FAST",
    "hero.stat.raised": "de fonds levés",
    "method.title": "Une méthode, appliquée dix-sept fois",
    "method.desc": "Chaque étude de cas de ce portfolio suit le même protocole de terrain — pensé pour des contextes à ressources limitées, où l'on n'a souvent qu'une session pour convaincre.",
    "method.step1.title": "Problème",
    "method.step1.desc": "Cadrer le vrai problème business et humain, au-delà de la demande initiale.",
    "method.step2.title": "Recherche",
    "method.step2.desc": "Entretiens, observation terrain, analyse concurrentielle et personas.",
    "method.step3.title": "Insight",
    "method.step3.desc": "Isoler la tension qui bloque réellement l'usage ou la croissance.",
    "method.step4.title": "Solution",
    "method.step4.desc": "Parcours, wireframes et prototypes conçus et testés dans Figma ou en HTML.",
    "method.step5.title": "Résultat",
    "method.step5.desc": "Tests d'utilisabilité chiffrés (taux de réussite par tâche) et recommandations.",
    "work.title": "L'index des projets",
    "work.desc": "Dix-sept dossiers de terrain, du prototype testé à l'entreprise réelle. Chaque étude complète est disponible en PDF, chaque prototype est en ligne.",
    "work.col.project": "Projet",
    "work.col.domain": "Domaine",
    "work.col.result": "Résultat clé du test",
    "filter.all": "Tout",
    "filter.fast": "Programme FAST",
    "filter.indep": "Recherches indépendantes",
    "filter.flagship": "Missions phares",
    "proj.live": "Voir le prototype",
    "proj.pdf": "Étude de cas (PDF)",
    "about.title": "À propos",
    "about.p1": "Je suis data scientist de formation, devenue chercheuse et designeuse UX par nécessité — parce qu'un tableau de bord juste ne suffit pas si personne ne l'utilise. Depuis dix ans, j'accompagne des programmes de la Fondation Mastercard, du Graça Machel Trust et d'initiatives financées par l'USAID, en Afrique de l'Ouest et au-delà.",
    "about.p2": "Mon terrain de prédilection reste l'entrepreneuriat à ressources limitées : coacher une startup à Cotonou m'apprend autant sur l'expérience utilisateur qu'un audit UX à Dakar — les mêmes questions s'y posent, avec moins de marge d'erreur.",
    "about.skill1.title": "Recherche & Design UX",
    "about.skill1.items": "Entretiens utilisateurs - tests d'usabilité - journey mapping - personas - wireframes - prototypage - Figma  ",
    "about.skill2.title": "Data & Analytics",
    "about.skill2.items": "Suivi-évaluation (M&E) - tableaux de bord KPI - ETL - SQL - Python - R - Power BI",
    "about.skill3.title": "Web & Livraison",
    "about.skill3.items": "HTML - CSS - JavaScript - PHP - reporting bailleurs  animation d'ateliers",
    "contact.title": "Travaillons ensemble",
    "contact.desc": "Disponible pour des missions de recherche UX, de design produit ou d'analytics à distance, à temps plein ou partiel.",
    "footer.rights": "Portfolio conçu et codé à la main.",
  },
  en: {
    "nav.work": "Work",
    "nav.method": "Method",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.kicker": "UX Research & Product Design — Dakar, Senegal",
    "hero.title.l1": "Designing",
    "hero.title.l2": "from",
    "hero.title.l3": "evidence.",
    "hero.desc": "I design experiences for entrepreneurs, NGOs and pan-African programs by combining user research, data science and interaction design — from the field interview to the tested prototype.",
    "hero.cta.work": "See the case studies",
    "hero.cta.cv": "Download CV",
    "hero.stat.years": "years across research & data",
    "hero.stat.studies": "documented UX case studies",
    "hero.stat.users": "entrepreneurs / users researched",
    "hero.stat.coached": "startups coached — FAST program",
    "hero.stat.raised": "fund raised ",
    "method.title": "One method, applied seventeen times",
    "method.desc": "Every case study in this portfolio follows the same field protocol — built for resource-constrained contexts, where you often get one session to make the case.",
    "method.step1.title": "Problem",
    "method.step1.desc": "Frame the real business and human problem, beyond the initial request.",
    "method.step2.title": "Research",
    "method.step2.desc": "Interviews, field observation, competitive analysis and personas.",
    "method.step3.title": "Insight",
    "method.step3.desc": "Isolate the tension that is actually blocking usage or growth.",
    "method.step4.title": "Solution",
    "method.step4.desc": "Flows, wireframes and prototypes designed and tested in Figma or HTML.",
    "method.step5.title": "Result",
    "method.step5.desc": "Measured usability tests (task success rates) and recommendations.",
    "work.title": "The project index",
    "work.desc": "Seventeen field files, from tested prototype to real company. Every full study is available as a PDF, every prototype is live.",
    "work.col.project": "Project",
    "work.col.domain": "Domain",
    "work.col.result": "Key test result",
    "filter.all": "All",
    "filter.fast": "FAST program",
    "filter.indep": "Independent research",
    "filter.flagship": "Flagship engagements",
    "proj.live": "View prototype",
    "proj.pdf": "Case study (PDF)",
    "about.title": "About",
    "about.p1": "I trained as a data scientist and became a UX researcher and designer out of necessity — because a correct dashboard is worthless if nobody uses it. For the past ten years I've supported programs for the Mastercard Foundation, the Graça Machel Trust and USAID-funded initiatives across West Africa and beyond.",
    "about.p2": "My favorite terrain is still resource-constrained entrepreneurship: coaching a startup in Cotonou teaches me as much about user experience as a UX audit in Dakar — the same questions come up, with a lot less room for error.",
    "about.skill1.title": "UX Research & Design",
    "about.skill1.items": "User interviews - usability testing - journey mapping - personas - wireframes - prototyping - Figma",
    "about.skill2.title": "Data & Analytics",
    "about.skill2.items": "M&E frameworks - KPI dashboards - ETL  - SQL - Python - R - Power BI ",
    "about.skill3.title": "Web & Delivery",
    "about.skill3.items": "HTML - CSS - JavaScript - PHP - donor reporting - workshop facilitation",
    "contact.title": "Let's work together",
    "contact.desc": "Available for remote UX research, product design or analytics engagements, full-time or part-time.",
    "footer.rights": "Portfolio designed and hand-coded.",
  }
};

// ---------------------------------------------------------
// 2. PROJECT DATA
// ---------------------------------------------------------
const PROJECTS = [
  {
    cat: "fast",
    live: "https://zadya22.github.io/Ishedara/",
    pdf: "assets/pdfs/Ishedara_Case.pdf",
    fr: { title: "Ishedara", domain: "EdTech", tagline: "Plateforme bilingue de cours en ligne (Data, IA, ML) pour le Bénin.",
      result: "Inscription réussie pour <b>4/5</b> apprenants ; le parcours \"établissement\" ne marchait que pour <b>2/5</b> avant l'ajout d'un écran de choix de profil." },
    en: { title: "Ishedara", domain: "EdTech", tagline: "Bilingual online course platform (Data, AI, ML) for Benin.",
      result: "Signup succeeded for <b>4/5</b> learners; the institution path only worked for <b>2/5</b> until a dedicated profile-picker screen was added." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/Ecobeninplast/",
    pdf: "assets/pdfs/Eco_benin_plast.pdf",
    fr: { title: "Eco Bénin Plast", domain: "CleanTech", tagline: "Plateforme connectant ménages et entreprises pour la collecte de plastique.",
      result: "Seulement <b>2/5</b> entreprises trouvaient le filtre par zone — résolu avec une carte ; le suivi des gains a obtenu <b>5/5</b>." },
    en: { title: "Eco Bénin Plast", domain: "CleanTech", tagline: "Marketplace connecting households and companies for plastic-waste collection.",
      result: "Only <b>2/5</b> companies found the zone filter — fixed with a map view; earnings tracking scored <b>5/5</b>." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/EdenOil/",
    pdf: "assets/pdfs/Eden_Oil_Case.pdf",
    fr: { title: "Eden Oil", domain: "AgriTech / B2B", tagline: "Production d'huile de palme et vente directe à l'industrie, Bénin–Nigeria.",
      result: "Mise à jour du stock trop lente (<b>2/5</b>, 3 clics) — réduite à un seul bouton \"Livré\"." },
    en: { title: "Eden Oil", domain: "AgriTech / B2B", tagline: "Palm-oil production and direct industrial sales, Benin–Nigeria.",
      result: "Manual stock updates took 3+ clicks (<b>2/5</b>) — reduced to a single \"Mark as delivered\" tap." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/FishforAll/",
    pdf: "assets/pdfs/Fish_for_All_Case.pdf",
    fr: { title: "Fish For All", domain: "AgriTech / Food", tagline: "Production, transformation et fumage solaire de poisson-chat.",
      result: "Le tableau de rentabilité n'était pas compris par les non-financiers (<b>2/5</b>) — remplacé par un objectif de vente en langage simple." },
    en: { title: "Fish For All", domain: "AgriTech / Food", tagline: "Catfish production, processing and solar smoking.",
      result: "Non-financial users couldn't read the break-even table (<b>2/5</b>) — replaced with a plain-language sales target." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/OFS/",
    pdf: "assets/pdfs/OFS_Case.pdf",
    fr: { title: "Opportunity for Success", domain: "EdTech", tagline: "Accompagnement d'étudiants africains vers des opportunités internationales.",
      result: "<b>4/5</b> utilisateurs ne savaient pas commander depuis Facebook — corrigé par un bouton de réservation épinglé." },
    en: { title: "Opportunity for Success", domain: "EdTech", tagline: "Supporting African students toward international opportunities.",
      result: "<b>4/5</b> users missed the Facebook-to-platform link — fixed with a pinned booking button." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/PowerSolar/",
    pdf: "assets/pdfs/Power_Solar_Case.pdf",
    fr: { title: "Power Solar", domain: "CleanTech / IoT", tagline: "Séchoirs solaires multifonctions et électrification rurale.",
      result: "Aucun rapport d'impact téléchargeable pour les ONG (<b>2/5</b>) — ajout d'un PDF avec indicateurs SMART." },
    en: { title: "Power Solar", domain: "CleanTech / IoT", tagline: "Multifunctional solar dryers and rural electrification.",
      result: "NGO officers found no downloadable impact file (<b>2/5</b>) — added a one-page PDF with SMART indicators." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/Agrowinwin/",
    pdf: "assets/pdfs/Agrowinwin_Case.pdf",
    fr: { title: "Agro Win Win", domain: "AgriTech / FinTech", tagline: "Plateforme d'investissement reliant producteurs ruraux et diaspora.",
      result: "Les producteurs ne voyaient pas leur part de revenu face à l'investisseur (<b>2/5</b>) — affichée directement sur la fiche producteur." },
    en: { title: "Agro Win Win", domain: "AgriTech / FinTech", tagline: "Investment platform linking rural producers with diaspora investors.",
      result: "Producers couldn't see their revenue split with investors (<b>2/5</b>) — now shown directly on the producer card." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/PotagerConnect/",
    pdf: "assets/pdfs/Potager_Connect_Case.pdf",
    fr: { title: "Potager Connect", domain: "AgriTech / Bien-être", tagline: "Installation et suivi de potagers à domicile, jardinage thérapeutique.",
      result: "Les témoignages étaient invisibles sur l'accueil (<b>2/5</b>) — ajout d'un bloc \"Ils ont réussi leur potager\"." },
    en: { title: "Potager Connect", domain: "AgriTech / Wellness", tagline: "Home garden installation and monitoring, therapeutic gardening.",
      result: "Testimonials were invisible on the homepage (<b>2/5</b>) — added a \"they grew it\" proof block." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/AquatechBenin/",
    pdf: "assets/pdfs/Aquatech_Case.pdf",
    fr: { title: "Aquatech Bénin", domain: "AgriTech / Marketplace", tagline: "Application mobile de vente de poisson frais, digitalisation de la pisciculture.",
      result: "Le panier était perdu à la connexion (<b>3/5</b>) — désormais conservé après le mur de connexion." },
    en: { title: "Aquatech Bénin", domain: "AgriTech / Marketplace", tagline: "Mobile app for fresh-fish sales, digitising fish farming.",
      result: "Carts were lost at the login wall (<b>3/5</b>) — now persisted so nothing gets abandoned." },
  },
  {
    cat: "fast",
    live: "https://zadya22.github.io/Afrobios/",
    pdf: "assets/pdfs/Afribios_Case.pdf",
    fr: { title: "Afrobios", domain: "FoodTech", tagline: "Bouillons naturels au poisson et moringa, restaurant de dégustation, Bénin.",
      result: "Les clients ne reliaient jamais le plat au bouillon en vente (<b>2/5</b>) — résolu par un QR code sur table." },
    en: { title: "Afrobios", domain: "FoodTech", tagline: "Natural fish & moringa bouillons, tasting restaurant, Benin.",
      result: "Diners never linked the meal to the bouillon for sale (<b>2/5</b>) — fixed with a table QR code." },
  },

  // Independent case studies
  {
    cat: "indep",
    live: "https://zadya22.github.io/justice/",
    pdf: "assets/pdfs/Justice_Delayed_Case.pdf",
    fr: { title: "Justice Delayed", domain: "GovTech / Civic", tagline: "Repenser la file d'attente des tribunaux — d'après une observation vécue à Dakar.",
      result: "Remplace la file de 4h du matin par un rendez-vous programmé, des rappels SMS et un accès USSD." },
    en: { title: "Justice Delayed", domain: "GovTech / Civic", tagline: "Rethinking the court queue — based on a first-hand observation in Dakar.",
      result: "Replaces the 4 AM queue with a booked appointment, SMS reminders and USSD access for feature phones." },
  },
  {
    cat: "indep",
    live: "https://zadya22.github.io/fundingap/",
    pdf: "assets/pdfs/Funding_Gap_Case.pdf",
    fr: { title: "The Funding Gap", domain: "FinTech / Développement", tagline: "Repenser le parcours de financement des entrepreneurs.",
      result: "Remplace les formations imposées par un score de préparation transparent et un matching direct avec les bailleurs." },
    en: { title: "The Funding Gap", domain: "FinTech / Development", tagline: "Redesigning the entrepreneur financing experience.",
      result: "Replaces mandatory training gates with a transparent readiness score and direct funder matching." },
  },
  {
    cat: "indep",
    live: "https://zadya22.github.io/worplacerythm/",
    pdf: "assets/pdfs/Workplace_Rhythm_Case.pdf",
    fr: { title: "Workplace Rhythm", domain: "HRTech", tagline: "Concevoir pour l'énergie humaine plutôt que pour l'horloge.",
      result: "Remplace le 8h–17h imposé par des horaires basés sur le chronotype et un tableau de recouvrement pour les managers." },
    en: { title: "Workplace Rhythm", domain: "HRTech", tagline: "Designing for human energy, not clock hours.",
      result: "Replaces a fixed 9-to-5 with chronotype-based schedules and a manager overlap dashboard." },
  },
  {
    cat: "indep",
    live: "https://zadya22.github.io/uxnation/",
    pdf: "assets/pdfs/UX_Nation_Case.pdf",
    fr: { title: "UX Nation", domain: "Civic Tech / Politique", tagline: "Et si les gouvernements concevaient pour les citoyens comme un produit ?",
      result: "Un cadre en 3 piliers — écoute continue, décisions fondées sur la preuve, tableaux de bord publics — pour l'action publique." },
    en: { title: "UX Nation", domain: "Civic Tech / Policy", tagline: "What if governments designed for citizens the way products design for users?",
      result: "A 3-pillar framework — continuous listening, evidence-based decisions, public dashboards — for civic services." },
  },

  // Flagship engagements
  {
    cat: "flagship",
    live: "https://www.carvifood.com",
    pdf: "assets/pdfs/Carvi_Food_Case.pdf",
    fr: { title: "Carvi Food", domain: "AgriFood / E-commerce", tagline: "Sa propre entreprise — fruits et viande séchés, Sénégal.",
      result: "Le passage au commerce WhatsApp a réduit la commande de 7+ étapes à <b>3 gestes</b>, avec plus de <b>80%</b> de clients fidèles." },
    en: { title: "Carvi Food", domain: "AgriFood / E-commerce", tagline: "Her own company — dried fruit and dried meat, Senegal.",
      result: "Redesigning checkout around WhatsApp cut ordering from 7+ steps to <b>3 taps</b>, with <b>80%+</b> repeat customers." },
  },
  {
    cat: "flagship",
    live: "https://zadya22.github.io/ClinicBooking/",
    pdf: "assets/pdfs/Clinic_Booking_app.pdf",
    fr: { title: "Clinic Booking App", domain: "HealthTech", tagline: "Application de prise de rendez-vous médicaux.",
      result: "Le nouveau calendrier et les confirmations WhatsApp ont réduit le temps de tâche de <b>40%</b> et fait passer la satisfaction de 3,8 à <b>4,4/5</b>." },
    en: { title: "Clinic Booking App", domain: "HealthTech", tagline: "A medical appointment-booking application.",
      result: "A redesigned calendar and WhatsApp confirmations cut task time by <b>40%</b> and lifted satisfaction from 3.8 to <b>4.4/5</b>." },
  },
  {
    cat: "flagship",
    live: "https://zadya22.github.io/GMT/",
    pdf: "assets/pdfs/GMT_Case.pdf",
    fr: { title: "Graça Machel Trust", domain: "Impact social / ONG", tagline: "Programme panafricain Women Creating Wealth — refonte des opérations.",
      result: "Une base de données unique a remplacé deux tableurs concurrents, transformant la réunion hebdomadaire en tableau de bord KPI en temps réel." },
    en: { title: "Graça Machel Trust", domain: "Social Impact / NGO", tagline: "Pan-African Women Creating Wealth program — operations redesign.",
      result: "One master database replaced two clashing spreadsheets, turning a weekly status meeting into a real-time KPI dashboard." },
  },
];

// ---------------------------------------------------------
// 3. STATE
// ---------------------------------------------------------
let currentLang = "fr";
let currentFilter = "all";

// ---------------------------------------------------------
// 4. RENDER PROJECTS
// ---------------------------------------------------------
function renderProjects() {
  const list = document.getElementById("projectList");
  list.innerHTML = "";
  PROJECTS.forEach((p) => {
    const t = p[currentLang];
    const row = document.createElement("article");
    row.className = "project-row";
    row.dataset.cat = p.cat;
    if (currentFilter !== "all" && p.cat !== currentFilter) row.hidden = true;

    row.innerHTML = `
      <div>
        <h3 class="proj-title">${t.title}</h3>
        <p class="proj-tagline">${t.tagline}</p>
      </div>
      <div class="proj-domain">${t.domain}</div>
      <div class="proj-result">${t.result}</div>
      <div class="proj-links">
        <a class="proj-link" href="${p.live}" target="_blank" rel="noopener">${I18N[currentLang]["proj.live"]} ↗</a>
        <a class="proj-link" href="${p.pdf}" target="_blank" rel="noopener">${I18N[currentLang]["proj.pdf"]}</a>
      </div>
    `;
    list.appendChild(row);
  });
}

// ---------------------------------------------------------
// 5. APPLY TRANSLATIONS TO STATIC MARKUP
// ---------------------------------------------------------
function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[currentLang][key]) el.innerHTML = I18N[currentLang][key];
  });
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === currentLang);
  });
  renderProjects();
}

// ---------------------------------------------------------
// 6. EVENTS
// ---------------------------------------------------------
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem("ad-lang", currentLang);
    applyI18n();
  });
});

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    currentFilter = chip.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderProjects();
  });
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("ad-theme", next);
});

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => {
  document.querySelector(".mainnav").classList.toggle("is-open");
});
document.querySelectorAll(".mainnav a").forEach((a) => {
  a.addEventListener("click", () => document.querySelector(".mainnav").classList.remove("is-open"));
});

// ---------------------------------------------------------
// 7. INIT — restore saved preferences
// ---------------------------------------------------------
(function init() {
  const savedTheme = localStorage.getItem("ad-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", savedTheme || (prefersDark ? "dark" : "light"));

  const savedLang = localStorage.getItem("ad-lang");
  const browserLang = (navigator.language || "fr").toLowerCase().startsWith("en") ? "en" : "fr";
  currentLang = savedLang || browserLang;

  applyI18n();
})();
