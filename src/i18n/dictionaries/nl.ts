import type { Dictionary } from "../dictionary";

// NOTE: traduction assistée par IA, en attente d'une relecture native avant
// mise en production (aucun locuteur natif NL dans l'équipe pour l'instant).
export const nl: Dictionary = {
  meta: {
    title: "Calyroc — Webstudio voor moderne, snelle websites",
    description:
      "Op maat gemaakte vitrine- en e-commercewebsites, ontworpen en ontwikkeld door Thomas Prud'homme. Moderne technologie, snelle levering, transparante prijzen.",
  },
  nav: {
    services: "Diensten",
    work: "Werk",
    pricing: "Tarieven",
    about: "Over mij",
    blog: "Blog",
    studio: "Studio",
    contact: "Contact",
    themeToLight: "Schakel naar lichte modus",
    themeToDark: "Schakel naar donkere modus",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
  },
  home: {
    eyebrow: "Webstudio gevestigd in Zwitserland",
    heroTitle: "Snelle, op maat gemaakte websites, zonder omwegen geleverd.",
    heroSubtitle:
      "Calyroc ontwerpt en bouwt moderne vitrine- en e-commercewebsites voor freelancers, kmo's en start-ups — moderne technologie, direct contact, duidelijke prijzen.",
    ctaPrimary: "Offerte aanvragen",
    ctaSecondary: "Bekijk het werk",
    trustLine:
      "U spreekt met Thomas, niet met een projectmanager — van het eerste antwoord tot de lancering.",
    scrollHint: "Scroll naar beneden",
    processEyebrow: "Hoe het werkt",
    processTitle: "Vier stappen, geen grijze zones.",
    processSteps: [
      {
        title: "U beschrijft uw project",
        description:
          "Via het contactformulier of rechtstreeks met Ask Calyroc — twee minuten volstaan om de basis te leggen.",
      },
      {
        title: "Duidelijke offerte binnen 48u",
        description: "Een vaste prijs en een realistische planning, geen bedrag dat later oploopt.",
      },
      {
        title: "Ontwikkeling met tussentijdse updates",
        description:
          "U ziet de site vorm krijgen en geeft feedback vóór de definitieve levering, niet erna.",
      },
      {
        title: "Levering + 2 revisierondes inbegrepen",
        description: "De site is van u, met twee revisierondes inbegrepen in de offerteprijs.",
      },
    ],
    priceCompareEyebrow: "Dezelfde site, elders",
    priceCompareTitle: "Wat een vergelijkbare site kost bij een typisch bureau.",
    priceCompareAgencyLabel: "Typisch bureau",
    priceCompareItems: [
      { label: "Analyse & strategie", range: "CHF 800 – 1.500" },
      { label: "Design & UX", range: "CHF 1.500 – 3.000" },
      { label: "Ontwikkeling", range: "CHF 3.000 – 6.000" },
      { label: "SEO & lancering", range: "CHF 800 – 1.500" },
    ],
    priceCompareAgencyTotal: "CHF 6.000 – 12.000",
    priceCompareCalyrocLabel: "Bij Calyroc",
    priceCompareNote:
      "Indicatieve bandbreedte op basis van standaard Zwitserse marktprijzen voor een professionele meerpaginasite vergelijkbaar met het Pro-pakket.",
    servicesEyebrow: "Wat ik doe",
    servicesTitle: "Drie manieren om te starten, één aanpak op maat.",
    servicesCta: "Alle diensten bekijken",
    workEyebrow: "Uitgelicht werk",
    workTitle: "Echte projecten, geen mockups.",
    workCta: "Al het werk bekijken",
    ctaBandTitle: "Heeft u een project in gedachten?",
    ctaBandSubtitle: "Beschrijf het in enkele regels, ik antwoord binnen 48u.",
    ctaBandLabel: "Start het gesprek",
  },
  footer: {
    tagline: "Onafhankelijke webstudio — Zwitserland & Europa.",
    legalLinks: {
      mentionsLegales: "Wettelijke vermeldingen",
      confidentialite: "Privacy",
      cgv: "Algemene voorwaarden",
    },
  },
  servicesPage: {
    eyebrow: "Diensten",
    title: "Een website gebouwd voor uw bedrijf, geen hergebruikt sjabloon.",
    subtitle:
      "Elke dienst wordt vooraf duidelijk afgebakend: wat inbegrepen is, welke technologie gebruikt wordt, de indicatieve planning. Geen verrassingen op de factuur.",
    ctaLabel: "Offerte aanvragen",
    includesLabel: "Inbegrepen",
    techLabel: "Technologie",
    timelineLabel: "Indicatieve planning",
    backLabel: "← Terug naar diensten",
    processTitle: "Hoe het werkt",
    faqTitle: "Veelgestelde vragen",
    pricingLinkLabel: "Bekijk tarieven",
    otherServicesTitle: "Andere diensten ontdekken",
    learnMoreLabel: "Meer weten",
    items: [
      {
        title: "Vitrinewebsite",
        description:
          "Presenteer uw bedrijf, stel uw bezoekers gerust en zet bezoeken om in contactaanvragen.",
        includes: [
          "Op maat ontwerp, geen generiek thema",
          "Responsive voor mobiel/tablet/desktop",
          "Ingebouwd contactformulier",
          "Basis technische SEO",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1 tot 2 weken",
      },
      {
        title: "E-commerce",
        description: "Verkoop online met een duidelijke catalogus en betrouwbare betalingen.",
        includes: [
          "Productcatalogus en voorraadbeheer",
          "Beveiligde betaling via Stripe",
          "Klantaccount (bestellingen, geschiedenis)",
          "Automatische transactionele e-mails",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4 tot 6 weken",
      },
      {
        title: "Redesign",
        description: "Moderniseer een bestaande site zonder uw SEO-positie te verliezen.",
        includes: [
          "Audit van de huidige site (performance, SEO, inhoud)",
          "Migratie van bestaande inhoud",
          "Correcte redirects om SEO te behouden",
          "Nieuw ontwerp, dezelfde URL",
        ],
        tech: "Aangepast aan uw huidige technologie",
        timeline: "2 tot 4 weken",
      },
      {
        title: "Landingspagina",
        description: "Eén pagina, gericht op één aanbod, product of lancering.",
        includes: [
          "Structuur gericht op conversie",
          "Eén formulier of call-to-action",
          "Geoptimaliseerd voor directe laadtijd",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3 tot 5 dagen",
      },
      {
        title: "Onderhoud",
        description: "Hosting, updates en kleine wijzigingen, zonder dat u eraan hoeft te denken.",
        includes: [
          "Cloudflare-hosting inbegrepen",
          "Beveiligingsupdates",
          "Kleine wijzigingen aan de inhoud",
          "Ondersteuning per e-mail",
        ],
        tech: "—",
        timeline: "Maandelijks abonnement",
      },
      {
        title: "Technische SEO",
        description: "Structuur, performance en indexering om gevonden te worden op Google.",
        includes: [
          "Performance-audit (Core Web Vitals)",
          "Gestructureerde data (JSON-LD)",
          "Sitemap en robots.txt",
          "Aanbevelingen voor inhoud",
        ],
        tech: "Onafhankelijk van de technologie",
        timeline: "1 week",
      },
      {
        title: "Visuele identiteit",
        description: "Een eenvoudig logo en een samenhangend kleurenpalet om mee te starten.",
        includes: [
          "Logo (web + printformaten)",
          "Kleurenpalet en typografie",
          "Favicon / varianten voor sociale media",
        ],
        tech: "—",
        timeline: "1 week",
      },
    ],
  },
  workPage: {
    eyebrow: "Werk",
    title: "Echte projecten, geen mockups.",
    subtitle:
      "Twee projecten gebouwd en in productie gebracht — een live e-commerceplatform en een persoonlijke portfolio — met echte gebruikers en echt verkeer.",
    problemLabel: "Context",
    stackLabel: "Technologie",
    featuresLabel: "Functies",
    resultsLabel: "Resultaat",
    linkLabel: "Bezoek de site",
    ctaTitle: "Uw project, hierna op deze pagina?",
    ctaSubtitle: "Laten we praten over wat u wilt bouwen.",
    ctaLabel: "Start een project",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "E-commerceplatform voor multicolor 3D-printen",
        category: "E-commerce",
        problem:
          "3D-geprinte objecten in tot 4 kleuren verkopen, met offertes op maat en online betaling, vanuit een atelier in Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Productcatalogus met kleurconfigurator",
          "Offertes op maat op basis van geüploade 3D-bestanden",
          "Live Stripe-betalingen in productie",
          "Klantaccounts met tweefactorauthenticatie",
          "Adminpaneel voor volledig bedrijfsbeheer",
        ],
        results: ["Live platform met echte bestellingen en betalingen", "Meertalig FR/DE/IT/EN"],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Persoonlijke portfolio met geavanceerde animatie",
        category: "Vitrine",
        problem:
          "Een achtergrond en technische projecten memorabel presenteren, met een afwerkingsniveau dat opvalt.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Geanimeerde 3D-deeltjeshero",
          "Smooth scrolling en scroll-gestuurde animatie",
          "Ingebouwde conversationele assistent",
          "Tweetalig FR/EN",
        ],
        results: ["Hoge performancescore (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Tarieven",
    title: "Duidelijke prijzen, geen verborgen posten.",
    subtitle:
      "Drie basispakketten met vaste prijs om snel te starten zonder verrassingen op de factuur, plus een offerte op maat voor alles wat daarbuiten valt.",
    guaranteeLabel: "De prijs uit de offerte is de prijs die u betaalt — geen verborgen kosten.",
    deliveryLabel: "Planning",
    finderEyebrow: "Niet zeker welk pakket?",
    finderTitle: "Vind het uwe in 3 vragen.",
    finderSubtitle: "Beantwoord enkele vragen en wij vertellen u welk pakket bij uw project past.",
    finderTypeQuestion: {
      question: "Wat wilt u bouwen?",
      options: [
        { value: "vitrine", label: "Vitrinewebsite" },
        { value: "multipage", label: "Meerpaginasite" },
        { value: "ecommerce", label: "Online winkel" },
        { value: "webapp", label: "Applicatie op maat" },
      ],
    },
    finderPagesQuestion: {
      question: "Ongeveer hoeveel pagina's?",
      options: [
        { value: "1", label: "1 pagina" },
        { value: "few", label: "2 tot 5 pagina's" },
        { value: "many", label: "6+ pagina's" },
      ],
    },
    finderLanguagesQuestion: {
      question: "Hoeveel talen?",
      options: [
        { value: "1-2", label: "1 tot 2 talen" },
        { value: "3", label: "3 talen" },
        { value: "4-6", label: "4 tot 6 talen" },
      ],
    },
    finderResultTitle: "Dit pakket lijkt geschikt:",
    finderResultCta: "Bekijk de details",
    finderRestartLabel: "Opnieuw beginnen",
    finderBackLabel: "Terug",
    packs: [
      {
        id: "essentiel",
        name: "Essentieel",
        price: "CHF 590",
        priceNote: "ongeveer €600",
        description: "Een professionele eenpaginasite, om snel te starten.",
        features: [
          "Vitrinesite met één pagina",
          "Op maat ontwerp",
          "Responsive voor mobiel/desktop",
          "Contactformulier",
          "2 talen (FR/EN)",
        ],
        timeline: "1 tot 2 weken",
        highlighted: false,
      },
      {
        id: "pro",
        name: "Pro",
        price: "CHF 1.490",
        priceNote: "ongeveer €1.550",
        description: "Een complete meerpaginasite, klaar om uw bezoekers te converteren.",
        features: [
          "Meerpaginasite (5-6 pagina's)",
          "Tot 3 talen",
          "Verfijnde animatie",
          "Technische SEO inbegrepen",
          "Optionele blog",
        ],
        timeline: "2 tot 4 weken",
        highlighted: true,
      },
      {
        id: "sur-mesure",
        name: "Op maat",
        price: "Vanaf CHF 2.900",
        priceNote: "offerte op maat",
        description: "E-commerce, webapplicatie of een specifieke behoefte.",
        features: [
          "E-commerce of webapplicatie",
          "Adminpaneel",
          "Geïntegreerde online betaling",
          "Complexe integraties",
          "Tot 6 talen",
        ],
        timeline: "Vanaf 4 weken",
        highlighted: false,
      },
    ],
    maintenanceTitle: "Onderhoud",
    maintenanceText:
      "CHF 35/maand: hosting, beveiligingsupdates en kleine wijzigingen aan de inhoud, zonder dat u eraan hoeft te denken.",
    termsTitle: "Hoe het werkt",
    terms: [
      "30-50% voorschot bij bestelling, online betaald",
      "Saldo gefactureerd bij levering, vóór de lancering",
      "2 revisierondes inbegrepen per pakket",
      "Indicatieve planning: 1-2 weken (Essentieel) tot 6 weken (Op maat)",
    ],
    faqTitle: "Veelgestelde vragen",
    faq: [
      {
        question: "Is de domeinnaam bij de prijs inbegrepen?",
        answer:
          "Nee, de domeinnaam (ongeveer CHF 15/jaar voor een .ch) en hosting zijn apart, maar ik kan alles voor u beheren als u zich er liever niet mee bezighoudt.",
      },
      {
        question: "Hoeveel revisies zijn inbegrepen?",
        answer:
          "Twee revisierondes per pakket. Daarna worden extra wijzigingen apart gefactureerd.",
      },
      {
        question: "Wat als mijn project niet in een pakket past?",
        answer:
          "Laten we rechtstreeks praten — het pakket Op maat bestaat precies voor projecten die de standaardomvang overstijgen.",
      },
      {
        question: "Hoe werkt de betaling?",
        answer:
          "Een voorschot van 30-50% bij bestelling via Stripe, daarna het saldo bij levering, vóór de site online gaat.",
      },
    ],
    faqSeeMoreLabel: "Alle vragen bekijken",
    ctaLabel: "Offerte aanvragen",
  },
  aboutPage: {
    eyebrow: "Over mij",
    title: "Een ontwikkelaar, geen bureau.",
    subtitle:
      "Calyroc, dat ben ik — Thomas. Geen projectmanager, geen onderaanneming, geen bureaukosten die worden doorberekend in uw offerte.",
    founderRole: "Zelfstandig ontwikkelaar · CFC-leerling IT",
    portfolioLabel: "Mijn portfolio",
    linkedinLabel: "LinkedIn",
    storyTitle: "Mijn achtergrond",
    storyParagraphs: [
      "Ik ben Thomas Prud'homme, in opleiding als CFC-leerling in IT-infrastructuur en -operaties, gevestigd in Genève, Zwitserland.",
      "Calyroc ontstond uit een eenvoudige vaststelling: de meeste freelancers en kleine bedrijven hebben geen bureau van tien mensen nodig voor een snelle, degelijk gebouwde website. Ze hebben één competent persoon nodig die snel antwoordt en zijn deadlines haalt.",
      "Ik werk met een AI-ondersteunde workflow — dit versnelt het schrijven van code, niet het nadenken over wat uw site moet doen. Het resultaat: kortere doorlooptijden en lagere prijzen dan een traditioneel bureau, zonder in te boeten op kwaliteit.",
      "Het beste bewijs: Swiss3Design, een e-commerceplatform voor 3D-printen met live Stripe-betalingen in productie. Geen mockup — een echte site, met echte klanten.",
    ],
    whyTitle: "Waarom dit voor u belangrijk is",
    whyPoints: [
      {
        title: "Direct contact",
        description:
          "U mailt mij, ik antwoord. Geen ticketwachtrij, geen teamwissel tijdens het project.",
      },
      {
        title: "Beheerste prijzen",
        description: "Geen bureaukosten die worden doorberekend in uw offerte.",
      },
      {
        title: "Moderne technologie",
        description:
          "Cloudflare Workers, React, TypeScript — dezelfde technologie die ik gebruik voor mijn eigen projecten in productie.",
      },
      {
        title: "Eerlijkheid",
        description:
          "Ik ben nog in opleiding, en dat zeg ik meteen. Het is een teken van flexibiliteit en eerlijke prijzen, geen excuus.",
      },
    ],
    ctaTitle: "Heeft u een project in gedachten?",
    ctaSubtitle: "Beschrijf het mij, ik antwoord binnen 48u.",
    ctaLabel: "Start het gesprek",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Laten we over uw project praten.",
    subtitle:
      "Beschrijf wat u wilt bouwen, en ik antwoord binnen 48u met echte feedback en een duidelijke, vast geprijsde omvang.",
    formName: "Naam",
    formEmail: "E-mail",
    formPackLabel: "Pakket",
    formPackUnsureLabel: "Nog niet zeker",
    formMessage: "Uw project",
    formMessagePlaceholder: "Beschrijf uw bedrijf, wat u wilt bouwen, uw planning...",
    formSubmit: "Verzenden",
    formSubmitting: "Verzenden...",
    formSuccess: "Bericht verzonden — ik antwoord binnen 48u.",
    formError: "Er is iets misgegaan. Mail mij rechtstreeks op hello@calyroc.com.",
    directTitle: "Of mail mij rechtstreeks",
    responseTime: "Antwoord binnen 48u, op werkdagen.",
    paymentSuccessTitle: "Betaling bevestigd",
    paymentSuccessBody:
      "Dank u, uw betaling is geregistreerd. U ontvangt binnenkort een bevestiging per e-mail.",
    paymentCancelledTitle: "Betaling geannuleerd",
    paymentCancelledBody:
      "De betaling is geannuleerd en er is geen bedrag afgeschreven. U kunt het opnieuw proberen, of mij rechtstreeks mailen.",
  },
  legalPageNotice:
    "Deze pagina is voor uw gemak vertaald; alleen de Franse versie is juridisch bindend bij een geschil of interpretatieverschil.",
  blogPage: {
    eyebrow: "Blog",
    title: "Studionotities.",
    subtitle:
      "Technische keuzes, geleerde lessen en een blik achter de schermen van Calyroc-projecten, geschreven door de ontwikkelaar die ze bouwt.",
    readMoreLabel: "Lees het artikel",
    backLabel: "← Terug naar de blog",
    minutesLabel: "min. leestijd",
    byLabel: "Door",
  },
  faqPage: {
    eyebrow: "FAQ",
    title: "Alle vragen.",
    subtitle:
      "Meer dan alleen prijzen: het proces, de technologie, wat er na levering gebeurt. Staat uw vraag er niet bij? Schrijf mij rechtstreeks.",
    servicesLinkLabel: "Onze diensten ontdekken",
    items: [
      {
        question: "Hoe verloopt een project van eerste contact tot lancering?",
        answer:
          "U beschrijft uw project via het contactformulier of Ask Calyroc. U ontvangt binnen 48 uur een duidelijke offerte, met een vaste prijs en een realistische planning. De ontwikkeling start zodra het voorschot is betaald, met regelmatige updates zodat u de site vorm ziet krijgen. Bij levering zijn twee revisierondes inbegrepen voordat de site online gaat.",
      },
      {
        question: "Welke technologie gebruikt u?",
        answer:
          "Next.js, TypeScript en Cloudflare Workers voor de meeste projecten — dezelfde technologie die ik gebruik voor mijn eigen productiesites. De technische keuzes worden nog steeds aangepast aan elk project (database, betalingen, specifieke integraties).",
      },
      {
        question: "Zal mijn site goed scoren op Google?",
        answer:
          "Basis technische SEO is bij elk pakket inbegrepen: semantische structuur, geoptimaliseerde laadtijden, gestructureerde data, sitemap. Een sterke positie hangt ook af van inhoud en tijd, maar de technische basis staat vanaf dag één.",
      },
      {
        question: "Wie is eigenaar van de code en de site na levering van het project?",
        answer:
          "De broncode en alle opleveringen worden volledig aan u overgedragen zodra de betaling voltooid is. Ik behoud enkel het recht om het project in mijn portfolio te vermelden, tenzij anders overeengekomen.",
      },
      {
        question: "Biedt u onderhoud na levering aan?",
        answer:
          "Ja, als optie voor CHF 35/maand: hosting, beveiligingsupdates en kleine wijzigingen aan de inhoud, zonder dat u eraan hoeft te denken.",
      },
      {
        question: "Werkt u met klanten buiten Zwitserland?",
        answer:
          "Ja, het hele proces verloopt op afstand, en de site (net als de Ask Calyroc-assistent) is beschikbaar in 9 talen — Frans, Engels, Spaans, Italiaans, Duits, Portugees, Nederlands, Pools en Russisch.",
      },
      {
        question: "Hoe bereik ik u tijdens de ontwikkeling?",
        answer:
          "Rechtstreeks — u heeft te maken met mij, niet met een projectmanager of een helpdesk. Dat is een van de belangrijkste voordelen van werken met een zelfstandige studio in plaats van een bureau.",
      },
      {
        question: "Welke dienst past bij mij?",
        answer:
          "Dat hangt af van uw vertrekpunt. Een gloednieuw bedrijf begint meestal met een Bedrijfswebsite; een bestaande site die gemoderniseerd moet worden, vraagt om een Website-redesign; een eenmalige campagne of productlancering wordt beter bediend door een Landingspagina. Bekijk de Diensten-pagina voor het volledige overzicht, of beschrijf uw situatie via het contactformulier voor een directe aanbeveling.",
      },
      {
        question: "Kan ik meerdere diensten combineren, zoals een redesign en technische SEO?",
        answer:
          "Ja — diensten worden in de praktijk vaak gecombineerd. Een Website-redesign omvat standaard vaak technische SEO, en Huisstijl wordt vaak gecombineerd met een eerste Bedrijfswebsite- of Webshopproject. Beschrijf wat u nodig heeft in het contactformulier en de scope wordt samengevoegd tot één duidelijke offerte.",
      },
      {
        question: "Bouwen jullie webshops, niet alleen bedrijfswebsites?",
        answer:
          "Ja, de Webshop is een van de zeven aangeboden diensten, gebouwd rond Stripe voor veilig betalen en een volledige productcatalogus met voorraadbeheer — zie de speciale Webshop-pagina voor details.",
      },
      {
        question: "Ik heb al een website — kunnen jullie gewoon onderdelen ervan verbeteren?",
        answer:
          "Ja. Een volledige Website-redesign is niet altijd nodig — technische SEO, een nieuwe Huisstijl, of een extra Landingspagina voor een specifieke campagne kunnen elk als op zichzelf staand project bovenop een bestaande site worden geleverd.",
      },
      {
        question: "Kan ik met één dienst beginnen en later meer toevoegen?",
        answer:
          "Ja, dat is een gangbaar pad — veel klanten beginnen met een Bedrijfswebsite en voegen later Onderhoud, een Landingspagina voor een latere campagne, of technische SEO toe zodra de site online is en verkeer genereert.",
      },
    ],
  },
  trackingPage: {
    eyebrow: "Projectopvolging",
    title: "Waar staat uw project?",
    subtitle: "Voortgang in realtime, zonder dat u ernaar hoeft te vragen.",
    steps: [
      {
        title: "Contact",
        description: "Uw aanvraag is ontvangen.",
      },
      {
        title: "Offerte",
        description: "Prijs en planning zijn bevestigd.",
      },
      {
        title: "Ontwikkeling",
        description: "De site wordt gebouwd, met regelmatige voortgangsmomenten.",
      },
      {
        title: "Oplevering",
        description: "De site is live. Twee rondes aanpassingen zijn nog beschikbaar.",
      },
    ],
    currentBadge: "Bezig",
    doneBadge: "Afgerond",
    ctaTitle: "Een vraag over de voortgang?",
    ctaLabel: "Schrijf naar Thomas",
    summaryHeading: "Uw project",
    todayHeading: "Waar uw project vandaag staat",
    updatesHeading: "Projectupdates",
    updatesEmpty: "Projectupdates verschijnen hier naarmate het werk vordert.",
    previewCta: "Bekijk de sitepreview",
    filesHeading: "Afbeeldingen & ontwerpen",
    approveHeading: "De site is klaar voor beoordeling",
    approveDescription: "Bekijk de preview hierboven en keur dan goed om de lancering te starten.",
    approveButton: "Ik keur goed, klaar voor lancering",
    approvedNotice: "U heeft de site goedgekeurd — de lancering wordt voorbereid.",
    overviewNavLabel: "Overzicht",
    paymentsNavLabel: "Betaling",
    paymentsHeading: "Betalingen",
    paymentsSubtitle: "Uw aanbetaling en restbedrag, op één plek.",
    paymentsEmpty: "Nog geen betalingen.",
    payNowLabel: "Nu betalen",
    payErrorLabel: "Er is een fout opgetreden, probeer het opnieuw of neem contact op met Thomas.",
    paidLabel: "Betaald",
    paymentSuccessNotice: "Betaling ontvangen, bedankt!",
  },
  notFoundPage: {
    eyebrow: "404",
    title: "Deze pagina bestaat niet.",
    subtitle:
      "De link is mogelijk verouderd, of het adres bevat een typfout. Zo komt u weer op het juiste spoor.",
    ctaHome: "Terug naar de homepage",
    ctaContact: "Neem contact op",
  },
  chatbot: {
    label: "Ask Calyroc",
    title: "Ask Calyroc",
    aiBadge: "AI",
    intro:
      "Hallo! Ik ben de AI-assistent van Calyroc en kan uw vragen over diensten en tarieven beantwoorden. Gebruik voor een echte offerte het [contactformulier](/nl/contact).",
    placeholder: "Stel een vraag...",
    send: "Verzenden",
    errorMessage: "Er is iets misgegaan, probeer het opnieuw of mail hello@calyroc.com.",
    disclaimer: "AI-gegenereerde antwoorden, niet contractueel bindend.",
    close: "Sluiten",
    copy: "Kopiëren",
    copied: "Gekopieerd",
    expand: "Uitvouwen",
    collapse: "Invouwen",
    resizeHandle: "Venster vergroten/verkleinen",
  },
  email: {
    clientConfirmation: {
      subject: "Uw bericht is ontvangen — Calyroc",
      preview: "Bedankt voor uw bericht, ik antwoord binnen 48u.",
      heading: "Bericht ontvangen",
      intro:
        "Bedankt voor uw bericht. Hier is een samenvatting van wat u heeft verstuurd — ik antwoord binnen 48u met echte feedback.",
      recapTitle: "Samenvatting",
      packLabel: "Pakket",
      messageLabel: "Uw bericht",
      responseTimeText: "Antwoord binnen 48u, op werkdagen.",
      signature: "Tot binnenkort,<br>Thomas",
    },
    paymentLink: {
      subject: "Uw Calyroc-betaallink",
      preview: "Een beveiligde betaallink staat voor u klaar.",
      heading: "Uw betaallink",
      intro: "Hier is de beveiligde betaallink voor uw Calyroc-project.",
      amountLabel: "Bedrag",
      descriptionLabel: "Omschrijving",
      ctaLabel: "Online betalen",
      expiryNote: "Deze link blijft geldig tot hij gebruikt wordt.",
      suiviLinkLabel: "Mijn projectvoortgang bekijken",
      signature: "Tot binnenkort,<br>Thomas",
    },
    paymentReceipt: {
      subject: "Betalingsbevestiging — Calyroc",
      preview: "Uw betaling is bevestigd.",
      heading: "Betaling bevestigd",
      intro: "Dank u, uw betaling is ontvangen. Hier is de samenvatting.",
      amountLabel: "Betaald bedrag",
      dateLabel: "Datum",
      nextStepsText:
        "Ik neem binnenkort contact met u op over de volgende stappen voor het project.",
      signature: "Bedankt voor uw vertrouwen,<br>Thomas",
    },
    clientMessage: {
      preview: "U heeft een nieuw bericht van Calyroc.",
      heading: "Bericht van Calyroc",
      suiviLinkLabel: "Mijn projectvoortgang bekijken",
      signature: "Tot binnenkort,<br>Thomas",
    },
  },
};
