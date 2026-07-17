import type { Locale } from "@/i18n/locales";
import type { LegalPage } from "./types";

/**
 * French is the legally authoritative version (see Dictionary.legalPageNotice,
 * shown on every non-French locale). Translations aim for equivalent legal
 * meaning, not a literal word-for-word rendering.
 */
export const confidentialite: Record<Locale, LegalPage> = {
  fr: {
    title: "Politique de confidentialité",
    metaDescription:
      "Politique de confidentialité de Calyroc : données collectées, sous-traitants, conservation et vos droits (nLPD, RGPD, UK GDPR).",
    updated: "Dernière mise à jour : juillet 2026",
    sections: [
      {
        heading: "Cadre légal",
        body: [
          "La présente politique décrit comment Calyroc (voir les mentions légales) collecte, utilise et protège les données personnelles des visiteurs de ce site. Elle est rédigée conformément à la loi fédérale suisse sur la protection des données (nLPD, en vigueur depuis le 1er septembre 2023) et, pour les visiteurs situés dans l'Union européenne ou au Royaume-Uni, au Règlement général sur la protection des données (RGPD) et au UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Responsable du traitement",
        body: [
          "Le responsable du traitement des données collectées via ce site est Thomas Prud'homme, exploitant l'entreprise individuelle Calyroc. Ses coordonnées complètes figurent dans les mentions légales.",
        ],
      },
      {
        heading: "Finalités et base légale",
        body: [
          "Calyroc traite des données personnelles pour les finalités suivantes, chacune reposant sur une base légale distincte :",
          "Répondre à une demande de contact ou établir un devis : mesures précontractuelles prises à la demande de la personne concernée.",
          "Exécuter un projet accepté par un client : exécution du contrat conclu avec ce client.",
          "Mesurer la fréquentation du site de façon anonyme : intérêt légitime à comprendre et améliorer le site.",
          "Faire fonctionner l'assistant conversationnel Ask Calyroc : intérêt légitime à proposer un outil d'aide à la décision, utilisé uniquement à l'initiative du visiteur.",
        ],
      },
      {
        heading: "Données collectées",
        body: [
          "Formulaire de contact : nom, adresse email, budget indicatif et message — utilisés uniquement pour répondre à votre demande, jamais revendus ni utilisés à des fins marketing sans consentement explicite.",
          "Mesure d'audience : Umami Cloud, une solution sans cookie ni identifiant personnel, utilisée uniquement pour comprendre la fréquentation globale du site (pages vues, provenance générale, type d'appareil).",
          "Assistant conversationnel (Ask Calyroc) : les messages échangés avec l'assistant sont traités par l'intelligence artificielle pour générer une réponse, mais ne sont pas conservés au-delà de la session de conversation.",
        ],
      },
      {
        heading: "Destinataires, sous-traitants et transferts internationaux",
        body: [
          "Ce site fait appel aux prestataires suivants pour fonctionner, chacun agissant comme sous-traitant au sens de la nLPD et du RGPD :",
          "Cloudflare, Inc. (États-Unis) : hébergement du site, protection anti-spam du formulaire de contact (Turnstile) et infrastructure d'intelligence artificielle de l'assistant conversationnel.",
          "Stripe Payments Europe, Ltd. : traitement des paiements en ligne (acomptes et soldes de projet).",
          "Resend (États-Unis) : envoi des emails transactionnels (confirmations, notifications, reçus de paiement).",
          "Umami Cloud : mesure d'audience anonyme, sans cookie.",
          "Certains de ces prestataires traitent des données en dehors de la Suisse et de l'Espace économique européen, notamment aux États-Unis. Ces transferts s'appuient sur les clauses contractuelles types de la Commission européenne ou un mécanisme de conformité équivalent proposé par chaque prestataire.",
        ],
      },
      {
        heading: "Durée de conservation",
        body: [
          "Les données transmises via le formulaire de contact sont conservées le temps nécessaire au traitement de votre demande, puis pendant 12 mois supplémentaires afin de permettre un éventuel suivi, sauf si une relation commerciale se poursuit au-delà de ce délai.",
          "Les documents liés à la facturation et à la comptabilité sont conservés 10 ans, conformément à l'art. 958f du Code des obligations suisse.",
          "Les messages échangés avec l'assistant conversationnel ne sont pas conservés au-delà de la session de conversation en cours.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Conformément à la nLPD, au RGPD et au UK GDPR, vous disposez des droits suivants sur vos données personnelles : accès, rectification, effacement (dans les limites des durées de conservation légales mentionnées ci-dessus), limitation du traitement, opposition au traitement, portabilité des données, et retrait du consentement lorsque le traitement en dépend.",
          "Pour exercer l'un de ces droits, écrivez à hello@calyroc.com. Vous disposez également d'un droit de réclamation auprès de l'autorité de protection des données compétente : le Préposé fédéral à la protection des données et à la transparence (PFPDT, edoeb.admin.ch) en Suisse, l'autorité de protection des données de votre pays de résidence si vous êtes situé dans l'Union européenne, ou l'Information Commissioner's Office (ICO, ico.org.uk) si vous êtes situé au Royaume-Uni.",
        ],
      },
      {
        heading: "Décisions automatisées",
        body: [
          "Calyroc ne recourt à aucune prise de décision entièrement automatisée produisant des effets juridiques ou vous affectant de manière significative, y compris le profilage.",
        ],
      },
      {
        heading: "Représentant dans l'Union européenne et au Royaume-Uni",
        body: [
          "Calyroc est une entreprise individuelle suisse sans établissement dans l'Union européenne ni au Royaume-Uni. Le traitement de données de résidents de l'UE ou du Royaume-Uni par ce site reste ponctuel, ne porte sur aucune catégorie particulière de données et ne présente pas de risque élevé pour les droits et libertés des personnes concernées : aucun représentant n'a donc été désigné à ce jour au titre de l'art. 27 du RGPD ou de son équivalent britannique. Cette situation sera réexaminée si l'activité de Calyroc évolue.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Ce site n'utilise aucun cookie de mesure d'audience ou publicitaire — la solution d'analytics employée (Umami) fonctionne sans cookie ni identifiant personnel. Aucun bandeau de consentement n'est donc affiché.",
        ],
      },
      {
        heading: "Sécurité",
        body: [
          "Calyroc met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données : chiffrement des échanges (HTTPS), accès aux données limité à Thomas Prud'homme, et recours à des prestataires eux-mêmes soumis à des obligations de sécurité contractuelles.",
        ],
      },
      {
        heading: "Modification de la présente politique",
        body: [
          "Cette politique peut être mise à jour pour refléter l'évolution du site ou de la réglementation applicable. La date de dernière mise à jour figure en haut de cette page.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    metaDescription:
      "Calyroc's privacy policy: data collected, processors, retention periods and your rights (nLPD, GDPR, UK GDPR).",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "Legal framework",
        body: [
          "This policy describes how Calyroc (see the legal notice) collects, uses and protects the personal data of this site's visitors. It is written in accordance with the Swiss Federal Act on Data Protection (revFADP/nLPD, in force since 1 September 2023) and, for visitors located in the European Union or the United Kingdom, the General Data Protection Regulation (GDPR) and the UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Data controller",
        body: [
          "The controller responsible for data collected through this site is Thomas Prud'homme, operating the sole proprietorship Calyroc. Full contact details are in the legal notice.",
        ],
      },
      {
        heading: "Purposes and legal basis",
        body: [
          "Calyroc processes personal data for the following purposes, each resting on a distinct legal basis:",
          "Responding to a contact request or preparing a quote: pre-contractual steps taken at the request of the data subject.",
          "Delivering a project accepted by a client: performance of the contract concluded with that client.",
          "Measuring site traffic anonymously: legitimate interest in understanding and improving the site.",
          "Running the Ask Calyroc conversational assistant: legitimate interest in offering a decision-support tool, used only at the visitor's own initiative.",
        ],
      },
      {
        heading: "Data collected",
        body: [
          "Contact form: name, email address, indicative budget and message — used only to respond to your request, never sold or used for marketing purposes without explicit consent.",
          "Traffic measurement: Umami Cloud, a cookieless solution with no personal identifier, used only to understand overall site traffic (page views, general origin, device type).",
          "Conversational assistant (Ask Calyroc): messages exchanged with the assistant are processed by AI to generate a reply, but are not retained beyond the current conversation session.",
        ],
      },
      {
        heading: "Recipients, processors and international transfers",
        body: [
          "This site relies on the following providers to operate, each acting as a processor within the meaning of the nLPD and the GDPR:",
          "Cloudflare, Inc. (United States): site hosting, anti-spam protection for the contact form (Turnstile), and the AI infrastructure behind the conversational assistant.",
          "Stripe Payments Europe, Ltd.: online payment processing (project deposits and balances).",
          "Resend (United States): transactional emails (confirmations, notifications, payment receipts).",
          "Umami Cloud: anonymous, cookieless traffic measurement.",
          "Some of these providers process data outside Switzerland and the European Economic Area, notably in the United States. These transfers rely on the European Commission's Standard Contractual Clauses or an equivalent compliance mechanism offered by each provider.",
        ],
      },
      {
        heading: "Retention period",
        body: [
          "Data submitted through the contact form is kept for as long as necessary to handle your request, then for a further 12 months to allow for possible follow-up, unless a business relationship continues beyond that period.",
          "Invoicing and accounting records are kept for 10 years, in accordance with art. 958f of the Swiss Code of Obligations.",
          "Messages exchanged with the conversational assistant are not retained beyond the current conversation session.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under the nLPD, the GDPR and the UK GDPR, you have the following rights over your personal data: access, rectification, erasure (subject to the statutory retention periods mentioned above), restriction of processing, objection to processing, data portability, and withdrawal of consent where processing relies on it.",
          "To exercise any of these rights, write to hello@calyroc.com. You also have the right to lodge a complaint with the competent data protection authority: the Federal Data Protection and Information Commissioner (FDPIC, edoeb.admin.ch) in Switzerland, the data protection authority of your country of residence if you are located in the European Union, or the Information Commissioner's Office (ICO, ico.org.uk) if you are located in the United Kingdom.",
        ],
      },
      {
        heading: "Automated decision-making",
        body: [
          "Calyroc does not carry out any fully automated decision-making that produces legal effects or similarly significantly affects you, including profiling.",
        ],
      },
      {
        heading: "Representative in the European Union and the United Kingdom",
        body: [
          "Calyroc is a Swiss sole proprietorship with no establishment in the European Union or the United Kingdom. Its processing of EU or UK residents' data through this site remains occasional, does not involve any special category of data, and is unlikely to result in a high risk to data subjects' rights and freedoms: no representative has therefore been designated to date under Art. 27 GDPR or its UK equivalent. This will be reassessed if Calyroc's activity evolves.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "This site uses no audience-measurement or advertising cookies — the analytics solution used (Umami) works without cookies or personal identifiers. No consent banner is therefore displayed.",
        ],
      },
      {
        heading: "Security",
        body: [
          "Calyroc implements reasonable technical and organizational measures to protect your data: encrypted connections (HTTPS), data access limited to Thomas Prud'homme, and reliance on providers that are themselves bound by contractual security obligations.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "This policy may be updated to reflect changes to the site or to applicable regulation. The last-updated date appears at the top of this page.",
        ],
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    metaDescription:
      "Política de privacidad de Calyroc: datos recopilados, encargados del tratamiento, conservación y sus derechos (nLPD, RGPD, UK GDPR).",
    updated: "Última actualización: julio de 2026",
    sections: [
      {
        heading: "Marco legal",
        body: [
          "Esta política describe cómo Calyroc (véase el aviso legal) recopila, utiliza y protege los datos personales de las personas que visitan este sitio. Se ha redactado conforme a la ley federal suiza de protección de datos (nLPD, en vigor desde el 1 de septiembre de 2023) y, para las personas visitantes situadas en la Unión Europea o el Reino Unido, al Reglamento General de Protección de Datos (RGPD) y al UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Responsable del tratamiento",
        body: [
          "El responsable del tratamiento de los datos recopilados a través de este sitio es Thomas Prud'homme, titular de la empresa individual Calyroc. Sus datos de contacto completos figuran en el aviso legal.",
        ],
      },
      {
        heading: "Finalidades y base legal",
        body: [
          "Calyroc trata datos personales para las siguientes finalidades, cada una basada en un fundamento legal distinto:",
          "Responder a una solicitud de contacto o elaborar un presupuesto: medidas precontractuales adoptadas a petición del interesado.",
          "Ejecutar un proyecto aceptado por un cliente: ejecución del contrato celebrado con dicho cliente.",
          "Medir la audiencia del sitio de forma anónima: interés legítimo en comprender y mejorar el sitio.",
          "Hacer funcionar el asistente conversacional Ask Calyroc: interés legítimo en ofrecer una herramienta de ayuda a la decisión, utilizada únicamente por iniciativa de la persona visitante.",
        ],
      },
      {
        heading: "Datos recopilados",
        body: [
          "Formulario de contacto: nombre, dirección de correo electrónico, presupuesto orientativo y mensaje — utilizados únicamente para responder a su solicitud, nunca vendidos ni utilizados con fines comerciales sin consentimiento explícito.",
          "Medición de audiencia: Umami Cloud, una solución sin cookies ni identificador personal, utilizada únicamente para comprender la afluencia global del sitio (páginas vistas, procedencia general, tipo de dispositivo).",
          "Asistente conversacional (Ask Calyroc): los mensajes intercambiados con el asistente son procesados por inteligencia artificial para generar una respuesta, pero no se conservan más allá de la sesión de conversación en curso.",
        ],
      },
      {
        heading: "Destinatarios, encargados del tratamiento y transferencias internacionales",
        body: [
          "Este sitio recurre a los siguientes proveedores para funcionar, cada uno actuando como encargado del tratamiento en el sentido de la nLPD y del RGPD:",
          "Cloudflare, Inc. (Estados Unidos): alojamiento del sitio, protección antispam del formulario de contacto (Turnstile) e infraestructura de inteligencia artificial del asistente conversacional.",
          "Stripe Payments Europe, Ltd.: procesamiento de pagos en línea (anticipos y saldos de proyecto).",
          "Resend (Estados Unidos): envío de correos electrónicos transaccionales (confirmaciones, notificaciones, recibos de pago).",
          "Umami Cloud: medición de audiencia anónima, sin cookies.",
          "Algunos de estos proveedores tratan datos fuera de Suiza y del Espacio Económico Europeo, en particular en Estados Unidos. Estas transferencias se basan en las cláusulas contractuales tipo de la Comisión Europea o en un mecanismo de conformidad equivalente ofrecido por cada proveedor.",
        ],
      },
      {
        heading: "Plazo de conservación",
        body: [
          "Los datos enviados a través del formulario de contacto se conservan durante el tiempo necesario para tramitar su solicitud, y posteriormente durante 12 meses adicionales para permitir un eventual seguimiento, salvo que la relación comercial continúe más allá de ese plazo.",
          "Los documentos de facturación y contabilidad se conservan durante 10 años, conforme al art. 958f del Código suizo de Obligaciones.",
          "Los mensajes intercambiados con el asistente conversacional no se conservan más allá de la sesión de conversación en curso.",
        ],
      },
      {
        heading: "Sus derechos",
        body: [
          "Conforme a la nLPD, al RGPD y al UK GDPR, usted dispone de los siguientes derechos sobre sus datos personales: acceso, rectificación, supresión (dentro de los plazos de conservación legales mencionados anteriormente), limitación del tratamiento, oposición al tratamiento, portabilidad de los datos, y retirada del consentimiento cuando el tratamiento dependa de este.",
          "Para ejercer cualquiera de estos derechos, escriba a hello@calyroc.com. También tiene derecho a presentar una reclamación ante la autoridad de protección de datos competente: el Encargado Federal de Protección de Datos y Transparencia (PFPDT, edoeb.admin.ch) en Suiza, la autoridad de protección de datos de su país de residencia si se encuentra en la Unión Europea, o la Information Commissioner's Office (ICO, ico.org.uk) si se encuentra en el Reino Unido.",
        ],
      },
      {
        heading: "Decisiones automatizadas",
        body: [
          "Calyroc no recurre a ninguna toma de decisiones totalmente automatizada que produzca efectos jurídicos o le afecte significativamente de forma similar, incluida la elaboración de perfiles.",
        ],
      },
      {
        heading: "Representante en la Unión Europea y el Reino Unido",
        body: [
          "Calyroc es una empresa individual suiza sin establecimiento en la Unión Europea ni en el Reino Unido. El tratamiento de datos de residentes de la UE o del Reino Unido a través de este sitio sigue siendo ocasional, no afecta a ninguna categoría especial de datos y no presenta un riesgo elevado para los derechos y libertades de las personas interesadas: por ello, no se ha designado ningún representante hasta la fecha en virtud del art. 27 del RGPD ni de su equivalente británico. Esta situación se reevaluará si la actividad de Calyroc evoluciona.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Este sitio no utiliza cookies de medición de audiencia ni publicitarias — la solución de analítica empleada (Umami) funciona sin cookies ni identificadores personales. Por ello, no se muestra ningún aviso de consentimiento.",
        ],
      },
      {
        heading: "Seguridad",
        body: [
          "Calyroc aplica medidas técnicas y organizativas razonables para proteger sus datos: cifrado de las comunicaciones (HTTPS), acceso a los datos limitado a Thomas Prud'homme, y recurso a proveedores sujetos a su vez a obligaciones contractuales de seguridad.",
        ],
      },
      {
        heading: "Modificaciones de esta política",
        body: [
          "Esta política puede actualizarse para reflejar la evolución del sitio o de la normativa aplicable. La fecha de la última actualización figura en la parte superior de esta página.",
        ],
      },
    ],
  },
  it: {
    title: "Informativa sulla privacy",
    metaDescription:
      "Informativa sulla privacy di Calyroc: dati raccolti, responsabili del trattamento, conservazione e i suoi diritti (nLPD, RGPD, UK GDPR).",
    updated: "Ultimo aggiornamento: luglio 2026",
    sections: [
      {
        heading: "Quadro giuridico",
        body: [
          "La presente informativa descrive come Calyroc (si veda le note legali) raccoglie, utilizza e protegge i dati personali dei visitatori di questo sito. È redatta in conformità alla legge federale svizzera sulla protezione dei dati (nLPD, in vigore dal 1° settembre 2023) e, per i visitatori situati nell'Unione Europea o nel Regno Unito, al Regolamento generale sulla protezione dei dati (RGPD) e al UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Titolare del trattamento",
        body: [
          "Il titolare del trattamento dei dati raccolti tramite questo sito è Thomas Prud'homme, titolare della ditta individuale Calyroc. I suoi recapiti completi sono indicati nelle note legali.",
        ],
      },
      {
        heading: "Finalità e base giuridica",
        body: [
          "Calyroc tratta i dati personali per le seguenti finalità, ciascuna basata su una diversa base giuridica:",
          "Rispondere a una richiesta di contatto o elaborare un preventivo: misure precontrattuali adottate su richiesta dell'interessato.",
          "Realizzare un progetto accettato da un cliente: esecuzione del contratto stipulato con tale cliente.",
          "Misurare il traffico del sito in forma anonima: legittimo interesse a comprendere e migliorare il sito.",
          "Far funzionare l'assistente conversazionale Ask Calyroc: legittimo interesse a offrire uno strumento di supporto decisionale, utilizzato solo su iniziativa del visitatore.",
        ],
      },
      {
        heading: "Dati raccolti",
        body: [
          "Modulo di contatto: nome, indirizzo email, budget indicativo e messaggio — utilizzati esclusivamente per rispondere alla richiesta, mai rivenduti né utilizzati a fini di marketing senza consenso esplicito.",
          "Misurazione del traffico: Umami Cloud, una soluzione priva di cookie e di identificatori personali, utilizzata solo per comprendere il traffico complessivo del sito (pagine visualizzate, provenienza generale, tipo di dispositivo).",
          "Assistente conversazionale (Ask Calyroc): i messaggi scambiati con l'assistente sono elaborati dall'intelligenza artificiale per generare una risposta, ma non vengono conservati oltre la sessione di conversazione in corso.",
        ],
      },
      {
        heading: "Destinatari, responsabili del trattamento e trasferimenti internazionali",
        body: [
          "Questo sito si avvale dei seguenti fornitori per funzionare, ciascuno operante come responsabile del trattamento ai sensi della nLPD e del RGPD:",
          "Cloudflare, Inc. (Stati Uniti): hosting del sito, protezione antispam del modulo di contatto (Turnstile) e infrastruttura di intelligenza artificiale dell'assistente conversazionale.",
          "Stripe Payments Europe, Ltd.: elaborazione dei pagamenti online (acconti e saldi di progetto).",
          "Resend (Stati Uniti): invio di email transazionali (conferme, notifiche, ricevute di pagamento).",
          "Umami Cloud: misurazione anonima del traffico, senza cookie.",
          "Alcuni di questi fornitori trattano dati al di fuori della Svizzera e dello Spazio Economico Europeo, in particolare negli Stati Uniti. Tali trasferimenti si basano sulle clausole contrattuali tipo della Commissione europea o su un meccanismo di conformità equivalente offerto da ciascun fornitore.",
        ],
      },
      {
        heading: "Periodo di conservazione",
        body: [
          "I dati trasmessi tramite il modulo di contatto sono conservati per il tempo necessario a gestire la richiesta, e successivamente per ulteriori 12 mesi per consentire un eventuale seguito, salvo che il rapporto commerciale prosegua oltre tale termine.",
          "I documenti relativi alla fatturazione e alla contabilità sono conservati per 10 anni, in conformità all'art. 958f del Codice svizzero delle obbligazioni.",
          "I messaggi scambiati con l'assistente conversazionale non vengono conservati oltre la sessione di conversazione in corso.",
        ],
      },
      {
        heading: "I suoi diritti",
        body: [
          "In conformità alla nLPD, al RGPD e al UK GDPR, lei dispone dei seguenti diritti sui propri dati personali: accesso, rettifica, cancellazione (nei limiti dei periodi di conservazione legali sopra indicati), limitazione del trattamento, opposizione al trattamento, portabilità dei dati e revoca del consenso qualora il trattamento si basi su di esso.",
          "Per esercitare uno di questi diritti, scriva a hello@calyroc.com. Ha inoltre diritto di presentare reclamo all'autorità di protezione dei dati competente: l'Incaricato federale della protezione dei dati e della trasparenza (IFPDT, edoeb.admin.ch) in Svizzera, l'autorità di protezione dei dati del suo paese di residenza se si trova nell'Unione Europea, oppure l'Information Commissioner's Office (ICO, ico.org.uk) se si trova nel Regno Unito.",
        ],
      },
      {
        heading: "Decisioni automatizzate",
        body: [
          "Calyroc non ricorre ad alcun processo decisionale interamente automatizzato che produca effetti giuridici o che la riguardi in modo significativo, compresa la profilazione.",
        ],
      },
      {
        heading: "Rappresentante nell'Unione Europea e nel Regno Unito",
        body: [
          "Calyroc è una ditta individuale svizzera priva di stabilimento nell'Unione Europea e nel Regno Unito. Il trattamento di dati di residenti UE o del Regno Unito tramite questo sito resta occasionale, non riguarda categorie particolari di dati e non presenta un rischio elevato per i diritti e le libertà degli interessati: non è stato pertanto designato alcun rappresentante ai sensi dell'art. 27 del RGPD o del suo equivalente britannico. Questa situazione sarà riesaminata in caso di evoluzione dell'attività di Calyroc.",
        ],
      },
      {
        heading: "Cookie",
        body: [
          "Questo sito non utilizza cookie di misurazione del traffico o pubblicitari — la soluzione di analytics utilizzata (Umami) funziona senza cookie né identificatori personali. Non viene pertanto mostrato alcun banner di consenso.",
        ],
      },
      {
        heading: "Sicurezza",
        body: [
          "Calyroc adotta misure tecniche e organizzative ragionevoli per proteggere i suoi dati: cifratura delle comunicazioni (HTTPS), accesso ai dati limitato a Thomas Prud'homme e ricorso a fornitori a loro volta soggetti a obblighi contrattuali di sicurezza.",
        ],
      },
      {
        heading: "Modifiche alla presente informativa",
        body: [
          "Questa informativa può essere aggiornata per riflettere l'evoluzione del sito o della normativa applicabile. La data dell'ultimo aggiornamento è indicata in cima a questa pagina.",
        ],
      },
    ],
  },
  de: {
    title: "Datenschutzerklärung",
    metaDescription:
      "Datenschutzerklärung von Calyroc: erhobene Daten, Auftragsverarbeiter, Aufbewahrung und Ihre Rechte (nDSG, DSGVO, UK GDPR).",
    updated: "Letzte Aktualisierung: Juli 2026",
    sections: [
      {
        heading: "Rechtsgrundlage",
        body: [
          "Diese Erklärung beschreibt, wie Calyroc (siehe Impressum) die personenbezogenen Daten der Besucherinnen und Besucher dieser Website erhebt, verwendet und schützt. Sie wurde in Übereinstimmung mit dem revidierten Schweizer Bundesgesetz über den Datenschutz (nDSG/nLPD, in Kraft seit 1. September 2023) sowie, für Besuchende aus der Europäischen Union oder dem Vereinigten Königreich, der Datenschutz-Grundverordnung (DSGVO) und dem UK GDPR (Data Protection Act 2018) verfasst.",
        ],
      },
      {
        heading: "Verantwortlicher",
        body: [
          "Verantwortlicher für die über diese Website erhobenen Daten ist Thomas Prud'homme, Inhaber des Einzelunternehmens Calyroc. Vollständige Kontaktangaben finden sich im Impressum.",
        ],
      },
      {
        heading: "Zwecke und Rechtsgrundlage der Verarbeitung",
        body: [
          "Calyroc verarbeitet personenbezogene Daten zu folgenden Zwecken, die jeweils auf einer eigenen Rechtsgrundlage beruhen:",
          "Beantwortung einer Kontaktanfrage oder Erstellung eines Angebots: vorvertragliche Massnahmen auf Wunsch der betroffenen Person.",
          "Durchführung eines von einer Kundschaft angenommenen Projekts: Erfüllung des mit dieser Kundschaft geschlossenen Vertrags.",
          "Anonyme Messung der Websitenutzung: berechtigtes Interesse am Verständnis und an der Verbesserung der Website.",
          "Betrieb des Konversationsassistenten Ask Calyroc: berechtigtes Interesse daran, ein Entscheidungshilfe-Tool anzubieten, das nur auf eigene Initiative der besuchenden Person genutzt wird.",
        ],
      },
      {
        heading: "Erhobene Daten",
        body: [
          "Kontaktformular: Name, E-Mail-Adresse, ungefähres Budget und Nachricht — ausschliesslich zur Beantwortung Ihrer Anfrage verwendet, niemals verkauft oder ohne ausdrückliche Einwilligung für Marketingzwecke genutzt.",
          "Reichweitenmessung: Umami Cloud, eine Lösung ohne Cookies und ohne persönliche Kennung, ausschliesslich zum Verständnis der allgemeinen Websitenutzung (Seitenaufrufe, allgemeine Herkunft, Gerätetyp).",
          "Konversationsassistent (Ask Calyroc): Die mit dem Assistenten ausgetauschten Nachrichten werden von der KI verarbeitet, um eine Antwort zu generieren, jedoch nicht über die laufende Konversation hinaus gespeichert.",
        ],
      },
      {
        heading: "Empfänger, Auftragsverarbeiter und internationale Datenübermittlungen",
        body: [
          "Diese Website nutzt folgende Anbieter für ihren Betrieb, die jeweils als Auftragsverarbeiter im Sinne des nDSG und der DSGVO handeln:",
          "Cloudflare, Inc. (USA): Hosting der Website, Anti-Spam-Schutz des Kontaktformulars (Turnstile) und KI-Infrastruktur des Konversationsassistenten.",
          "Stripe Payments Europe, Ltd.: Abwicklung von Online-Zahlungen (Anzahlungen und Restbeträge von Projekten).",
          "Resend (USA): Versand transaktionsbezogener E-Mails (Bestätigungen, Benachrichtigungen, Zahlungsbelege).",
          "Umami Cloud: anonyme Reichweitenmessung ohne Cookies.",
          "Einige dieser Anbieter verarbeiten Daten ausserhalb der Schweiz und des Europäischen Wirtschaftsraums, insbesondere in den USA. Diese Übermittlungen stützen sich auf die Standardvertragsklauseln der Europäischen Kommission oder einen gleichwertigen Konformitätsmechanismus des jeweiligen Anbieters.",
        ],
      },
      {
        heading: "Aufbewahrungsdauer",
        body: [
          "Über das Kontaktformular übermittelte Daten werden so lange aufbewahrt, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist, danach für weitere 12 Monate zur Ermöglichung einer allfälligen Nachverfolgung, sofern nicht eine Geschäftsbeziehung über diesen Zeitraum hinaus fortbesteht.",
          "Rechnungs- und Buchhaltungsunterlagen werden gemäss Art. 958f des Schweizerischen Obligationenrechts 10 Jahre lang aufbewahrt.",
          "Die mit dem Konversationsassistenten ausgetauschten Nachrichten werden nicht über die laufende Konversation hinaus gespeichert.",
        ],
      },
      {
        heading: "Ihre Rechte",
        body: [
          "Gemäss nDSG, DSGVO und UK GDPR haben Sie folgende Rechte an Ihren personenbezogenen Daten: Auskunft, Berichtigung, Löschung (im Rahmen der oben genannten gesetzlichen Aufbewahrungsfristen), Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Datenübertragbarkeit sowie Widerruf der Einwilligung, sofern die Verarbeitung darauf beruht.",
          "Zur Ausübung dieser Rechte schreiben Sie an hello@calyroc.com. Sie haben zudem das Recht, bei der zuständigen Datenschutzbehörde Beschwerde einzureichen: dem Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB, edoeb.admin.ch) in der Schweiz, der Datenschutzbehörde Ihres Wohnsitzlandes, falls Sie sich in der Europäischen Union befinden, oder dem Information Commissioner's Office (ICO, ico.org.uk), falls Sie sich im Vereinigten Königreich befinden.",
        ],
      },
      {
        heading: "Automatisierte Entscheidungen",
        body: [
          "Calyroc trifft keine ausschliesslich automatisierten Entscheidungen, die rechtliche Wirkung entfalten oder Sie in ähnlich erheblicher Weise beeinträchtigen, einschliesslich Profiling.",
        ],
      },
      {
        heading: "Vertretung in der Europäischen Union und im Vereinigten Königreich",
        body: [
          "Calyroc ist ein Schweizer Einzelunternehmen ohne Niederlassung in der Europäischen Union oder im Vereinigten Königreich. Die Verarbeitung von Daten von Personen mit Wohnsitz in der EU oder im UK über diese Website bleibt gelegentlich, betrifft keine besonderen Datenkategorien und birgt kein hohes Risiko für die Rechte und Freiheiten der betroffenen Personen: Es wurde daher bislang keine Vertretung nach Art. 27 DSGVO oder dessen britischem Äquivalent bestellt. Diese Einschätzung wird bei einer Weiterentwicklung der Geschäftstätigkeit von Calyroc überprüft.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Diese Website verwendet keine Reichweitenmessungs- oder Werbe-Cookies — die eingesetzte Analytics-Lösung (Umami) funktioniert ohne Cookies und ohne persönliche Kennung. Es wird daher kein Consent-Banner angezeigt.",
        ],
      },
      {
        heading: "Sicherheit",
        body: [
          "Calyroc trifft angemessene technische und organisatorische Massnahmen zum Schutz Ihrer Daten: verschlüsselte Verbindungen (HTTPS), auf Thomas Prud'homme beschränkter Datenzugriff sowie der Einsatz von Anbietern, die selbst vertraglichen Sicherheitspflichten unterliegen.",
        ],
      },
      {
        heading: "Änderungen dieser Erklärung",
        body: [
          "Diese Erklärung kann aktualisiert werden, um Änderungen der Website oder der anwendbaren Rechtslage widerzuspiegeln. Das Datum der letzten Aktualisierung steht oben auf dieser Seite.",
        ],
      },
    ],
  },
  pt: {
    title: "Política de privacidade",
    metaDescription:
      "Política de privacidade da Calyroc: dados recolhidos, subcontratantes, conservação e os seus direitos (nLPD, RGPD, UK GDPR).",
    updated: "Última atualização: julho de 2026",
    sections: [
      {
        heading: "Enquadramento legal",
        body: [
          "Esta política descreve como a Calyroc (ver aviso legal) recolhe, utiliza e protege os dados pessoais das pessoas que visitam este site. É redigida em conformidade com a lei federal suíça de proteção de dados (nLPD, em vigor desde 1 de setembro de 2023) e, para as pessoas visitantes situadas na União Europeia ou no Reino Unido, com o Regulamento Geral sobre a Proteção de Dados (RGPD) e o UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Responsável pelo tratamento",
        body: [
          "O responsável pelo tratamento dos dados recolhidos através deste site é Thomas Prud'homme, titular da empresa individual Calyroc. Os seus dados de contacto completos constam do aviso legal.",
        ],
      },
      {
        heading: "Finalidades e base legal",
        body: [
          "A Calyroc trata dados pessoais para as seguintes finalidades, cada uma assente numa base legal distinta:",
          "Responder a um pedido de contacto ou elaborar um orçamento: diligências pré-contratuais realizadas a pedido do titular dos dados.",
          "Executar um projeto aceite por um cliente: execução do contrato celebrado com esse cliente.",
          "Medir a audiência do site de forma anónima: interesse legítimo em compreender e melhorar o site.",
          "Fazer funcionar o assistente de conversação Ask Calyroc: interesse legítimo em disponibilizar uma ferramenta de apoio à decisão, utilizada apenas por iniciativa da pessoa visitante.",
        ],
      },
      {
        heading: "Dados recolhidos",
        body: [
          "Formulário de contacto: nome, endereço de email, orçamento indicativo e mensagem — utilizados exclusivamente para responder ao seu pedido, nunca vendidos nem utilizados para fins de marketing sem consentimento explícito.",
          "Medição de audiência: Umami Cloud, uma solução sem cookies nem identificador pessoal, utilizada apenas para compreender a afluência global do site (páginas vistas, origem geral, tipo de dispositivo).",
          "Assistente de conversação (Ask Calyroc): as mensagens trocadas com o assistente são tratadas por inteligência artificial para gerar uma resposta, mas não são conservadas para além da sessão de conversa em curso.",
        ],
      },
      {
        heading: "Destinatários, subcontratantes e transferências internacionais",
        body: [
          "Este site recorre aos seguintes fornecedores para funcionar, cada um atuando como subcontratante na aceção da nLPD e do RGPD:",
          "Cloudflare, Inc. (Estados Unidos): alojamento do site, proteção antispam do formulário de contacto (Turnstile) e infraestrutura de inteligência artificial do assistente de conversação.",
          "Stripe Payments Europe, Ltd.: processamento de pagamentos online (sinais e saldos de projeto).",
          "Resend (Estados Unidos): envio de emails transacionais (confirmações, notificações, recibos de pagamento).",
          "Umami Cloud: medição de audiência anónima, sem cookies.",
          "Alguns destes fornecedores tratam dados fora da Suíça e do Espaço Económico Europeu, nomeadamente nos Estados Unidos. Estas transferências assentam nas cláusulas contratuais-tipo da Comissão Europeia ou num mecanismo de conformidade equivalente oferecido por cada fornecedor.",
        ],
      },
      {
        heading: "Prazo de conservação",
        body: [
          "Os dados enviados através do formulário de contacto são conservados pelo tempo necessário ao tratamento do seu pedido, e depois durante mais 12 meses para permitir um eventual seguimento, salvo se a relação comercial se prolongar para além desse prazo.",
          "Os documentos de faturação e contabilidade são conservados durante 10 anos, em conformidade com o art. 958f do Código das Obrigações suíço.",
          "As mensagens trocadas com o assistente de conversação não são conservadas para além da sessão de conversa em curso.",
        ],
      },
      {
        heading: "Os seus direitos",
        body: [
          "Nos termos da nLPD, do RGPD e do UK GDPR, dispõe dos seguintes direitos sobre os seus dados pessoais: acesso, retificação, apagamento (dentro dos limites dos prazos de conservação legais acima referidos), limitação do tratamento, oposição ao tratamento, portabilidade dos dados e retirada do consentimento quando o tratamento dependa deste.",
          "Para exercer qualquer um destes direitos, escreva para hello@calyroc.com. Tem também o direito de apresentar reclamação junto da autoridade de proteção de dados competente: o Comissário Federal para a Proteção de Dados e a Transparência (PFPDT, edoeb.admin.ch) na Suíça, a autoridade de proteção de dados do seu país de residência se estiver na União Europeia, ou o Information Commissioner's Office (ICO, ico.org.uk) se estiver no Reino Unido.",
        ],
      },
      {
        heading: "Decisões automatizadas",
        body: [
          "A Calyroc não recorre a qualquer tomada de decisão totalmente automatizada que produza efeitos jurídicos ou que o afete de forma significativa semelhante, incluindo a definição de perfis.",
        ],
      },
      {
        heading: "Representante na União Europeia e no Reino Unido",
        body: [
          "A Calyroc é uma empresa individual suíça sem estabelecimento na União Europeia nem no Reino Unido. O tratamento de dados de residentes da UE ou do Reino Unido através deste site continua a ser pontual, não envolve qualquer categoria especial de dados e não apresenta um risco elevado para os direitos e liberdades dos titulares dos dados: por conseguinte, não foi designado nenhum representante até à data ao abrigo do art. 27.º do RGPD ou do seu equivalente britânico. Esta situação será reavaliada caso a atividade da Calyroc evolua.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Este site não utiliza cookies de medição de audiência nem publicitários — a solução de analytics utilizada (Umami) funciona sem cookies nem identificadores pessoais. Por isso, não é apresentado qualquer aviso de consentimento.",
        ],
      },
      {
        heading: "Segurança",
        body: [
          "A Calyroc aplica medidas técnicas e organizativas razoáveis para proteger os seus dados: encriptação das comunicações (HTTPS), acesso aos dados limitado a Thomas Prud'homme, e recurso a fornecedores igualmente sujeitos a obrigações contratuais de segurança.",
        ],
      },
      {
        heading: "Alterações a esta política",
        body: [
          "Esta política pode ser atualizada para refletir a evolução do site ou da regulamentação aplicável. A data da última atualização consta no topo desta página.",
        ],
      },
    ],
  },
  nl: {
    title: "Privacybeleid",
    metaDescription:
      "Privacybeleid van Calyroc: verzamelde gegevens, verwerkers, bewaartermijnen en uw rechten (nLPD, AVG, UK GDPR).",
    updated: "Laatst bijgewerkt: juli 2026",
    sections: [
      {
        heading: "Wettelijk kader",
        body: [
          "Dit beleid beschrijft hoe Calyroc (zie het colofon) de persoonsgegevens van bezoekers van deze site verzamelt, gebruikt en beschermt. Het is opgesteld in overeenstemming met de Zwitserse federale wet op gegevensbescherming (nLPD, van kracht sinds 1 september 2023) en, voor bezoekers in de Europese Unie of het Verenigd Koninkrijk, de Algemene Verordening Gegevensbescherming (AVG/GDPR) en de UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Verwerkingsverantwoordelijke",
        body: [
          "De verantwoordelijke voor de verwerking van gegevens die via deze site worden verzameld, is Thomas Prud'homme, exploitant van de eenmanszaak Calyroc. Volledige contactgegevens staan in het colofon.",
        ],
      },
      {
        heading: "Doeleinden en rechtsgrond",
        body: [
          "Calyroc verwerkt persoonsgegevens voor de volgende doeleinden, elk gebaseerd op een afzonderlijke rechtsgrond:",
          "Reageren op een contactaanvraag of een offerte opstellen: precontractuele stappen genomen op verzoek van de betrokkene.",
          "Uitvoeren van een project dat door een klant is geaccepteerd: uitvoering van de overeenkomst met die klant.",
          "Anoniem meten van het sitebezoek: gerechtvaardigd belang bij het begrijpen en verbeteren van de site.",
          "Laten functioneren van de conversationele assistent Ask Calyroc: gerechtvaardigd belang bij het aanbieden van een hulpmiddel bij besluitvorming, uitsluitend gebruikt op initiatief van de bezoeker.",
        ],
      },
      {
        heading: "Verzamelde gegevens",
        body: [
          "Contactformulier: naam, e-mailadres, indicatief budget en bericht — uitsluitend gebruikt om op uw aanvraag te reageren, nooit doorverkocht of gebruikt voor marketingdoeleinden zonder uitdrukkelijke toestemming.",
          "Bezoekmeting: Umami Cloud, een cookievrije oplossing zonder persoonlijke identificatiegegevens, uitsluitend gebruikt om het algemene sitebezoek te begrijpen (paginaweergaven, algemene herkomst, apparaattype).",
          "Conversationele assistent (Ask Calyroc): de berichten die met de assistent worden uitgewisseld, worden door kunstmatige intelligentie verwerkt om een antwoord te genereren, maar worden niet bewaard na de huidige gespreksessie.",
        ],
      },
      {
        heading: "Ontvangers, verwerkers en internationale doorgiften",
        body: [
          "Deze site maakt voor haar werking gebruik van de volgende dienstverleners, elk optredend als verwerker in de zin van de nLPD en de AVG:",
          "Cloudflare, Inc. (Verenigde Staten): hosting van de site, antispambescherming van het contactformulier (Turnstile) en de AI-infrastructuur achter de conversationele assistent.",
          "Stripe Payments Europe, Ltd.: verwerking van online betalingen (voorschotten en saldi van projecten).",
          "Resend (Verenigde Staten): verzending van transactionele e-mails (bevestigingen, meldingen, betalingsbewijzen).",
          "Umami Cloud: anonieme, cookievrije bezoekmeting.",
          "Sommige van deze dienstverleners verwerken gegevens buiten Zwitserland en de Europese Economische Ruimte, met name in de Verenigde Staten. Deze doorgiften zijn gebaseerd op de modelcontractbepalingen van de Europese Commissie of een gelijkwaardig nalevingsmechanisme van elke dienstverlener.",
        ],
      },
      {
        heading: "Bewaartermijn",
        body: [
          "Gegevens verzonden via het contactformulier worden bewaard zolang nodig is om uw aanvraag te verwerken, en vervolgens nog 12 maanden om eventuele opvolging mogelijk te maken, tenzij een zakelijke relatie langer voortduurt.",
          "Facturerings- en boekhoudkundige documenten worden 10 jaar bewaard, overeenkomstig art. 958f van het Zwitserse verbintenissenrecht.",
          "Berichten uitgewisseld met de conversationele assistent worden niet bewaard na de huidige gespreksessie.",
        ],
      },
      {
        heading: "Uw rechten",
        body: [
          "Overeenkomstig de nLPD, de AVG en de UK GDPR heeft u de volgende rechten met betrekking tot uw persoonsgegevens: inzage, rectificatie, wissing (binnen de hierboven vermelde wettelijke bewaartermijnen), beperking van de verwerking, bezwaar tegen de verwerking, gegevensoverdraagbaarheid, en intrekking van toestemming wanneer de verwerking daarop is gebaseerd.",
          "Om een van deze rechten uit te oefenen, schrijft u naar hello@calyroc.com. U heeft ook het recht om een klacht in te dienen bij de bevoegde toezichthoudende autoriteit: de Zwitserse federale commissaris voor gegevensbescherming en transparantie (EDÖB/FDPIC, edoeb.admin.ch) in Zwitserland, de gegevensbeschermingsautoriteit van uw woonland als u zich in de Europese Unie bevindt, of de Information Commissioner's Office (ICO, ico.org.uk) als u zich in het Verenigd Koninkrijk bevindt.",
        ],
      },
      {
        heading: "Geautomatiseerde besluitvorming",
        body: [
          "Calyroc maakt geen gebruik van volledig geautomatiseerde besluitvorming die rechtsgevolgen heeft of u op vergelijkbare wijze aanmerkelijk treft, met inbegrip van profilering.",
        ],
      },
      {
        heading: "Vertegenwoordiger in de Europese Unie en het Verenigd Koninkrijk",
        body: [
          "Calyroc is een Zwitserse eenmanszaak zonder vestiging in de Europese Unie of het Verenigd Koninkrijk. De verwerking van gegevens van inwoners van de EU of het VK via deze site blijft incidenteel, betreft geen bijzondere categorie van gegevens en levert waarschijnlijk geen hoog risico op voor de rechten en vrijheden van betrokkenen: er is dan ook tot op heden geen vertegenwoordiger aangewezen op grond van art. 27 AVG of het Britse equivalent. Dit wordt heroverwogen als de activiteit van Calyroc zich ontwikkelt.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Deze site gebruikt geen bezoekmeting- of advertentiecookies — de gebruikte analyseoplossing (Umami) werkt zonder cookies of persoonlijke identificatiegegevens. Er wordt daarom geen toestemmingsbanner weergegeven.",
        ],
      },
      {
        heading: "Beveiliging",
        body: [
          "Calyroc past redelijke technische en organisatorische maatregelen toe om uw gegevens te beschermen: versleutelde verbindingen (HTTPS), toegang tot gegevens beperkt tot Thomas Prud'homme, en gebruik van dienstverleners die zelf onderworpen zijn aan contractuele beveiligingsverplichtingen.",
        ],
      },
      {
        heading: "Wijzigingen in dit beleid",
        body: [
          "Dit beleid kan worden bijgewerkt om wijzigingen in de site of de toepasselijke regelgeving weer te geven. De datum van de laatste bijwerking staat bovenaan deze pagina.",
        ],
      },
    ],
  },
  pl: {
    title: "Polityka prywatności",
    metaDescription:
      "Polityka prywatności Calyroc: zbierane dane, podmioty przetwarzające, okresy przechowywania i Twoje prawa (nLPD, RODO, UK GDPR).",
    updated: "Ostatnia aktualizacja: lipiec 2026",
    sections: [
      {
        heading: "Ramy prawne",
        body: [
          "Niniejsza polityka opisuje, w jaki sposób Calyroc (zob. nota prawna) zbiera, wykorzystuje i chroni dane osobowe osób odwiedzających tę stronę. Została sporządzona zgodnie ze szwajcarską federalną ustawą o ochronie danych (nLPD, obowiązującą od 1 września 2023 r.) oraz, dla osób odwiedzających z Unii Europejskiej lub Wielkiej Brytanii, z Ogólnym Rozporządzeniem o Ochronie Danych (RODO) i UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Administrator danych",
        body: [
          "Administratorem danych zbieranych za pośrednictwem tej strony jest Thomas Prud'homme, prowadzący jednoosobową działalność gospodarczą Calyroc. Pełne dane kontaktowe znajdują się w nocie prawnej.",
        ],
      },
      {
        heading: "Cele i podstawa prawna",
        body: [
          "Calyroc przetwarza dane osobowe w następujących celach, z których każdy opiera się na odrębnej podstawie prawnej:",
          "Odpowiedź na zapytanie kontaktowe lub przygotowanie wyceny: działania przedumowne podejmowane na żądanie osoby, której dane dotyczą.",
          "Realizacja projektu zaakceptowanego przez klienta: wykonanie umowy zawartej z tym klientem.",
          "Anonimowy pomiar ruchu na stronie: uzasadniony interes polegający na zrozumieniu i ulepszaniu strony.",
          "Działanie asystenta konwersacyjnego Ask Calyroc: uzasadniony interes w oferowaniu narzędzia wspomagającego decyzje, wykorzystywanego wyłącznie z inicjatywy odwiedzającego.",
        ],
      },
      {
        heading: "Zbierane dane",
        body: [
          "Formularz kontaktowy: imię i nazwisko, adres e-mail, orientacyjny budżet i wiadomość — wykorzystywane wyłącznie do odpowiedzi na zapytanie, nigdy nieodsprzedawane ani wykorzystywane w celach marketingowych bez wyraźnej zgody.",
          "Pomiar ruchu: Umami Cloud, rozwiązanie niewykorzystujące plików cookie ani identyfikatorów osobowych, używane wyłącznie do zrozumienia ogólnego ruchu na stronie (odsłony, ogólne pochodzenie, typ urządzenia).",
          "Asystent konwersacyjny (Ask Calyroc): wiadomości wymieniane z asystentem są przetwarzane przez sztuczną inteligencję w celu wygenerowania odpowiedzi, ale nie są przechowywane poza bieżącą sesją rozmowy.",
        ],
      },
      {
        heading: "Odbiorcy, podmioty przetwarzające i transfery międzynarodowe",
        body: [
          "Ta strona korzysta z następujących dostawców w celu funkcjonowania, z których każdy działa jako podmiot przetwarzający w rozumieniu nLPD i RODO:",
          "Cloudflare, Inc. (Stany Zjednoczone): hosting strony, ochrona antyspamowa formularza kontaktowego (Turnstile) oraz infrastruktura AI stojąca za asystentem konwersacyjnym.",
          "Stripe Payments Europe, Ltd.: obsługa płatności online (zaliczki i salda projektów).",
          "Resend (Stany Zjednoczone): wysyłka e-maili transakcyjnych (potwierdzenia, powiadomienia, potwierdzenia płatności).",
          "Umami Cloud: anonimowy pomiar ruchu bez plików cookie.",
          "Niektórzy z tych dostawców przetwarzają dane poza Szwajcarią i Europejskim Obszarem Gospodarczym, w szczególności w Stanach Zjednoczonych. Transfery te opierają się na standardowych klauzulach umownych Komisji Europejskiej lub równoważnym mechanizmie zgodności oferowanym przez każdego dostawcę.",
        ],
      },
      {
        heading: "Okres przechowywania",
        body: [
          "Dane przesłane za pośrednictwem formularza kontaktowego są przechowywane przez czas niezbędny do obsługi zapytania, a następnie przez kolejne 12 miesięcy w celu umożliwienia ewentualnej kontynuacji kontaktu, chyba że relacja handlowa trwa dłużej.",
          "Dokumenty księgowe i rozliczeniowe są przechowywane przez 10 lat, zgodnie z art. 958f szwajcarskiego kodeksu zobowiązań.",
          "Wiadomości wymieniane z asystentem konwersacyjnym nie są przechowywane poza bieżącą sesją rozmowy.",
        ],
      },
      {
        heading: "Twoje prawa",
        body: [
          "Zgodnie z nLPD, RODO i UK GDPR przysługują Ci następujące prawa dotyczące Twoich danych osobowych: dostęp, sprostowanie, usunięcie (w granicach ustawowych okresów przechowywania wskazanych powyżej), ograniczenie przetwarzania, sprzeciw wobec przetwarzania, przenoszalność danych oraz wycofanie zgody, gdy przetwarzanie się na niej opiera.",
          "Aby skorzystać z któregokolwiek z tych praw, napisz na hello@calyroc.com. Przysługuje Ci również prawo wniesienia skargi do właściwego organu nadzorczego: Federalnego Komisarza ds. Ochrony Danych i Informacji (EDÖB/FDPIC, edoeb.admin.ch) w Szwajcarii, organu ochrony danych kraju zamieszkania, jeśli znajdujesz się w Unii Europejskiej, lub Information Commissioner's Office (ICO, ico.org.uk), jeśli znajdujesz się w Wielkiej Brytanii.",
        ],
      },
      {
        heading: "Zautomatyzowane podejmowanie decyzji",
        body: [
          "Calyroc nie stosuje żadnego w pełni zautomatyzowanego podejmowania decyzji wywołującego skutki prawne lub w podobny sposób istotnie wpływającego na Ciebie, w tym profilowania.",
        ],
      },
      {
        heading: "Przedstawiciel w Unii Europejskiej i Wielkiej Brytanii",
        body: [
          "Calyroc jest szwajcarską jednoosobową działalnością gospodarczą bez siedziby w Unii Europejskiej ani w Wielkiej Brytanii. Przetwarzanie danych mieszkańców UE lub Wielkiej Brytanii za pośrednictwem tej strony pozostaje sporadyczne, nie obejmuje żadnej szczególnej kategorii danych i nie stwarza wysokiego ryzyka dla praw i wolności osób, których dane dotyczą: do tej pory nie wyznaczono więc przedstawiciela na podstawie art. 27 RODO ani jego brytyjskiego odpowiednika. Sytuacja ta zostanie ponownie oceniona w przypadku rozwoju działalności Calyroc.",
        ],
      },
      {
        heading: "Pliki cookie",
        body: [
          "Ta strona nie wykorzystuje plików cookie do pomiaru ruchu ani celów reklamowych — używane rozwiązanie analityczne (Umami) działa bez plików cookie i identyfikatorów osobowych. W związku z tym nie wyświetla się żaden baner zgody.",
        ],
      },
      {
        heading: "Bezpieczeństwo",
        body: [
          "Calyroc wdraża rozsądne środki techniczne i organizacyjne w celu ochrony danych: szyfrowanie połączeń (HTTPS), dostęp do danych ograniczony do Thomasa Prud'homme'a oraz korzystanie z dostawców, którzy sami podlegają umownym obowiązkom w zakresie bezpieczeństwa.",
        ],
      },
      {
        heading: "Zmiany niniejszej polityki",
        body: [
          "Niniejsza polityka może być aktualizowana w celu odzwierciedlenia zmian na stronie lub w obowiązujących przepisach. Data ostatniej aktualizacji znajduje się na górze tej strony.",
        ],
      },
    ],
  },
  ru: {
    title: "Политика конфиденциальности",
    metaDescription:
      "Политика конфиденциальности Calyroc: собираемые данные, обработчики данных, сроки хранения и Ваши права (nLPD, GDPR, UK GDPR).",
    updated: "Последнее обновление: июль 2026",
    sections: [
      {
        heading: "Правовая база",
        body: [
          "Настоящая политика описывает, как Calyroc (см. юридическую информацию) собирает, использует и защищает персональные данные посетителей данного сайта. Она составлена в соответствии со швейцарским федеральным законом о защите данных (nLPD, действующим с 1 сентября 2023 года) и, для посетителей из Европейского союза или Великобритании, с Общим регламентом по защите данных (GDPR) и UK GDPR (Data Protection Act 2018).",
        ],
      },
      {
        heading: "Оператор данных",
        body: [
          "Оператором, ответственным за данные, собираемые через данный сайт, является Тома Прюдом (Thomas Prud'homme), владелец индивидуального предприятия Calyroc. Полные контактные данные указаны в юридической информации.",
        ],
      },
      {
        heading: "Цели и правовые основания",
        body: [
          "Calyroc обрабатывает персональные данные в следующих целях, каждая из которых опирается на отдельное правовое основание:",
          "Ответ на запрос через форму обратной связи или подготовка сметы: преддоговорные действия, предпринятые по инициативе субъекта данных.",
          "Выполнение проекта, принятого клиентом: исполнение договора, заключённого с этим клиентом.",
          "Анонимное измерение посещаемости сайта: законный интерес в понимании и улучшении сайта.",
          "Работа чат-ассистента Ask Calyroc: законный интерес в предоставлении инструмента поддержки принятия решений, используемого исключительно по инициативе посетителя.",
        ],
      },
      {
        heading: "Собираемые данные",
        body: [
          "Форма обратной связи: имя, email, ориентировочный бюджет и сообщение — используются исключительно для ответа на Ваш запрос, никогда не перепродаются и не используются в маркетинговых целях без явного согласия.",
          "Измерение посещаемости: Umami Cloud — решение без использования файлов cookie и персональных идентификаторов, используемое исключительно для понимания общей посещаемости сайта (просмотры страниц, общее происхождение, тип устройства).",
          "Чат-ассистент (Ask Calyroc): сообщения, которыми Вы обмениваетесь с ассистентом, обрабатываются искусственным интеллектом для формирования ответа, но не сохраняются после завершения текущей сессии разговора.",
        ],
      },
      {
        heading: "Получатели, обработчики данных и международная передача данных",
        body: [
          "Для работы данного сайта используются следующие поставщики услуг, каждый из которых выступает в роли обработчика данных по смыслу nLPD и GDPR:",
          "Cloudflare, Inc. (США): хостинг сайта, защита от спама формы обратной связи (Turnstile) и ИИ-инфраструктура чат-ассистента.",
          "Stripe Payments Europe, Ltd.: обработка онлайн-платежей (предоплаты и остатки по проектам).",
          "Resend (США): отправка транзакционных писем (подтверждения, уведомления, квитанции об оплате).",
          "Umami Cloud: анонимное измерение посещаемости без использования файлов cookie.",
          "Некоторые из этих поставщиков услуг обрабатывают данные за пределами Швейцарии и Европейской экономической зоны, в частности в США. Такая передача данных осуществляется на основании стандартных договорных условий Европейской комиссии или эквивалентного механизма соответствия, предлагаемого каждым поставщиком.",
        ],
      },
      {
        heading: "Срок хранения",
        body: [
          "Данные, переданные через форму обратной связи, хранятся в течение времени, необходимого для обработки Вашего запроса, а затем ещё 12 месяцев для возможного дальнейшего взаимодействия, если только деловые отношения не продолжаются дольше этого срока.",
          "Документы, связанные с выставлением счетов и бухгалтерским учётом, хранятся 10 лет в соответствии со ст. 958f Швейцарского обязательственного кодекса.",
          "Сообщения, которыми Вы обмениваетесь с чат-ассистентом, не сохраняются после завершения текущей сессии разговора.",
        ],
      },
      {
        heading: "Ваши права",
        body: [
          "В соответствии с nLPD, GDPR и UK GDPR у Вас есть следующие права в отношении Ваших персональных данных: доступ, исправление, удаление (в пределах установленных законом сроков хранения, указанных выше), ограничение обработки, возражение против обработки, переносимость данных и отзыв согласия, если обработка основана на нём.",
          "Чтобы воспользоваться любым из этих прав, напишите на hello@calyroc.com. У Вас также есть право подать жалобу в компетентный орган по защите данных: Федеральный уполномоченный по защите данных и информации (EDÖB/FDPIC, edoeb.admin.ch) в Швейцарии, орган по защите данных страны Вашего проживания, если Вы находитесь в Европейском союзе, или Information Commissioner's Office (ICO, ico.org.uk), если Вы находитесь в Великобритании.",
        ],
      },
      {
        heading: "Автоматизированное принятие решений",
        body: [
          "Calyroc не применяет полностью автоматизированное принятие решений, порождающее юридические последствия или иным образом существенно затрагивающее Вас, включая профилирование.",
        ],
      },
      {
        heading: "Представитель в Европейском союзе и Великобритании",
        body: [
          "Calyroc является швейцарским индивидуальным предприятием, не имеющим представительства в Европейском союзе или Великобритании. Обработка данных резидентов ЕС или Великобритании через данный сайт носит эпизодический характер, не затрагивает особые категории данных и не создаёт высокого риска для прав и свобод субъектов данных: поэтому на сегодняшний день представитель не назначен в соответствии со ст. 27 GDPR или её британским эквивалентом. Эта ситуация будет пересмотрена в случае развития деятельности Calyroc.",
        ],
      },
      {
        heading: "Файлы cookie",
        body: [
          "Данный сайт не использует файлы cookie для измерения посещаемости или в рекламных целях — используемое аналитическое решение (Umami) работает без файлов cookie и персональных идентификаторов. Поэтому баннер согласия не отображается.",
        ],
      },
      {
        heading: "Безопасность",
        body: [
          "Calyroc применяет разумные технические и организационные меры для защиты Ваших данных: шифрование соединений (HTTPS), доступ к данным ограничен Тома Прюдомом (Thomas Prud'homme), а также использование поставщиков услуг, которые сами связаны договорными обязательствами по безопасности.",
        ],
      },
      {
        heading: "Изменения настоящей политики",
        body: [
          "Настоящая политика может обновляться с учётом изменений сайта или применимого законодательства. Дата последнего обновления указана в верхней части этой страницы.",
        ],
      },
    ],
  },
};
