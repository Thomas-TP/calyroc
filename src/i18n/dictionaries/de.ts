import type { Dictionary } from "../dictionary";

// NOTE: traduction assistée par IA, en attente d'une relecture native avant
// mise en production (Thomas a un niveau scolaire en allemand, pas courant).
export const de: Dictionary = {
  meta: {
    title: "Calyroc — Webstudio für moderne, leistungsstarke Websites",
    description:
      "Individuelle Websites und Online-Shops, entworfen und entwickelt von Thomas Prud'homme. Moderner Stack, schnelle Lieferung, transparente Preise.",
  },
  nav: {
    services: "Leistungen",
    work: "Projekte",
    pricing: "Preise",
    contact: "Kontakt",
  },
  home: {
    eyebrow: "Webstudio mit Sitz in der Schweiz",
    heroTitle: "Schnelle, massgeschneiderte Websites, ohne Umwege geliefert.",
    heroSubtitle:
      "Calyroc entwirft und entwickelt moderne Websites und Online-Shops für Selbstständige, KMU und Startups — modernster Stack, direkter Kontakt, klare Preise.",
    ctaPrimary: "Angebot anfragen",
    ctaSecondary: "Projekte ansehen",
  },
  footer: {
    tagline: "Unabhängiges Webstudio — Schweiz & Europa.",
    legalLinks: {
      mentionsLegales: "Impressum",
      confidentialite: "Datenschutz",
      cgv: "AGB",
    },
  },
  servicesPage: {
    eyebrow: "Leistungen",
    title: "Eine Website für dein Geschäft, keine recycelte Vorlage.",
    subtitle:
      "Jede Leistung wird vorab klar definiert: was enthalten ist, welcher Stack verwendet wird, die ungefähre Frist. Keine Überraschungen auf der Rechnung.",
    ctaLabel: "Angebot anfragen",
    includesLabel: "Enthalten",
    techLabel: "Stack",
    timelineLabel: "Ungefähre Frist",
    items: [
      {
        title: "Website",
        description:
          "Präsentiere dein Geschäft, überzeuge deine Besucher und generiere mehr Anfragen.",
        includes: [
          "Massgeschneidertes Design, keine generische Vorlage",
          "Responsive für Mobile/Tablet/Desktop",
          "Integriertes Kontaktformular",
          "Grundlegende technische SEO",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1-2 Wochen",
      },
      {
        title: "Online-Shop",
        description: "Verkaufe online mit einem klaren Katalog und zuverlässigen Zahlungen.",
        includes: [
          "Produktkatalog und Lagerverwaltung",
          "Sichere Zahlung via Stripe",
          "Kundenkonto (Bestellungen, Verlauf)",
          "Automatische Transaktions-E-Mails",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4-6 Wochen",
      },
      {
        title: "Relaunch",
        description: "Modernisiere eine bestehende Website, ohne dein SEO-Ranking zu verlieren.",
        includes: [
          "Audit der aktuellen Website (Performance, SEO, Inhalt)",
          "Migration bestehender Inhalte",
          "Saubere Weiterleitungen zum Erhalt der SEO",
          "Neues Design, gleiche URL",
        ],
        tech: "Angepasst an den Bestand",
        timeline: "2-4 Wochen",
      },
      {
        title: "Landingpage",
        description: "Eine einzelne Seite, fokussiert auf ein Angebot, Produkt oder einen Launch.",
        includes: [
          "Konversionsorientierte Struktur",
          "Einzelnes Formular oder Call-to-Action",
          "Optimiert für sofortiges Laden",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3-5 Tage",
      },
      {
        title: "Wartung",
        description:
          "Hosting, Updates und kleine Änderungen, ohne dass du dich darum kümmern musst.",
        includes: [
          "Cloudflare-Hosting inbegriffen",
          "Sicherheitsupdates",
          "Kleine Inhaltsänderungen",
          "Support per E-Mail",
        ],
        tech: "—",
        timeline: "Monatliches Abo",
      },
      {
        title: "Technische SEO",
        description: "Struktur, Performance und Indexierung, um bei Google gefunden zu werden.",
        includes: [
          "Performance-Audit (Core Web Vitals)",
          "Strukturierte Daten (JSON-LD)",
          "Sitemap und robots.txt",
          "Inhaltsempfehlungen",
        ],
        tech: "Unabhängig vom Stack",
        timeline: "1 Woche",
      },
      {
        title: "Visuelle Identität",
        description: "Ein einfaches Logo und eine stimmige Palette für einen klaren Start.",
        includes: [
          "Logo (Web- und Druckformate)",
          "Farbpalette und Typografie",
          "Varianten für Favicon / Social Media",
        ],
        tech: "—",
        timeline: "1 Woche",
      },
    ],
  },
  workPage: {
    eyebrow: "Projekte",
    title: "Echte Projekte, keine Mockups.",
    subtitle:
      "Zwei Projekte, gebaut und live in Produktion, mit echten Nutzern und echtem Traffic.",
    problemLabel: "Kontext",
    stackLabel: "Stack",
    featuresLabel: "Funktionen",
    resultsLabel: "Ergebnis",
    linkLabel: "Website ansehen",
    ctaTitle: "Dein Projekt, das nächste auf dieser Seite?",
    ctaSubtitle: "Lass uns besprechen, was du bauen möchtest.",
    ctaLabel: "Projekt starten",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "E-Commerce-Plattform für mehrfarbigen 3D-Druck",
        category: "Online-Shop",
        problem:
          "Verkauf von 3D-gedruckten Objekten in bis zu 4 Farben, mit individuellen Angeboten und Online-Zahlung, aus einer Werkstatt in Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Produktkatalog mit Farbkonfigurator",
          "Individuelle Angebote aus hochgeladenen 3D-Dateien",
          "Echte Stripe-Zahlungen im Live-Betrieb",
          "Kundenkonten mit Zwei-Faktor-Authentifizierung",
          "Admin-Dashboard für die komplette Geschäftsverwaltung",
        ],
        results: [
          "Live-Plattform mit echten Bestellungen und Zahlungen",
          "Mehrsprachig FR/DE/IT/EN",
        ],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Persönliches Portfolio mit fortgeschrittenen Animationen",
        category: "Website",
        problem:
          "Werdegang und technische Projekte einprägsam präsentieren, mit einem Finish, das heraussticht.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Animierter 3D-Partikel-Hero",
          "Sanftes Scrollen und scroll-gesteuerte Animationen",
          "Integrierter Chat-Assistent",
          "Zweisprachig FR/EN",
        ],
        results: ["Hoher Performance-Score (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Preise",
    title: "Klare Preise, keine versteckten Posten.",
    subtitle:
      "Drei Basispakete für einen schnellen Start, und ein individuelles Angebot für alles andere.",
    packs: [
      {
        name: "Essential",
        price: "590 CHF",
        priceNote: "etwa 600 €",
        description: "Eine professionelle One-Page-Website für einen schnellen Start.",
        features: [
          "One-Page-Website",
          "Massgeschneidertes Design",
          "Responsive Mobile/Desktop",
          "Kontaktformular",
          "2 Sprachen (FR/EN)",
        ],
        highlighted: false,
      },
      {
        name: "Pro",
        price: "1'490 CHF",
        priceNote: "etwa 1'550 €",
        description: "Eine vollständige mehrseitige Website, bereit, Besucher zu überzeugen.",
        features: [
          "Mehrseitige Website (5-6 Seiten)",
          "Bis zu 3 Sprachen",
          "Sorgfältige Animationen",
          "Technische SEO inbegriffen",
          "Optionaler Blog",
        ],
        highlighted: true,
      },
      {
        name: "Individuell",
        price: "Ab 2'900 CHF",
        priceNote: "individuelles Angebot",
        description: "Online-Shop, Web-App oder ein spezifisches Anliegen.",
        features: [
          "Online-Shop oder Web-App",
          "Admin-Dashboard",
          "Integrierte Online-Zahlung",
          "Komplexe Integrationen",
          "Bis zu 6 Sprachen",
        ],
        highlighted: false,
      },
    ],
    maintenanceTitle: "Wartung",
    maintenanceText:
      "35 CHF/Monat: Hosting, Sicherheitsupdates und kleine Inhaltsänderungen, ohne dass du dich darum kümmern musst.",
    termsTitle: "So läuft es ab",
    terms: [
      "Anzahlung von 30-50% bei Auftragserteilung, online bezahlt",
      "Restbetrag bei Lieferung fällig, vor dem Livegang",
      "2 Überarbeitungsrunden pro Paket inbegriffen",
      "Ungefähre Frist: 1-2 Wochen (Essential) bis 6 Wochen (Individuell)",
    ],
    faqTitle: "Häufige Fragen",
    faq: [
      {
        question: "Ist die Domain im Preis inbegriffen?",
        answer:
          "Nein, die Domain (etwa 15 CHF/Jahr für eine .ch) und das Hosting sind separat, aber ich kann das für dich übernehmen, wenn du willst.",
      },
      {
        question: "Wie viele Überarbeitungen sind inbegriffen?",
        answer:
          "Zwei Überarbeitungsrunden pro Paket. Danach werden weitere Änderungen separat verrechnet.",
      },
      {
        question: "Und wenn mein Projekt in kein Paket passt?",
        answer:
          "Sprechen wir direkt darüber — das Paket Individuell existiert genau für Projekte, die über den Standardrahmen hinausgehen.",
      },
      {
        question: "Wie funktioniert die Zahlung?",
        answer:
          "Eine Anzahlung von 30-50% bei Auftrag via Stripe, danach der Restbetrag bei Lieferung, vor dem Livegang.",
      },
    ],
    ctaLabel: "Angebot anfragen",
  },
  contactPage: {
    eyebrow: "Kontakt",
    title: "Lass uns über dein Projekt sprechen.",
    subtitle:
      "Beschreibe, was du bauen möchtest — ich melde mich innert 48h mit konkretem Feedback.",
    formName: "Name",
    formEmail: "E-Mail",
    formBudget: "Ungefähres Budget",
    formBudgetOptions: [
      "Essential (ab 590 CHF)",
      "Pro (ab 1'490 CHF)",
      "Individuell (ab 2'900 CHF)",
      "Noch unklar",
    ],
    formMessage: "Dein Projekt",
    formMessagePlaceholder: "Beschreibe dein Geschäft, was du bauen möchtest, deinen Zeitrahmen...",
    formSubmit: "Senden",
    formSubmitting: "Wird gesendet...",
    formSuccess: "Nachricht gesendet — ich melde mich innert 48h.",
    formError: "Etwas ist schiefgelaufen. Schreib mir direkt an hello@calyroc.com.",
    directTitle: "Oder schreib mir direkt",
    responseTime: "Antwort innert 48h, an Werktagen.",
  },
  legalPageNotice:
    "Diese rechtliche Seite existiert nur auf Französisch, der rechtsgültigen Referenzversion.",
  chatbot: {
    label: "Frag Calyroc",
    title: "Ask Calyroc",
    intro:
      "Hallo! Ich beantworte Fragen zu den Leistungen und Preisen von Calyroc. Für ein echtes Angebot geht's zum Kontaktformular.",
    placeholder: "Stell deine Frage...",
    send: "Senden",
    errorMessage: "Etwas ist schiefgelaufen, versuch's nochmal oder schreib an hello@calyroc.com.",
    disclaimer: "KI-generierte Antworten, ohne vertragliche Verbindlichkeit.",
  },
};
