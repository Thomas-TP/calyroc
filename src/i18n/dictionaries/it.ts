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
    about: "Chi sono",
    contact: "Contatti",
    themeToLight: "Passa alla modalità chiara",
    themeToDark: "Passa alla modalità scura",
  },
  home: {
    eyebrow: "Studio web con sede in Svizzera",
    heroTitle: "Siti veloci, su misura, consegnati senza giri di parole.",
    heroSubtitle:
      "Calyroc progetta e sviluppa siti vetrina ed e-commerce moderni per liberi professionisti, PMI e startup — stack all'avanguardia, contatto diretto, prezzi chiari.",
    ctaPrimary: "Richiedi un preventivo",
    ctaSecondary: "Guarda i progetti",
    trustLine:
      "Parli con Thomas, non con un project manager — dalla prima risposta fino alla pubblicazione.",
    processEyebrow: "Come funziona",
    processTitle: "Quattro passaggi, nessuna zona grigia.",
    processSteps: [
      {
        title: "Descrivi il tuo progetto",
        description:
          "Tramite il modulo di contatto o direttamente con Ask Calyroc — bastano due minuti per gettare le basi.",
      },
      {
        title: "Preventivo chiaro entro 48h",
        description:
          "Un prezzo fisso e tempi realistici, non una forbice che si allarga strada facendo.",
      },
      {
        title: "Sviluppo con aggiornamenti regolari",
        description:
          "Vedi il sito prendere forma e dai il tuo parere prima della consegna finale, non dopo.",
      },
      {
        title: "Consegna + 2 revisioni incluse",
        description: "Il sito è tuo, con due round di modifiche incluse nel prezzo concordato.",
      },
    ],
    priceCompareEyebrow: "Lo stesso sito, altrove",
    priceCompareTitle: "Quanto costa un sito comparabile presso un'agenzia tradizionale.",
    priceCompareAgencyLabel: "Agenzia tradizionale",
    priceCompareItems: [
      { label: "Scoperta e strategia", range: "800 – 1.500 CHF" },
      { label: "Design e UX", range: "1.500 – 3.000 CHF" },
      { label: "Sviluppo", range: "3.000 – 6.000 CHF" },
      { label: "SEO e lancio", range: "800 – 1.500 CHF" },
    ],
    priceCompareAgencyTotal: "6.000 – 12.000 CHF",
    priceCompareCalyrocLabel: "Da Calyroc",
    priceCompareNote:
      "Intervallo indicativo basato sulle tariffe standard del mercato svizzero per un sito multipagina professionale comparabile al pacchetto Pro.",
    servicesEyebrow: "Cosa faccio",
    servicesTitle: "Tre modi per iniziare, un approccio su misura.",
    servicesCta: "Vedi tutti i servizi",
    workEyebrow: "Progetti",
    workTitle: "Progetti reali, non semplici mockup.",
    workCta: "Vedi tutti i progetti",
    ctaBandTitle: "Hai un progetto in mente?",
    ctaBandSubtitle: "Descrivilo in poche righe, ti rispondo entro 48h.",
    ctaBandLabel: "Inizia la conversazione",
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
    guaranteeLabel: "Il prezzo concordato è il prezzo che paghi — nessun costo nascosto.",
    deliveryLabel: "Tempi",
    finderEyebrow: "Non sai quale pacchetto scegliere?",
    finderTitle: "Trova il tuo in 3 domande.",
    finderSubtitle:
      "Rispondi a qualche domanda e ti diciamo quale pacchetto si adatta al tuo progetto.",
    finderTypeQuestion: {
      question: "Cosa vuoi costruire?",
      options: [
        { value: "vitrine", label: "Sito vetrina" },
        { value: "multipage", label: "Sito multipagina" },
        { value: "ecommerce", label: "Negozio online" },
        { value: "webapp", label: "Applicazione su misura" },
      ],
    },
    finderPagesQuestion: {
      question: "Quante pagine, circa?",
      options: [
        { value: "1", label: "1 pagina" },
        { value: "few", label: "Da 2 a 5 pagine" },
        { value: "many", label: "6 pagine o più" },
      ],
    },
    finderLanguagesQuestion: {
      question: "Quante lingue?",
      options: [
        { value: "1-2", label: "1-2 lingue" },
        { value: "3", label: "3 lingue" },
        { value: "4-6", label: "4-6 lingue" },
      ],
    },
    finderResultTitle: "Questo pacchetto sembra fare al caso tuo:",
    finderResultCta: "Vedi il dettaglio",
    finderRestartLabel: "Ricomincia",
    finderBackLabel: "Indietro",
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
        timeline: "1-2 settimane",
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
        timeline: "2-4 settimane",
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
        timeline: "Da 4 settimane",
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
  aboutPage: {
    eyebrow: "Chi sono",
    title: "Uno sviluppatore, non un'agenzia.",
    subtitle:
      "Calyroc sono io — Thomas. Nessun project manager, nessuna subappalto, nessun costo di struttura scaricato sul tuo preventivo.",
    founderRole: "Sviluppatore solo · Apprendista CFC Informatica",
    portfolioLabel: "Il mio portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "Il mio percorso",
    storyParagraphs: [
      "Mi chiamo Thomas Prud'homme. Sto svolgendo un apprendistato CFC come informatico in esercizio e infrastruttura, con base a Ginevra, in Svizzera.",
      "Calyroc è nato da un'osservazione semplice: la maggior parte dei liberi professionisti e delle piccole imprese non ha bisogno di un'agenzia da dieci persone per avere un sito veloce e ben costruito. Ha bisogno di una persona competente che risponda in fretta e rispetti le scadenze.",
      "Lavoro con un flusso assistito dall'IA — questo accelera la scrittura del codice, non la riflessione su cosa il tuo sito deve fare. Risultato: tempi più brevi e prezzi più bassi rispetto a un'agenzia tradizionale, senza compromessi sulla qualità.",
      "La prova migliore: Swiss3Design, una piattaforma e-commerce di stampa 3D con pagamenti Stripe reali in produzione. Non un mockup — un sito vero, con clienti veri.",
    ],
    whyTitle: "Perché questo conta per te",
    whyPoints: [
      {
        title: "Contatto diretto",
        description:
          "Mi scrivi, ti rispondo. Nessun ticket, nessun cambio di team a metà progetto.",
      },
      {
        title: "Prezzi sotto controllo",
        description: "Nessun costo di struttura di agenzia scaricato sul tuo preventivo.",
      },
      {
        title: "Stack moderno",
        description:
          "Cloudflare Workers, React, TypeScript — lo stesso stack che uso per i miei progetti in produzione.",
      },
      {
        title: "Onestà",
        description:
          "Sono ancora in formazione e lo dico chiaramente. È garanzia di agilità e prezzi giusti, non una scusa.",
      },
    ],
    ctaTitle: "Ne parliamo?",
    ctaSubtitle: "Descrivimi il tuo progetto, ti rispondo entro 48h.",
    ctaLabel: "Inizia la conversazione",
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
  chatbot: {
    label: "Chiedi a Calyroc",
    title: "Ask Calyroc",
    intro:
      "Ciao! Posso rispondere a domande sui servizi e i prezzi di Calyroc. Per un preventivo reale, vai al modulo di contatto.",
    placeholder: "Scrivi la tua domanda...",
    send: "Invia",
    errorMessage: "Si è verificato un errore, riprova o scrivi a hello@calyroc.com.",
    disclaimer: "Risposte generate dall'IA, senza valore contrattuale.",
  },
};
