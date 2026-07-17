import type { Locale } from "@/i18n/locales";
import type { LegalPage } from "./types";

/**
 * French is the legally authoritative version (see Dictionary.legalPageNotice,
 * shown on every non-French locale). Translations aim for equivalent legal
 * meaning, not a literal word-for-word rendering.
 */
export const mentionsLegales: Record<Locale, LegalPage> = {
  fr: {
    title: "Mentions légales",
    metaDescription:
      "Mentions légales de Calyroc : identité de l'éditeur, hébergement du site, propriété intellectuelle et limitation de responsabilité.",
    updated: "Dernière mise à jour : juillet 2026",
    sections: [
      {
        heading: "Éditeur du site",
        body: [
          "Calyroc est une entreprise individuelle exploitée par Thomas Prud'homme, non inscrite au registre du commerce (activité en dessous du seuil légal d'inscription obligatoire en Suisse).",
          "Adresse : Chemin de l'Aubépine 9B, 1196 Gland, Vaud, Suisse.",
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
        heading: "Liens externes",
        body: [
          "Ce site peut contenir des liens vers des sites tiers. Calyroc n'exerce aucun contrôle sur leur contenu et décline toute responsabilité à leur égard.",
        ],
      },
      {
        heading: "Responsabilité",
        body: [
          "Calyroc s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exhaustivité ou l'exactitude permanente du contenu de ce site.",
        ],
      },
    ],
  },
  en: {
    title: "Legal notice",
    metaDescription:
      "Legal notice for Calyroc: publisher identity, website hosting, intellectual property rights, and limitation of liability.",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "Publisher of this website",
        body: [
          "Calyroc is a Swiss sole proprietorship operated by Thomas Prud'homme, not entered in the Swiss commercial register (activity below the legal threshold for mandatory registration in Switzerland).",
          "Address: Chemin de l'Aubépine 9B, 1196 Gland, Vaud, Switzerland.",
          "Contact: hello@calyroc.com",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "This website is hosted by Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, United States.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this site (text, structure, design, code) is the property of Calyroc unless stated otherwise. Any reproduction without prior authorization is prohibited.",
          "Work shown in the Portfolio section remains the property of the respective client or of Calyroc, according to the terms agreed for each project.",
        ],
      },
      {
        heading: "External links",
        body: [
          "This site may contain links to third-party websites. Calyroc has no control over their content and accepts no liability for it.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "Calyroc strives to provide accurate and up-to-date information but cannot guarantee the completeness or continued accuracy of this site's content.",
        ],
      },
    ],
  },
  es: {
    title: "Aviso legal",
    metaDescription:
      "Aviso legal de Calyroc: identidad del editor, alojamiento del sitio, propiedad intelectual y limitación de responsabilidad.",
    updated: "Última actualización: julio de 2026",
    sections: [
      {
        heading: "Editor del sitio",
        body: [
          "Calyroc es una empresa individual explotada por Thomas Prud'homme, no inscrita en el registro mercantil suizo (actividad por debajo del umbral legal de inscripción obligatoria en Suiza).",
          "Dirección: Chemin de l'Aubépine 9B, 1196 Gland, Vaud, Suiza.",
          "Contacto: hello@calyroc.com",
        ],
      },
      {
        heading: "Alojamiento",
        body: [
          "Este sitio está alojado por Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, Estados Unidos.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "Todos los contenidos de este sitio (textos, estructura, diseño, código) son propiedad de Calyroc, salvo indicación contraria. Queda prohibida cualquier reproducción sin autorización previa.",
          "Los proyectos mostrados en la sección Trabajos siguen siendo propiedad de sus respectivos clientes o de Calyroc, según lo acordado en cada proyecto.",
        ],
      },
      {
        heading: "Enlaces externos",
        body: [
          "Este sitio puede contener enlaces a sitios de terceros. Calyroc no ejerce ningún control sobre su contenido y declina toda responsabilidad al respecto.",
        ],
      },
      {
        heading: "Responsabilidad",
        body: [
          "Calyroc se esfuerza por ofrecer información exacta y actualizada, pero no puede garantizar la exhaustividad ni la exactitud permanente del contenido de este sitio.",
        ],
      },
    ],
  },
  it: {
    title: "Note legali",
    metaDescription:
      "Note legali di Calyroc: identità dell'editore, hosting del sito, proprietà intellettuale e limitazione di responsabilità.",
    updated: "Ultimo aggiornamento: luglio 2026",
    sections: [
      {
        heading: "Editore del sito",
        body: [
          "Calyroc è una ditta individuale gestita da Thomas Prud'homme, non iscritta al registro di commercio svizzero (attività al di sotto della soglia legale di iscrizione obbligatoria in Svizzera).",
          "Indirizzo: Chemin de l'Aubépine 9B, 1196 Gland, Vaud, Svizzera.",
          "Contatto: hello@calyroc.com",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "Questo sito è ospitato da Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, Stati Uniti.",
        ],
      },
      {
        heading: "Proprietà intellettuale",
        body: [
          "Tutti i contenuti di questo sito (testi, struttura, design, codice) sono di proprietà di Calyroc, salvo indicazione contraria. È vietata qualsiasi riproduzione senza autorizzazione preventiva.",
          "I progetti presentati nella sezione Realizzazioni restano di proprietà dei rispettivi clienti o di Calyroc, secondo i termini concordati per ciascun progetto.",
        ],
      },
      {
        heading: "Link esterni",
        body: [
          "Questo sito può contenere link verso siti di terzi. Calyroc non esercita alcun controllo sui loro contenuti e declina ogni responsabilità al riguardo.",
        ],
      },
      {
        heading: "Responsabilità",
        body: [
          "Calyroc si impegna a fornire informazioni accurate e aggiornate, ma non può garantire la completezza o l'esattezza permanente dei contenuti di questo sito.",
        ],
      },
    ],
  },
  de: {
    title: "Impressum",
    metaDescription:
      "Impressum von Calyroc: Anbieterkennzeichnung, Website-Hosting, geistiges Eigentum und Haftungsbeschränkung im Überblick.",
    updated: "Letzte Aktualisierung: Juli 2026",
    sections: [
      {
        heading: "Betreiber der Website",
        body: [
          "Calyroc ist ein von Thomas Prud'homme geführtes Einzelunternehmen, nicht im Schweizer Handelsregister eingetragen (Tätigkeit unterhalb der gesetzlichen Eintragungspflicht in der Schweiz).",
          "Adresse: Chemin de l'Aubépine 9B, 1196 Gland, Waadt, Schweiz.",
          "Kontakt: hello@calyroc.com",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "Diese Website wird von Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, USA, gehostet.",
        ],
      },
      {
        heading: "Geistiges Eigentum",
        body: [
          "Sämtliche Inhalte dieser Website (Texte, Struktur, Design, Code) sind Eigentum von Calyroc, sofern nicht anders angegeben. Jede Vervielfältigung ohne vorherige Genehmigung ist untersagt.",
          "Die im Bereich Referenzen gezeigten Projekte bleiben Eigentum der jeweiligen Kunden oder von Calyroc, gemäss den für jedes Projekt vereinbarten Bedingungen.",
        ],
      },
      {
        heading: "Externe Links",
        body: [
          "Diese Website kann Links zu Websites Dritter enthalten. Calyroc hat keinen Einfluss auf deren Inhalte und übernimmt hierfür keine Haftung.",
        ],
      },
      {
        heading: "Haftung",
        body: [
          "Calyroc bemüht sich um genaue und aktuelle Informationen, kann jedoch keine Gewähr für die Vollständigkeit oder dauerhafte Richtigkeit der Inhalte dieser Website übernehmen.",
        ],
      },
    ],
  },
  pt: {
    title: "Aviso legal",
    metaDescription:
      "Aviso legal da Calyroc: identidade do editor, alojamento do site, propriedade intelectual e limitação de responsabilidade.",
    updated: "Última atualização: julho de 2026",
    sections: [
      {
        heading: "Editor do site",
        body: [
          "A Calyroc é uma empresa individual explorada por Thomas Prud'homme, não inscrita no registo comercial suíço (atividade abaixo do limiar legal de inscrição obrigatória na Suíça).",
          "Morada: Chemin de l'Aubépine 9B, 1196 Gland, Vaud, Suíça.",
          "Contacto: hello@calyroc.com",
        ],
      },
      {
        heading: "Alojamento",
        body: [
          "Este site é alojado pela Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, Estados Unidos.",
        ],
      },
      {
        heading: "Propriedade intelectual",
        body: [
          "Todo o conteúdo deste site (textos, estrutura, design, código) é propriedade da Calyroc, salvo indicação em contrário. É proibida qualquer reprodução sem autorização prévia.",
          "Os projetos apresentados na secção Trabalhos permanecem propriedade dos respetivos clientes ou da Calyroc, conforme os termos acordados em cada projeto.",
        ],
      },
      {
        heading: "Ligações externas",
        body: [
          "Este site pode conter ligações para sites de terceiros. A Calyroc não exerce qualquer controlo sobre o seu conteúdo e declina toda a responsabilidade a esse respeito.",
        ],
      },
      {
        heading: "Responsabilidade",
        body: [
          "A Calyroc esforça-se por fornecer informações exatas e atualizadas, mas não pode garantir a exaustividade nem a exatidão permanente do conteúdo deste site.",
        ],
      },
    ],
  },
  nl: {
    title: "Colofon",
    metaDescription:
      "Colofon van Calyroc: identiteit van de uitgever, hosting van de site, intellectueel eigendom en beperking van aansprakelijkheid.",
    updated: "Laatst bijgewerkt: juli 2026",
    sections: [
      {
        heading: "Uitgever van de site",
        body: [
          "Calyroc is een Zwitserse eenmanszaak, geëxploiteerd door Thomas Prud'homme, niet ingeschreven in het Zwitserse handelsregister (activiteit onder de wettelijke drempel voor verplichte inschrijving in Zwitserland).",
          "Adres: Chemin de l'Aubépine 9B, 1196 Gland, Vaud, Zwitserland.",
          "Contact: hello@calyroc.com",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "Deze site wordt gehost door Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, Verenigde Staten.",
        ],
      },
      {
        heading: "Intellectueel eigendom",
        body: [
          "Alle inhoud van deze site (teksten, structuur, ontwerp, code) is eigendom van Calyroc, tenzij anders vermeld. Elke reproductie zonder voorafgaande toestemming is verboden.",
          "De projecten getoond in de sectie Werk blijven eigendom van de respectieve klanten of van Calyroc, volgens de voorwaarden overeengekomen voor elk project.",
        ],
      },
      {
        heading: "Externe links",
        body: [
          "Deze site kan links naar sites van derden bevatten. Calyroc heeft geen controle over de inhoud daarvan en aanvaardt hiervoor geen enkele aansprakelijkheid.",
        ],
      },
      {
        heading: "Aansprakelijkheid",
        body: [
          "Calyroc streeft ernaar nauwkeurige en actuele informatie te verstrekken, maar kan de volledigheid of blijvende juistheid van de inhoud van deze site niet garanderen.",
        ],
      },
    ],
  },
  pl: {
    title: "Nota prawna",
    metaDescription:
      "Nota prawna Calyroc: tożsamość wydawcy, hosting strony, własność intelektualna i ograniczenie odpowiedzialności.",
    updated: "Ostatnia aktualizacja: lipiec 2026",
    sections: [
      {
        heading: "Wydawca strony",
        body: [
          "Calyroc to szwajcarska jednoosobowa działalność gospodarcza prowadzona przez Thomasa Prud'homme'a, niewpisana do szwajcarskiego rejestru handlowego (działalność poniżej ustawowego progu obowiązkowej rejestracji w Szwajcarii).",
          "Adres: Chemin de l'Aubépine 9B, 1196 Gland, Vaud, Szwajcaria.",
          "Kontakt: hello@calyroc.com",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "Strona jest hostowana przez Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, Stany Zjednoczone.",
        ],
      },
      {
        heading: "Własność intelektualna",
        body: [
          "Cała zawartość tej strony (teksty, struktura, design, kod) jest własnością Calyroc, chyba że wskazano inaczej. Jakiekolwiek powielanie bez uprzedniej zgody jest zabronione.",
          "Projekty przedstawione w sekcji Realizacje pozostają własnością odpowiednich klientów lub Calyroc, zgodnie z warunkami uzgodnionymi dla każdego projektu.",
        ],
      },
      {
        heading: "Linki zewnętrzne",
        body: [
          "Ta strona może zawierać linki do stron osób trzecich. Calyroc nie sprawuje żadnej kontroli nad ich zawartością i nie ponosi za nią żadnej odpowiedzialności.",
        ],
      },
      {
        heading: "Odpowiedzialność",
        body: [
          "Calyroc dokłada starań, aby dostarczać dokładne i aktualne informacje, ale nie może zagwarantować kompletności ani stałej dokładności treści tej strony.",
        ],
      },
    ],
  },
  ru: {
    title: "Юридическая информация",
    metaDescription:
      "Юридическая информация Calyroc: сведения об издателе, хостинг сайта, интеллектуальная собственность и ограничение ответственности.",
    updated: "Последнее обновление: июль 2026",
    sections: [
      {
        heading: "Издатель сайта",
        body: [
          "Calyroc — швейцарское индивидуальное предприятие, которым управляет Тома Прюдом (Thomas Prud'homme), не зарегистрированное в швейцарском торговом реестре (деятельность ниже установленного законом порога обязательной регистрации в Швейцарии).",
          "Адрес: Chemin de l'Aubépine 9B, 1196 Gland, кантон Во, Швейцария.",
          "Контакт: hello@calyroc.com",
        ],
      },
      {
        heading: "Хостинг",
        body: [
          "Сайт размещён на серверах Cloudflare, Inc. (Cloudflare Workers), 101 Townsend St, San Francisco, CA 94107, США.",
        ],
      },
      {
        heading: "Интеллектуальная собственность",
        body: [
          "Всё содержимое данного сайта (тексты, структура, дизайн, код) является собственностью Calyroc, если не указано иное. Любое воспроизведение без предварительного разрешения запрещено.",
          "Проекты, представленные в разделе «Работы», остаются собственностью соответствующих клиентов или Calyroc, согласно условиям, согласованным для каждого проекта.",
        ],
      },
      {
        heading: "Внешние ссылки",
        body: [
          "Данный сайт может содержать ссылки на сторонние сайты. Calyroc не осуществляет никакого контроля над их содержимым и не несёт за него никакой ответственности.",
        ],
      },
      {
        heading: "Ответственность",
        body: [
          "Calyroc стремится предоставлять точную и актуальную информацию, но не может гарантировать полноту или постоянную точность содержимого данного сайта.",
        ],
      },
    ],
  },
};
