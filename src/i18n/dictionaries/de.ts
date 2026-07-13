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
    about: "Über mich",
    contact: "Kontakt",
    themeToLight: "Zu hellem Modus wechseln",
    themeToDark: "Zu dunklem Modus wechseln",
  },
  home: {
    eyebrow: "Webstudio mit Sitz in der Schweiz",
    heroTitle: "Schnelle, massgeschneiderte Websites, ohne Umwege geliefert.",
    heroSubtitle:
      "Calyroc entwirft und entwickelt moderne Websites und Online-Shops für Selbstständige, KMU und Startups — modernster Stack, direkter Kontakt, klare Preise.",
    ctaPrimary: "Angebot anfragen",
    ctaSecondary: "Projekte ansehen",
    trustLine:
      "Sie sprechen mit Thomas, nicht mit einem Projektleiter — von der ersten Antwort bis zum Livegang.",
    processEyebrow: "So läuft es ab",
    processTitle: "Vier Schritte, keine Grauzonen.",
    processSteps: [
      {
        title: "Sie beschreiben Ihr Projekt",
        description:
          "Über das Kontaktformular oder direkt mit Ask Calyroc — zwei Minuten reichen für den Grundstein.",
      },
      {
        title: "Klares Angebot innert 48h",
        description:
          "Ein Fixpreis und ein realistischer Zeitrahmen, keine Spanne, die später explodiert.",
      },
      {
        title: "Entwicklung mit regelmässigen Updates",
        description:
          "Sie sehen die Website wachsen und geben Feedback vor der finalen Lieferung, nicht danach.",
      },
      {
        title: "Lieferung + 2 Überarbeitungen inbegriffen",
        description:
          "Die Website gehört Ihnen, mit zwei Überarbeitungsrunden im vereinbarten Preis inbegriffen.",
      },
    ],
    priceCompareEyebrow: "Dieselbe Website, anderswo",
    priceCompareTitle: "Was eine vergleichbare Website bei einer klassischen Agentur kostet.",
    priceCompareAgencyLabel: "Klassische Agentur",
    priceCompareItems: [
      { label: "Konzeption & Strategie", range: "CHF 800 – 1'500" },
      { label: "Design & UX", range: "CHF 1'500 – 3'000" },
      { label: "Entwicklung", range: "CHF 3'000 – 6'000" },
      { label: "SEO & Launch", range: "CHF 800 – 1'500" },
    ],
    priceCompareAgencyTotal: "CHF 6'000 – 12'000",
    priceCompareCalyrocLabel: "Bei Calyroc",
    priceCompareNote:
      "Indikative Spanne basierend auf marktüblichen Schweizer Tarifen für eine vergleichbare mehrseitige, professionelle Website (Paket Pro).",
    servicesEyebrow: "Was ich mache",
    servicesTitle: "Drei Wege zum Start, ein massgeschneiderter Ansatz.",
    servicesCta: "Alle Services ansehen",
    workEyebrow: "Projekte",
    workTitle: "Echte Projekte, keine Mockups.",
    workCta: "Alle Projekte ansehen",
    ctaBandTitle: "Ein Projekt im Kopf?",
    ctaBandSubtitle: "Beschreiben Sie es in wenigen Zeilen, ich melde mich innert 48h.",
    ctaBandLabel: "Gespräch starten",
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
    title: "Eine Website für Ihr Geschäft, keine recycelte Vorlage.",
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
          "Präsentieren Sie Ihr Geschäft, überzeugen Sie Ihre Besucher und generieren Sie mehr Anfragen.",
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
        description: "Verkaufen Sie online mit einem klaren Katalog und zuverlässigen Zahlungen.",
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
        description: "Modernisieren Sie eine bestehende Website, ohne Ihr SEO-Ranking zu verlieren.",
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
          "Hosting, Updates und kleine Änderungen, ohne dass Sie sich darum kümmern müssen.",
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
    ctaTitle: "Ihr Projekt, das nächste auf dieser Seite?",
    ctaSubtitle: "Lassen Sie uns besprechen, was Sie bauen möchten.",
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
    guaranteeLabel:
      "Der vereinbarte Preis ist der Preis, den Sie zahlen — keine versteckten Kosten.",
    deliveryLabel: "Frist",
    finderEyebrow: "Unsicher, welches Paket?",
    finderTitle: "Finden Sie Ihr Paket in 3 Fragen.",
    finderSubtitle:
      "Beantworten Sie ein paar Fragen, ich sage Ihnen, welches Paket zu Ihrem Projekt passt.",
    finderTypeQuestion: {
      question: "Was möchten Sie bauen?",
      options: [
        { value: "vitrine", label: "Website" },
        { value: "multipage", label: "Mehrseitige Website" },
        { value: "ecommerce", label: "Online-Shop" },
        { value: "webapp", label: "Massgeschneiderte Anwendung" },
      ],
    },
    finderPagesQuestion: {
      question: "Wie viele Seiten, ungefähr?",
      options: [
        { value: "1", label: "1 Seite" },
        { value: "few", label: "2 bis 5 Seiten" },
        { value: "many", label: "6 Seiten oder mehr" },
      ],
    },
    finderLanguagesQuestion: {
      question: "Wie viele Sprachen?",
      options: [
        { value: "1-2", label: "1 bis 2 Sprachen" },
        { value: "3", label: "3 Sprachen" },
        { value: "4-6", label: "4 bis 6 Sprachen" },
      ],
    },
    finderResultTitle: "Dieses Paket passt vermutlich zu Ihnen:",
    finderResultCta: "Details ansehen",
    finderRestartLabel: "Neu starten",
    finderBackLabel: "Zurück",
    packs: [
      {
        id: "essentiel",
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
        timeline: "1-2 Wochen",
        highlighted: false,
      },
      {
        id: "pro",
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
        timeline: "2-4 Wochen",
        highlighted: true,
      },
      {
        id: "sur-mesure",
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
        timeline: "Ab 4 Wochen",
        highlighted: false,
      },
    ],
    maintenanceTitle: "Wartung",
    maintenanceText:
      "35 CHF/Monat: Hosting, Sicherheitsupdates und kleine Inhaltsänderungen, ohne dass Sie sich darum kümmern müssen.",
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
          "Nein, die Domain (etwa 15 CHF/Jahr für eine .ch) und das Hosting sind separat, aber ich kann das für Sie übernehmen, wenn Sie möchten.",
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
  aboutPage: {
    eyebrow: "Über mich",
    title: "Ein Entwickler, keine Agentur.",
    subtitle:
      "Calyroc bin ich — Thomas. Kein Projektleiter, keine Unterauftragnehmer, keine Agentur-Gemeinkosten in Ihrem Angebot.",
    founderRole: "Solo-Entwickler · CFC-Lehrling Informatik",
    portfolioLabel: "Mein Portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "Mein Werdegang",
    storyParagraphs: [
      "Ich heisse Thomas Prud'homme und absolviere eine CFC-Lehre als Informatiker Betrieb und Infrastruktur, mit Sitz in Genf, Schweiz.",
      "Calyroc entstand aus einer einfachen Beobachtung: Die meisten Selbstständigen und kleinen Unternehmen brauchen keine Zehn-Personen-Agentur für eine schnelle, gut gebaute Website. Sie brauchen eine kompetente Person, die schnell antwortet und Fristen einhält.",
      "Ich arbeite mit einem KI-gestützten Workflow — das beschleunigt das Schreiben von Code, nicht das Nachdenken darüber, was Ihre Website leisten muss. Ergebnis: kürzere Fristen und niedrigere Preise als bei einer klassischen Agentur, ohne Abstriche bei der Qualität.",
      "Der beste Beweis: Swiss3Design, eine E-Commerce-Plattform für 3D-Druck mit echten Stripe-Zahlungen im Live-Betrieb. Kein Mockup — eine echte Website mit echten Kunden.",
    ],
    whyTitle: "Warum das für Sie etwas ändert",
    whyPoints: [
      {
        title: "Direkter Kontakt",
        description:
          "Sie schreiben mir, ich antworte. Kein Ticket-System, kein Teamwechsel mitten im Projekt.",
      },
      {
        title: "Kontrollierte Preise",
        description: "Keine Agentur-Gemeinkosten, die auf Ihr Angebot abgewälzt werden.",
      },
      {
        title: "Moderner Stack",
        description:
          "Cloudflare Workers, React, TypeScript — derselbe Stack, den ich auch für meine eigenen Projekte im Live-Betrieb nutze.",
      },
      {
        title: "Ehrlichkeit",
        description:
          "Ich bin noch in Ausbildung und sage das klar. Das ist ein Zeichen für Agilität und faire Preise, keine Ausrede.",
      },
    ],
    ctaTitle: "Sprechen wir über Ihr Projekt.",
    ctaSubtitle: "Beschreiben Sie mir Ihr Projekt, ich melde mich innert 48h.",
    ctaLabel: "Gespräch starten",
  },
  contactPage: {
    eyebrow: "Kontakt",
    title: "Sprechen wir über Ihr Projekt.",
    subtitle:
      "Beschreiben Sie, was Sie bauen möchten — ich melde mich innert 48h mit konkretem Feedback.",
    formName: "Name",
    formEmail: "E-Mail",
    formPackLabel: "Gewünschtes Paket",
    formPackUnsureLabel: "Noch unklar",
    formMessage: "Ihr Projekt",
    formMessagePlaceholder:
      "Beschreiben Sie Ihr Geschäft, was Sie bauen möchten, Ihren Zeitrahmen...",
    formSubmit: "Senden",
    formSubmitting: "Wird gesendet...",
    formSuccess: "Nachricht gesendet — ich melde mich innert 48h.",
    formError: "Etwas ist schiefgelaufen. Schreiben Sie mir direkt an hello@calyroc.com.",
    directTitle: "Oder schreiben Sie mir direkt",
    responseTime: "Antwort innert 48h, an Werktagen.",
    paymentSuccessTitle: "Zahlung bestätigt",
    paymentSuccessBody:
      "Vielen Dank, Ihre Zahlung wurde erfolgreich registriert. Sie erhalten in Kürze eine Quittung per E-Mail.",
    paymentCancelledTitle: "Zahlung abgebrochen",
    paymentCancelledBody:
      "Die Zahlung wurde abgebrochen, es wurde kein Betrag belastet. Sie können es jederzeit erneut versuchen oder mir direkt schreiben.",
  },
  legalPageNotice:
    "Diese rechtliche Seite existiert nur auf Französisch, der rechtsgültigen Referenzversion.",
  notFoundPage: {
    eyebrow: "404",
    title: "Diese Seite existiert nicht.",
    subtitle:
      "Der Link ist möglicherweise veraltet, oder die Adresse enthält einen Tippfehler. So geht es weiter.",
    ctaHome: "Zurück zur Startseite",
    ctaContact: "Kontaktieren Sie uns",
  },
  chatbot: {
    label: "Fragen Sie Calyroc",
    title: "Ask Calyroc",
    intro:
      "Guten Tag, ich beantworte Ihre Fragen zu den Leistungen und Preisen von Calyroc. Für ein genaues Angebot nutzen Sie bitte das Kontaktformular.",
    placeholder: "Stellen Sie Ihre Frage...",
    send: "Senden",
    errorMessage:
      "Etwas ist schiefgelaufen, versuchen Sie es erneut oder schreiben Sie an hello@calyroc.com.",
    disclaimer: "KI-generierte Antworten, ohne vertragliche Verbindlichkeit.",
  },
  email: {
    clientConfirmation: {
      subject: "Ihre Nachricht ist eingegangen — Calyroc",
      preview: "Vielen Dank für Ihre Nachricht, ich melde mich innert 48h.",
      heading: "Nachricht erhalten",
      intro:
        "Vielen Dank für Ihre Nachricht. Hier eine Zusammenfassung — ich melde mich innert 48h mit konkretem Feedback.",
      recapTitle: "Zusammenfassung",
      packLabel: "Paket",
      messageLabel: "Ihre Nachricht",
      responseTimeText: "Antwort innert 48h, an Werktagen.",
      signature: "Bis bald,<br>Thomas",
    },
    paymentLink: {
      subject: "Ihr Zahlungslink von Calyroc",
      preview: "Ein sicherer Zahlungslink wartet auf Sie.",
      heading: "Ihr Zahlungslink",
      intro: "Hier ist der sichere Zahlungslink für Ihr Calyroc-Projekt.",
      amountLabel: "Betrag",
      descriptionLabel: "Beschreibung",
      ctaLabel: "Online bezahlen",
      expiryNote: "Dieser Link bleibt bis zu seiner Nutzung gültig.",
      signature: "Bis bald,<br>Thomas",
    },
    paymentReceipt: {
      subject: "Zahlungsbestätigung — Calyroc",
      preview: "Ihre Zahlung wurde erfolgreich bestätigt.",
      heading: "Zahlung bestätigt",
      intro: "Vielen Dank, Ihre Zahlung ist erfolgreich eingegangen. Hier die Zusammenfassung.",
      amountLabel: "Bezahlter Betrag",
      dateLabel: "Datum",
      nextStepsText: "Ich melde mich in Kürze für die nächsten Schritte im Projekt.",
      signature: "Vielen Dank für Ihr Vertrauen,<br>Thomas",
    },
  },
};
