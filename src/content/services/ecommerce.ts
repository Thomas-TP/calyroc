import type { ServiceDefinition } from "./types";

export const ecommerce: ServiceDefinition = {
  id: "ecommerce",
  relatedPackId: "sur-mesure",
  translations: {
    en: {
      title: "Ecommerce Website",
      metaDescription:
        "A complete online store with secure Stripe payments, a product catalog, and customer accounts — built to convert visitors into paying customers. Delivered in 4 to 6 weeks.",
      heroHeadline: "An online store built to sell, not just to display products.",
      heroSubhead:
        "A clear catalog, secure checkout, and customer accounts — everything a real store needs, without the bloat of a generic platform.",
      description: [
        "Selling online means more than uploading product photos. Visitors need to find what they're looking for quickly, trust the checkout enough to enter their card details, and get confirmation that their order actually went through. Every one of those steps either builds confidence or loses a sale.",
        "This isn't a store built on a rented template with plugins bolted on. It's built specifically around your catalog, your pricing logic, and how you actually fulfil orders — with Stripe handling payments securely, so neither you nor your customers' card data ever passes through anything you'd have to worry about.",
      ],
      includes: [
        "Product catalog with categories, variants, and stock tracking",
        "Secure checkout via Stripe (cards and other methods your customers use)",
        "Customer accounts with order history",
        "Automatic transactional emails: order confirmation, shipping, receipts",
        "Admin dashboard to manage products and orders without touching code",
      ],
      process: [
        {
          title: "Catalog & flow mapping",
          description:
            "We map your product catalog, categories, and the exact purchase flow — from browsing to confirmation.",
        },
        {
          title: "Design",
          description:
            "A store design built around how your specific products are actually chosen and compared.",
        },
        {
          title: "Build & payment setup",
          description:
            "Development plus Stripe integration, tested with real transactions before launch.",
        },
        {
          title: "Launch & handover",
          description:
            "The store goes live, and you get a walkthrough of the admin dashboard so you're not dependent on anyone for day-to-day management.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4 to 6 weeks",
      faq: [
        {
          question: "Is payment processing actually secure?",
          answer:
            "Yes — checkout runs through Stripe, a payment processor used by millions of businesses worldwide. Card details never touch your server directly; Stripe handles that layer entirely, which also means you don't carry the compliance burden of storing card data yourself.",
        },
        {
          question: "Can I manage products myself after launch?",
          answer:
            "Yes. You get an admin dashboard to add products, update stock, and see orders without needing a developer for routine changes. Structural changes (new sections, new payment methods) go through a support request.",
        },
        {
          question: "What if I only have a handful of products?",
          answer:
            "A full ecommerce build makes sense once you have a real catalog to manage and orders to process. If you're selling one or two products or a single offer, a landing page with a direct Stripe payment link is usually faster and cheaper — worth discussing before committing to a full store.",
        },
        {
          question: "Does it handle shipping and taxes?",
          answer:
            "Shipping rules and applicable tax rates are configured as part of the build, based on where you actually ship to and your VAT/tax situation — this is scoped during the catalog & flow mapping step, not left as a generic default.",
        },
      ],
      ctaLabel: "Request a quote",
    },
    fr: {
      title: "Site e-commerce",
      metaDescription:
        "Une boutique en ligne complète avec paiement sécurisé Stripe, catalogue produits, et comptes clients — conçue pour convertir les visiteurs en clients. Livrée en 4 à 6 semaines.",
      heroHeadline: "Une boutique en ligne conçue pour vendre, pas juste afficher des produits.",
      heroSubhead:
        "Un catalogue clair, un paiement sécurisé, et des comptes clients — tout ce dont une vraie boutique a besoin, sans le poids d'une plateforme générique.",
      description: [
        "Vendre en ligne, ce n'est pas juste mettre en ligne des photos de produits. Les visiteurs doivent trouver rapidement ce qu'ils cherchent, faire assez confiance au paiement pour saisir leur carte, et recevoir la confirmation que leur commande est bien passée. Chacune de ces étapes construit la confiance — ou fait perdre une vente.",
        "Ce n'est pas une boutique montée sur un template loué avec des plugins ajoutés au fil de l'eau. Elle est construite spécifiquement autour de votre catalogue, de votre logique de prix, et de la façon dont vous préparez réellement les commandes — avec Stripe qui gère les paiements de façon sécurisée, pour que ni vous ni les données bancaires de vos clients ne transitent jamais par quelque chose dont vous auriez à vous soucier.",
      ],
      includes: [
        "Catalogue produits avec catégories, variantes, et suivi de stock",
        "Paiement sécurisé via Stripe (cartes et autres moyens utilisés par vos clients)",
        "Comptes clients avec historique des commandes",
        "Emails transactionnels automatiques : confirmation, expédition, reçus",
        "Tableau de bord admin pour gérer produits et commandes sans toucher au code",
      ],
      process: [
        {
          title: "Cadrage catalogue & parcours",
          description:
            "On cadre votre catalogue produits, vos catégories, et le parcours d'achat exact — de la navigation à la confirmation.",
        },
        {
          title: "Design",
          description:
            "Un design de boutique construit autour de la façon dont vos produits sont réellement choisis et comparés.",
        },
        {
          title: "Développement & paiement",
          description:
            "Développement plus intégration Stripe, testée avec de vraies transactions avant la mise en ligne.",
        },
        {
          title: "Mise en ligne & prise en main",
          description:
            "La boutique part en ligne, et vous recevez une présentation du tableau de bord pour ne dépendre de personne au quotidien.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4 à 6 semaines",
      faq: [
        {
          question: "Le paiement est-il vraiment sécurisé ?",
          answer:
            "Oui — le paiement passe par Stripe, un prestataire utilisé par des millions d'entreprises dans le monde. Les données de carte ne transitent jamais directement par votre serveur ; Stripe gère entièrement cette couche, ce qui vous évite aussi la charge de conformité liée au stockage de données bancaires.",
        },
        {
          question: "Puis-je gérer les produits moi-même après la mise en ligne ?",
          answer:
            "Oui. Vous disposez d'un tableau de bord admin pour ajouter des produits, mettre à jour le stock, et voir les commandes sans avoir besoin d'un développeur pour les changements courants. Les changements structurels (nouvelles sections, nouveaux moyens de paiement) passent par une demande de support.",
        },
        {
          question: "Et si je n'ai que quelques produits ?",
          answer:
            "Un vrai e-commerce a du sens dès qu'il y a un catalogue réel à gérer et des commandes à traiter. Si vous vendez un ou deux produits, ou une offre unique, une landing page avec un lien de paiement Stripe direct est généralement plus rapide et moins cher — à discuter avant de partir sur une boutique complète.",
        },
        {
          question: "La livraison et la TVA sont-elles gérées ?",
          answer:
            "Les règles de livraison et les taux de TVA applicables sont configurés lors de la construction, en fonction de vos zones de livraison réelles et de votre situation fiscale — c'est cadré pendant l'étape catalogue & parcours, pas laissé par défaut.",
        },
      ],
      ctaLabel: "Demander un devis",
    },
    es: {
      title: "Tienda online",
      metaDescription:
        "Una tienda online completa con pago seguro por Stripe, catálogo de productos, y cuentas de cliente — pensada para convertir visitantes en clientes. Entregada en 4 a 6 semanas.",
      heroHeadline: "Una tienda online pensada para vender, no solo para mostrar productos.",
      heroSubhead:
        "Un catálogo claro, un pago seguro, y cuentas de cliente — todo lo que necesita una tienda real, sin el peso de una plataforma genérica.",
      description: [
        "Vender online es mucho más que subir fotos de productos. Los visitantes deben encontrar rápido lo que buscan, confiar lo suficiente en el pago como para introducir su tarjeta, y recibir confirmación de que su pedido se ha procesado. Cada uno de esos pasos genera confianza — o hace perder una venta.",
        "No es una tienda montada sobre una plantilla alquilada con plugins añadidos sobre la marcha. Está construida específicamente en torno a su catálogo, su lógica de precios, y cómo gestiona realmente los pedidos — con Stripe encargándose del pago de forma segura, de modo que ni usted ni los datos bancarios de sus clientes pasan nunca por nada de lo que tenga que preocuparse.",
      ],
      includes: [
        "Catálogo de productos con categorías, variantes, y control de stock",
        "Pago seguro vía Stripe (tarjetas y otros métodos que usen sus clientes)",
        "Cuentas de cliente con historial de pedidos",
        "Emails transaccionales automáticos: confirmación, envío, recibos",
        "Panel de administración para gestionar productos y pedidos sin tocar código",
      ],
      process: [
        {
          title: "Mapeo de catálogo y flujo",
          description:
            "Mapeamos su catálogo de productos, categorías, y el flujo de compra exacto — desde la navegación hasta la confirmación.",
        },
        {
          title: "Diseño",
          description:
            "Un diseño de tienda construido en torno a cómo se eligen y comparan realmente sus productos.",
        },
        {
          title: "Desarrollo y pago",
          description:
            "Desarrollo más integración con Stripe, probada con transacciones reales antes del lanzamiento.",
        },
        {
          title: "Lanzamiento y traspaso",
          description:
            "La tienda se publica, y recibe una explicación guiada del panel de administración para no depender de nadie en el día a día.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4 a 6 semanas",
      faq: [
        {
          question: "¿El pago es realmente seguro?",
          answer:
            "Sí — el pago se procesa mediante Stripe, utilizado por millones de empresas en todo el mundo. Los datos de la tarjeta nunca pasan directamente por su servidor; Stripe gestiona esa capa por completo, lo que también le libera de la carga de cumplimiento normativo de almacenar datos bancarios.",
        },
        {
          question: "¿Puedo gestionar los productos yo mismo tras el lanzamiento?",
          answer:
            "Sí. Dispone de un panel de administración para añadir productos, actualizar stock, y ver pedidos sin necesitar un desarrollador para cambios rutinarios. Los cambios estructurales (nuevas secciones, nuevos métodos de pago) se gestionan mediante una solicitud de soporte.",
        },
        {
          question: "¿Y si solo tengo unos pocos productos?",
          answer:
            "Una tienda completa tiene sentido cuando hay un catálogo real que gestionar y pedidos que procesar. Si vende uno o dos productos, o una única oferta, una landing page con un enlace de pago directo de Stripe suele ser más rápida y económica — algo a valorar antes de decidirse por una tienda completa.",
        },
        {
          question: "¿Se gestionan los envíos y los impuestos?",
          answer:
            "Las reglas de envío y los tipos impositivos aplicables se configuran durante la construcción, según sus zonas de envío reales y su situación fiscal — esto se define en la etapa de mapeo de catálogo y flujo, no se deja por defecto.",
        },
      ],
      ctaLabel: "Solicitar presupuesto",
    },
    it: {
      title: "E-commerce",
      metaDescription:
        "Un negozio online completo con pagamento sicuro Stripe, catalogo prodotti, e account cliente — pensato per convertire i visitatori in clienti. Consegnato in 4-6 settimane.",
      heroHeadline: "Un negozio online pensato per vendere, non solo per mostrare prodotti.",
      heroSubhead:
        "Un catalogo chiaro, un pagamento sicuro, e account cliente — tutto ciò di cui ha bisogno un vero negozio, senza il peso di una piattaforma generica.",
      description: [
        "Vendere online significa molto più che caricare foto dei prodotti. I visitatori devono trovare rapidamente ciò che cercano, fidarsi abbastanza del pagamento da inserire la carta, e ricevere conferma che l'ordine è andato a buon fine. Ognuno di questi passaggi costruisce fiducia — o fa perdere una vendita.",
        "Non è un negozio costruito su un template preso in affitto con plugin aggiunti nel tempo. È costruito specificamente intorno al suo catalogo, alla sua logica di prezzo, e a come gestisce realmente gli ordini — con Stripe che gestisce i pagamenti in modo sicuro, così che né lei né i dati delle carte dei suoi clienti passino mai attraverso qualcosa di cui doversi preoccupare.",
      ],
      includes: [
        "Catalogo prodotti con categorie, varianti, e tracciamento dello stock",
        "Pagamento sicuro tramite Stripe (carte e altri metodi usati dai suoi clienti)",
        "Account cliente con storico ordini",
        "Email transazionali automatiche: conferma, spedizione, ricevute",
        "Dashboard admin per gestire prodotti e ordini senza toccare il codice",
      ],
      process: [
        {
          title: "Mappatura catalogo e flusso",
          description:
            "Mappiamo il suo catalogo prodotti, le categorie, e il flusso d'acquisto esatto — dalla navigazione alla conferma.",
        },
        {
          title: "Design",
          description:
            "Un design del negozio costruito intorno a come i suoi prodotti vengono realmente scelti e confrontati.",
        },
        {
          title: "Sviluppo e pagamento",
          description:
            "Sviluppo più integrazione Stripe, testata con transazioni reali prima del lancio.",
        },
        {
          title: "Lancio e passaggio di consegne",
          description:
            "Il negozio va online, e riceve una guida alla dashboard admin per non dipendere da nessuno nella gestione quotidiana.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4-6 settimane",
      faq: [
        {
          question: "Il pagamento è davvero sicuro?",
          answer:
            "Sì — il pagamento passa tramite Stripe, un fornitore usato da milioni di aziende nel mondo. I dati della carta non passano mai direttamente dal suo server; Stripe gestisce interamente quel livello, il che la solleva anche dall'onere di conformità legato alla conservazione di dati di pagamento.",
        },
        {
          question: "Posso gestire i prodotti da solo dopo il lancio?",
          answer:
            "Sì. Ha a disposizione una dashboard admin per aggiungere prodotti, aggiornare lo stock, e vedere gli ordini senza bisogno di uno sviluppatore per le modifiche di routine. I cambiamenti strutturali (nuove sezioni, nuovi metodi di pagamento) passano tramite una richiesta di supporto.",
        },
        {
          question: "E se ho solo pochi prodotti?",
          answer:
            "Un e-commerce completo ha senso quando c'è un catalogo reale da gestire e ordini da processare. Se vende uno o due prodotti, o un'unica offerta, una landing page con un link di pagamento Stripe diretto è di solito più veloce ed economica — da valutare prima di orientarsi verso un negozio completo.",
        },
        {
          question: "Vengono gestite spedizioni e tasse?",
          answer:
            "Le regole di spedizione e le aliquote fiscali applicabili vengono configurate durante lo sviluppo, in base alle sue zone di spedizione reali e alla sua situazione fiscale — questo viene definito nella fase di mappatura catalogo e flusso, non lasciato di default.",
        },
      ],
      ctaLabel: "Richiedi un preventivo",
    },
    de: {
      title: "Onlineshop",
      metaDescription:
        "Ein vollständiger Onlineshop mit sicherer Stripe-Zahlung, Produktkatalog, und Kundenkonten — gebaut, um Besucher in Kunden zu verwandeln. Lieferung in 4-6 Wochen.",
      heroHeadline:
        "Ein Onlineshop, der zum Verkaufen gebaut ist, nicht nur zum Zeigen von Produkten.",
      heroSubhead:
        "Ein klarer Katalog, sicherer Checkout, und Kundenkonten — alles, was ein echter Shop braucht, ohne den Ballast einer generischen Plattform.",
      description: [
        "Online verkaufen bedeutet mehr als Produktfotos hochzuladen. Besucher müssen schnell finden, wonach sie suchen, dem Checkout genug vertrauen, um ihre Kartendaten einzugeben, und eine Bestätigung erhalten, dass ihre Bestellung wirklich durchgegangen ist. Jeder dieser Schritte schafft entweder Vertrauen — oder kostet einen Verkauf.",
        "Das ist kein Shop auf einer gemieteten Vorlage mit nachträglich angeflanschten Plugins. Er ist gezielt um Ihren Katalog, Ihre Preislogik, und die Art gebaut, wie Sie Bestellungen tatsächlich abwickeln — mit Stripe, das Zahlungen sicher abwickelt, sodass weder Sie noch die Kartendaten Ihrer Kunden jemals durch etwas laufen, um das Sie sich sorgen müssten.",
      ],
      includes: [
        "Produktkatalog mit Kategorien, Varianten, und Lagerbestandsverfolgung",
        "Sicherer Checkout via Stripe (Karten und weitere Zahlungsmethoden Ihrer Kunden)",
        "Kundenkonten mit Bestellhistorie",
        "Automatische Transaktions-E-Mails: Bestellbestätigung, Versand, Belege",
        "Admin-Dashboard zur Verwaltung von Produkten und Bestellungen, ganz ohne Code",
      ],
      process: [
        {
          title: "Katalog- & Ablaufplanung",
          description:
            "Wir kartieren Ihren Produktkatalog, Ihre Kategorien, und den genauen Kaufablauf — vom Stöbern bis zur Bestätigung.",
        },
        {
          title: "Design",
          description:
            "Ein Shop-Design, aufgebaut danach, wie Ihre konkreten Produkte tatsächlich ausgewählt und verglichen werden.",
        },
        {
          title: "Entwicklung & Zahlungseinrichtung",
          description:
            "Entwicklung plus Stripe-Integration, mit echten Transaktionen getestet vor dem Launch.",
        },
        {
          title: "Launch & Übergabe",
          description:
            "Der Shop geht live, und Sie erhalten eine Einführung ins Admin-Dashboard, damit Sie im Tagesgeschäft von niemandem abhängig sind.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4-6 Wochen",
      faq: [
        {
          question: "Ist die Zahlungsabwicklung wirklich sicher?",
          answer:
            "Ja — der Checkout läuft über Stripe, einen Zahlungsdienstleister, den Millionen Unternehmen weltweit nutzen. Kartendaten berühren nie direkt Ihren Server; Stripe übernimmt diese Ebene vollständig, was Ihnen auch den Compliance-Aufwand für die Speicherung von Kartendaten erspart.",
        },
        {
          question: "Kann ich Produkte nach dem Launch selbst verwalten?",
          answer:
            "Ja. Sie erhalten ein Admin-Dashboard, um Produkte hinzuzufügen, Lagerbestände zu aktualisieren, und Bestellungen einzusehen, ohne für Routineänderungen einen Entwickler zu brauchen. Strukturelle Änderungen (neue Bereiche, neue Zahlungsmethoden) laufen über eine Support-Anfrage.",
        },
        {
          question: "Was, wenn ich nur wenige Produkte habe?",
          answer:
            "Ein vollständiger Onlineshop lohnt sich, sobald ein echter Katalog zu verwalten und Bestellungen abzuwickeln sind. Verkaufen Sie nur ein oder zwei Produkte oder ein einzelnes Angebot, ist eine Landingpage mit direktem Stripe-Zahlungslink meist schneller und günstiger — das lässt sich vorab klären, bevor Sie sich für einen vollen Shop entscheiden.",
        },
        {
          question: "Werden Versand und Steuern berücksichtigt?",
          answer:
            "Versandregeln und geltende Steuersätze werden während des Aufbaus konfiguriert, basierend auf Ihren tatsächlichen Versandgebieten und Ihrer steuerlichen Situation — das wird bereits in der Katalog- und Ablaufplanung geklärt, nicht als generischer Standard belassen.",
        },
      ],
      ctaLabel: "Angebot anfragen",
    },
    pt: {
      title: "Loja online",
      metaDescription:
        "Uma loja online completa com pagamento seguro Stripe, catálogo de produtos, e contas de cliente — construída para converter visitantes em clientes. Entregue em 4 a 6 semanas.",
      heroHeadline: "Uma loja online construída para vender, não só para mostrar produtos.",
      heroSubhead:
        "Um catálogo claro, checkout seguro, e contas de cliente — tudo o que uma loja real precisa, sem o peso de uma plataforma genérica.",
      description: [
        "Vender online é muito mais do que carregar fotos de produtos. Os visitantes precisam de encontrar rapidamente o que procuram, confiar o suficiente no checkout para introduzir os dados do cartão, e receber confirmação de que a encomenda foi mesmo processada. Cada uma dessas etapas gera confiança — ou faz perder uma venda.",
        "Não é uma loja montada sobre um template alugado com plugins acrescentados ao longo do tempo. É construída especificamente à volta do seu catálogo, da sua lógica de preços, e de como processa realmente as encomendas — com o Stripe a tratar dos pagamentos de forma segura, para que nem os seus dados nem os dos clientes passem por algo com que tenha de se preocupar.",
      ],
      includes: [
        "Catálogo de produtos com categorias, variantes, e controlo de stock",
        "Checkout seguro via Stripe (cartões e outros métodos usados pelos seus clientes)",
        "Contas de cliente com histórico de encomendas",
        "Emails transacionais automáticos: confirmação, envio, recibos",
        "Painel de administração para gerir produtos e encomendas sem tocar em código",
      ],
      process: [
        {
          title: "Mapeamento do catálogo e do fluxo",
          description:
            "Mapeamos o seu catálogo de produtos, categorias, e o fluxo de compra exato — da navegação à confirmação.",
        },
        {
          title: "Design",
          description:
            "Um design de loja construído à volta de como os seus produtos são realmente escolhidos e comparados.",
        },
        {
          title: "Desenvolvimento e pagamento",
          description:
            "Desenvolvimento mais integração com o Stripe, testada com transações reais antes do lançamento.",
        },
        {
          title: "Lançamento e transição",
          description:
            "A loja vai ao ar, e recebe uma explicação guiada do painel de administração para não depender de ninguém na gestão diária.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4 a 6 semanas",
      faq: [
        {
          question: "O pagamento é mesmo seguro?",
          answer:
            "Sim — o checkout passa pelo Stripe, um processador de pagamentos usado por milhões de empresas em todo o mundo. Os dados do cartão nunca passam diretamente pelo seu servidor; o Stripe trata dessa camada por completo, o que também o liberta do peso de conformidade associado a guardar dados de cartões.",
        },
        {
          question: "Posso gerir os produtos eu próprio após o lançamento?",
          answer:
            "Sim. Tem acesso a um painel de administração para adicionar produtos, atualizar stock, e ver encomendas sem precisar de um developer para alterações de rotina. Mudanças estruturais (novas secções, novos métodos de pagamento) passam por um pedido de suporte.",
        },
        {
          question: "E se eu tiver apenas alguns produtos?",
          answer:
            "Uma loja completa faz sentido quando há um catálogo real a gerir e encomendas a processar. Se vende um ou dois produtos, ou uma única oferta, uma landing page com um link de pagamento Stripe direto costuma ser mais rápida e económica — vale a pena discutir antes de avançar para uma loja completa.",
        },
        {
          question: "Os envios e impostos são tratados?",
          answer:
            "As regras de envio e as taxas de imposto aplicáveis são configuradas durante a construção, com base nas suas zonas de envio reais e na sua situação fiscal — isto é definido na etapa de mapeamento do catálogo e do fluxo, não deixado como predefinição genérica.",
        },
      ],
      ctaLabel: "Pedir orçamento",
    },
    nl: {
      title: "Webshop",
      metaDescription:
        "Een complete webshop met veilige Stripe-betaling, productcatalogus, en klantaccounts — gebouwd om bezoekers om te zetten in klanten. Geleverd in 4 tot 6 weken.",
      heroHeadline: "Een webshop gebouwd om te verkopen, niet alleen om producten te tonen.",
      heroSubhead:
        "Een heldere catalogus, veilige afrekening, en klantaccounts — alles wat een echte webshop nodig heeft, zonder de last van een generiek platform.",
      description: [
        "Online verkopen is veel meer dan productfoto's uploaden. Bezoekers moeten snel vinden wat ze zoeken, genoeg vertrouwen hebben in de afrekening om hun kaartgegevens in te voeren, en bevestiging krijgen dat hun bestelling echt is doorgekomen. Elke stap bouwt vertrouwen op — of kost een verkoop.",
        "Dit is geen webshop op een gehuurd template met achteraf aangeplakte plugins. Hij is specifiek gebouwd rond uw catalogus, uw prijslogica, en hoe u bestellingen daadwerkelijk afhandelt — met Stripe dat betalingen veilig verwerkt, zodat noch u noch de kaartgegevens van uw klanten ooit door iets lopen waar u zich zorgen over hoeft te maken.",
      ],
      includes: [
        "Productcatalogus met categorieën, varianten, en voorraadbeheer",
        "Veilige afrekening via Stripe (kaarten en andere methoden die uw klanten gebruiken)",
        "Klantaccounts met bestelgeschiedenis",
        "Automatische transactie-e-mails: bestelbevestiging, verzending, bonnen",
        "Admin-dashboard om producten en bestellingen te beheren zonder code aan te raken",
      ],
      process: [
        {
          title: "Catalogus- en flowanalyse",
          description:
            "We brengen uw productcatalogus, categorieën, en het exacte aankoopproces in kaart — van bladeren tot bevestiging.",
        },
        {
          title: "Design",
          description:
            "Een webshopdesign gebouwd rond hoe uw specifieke producten daadwerkelijk gekozen en vergeleken worden.",
        },
        {
          title: "Bouw & betaalintegratie",
          description:
            "Ontwikkeling plus Stripe-integratie, getest met echte transacties vóór de lancering.",
        },
        {
          title: "Lancering & overdracht",
          description:
            "De webshop gaat live, en u krijgt een rondleiding door het admin-dashboard, zodat u voor het dagelijkse beheer van niemand afhankelijk bent.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4 tot 6 weken",
      faq: [
        {
          question: "Is de betaalverwerking echt veilig?",
          answer:
            "Ja — de afrekening loopt via Stripe, een betaalverwerker die door miljoenen bedrijven wereldwijd wordt gebruikt. Kaartgegevens komen nooit rechtstreeks op uw server terecht; Stripe handelt die laag volledig af, wat u ook bevrijdt van de compliance-last van het zelf opslaan van kaartgegevens.",
        },
        {
          question: "Kan ik producten na de lancering zelf beheren?",
          answer:
            "Ja. U krijgt een admin-dashboard om producten toe te voegen, voorraad bij te werken, en bestellingen te bekijken zonder dat u voor routinewijzigingen een developer nodig heeft. Structurele wijzigingen (nieuwe secties, nieuwe betaalmethoden) verlopen via een supportverzoek.",
        },
        {
          question: "En als ik maar een paar producten heb?",
          answer:
            "Een volledige webshop is zinvol zodra er een echte catalogus te beheren en bestellingen te verwerken zijn. Verkoopt u één of twee producten, of één aanbod, dan is een landingspagina met een directe Stripe-betaallink meestal sneller en goedkoper — de moeite waard om te bespreken voordat u voor een volledige webshop kiest.",
        },
        {
          question: "Worden verzending en btw geregeld?",
          answer:
            "Verzendregels en toepasselijke btw-tarieven worden tijdens de bouw geconfigureerd, op basis van uw daadwerkelijke verzendgebieden en uw fiscale situatie — dit wordt al tijdens de catalogus- en flowanalyse bepaald, niet als generieke standaard achtergelaten.",
        },
      ],
      ctaLabel: "Offerte aanvragen",
    },
    pl: {
      title: "Sklep internetowy",
      metaDescription:
        "Kompletny sklep internetowy z bezpiecznymi płatnościami Stripe, katalogiem produktów, i kontami klientów — zbudowany, by zamieniać odwiedzających w klientów. Realizacja w 4-6 tygodni.",
      heroHeadline: "Sklep internetowy zbudowany do sprzedaży, nie tylko do pokazywania produktów.",
      heroSubhead:
        "Przejrzysty katalog, bezpieczna płatność, i konta klientów — wszystko, czego potrzebuje prawdziwy sklep, bez balastu generycznej platformy.",
      description: [
        "Sprzedaż online to znacznie więcej niż wgranie zdjęć produktów. Odwiedzający muszą szybko znaleźć to, czego szukają, na tyle zaufać płatności, by wpisać dane karty, i otrzymać potwierdzenie, że zamówienie faktycznie zostało złożone. Każdy z tych kroków buduje zaufanie — albo kosztuje utraconą sprzedaż.",
        "To nie sklep zbudowany na wynajętym szablonie z doklejonymi później wtyczkami. Jest zbudowany konkretnie wokół Twojego katalogu, logiki cenowej, i sposobu, w jaki faktycznie realizujesz zamówienia — z Stripe obsługującym płatności w bezpieczny sposób, dzięki czemu ani Ty, ani dane kart Twoich klientów nigdy nie przechodzą przez coś, o co musiałbyś się martwić.",
      ],
      includes: [
        "Katalog produktów z kategoriami, wariantami, i śledzeniem stanu magazynowego",
        "Bezpieczna płatność przez Stripe (karty i inne metody używane przez Twoich klientów)",
        "Konta klientów z historią zamówień",
        "Automatyczne e-maile transakcyjne: potwierdzenie zamówienia, wysyłka, paragony",
        "Panel administracyjny do zarządzania produktami i zamówieniami bez dotykania kodu",
      ],
      process: [
        {
          title: "Mapowanie katalogu i procesu",
          description:
            "Mapujemy Twój katalog produktów, kategorie, i dokładny proces zakupowy — od przeglądania po potwierdzenie.",
        },
        {
          title: "Projekt",
          description:
            "Design sklepu zbudowany wokół tego, jak Twoje konkretne produkty są faktycznie wybierane i porównywane.",
        },
        {
          title: "Budowa i konfiguracja płatności",
          description:
            "Rozwój plus integracja Stripe, testowana na prawdziwych transakcjach przed startem.",
        },
        {
          title: "Start i przekazanie",
          description:
            "Sklep trafia online, a Ty otrzymujesz oprowadzenie po panelu administracyjnym, byś nie był zależny od nikogo w codziennym zarządzaniu.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4-6 tygodni",
      faq: [
        {
          question: "Czy obsługa płatności jest naprawdę bezpieczna?",
          answer:
            "Tak — płatność przechodzi przez Stripe, operatora płatności używanego przez miliony firm na całym świecie. Dane karty nigdy nie trafiają bezpośrednio na Twój serwer; Stripe w pełni obsługuje tę warstwę, co zdejmuje z Ciebie również obowiązek zgodności związany z przechowywaniem danych kart.",
        },
        {
          question: "Czy mogę sam zarządzać produktami po starcie?",
          answer:
            "Tak. Otrzymujesz panel administracyjny do dodawania produktów, aktualizowania stanu magazynowego, i przeglądania zamówień bez potrzeby angażowania developera do rutynowych zmian. Zmiany strukturalne (nowe sekcje, nowe metody płatności) realizowane są przez zgłoszenie wsparcia.",
        },
        {
          question: "A jeśli mam tylko kilka produktów?",
          answer:
            "Pełny sklep internetowy ma sens, gdy jest realny katalog do zarządzania i zamówienia do obsługi. Jeśli sprzedajesz jeden lub dwa produkty, albo pojedynczą ofertę, landing page z bezpośrednim linkiem płatności Stripe jest zwykle szybszy i tańszy — warto to omówić przed decyzją o pełnym sklepie.",
        },
        {
          question: "Czy wysyłka i podatki są obsługiwane?",
          answer:
            "Zasady wysyłki i obowiązujące stawki podatkowe są konfigurowane podczas budowy, na podstawie Twoich rzeczywistych obszarów wysyłki i sytuacji podatkowej — ustala się to już na etapie mapowania katalogu i procesu, a nie pozostawia jako domyślne.",
        },
      ],
      ctaLabel: "Poproś o wycenę",
    },
    ru: {
      title: "Интернет-магазин",
      metaDescription:
        "Полноценный интернет-магазин с безопасной оплатой через Stripe, каталогом товаров, и личными кабинетами клиентов — создан, чтобы превращать посетителей в покупателей. Срок — 4–6 недель.",
      heroHeadline: "Интернет-магазин, созданный для продаж, а не просто для показа товаров.",
      heroSubhead:
        "Понятный каталог, безопасная оплата, и личные кабинеты клиентов — всё, что нужно настоящему магазину, без лишнего веса универсальной платформы.",
      description: [
        "Продавать онлайн — это гораздо больше, чем загрузить фотографии товаров. Посетителям нужно быстро находить то, что они ищут, достаточно доверять оплате, чтобы ввести данные карты, и получать подтверждение, что заказ действительно прошёл. Каждый из этих шагов либо укрепляет доверие, либо стоит вам продажи.",
        "Это не магазин на арендованном шаблоне с плагинами, добавленными постфактум. Он строится конкретно вокруг вашего каталога, вашей логики цен, и того, как вы реально обрабатываете заказы — с Stripe, безопасно обрабатывающим платежи, так что ни вы, ни данные карт ваших клиентов никогда не проходят через что-то, о чём вам пришлось бы беспокоиться.",
      ],
      includes: [
        "Каталог товаров с категориями, вариантами, и учётом остатков",
        "Безопасная оплата через Stripe (карты и другие способы, которыми пользуются ваши клиенты)",
        "Личные кабинеты клиентов с историей заказов",
        "Автоматические транзакционные письма: подтверждение заказа, отправка, чеки",
        "Панель администратора для управления товарами и заказами без обращения к коду",
      ],
      process: [
        {
          title: "Разбор каталога и процесса покупки",
          description:
            "Мы прорабатываем ваш каталог товаров, категории, и точный процесс покупки — от просмотра до подтверждения.",
        },
        {
          title: "Дизайн",
          description:
            "Дизайн магазина, построенный вокруг того, как ваши конкретные товары реально выбирают и сравнивают.",
        },
        {
          title: "Разработка и настройка оплаты",
          description:
            "Разработка плюс интеграция со Stripe, протестированная на реальных транзакциях перед запуском.",
        },
        {
          title: "Запуск и передача",
          description:
            "Магазин публикуется, и вы получаете обзор панели администратора, чтобы не зависеть ни от кого в повседневном управлении.",
        },
      ],
      tech: "React, Stripe, Cloudflare Workers",
      timeline: "4–6 недель",
      faq: [
        {
          question: "Действительно ли обработка платежей безопасна?",
          answer:
            "Да — оплата проходит через Stripe, платёжный сервис, которым пользуются миллионы компаний по всему миру. Данные карты никогда напрямую не попадают на ваш сервер; Stripe полностью берёт этот уровень на себя, что также снимает с вас нагрузку по соблюдению требований к хранению данных карт.",
        },
        {
          question: "Смогу ли я сам управлять товарами после запуска?",
          answer:
            "Да. Вы получаете панель администратора для добавления товаров, обновления остатков, и просмотра заказов без необходимости привлекать разработчика для рутинных изменений. Структурные изменения (новые разделы, новые способы оплаты) выполняются по запросу в поддержку.",
        },
        {
          question: "Что, если у меня всего несколько товаров?",
          answer:
            "Полноценный интернет-магазин имеет смысл, когда есть реальный каталог для управления и заказы для обработки. Если вы продаёте один-два товара или единственное предложение, лендинг с прямой ссылкой на оплату через Stripe обычно быстрее и дешевле — это стоит обсудить перед тем, как решаться на полноценный магазин.",
        },
        {
          question: "Учитывается ли доставка и налоги?",
          answer:
            "Правила доставки и применимые налоговые ставки настраиваются в процессе разработки, исходя из ваших реальных зон доставки и налоговой ситуации — это прорабатывается уже на этапе разбора каталога и процесса, а не остаётся стандартным по умолчанию.",
        },
      ],
      ctaLabel: "Запросить смету",
    },
  },
};
