import type { Dictionary } from "../dictionary";

export const fr: Dictionary = {
  meta: {
    title: "Calyroc — Studio web pour sites modernes et performants",
    description:
      "Sites vitrines et e-commerce sur-mesure, conçus et développés par Thomas Prud'homme. Stack moderne, livraison rapide, prix transparents.",
  },
  nav: {
    services: "Services",
    work: "Réalisations",
    pricing: "Tarifs",
    contact: "Contact",
  },
  home: {
    eyebrow: "Studio web basé en Suisse",
    heroTitle: "Des sites rapides, sur-mesure, livrés sans détour.",
    heroSubtitle:
      "Calyroc conçoit et développe des sites vitrines et e-commerce modernes pour indépendants, PME et startups — stack de pointe, contact direct, prix clairs.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Voir les réalisations",
  },
  footer: {
    tagline: "Studio web indépendant — Suisse & Europe.",
    legalLinks: {
      mentionsLegales: "Mentions légales",
      confidentialite: "Confidentialité",
      cgv: "CGV",
    },
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Un site pensé pour ton activité, pas un template recyclé.",
    subtitle:
      "Chaque prestation est cadrée en amont : ce qui est inclus, la stack utilisée, le délai indicatif. Pas de surprise à la facture.",
    ctaLabel: "Demander un devis",
    includesLabel: "Inclus",
    techLabel: "Stack",
    timelineLabel: "Délai indicatif",
    items: [
      {
        title: "Site vitrine",
        description:
          "Présenter ton activité, rassurer tes visiteurs et transformer les visites en demandes de contact.",
        includes: [
          "Design sur-mesure, pas de thème générique",
          "Responsive mobile/tablette/desktop",
          "Formulaire de contact intégré",
          "SEO technique de base",
        ],
        tech: "React, TypeScript, Cloudflare Workers",
        timeline: "1 à 2 semaines",
      },
      {
        title: "E-commerce",
        description: "Vendre en ligne avec un catalogue clair et un paiement fiable.",
        includes: [
          "Catalogue produits et gestion des stocks",
          "Paiement sécurisé via Stripe",
          "Espace client (commandes, historique)",
          "Emails transactionnels automatiques",
        ],
        tech: "React, Stripe, Cloudflare Workers",
        timeline: "4 à 6 semaines",
      },
      {
        title: "Refonte",
        description: "Moderniser un site existant sans perdre le référencement acquis.",
        includes: [
          "Audit du site actuel (perf, SEO, contenu)",
          "Migration du contenu existant",
          "Redirections propres pour préserver le SEO",
          "Nouveau design, même URL",
        ],
        tech: "Adapté à l'existant",
        timeline: "2 à 4 semaines",
      },
      {
        title: "Landing page",
        description: "Une page unique, focalisée sur une offre, un produit ou un lancement.",
        includes: [
          "Structure orientée conversion",
          "Formulaire ou lien d'action unique",
          "Optimisée pour le chargement instantané",
        ],
        tech: "React, Cloudflare Workers",
        timeline: "3 à 5 jours",
      },
      {
        title: "Maintenance",
        description: "Hébergement, mises à jour et petites évolutions, sans y penser.",
        includes: [
          "Hébergement Cloudflare inclus",
          "Mises à jour de sécurité",
          "Petites modifications de contenu",
          "Support par email",
        ],
        tech: "—",
        timeline: "Abonnement mensuel",
      },
      {
        title: "SEO technique",
        description: "Structure, performance et indexation pour être trouvé sur Google.",
        includes: [
          "Audit de performance (Core Web Vitals)",
          "Structure de données (JSON-LD)",
          "Sitemap et robots.txt",
          "Recommandations de contenu",
        ],
        tech: "Indépendant de la stack",
        timeline: "1 semaine",
      },
      {
        title: "Identité visuelle",
        description: "Un logo simple et une palette cohérente pour démarrer avec une image claire.",
        includes: [
          "Logo (formats web + impression)",
          "Palette de couleurs et typographies",
          "Déclinaisons favicon / réseaux sociaux",
        ],
        tech: "—",
        timeline: "1 semaine",
      },
    ],
  },
  workPage: {
    eyebrow: "Réalisations",
    title: "Des projets réels, pas des maquettes.",
    subtitle:
      "Deux projets construits et livrés en production, avec de vrais utilisateurs et un vrai trafic.",
    problemLabel: "Le contexte",
    stackLabel: "Stack",
    featuresLabel: "Fonctionnalités",
    resultsLabel: "Résultat",
    linkLabel: "Voir le site",
    ctaTitle: "Ton projet, le prochain sur cette page ?",
    ctaSubtitle: "Parlons de ce que tu veux construire.",
    ctaLabel: "Démarrer un projet",
    caseStudies: [
      {
        title: "Swiss3Design",
        tagline: "Plateforme e-commerce d'impression 3D multicolore",
        category: "E-commerce",
        problem:
          "Vendre des objets imprimés en 3D jusqu'à 4 couleurs, avec devis sur-mesure et paiement en ligne, depuis un atelier à Gland (VD).",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Cloudflare Workers"],
        features: [
          "Catalogue produits avec configurateur de couleurs",
          "Devis sur-mesure sur upload de fichier 3D",
          "Paiement Stripe en production (mode live)",
          "Comptes clients avec authentification à deux facteurs",
          "Dashboard admin pour la gestion complète de l'activité",
        ],
        results: [
          "Plateforme en production avec commandes et paiements réels",
          "Multilingue FR/DE/IT/EN",
        ],
        url: "https://swiss3design.ch",
      },
      {
        title: "Portfolio — thomastp.ch",
        tagline: "Portfolio personnel avec animations avancées",
        category: "Vitrine",
        problem:
          "Présenter un parcours et des projets techniques de façon mémorable, avec un niveau de finition capable de sortir du lot.",
        stack: ["React", "TypeScript", "GSAP", "Lenis", "Cloudflare Workers"],
        features: [
          "Hero en particules 3D animées",
          "Défilement fluide et animations au scroll",
          "Assistant conversationnel intégré",
          "Bilingue FR/EN",
        ],
        results: ["Score de performance élevé (Core Web Vitals)"],
        url: "https://thomastp.ch",
      },
    ],
  },
  pricingPage: {
    eyebrow: "Tarifs",
    title: "Des prix clairs, sans case cachée.",
    subtitle:
      "Trois formules de base pour démarrer vite, et un devis sur-mesure pour tout ce qui sort du cadre.",
    packs: [
      {
        name: "Essentiel",
        price: "590 CHF",
        priceNote: "environ 600 €",
        description: "Une vitrine professionnelle en une page, pour démarrer vite.",
        features: [
          "Site vitrine 1 page",
          "Design sur-mesure",
          "Responsive mobile/desktop",
          "Formulaire de contact",
          "2 langues (FR/EN)",
        ],
        highlighted: false,
      },
      {
        name: "Pro",
        price: "1'490 CHF",
        priceNote: "environ 1'550 €",
        description: "Un site multipage complet, prêt à convertir tes visiteurs.",
        features: [
          "Site multipage (5-6 pages)",
          "Jusqu'à 3 langues",
          "Animations soignées",
          "SEO technique inclus",
          "Blog en option",
        ],
        highlighted: true,
      },
      {
        name: "Sur-mesure",
        price: "Dès 2'900 CHF",
        priceNote: "devis personnalisé",
        description: "E-commerce, application web ou besoin spécifique.",
        features: [
          "E-commerce ou web app",
          "Dashboard admin",
          "Paiement en ligne intégré",
          "Intégrations complexes",
          "Jusqu'à 6 langues",
        ],
        highlighted: false,
      },
    ],
    maintenanceTitle: "Maintenance",
    maintenanceText:
      "35 CHF/mois : hébergement, mises à jour de sécurité et petites modifications de contenu, sans y penser.",
    termsTitle: "Comment ça se passe",
    terms: [
      "Acompte de 30 à 50 % à la commande, réglé en ligne",
      "Solde facturé à la livraison, avant mise en ligne",
      "2 tours de révisions inclus par pack",
      "Délai indicatif : 1-2 semaines (Essentiel) à 6 semaines (Sur-mesure)",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Le prix inclut-il le nom de domaine ?",
        answer:
          "Non, le nom de domaine (environ 15 CHF/an pour un .ch) et l'hébergement restent séparés, mais je peux tout superviser pour toi si tu préfères ne pas t'en occuper.",
      },
      {
        question: "Combien de révisions sont incluses ?",
        answer:
          "Deux tours de révisions par formule. Au-delà, les modifications supplémentaires sont facturées séparément.",
      },
      {
        question: "Et si mon projet ne rentre dans aucune formule ?",
        answer:
          "On en discute directement — la formule Sur-mesure existe justement pour les projets qui sortent du cadre standard.",
      },
      {
        question: "Comment se passe le paiement ?",
        answer:
          "Un acompte de 30 à 50 % à la commande via Stripe, puis le solde à la livraison, avant la mise en ligne définitive.",
      },
    ],
    ctaLabel: "Demander un devis",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Parlons de ton projet.",
    subtitle:
      "Décris ce que tu veux construire, je te réponds sous 48h avec un premier retour concret.",
    formName: "Nom",
    formEmail: "Email",
    formBudget: "Budget indicatif",
    formBudgetOptions: [
      "Essentiel (dès 590 CHF)",
      "Pro (dès 1'490 CHF)",
      "Sur-mesure (dès 2'900 CHF)",
      "Je ne sais pas encore",
    ],
    formMessage: "Ton projet",
    formMessagePlaceholder: "Décris ton activité, ce que tu veux construire, tes délais...",
    formSubmit: "Envoyer",
    formSubmitting: "Envoi en cours...",
    formSuccess: "Message envoyé — je te réponds sous 48h.",
    formError: "Une erreur est survenue. Écris-moi directement à hello@calyroc.com.",
    directTitle: "Ou écris-moi directement",
    responseTime: "Réponse sous 48h, en semaine.",
  },
  legalPageNotice:
    "Cette page légale n'existe qu'en français, version juridiquement valable de référence.",
};
