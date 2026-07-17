import type { Locale } from "@/i18n/locales";
import type { LegalPage } from "./types";

/**
 * French is the legally authoritative version (see Dictionary.legalPageNotice,
 * shown on every non-French locale). Translations aim for equivalent legal
 * meaning, not a literal word-for-word rendering.
 */
export const cgv: Record<Locale, LegalPage> = {
  fr: {
    title: "Conditions générales de vente",
    metaDescription:
      "Conditions générales de vente de Calyroc : devis, acompte, révisions, propriété intellectuelle et droit applicable.",
    updated: "Dernière mise à jour : juillet 2026",
    sections: [
      {
        heading: "Objet",
        body: [
          "Les présentes conditions générales de vente régissent les prestations de création et de développement de sites web fournies par Calyroc (Thomas Prud'homme), à l'exclusion de toute autre condition non expressément acceptée par écrit.",
        ],
      },
      {
        heading: "Devis, acompte et prix",
        body: [
          "Chaque projet fait l'objet d'un devis préalable détaillant le périmètre, le prix et le délai indicatif. Le démarrage du projet est confirmé par le versement d'un acompte de 30 à 50 % du montant total, réglé en ligne via Stripe. Le solde est facturé à la livraison, avant mise en ligne définitive.",
          "Tous les prix sont indiqués en francs suisses (CHF). Calyroc, entreprise individuelle non assujettie à la taxe sur la valeur ajoutée, ne facture pas de TVA : les montants affichés correspondent au total dû.",
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
        heading: "Absence de droit de rétractation",
        body: [
          "Contrairement au droit de la consommation applicable dans l'Union européenne, le droit suisse ne prévoit pas de délai de rétractation général pour les contrats conclus à distance. L'acceptation d'un devis et le versement de l'acompte engagent donc fermement les deux parties dès leur réception, sous réserve des dispositions relatives à la résiliation ci-dessous.",
        ],
      },
      {
        heading: "Non-paiement",
        body: [
          "En cas de non-paiement du solde à l'échéance convenue, Calyroc se réserve le droit de suspendre les travaux en cours et de différer la livraison des fichiers ou la mise en ligne du site jusqu'au règlement intégral.",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body: [
          "Le code source et les livrables développés spécifiquement pour le client lui sont cédés à réception du paiement intégral. Calyroc conserve le droit de mentionner le projet dans son portfolio, sauf accord contraire écrit.",
        ],
      },
      {
        heading: "Garantie et responsabilité",
        body: [
          "Calyroc s'engage à livrer un travail soigné, conforme au devis accepté. Sauf faute grave ou intentionnelle, la responsabilité de Calyroc envers le client est limitée au montant effectivement versé pour le projet concerné. Calyroc ne saurait être tenu responsable des dommages indirects, notamment la perte de chiffre d'affaires ou de données non sauvegardées par le client, ni du contenu fourni par ce dernier.",
        ],
      },
      {
        heading: "Force majeure",
        body: [
          "Aucune des parties ne pourra être tenue responsable d'un retard ou d'une inexécution résultant d'un cas de force majeure échappant à son contrôle raisonnable, tel qu'une panne généralisée d'un prestataire tiers ou une catastrophe naturelle.",
        ],
      },
      {
        heading: "Résiliation",
        body: [
          "En cas d'annulation par le client après versement de l'acompte, celui-ci reste acquis à Calyroc à hauteur du travail déjà engagé.",
        ],
      },
      {
        heading: "Droit applicable et for juridique",
        body: [
          "Les présentes conditions sont soumises au droit suisse, à l'exclusion des règles de conflit de lois et de la Convention de Vienne sur la vente internationale de marchandises. Tout litige relève de la compétence exclusive des tribunaux du canton de Vaud, Suisse.",
        ],
      },
    ],
  },
  en: {
    title: "Terms and conditions of sale",
    metaDescription:
      "Calyroc's terms and conditions of sale: quotes, deposits, revisions, intellectual property and governing law.",
    updated: "Last updated: July 2026",
    sections: [
      {
        heading: "Purpose",
        body: [
          "These terms and conditions of sale govern the website creation and development services provided by Calyroc (Thomas Prud'homme), to the exclusion of any other terms not expressly accepted in writing.",
        ],
      },
      {
        heading: "Quote, deposit and pricing",
        body: [
          "Each project is preceded by a quote detailing scope, price and an indicative timeline. The project start is confirmed by payment of a deposit of 30 to 50% of the total amount, paid online via Stripe. The balance is invoiced upon delivery, before the site goes live.",
          "All prices are shown in Swiss francs (CHF). Calyroc, a sole proprietorship not subject to value-added tax, does not charge VAT: the amounts shown are the total amount due.",
        ],
      },
      {
        heading: "Revisions and timelines",
        body: [
          "Each pack includes two rounds of revisions. Beyond that, additional changes are billed separately, on quote.",
          "Announced timelines are indicative and depend on the client's responsiveness in supplying content (text, images, feedback).",
        ],
      },
      {
        heading: "No right of withdrawal",
        body: [
          "Unlike EU consumer law, Swiss law does not provide a general right of withdrawal for contracts concluded at a distance. Accepting a quote and paying the deposit therefore firmly binds both parties upon receipt, subject to the termination provisions below.",
        ],
      },
      {
        heading: "Non-payment",
        body: [
          "In the event of non-payment of the balance by the agreed due date, Calyroc reserves the right to suspend work in progress and delay delivery of files or the site going live until payment is received in full.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Source code and deliverables developed specifically for the client are transferred to them upon receipt of payment in full. Calyroc retains the right to mention the project in its portfolio, unless otherwise agreed in writing.",
        ],
      },
      {
        heading: "Warranty and liability",
        body: [
          "Calyroc undertakes to deliver careful work in line with the accepted quote. Except in cases of gross or intentional fault, Calyroc's liability toward the client is limited to the amount actually paid for the project concerned. Calyroc cannot be held liable for indirect damages, including lost revenue or data not backed up by the client, nor for content supplied by the client.",
        ],
      },
      {
        heading: "Force majeure",
        body: [
          "Neither party may be held liable for a delay or failure to perform resulting from a force majeure event beyond its reasonable control, such as a widespread outage at a third-party provider or a natural disaster.",
        ],
      },
      {
        heading: "Termination",
        body: [
          "If the client cancels after the deposit has been paid, the deposit remains payable to Calyroc up to the value of work already committed.",
        ],
      },
      {
        heading: "Governing law and jurisdiction",
        body: [
          "These terms are governed by Swiss law, excluding conflict-of-law rules and the United Nations Convention on Contracts for the International Sale of Goods. Any dispute falls under the exclusive jurisdiction of the courts of the canton of Vaud, Switzerland.",
        ],
      },
    ],
  },
  es: {
    title: "Condiciones generales de venta",
    metaDescription:
      "Condiciones generales de venta de Calyroc: presupuesto, anticipo, revisiones, propiedad intelectual y legislación aplicable.",
    updated: "Última actualización: julio de 2026",
    sections: [
      {
        heading: "Objeto",
        body: [
          "Las presentes condiciones generales de venta rigen los servicios de creación y desarrollo de sitios web prestados por Calyroc (Thomas Prud'homme), con exclusión de cualquier otra condición no aceptada expresamente por escrito.",
        ],
      },
      {
        heading: "Presupuesto, anticipo y precios",
        body: [
          "Cada proyecto es objeto de un presupuesto previo que detalla el alcance, el precio y un plazo orientativo. El inicio del proyecto se confirma con el pago de un anticipo de entre el 30 % y el 50 % del importe total, abonado en línea a través de Stripe. El saldo se factura a la entrega, antes de la publicación definitiva del sitio.",
          "Todos los precios se indican en francos suizos (CHF). Calyroc, empresa individual no sujeta al impuesto sobre el valor añadido, no factura IVA: los importes indicados corresponden al total adeudado.",
        ],
      },
      {
        heading: "Revisiones y plazos",
        body: [
          "Cada paquete incluye dos rondas de revisiones. Más allá de estas, las modificaciones adicionales se facturan aparte, previo presupuesto.",
          "Los plazos indicados son orientativos y dependen de la rapidez del cliente en proporcionar los contenidos (textos, imágenes, comentarios).",
        ],
      },
      {
        heading: "Ausencia de derecho de desistimiento",
        body: [
          "A diferencia del derecho de consumo aplicable en la Unión Europea, el derecho suizo no prevé un derecho de desistimiento general para los contratos celebrados a distancia. La aceptación de un presupuesto y el pago del anticipo vinculan, por tanto, firmemente a ambas partes desde su recepción, sin perjuicio de las disposiciones sobre resolución indicadas más abajo.",
        ],
      },
      {
        heading: "Impago",
        body: [
          "En caso de impago del saldo en la fecha acordada, Calyroc se reserva el derecho de suspender los trabajos en curso y de aplazar la entrega de los archivos o la publicación del sitio hasta que se produzca el pago íntegro.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "El código fuente y los entregables desarrollados específicamente para el cliente se ceden a este una vez recibido el pago íntegro. Calyroc conserva el derecho a mencionar el proyecto en su portafolio, salvo acuerdo escrito en contrario.",
        ],
      },
      {
        heading: "Garantía y responsabilidad",
        body: [
          "Calyroc se compromete a entregar un trabajo cuidado y conforme al presupuesto aceptado. Salvo culpa grave o dolo, la responsabilidad de Calyroc frente al cliente se limita al importe efectivamente abonado por el proyecto en cuestión. Calyroc no podrá ser considerada responsable de daños indirectos, en particular la pérdida de facturación o de datos no respaldados por el cliente, ni del contenido proporcionado por este.",
        ],
      },
      {
        heading: "Fuerza mayor",
        body: [
          "Ninguna de las partes podrá ser considerada responsable de un retraso o incumplimiento resultante de un caso de fuerza mayor ajeno a su control razonable, como una avería generalizada de un proveedor externo o una catástrofe natural.",
        ],
      },
      {
        heading: "Resolución",
        body: [
          "En caso de cancelación por parte del cliente tras el pago del anticipo, este queda adquirido por Calyroc en la medida del trabajo ya realizado.",
        ],
      },
      {
        heading: "Legislación aplicable y jurisdicción",
        body: [
          "Las presentes condiciones se rigen por el derecho suizo, con exclusión de las normas de conflicto de leyes y de la Convención de Viena sobre la venta internacional de mercaderías. Cualquier controversia será competencia exclusiva de los tribunales del cantón de Vaud, Suiza.",
        ],
      },
    ],
  },
  it: {
    title: "Condizioni generali di vendita",
    metaDescription:
      "Condizioni generali di vendita di Calyroc: preventivo, acconto, revisioni, proprietà intellettuale e legge applicabile.",
    updated: "Ultimo aggiornamento: luglio 2026",
    sections: [
      {
        heading: "Oggetto",
        body: [
          "Le presenti condizioni generali di vendita disciplinano i servizi di creazione e sviluppo di siti web forniti da Calyroc (Thomas Prud'homme), con esclusione di qualsiasi altra condizione non espressamente accettata per iscritto.",
        ],
      },
      {
        heading: "Preventivo, acconto e prezzi",
        body: [
          "Ogni progetto è preceduto da un preventivo che dettaglia l'ambito, il prezzo e una tempistica indicativa. L'avvio del progetto è confermato dal versamento di un acconto pari al 30-50% dell'importo totale, pagato online tramite Stripe. Il saldo è fatturato alla consegna, prima della pubblicazione definitiva del sito.",
          "Tutti i prezzi sono espressi in franchi svizzeri (CHF). Calyroc, ditta individuale non soggetta all'imposta sul valore aggiunto, non addebita l'IVA: gli importi indicati corrispondono al totale dovuto.",
        ],
      },
      {
        heading: "Revisioni e tempistiche",
        body: [
          "Ogni pacchetto include due cicli di revisioni. Oltre a questi, le modifiche aggiuntive sono fatturate separatamente, su preventivo.",
          "Le tempistiche indicate sono orientative e dipendono dalla tempestività del cliente nel fornire i contenuti (testi, immagini, feedback).",
        ],
      },
      {
        heading: "Assenza del diritto di recesso",
        body: [
          "A differenza del diritto dei consumatori applicabile nell'Unione Europea, il diritto svizzero non prevede un diritto di recesso generale per i contratti conclusi a distanza. L'accettazione di un preventivo e il versamento dell'acconto vincolano quindi fermamente entrambe le parti fin dalla loro ricezione, fatte salve le disposizioni sulla risoluzione indicate di seguito.",
        ],
      },
      {
        heading: "Mancato pagamento",
        body: [
          "In caso di mancato pagamento del saldo alla scadenza concordata, Calyroc si riserva il diritto di sospendere i lavori in corso e di rinviare la consegna dei file o la pubblicazione del sito fino al pagamento integrale.",
        ],
      },
      {
        heading: "Proprietà intellettuale",
        body: [
          "Il codice sorgente e i deliverable sviluppati specificamente per il cliente gli vengono ceduti al ricevimento del pagamento integrale. Calyroc conserva il diritto di menzionare il progetto nel proprio portfolio, salvo diverso accordo scritto.",
        ],
      },
      {
        heading: "Garanzia e responsabilità",
        body: [
          "Calyroc si impegna a fornire un lavoro accurato, conforme al preventivo accettato. Salvo colpa grave o dolo, la responsabilità di Calyroc nei confronti del cliente è limitata all'importo effettivamente versato per il progetto in questione. Calyroc non potrà essere ritenuta responsabile di danni indiretti, in particolare la perdita di fatturato o di dati non salvati dal cliente, né del contenuto fornito da quest'ultimo.",
        ],
      },
      {
        heading: "Forza maggiore",
        body: [
          "Nessuna delle parti potrà essere ritenuta responsabile di un ritardo o di un inadempimento derivante da un caso di forza maggiore al di fuori del proprio ragionevole controllo, come un guasto generalizzato di un fornitore terzo o una catastrofe naturale.",
        ],
      },
      {
        heading: "Risoluzione",
        body: [
          "In caso di annullamento da parte del cliente dopo il versamento dell'acconto, quest'ultimo resta acquisito da Calyroc nella misura del lavoro già svolto.",
        ],
      },
      {
        heading: "Legge applicabile e foro competente",
        body: [
          "Le presenti condizioni sono soggette al diritto svizzero, con esclusione delle norme di conflitto di leggi e della Convenzione di Vienna sulla vendita internazionale di merci. Qualsiasi controversia è di competenza esclusiva dei tribunali del canton Vaud, Svizzera.",
        ],
      },
    ],
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    metaDescription:
      "Allgemeine Geschäftsbedingungen von Calyroc: Angebot, Anzahlung, Überarbeitungen, geistiges Eigentum und anwendbares Recht.",
    updated: "Letzte Aktualisierung: Juli 2026",
    sections: [
      {
        heading: "Geltungsbereich",
        body: [
          "Diese Allgemeinen Geschäftsbedingungen regeln die von Calyroc (Thomas Prud'homme) erbrachten Leistungen zur Erstellung und Entwicklung von Websites, unter Ausschluss aller anderen, nicht ausdrücklich schriftlich akzeptierten Bedingungen.",
        ],
      },
      {
        heading: "Angebot, Anzahlung und Preise",
        body: [
          "Jedem Projekt geht ein Angebot voraus, das Umfang, Preis und einen indikativen Zeitrahmen festlegt. Der Projektbeginn wird durch die Zahlung einer Anzahlung von 30 bis 50 % des Gesamtbetrags bestätigt, online via Stripe entrichtet. Der Restbetrag wird bei Lieferung, vor der endgültigen Veröffentlichung der Website, in Rechnung gestellt.",
          "Alle Preise verstehen sich in Schweizer Franken (CHF). Calyroc, ein nicht mehrwertsteuerpflichtiges Einzelunternehmen, weist keine Mehrwertsteuer aus: Die angegebenen Beträge entsprechen dem geschuldeten Gesamtbetrag.",
        ],
      },
      {
        heading: "Überarbeitungen und Fristen",
        body: [
          "Jedes Paket umfasst zwei Überarbeitungsrunden. Darüber hinausgehende Änderungen werden separat, nach Angebot, in Rechnung gestellt.",
          "Die genannten Fristen sind indikativ und hängen von der Reaktionsgeschwindigkeit der Kundschaft bei der Bereitstellung von Inhalten (Texte, Bilder, Rückmeldungen) ab.",
        ],
      },
      {
        heading: "Kein Widerrufsrecht",
        body: [
          "Im Gegensatz zum in der Europäischen Union geltenden Verbraucherrecht sieht das Schweizer Recht kein allgemeines Widerrufsrecht für Fernabsatzverträge vor. Die Annahme eines Angebots und die Zahlung der Anzahlung verpflichten beide Parteien daher ab deren Eingang fest, vorbehaltlich der nachstehenden Bestimmungen zur Kündigung.",
        ],
      },
      {
        heading: "Zahlungsverzug",
        body: [
          "Bei Nichtzahlung des Restbetrags zum vereinbarten Fälligkeitstermin behält sich Calyroc das Recht vor, laufende Arbeiten auszusetzen und die Lieferung der Dateien oder die Veröffentlichung der Website bis zur vollständigen Zahlung aufzuschieben.",
        ],
      },
      {
        heading: "Geistiges Eigentum",
        body: [
          "Der Quellcode und die speziell für die Kundschaft entwickelten Ergebnisse werden ihr nach Erhalt der vollständigen Zahlung übertragen. Calyroc behält sich das Recht vor, das Projekt in seinem Portfolio zu erwähnen, sofern nicht schriftlich anders vereinbart.",
        ],
      },
      {
        heading: "Gewährleistung und Haftung",
        body: [
          "Calyroc verpflichtet sich zu einer sorgfältigen, dem angenommenen Angebot entsprechenden Leistung. Ausser bei grober oder vorsätzlicher Pflichtverletzung ist die Haftung von Calyroc gegenüber der Kundschaft auf den für das betreffende Projekt tatsächlich bezahlten Betrag beschränkt. Calyroc haftet nicht für indirekte Schäden, insbesondere entgangenen Umsatz oder von der Kundschaft nicht gesicherte Daten, noch für von dieser bereitgestellte Inhalte.",
        ],
      },
      {
        heading: "Höhere Gewalt",
        body: [
          "Keine der Parteien haftet für eine Verzögerung oder Nichterfüllung infolge höherer Gewalt, die ausserhalb ihrer angemessenen Kontrolle liegt, wie etwa ein flächendeckender Ausfall bei einem Drittanbieter oder eine Naturkatastrophe.",
        ],
      },
      {
        heading: "Kündigung",
        body: [
          "Storniert die Kundschaft nach Zahlung der Anzahlung, verbleibt diese Calyroc im Umfang der bereits geleisteten Arbeit.",
        ],
      },
      {
        heading: "Anwendbares Recht und Gerichtsstand",
        body: [
          "Diese Bedingungen unterstehen Schweizer Recht, unter Ausschluss der Kollisionsnormen und des Wiener Übereinkommens über Verträge über den internationalen Warenkauf. Für sämtliche Streitigkeiten sind ausschliesslich die Gerichte des Kantons Waadt, Schweiz, zuständig.",
        ],
      },
    ],
  },
  pt: {
    title: "Condições gerais de venda",
    metaDescription:
      "Condições gerais de venda da Calyroc: orçamento, sinal, revisões, propriedade intelectual e lei aplicável.",
    updated: "Última atualização: julho de 2026",
    sections: [
      {
        heading: "Objeto",
        body: [
          "As presentes condições gerais de venda regem os serviços de criação e desenvolvimento de sites prestados pela Calyroc (Thomas Prud'homme), com exclusão de quaisquer outras condições não expressamente aceites por escrito.",
        ],
      },
      {
        heading: "Orçamento, sinal e preços",
        body: [
          "Cada projeto é precedido de um orçamento que detalha o âmbito, o preço e um prazo indicativo. O início do projeto é confirmado pelo pagamento de um sinal de 30 a 50% do valor total, pago online através da Stripe. O saldo é faturado na entrega, antes da publicação definitiva do site.",
          "Todos os preços são indicados em francos suíços (CHF). A Calyroc, empresa individual não sujeita a imposto sobre o valor acrescentado, não fatura IVA: os montantes indicados correspondem ao total devido.",
        ],
      },
      {
        heading: "Revisões e prazos",
        body: [
          "Cada pacote inclui duas rondas de revisões. Para além destas, as alterações adicionais são faturadas à parte, mediante orçamento.",
          "Os prazos indicados são meramente indicativos e dependem da rapidez do cliente no fornecimento dos conteúdos (textos, imagens, comentários).",
        ],
      },
      {
        heading: "Ausência de direito de livre resolução",
        body: [
          "Ao contrário do direito do consumidor aplicável na União Europeia, o direito suíço não prevê um direito geral de livre resolução para os contratos celebrados à distância. A aceitação de um orçamento e o pagamento do sinal vinculam, portanto, firmemente ambas as partes a partir da sua receção, sem prejuízo das disposições sobre rescisão abaixo indicadas.",
        ],
      },
      {
        heading: "Falta de pagamento",
        body: [
          "Em caso de falta de pagamento do saldo na data acordada, a Calyroc reserva-se o direito de suspender os trabalhos em curso e de adiar a entrega dos ficheiros ou a publicação do site até ao pagamento integral.",
        ],
      },
      {
        heading: "Propriedade intelectual",
        body: [
          "O código-fonte e os entregáveis desenvolvidos especificamente para o cliente são-lhe cedidos após a receção do pagamento integral. A Calyroc conserva o direito de mencionar o projeto no seu portefólio, salvo acordo escrito em contrário.",
        ],
      },
      {
        heading: "Garantia e responsabilidade",
        body: [
          "A Calyroc compromete-se a entregar um trabalho cuidado, em conformidade com o orçamento aceite. Salvo culpa grave ou dolo, a responsabilidade da Calyroc perante o cliente está limitada ao montante efetivamente pago pelo projeto em causa. A Calyroc não poderá ser responsabilizada por danos indiretos, nomeadamente a perda de faturação ou de dados não salvaguardados pelo cliente, nem pelo conteúdo por este fornecido.",
        ],
      },
      {
        heading: "Força maior",
        body: [
          "Nenhuma das partes poderá ser responsabilizada por um atraso ou incumprimento resultante de um caso de força maior alheio ao seu controlo razoável, como uma avaria generalizada de um fornecedor terceiro ou uma catástrofe natural.",
        ],
      },
      {
        heading: "Rescisão",
        body: [
          "Em caso de cancelamento pelo cliente após o pagamento do sinal, este permanece adquirido pela Calyroc na medida do trabalho já realizado.",
        ],
      },
      {
        heading: "Lei aplicável e foro competente",
        body: [
          "As presentes condições regem-se pelo direito suíço, com exclusão das regras de conflito de leis e da Convenção de Viena sobre a Venda Internacional de Mercadorias. Qualquer litígio é da competência exclusiva dos tribunais do cantão de Vaud, Suíça.",
        ],
      },
    ],
  },
  nl: {
    title: "Algemene verkoopvoorwaarden",
    metaDescription:
      "Algemene verkoopvoorwaarden van Calyroc: offertes, voorschot, revisies, intellectueel eigendom en toepasselijk recht.",
    updated: "Laatst bijgewerkt: juli 2026",
    sections: [
      {
        heading: "Doel",
        body: [
          "Deze algemene verkoopvoorwaarden regelen de diensten voor het creëren en ontwikkelen van websites die worden geleverd door Calyroc (Thomas Prud'homme), met uitsluiting van elke andere voorwaarde die niet uitdrukkelijk schriftelijk is aanvaard.",
        ],
      },
      {
        heading: "Offerte, voorschot en prijs",
        body: [
          "Elk project wordt voorafgegaan door een offerte met daarin de omvang, de prijs en de indicatieve planning. De start van het project wordt bevestigd door de betaling van een voorschot van 30 tot 50% van het totaalbedrag, online betaald via Stripe. Het saldo wordt gefactureerd bij levering, vóór de definitieve lancering.",
          "Alle prijzen zijn vermeld in Zwitserse frank (CHF). Calyroc, een eenmanszaak die niet onderworpen is aan belasting over de toegevoegde waarde, brengt geen btw in rekening: de weergegeven bedragen komen overeen met het totaal verschuldigde bedrag.",
        ],
      },
      {
        heading: "Revisies en termijnen",
        body: [
          "Elk pakket omvat twee revisierondes. Daarna worden aanvullende wijzigingen apart gefactureerd, op basis van een offerte.",
          "De aangekondigde termijnen zijn indicatief en zijn afhankelijk van de responsiviteit van de klant bij het aanleveren van inhoud (teksten, afbeeldingen, feedback).",
        ],
      },
      {
        heading: "Geen herroepingsrecht",
        body: [
          "In tegenstelling tot het consumentenrecht dat van toepassing is in de Europese Unie, voorziet het Zwitserse recht niet in een algemene herroepingstermijn voor overeenkomsten op afstand. Het accepteren van een offerte en het betalen van het voorschot binden beide partijen dan ook definitief vanaf ontvangst, onder voorbehoud van de hieronder vermelde bepalingen inzake beëindiging.",
        ],
      },
      {
        heading: "Niet-betaling",
        body: [
          "Bij niet-betaling van het saldo op de overeengekomen vervaldatum behoudt Calyroc zich het recht voor om lopende werkzaamheden op te schorten en de levering van bestanden of de lancering van de site uit te stellen tot volledige betaling is ontvangen.",
        ],
      },
      {
        heading: "Intellectueel eigendom",
        body: [
          "De broncode en de specifiek voor de klant ontwikkelde opleveringen worden aan de klant overgedragen bij ontvangst van de volledige betaling. Calyroc behoudt het recht om het project in zijn portfolio te vermelden, tenzij schriftelijk anders overeengekomen.",
        ],
      },
      {
        heading: "Garantie en aansprakelijkheid",
        body: [
          "Calyroc verbindt zich ertoe zorgvuldig werk te leveren, conform de geaccepteerde offerte. Behoudens grove of opzettelijke fout is de aansprakelijkheid van Calyroc jegens de klant beperkt tot het daadwerkelijk betaalde bedrag voor het betreffende project. Calyroc kan niet aansprakelijk worden gesteld voor indirecte schade, met inbegrip van omzetverlies of gegevens die niet door de klant zijn geback-upt, noch voor door de klant aangeleverde inhoud.",
        ],
      },
      {
        heading: "Overmacht",
        body: [
          "Geen van beide partijen kan aansprakelijk worden gesteld voor vertraging of niet-nakoming als gevolg van overmacht buiten haar redelijke controle, zoals een grootschalige storing bij een externe dienstverlener of een natuurramp.",
        ],
      },
      {
        heading: "Beëindiging",
        body: [
          "In geval van annulering door de klant na betaling van het voorschot, blijft dit voorschot verworven aan Calyroc naar rato van de reeds verrichte werkzaamheden.",
        ],
      },
      {
        heading: "Toepasselijk recht en bevoegde rechtbank",
        body: [
          "Deze voorwaarden zijn onderworpen aan Zwitsers recht, met uitsluiting van de regels van internationaal privaatrecht en het Weens Koopverdrag. Elk geschil valt onder de exclusieve bevoegdheid van de rechtbanken van het kanton Vaud, Zwitserland.",
        ],
      },
    ],
  },
  pl: {
    title: "Ogólne warunki sprzedaży",
    metaDescription:
      "Ogólne warunki sprzedaży Calyroc: wyceny, zaliczka, poprawki, własność intelektualna i prawo właściwe.",
    updated: "Ostatnia aktualizacja: lipiec 2026",
    sections: [
      {
        heading: "Przedmiot",
        body: [
          "Niniejsze ogólne warunki sprzedaży regulują usługi tworzenia i rozwoju stron internetowych świadczone przez Calyroc (Thomas Prud'homme), z wyłączeniem wszelkich innych warunków niezaakceptowanych wyraźnie na piśmie.",
        ],
      },
      {
        heading: "Wycena, zaliczka i cena",
        body: [
          "Każdy projekt poprzedzony jest wyceną określającą zakres, cenę i orientacyjny harmonogram. Rozpoczęcie projektu potwierdza wpłata zaliczki w wysokości 30–50% całkowitej kwoty, płatnej online przez Stripe. Pozostała kwota jest fakturowana przy dostawie, przed ostatecznym uruchomieniem.",
          "Wszystkie ceny podane są w frankach szwajcarskich (CHF). Calyroc, jednoosobowa działalność gospodarcza niepodlegająca podatkowi od wartości dodanej, nie nalicza VAT: podane kwoty odpowiadają łącznej kwocie należnej.",
        ],
      },
      {
        heading: "Poprawki i terminy",
        body: [
          "Każdy pakiet obejmuje dwie rundy poprawek. Powyżej tego dodatkowe zmiany są fakturowane osobno, na podstawie wyceny.",
          "Podane terminy są orientacyjne i zależą od terminowości klienta w dostarczaniu treści (teksty, obrazy, uwagi).",
        ],
      },
      {
        heading: "Brak prawa odstąpienia od umowy",
        body: [
          "W przeciwieństwie do prawa konsumenckiego obowiązującego w Unii Europejskiej, prawo szwajcarskie nie przewiduje ogólnego terminu odstąpienia od umów zawieranych na odległość. Akceptacja wyceny i wpłata zaliczki wiążą zatem obie strony w sposób ostateczny od momentu ich otrzymania, z zastrzeżeniem postanowień dotyczących rozwiązania umowy poniżej.",
        ],
      },
      {
        heading: "Brak płatności",
        body: [
          "W przypadku braku zapłaty pozostałej kwoty w uzgodnionym terminie, Calyroc zastrzega sobie prawo do wstrzymania prowadzonych prac oraz opóźnienia dostawy plików lub uruchomienia strony do momentu pełnej zapłaty.",
        ],
      },
      {
        heading: "Własność intelektualna",
        body: [
          "Kod źródłowy i materiały opracowane specjalnie dla klienta zostają mu przekazane po otrzymaniu pełnej zapłaty. Calyroc zachowuje prawo do wspomnienia o projekcie w swoim portfolio, chyba że uzgodniono inaczej na piśmie.",
        ],
      },
      {
        heading: "Gwarancja i odpowiedzialność",
        body: [
          "Calyroc zobowiązuje się do starannego wykonania pracy, zgodnie z zaakceptowaną wyceną. Z wyjątkiem rażącego lub umyślnego uchybienia, odpowiedzialność Calyroc wobec klienta jest ograniczona do kwoty faktycznie zapłaconej za dany projekt. Calyroc nie ponosi odpowiedzialności za szkody pośrednie, w tym utratę przychodów lub danych niezabezpieczonych przez klienta, ani za treści dostarczone przez klienta.",
        ],
      },
      {
        heading: "Siła wyższa",
        body: [
          "Żadna ze stron nie ponosi odpowiedzialności za opóźnienie lub niewykonanie zobowiązania wynikające z siły wyższej pozostającej poza jej rozsądną kontrolą, takiej jak rozległa awaria u zewnętrznego dostawcy lub klęska żywiołowa.",
        ],
      },
      {
        heading: "Rozwiązanie umowy",
        body: [
          "W przypadku odwołania zamówienia przez klienta po wpłacie zaliczki, zaliczka pozostaje własnością Calyroc w wysokości odpowiadającej już wykonanej pracy.",
        ],
      },
      {
        heading: "Prawo właściwe i właściwość sądu",
        body: [
          "Niniejsze warunki podlegają prawu szwajcarskiemu, z wyłączeniem norm kolizyjnych oraz Konwencji wiedeńskiej o umowach międzynarodowej sprzedaży towarów. Wszelkie spory podlegają wyłącznej właściwości sądów kantonu Vaud w Szwajcarii.",
        ],
      },
    ],
  },
  ru: {
    title: "Общие условия продажи",
    metaDescription:
      "Общие условия продажи Calyroc: сметы, предоплата, правки, интеллектуальная собственность и применимое право.",
    updated: "Последнее обновление: июль 2026",
    sections: [
      {
        heading: "Предмет",
        body: [
          "Настоящие общие условия продажи регулируют услуги по созданию и разработке веб-сайтов, предоставляемые Calyroc (Тома Прюдом / Thomas Prud'homme), исключая любые иные условия, прямо не принятые в письменной форме.",
        ],
      },
      {
        heading: "Смета, предоплата и цена",
        body: [
          "Каждому проекту предшествует смета с подробным указанием объёма работ, цены и ориентировочных сроков. Начало проекта подтверждается внесением предоплаты в размере от 30 до 50% от общей суммы, оплачиваемой онлайн через Stripe. Оставшаяся сумма выставляется к оплате при сдаче проекта, до окончательного запуска сайта.",
          "Все цены указаны в швейцарских франках (CHF). Calyroc, индивидуальное предприятие, не являющееся плательщиком налога на добавленную стоимость, не начисляет НДС: указанные суммы соответствуют общей сумме к оплате.",
        ],
      },
      {
        heading: "Правки и сроки",
        body: [
          "Каждый пакет включает два раунда правок. Сверх этого дополнительные изменения оплачиваются отдельно, по смете.",
          "Указанные сроки являются ориентировочными и зависят от оперативности клиента в предоставлении материалов (текстов, изображений, замечаний).",
        ],
      },
      {
        heading: "Отсутствие права на отказ от договора",
        body: [
          "В отличие от законодательства о защите прав потребителей, действующего в Европейском союзе, швейцарское право не предусматривает общего срока для отказа от договоров, заключённых дистанционно. Таким образом, принятие сметы и внесение предоплаты окончательно связывают обе стороны с момента их получения, с учётом положений о расторжении договора, указанных ниже.",
        ],
      },
      {
        heading: "Неоплата",
        body: [
          "В случае неоплаты оставшейся суммы в согласованный срок Calyroc оставляет за собой право приостановить текущие работы и отложить передачу файлов или запуск сайта до полной оплаты.",
        ],
      },
      {
        heading: "Интеллектуальная собственность",
        body: [
          "Исходный код и результаты работы, разработанные специально для клиента, передаются ему после получения полной оплаты. Calyroc сохраняет за собой право упомянуть проект в своём портфолио, если иное не согласовано в письменной форме.",
        ],
      },
      {
        heading: "Гарантия и ответственность",
        body: [
          "Calyroc обязуется выполнить работу тщательно, в соответствии с принятой сметой. За исключением случаев грубой или умышленной вины, ответственность Calyroc перед клиентом ограничивается суммой, фактически уплаченной за соответствующий проект. Calyroc не несёт ответственности за косвенные убытки, включая упущенную выгоду или данные, не сохранённые клиентом, а также за содержание, предоставленное клиентом.",
        ],
      },
      {
        heading: "Форс-мажор",
        body: [
          "Ни одна из сторон не может быть привлечена к ответственности за задержку или неисполнение обязательств, вызванные обстоятельствами непреодолимой силы, находящимися вне её разумного контроля, такими как масштабный сбой у стороннего поставщика услуг или стихийное бедствие.",
        ],
      },
      {
        heading: "Расторжение договора",
        body: [
          "В случае отмены заказа клиентом после внесения предоплаты, предоплата остаётся у Calyroc в размере, соответствующем уже выполненной работе.",
        ],
      },
      {
        heading: "Применимое право и юрисдикция",
        body: [
          "Настоящие условия регулируются швейцарским правом, за исключением коллизионных норм и Венской конвенции о договорах международной купли-продажи товаров. Любой спор относится к исключительной компетенции судов кантона Во, Швейцария.",
        ],
      },
    ],
  },
};
