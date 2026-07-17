import type { ServiceDefinition } from "./types";

export const maintenance: ServiceDefinition = {
  id: "maintenance",
  relatedPackId: null,
  translations: {
    en: {
      title: "Website Maintenance",
      metaDescription:
        "Ongoing hosting, security updates, small content changes, and email support so your website stays fast, secure, and up to date — without you having to think about it. Monthly subscription.",
      heroHeadline: "A website that stays healthy after launch, not just on launch day.",
      heroSubhead:
        "Hosting, security updates, small changes, and direct email support — handled every month so your site keeps working while you focus on your business.",
      description: [
        "A website isn't a one-time deliverable — it needs hosting kept current, dependencies patched, and small updates made as your business evolves. Left unattended, even a well-built site slowly accumulates risk: outdated software, broken links, content that no longer matches reality.",
        "This plan covers exactly that ongoing care: reliable hosting, regular security updates, small content or copy changes as you need them, and direct email support when something comes up — so the site keeps performing the way it did the day it launched.",
      ],
      includes: [
        "Managed hosting on Cloudflare's global network",
        "Regular security and dependency updates",
        "Small content and copy changes included each month",
        "Direct email support",
        "Uptime and performance monitoring",
      ],
      process: [
        {
          title: "Onboarding",
          description:
            "We review your site's current setup and confirm what's covered under the plan.",
        },
        {
          title: "Monthly upkeep",
          description: "Hosting, updates, and monitoring run continuously in the background.",
        },
        {
          title: "Change requests",
          description:
            "Send small changes by email — text edits, new images, minor adjustments — and they get handled.",
        },
        {
          title: "Check-ins",
          description:
            "Periodic updates on site health, performance, and anything worth knowing about.",
        },
      ],
      tech: "—",
      timeline: "Monthly subscription",
      faq: [
        {
          question: "What counts as a 'small change'?",
          answer:
            "Text edits, swapping an image, updating a price or opening hours, small layout tweaks — changes that take a few minutes rather than a redesign. Larger requests (new pages, new features) are scoped and quoted separately.",
        },
        {
          question: "What happens if something breaks?",
          answer:
            "You reach out by email and it gets looked at as a priority — most issues are caught by monitoring before you'd even notice them.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes, it's a monthly subscription with no long-term commitment. If you cancel, your site keeps running on its current setup, just without ongoing updates and support.",
        },
        {
          question: "Do I need this if my site was already built by Calyroc?",
          answer:
            "It's optional but recommended — without it, your site's dependencies and security patches will gradually fall behind, which is the single most common cause of a site slowing down or becoming vulnerable over time.",
        },
      ],
      ctaLabel: "Subscribe",
    },
    fr: {
      title: "Maintenance de site web",
      metaDescription:
        "Hébergement, mises à jour de sécurité, petites modifications de contenu, et support par email pour que votre site reste rapide, sécurisé et à jour — sans que vous ayez à y penser. Abonnement mensuel.",
      heroHeadline: "Un site qui reste en bonne santé après le lancement, pas seulement le jour J.",
      heroSubhead:
        "Hébergement, mises à jour de sécurité, petites modifications, et support direct par email — géré chaque mois pour que votre site continue de fonctionner pendant que vous vous concentrez sur votre activité.",
      description: [
        "Un site web n'est pas une livraison ponctuelle — il a besoin d'un hébergement maintenu à jour, de dépendances corrigées, et de petites mises à jour au fil de l'évolution de votre activité. Laissé sans suivi, même un site bien construit accumule lentement des risques : logiciels obsolètes, liens cassés, contenu qui ne correspond plus à la réalité.",
        "Ce forfait couvre exactement ce suivi continu : un hébergement fiable, des mises à jour de sécurité régulières, de petites modifications de contenu ou de texte selon vos besoins, et un support direct par email quand quelque chose survient — pour que le site continue de fonctionner comme le jour de son lancement.",
      ],
      includes: [
        "Hébergement géré sur le réseau mondial de Cloudflare",
        "Mises à jour de sécurité et de dépendances régulières",
        "Petites modifications de contenu et de texte incluses chaque mois",
        "Support direct par email",
        "Surveillance de la disponibilité et des performances",
      ],
      process: [
        {
          title: "Prise en main",
          description:
            "On passe en revue la configuration actuelle de votre site et on confirme ce qui est couvert par le forfait.",
        },
        {
          title: "Entretien mensuel",
          description:
            "Hébergement, mises à jour, et surveillance tournent en continu en arrière-plan.",
        },
        {
          title: "Demandes de modification",
          description:
            "Envoyez vos petites modifications par email — texte, nouvelles images, ajustements mineurs — et elles sont prises en charge.",
        },
        {
          title: "Points réguliers",
          description:
            "Mises à jour périodiques sur la santé du site, les performances, et tout ce qui mérite d'être signalé.",
        },
      ],
      tech: "—",
      timeline: "Abonnement mensuel",
      faq: [
        {
          question: "Qu'est-ce qu'une « petite modification » ?",
          answer:
            "Modification de texte, changement d'image, mise à jour d'un prix ou d'horaires, petits ajustements de mise en page — des changements qui prennent quelques minutes plutôt qu'une refonte. Les demandes plus importantes (nouvelles pages, nouvelles fonctionnalités) sont cadrées et devisées séparément.",
        },
        {
          question: "Que se passe-t-il en cas de problème ?",
          answer:
            "Vous nous contactez par email et c'est traité en priorité — la plupart des problèmes sont détectés par la surveillance avant même que vous ne les remarquiez.",
        },
        {
          question: "Puis-je résilier à tout moment ?",
          answer:
            "Oui, c'est un abonnement mensuel sans engagement long terme. En cas de résiliation, votre site continue de fonctionner dans sa configuration actuelle, simplement sans mises à jour ni support continu.",
        },
        {
          question: "En ai-je besoin si mon site a déjà été réalisé par Calyroc ?",
          answer:
            "C'est optionnel mais recommandé — sans ce suivi, les dépendances et correctifs de sécurité de votre site prendront progressivement du retard, ce qui est la cause la plus fréquente de ralentissement ou de vulnérabilité d'un site avec le temps.",
        },
      ],
      ctaLabel: "S'abonner",
    },
    es: {
      title: "Mantenimiento de sitio web",
      metaDescription:
        "Alojamiento, actualizaciones de seguridad, pequeños cambios de contenido, y soporte por email para que su sitio se mantenga rápido, seguro y actualizado — sin que tenga que pensarlo. Suscripción mensual.",
      heroHeadline: "Un sitio que se mantiene sano después del lanzamiento, no solo el día D.",
      heroSubhead:
        "Alojamiento, actualizaciones de seguridad, pequeños cambios, y soporte directo por email — gestionado cada mes para que su sitio siga funcionando mientras usted se centra en su negocio.",
      description: [
        "Un sitio web no es una entrega puntual — necesita un alojamiento actualizado, dependencias corregidas, y pequeñas actualizaciones a medida que su negocio evoluciona. Sin seguimiento, incluso un sitio bien construido acumula riesgos poco a poco: software obsoleto, enlaces rotos, contenido que ya no corresponde a la realidad.",
        "Este plan cubre exactamente ese cuidado continuo: alojamiento fiable, actualizaciones de seguridad regulares, pequeños cambios de contenido o texto según lo necesite, y soporte directo por email cuando surja algo — para que el sitio siga funcionando como el día de su lanzamiento.",
      ],
      includes: [
        "Alojamiento gestionado en la red global de Cloudflare",
        "Actualizaciones regulares de seguridad y dependencias",
        "Pequeños cambios de contenido y texto incluidos cada mes",
        "Soporte directo por email",
        "Supervisión de disponibilidad y rendimiento",
      ],
      process: [
        {
          title: "Incorporación",
          description:
            "Revisamos la configuración actual de su sitio y confirmamos qué está cubierto por el plan.",
        },
        {
          title: "Mantenimiento mensual",
          description:
            "El alojamiento, las actualizaciones, y la supervisión funcionan de forma continua en segundo plano.",
        },
        {
          title: "Solicitudes de cambio",
          description:
            "Envíe sus pequeños cambios por email — textos, nuevas imágenes, ajustes menores — y se gestionan.",
        },
        {
          title: "Seguimientos",
          description:
            "Actualizaciones periódicas sobre el estado del sitio, el rendimiento, y cualquier cosa relevante.",
        },
      ],
      tech: "—",
      timeline: "Suscripción mensual",
      faq: [
        {
          question: "¿Qué cuenta como un «pequeño cambio»?",
          answer:
            "Ediciones de texto, cambio de una imagen, actualización de un precio o de horarios, pequeños ajustes de maquetación — cambios que llevan unos minutos en lugar de un rediseño. Las solicitudes más grandes (nuevas páginas, nuevas funciones) se definen y presupuestan aparte.",
        },
        {
          question: "¿Qué pasa si algo falla?",
          answer:
            "Nos contacta por email y se atiende con prioridad — la mayoría de los problemas se detectan mediante supervisión antes de que usted los note.",
        },
        {
          question: "¿Puedo cancelar en cualquier momento?",
          answer:
            "Sí, es una suscripción mensual sin compromiso a largo plazo. Si cancela, su sitio sigue funcionando con su configuración actual, simplemente sin actualizaciones ni soporte continuos.",
        },
        {
          question: "¿Lo necesito si mi sitio ya fue creado por Calyroc?",
          answer:
            "Es opcional pero recomendado — sin él, las dependencias y parches de seguridad de su sitio irán quedando desactualizados poco a poco, la causa más habitual de que un sitio se vuelva lento o vulnerable con el tiempo.",
        },
      ],
      ctaLabel: "Suscribirse",
    },
    it: {
      title: "Manutenzione del sito web",
      metaDescription:
        "Hosting, aggiornamenti di sicurezza, piccole modifiche di contenuto, e supporto via email affinché il tuo sito resti veloce, sicuro e aggiornato — senza doverci pensare. Abbonamento mensile.",
      heroHeadline: "Un sito che resta in salute dopo il lancio, non solo il giorno del lancio.",
      heroSubhead:
        "Hosting, aggiornamenti di sicurezza, piccole modifiche, e supporto diretto via email — gestiti ogni mese affinché il tuo sito continui a funzionare mentre tu ti concentri sulla tua attività.",
      description: [
        "Un sito web non è una consegna una tantum — ha bisogno di un hosting mantenuto aggiornato, dipendenze corrette, e piccoli aggiornamenti man mano che la tua attività evolve. Lasciato senza cura, anche un sito ben costruito accumula lentamente rischi: software obsoleto, link rotti, contenuti che non corrispondono più alla realtà.",
        "Questo piano copre esattamente questa cura continua: hosting affidabile, aggiornamenti di sicurezza regolari, piccole modifiche di contenuto o testo quando servono, e supporto diretto via email quando serve — affinché il sito continui a funzionare come il giorno del lancio.",
      ],
      includes: [
        "Hosting gestito sulla rete globale di Cloudflare",
        "Aggiornamenti regolari di sicurezza e dipendenze",
        "Piccole modifiche di contenuto e testo incluse ogni mese",
        "Supporto diretto via email",
        "Monitoraggio di disponibilità e prestazioni",
      ],
      process: [
        {
          title: "Avvio",
          description:
            "Esaminiamo la configurazione attuale del tuo sito e confermiamo cosa è coperto dal piano.",
        },
        {
          title: "Manutenzione mensile",
          description:
            "Hosting, aggiornamenti, e monitoraggio funzionano continuamente in background.",
        },
        {
          title: "Richieste di modifica",
          description:
            "Invia le tue piccole modifiche via email — testi, nuove immagini, aggiustamenti minori — e vengono gestite.",
        },
        {
          title: "Aggiornamenti periodici",
          description:
            "Report periodici sullo stato del sito, le prestazioni, e qualsiasi cosa valga la pena sapere.",
        },
      ],
      tech: "—",
      timeline: "Abbonamento mensile",
      faq: [
        {
          question: "Cosa conta come «piccola modifica»?",
          answer:
            "Modifiche di testo, sostituzione di un'immagine, aggiornamento di un prezzo o di orari, piccoli aggiustamenti di layout — modifiche che richiedono pochi minuti anziché un redesign. Le richieste più grandi (nuove pagine, nuove funzionalità) vengono definite e preventivate separatamente.",
        },
        {
          question: "Cosa succede se qualcosa si rompe?",
          answer:
            "Ci contatti via email e viene gestito con priorità — la maggior parte dei problemi viene rilevata dal monitoraggio prima ancora che te ne accorga.",
        },
        {
          question: "Posso disdire in qualsiasi momento?",
          answer:
            "Sì, è un abbonamento mensile senza vincoli a lungo termine. In caso di disdetta, il tuo sito continua a funzionare con la configurazione attuale, semplicemente senza aggiornamenti e supporto continui.",
        },
        {
          question: "Mi serve se il mio sito è già stato realizzato da Calyroc?",
          answer:
            "È facoltativo ma consigliato — senza di esso, le dipendenze e le patch di sicurezza del tuo sito accumuleranno progressivamente ritardo, la causa più comune di un sito che rallenta o diventa vulnerabile nel tempo.",
        },
      ],
      ctaLabel: "Abbonati",
    },
    de: {
      title: "Website-Wartung",
      metaDescription:
        "Laufendes Hosting, Sicherheitsupdates, kleine Inhaltsänderungen, und E-Mail-Support, damit Ihre Website schnell, sicher und aktuell bleibt — ohne dass Sie daran denken müssen. Monatliches Abonnement.",
      heroHeadline: "Eine Website, die nach dem Launch gesund bleibt — nicht nur am Launch-Tag.",
      heroSubhead:
        "Hosting, Sicherheitsupdates, kleine Änderungen, und direkter E-Mail-Support — jeden Monat erledigt, damit Ihre Website weiterläuft, während Sie sich auf Ihr Geschäft konzentrieren.",
      description: [
        "Eine Website ist keine einmalige Lieferung — sie braucht aktuell gehaltenes Hosting, gepatchte Abhängigkeiten, und kleine Updates, während sich Ihr Geschäft weiterentwickelt. Unbeachtet gelassen, sammelt selbst eine gut gebaute Website langsam Risiken an: veraltete Software, defekte Links, Inhalte, die nicht mehr der Realität entsprechen.",
        "Dieses Paket deckt genau diese laufende Pflege ab: zuverlässiges Hosting, regelmäßige Sicherheitsupdates, kleine Inhalts- oder Textänderungen nach Bedarf, und direkten E-Mail-Support, wenn etwas ansteht — damit die Website so weiterläuft wie am Tag des Launches.",
      ],
      includes: [
        "Verwaltetes Hosting im globalen Netzwerk von Cloudflare",
        "Regelmäßige Sicherheits- und Abhängigkeits-Updates",
        "Kleine Inhalts- und Textänderungen monatlich inbegriffen",
        "Direkter E-Mail-Support",
        "Verfügbarkeits- und Leistungsüberwachung",
      ],
      process: [
        {
          title: "Einrichtung",
          description:
            "Wir prüfen die aktuelle Konfiguration Ihrer Website und bestätigen, was im Paket enthalten ist.",
        },
        {
          title: "Monatliche Pflege",
          description: "Hosting, Updates, und Überwachung laufen kontinuierlich im Hintergrund.",
        },
        {
          title: "Änderungswünsche",
          description:
            "Senden Sie kleine Änderungen per E-Mail — Textkorrekturen, neue Bilder, kleinere Anpassungen — und sie werden erledigt.",
        },
        {
          title: "Check-ins",
          description:
            "Regelmäßige Updates zu Website-Zustand, Leistung, und allem, was wissenswert ist.",
        },
      ],
      tech: "—",
      timeline: "Monatliches Abonnement",
      faq: [
        {
          question: "Was zählt als „kleine Änderung“?",
          answer:
            "Textkorrekturen, ein Bild austauschen, einen Preis oder Öffnungszeiten aktualisieren, kleine Layout-Anpassungen — Änderungen, die wenige Minuten statt eines Redesigns brauchen. Größere Anfragen (neue Seiten, neue Funktionen) werden separat definiert und angeboten.",
        },
        {
          question: "Was passiert, wenn etwas kaputtgeht?",
          answer:
            "Sie melden sich per E-Mail und es wird prioritär bearbeitet — die meisten Probleme werden durch die Überwachung erkannt, bevor Sie sie überhaupt bemerken.",
        },
        {
          question: "Kann ich jederzeit kündigen?",
          answer:
            "Ja, es ist ein monatliches Abonnement ohne langfristige Bindung. Bei Kündigung läuft Ihre Website mit der aktuellen Konfiguration weiter, einfach ohne laufende Updates und Support.",
        },
        {
          question: "Brauche ich das, wenn meine Website bereits von Calyroc gebaut wurde?",
          answer:
            "Es ist optional, aber empfohlen — ohne es geraten die Abhängigkeiten und Sicherheitspatches Ihrer Website mit der Zeit schrittweise in Rückstand, die häufigste Ursache dafür, dass eine Website mit der Zeit langsamer oder angreifbar wird.",
        },
      ],
      ctaLabel: "Abonnieren",
    },
    pt: {
      title: "Manutenção de site",
      metaDescription:
        "Alojamento, atualizações de segurança, pequenas alterações de conteúdo, e suporte por email para que o seu site se mantenha rápido, seguro e atualizado — sem que tenha de pensar nisso. Subscrição mensal.",
      heroHeadline:
        "Um site que se mantém saudável depois do lançamento, não só no dia do lançamento.",
      heroSubhead:
        "Alojamento, atualizações de segurança, pequenas alterações, e suporte direto por email — tratado todos os meses para que o seu site continue a funcionar enquanto se concentra no seu negócio.",
      description: [
        "Um site não é uma entrega pontual — precisa de alojamento mantido atualizado, dependências corrigidas, e pequenas atualizações à medida que o seu negócio evolui. Sem acompanhamento, mesmo um site bem construído acumula riscos lentamente: software desatualizado, links quebrados, conteúdo que já não corresponde à realidade.",
        "Este plano cobre exatamente esse cuidado contínuo: alojamento fiável, atualizações de segurança regulares, pequenas alterações de conteúdo ou texto conforme necessário, e suporte direto por email quando surge algo — para que o site continue a funcionar como no dia do lançamento.",
      ],
      includes: [
        "Alojamento gerido na rede global da Cloudflare",
        "Atualizações regulares de segurança e dependências",
        "Pequenas alterações de conteúdo e texto incluídas todos os meses",
        "Suporte direto por email",
        "Monitorização de disponibilidade e desempenho",
      ],
      process: [
        {
          title: "Integração",
          description:
            "Revemos a configuração atual do seu site e confirmamos o que está coberto pelo plano.",
        },
        {
          title: "Manutenção mensal",
          description:
            "Alojamento, atualizações, e monitorização funcionam continuamente em segundo plano.",
        },
        {
          title: "Pedidos de alteração",
          description:
            "Envie as suas pequenas alterações por email — textos, novas imagens, ajustes menores — e são tratadas.",
        },
        {
          title: "Pontos de situação",
          description:
            "Atualizações periódicas sobre o estado do site, o desempenho, e tudo o que valha a pena saber.",
        },
      ],
      tech: "—",
      timeline: "Subscrição mensal",
      faq: [
        {
          question: "O que conta como uma «pequena alteração»?",
          answer:
            "Edições de texto, troca de uma imagem, atualização de um preço ou horário, pequenos ajustes de layout — alterações que demoram alguns minutos em vez de um redesign. Pedidos maiores (novas páginas, novas funcionalidades) são definidos e orçamentados à parte.",
        },
        {
          question: "O que acontece se algo falhar?",
          answer:
            "Contacta-nos por email e é tratado com prioridade — a maioria dos problemas é detetada pela monitorização antes mesmo de os notar.",
        },
        {
          question: "Posso cancelar a qualquer momento?",
          answer:
            "Sim, é uma subscrição mensal sem compromisso a longo prazo. Se cancelar, o seu site continua a funcionar com a configuração atual, apenas sem atualizações e suporte contínuos.",
        },
        {
          question: "Preciso disto se o meu site já foi feito pela Calyroc?",
          answer:
            "É opcional mas recomendado — sem isto, as dependências e correções de segurança do seu site vão ficando gradualmente desatualizadas, a causa mais comum de um site ficar lento ou vulnerável com o tempo.",
        },
      ],
      ctaLabel: "Subscrever",
    },
    nl: {
      title: "Website-onderhoud",
      metaDescription:
        "Doorlopende hosting, beveiligingsupdates, kleine contentwijzigingen, en e-mailondersteuning zodat uw website snel, veilig en actueel blijft — zonder dat u eraan hoeft te denken. Maandelijks abonnement.",
      heroHeadline: "Een website die gezond blijft na de lancering, niet alleen op lanceringsdag.",
      heroSubhead:
        "Hosting, beveiligingsupdates, kleine aanpassingen, en directe e-mailondersteuning — elke maand geregeld zodat uw site blijft werken terwijl u zich op uw bedrijf richt.",
      description: [
        "Een website is geen eenmalige oplevering — ze heeft hosting nodig die actueel blijft, dependencies die worden gepatcht, en kleine updates naarmate uw bedrijf zich ontwikkelt. Zonder onderhoud bouwt zelfs een goed gebouwde site langzaam risico op: verouderde software, kapotte links, content die niet meer overeenkomt met de werkelijkheid.",
        "Dit plan dekt precies die doorlopende zorg: betrouwbare hosting, regelmatige beveiligingsupdates, kleine content- of tekstwijzigingen wanneer nodig, en directe e-mailondersteuning wanneer er iets speelt — zodat de site blijft presteren zoals op de dag van lancering.",
      ],
      includes: [
        "Beheerde hosting op het wereldwijde netwerk van Cloudflare",
        "Regelmatige beveiligings- en dependency-updates",
        "Kleine content- en tekstwijzigingen elke maand inbegrepen",
        "Directe e-mailondersteuning",
        "Monitoring van beschikbaarheid en prestaties",
      ],
      process: [
        {
          title: "Onboarding",
          description:
            "We bekijken de huidige opzet van uw site en bevestigen wat onder het plan valt.",
        },
        {
          title: "Maandelijks onderhoud",
          description: "Hosting, updates, en monitoring draaien continu op de achtergrond.",
        },
        {
          title: "Wijzigingsverzoeken",
          description:
            "Stuur uw kleine wijzigingen per e-mail — tekst, nieuwe afbeeldingen, kleine aanpassingen — en ze worden afgehandeld.",
        },
        {
          title: "Check-ins",
          description:
            "Periodieke updates over de gezondheid van de site, prestaties, en al het andere wat het weten waard is.",
        },
      ],
      tech: "—",
      timeline: "Maandelijks abonnement",
      faq: [
        {
          question: "Wat telt als een 'kleine wijziging'?",
          answer:
            "Tekstwijzigingen, een afbeelding vervangen, een prijs of openingstijden bijwerken, kleine layoutaanpassingen — wijzigingen die enkele minuten kosten in plaats van een herontwerp. Grotere verzoeken (nieuwe pagina's, nieuwe functies) worden apart afgebakend en geoffreerd.",
        },
        {
          question: "Wat gebeurt er als er iets kapotgaat?",
          answer:
            "U neemt per e-mail contact op en het wordt met prioriteit bekeken — de meeste problemen worden door monitoring opgemerkt voordat u ze zelf zou zien.",
        },
        {
          question: "Kan ik op elk moment opzeggen?",
          answer:
            "Ja, het is een maandelijks abonnement zonder langetermijnverplichting. Bij opzegging blijft uw site draaien op de huidige opzet, alleen zonder doorlopende updates en ondersteuning.",
        },
        {
          question: "Heb ik dit nodig als mijn site al door Calyroc is gebouwd?",
          answer:
            "Het is optioneel maar aanbevolen — zonder dit raken de dependencies en beveiligingspatches van uw site geleidelijk achter, de meest voorkomende oorzaak van een site die na verloop van tijd trager of kwetsbaarder wordt.",
        },
      ],
      ctaLabel: "Abonneren",
    },
    pl: {
      title: "Utrzymanie strony",
      metaDescription:
        "Ciągły hosting, aktualizacje bezpieczeństwa, drobne zmiany treści, i wsparcie mailowe, dzięki którym Twoja strona pozostaje szybka, bezpieczna i aktualna — bez konieczności myślenia o tym. Subskrypcja miesięczna.",
      heroHeadline: "Strona, która pozostaje zdrowa po premierze, nie tylko w dniu premiery.",
      heroSubhead:
        "Hosting, aktualizacje bezpieczeństwa, drobne zmiany, i bezpośrednie wsparcie mailowe — obsługiwane co miesiąc, by Twoja strona działała, podczas gdy Ty skupiasz się na swoim biznesie.",
      description: [
        "Strona internetowa to nie jednorazowa dostawa — potrzebuje aktualnego hostingu, łatanych zależności, i drobnych aktualizacji w miarę rozwoju Twojego biznesu. Pozostawiona bez opieki, nawet dobrze zbudowana strona powoli gromadzi ryzyko: przestarzałe oprogramowanie, zepsute linki, treści, które już nie odpowiadają rzeczywistości.",
        "Ten plan obejmuje dokładnie taką ciągłą opiekę: niezawodny hosting, regularne aktualizacje bezpieczeństwa, drobne zmiany treści lub tekstu w miarę potrzeb, i bezpośrednie wsparcie mailowe, gdy coś się pojawi — by strona działała tak samo jak w dniu premiery.",
      ],
      includes: [
        "Zarządzany hosting w globalnej sieci Cloudflare",
        "Regularne aktualizacje bezpieczeństwa i zależności",
        "Drobne zmiany treści i tekstu wliczone co miesiąc",
        "Bezpośrednie wsparcie mailowe",
        "Monitorowanie dostępności i wydajności",
      ],
      process: [
        {
          title: "Wdrożenie",
          description:
            "Przeglądamy obecną konfigurację Twojej strony i potwierdzamy, co obejmuje plan.",
        },
        {
          title: "Miesięczna opieka",
          description: "Hosting, aktualizacje, i monitoring działają nieprzerwanie w tle.",
        },
        {
          title: "Zgłoszenia zmian",
          description:
            "Wysyłasz drobne zmiany mailem — teksty, nowe zdjęcia, drobne poprawki — a my się nimi zajmujemy.",
        },
        {
          title: "Podsumowania",
          description:
            "Okresowe aktualizacje na temat stanu strony, wydajności, i wszystkiego, co warto wiedzieć.",
        },
      ],
      tech: "—",
      timeline: "Subskrypcja miesięczna",
      faq: [
        {
          question: "Co liczy się jako „drobna zmiana”?",
          answer:
            "Edycje tekstu, wymiana zdjęcia, aktualizacja ceny lub godzin otwarcia, drobne poprawki układu — zmiany zajmujące kilka minut, a nie przeprojektowanie. Większe prośby (nowe strony, nowe funkcje) są definiowane i wyceniane osobno.",
        },
        {
          question: "Co się dzieje, gdy coś się zepsuje?",
          answer:
            "Kontaktujesz się mailem i sprawa jest traktowana priorytetowo — większość problemów jest wykrywana przez monitoring, zanim w ogóle je zauważysz.",
        },
        {
          question: "Czy mogę zrezygnować w dowolnym momencie?",
          answer:
            "Tak, to subskrypcja miesięczna bez długoterminowego zobowiązania. Po rezygnacji Twoja strona nadal działa w obecnej konfiguracji, po prostu bez bieżących aktualizacji i wsparcia.",
        },
        {
          question: "Czy potrzebuję tego, jeśli moją stronę zbudował już Calyroc?",
          answer:
            "To opcjonalne, ale zalecane — bez tego zależności i poprawki bezpieczeństwa Twojej strony będą stopniowo się starzeć, co jest najczęstszą przyczyną spowolnienia lub podatności strony z czasem.",
        },
      ],
      ctaLabel: "Subskrybuj",
    },
    ru: {
      title: "Обслуживание сайта",
      metaDescription:
        "Постоянный хостинг, обновления безопасности, небольшие изменения контента, и поддержка по email, чтобы ваш сайт оставался быстрым, безопасным и актуальным — без лишних забот с вашей стороны. Ежемесячная подписка.",
      heroHeadline: "Сайт, который остаётся в порядке после запуска, а не только в день запуска.",
      heroSubhead:
        "Хостинг, обновления безопасности, небольшие изменения, и прямая поддержка по email — обеспечивается каждый месяц, чтобы сайт продолжал работать, пока вы сосредоточены на своём бизнесе.",
      description: [
        "Сайт — это не разовая поставка: ему нужен актуальный хостинг, обновлённые зависимости, и небольшие изменения по мере развития вашего бизнеса. Оставленный без внимания, даже качественно построенный сайт постепенно накапливает риски: устаревшее ПО, битые ссылки, контент, переставший соответствовать реальности.",
        "Этот план охватывает именно такую постоянную заботу: надёжный хостинг, регулярные обновления безопасности, небольшие изменения контента или текста по мере необходимости, и прямую поддержку по email, когда что-то возникает — чтобы сайт продолжал работать так же, как в день запуска.",
      ],
      includes: [
        "Управляемый хостинг в глобальной сети Cloudflare",
        "Регулярные обновления безопасности и зависимостей",
        "Небольшие изменения контента и текста включены ежемесячно",
        "Прямая поддержка по email",
        "Мониторинг доступности и производительности",
      ],
      process: [
        {
          title: "Подключение",
          description:
            "Мы изучаем текущую настройку вашего сайта и подтверждаем, что входит в план.",
        },
        {
          title: "Ежемесячное обслуживание",
          description: "Хостинг, обновления, и мониторинг работают непрерывно в фоновом режиме.",
        },
        {
          title: "Запросы на изменения",
          description:
            "Присылайте небольшие изменения по email — текст, новые изображения, мелкие правки — и они выполняются.",
        },
        {
          title: "Отчёты",
          description:
            "Периодические отчёты о состоянии сайта, производительности, и всём, что стоит знать.",
        },
      ],
      tech: "—",
      timeline: "Ежемесячная подписка",
      faq: [
        {
          question: "Что считается «небольшим изменением»?",
          answer:
            "Правки текста, замена изображения, обновление цены или часов работы, мелкие правки вёрстки — изменения, занимающие несколько минут, а не полный редизайн. Более крупные запросы (новые страницы, новые функции) определяются и оцениваются отдельно.",
        },
        {
          question: "Что происходит, если что-то ломается?",
          answer:
            "Вы обращаетесь по email, и это рассматривается в приоритетном порядке — большинство проблем выявляется мониторингом ещё до того, как вы их заметите.",
        },
        {
          question: "Могу ли я отменить подписку в любой момент?",
          answer:
            "Да, это ежемесячная подписка без долгосрочных обязательств. При отмене ваш сайт продолжает работать в текущей конфигурации, просто без постоянных обновлений и поддержки.",
        },
        {
          question: "Нужно ли мне это, если мой сайт уже сделан Calyroc?",
          answer:
            "Это необязательно, но рекомендуется — без этого зависимости и патчи безопасности вашего сайта будут постепенно устаревать, что является самой частой причиной замедления или уязвимости сайта со временем.",
        },
      ],
      ctaLabel: "Оформить подписку",
    },
  },
};
