import type { ServiceDefinition } from "./types";

export const showcaseWebsite: ServiceDefinition = {
  id: "showcase-website",
  relatedPackId: "essentiel",
  translations: {
    en: {
      title: "Business Website",
      metaDescription:
        "A custom business website that turns visitors into leads — responsive design, a built-in contact form, and technical SEO from day one. Delivered in 1 to 2 weeks.",
      heroHeadline: "A business website that does more than exist.",
      heroSubhead:
        "Present what you do, build trust in seconds, and turn visits into real contact requests — without a recycled template.",
      description: [
        "Most small businesses don't need a complex platform — they need a site that loads fast, looks credible, and makes it obvious how to get in touch. That's what a business website (also called a showcase or brochure site) is built to do: one clear message per page, a design that matches how you actually work, and a contact path visitors don't have to hunt for.",
        "Every project starts from your business, not a theme. The result is a site that looks like it was built specifically for you — because it was.",
      ],
      includes: [
        "Custom design, no generic theme or page builder",
        "Fully responsive on mobile, tablet, and desktop",
        "Built-in contact form with spam protection",
        "Technical SEO from launch: fast loading, clean structure, indexable pages",
        "Multi-language support if you serve more than one market",
      ],
      process: [
        {
          title: "Discovery call",
          description:
            "A short conversation about your business, your audience, and what the site needs to achieve — no long questionnaire.",
        },
        {
          title: "Design",
          description:
            "A first version of the design, built around your content and brand, not a stock template.",
        },
        {
          title: "Build",
          description:
            "Development on a modern, fast stack — you can follow progress and give feedback throughout.",
        },
        {
          title: "Launch",
          description:
            "The site goes live on a domain you control, with the technical SEO basics already in place.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1 to 2 weeks",
      faq: [
        {
          question: "How is a business website different from a landing page?",
          answer:
            "A business website covers your whole offering across several pages (home, services, about, contact) and is built to be found in search over time. A landing page is a single page focused on one specific offer or campaign, usually paired with paid traffic. Most businesses starting out need a business website first.",
        },
        {
          question: "Do I need to provide the content myself?",
          answer:
            "You bring the raw material — what you do, who you serve, any existing text or photos — and the structure and copy get shaped together during the design phase. You don't need polished, ready-to-publish text before starting.",
        },
        {
          question: "Can the site grow later?",
          answer:
            "Yes. A business website is commonly the starting point before adding a blog, an online store, or a client portal later — the technical foundation is built to support that instead of needing a rebuild.",
        },
        {
          question: 'What does "technical SEO from day one" actually include?',
          answer:
            "Fast page loads, a clean URL structure, proper meta tags and structured data, an XML sitemap, and mobile-friendliness — the fundamentals search engines check before ranking a site, handled at launch instead of retrofitted later.",
        },
      ],
      ctaLabel: "Request a quote",
    },
    fr: {
      title: "Site vitrine",
      metaDescription:
        "Un site vitrine sur mesure qui transforme vos visiteurs en contacts — design responsive, formulaire intégré, SEO technique dès le lancement. Livré en 1 à 2 semaines.",
      heroHeadline: "Un site vitrine qui fait plus qu'exister.",
      heroSubhead:
        "Présentez votre activité, inspirez confiance en quelques secondes, et transformez les visites en vraies demandes de contact — sans template recyclé.",
      description: [
        "La plupart des indépendants et petites entreprises n'ont pas besoin d'une plateforme complexe — juste d'un site qui charge vite, inspire confiance, et rend évident comment vous contacter. C'est exactement le rôle d'un site vitrine : un message clair par page, un design qui correspond à votre activité, et un chemin de contact que le visiteur n'a pas à chercher.",
        "Chaque projet part de votre activité, pas d'un thème. Le résultat est un site qui donne l'impression d'avoir été conçu spécifiquement pour vous — parce que c'est le cas.",
      ],
      includes: [
        "Design sur mesure, aucun thème générique",
        "Responsive complet : mobile, tablette, ordinateur",
        "Formulaire de contact intégré, protégé contre le spam",
        "SEO technique dès le lancement : chargement rapide, structure propre, pages indexables",
        "Support multilingue si vous servez plusieurs marchés",
      ],
      process: [
        {
          title: "Appel de découverte",
          description:
            "Une courte conversation sur votre activité, votre audience, et ce que le site doit accomplir — pas de long questionnaire.",
        },
        {
          title: "Design",
          description:
            "Une première version du design, construite autour de votre contenu et de votre image, pas d'un template générique.",
        },
        {
          title: "Développement",
          description:
            "Développement sur une stack moderne et rapide — vous pouvez suivre l'avancement et donner votre avis tout au long du projet.",
        },
        {
          title: "Mise en ligne",
          description:
            "Le site part en ligne sur un domaine que vous contrôlez, avec les bases du SEO technique déjà en place.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1 à 2 semaines",
      faq: [
        {
          question: "Quelle différence entre un site vitrine et une landing page ?",
          answer:
            "Un site vitrine couvre toute votre offre sur plusieurs pages (accueil, services, à propos, contact) et est construit pour être trouvé dans les moteurs de recherche sur la durée. Une landing page est une page unique centrée sur une offre ou une campagne précise, généralement associée à du trafic payant. La plupart des entreprises qui démarrent ont d'abord besoin d'un site vitrine.",
        },
        {
          question: "Dois-je fournir le contenu moi-même ?",
          answer:
            "Vous apportez la matière première — ce que vous faites, à qui vous vous adressez, d'éventuels textes ou photos existants — et la structure ainsi que les textes se construisent ensemble pendant la phase de design. Pas besoin d'un texte final prêt à publier avant de commencer.",
        },
        {
          question: "Le site peut-il évoluer plus tard ?",
          answer:
            "Oui. Un site vitrine est généralement le point de départ avant d'ajouter un blog, une boutique en ligne, ou un espace client plus tard — la base technique est construite pour le permettre plutôt que de nécessiter une refonte complète.",
        },
        {
          question: "Que couvre concrètement le « SEO technique dès le lancement » ?",
          answer:
            "Un chargement rapide des pages, une structure d'URL propre, des balises meta et des données structurées correctes, un sitemap XML, et une bonne compatibilité mobile — les fondamentaux que les moteurs de recherche vérifient avant de classer un site, pris en charge dès la mise en ligne plutôt qu'ajoutés après coup.",
        },
      ],
      ctaLabel: "Demander un devis",
    },
    es: {
      title: "Sitio web corporativo",
      metaDescription:
        "Un sitio web corporativo a medida que convierte a sus visitantes en contactos — diseño responsive, formulario integrado, SEO técnico desde el lanzamiento. Entregado en 1 a 2 semanas.",
      heroHeadline: "Un sitio web corporativo que hace más que existir.",
      heroSubhead:
        "Presente su actividad, genere confianza en segundos, y convierta las visitas en solicitudes de contacto reales — sin plantilla reciclada.",
      description: [
        "La mayoría de los autónomos y pequeñas empresas no necesitan una plataforma compleja — necesitan un sitio que cargue rápido, transmita credibilidad, y deje claro cómo contactarles. Para eso está pensado un sitio web corporativo: un mensaje claro por página, un diseño acorde a su actividad, y un camino de contacto que el visitante no tenga que buscar.",
        "Cada proyecto parte de su negocio, no de una plantilla. El resultado es un sitio que parece diseñado específicamente para usted — porque lo está.",
      ],
      includes: [
        "Diseño a medida, sin plantilla genérica",
        "Totalmente responsive: móvil, tablet, ordenador",
        "Formulario de contacto integrado, protegido contra spam",
        "SEO técnico desde el lanzamiento: carga rápida, estructura limpia, páginas indexables",
        "Soporte multilingüe si atiende a más de un mercado",
      ],
      process: [
        {
          title: "Llamada de descubrimiento",
          description:
            "Una conversación breve sobre su negocio, su público y lo que el sitio debe lograr — sin cuestionarios largos.",
        },
        {
          title: "Diseño",
          description:
            "Una primera versión del diseño, construida en torno a su contenido y su marca, no una plantilla genérica.",
        },
        {
          title: "Desarrollo",
          description:
            "Desarrollo sobre una stack moderna y rápida — puede seguir el avance y dar su opinión durante todo el proyecto.",
        },
        {
          title: "Lanzamiento",
          description:
            "El sitio se publica en un dominio que usted controla, con las bases del SEO técnico ya implementadas.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1 a 2 semanas",
      faq: [
        {
          question: "¿En qué se diferencia un sitio corporativo de una landing page?",
          answer:
            "Un sitio corporativo cubre toda su oferta en varias páginas (inicio, servicios, sobre nosotros, contacto) y está construido para ser encontrado en buscadores con el tiempo. Una landing page es una única página centrada en una oferta o campaña concreta, normalmente asociada a tráfico de pago. La mayoría de negocios que empiezan necesitan primero un sitio corporativo.",
        },
        {
          question: "¿Debo aportar yo mismo el contenido?",
          answer:
            "Usted aporta la materia prima — qué hace, a quién se dirige, textos o fotos existentes — y la estructura y los textos se elaboran juntos durante la fase de diseño. No necesita un texto final listo para publicar antes de empezar.",
        },
        {
          question: "¿Puede crecer el sitio más adelante?",
          answer:
            "Sí. Un sitio corporativo suele ser el punto de partida antes de añadir un blog, una tienda online, o un área de cliente más adelante — la base técnica está pensada para permitirlo en lugar de requerir una reconstrucción completa.",
        },
        {
          question: '¿Qué incluye realmente el "SEO técnico desde el lanzamiento"?',
          answer:
            "Carga rápida de páginas, una estructura de URL limpia, etiquetas meta y datos estructurados correctos, un sitemap XML, y compatibilidad móvil — los fundamentos que los buscadores comprueban antes de posicionar un sitio, resueltos desde el lanzamiento en lugar de añadidos después.",
        },
      ],
      ctaLabel: "Solicitar presupuesto",
    },
    it: {
      title: "Sito vetrina",
      metaDescription:
        "Un sito vetrina su misura che trasforma i visitatori in contatti — design responsive, modulo di contatto integrato, SEO tecnica dal lancio. Consegnato in 1-2 settimane.",
      heroHeadline: "Un sito vetrina che fa più che esistere.",
      heroSubhead:
        "Presenti la sua attività, generi fiducia in pochi secondi, e trasformi le visite in vere richieste di contatto — senza template riciclato.",
      description: [
        "La maggior parte delle piccole attività non ha bisogno di una piattaforma complessa — serve un sito che carichi velocemente, trasmetta credibilità, e renda ovvio come essere contattati. È esattamente questo lo scopo di un sito vetrina: un messaggio chiaro per pagina, un design coerente con la sua attività, e un percorso di contatto che il visitatore non deve cercare.",
        "Ogni progetto parte dalla sua attività, non da un tema. Il risultato è un sito che sembra costruito appositamente per lei — perché lo è davvero.",
      ],
      includes: [
        "Design su misura, nessun tema generico",
        "Completamente responsive: mobile, tablet, desktop",
        "Modulo di contatto integrato, protetto dallo spam",
        "SEO tecnica dal lancio: caricamento rapido, struttura pulita, pagine indicizzabili",
        "Supporto multilingua se serve più di un mercato",
      ],
      process: [
        {
          title: "Chiamata conoscitiva",
          description:
            "Una breve conversazione sulla sua attività, il suo pubblico, e cosa il sito deve ottenere — nessun questionario lungo.",
        },
        {
          title: "Design",
          description:
            "Una prima versione del design, costruita intorno ai suoi contenuti e alla sua immagine, non un template standard.",
        },
        {
          title: "Sviluppo",
          description:
            "Sviluppo su uno stack moderno e veloce — può seguire l'avanzamento e dare il suo feedback lungo tutto il progetto.",
        },
        {
          title: "Lancio",
          description:
            "Il sito va online su un dominio che lei controlla, con le basi della SEO tecnica già in atto.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1-2 settimane",
      faq: [
        {
          question: "In cosa si differenzia un sito vetrina da una landing page?",
          answer:
            "Un sito vetrina copre tutta la sua offerta su più pagine (home, servizi, chi siamo, contatti) ed è costruito per essere trovato nei motori di ricerca nel tempo. Una landing page è una singola pagina focalizzata su un'offerta o campagna specifica, di solito abbinata a traffico a pagamento. La maggior parte delle attività che partono ha bisogno prima di un sito vetrina.",
        },
        {
          question: "Devo fornire io stesso i contenuti?",
          answer:
            "Lei porta la materia prima — cosa fa, a chi si rivolge, eventuali testi o foto esistenti — e struttura e testi vengono definiti insieme durante la fase di design. Non serve un testo finale pronto per la pubblicazione prima di iniziare.",
        },
        {
          question: "Il sito può crescere in futuro?",
          answer:
            "Sì. Un sito vetrina è tipicamente il punto di partenza prima di aggiungere un blog, un negozio online, o un'area clienti in futuro — la base tecnica è costruita per permetterlo invece di richiedere una ricostruzione completa.",
        },
        {
          question: 'Cosa include davvero la "SEO tecnica dal lancio"?',
          answer:
            "Caricamento rapido delle pagine, una struttura URL pulita, meta tag e dati strutturati corretti, una sitemap XML, e compatibilità mobile — le basi che i motori di ricerca verificano prima di posizionare un sito, gestite dal lancio invece che aggiunte in seguito.",
        },
      ],
      ctaLabel: "Richiedi un preventivo",
    },
    de: {
      title: "Unternehmenswebsite",
      metaDescription:
        "Eine massgeschneiderte Unternehmenswebsite, die Besucher in Kontakte verwandelt — responsives Design, integriertes Kontaktformular, technisches SEO ab dem ersten Tag. Lieferung in 1-2 Wochen.",
      heroHeadline: "Eine Unternehmenswebsite, die mehr tut als nur zu existieren.",
      heroSubhead:
        "Präsentieren Sie Ihr Geschäft, schaffen Sie in Sekunden Vertrauen, und verwandeln Sie Besuche in echte Kontaktanfragen — ohne recycelte Vorlage.",
      description: [
        "Die meisten kleinen Unternehmen brauchen keine komplexe Plattform — sondern eine Website, die schnell lädt, glaubwürdig wirkt, und klar macht, wie man Sie erreicht. Genau dafür ist eine Unternehmenswebsite gedacht: eine klare Botschaft pro Seite, ein Design, das zu Ihrer Arbeitsweise passt, und ein Kontaktweg, den Besucher nicht suchen müssen.",
        "Jedes Projekt startet bei Ihrem Geschäft, nicht bei einer Vorlage. Das Ergebnis ist eine Website, die aussieht, als wäre sie speziell für Sie gebaut worden — weil sie es wurde.",
      ],
      includes: [
        "Massgeschneidertes Design, keine generische Vorlage",
        "Vollständig responsiv: Mobile, Tablet, Desktop",
        "Integriertes Kontaktformular mit Spam-Schutz",
        "Technisches SEO ab dem Launch: schnelle Ladezeiten, saubere Struktur, indexierbare Seiten",
        "Mehrsprachigkeit, falls Sie mehr als einen Markt bedienen",
      ],
      process: [
        {
          title: "Kennenlerngespräch",
          description:
            "Ein kurzes Gespräch über Ihr Geschäft, Ihre Zielgruppe, und was die Website erreichen soll — kein langer Fragebogen.",
        },
        {
          title: "Design",
          description:
            "Eine erste Design-Version, aufgebaut um Ihre Inhalte und Ihre Marke, keine Standardvorlage.",
        },
        {
          title: "Entwicklung",
          description:
            "Entwicklung auf einem modernen, schnellen Stack — Sie können den Fortschritt verfolgen und während des gesamten Projekts Feedback geben.",
        },
        {
          title: "Launch",
          description:
            "Die Website geht auf einer Domain live, die Sie kontrollieren, mit den technischen SEO-Grundlagen bereits eingerichtet.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1-2 Wochen",
      faq: [
        {
          question: "Was unterscheidet eine Unternehmenswebsite von einer Landingpage?",
          answer:
            "Eine Unternehmenswebsite deckt Ihr gesamtes Angebot über mehrere Seiten ab (Startseite, Leistungen, Über uns, Kontakt) und ist darauf ausgelegt, über die Zeit in der Suche gefunden zu werden. Eine Landingpage ist eine einzelne Seite, fokussiert auf ein bestimmtes Angebot oder eine Kampagne, meist kombiniert mit bezahltem Traffic. Die meisten Unternehmen brauchen zuerst eine Unternehmenswebsite.",
        },
        {
          question: "Muss ich die Inhalte selbst liefern?",
          answer:
            "Sie bringen das Rohmaterial mit — was Sie tun, wen Sie ansprechen, vorhandene Texte oder Fotos — und Struktur sowie Texte werden gemeinsam in der Design-Phase erarbeitet. Sie brauchen vor dem Start keinen fertigen, druckreifen Text.",
        },
        {
          question: "Kann die Website später wachsen?",
          answer:
            "Ja. Eine Unternehmenswebsite ist meist der Ausgangspunkt, bevor später ein Blog, ein Onlineshop, oder ein Kundenportal hinzukommt — die technische Basis ist darauf ausgelegt, statt einen kompletten Neubau zu erfordern.",
        },
        {
          question: 'Was genau umfasst "technisches SEO ab dem ersten Tag"?',
          answer:
            "Schnelle Ladezeiten, eine saubere URL-Struktur, korrekte Meta-Tags und strukturierte Daten, eine XML-Sitemap, und Mobilfreundlichkeit — die Grundlagen, die Suchmaschinen vor dem Ranking prüfen, bereits beim Launch umgesetzt statt nachträglich ergänzt.",
        },
      ],
      ctaLabel: "Angebot anfragen",
    },
    pt: {
      title: "Site institucional",
      metaDescription:
        "Um site institucional à medida que transforma visitantes em contactos — design responsivo, formulário de contacto integrado, SEO técnico desde o lançamento. Entregue em 1 a 2 semanas.",
      heroHeadline: "Um site institucional que faz mais do que existir.",
      heroSubhead:
        "Apresente o seu negócio, gere confiança em segundos, e transforme visitas em verdadeiros pedidos de contacto — sem template reciclado.",
      description: [
        "A maioria dos pequenos negócios não precisa de uma plataforma complexa — precisa de um site que carregue rápido, transmita credibilidade, e deixe claro como ser contactado. É exatamente para isso que serve um site institucional: uma mensagem clara por página, um design alinhado com a sua atividade, e um caminho de contacto que o visitante não tem de procurar.",
        "Cada projeto parte do seu negócio, não de um tema. O resultado é um site que parece ter sido construído especificamente para si — porque foi.",
      ],
      includes: [
        "Design à medida, sem template genérico",
        "Totalmente responsivo: telemóvel, tablet, computador",
        "Formulário de contacto integrado, protegido contra spam",
        "SEO técnico desde o lançamento: carregamento rápido, estrutura limpa, páginas indexáveis",
        "Suporte multilingue caso sirva mais do que um mercado",
      ],
      process: [
        {
          title: "Chamada de descoberta",
          description:
            "Uma conversa breve sobre o seu negócio, o seu público, e o que o site precisa de alcançar — sem questionários longos.",
        },
        {
          title: "Design",
          description:
            "Uma primeira versão do design, construída à volta do seu conteúdo e da sua marca, não de um template genérico.",
        },
        {
          title: "Desenvolvimento",
          description:
            "Desenvolvimento numa stack moderna e rápida — pode acompanhar o progresso e dar feedback ao longo de todo o projeto.",
        },
        {
          title: "Lançamento",
          description:
            "O site vai ao ar num domínio que controla, com as bases do SEO técnico já implementadas.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1 a 2 semanas",
      faq: [
        {
          question: "Qual a diferença entre um site institucional e uma landing page?",
          answer:
            "Um site institucional cobre toda a sua oferta em várias páginas (início, serviços, sobre, contacto) e é construído para ser encontrado nos motores de busca ao longo do tempo. Uma landing page é uma única página focada numa oferta ou campanha específica, normalmente associada a tráfego pago. A maioria dos negócios que estão a começar precisa primeiro de um site institucional.",
        },
        {
          question: "Preciso de fornecer o conteúdo eu próprio?",
          answer:
            "Você traz a matéria-prima — o que faz, a quem se dirige, textos ou fotos já existentes — e a estrutura e os textos são definidos em conjunto durante a fase de design. Não precisa de um texto final pronto a publicar antes de começar.",
        },
        {
          question: "O site pode crescer mais tarde?",
          answer:
            "Sim. Um site institucional é normalmente o ponto de partida antes de adicionar um blog, uma loja online, ou uma área de cliente mais tarde — a base técnica é construída para permitir isso em vez de exigir uma reconstrução completa.",
        },
        {
          question: 'O que inclui realmente o "SEO técnico desde o lançamento"?',
          answer:
            "Carregamento rápido das páginas, uma estrutura de URL limpa, meta tags e dados estruturados corretos, um sitemap XML, e compatibilidade com dispositivos móveis — os fundamentos que os motores de busca verificam antes de posicionar um site, tratados desde o lançamento em vez de adicionados depois.",
        },
      ],
      ctaLabel: "Pedir orçamento",
    },
    nl: {
      title: "Bedrijfswebsite",
      metaDescription:
        "Een op maat gemaakte bedrijfswebsite die bezoekers omzet in contacten — responsive design, ingebouwd contactformulier, technische SEO vanaf de lancering. Geleverd in 1 tot 2 weken.",
      heroHeadline: "Een bedrijfswebsite die meer doet dan alleen bestaan.",
      heroSubhead:
        "Presenteer wat u doet, wek binnen seconden vertrouwen, en zet bezoeken om in echte contactaanvragen — zonder gerecycled template.",
      description: [
        "De meeste kleine bedrijven hebben geen complex platform nodig — ze hebben een site nodig die snel laadt, betrouwbaar overkomt, en duidelijk maakt hoe men contact opneemt. Daarvoor is een bedrijfswebsite bedoeld: één duidelijke boodschap per pagina, een design dat past bij hoe u werkt, en een contactpad dat bezoekers niet hoeven te zoeken.",
        "Elk project vertrekt vanuit uw bedrijf, niet vanuit een thema. Het resultaat is een site die eruitziet alsof hij speciaal voor u is gebouwd — want dat is hij.",
      ],
      includes: [
        "Op maat gemaakt design, geen generiek thema",
        "Volledig responsive: mobiel, tablet, desktop",
        "Ingebouwd contactformulier met spambescherming",
        "Technische SEO vanaf de lancering: snelle laadtijd, heldere structuur, indexeerbare pagina's",
        "Meertalige ondersteuning als u meer dan één markt bedient",
      ],
      process: [
        {
          title: "Kennismakingsgesprek",
          description:
            "Een kort gesprek over uw bedrijf, uw doelgroep, en wat de site moet bereiken — geen lange vragenlijst.",
        },
        {
          title: "Design",
          description:
            "Een eerste versie van het design, opgebouwd rond uw content en merk, geen standaardtemplate.",
        },
        {
          title: "Ontwikkeling",
          description:
            "Ontwikkeling op een moderne, snelle stack — u kunt de voortgang volgen en gedurende het hele project feedback geven.",
        },
        {
          title: "Lancering",
          description:
            "De site gaat live op een domein dat u zelf beheert, met de technische SEO-basis al ingericht.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1 tot 2 weken",
      faq: [
        {
          question: "Wat is het verschil tussen een bedrijfswebsite en een landingspagina?",
          answer:
            "Een bedrijfswebsite dekt uw volledige aanbod over meerdere pagina's (home, diensten, over ons, contact) en is gebouwd om na verloop van tijd gevonden te worden in zoekmachines. Een landingspagina is één pagina gericht op één specifiek aanbod of één campagne, meestal gekoppeld aan betaald verkeer. De meeste startende bedrijven hebben eerst een bedrijfswebsite nodig.",
        },
        {
          question: "Moet ik de content zelf aanleveren?",
          answer:
            "U levert het ruwe materiaal — wat u doet, voor wie, eventuele bestaande teksten of foto's — en structuur en teksten worden samen uitgewerkt tijdens de designfase. U hoeft geen kant-en-klare tekst te hebben voordat we beginnen.",
        },
        {
          question: "Kan de site later meegroeien?",
          answer:
            "Ja. Een bedrijfswebsite is meestal het startpunt voordat later een blog, webshop, of klantportaal wordt toegevoegd — de technische basis is daarop gebouwd, in plaats van dat een volledige herbouw nodig is.",
        },
        {
          question: 'Wat houdt "technische SEO vanaf dag één" precies in?',
          answer:
            "Snelle laadtijden, een heldere URL-structuur, correcte meta-tags en gestructureerde data, een XML-sitemap, en mobielvriendelijkheid — de basisprincipes die zoekmachines controleren vóór het ranken van een site, al bij de lancering geregeld in plaats van achteraf toegevoegd.",
        },
      ],
      ctaLabel: "Offerte aanvragen",
    },
    pl: {
      title: "Strona wizytówka",
      metaDescription:
        "Strona wizytówka szyta na miarę, która zamienia odwiedzających w kontakty — responsywny design, wbudowany formularz kontaktowy, techniczne SEO od startu. Realizacja w 1-2 tygodnie.",
      heroHeadline: "Strona wizytówka, która robi więcej niż tylko istnieje.",
      heroSubhead:
        "Zaprezentuj swoją działalność, zbuduj zaufanie w kilka sekund, i zamień odwiedziny w realne zapytania — bez odgrzewanego szablonu.",
      description: [
        "Większość małych firm nie potrzebuje złożonej platformy — potrzebuje strony, która szybko się ładuje, wygląda wiarygodnie, i jasno pokazuje, jak się skontaktować. Właśnie do tego służy strona wizytówka: jeden jasny przekaz na stronę, design dopasowany do sposobu, w jaki działasz, i ścieżka kontaktu, której odwiedzający nie muszą szukać.",
        "Każdy projekt zaczyna się od Twojej firmy, nie od gotowego motywu. Efektem jest strona, która wygląda, jakby została zbudowana specjalnie dla Ciebie — bo tak właśnie było.",
      ],
      includes: [
        "Design szyty na miarę, żadnego generycznego motywu",
        "W pełni responsywna: telefon, tablet, komputer",
        "Wbudowany formularz kontaktowy z ochroną przed spamem",
        "Techniczne SEO od startu: szybkie ładowanie, czysta struktura, indeksowalne strony",
        "Wsparcie wielojęzyczne, jeśli obsługujesz więcej niż jeden rynek",
      ],
      process: [
        {
          title: "Rozmowa wstępna",
          description:
            "Krótka rozmowa o Twojej firmie, odbiorcach, i celu strony — bez długiego kwestionariusza.",
        },
        {
          title: "Projekt",
          description:
            "Pierwsza wersja designu, zbudowana wokół Twoich treści i marki, nie gotowego szablonu.",
        },
        {
          title: "Budowa",
          description:
            "Rozwój na nowoczesnym, szybkim stacku — możesz śledzić postępy i przekazywać uwagi przez cały projekt.",
        },
        {
          title: "Start",
          description:
            "Strona trafia online na domenie, którą kontrolujesz, z podstawami technicznego SEO już wdrożonymi.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1-2 tygodnie",
      faq: [
        {
          question: "Czym różni się strona wizytówka od landing page?",
          answer:
            "Strona wizytówka obejmuje całą Twoją ofertę na kilku podstronach (start, usługi, o nas, kontakt) i jest budowana tak, by z czasem być znajdowana w wyszukiwarkach. Landing page to jedna strona skupiona na konkretnej ofercie lub kampanii, zwykle powiązana z płatnym ruchem. Większość firm na start potrzebuje najpierw strony wizytówki.",
        },
        {
          question: "Czy muszę sam dostarczyć treści?",
          answer:
            "Dostarczasz surowy materiał — czym się zajmujesz, do kogo kierujesz ofertę, istniejące teksty lub zdjęcia — a struktura i treści są dopracowywane wspólnie na etapie projektowania. Nie potrzebujesz gotowego, dopracowanego tekstu przed startem.",
        },
        {
          question: "Czy strona może się później rozwijać?",
          answer:
            "Tak. Strona wizytówka to zwykle punkt wyjścia przed dodaniem bloga, sklepu internetowego, lub panelu klienta w przyszłości — podstawa techniczna jest budowana z myślą o tym, zamiast wymagać przebudowy od zera.",
        },
        {
          question: "Co dokładnie obejmuje „techniczne SEO od pierwszego dnia”?",
          answer:
            "Szybkie ładowanie stron, czystą strukturę adresów URL, poprawne meta tagi i dane strukturalne, mapę witryny XML, oraz dopasowanie do urządzeń mobilnych — podstawy, które wyszukiwarki sprawdzają przed zaindeksowaniem strony, wdrożone już od startu, a nie dodawane później.",
        },
      ],
      ctaLabel: "Poproś o wycenę",
    },
    ru: {
      title: "Сайт-визитка",
      metaDescription:
        "Индивидуальный сайт-визитка, превращающий посетителей в обращения — адаптивный дизайн, встроенная форма связи, техническое SEO с первого дня. Срок — 1–2 недели.",
      heroHeadline: "Сайт-визитка, который делает больше, чем просто существует.",
      heroSubhead:
        "Представьте свой бизнес, вызовите доверие за секунды и превратите визиты в реальные обращения — без переработанного шаблона.",
      description: [
        "Большинству малых предприятий не нужна сложная платформа — им нужен сайт, который быстро загружается, выглядит убедительно и ясно показывает, как с вами связаться. Именно для этого создаётся сайт-визитка: одно чёткое сообщение на странице, дизайн, соответствующий вашей деятельности, и путь к контакту, который посетителю не нужно искать.",
        "Каждый проект отталкивается от вашего бизнеса, а не от шаблона. В результате получается сайт, который выглядит так, будто создан именно для вас — потому что так и есть.",
      ],
      includes: [
        "Индивидуальный дизайн, без универсального шаблона",
        "Полная адаптивность: телефон, планшет, компьютер",
        "Встроенная форма связи с защитой от спама",
        "Техническое SEO с момента запуска: быстрая загрузка, чистая структура, индексируемые страницы",
        "Поддержка нескольких языков, если вы работаете на нескольких рынках",
      ],
      process: [
        {
          title: "Звонок для знакомства",
          description:
            "Короткий разговор о вашем бизнесе, аудитории и целях сайта — без длинных анкет.",
        },
        {
          title: "Дизайн",
          description:
            "Первая версия дизайна, построенная вокруг вашего контента и бренда, а не готового шаблона.",
        },
        {
          title: "Разработка",
          description:
            "Разработка на современном и быстром стеке технологий — вы можете следить за ходом работы и давать обратную связь на протяжении всего проекта.",
        },
        {
          title: "Запуск",
          description:
            "Сайт публикуется на домене, который принадлежит вам, с уже настроенными базовыми элементами технического SEO.",
        },
      ],
      tech: "React, TypeScript, Cloudflare Workers",
      timeline: "1–2 недели",
      faq: [
        {
          question: "Чем сайт-визитка отличается от лендинга?",
          answer:
            "Сайт-визитка охватывает всё ваше предложение на нескольких страницах (главная, услуги, о компании, контакты) и создаётся для того, чтобы со временем находиться в поисковых системах. Лендинг — это одна страница, сфокусированная на конкретном предложении или кампании, обычно связанная с платным трафиком. Большинству начинающих компаний сначала нужен именно сайт-визитка.",
        },
        {
          question: "Нужно ли мне самому предоставлять контент?",
          answer:
            "Вы предоставляете исходный материал — чем вы занимаетесь, для кого, имеющиеся тексты или фотографии — а структура и тексты формируются совместно на этапе дизайна. Готовый текст для публикации перед началом работы не требуется.",
        },
        {
          question: "Может ли сайт развиваться в будущем?",
          answer:
            "Да. Сайт-визитка обычно становится отправной точкой перед добавлением блога, интернет-магазина или личного кабинета клиента — техническая основа создаётся с расчётом на это, а не требует полной переделки.",
        },
        {
          question: "Что именно включает «техническое SEO с первого дня»?",
          answer:
            "Быстрая загрузка страниц, чистая структура URL, корректные мета-теги и структурированные данные, XML-карта сайта, и адаптивность под мобильные устройства — базовые элементы, которые поисковые системы проверяют перед ранжированием сайта, реализованные с момента запуска, а не добавленные позже.",
        },
      ],
      ctaLabel: "Запросить смету",
    },
  },
};
