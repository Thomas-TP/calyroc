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
    blog: "Blog",
    studio: "Studio",
    contact: "Contatti",
    themeToLight: "Passa alla modalità chiara",
    themeToDark: "Passa alla modalità scura",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },
  home: {
    eyebrow: "Studio web con sede in Svizzera",
    heroTitle: "Siti veloci, su misura, consegnati senza giri di parole.",
    heroSubtitle:
      "Calyroc progetta e sviluppa siti vetrina ed e-commerce moderni per liberi professionisti, PMI e startup — stack all'avanguardia, contatto diretto, prezzi chiari.",
    ctaPrimary: "Richiedi un preventivo",
    ctaSecondary: "Guarda i progetti",
    trustLine:
      "Parla con Thomas, non con un project manager — dalla prima risposta fino alla pubblicazione.",
    scrollHint: "Scorri verso il basso",
    processEyebrow: "Come funziona",
    processTitle: "Quattro passaggi, nessuna zona grigia.",
    processSteps: [
      {
        title: "Descriva il Suo progetto",
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
          "Vede il sito prendere forma e dà il Suo parere prima della consegna finale, non dopo.",
      },
      {
        title: "Consegna + 2 revisioni incluse",
        description: "Il sito è Suo, con due round di modifiche incluse nel prezzo concordato.",
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
    ctaBandTitle: "Ha un progetto in mente?",
    ctaBandSubtitle: "Lo descriva in poche righe, Le rispondo entro 48h.",
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
    title: "Un sito pensato per la Sua attività, non un template riciclato.",
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
          "Presenta la Sua attività, rassicura i visitatori e trasforma le visite in contatti.",
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
        description: "Vende online con un catalogo chiaro e pagamenti affidabili.",
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
        description: "Struttura, performance e indicizzazione per farLa trovare su Google.",
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
    subtitle:
      "Due progetti costruiti e in produzione — una piattaforma e-commerce e un portfolio personale — con utenti e traffico reali.",
    problemLabel: "Contesto",
    stackLabel: "Stack",
    featuresLabel: "Funzionalità",
    resultsLabel: "Risultato",
    linkLabel: "Visita il sito",
    ctaTitle: "Il Suo progetto, il prossimo su questa pagina?",
    ctaSubtitle: "Parliamo di cosa desidera costruire.",
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
      "Tre pacchetti base a prezzo fisso per partire subito senza sorprese in fattura, più un preventivo su misura per tutto il resto.",
    guaranteeLabel: "Il prezzo concordato è il prezzo che paga — nessun costo nascosto.",
    deliveryLabel: "Tempi",
    finderEyebrow: "Non sa quale pacchetto scegliere?",
    finderTitle: "Trovi il Suo in 3 domande.",
    finderSubtitle:
      "Risponda a qualche domanda e Le indico quale pacchetto si adatta al Suo progetto.",
    finderTypeQuestion: {
      question: "Cosa desidera costruire?",
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
    finderResultTitle: "Questo pacchetto sembra fare al caso Suo:",
    finderResultCta: "Vedi il dettaglio",
    finderRestartLabel: "Ricomincia",
    finderBackLabel: "Indietro",
    packs: [
      {
        id: "essentiel",
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
        id: "pro",
        name: "Pro",
        price: "1.490 CHF",
        priceNote: "circa 1.550 €",
        description: "Un sito multipagina completo, pronto a convertire i Suoi visitatori.",
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
        id: "sur-mesure",
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
          "No, il dominio (circa 15 CHF/anno per un .ch) e l'hosting sono separati, ma posso gestire tutto io se preferisce non occuparsene.",
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
    faqSeeMoreLabel: "Vedi tutte le domande",
    ctaLabel: "Richiedi un preventivo",
  },
  aboutPage: {
    eyebrow: "Chi sono",
    title: "Uno sviluppatore, non un'agenzia.",
    subtitle:
      "Calyroc sono io — Thomas. Nessun project manager, nessuna subappalto, nessun costo di struttura scaricato sul Suo preventivo.",
    founderRole: "Sviluppatore solo · Apprendista CFC Informatica",
    portfolioLabel: "Il mio portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "Il mio percorso",
    storyParagraphs: [
      "Mi chiamo Thomas Prud'homme. Sto svolgendo un apprendistato CFC come informatico in esercizio e infrastruttura, con base a Ginevra, in Svizzera.",
      "Calyroc è nato da un'osservazione semplice: la maggior parte dei liberi professionisti e delle piccole imprese non ha bisogno di un'agenzia da dieci persone per avere un sito veloce e ben costruito. Ha bisogno di una persona competente che risponda in fretta e rispetti le scadenze.",
      "Lavoro con un flusso assistito dall'IA — questo accelera la scrittura del codice, non la riflessione su cosa il Suo sito deve fare. Risultato: tempi più brevi e prezzi più bassi rispetto a un'agenzia tradizionale, senza compromessi sulla qualità.",
      "La prova migliore: Swiss3Design, una piattaforma e-commerce di stampa 3D con pagamenti Stripe reali in produzione. Non un mockup — un sito vero, con clienti veri.",
    ],
    whyTitle: "Perché questo conta per Lei",
    whyPoints: [
      {
        title: "Contatto diretto",
        description:
          "Mi scrive, Le rispondo. Nessun ticket, nessun cambio di team a metà progetto.",
      },
      {
        title: "Prezzi sotto controllo",
        description: "Nessun costo di struttura di agenzia scaricato sul Suo preventivo.",
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
    ctaTitle: "Parliamo del Suo progetto.",
    ctaSubtitle: "Mi descriva il Suo progetto, Le rispondo entro 48h.",
    ctaLabel: "Inizia la conversazione",
  },
  contactPage: {
    eyebrow: "Contatti",
    title: "Parliamo del Suo progetto.",
    subtitle:
      "Descriva cosa desidera costruire, Le rispondo entro 48h con un primo riscontro concreto e un preventivo chiaro.",
    formName: "Nome",
    formEmail: "Email",
    formPackLabel: "Pacchetto desiderato",
    formPackUnsureLabel: "Non lo so ancora",
    formMessage: "Il Suo progetto",
    formMessagePlaceholder:
      "Descriva la Sua attività, cosa desidera costruire, le Sue tempistiche...",
    formSubmit: "Invia",
    formSubmitting: "Invio in corso...",
    formSuccess: "Messaggio inviato — Le rispondo entro 48h.",
    formError: "Si è verificato un errore. Mi scriva direttamente a hello@calyroc.com.",
    directTitle: "Oppure mi scriva direttamente",
    responseTime: "Risposta entro 48h, nei giorni feriali.",
    paymentSuccessTitle: "Pagamento confermato",
    paymentSuccessBody:
      "Grazie, il Suo pagamento è stato registrato correttamente. Riceverà una ricevuta via email a breve.",
    paymentCancelledTitle: "Pagamento annullato",
    paymentCancelledBody:
      "Il pagamento è stato annullato, nessun importo è stato addebitato. Può riprovare in qualsiasi momento o scrivermi direttamente.",
  },
  legalPageNotice:
    "Questa pagina è stata tradotta per comodità di lettura; solo la versione francese è giuridicamente vincolante in caso di controversia o divergenza di interpretazione.",
  blogPage: {
    eyebrow: "Blog",
    title: "Note di studio.",
    subtitle:
      "Scelte tecniche, lezioni imparate e dietro le quinte dei progetti Calyroc, scritti dallo sviluppatore che li realizza.",
    readMoreLabel: "Leggi l'articolo",
    backLabel: "← Torna al blog",
    minutesLabel: "min di lettura",
  },
  faqPage: {
    eyebrow: "FAQ",
    title: "Tutte le domande.",
    subtitle:
      "Oltre ai prezzi: il processo, le tecnologie, cosa succede dopo la consegna. Non trova la Sua domanda? Mi scriva direttamente.",
    items: [
      {
        question: "Come si svolge un progetto, dal primo contatto alla messa online?",
        answer:
          "Descrive il Suo progetto tramite il modulo di contatto o Ask Calyroc. Riceve un preventivo chiaro entro 48 ore, con un prezzo fisso e una tempistica realistica. Lo sviluppo inizia dopo il versamento dell'acconto, con punti di avanzamento regolari per vedere il sito progredire. Alla consegna sono inclusi due turni di revisioni prima della messa online definitiva.",
      },
      {
        question: "Quali tecnologie utilizza?",
        answer:
          "Next.js, TypeScript e Cloudflare Workers per la maggior parte dei progetti — la stessa base che utilizzo per i miei siti in produzione. Le scelte tecniche si adattano comunque a ogni progetto (database, pagamenti, integrazioni specifiche).",
      },
      {
        question: "Il mio sito sarà ben posizionato su Google?",
        answer:
          "Il SEO tecnico di base è incluso in ogni formula: struttura semantica, tempi di caricamento ottimizzati, dati strutturati, sitemap. Un buon posizionamento dipende anche dai contenuti e dal tempo, ma le basi tecniche sono pronte fin dalla consegna.",
      },
      {
        question: "A chi appartiene il codice e il sito una volta consegnato il progetto?",
        answer:
          "Il codice sorgente e i deliverable Le vengono interamente ceduti al ricevimento del pagamento completo. Conservo solo il diritto di menzionare il progetto nel mio portfolio, salvo accordo contrario.",
      },
      {
        question: "Offre manutenzione dopo la consegna?",
        answer:
          "Sì, come opzione a 35 CHF/mese: hosting, aggiornamenti di sicurezza e piccole modifiche ai contenuti, senza doversene preoccupare.",
      },
      {
        question: "Lavora con clienti al di fuori della Svizzera?",
        answer:
          "Sì, l'intero processo avviene a distanza e il sito (così come l'assistente Ask Calyroc) è disponibile in 6 lingue — francese, inglese, spagnolo, italiano, tedesco e portoghese.",
      },
      {
        question: "Come posso contattarLa durante lo sviluppo?",
        answer:
          "Direttamente — Lei si confronta con me, non con un project manager né con un servizio clienti. È uno dei principali vantaggi di lavorare con uno studio individuale anziché con un'agenzia.",
      },
    ],
  },
  trackingPage: {
    eyebrow: "Stato del progetto",
    title: "A che punto è il Suo progetto?",
    subtitle: "L'avanzamento in tempo reale, senza doverlo chiedere.",
    currentBadge: "In corso",
    doneBadge: "Completato",
    ctaTitle: "Una domanda sull'avanzamento?",
    ctaLabel: "Scrivi a Thomas",
  },
  notFoundPage: {
    eyebrow: "404",
    title: "Questa pagina non esiste.",
    subtitle:
      "Il link potrebbe essere obsoleto, oppure l'indirizzo contiene un errore. Ecco come ripartire.",
    ctaHome: "Torna alla home",
    ctaContact: "Ci contatti",
  },
  chatbot: {
    label: "Chieda a Calyroc",
    title: "Ask Calyroc",
    aiBadge: "IA",
    intro:
      "Buongiorno! Sono l'assistente IA di Calyroc e posso rispondere alle Sue domande sui servizi e i prezzi. Per un preventivo preciso, si rivolga al [modulo di contatto](/it/contact).",
    placeholder: "Scriva la Sua domanda...",
    send: "Invia",
    errorMessage: "Si è verificato un errore, riprovi o scriva a hello@calyroc.com.",
    disclaimer: "Risposte generate dall'IA, senza valore contrattuale.",
    close: "Chiudi",
    copy: "Copia",
    copied: "Copiato",
    expand: "Ingrandisci",
    collapse: "Riduci",
    resizeHandle: "Ridimensiona la finestra",
  },
  email: {
    clientConfirmation: {
      subject: "Il Suo messaggio è stato ricevuto — Calyroc",
      preview: "Grazie per il Suo messaggio, Le rispondo entro 48h.",
      heading: "Messaggio ricevuto",
      intro:
        "Grazie per il Suo messaggio. Ecco un riepilogo — Le rispondo entro 48h con un primo riscontro concreto.",
      recapTitle: "Riepilogo",
      packLabel: "Pacchetto",
      messageLabel: "Il Suo messaggio",
      responseTimeText: "Risposta entro 48h, nei giorni feriali.",
      signature: "A presto,<br>Thomas",
    },
    paymentLink: {
      subject: "Il Suo link di pagamento Calyroc",
      preview: "Un link di pagamento sicuro La attende.",
      heading: "Il Suo link di pagamento",
      intro: "Ecco il link di pagamento sicuro per il Suo progetto Calyroc.",
      amountLabel: "Importo",
      descriptionLabel: "Descrizione",
      ctaLabel: "Paga online",
      expiryNote: "Questo link resta valido fino al suo utilizzo.",
      signature: "A presto,<br>Thomas",
    },
    paymentReceipt: {
      subject: "Ricevuta di pagamento — Calyroc",
      preview: "Il Suo pagamento è stato confermato.",
      heading: "Pagamento confermato",
      intro: "Grazie, il Suo pagamento è stato ricevuto correttamente. Ecco il riepilogo.",
      amountLabel: "Importo pagato",
      dateLabel: "Data",
      nextStepsText: "La ricontatterò a breve per proseguire con il progetto.",
      signature: "Grazie per la fiducia,<br>Thomas",
    },
  },
};
