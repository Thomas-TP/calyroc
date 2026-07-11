import type { Dictionary } from "../dictionary";

// NOTE: traduction assistée par IA, en attente d'une relecture native avant
// mise en production (aucun locuteur natif IT dans l'équipe pour l'instant).
export const it: Dictionary = {
  meta: {
    title: "Calyroc — Studio web per siti moderni e ad alte prestazioni",
    description:
      "Siti vetrina ed e-commerce su misura, progettati e sviluppati da Thomas Prud'homme. Stack moderno, consegna rapida, prezzi trasparenti.",
  },
  nav: {
    services: "Servizi",
    work: "Progetti",
    pricing: "Prezzi",
    contact: "Contatti",
  },
  home: {
    eyebrow: "Studio web con sede in Svizzera",
    heroTitle: "Siti veloci, su misura, consegnati senza giri di parole.",
    heroSubtitle:
      "Calyroc progetta e sviluppa siti vetrina ed e-commerce moderni per liberi professionisti, PMI e startup — stack all'avanguardia, contatto diretto, prezzi chiari.",
    ctaPrimary: "Richiedi un preventivo",
    ctaSecondary: "Guarda i progetti",
  },
  footer: {
    tagline: "Studio web indipendente — Svizzera ed Europa.",
    legalLinks: {
      mentionsLegales: "Note legali",
      confidentialite: "Privacy",
      cgv: "Termini",
    },
  },
  servicesPage: {
    eyebrow: "Servizi",
    title: "Un sito pensato per la tua attività, non un template riciclato.",
    subtitle:
      "Ogni servizio è definito in anticipo: cosa è incluso, lo stack utilizzato, i tempi indicativi. Nessuna sorpresa in fattura.",
    ctaLabel: "Richiedi un preventivo",
    includesLabel: "Incluso",
    techLabel: "Stack",
    timelineLabel: "Tempi indicativi",
    items: [
      {
        title: "Sito vetrina",
        description:
          "Presenta la tua attività, rassicura i visitatori e trasforma le visite in contatti.",
        includes: [
          "Design su misura, nessun template generico",
          "Responsive mobile/tablet/desktop",
          "Modulo di contatto integrato",
          "SEO tecnica di base",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1-2 settimane",
      },
      {
        title: "E-commerce",
        description: "Vendi online con un catalogo chiaro e pagamenti affidabili.",
        includes: [
          "Catalogo prodotti e gestione dello stock",
          "Pagamento sicuro con Stripe",
          "Area cliente (ordini, cronologia)",
          "Email transazionali automatiche",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4-6 settimane",
      },
      {
        title: "Restyling",
        description: "Modernizza un sito esistente senza perdere il posizionamento SEO.",
        includes: [
          "Audit del sito attuale (performance, SEO, contenuti)",
          "Migrazione dei contenuti esistenti",
          "Redirect corretti per preservare la SEO",
          "Nuovo design, stessa URL",
        ],
        tech: "Adattato al sito esistente",
        timeline: "2-4 settimane",
      },
      {
        title: "Landing page",
        description: "Una pagina unica, focalizzata su un'offerta, un prodotto o un lancio.",
        includes: [
          "Struttura orientata alla conversione",
          "Modulo o call-to-action unica",
          "Ottimizzata per il caricamento istantaneo",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3-5 giorni",
      },
      {
        title: "Manutenzione",
        description: "Hosting, aggiornamenti e piccole modifiche, senza pensieri.",
        includes: [
          "Hosting Cloudflare incluso",
          "Aggiornamenti di sicurezza",
          "Piccole modifiche ai contenuti",
          "Supporto via email",
        ],
        tech: "—",
        timeline: "Abbonamento mensile",
      },
      {
        title: "SEO tecnica",
        description: "Struttura, performance e indicizzazione per farti trovare su Google.",
        includes: [
          "Audit delle performance (Core Web Vitals)",
          "Dati strutturati (JSON-LD)",
          "Sitemap e robots.txt",
          "Raccomandazioni sui contenuti",
        ],
        tech: "Indipendente dallo stack",
        timeline: "1 settimana",
      },
      {
        title: "Identità visiva",
        description: "Un logo semplice e una palette coerente per partire con un'immagine chiara.",
        includes: [
          "Logo (formati web e stampa)",
          "Palette colori e tipografie",
          "Varianti favicon / social media",
        ],
        tech: "—",
        timeline: "1 settimana",
      },
    ],
  },
  workPage: {
    eyebrow: "Progetti",
    title: "Progetti reali, non mockup.",
    subtitle: "Due progetti costruiti e in produzione, con utenti e traffico reali.",
    problemLabel: "Contesto",
    stackLabel: "Stack",
    featuresLabel: "Funzionalità",
    resultsLabel: "Risultato",
    linkLabel: "Visita il sito",
    ctaTitle: "Il tuo progetto, il prossimo su questa pagina?",
    ctaSubtitle: "Parliamo di cosa vuoi costruire.",
    ctaLabel: "Avvia un progetto",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "Piattaforma e-commerce di stampa 3D multicolore",
        category: "E-commerce",
        problem:
          "Vendere oggetti stampati in 3D fino a 4 colori, con preventivi su misura e pagamento online, da un laboratorio a Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Catalogo prodotti con configuratore colori",
          "Preventivi su misura da file 3D caricati",
          "Pagamenti Stripe reali in produzione",
          "Account cliente con autenticazione a due fattori",
          "Dashboard admin per la gestione completa dell'attività",
        ],
        results: [
          "Piattaforma in produzione con ordini e pagamenti reali",
          "Multilingua FR/DE/IT/EN",
        ],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Portfolio personale con animazioni avanzate",
        category: "Vetrina",
        problem:
          "Presentare un percorso e progetti tecnici in modo memorabile, con un livello di rifinitura capace di distinguersi.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Hero con particelle 3D animate",
          "Scroll fluido e animazioni legate allo scroll",
          "Assistente conversazionale integrato",
          "Bilingue FR/EN",
        ],
        results: ["Punteggio di performance elevato (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Prezzi",
    title: "Prezzi chiari, senza voci nascoste.",
    subtitle:
      "Tre pacchetti base per partire subito, e un preventivo su misura per tutto il resto.",
    packs: [
      {
        name: "Essenziale",
        price: "590 CHF",
        priceNote: "circa 600 €",
        description: "Un sito professionale a una pagina, per partire subito.",
        features: [
          "Sito vetrina a una pagina",
          "Design su misura",
          "Responsive mobile/desktop",
          "Modulo di contatto",
          "2 lingue (FR/EN)",
        ],
        highlighted: false,
      },
      {
        name: "Pro",
        price: "1.490 CHF",
        priceNote: "circa 1.550 €",
        description: "Un sito multipagina completo, pronto a convertire i tuoi visitatori.",
        features: [
          "Sito multipagina (5-6 pagine)",
          "Fino a 3 lingue",
          "Animazioni curate",
          "SEO tecnica inclusa",
          "Blog opzionale",
        ],
        highlighted: true,
      },
      {
        name: "Su misura",
        price: "Da 2.900 CHF",
        priceNote: "preventivo personalizzato",
        description: "E-commerce, web app o un'esigenza specifica.",
        features: [
          "E-commerce o web app",
          "Dashboard admin",
          "Pagamento online integrato",
          "Integrazioni complesse",
          "Fino a 6 lingue",
        ],
        highlighted: false,
      },
    ],
    maintenanceTitle: "Manutenzione",
    maintenanceText:
      "35 CHF/mese: hosting, aggiornamenti di sicurezza e piccole modifiche ai contenuti, senza pensieri.",
    termsTitle: "Come funziona",
    terms: [
      "Acconto del 30-50% all'ordine, pagato online",
      "Saldo fatturato alla consegna, prima della pubblicazione",
      "2 round di revisioni inclusi per pacchetto",
      "Tempi indicativi: 1-2 settimane (Essenziale) a 6 settimane (Su misura)",
    ],
    faqTitle: "Domande frequenti",
    faq: [
      {
        question: "Il prezzo include il nome a dominio?",
        answer:
          "No, il dominio (circa 15 CHF/anno per un .ch) e l'hosting sono separati, ma posso gestire tutto io se preferisci non occupartene.",
      },
      {
        question: "Quante revisioni sono incluse?",
        answer:
          "Due round di revisioni per pacchetto. Oltre, le modifiche aggiuntive sono fatturate a parte.",
      },
      {
        question: "E se il mio progetto non rientra in nessun pacchetto?",
        answer:
          "Parliamone direttamente — il pacchetto Su misura esiste proprio per i progetti che escono dallo standard.",
      },
      {
        question: "Come funziona il pagamento?",
        answer:
          "Un acconto del 30-50% all'ordine via Stripe, poi il saldo alla consegna, prima della pubblicazione.",
      },
    ],
    ctaLabel: "Richiedi un preventivo",
  },
  contactPage: {
    eyebrow: "Contatti",
    title: "Parliamo del tuo progetto.",
    subtitle:
      "Descrivi cosa vuoi costruire, ti rispondo entro 48h con un primo riscontro concreto.",
    formName: "Nome",
    formEmail: "Email",
    formBudget: "Budget indicativo",
    formBudgetOptions: [
      "Essenziale (da 590 CHF)",
      "Pro (da 1.490 CHF)",
      "Su misura (da 2.900 CHF)",
      "Non lo so ancora",
    ],
    formMessage: "Il tuo progetto",
    formMessagePlaceholder: "Descrivi la tua attività, cosa vuoi costruire, le tue tempistiche...",
    formSubmit: "Invia",
    formSubmitting: "Invio in corso...",
    formSuccess: "Messaggio inviato — ti rispondo entro 48h.",
    formError: "Si è verificato un errore. Scrivimi direttamente a hello@calyroc.com.",
    directTitle: "Oppure scrivimi direttamente",
    responseTime: "Risposta entro 48h, nei giorni feriali.",
  },
  legalPageNotice:
    "Questa pagina legale esiste solo in francese, versione di riferimento legalmente valida.",
};
