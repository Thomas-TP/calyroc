/**
 * Legal content is authored in French only and shown as-is on every locale,
 * with a translated notice (Dictionary.legalPageNotice) explaining that the
 * French version is authoritative. Rationale: Calyroc is a Swiss sole
 * proprietorship with no legal team -- publishing AI-translated legal text
 * in 6 languages without review would be a real compliance risk. Revisit
 * once professionally translated versions exist.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPage {
  title: string;
  updated: string;
  sections: LegalSection[];
}

export const mentionsLegales: LegalPage = {
  title: "Mentions légales",
  updated: "Dernière mise à jour : juillet 2026",
  sections: [
    {
      heading: "Éditeur du site",
      body: [
        "Calyroc est une entreprise individuelle exploitée par Thomas Prud'homme, non inscrite au registre du commerce (activité en dessous du seuil légal d'inscription obligatoire en Suisse).",
        "Domiciliation : Gland, Vaud, Suisse.",
        "Contact : hello@calyroc.com",
      ],
    },
    {
      heading: "Hébergement",
      body: [
        "Le site est hébergé par Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, États-Unis.",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      body: [
        "L'ensemble des contenus de ce site (textes, structure, design, code) est la propriété de Calyroc, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.",
        "Les réalisations présentées dans la section Réalisations restent la propriété de leurs clients ou de Calyroc selon les termes convenus lors de chaque projet.",
      ],
    },
    {
      heading: "Responsabilité",
      body: [
        "Calyroc s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exhaustivité ou l'exactitude permanente du contenu de ce site.",
      ],
    },
  ],
};

export const confidentialite: LegalPage = {
  title: "Politique de confidentialité",
  updated: "Dernière mise à jour : juillet 2026",
  sections: [
    {
      heading: "Cadre légal",
      body: [
        "Cette politique respecte la loi fédérale suisse sur la protection des données (nLPD) et, pour les visiteurs situés dans l'Union européenne, le Règlement général sur la protection des données (RGPD).",
      ],
    },
    {
      heading: "Données collectées",
      body: [
        "Formulaire de contact : nom, adresse email, budget indicatif et message — utilisés uniquement pour répondre à votre demande, jamais revendus ni utilisés à des fins marketing sans consentement explicite.",
        "Mesure d'audience : Cloudflare Web Analytics, une solution sans cookies ni identifiant personnel, utilisée uniquement pour comprendre la fréquentation globale du site.",
      ],
    },
    {
      heading: "Conservation",
      body: [
        "Les messages envoyés via le formulaire de contact sont conservés le temps nécessaire au traitement de votre demande, puis supprimés ou archivés dans le cadre d'une relation commerciale en cours.",
      ],
    },
    {
      heading: "Vos droits",
      body: [
        "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour l'exercer, écrivez à hello@calyroc.com.",
      ],
    },
  ],
};

export const cgv: LegalPage = {
  title: "Conditions générales de vente",
  updated: "Dernière mise à jour : juillet 2026",
  sections: [
    {
      heading: "Objet",
      body: [
        "Les présentes conditions régissent les prestations de création et de développement de sites web fournies par Calyroc (Thomas Prud'homme), à l'exclusion de toute autre condition non expressément acceptée par écrit.",
      ],
    },
    {
      heading: "Devis et acompte",
      body: [
        "Chaque projet fait l'objet d'un devis préalable détaillant le périmètre, le prix et le délai indicatif. Le démarrage du projet est confirmé par le versement d'un acompte de 30 à 50 % du montant total, réglé en ligne via Stripe.",
        "Le solde est facturé à la livraison, avant mise en ligne définitive.",
      ],
    },
    {
      heading: "Révisions et délais",
      body: [
        "Chaque pack inclut deux tours de révisions. Au-delà, les modifications supplémentaires sont facturées séparément, sur devis.",
        "Les délais annoncés sont indicatifs et dépendent de la réactivité du client dans la fourniture des contenus (textes, images, retours).",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      body: [
        "Le code source et les livrables développés spécifiquement pour le client lui sont cédés à la réception du paiement intégral. Calyroc conserve le droit de mentionner le projet dans son portfolio, sauf accord contraire écrit.",
      ],
    },
    {
      heading: "Résiliation",
      body: [
        "En cas d'annulation par le client après versement de l'acompte, celui-ci reste acquis à hauteur du travail déjà engagé.",
      ],
    },
    {
      heading: "Droit applicable",
      body: [
        "Les présentes conditions sont soumises au droit suisse. For juridique : Vaud, Suisse.",
      ],
    },
  ],
};
