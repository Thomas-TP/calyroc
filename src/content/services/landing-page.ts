import type { ServiceDefinition } from "./types";

export const landingPage: ServiceDefinition = {
  id: "landing-page",
  relatedPackId: null,
  translations: {
    en: {
      title: "Landing Page",
      metaDescription:
        "A focused, high-converting landing page for one offer, product launch, or campaign — built for instant loading and a single clear action. Delivered in 3 to 5 days.",
      heroHeadline: "One page, one offer, one clear next step.",
      heroSubhead:
        "A landing page built for a single campaign or launch — no distractions, no competing messages, just a fast path to conversion.",
      description: [
        "A landing page isn't a small version of a website — it's a different tool for a different job. Where a business website covers everything you do, a landing page exists to make one specific offer as convincing as possible: a product launch, an event, a limited promotion, an ad campaign's destination.",
        "Every element on the page works toward the same single action — sign up, buy, register, book a call — instead of splitting attention across a full navigation menu. It also loads fast by design, since a landing page is often the first thing someone sees after clicking a paid ad, where every extra second of loading costs conversions.",
      ],
      includes: [
        "Structure built around a single conversion goal",
        "One clear call-to-action or form, not several competing ones",
        "Optimized for instant loading",
        "Ready to pair with paid traffic (ads, social, email campaigns)",
      ],
      process: [
        {
          title: "Offer clarity",
          description:
            "We define exactly what the page needs to convince someone of, and what action they should take.",
        },
        {
          title: "Design",
          description:
            "A page built around that one goal — copy, layout, and visuals all pointing the same direction.",
        },
        {
          title: "Build",
          description:
            "Fast, lightweight development, tested for loading speed on both mobile and desktop.",
        },
        {
          title: "Launch",
          description: "Live and ready to receive traffic, whether from ads, email, or social.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3 to 5 days",
      faq: [
        {
          question: "When do I need a landing page instead of a full website?",
          answer:
            "When you have one specific thing to promote — a launch, an event, a limited offer, a lead magnet — and you want visitors focused on a single action rather than exploring a whole site. If you don't have a website at all yet, a business website is usually the better starting point.",
        },
        {
          question: "Can it connect to my email or ads platform?",
          answer:
            "Yes. The form or CTA can connect to whatever you're already using to collect leads or track conversions — this gets set up as part of the build, based on what you tell us during scoping.",
        },
        {
          question: "Why does loading speed matter so much for this?",
          answer:
            "Landing pages are usually the destination of paid traffic, where you're paying per click. A slow-loading page loses a meaningful share of visitors before they even see the offer — speed here has a direct, measurable cost.",
        },
        {
          question: "Can I reuse this for future campaigns?",
          answer:
            "The page is built for one specific offer, so a genuinely different campaign usually gets its own page rather than editing this one in place — that keeps each page fast, focused, and easy to track independently.",
        },
      ],
      ctaLabel: "Request a quote",
    },
    fr: {
      title: "Landing page",
      metaDescription:
        "Une landing page ciblée et à fort taux de conversion pour une offre, un lancement, ou une campagne — pensée pour un chargement instantané et une seule action claire. Livrée en 3 à 5 jours.",
      heroHeadline: "Une page, une offre, une seule action claire.",
      heroSubhead:
        "Une landing page conçue pour une campagne ou un lancement précis — pas de distraction, pas de messages qui se concurrencent, juste un chemin rapide vers la conversion.",
      description: [
        "Une landing page n'est pas une version réduite d'un site — c'est un outil différent pour un usage différent. Là où un site vitrine couvre tout ce que vous faites, une landing page existe pour rendre une offre précise aussi convaincante que possible : un lancement de produit, un événement, une promotion limitée, la destination d'une campagne publicitaire.",
        "Chaque élément de la page pousse vers la même action unique — s'inscrire, acheter, réserver un appel — au lieu de disperser l'attention dans un menu de navigation complet. Elle charge aussi très vite par construction, car une landing page est souvent la première chose que quelqu'un voit après avoir cliqué sur une pub, où chaque seconde de chargement en trop coûte des conversions.",
      ],
      includes: [
        "Structure construite autour d'un seul objectif de conversion",
        "Un seul appel à l'action ou formulaire clair, pas plusieurs qui se concurrencent",
        "Optimisée pour un chargement instantané",
        "Prête à être associée à du trafic payant (pubs, réseaux sociaux, campagnes email)",
      ],
      process: [
        {
          title: "Clarification de l'offre",
          description:
            "On définit exactement ce que la page doit convaincre, et l'action attendue du visiteur.",
        },
        {
          title: "Design",
          description:
            "Une page construite autour de cet objectif unique — texte, mise en page, et visuels pointant tous dans la même direction.",
        },
        {
          title: "Développement",
          description:
            "Développement rapide et léger, testé pour la vitesse de chargement sur mobile comme sur ordinateur.",
        },
        {
          title: "Mise en ligne",
          description:
            "En ligne et prête à recevoir du trafic, que ce soit via des pubs, l'email, ou les réseaux sociaux.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3 à 5 jours",
      faq: [
        {
          question: "Quand ai-je besoin d'une landing page plutôt que d'un site complet ?",
          answer:
            "Quand vous avez une chose précise à promouvoir — un lancement, un événement, une offre limitée, un lead magnet — et que vous voulez que les visiteurs se concentrent sur une seule action plutôt que d'explorer tout un site. Si vous n'avez pas encore de site du tout, un site vitrine est généralement le meilleur point de départ.",
        },
        {
          question: "Peut-elle se connecter à mon email ou ma plateforme de pub ?",
          answer:
            "Oui. Le formulaire ou l'appel à l'action peut se connecter à ce que vous utilisez déjà pour collecter des contacts ou suivre les conversions — c'est configuré pendant la construction, selon ce que vous nous indiquez lors du cadrage.",
        },
        {
          question: "Pourquoi la vitesse de chargement compte-t-elle autant ici ?",
          answer:
            "Les landing pages sont souvent la destination de trafic payant, où chaque clic vous coûte de l'argent. Une page lente perd une part significative des visiteurs avant même qu'ils voient l'offre — la vitesse a ici un coût direct et mesurable.",
        },
        {
          question: "Puis-je la réutiliser pour de futures campagnes ?",
          answer:
            "La page est construite pour une offre précise, donc une campagne vraiment différente reçoit généralement sa propre page plutôt que de modifier celle-ci sur place — ça garde chaque page rapide, ciblée, et facile à suivre indépendamment.",
        },
      ],
      ctaLabel: "Demander un devis",
    },
    es: {
      title: "Landing page",
      metaDescription:
        "Una landing page enfocada y de alta conversión para una oferta, lanzamiento, o campaña — pensada para carga instantánea y una única acción clara. Entregada en 3 a 5 días.",
      heroHeadline: "Una página, una oferta, un único paso claro.",
      heroSubhead:
        "Una landing page diseñada para una campaña o lanzamiento concreto — sin distracciones, sin mensajes compitiendo entre sí, solo un camino rápido hacia la conversión.",
      description: [
        "Una landing page no es una versión reducida de un sitio web — es una herramienta distinta para un objetivo distinto. Mientras que un sitio corporativo cubre todo lo que hace, una landing page existe para hacer que una oferta concreta sea lo más convincente posible: un lanzamiento de producto, un evento, una promoción limitada, el destino de una campaña publicitaria.",
        "Cada elemento de la página empuja hacia la misma acción única — registrarse, comprar, reservar una llamada — en lugar de repartir la atención en un menú de navegación completo. También carga muy rápido por diseño, ya que una landing page suele ser lo primero que alguien ve tras hacer clic en un anuncio, donde cada segundo extra de carga cuesta conversiones.",
      ],
      includes: [
        "Estructura construida en torno a un único objetivo de conversión",
        "Una sola llamada a la acción o formulario claro, no varios compitiendo entre sí",
        "Optimizada para carga instantánea",
        "Lista para combinarse con tráfico de pago (anuncios, redes sociales, campañas de email)",
      ],
      process: [
        {
          title: "Definición de la oferta",
          description:
            "Definimos exactamente de qué debe convencer la página, y qué acción se espera del visitante.",
        },
        {
          title: "Diseño",
          description:
            "Una página construida en torno a ese único objetivo — textos, maquetación, y visuales apuntando todos en la misma dirección.",
        },
        {
          title: "Desarrollo",
          description:
            "Desarrollo rápido y ligero, probado en velocidad de carga tanto en móvil como en ordenador.",
        },
        {
          title: "Lanzamiento",
          description:
            "En línea y lista para recibir tráfico, ya sea de anuncios, email, o redes sociales.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3 a 5 días",
      faq: [
        {
          question: "¿Cuándo necesito una landing page en lugar de un sitio completo?",
          answer:
            "Cuando tiene algo concreto que promocionar — un lanzamiento, un evento, una oferta limitada, un lead magnet — y quiere que los visitantes se centren en una sola acción en lugar de explorar todo un sitio. Si aún no tiene ningún sitio web, un sitio corporativo suele ser el mejor punto de partida.",
        },
        {
          question: "¿Puede conectarse a mi email o plataforma de anuncios?",
          answer:
            "Sí. El formulario o la llamada a la acción puede conectarse a lo que ya utilice para recopilar contactos o medir conversiones — esto se configura durante la construcción, según lo que nos indique durante la definición del alcance.",
        },
        {
          question: "¿Por qué importa tanto la velocidad de carga aquí?",
          answer:
            "Las landing pages suelen ser el destino de tráfico de pago, donde cada clic tiene un coste. Una página lenta pierde una parte significativa de visitantes antes de que lleguen a ver la oferta — la velocidad tiene aquí un coste directo y medible.",
        },
        {
          question: "¿Puedo reutilizarla para futuras campañas?",
          answer:
            "La página está construida para una oferta concreta, así que una campaña realmente distinta suele recibir su propia página en lugar de modificar esta sobre la marcha — así cada página se mantiene rápida, enfocada, y fácil de medir de forma independiente.",
        },
      ],
      ctaLabel: "Solicitar presupuesto",
    },
    it: {
      title: "Landing page",
      metaDescription:
        "Una landing page mirata e ad alta conversione per un'offerta, un lancio, o una campagna — pensata per un caricamento istantaneo e un'unica azione chiara. Consegnata in 3-5 giorni.",
      heroHeadline: "Una pagina, un'offerta, un unico passo chiaro.",
      heroSubhead:
        "Una landing page costruita per una campagna o un lancio specifico — nessuna distrazione, nessun messaggio in competizione, solo un percorso rapido verso la conversione.",
      description: [
        "Una landing page non è una versione ridotta di un sito web — è uno strumento diverso per uno scopo diverso. Mentre un sito vetrina copre tutto ciò che fa, una landing page esiste per rendere un'offerta specifica il più convincente possibile: il lancio di un prodotto, un evento, una promozione limitata, la destinazione di una campagna pubblicitaria.",
        "Ogni elemento della pagina spinge verso la stessa singola azione — iscriversi, comprare, prenotare una chiamata — invece di disperdere l'attenzione in un menu di navigazione completo. Carica anche molto velocemente per costruzione, dato che una landing page è spesso la prima cosa che qualcuno vede dopo aver cliccato su un annuncio, dove ogni secondo di caricamento in più costa conversioni.",
      ],
      includes: [
        "Struttura costruita intorno a un unico obiettivo di conversione",
        "Un'unica call-to-action o modulo chiaro, non diversi in competizione",
        "Ottimizzata per un caricamento istantaneo",
        "Pronta per essere abbinata a traffico a pagamento (annunci, social, campagne email)",
      ],
      process: [
        {
          title: "Chiarezza sull'offerta",
          description:
            "Definiamo esattamente di cosa la pagina deve convincere, e quale azione ci si aspetta dal visitatore.",
        },
        {
          title: "Design",
          description:
            "Una pagina costruita intorno a quell'unico obiettivo — testi, layout, e immagini tutti nella stessa direzione.",
        },
        {
          title: "Sviluppo",
          description:
            "Sviluppo rapido e leggero, testato per la velocità di caricamento sia su mobile che su desktop.",
        },
        {
          title: "Lancio",
          description:
            "Online e pronta a ricevere traffico, che provenga da annunci, email, o social.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3-5 giorni",
      faq: [
        {
          question: "Quando mi serve una landing page invece di un sito completo?",
          answer:
            "Quando ha qualcosa di specifico da promuovere — un lancio, un evento, un'offerta limitata, un lead magnet — e vuole che i visitatori si concentrino su un'unica azione invece di esplorare un intero sito. Se non ha ancora nessun sito, un sito vetrina è di solito il punto di partenza migliore.",
        },
        {
          question: "Può collegarsi alla mia email o piattaforma pubblicitaria?",
          answer:
            "Sì. Il modulo o la call-to-action possono collegarsi a ciò che già usa per raccogliere contatti o misurare le conversioni — questo viene configurato durante la costruzione, in base a ciò che ci indica durante la definizione del progetto.",
        },
        {
          question: "Perché la velocità di caricamento conta così tanto qui?",
          answer:
            "Le landing page sono di solito la destinazione di traffico a pagamento, dove ogni clic ha un costo. Una pagina lenta perde una quota significativa di visitatori prima ancora che vedano l'offerta — qui la velocità ha un costo diretto e misurabile.",
        },
        {
          question: "Posso riutilizzarla per campagne future?",
          answer:
            "La pagina è costruita per un'offerta specifica, quindi una campagna davvero diversa riceve solitamente una pagina propria invece di modificare questa sul posto — così ogni pagina resta veloce, mirata, e facile da monitorare in modo indipendente.",
        },
      ],
      ctaLabel: "Richiedi un preventivo",
    },
    de: {
      title: "Landingpage",
      metaDescription:
        "Eine fokussierte, konversionsstarke Landingpage für ein Angebot, einen Produktlaunch, oder eine Kampagne — gebaut für sofortiges Laden und eine einzige klare Aktion. Lieferung in 3-5 Tagen.",
      heroHeadline: "Eine Seite, ein Angebot, ein klarer nächster Schritt.",
      heroSubhead:
        "Eine Landingpage, gebaut für eine einzelne Kampagne oder einen Launch — keine Ablenkungen, keine konkurrierenden Botschaften, nur ein schneller Weg zur Conversion.",
      description: [
        "Eine Landingpage ist keine kleine Version einer Website — sie ist ein anderes Werkzeug für eine andere Aufgabe. Während eine Unternehmenswebsite alles abdeckt, was Sie tun, existiert eine Landingpage, um ein bestimmtes Angebot so überzeugend wie möglich zu machen: einen Produktlaunch, ein Event, eine befristete Aktion, das Ziel einer Werbekampagne.",
        "Jedes Element der Seite arbeitet auf dieselbe einzige Aktion hin — anmelden, kaufen, einen Termin buchen — statt die Aufmerksamkeit über ein vollständiges Navigationsmenü zu verteilen. Sie lädt außerdem konstruktionsbedingt sehr schnell, da eine Landingpage oft das Erste ist, was jemand nach dem Klick auf eine bezahlte Anzeige sieht, wo jede zusätzliche Ladesekunde Conversions kostet.",
      ],
      includes: [
        "Struktur, aufgebaut um ein einziges Conversion-Ziel",
        "Ein klarer Call-to-Action oder Formular, nicht mehrere konkurrierende",
        "Optimiert für sofortiges Laden",
        "Bereit zur Kombination mit bezahltem Traffic (Anzeigen, Social Media, E-Mail-Kampagnen)",
      ],
      process: [
        {
          title: "Angebotsklärung",
          description:
            "Wir definieren genau, wovon die Seite überzeugen soll, und welche Aktion erwartet wird.",
        },
        {
          title: "Design",
          description:
            "Eine Seite, aufgebaut um dieses eine Ziel — Text, Layout, und Bilder zeigen alle in dieselbe Richtung.",
        },
        {
          title: "Entwicklung",
          description:
            "Schnelle, schlanke Entwicklung, getestet auf Ladegeschwindigkeit auf Mobile und Desktop.",
        },
        {
          title: "Launch",
          description:
            "Live und bereit, Traffic zu empfangen — ob aus Anzeigen, E-Mail, oder Social Media.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3-5 Tage",
      faq: [
        {
          question: "Wann brauche ich eine Landingpage statt einer vollständigen Website?",
          answer:
            "Wenn Sie etwas Bestimmtes zu bewerben haben — einen Launch, ein Event, ein befristetes Angebot, einen Lead-Magneten — und möchten, dass Besucher sich auf eine einzige Aktion konzentrieren, statt eine ganze Website zu erkunden. Wenn Sie noch gar keine Website haben, ist eine Unternehmenswebsite meist der bessere Ausgangspunkt.",
        },
        {
          question: "Kann sie mit meiner E-Mail- oder Anzeigenplattform verbunden werden?",
          answer:
            "Ja. Das Formular oder der Call-to-Action kann mit dem verbunden werden, was Sie bereits zur Lead-Erfassung oder Conversion-Messung nutzen — das wird während des Aufbaus eingerichtet, basierend auf dem, was Sie uns beim Scoping mitteilen.",
        },
        {
          question: "Warum ist die Ladegeschwindigkeit hier so wichtig?",
          answer:
            "Landingpages sind meist das Ziel von bezahltem Traffic, bei dem jeder Klick kostet. Eine langsam ladende Seite verliert einen spürbaren Anteil der Besucher, bevor sie das Angebot überhaupt sehen — Geschwindigkeit hat hier direkte, messbare Kosten.",
        },
        {
          question: "Kann ich sie für zukünftige Kampagnen wiederverwenden?",
          answer:
            "Die Seite ist für ein bestimmtes Angebot gebaut, daher erhält eine wirklich andere Kampagne meist eine eigene Seite, statt diese vor Ort zu ändern — so bleibt jede Seite schnell, fokussiert, und unabhängig messbar.",
        },
      ],
      ctaLabel: "Angebot anfragen",
    },
    pt: {
      title: "Landing page",
      metaDescription:
        "Uma landing page focada e de alta conversão para uma oferta, lançamento, ou campanha — construída para carregamento instantâneo e uma única ação clara. Entregue em 3 a 5 dias.",
      heroHeadline: "Uma página, uma oferta, um único passo claro.",
      heroSubhead:
        "Uma landing page construída para uma campanha ou lançamento específico — sem distrações, sem mensagens a competir entre si, apenas um caminho rápido até à conversão.",
      description: [
        "Uma landing page não é uma versão reduzida de um site — é uma ferramenta diferente para um objetivo diferente. Enquanto um site institucional cobre tudo o que faz, uma landing page existe para tornar uma oferta específica o mais convincente possível: um lançamento de produto, um evento, uma promoção limitada, o destino de uma campanha publicitária.",
        "Cada elemento da página empurra para a mesma ação única — registar, comprar, marcar uma chamada — em vez de dispersar a atenção num menu de navegação completo. Também carrega muito rápido por construção, já que uma landing page é frequentemente a primeira coisa que alguém vê depois de clicar num anúncio pago, onde cada segundo extra de carregamento custa conversões.",
      ],
      includes: [
        "Estrutura construída à volta de um único objetivo de conversão",
        "Uma chamada para ação ou formulário claro, não vários a competir entre si",
        "Otimizada para carregamento instantâneo",
        "Pronta para ser associada a tráfego pago (anúncios, redes sociais, campanhas de email)",
      ],
      process: [
        {
          title: "Clareza da oferta",
          description:
            "Definimos exatamente do que a página precisa de convencer, e que ação se espera do visitante.",
        },
        {
          title: "Design",
          description:
            "Uma página construída à volta desse único objetivo — texto, layout, e imagens todos na mesma direção.",
        },
        {
          title: "Desenvolvimento",
          description:
            "Desenvolvimento rápido e leve, testado quanto à velocidade de carregamento em telemóvel e computador.",
        },
        {
          title: "Lançamento",
          description:
            "No ar e pronta para receber tráfego, seja de anúncios, email, ou redes sociais.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3 a 5 dias",
      faq: [
        {
          question: "Quando preciso de uma landing page em vez de um site completo?",
          answer:
            "Quando tem uma coisa específica para promover — um lançamento, um evento, uma oferta limitada, um lead magnet — e quer que os visitantes se concentrem numa única ação em vez de explorar um site inteiro. Se ainda não tem nenhum site, um site institucional costuma ser o melhor ponto de partida.",
        },
        {
          question: "Pode ligar-se ao meu email ou plataforma de anúncios?",
          answer:
            "Sim. O formulário ou a chamada para ação pode ligar-se ao que já utiliza para recolher contactos ou medir conversões — isto é configurado durante a construção, com base no que nos indicar na definição do âmbito.",
        },
        {
          question: "Porque é que a velocidade de carregamento importa tanto aqui?",
          answer:
            "As landing pages costumam ser o destino de tráfego pago, em que cada clique tem um custo. Uma página lenta perde uma parte significativa dos visitantes antes mesmo de verem a oferta — a velocidade tem aqui um custo direto e mensurável.",
        },
        {
          question: "Posso reutilizá-la para futuras campanhas?",
          answer:
            "A página é construída para uma oferta específica, por isso uma campanha genuinamente diferente costuma ter a sua própria página em vez de editar esta no mesmo sítio — isso mantém cada página rápida, focada, e fácil de medir de forma independente.",
        },
      ],
      ctaLabel: "Pedir orçamento",
    },
    nl: {
      title: "Landingspagina",
      metaDescription:
        "Een gerichte, sterk converterende landingspagina voor één aanbod, productlancering, of campagne — gebouwd voor razendsnel laden en één duidelijke actie. Geleverd in 3 tot 5 dagen.",
      heroHeadline: "Eén pagina, één aanbod, één duidelijke volgende stap.",
      heroSubhead:
        "Een landingspagina gebouwd voor één specifieke campagne of lancering — geen afleiding, geen concurrerende boodschappen, gewoon een snelle weg naar conversie.",
      description: [
        "Een landingspagina is geen kleine versie van een website — het is een ander gereedschap voor een andere taak. Waar een bedrijfswebsite alles dekt wat u doet, bestaat een landingspagina om één specifiek aanbod zo overtuigend mogelijk te maken: een productlancering, een event, een tijdelijke actie, de bestemming van een advertentiecampagne.",
        "Elk element op de pagina werkt naar diezelfde ene actie toe — aanmelden, kopen, een gesprek boeken — in plaats van de aandacht te verdelen over een volledig navigatiemenu. Ze laadt ook razendsnel door ontwerp, omdat een landingspagina vaak het eerste is wat iemand ziet na het klikken op een betaalde advertentie, waar elke extra laadseconde conversies kost.",
      ],
      includes: [
        "Structuur opgebouwd rond één conversiedoel",
        "Eén duidelijke call-to-action of formulier, geen meerdere die met elkaar concurreren",
        "Geoptimaliseerd voor razendsnel laden",
        "Klaar om te combineren met betaald verkeer (advertenties, social media, e-mailcampagnes)",
      ],
      process: [
        {
          title: "Aanbod scherpstellen",
          description:
            "We bepalen precies waarvan de pagina moet overtuigen, en welke actie van de bezoeker wordt verwacht.",
        },
        {
          title: "Design",
          description:
            "Een pagina gebouwd rond dat ene doel — tekst, indeling, en beeld wijzen allemaal dezelfde richting op.",
        },
        {
          title: "Bouw",
          description:
            "Snelle, lichtgewicht ontwikkeling, getest op laadsnelheid op zowel mobiel als desktop.",
        },
        {
          title: "Lancering",
          description:
            "Live en klaar om verkeer te ontvangen, of dat nu via advertenties, e-mail, of social media komt.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3 tot 5 dagen",
      faq: [
        {
          question: "Wanneer heb ik een landingspagina nodig in plaats van een volledige website?",
          answer:
            "Als u iets specifieks te promoten heeft — een lancering, een event, een tijdelijk aanbod, een lead magnet — en u wilt dat bezoekers zich richten op één actie in plaats van een hele site te verkennen. Heeft u nog helemaal geen website, dan is een bedrijfswebsite meestal het betere startpunt.",
        },
        {
          question: "Kan ze gekoppeld worden aan mijn e-mail- of advertentieplatform?",
          answer:
            "Ja. Het formulier of de call-to-action kan gekoppeld worden aan wat u al gebruikt om leads te verzamelen of conversies te meten — dit wordt tijdens de bouw ingericht, op basis van wat u tijdens de scoping aangeeft.",
        },
        {
          question: "Waarom is laadsnelheid hier zo belangrijk?",
          answer:
            "Landingspagina's zijn meestal de bestemming van betaald verkeer, waarbij elke klik geld kost. Een traag ladende pagina verliest een aanzienlijk deel van de bezoekers nog voordat ze het aanbod zien — snelheid heeft hier een directe, meetbare kostprijs.",
        },
        {
          question: "Kan ik ze hergebruiken voor toekomstige campagnes?",
          answer:
            "De pagina is gebouwd voor één specifiek aanbod, dus een echt andere campagne krijgt meestal een eigen pagina in plaats van deze aan te passen — zo blijft elke pagina snel, gefocust, en onafhankelijk meetbaar.",
        },
      ],
      ctaLabel: "Offerte aanvragen",
    },
    pl: {
      title: "Landing page",
      metaDescription:
        "Skoncentrowany, wysoko konwertujący landing page dla jednej oferty, premiery produktu, lub kampanii — zbudowany dla błyskawicznego ładowania i jednej jasnej akcji. Realizacja w 3-5 dni.",
      heroHeadline: "Jedna strona, jedna oferta, jeden jasny następny krok.",
      heroSubhead:
        "Landing page zbudowany dla konkretnej kampanii lub premiery — bez rozpraszaczy, bez konkurujących komunikatów, tylko szybka droga do konwersji.",
      description: [
        "Landing page to nie mniejsza wersja strony internetowej — to inne narzędzie do innego zadania. Podczas gdy strona wizytówka obejmuje wszystko, co robisz, landing page istnieje po to, by jedna konkretna oferta była jak najbardziej przekonująca: premiera produktu, wydarzenie, ograniczona promocja, cel kampanii reklamowej.",
        "Każdy element strony pracuje na rzecz tej samej, jednej akcji — zapisz się, kup, zarezerwuj rozmowę — zamiast rozpraszać uwagę pełnym menu nawigacyjnym. Strona ładuje się też błyskawicznie z założenia, ponieważ landing page to często pierwsza rzecz, jaką ktoś widzi po kliknięciu w płatną reklamę, gdzie każda dodatkowa sekunda ładowania kosztuje konwersje.",
      ],
      includes: [
        "Struktura zbudowana wokół jednego celu konwersji",
        "Jedno jasne wezwanie do działania lub formularz, a nie kilka konkurujących ze sobą",
        "Zoptymalizowana pod błyskawiczne ładowanie",
        "Gotowa do połączenia z ruchem płatnym (reklamy, social media, kampanie e-mailowe)",
      ],
      process: [
        {
          title: "Doprecyzowanie oferty",
          description:
            "Określamy dokładnie, do czego strona ma przekonać, i jakiej akcji oczekujemy od odwiedzającego.",
        },
        {
          title: "Projekt",
          description:
            "Strona zbudowana wokół tego jednego celu — treść, układ, i grafika wskazujące ten sam kierunek.",
        },
        {
          title: "Budowa",
          description:
            "Szybki, lekki development, testowany pod kątem szybkości ładowania na urządzeniach mobilnych i desktopie.",
        },
        {
          title: "Start",
          description: "Online i gotowa na przyjęcie ruchu — z reklam, e-maila, czy social media.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3-5 dni",
      faq: [
        {
          question: "Kiedy potrzebuję landing page zamiast pełnej strony?",
          answer:
            "Gdy masz coś konkretnego do promowania — premierę, wydarzenie, ograniczoną ofertę, lead magnet — i chcesz, by odwiedzający skupili się na jednej akcji zamiast przeglądać całą stronę. Jeśli nie masz jeszcze żadnej strony, strona wizytówka to zwykle lepszy punkt wyjścia.",
        },
        {
          question: "Czy można ją połączyć z moją platformą e-mail lub reklamową?",
          answer:
            "Tak. Formularz lub wezwanie do działania może połączyć się z tym, czego już używasz do zbierania kontaktów lub śledzenia konwersji — konfigurowane jest to podczas budowy, na podstawie tego, co przekażesz nam podczas ustalania zakresu.",
        },
        {
          question: "Dlaczego szybkość ładowania jest tu tak ważna?",
          answer:
            "Landing page to zwykle cel ruchu płatnego, gdzie każde kliknięcie kosztuje. Wolno ładująca się strona traci znaczącą część odwiedzających, zanim jeszcze zobaczą ofertę — szybkość ma tu bezpośredni, mierzalny koszt.",
        },
        {
          question: "Czy mogę jej użyć ponownie dla przyszłych kampanii?",
          answer:
            "Strona jest zbudowana pod konkretną ofertę, więc naprawdę inna kampania zwykle dostaje własną stronę zamiast edytowania tej na miejscu — dzięki temu każda strona pozostaje szybka, skoncentrowana, i łatwa do śledzenia niezależnie.",
        },
      ],
      ctaLabel: "Poproś o wycenę",
    },
    ru: {
      title: "Лендинг",
      metaDescription:
        "Целевой лендинг с высокой конверсией под одно предложение, запуск продукта, или кампанию — с мгновенной загрузкой и единственным чётким действием. Срок — 3–5 дней.",
      heroHeadline: "Одна страница, одно предложение, один чёткий следующий шаг.",
      heroSubhead:
        "Лендинг, созданный под одну конкретную кампанию или запуск — без отвлекающих факторов, без конкурирующих сообщений, только быстрый путь к конверсии.",
      description: [
        "Лендинг — это не уменьшенная версия сайта, а другой инструмент для другой задачи. Если сайт-визитка охватывает всё, чем вы занимаетесь, то лендинг существует, чтобы сделать одно конкретное предложение максимально убедительным: запуск продукта, мероприятие, ограниченную акцию, точку назначения рекламной кампании.",
        "Каждый элемент страницы работает на одно и то же действие — зарегистрироваться, купить, забронировать звонок — вместо того чтобы рассеивать внимание по полному меню навигации. Страница также загружается очень быстро по замыслу, ведь лендинг часто является первым, что видит человек после клика по платной рекламе, где каждая лишняя секунда загрузки стоит конверсий.",
      ],
      includes: [
        "Структура, построенная вокруг единственной цели конверсии",
        "Один понятный призыв к действию или форма, а не несколько конкурирующих",
        "Оптимизирован под мгновенную загрузку",
        "Готов к сочетанию с платным трафиком (реклама, соцсети, email-кампании)",
      ],
      process: [
        {
          title: "Уточнение предложения",
          description:
            "Мы точно определяем, в чём страница должна убедить, и какое действие ожидается от посетителя.",
        },
        {
          title: "Дизайн",
          description:
            "Страница, построенная вокруг этой единственной цели — текст, вёрстка, и визуал указывают в одном направлении.",
        },
        {
          title: "Разработка",
          description:
            "Быстрая, лёгкая разработка, протестированная на скорость загрузки как на мобильных, так и на десктопе.",
        },
        {
          title: "Запуск",
          description:
            "Публикация и готовность принимать трафик — из рекламы, email, или соцсетей.",
        },
      ],
      tech: "React, Cloudflare Workers",
      timeline: "3–5 дней",
      faq: [
        {
          question: "Когда мне нужен лендинг вместо полноценного сайта?",
          answer:
            "Когда у вас есть что-то конкретное для продвижения — запуск, мероприятие, ограниченное предложение, лид-магнит — и вы хотите, чтобы посетители сосредоточились на одном действии, а не изучали весь сайт. Если у вас вообще ещё нет сайта, сайт-визитка обычно лучшая отправная точка.",
        },
        {
          question: "Можно ли подключить его к моей email- или рекламной платформе?",
          answer:
            "Да. Форма или призыв к действию могут подключаться к тому, что вы уже используете для сбора контактов или отслеживания конверсий — это настраивается в процессе разработки, исходя из того, что вы сообщите нам при определении задачи.",
        },
        {
          question: "Почему скорость загрузки здесь так важна?",
          answer:
            "Лендинги обычно являются точкой назначения платного трафика, где каждый клик стоит денег. Медленно загружающаяся страница теряет значительную долю посетителей ещё до того, как они увидят предложение — скорость здесь имеет прямую, измеримую стоимость.",
        },
        {
          question: "Могу ли я использовать его для будущих кампаний?",
          answer:
            "Страница создаётся под конкретное предложение, поэтому для действительно другой кампании обычно делается отдельная страница, а не редактируется эта же — так каждая страница остаётся быстрой, сфокусированной, и её можно отслеживать независимо.",
        },
      ],
      ctaLabel: "Запросить смету",
    },
  },
};
