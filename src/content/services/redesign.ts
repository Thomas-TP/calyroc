import type { ServiceDefinition } from "./types";

export const redesign: ServiceDefinition = {
  id: "redesign",
  relatedPackId: null,
  translations: {
    en: {
      title: "Website Redesign",
      metaDescription:
        "Modernize an outdated website without losing your search rankings — full audit, content migration, and clean redirects included. Delivered in 2 to 4 weeks.",
      heroHeadline: "A redesign that keeps what's working and fixes what isn't.",
      heroSubhead:
        "Modernize your site's design and performance without starting your SEO from zero — your existing rankings and links are preserved, not thrown away.",
      description: [
        "An old website usually isn't broken — it's just slow, dated, or no longer represents the business it belongs to. Rebuilding from scratch feels tempting, but it also risks the one thing a redesign should never cost you: the search rankings and backlinks a site accumulates over years.",
        "A proper redesign starts with an audit of what's actually there — what content is worth keeping, what's underperforming, where the technical debt is — before a single new page is designed. The new site replaces the old one at the same URLs, with redirects handling anything that does change, so search engines see continuity, not a brand-new unknown site.",
      ],
      includes: [
        "Full audit of the current site: performance, SEO, and content",
        "Migration of content worth keeping",
        "Clean 301 redirects for anything that changes, to preserve existing rankings",
        "New design and modern stack, same URLs",
      ],
      process: [
        {
          title: "Audit",
          description:
            "A full review of the current site's performance, SEO health, and content — what to keep, what to cut, what's actively hurting rankings.",
        },
        {
          title: "Design",
          description: "A new design built on the audit's findings, not a blind restart.",
        },
        {
          title: "Build & migrate",
          description:
            "Development on a modern stack, with existing content migrated and redirects mapped for anything that moves.",
        },
        {
          title: "Switch-over",
          description:
            "The new site goes live at your existing domain, with rankings and traffic monitored closely in the days after launch.",
        },
      ],
      tech: "Adapted to your current stack",
      timeline: "2 to 4 weeks",
      faq: [
        {
          question: "Will I lose my Google rankings?",
          answer:
            "Not if it's done properly. The main risk in a redesign is broken URLs — pages that move without a redirect lose whatever ranking and backlinks they'd built up. Every changed URL gets a clean 301 redirect specifically to avoid that.",
        },
        {
          question: "Can you work with my current CMS or platform?",
          answer:
            "The stack is adapted to what you're already running and what makes sense going forward — sometimes that means staying close to the current platform, sometimes it means migrating to something faster. This gets scoped during the audit, not assumed upfront.",
        },
        {
          question: "What happens to my existing content?",
          answer:
            "Whatever's worth keeping gets migrated into the new site. The audit is also where content that's outdated, thin, or no longer relevant gets flagged — redesigns are a natural moment to cut what isn't working, not just carry it forward unchanged.",
        },
        {
          question: "How long does the site stay down during the switch?",
          answer:
            "It doesn't. The new site is built and tested separately, then switched over — visitors and search engines see the old site right up until the new one replaces it, not a maintenance page in between.",
        },
      ],
      ctaLabel: "Request a quote",
    },
    fr: {
      title: "Refonte de site",
      metaDescription:
        "Modernisez un site vieillissant sans perdre votre référencement — audit complet, migration de contenu, et redirections propres inclus. Livrée en 2 à 4 semaines.",
      heroHeadline: "Une refonte qui garde ce qui marche et corrige ce qui ne marche pas.",
      heroSubhead:
        "Modernisez le design et les performances de votre site sans repartir de zéro côté SEO — votre référencement et vos liens existants sont préservés, pas jetés.",
      description: [
        "Un vieux site n'est généralement pas cassé — il est juste lent, daté, ou ne représente plus l'activité à laquelle il appartient. Repartir de zéro peut sembler tentant, mais ça risque aussi de coûter ce qu'une refonte ne devrait jamais coûter : le référencement et les backlinks accumulés sur plusieurs années.",
        "Une vraie refonte commence par un audit de ce qui existe réellement — quel contenu vaut la peine d'être gardé, ce qui sous-performe, où se trouve la dette technique — avant même de dessiner la moindre nouvelle page. Le nouveau site remplace l'ancien aux mêmes URLs, avec des redirections pour tout ce qui change, pour que les moteurs de recherche voient une continuité, pas un site inconnu tout neuf.",
      ],
      includes: [
        "Audit complet du site actuel : performance, SEO, et contenu",
        "Migration du contenu qui vaut la peine d'être gardé",
        "Redirections 301 propres pour tout ce qui change, pour préserver le référencement existant",
        "Nouveau design et stack moderne, mêmes URLs",
      ],
      process: [
        {
          title: "Audit",
          description:
            "Une revue complète des performances, de la santé SEO, et du contenu du site actuel — quoi garder, quoi couper, ce qui nuit activement au référencement.",
        },
        {
          title: "Design",
          description:
            "Un nouveau design construit sur les constats de l'audit, pas un redémarrage à l'aveugle.",
        },
        {
          title: "Développement & migration",
          description:
            "Développement sur une stack moderne, avec migration du contenu existant et redirections cadrées pour tout ce qui bouge.",
        },
        {
          title: "Bascule",
          description:
            "Le nouveau site part en ligne sur votre domaine existant, avec un suivi rapproché du référencement et du trafic dans les jours qui suivent.",
        },
      ],
      tech: "Adaptée à votre stack actuelle",
      timeline: "2 à 4 semaines",
      faq: [
        {
          question: "Vais-je perdre mon référencement Google ?",
          answer:
            "Pas si c'est fait correctement. Le vrai risque d'une refonte, ce sont les URLs cassées — une page qui change sans redirection perd tout le référencement et les backlinks qu'elle avait accumulés. Chaque URL modifiée reçoit une redirection 301 propre, précisément pour éviter ça.",
        },
        {
          question: "Pouvez-vous travailler avec mon CMS ou ma plateforme actuelle ?",
          answer:
            "La stack est adaptée à ce que vous utilisez déjà et à ce qui a du sens pour la suite — parfois ça veut dire rester proche de la plateforme actuelle, parfois migrer vers quelque chose de plus rapide. C'est cadré pendant l'audit, pas présumé à l'avance.",
        },
        {
          question: "Qu'advient-il de mon contenu existant ?",
          answer:
            "Ce qui vaut la peine d'être gardé est migré vers le nouveau site. L'audit est aussi le moment où le contenu daté, pauvre, ou plus pertinent est repéré — une refonte est une occasion naturelle de couper ce qui ne fonctionne pas, pas juste de le reporter tel quel.",
        },
        {
          question: "Le site est-il indisponible pendant la bascule ?",
          answer:
            "Non. Le nouveau site est construit et testé séparément, puis basculé — visiteurs et moteurs de recherche voient l'ancien site jusqu'à ce que le nouveau le remplace, pas une page de maintenance entre les deux.",
        },
      ],
      ctaLabel: "Demander un devis",
    },
    es: {
      title: "Rediseño web",
      metaDescription:
        "Modernice un sitio web anticuado sin perder su posicionamiento — auditoría completa, migración de contenido, y redirecciones limpias incluidas. Entregado en 2 a 4 semanas.",
      heroHeadline: "Un rediseño que conserva lo que funciona y corrige lo que no.",
      heroSubhead:
        "Modernice el diseño y el rendimiento de su sitio sin partir de cero en SEO — su posicionamiento y sus enlaces actuales se conservan, no se desechan.",
      description: [
        "Un sitio web antiguo normalmente no está roto — solo es lento, anticuado, o ya no representa al negocio al que pertenece. Reconstruir desde cero puede resultar tentador, pero también arriesga lo único que un rediseño nunca debería costarle: el posicionamiento y los backlinks acumulados durante años.",
        "Un rediseño bien hecho empieza con una auditoría de lo que realmente existe — qué contenido merece la pena conservar, qué está bajo rendimiento, dónde está la deuda técnica — antes de diseñar una sola página nueva. El nuevo sitio sustituye al antiguo en las mismas URL, con redirecciones para todo lo que cambia, de modo que los buscadores vean continuidad, no un sitio nuevo y desconocido.",
      ],
      includes: [
        "Auditoría completa del sitio actual: rendimiento, SEO, y contenido",
        "Migración del contenido que merece la pena conservar",
        "Redirecciones 301 limpias para todo lo que cambia, para preservar el posicionamiento existente",
        "Nuevo diseño y stack moderna, mismas URL",
      ],
      process: [
        {
          title: "Auditoría",
          description:
            "Una revisión completa del rendimiento, la salud SEO, y el contenido del sitio actual — qué conservar, qué eliminar, qué está perjudicando activamente el posicionamiento.",
        },
        {
          title: "Diseño",
          description:
            "Un nuevo diseño construido sobre los hallazgos de la auditoría, no un reinicio a ciegas.",
        },
        {
          title: "Desarrollo y migración",
          description:
            "Desarrollo sobre una stack moderna, con migración del contenido existente y redirecciones definidas para todo lo que cambia de lugar.",
        },
        {
          title: "Cambio en producción",
          description:
            "El nuevo sitio se publica en su dominio actual, con seguimiento cercano del posicionamiento y del tráfico durante los días posteriores al lanzamiento.",
        },
      ],
      tech: "Adaptada a su stack actual",
      timeline: "2 a 4 semanas",
      faq: [
        {
          question: "¿Voy a perder mi posicionamiento en Google?",
          answer:
            "No, si se hace correctamente. El principal riesgo de un rediseño son las URL rotas — una página que cambia sin redirección pierde todo el posicionamiento y los backlinks que había acumulado. Cada URL modificada recibe una redirección 301 limpia, precisamente para evitarlo.",
        },
        {
          question: "¿Pueden trabajar con mi CMS o plataforma actual?",
          answer:
            "La stack se adapta a lo que ya utiliza y a lo que tiene sentido de cara al futuro — a veces eso significa mantenerse cerca de la plataforma actual, otras veces migrar a algo más rápido. Esto se define durante la auditoría, no se asume de antemano.",
        },
        {
          question: "¿Qué pasa con mi contenido actual?",
          answer:
            "Lo que merece la pena conservar se migra al nuevo sitio. La auditoría es también el momento en que se detecta el contenido desactualizado, pobre, o ya no relevante — un rediseño es una ocasión natural para eliminar lo que no funciona, no solo trasladarlo sin cambios.",
        },
        {
          question: "¿El sitio queda inactivo durante el cambio?",
          answer:
            "No. El nuevo sitio se construye y se prueba por separado, y luego se activa — visitantes y buscadores ven el sitio antiguo hasta que el nuevo lo sustituye, sin una página de mantenimiento de por medio.",
        },
      ],
      ctaLabel: "Solicitar presupuesto",
    },
    it: {
      title: "Redesign del sito",
      metaDescription:
        "Modernizzi un sito datato senza perdere il posizionamento — audit completo, migrazione contenuti, e redirect puliti inclusi. Consegnato in 2-4 settimane.",
      heroHeadline: "Un redesign che mantiene ciò che funziona e corregge ciò che non funziona.",
      heroSubhead:
        "Modernizzi design e prestazioni del suo sito senza ripartire da zero con la SEO — il posizionamento e i link esistenti vengono preservati, non buttati via.",
      description: [
        "Un vecchio sito di solito non è rotto — è solo lento, datato, o non rappresenta più l'attività a cui appartiene. Ricostruire da zero può sembrare allettante, ma rischia anche l'unica cosa che un redesign non dovrebbe mai costare: il posizionamento e i backlink accumulati in anni.",
        "Un vero redesign inizia con un audit di ciò che esiste realmente — quali contenuti vale la pena tenere, cosa sta sottoperformando, dove si trova il debito tecnico — prima ancora di disegnare una sola pagina nuova. Il nuovo sito sostituisce quello vecchio agli stessi URL, con redirect per tutto ciò che cambia, così i motori di ricerca vedono continuità, non un sito nuovo e sconosciuto.",
      ],
      includes: [
        "Audit completo del sito attuale: performance, SEO, e contenuti",
        "Migrazione dei contenuti che vale la pena mantenere",
        "Redirect 301 puliti per tutto ciò che cambia, per preservare il posizionamento esistente",
        "Nuovo design e stack moderno, stessi URL",
      ],
      process: [
        {
          title: "Audit",
          description:
            "Una revisione completa delle prestazioni, della salute SEO, e dei contenuti del sito attuale — cosa tenere, cosa tagliare, cosa danneggia attivamente il posizionamento.",
        },
        {
          title: "Design",
          description:
            "Un nuovo design costruito sui risultati dell'audit, non un riavvio alla cieca.",
        },
        {
          title: "Sviluppo e migrazione",
          description:
            "Sviluppo su uno stack moderno, con migrazione dei contenuti esistenti e redirect mappati per tutto ciò che si sposta.",
        },
        {
          title: "Passaggio in produzione",
          description:
            "Il nuovo sito va online sul suo dominio esistente, con un monitoraggio ravvicinato di posizionamento e traffico nei giorni successivi al lancio.",
        },
      ],
      tech: "Adattata al suo stack attuale",
      timeline: "2-4 settimane",
      faq: [
        {
          question: "Perderò il mio posizionamento su Google?",
          answer:
            "No, se fatto correttamente. Il vero rischio di un redesign sono gli URL rotti — una pagina che cambia senza redirect perde tutto il posizionamento e i backlink accumulati. Ogni URL modificato riceve un redirect 301 pulito, proprio per evitarlo.",
        },
        {
          question: "Potete lavorare con il mio CMS o piattaforma attuale?",
          answer:
            "Lo stack viene adattato a ciò che sta già usando e a ciò che ha senso per il futuro — a volte significa restare vicini alla piattaforma attuale, altre volte migrare verso qualcosa di più veloce. Questo viene definito durante l'audit, non presunto in anticipo.",
        },
        {
          question: "Cosa succede ai miei contenuti attuali?",
          answer:
            "Ciò che vale la pena mantenere viene migrato nel nuovo sito. L'audit è anche il momento in cui si individuano contenuti datati, poveri, o non più rilevanti — un redesign è un'occasione naturale per tagliare ciò che non funziona, non solo per riportarlo invariato.",
        },
        {
          question: "Il sito resta offline durante il passaggio?",
          answer:
            "No. Il nuovo sito viene costruito e testato separatamente, poi attivato — visitatori e motori di ricerca vedono il vecchio sito fino a quando il nuovo lo sostituisce, non una pagina di manutenzione nel mezzo.",
        },
      ],
      ctaLabel: "Richiedi un preventivo",
    },
    de: {
      title: "Website-Relaunch",
      metaDescription:
        "Modernisieren Sie eine veraltete Website, ohne Ihr Suchmaschinen-Ranking zu verlieren — vollständiges Audit, Content-Migration, und saubere Weiterleitungen inklusive. Lieferung in 2-4 Wochen.",
      heroHeadline:
        "Ein Relaunch, der behält, was funktioniert, und behebt, was nicht funktioniert.",
      heroSubhead:
        "Modernisieren Sie Design und Performance Ihrer Website, ohne beim SEO bei null anzufangen — Ihr bestehendes Ranking und Ihre Links bleiben erhalten, statt verloren zu gehen.",
      description: [
        "Eine alte Website ist meist nicht kaputt — sie ist nur langsam, veraltet, oder repräsentiert das Geschäft dahinter nicht mehr. Ein kompletter Neuaufbau wirkt verlockend, riskiert aber genau das, was ein Relaunch nie kosten sollte: das über Jahre aufgebaute Ranking und die Backlinks.",
        "Ein richtiger Relaunch beginnt mit einem Audit dessen, was tatsächlich vorhanden ist — welche Inhalte es wert sind, behalten zu werden, was unterdurchschnittlich performt, wo die technischen Altlasten liegen — bevor auch nur eine neue Seite entworfen wird. Die neue Website ersetzt die alte unter denselben URLs, mit Weiterleitungen für alles, was sich ändert, damit Suchmaschinen Kontinuität sehen, keine brandneue unbekannte Website.",
      ],
      includes: [
        "Vollständiges Audit der aktuellen Website: Performance, SEO, und Inhalte",
        "Migration von Inhalten, die es wert sind, behalten zu werden",
        "Saubere 301-Weiterleitungen für alles, was sich ändert, zur Erhaltung des bestehenden Rankings",
        "Neues Design und moderner Stack, gleiche URLs",
      ],
      process: [
        {
          title: "Audit",
          description:
            "Eine vollständige Überprüfung von Performance, SEO-Zustand, und Inhalten der aktuellen Website — was bleibt, was gestrichen wird, was dem Ranking aktiv schadet.",
        },
        {
          title: "Design",
          description:
            "Ein neues Design, aufgebaut auf den Erkenntnissen des Audits, kein blinder Neustart.",
        },
        {
          title: "Entwicklung & Migration",
          description:
            "Entwicklung auf einem modernen Stack, mit Migration bestehender Inhalte und geplanten Weiterleitungen für alles, was sich verschiebt.",
        },
        {
          title: "Umschaltung",
          description:
            "Die neue Website geht auf Ihrer bestehenden Domain live, mit engmaschiger Beobachtung von Ranking und Traffic in den Tagen nach dem Launch.",
        },
      ],
      tech: "Angepasst an Ihren aktuellen Stack",
      timeline: "2-4 Wochen",
      faq: [
        {
          question: "Verliere ich mein Google-Ranking?",
          answer:
            "Nicht, wenn es richtig gemacht wird. Das eigentliche Risiko bei einem Relaunch sind kaputte URLs — eine Seite, die ohne Weiterleitung verschoben wird, verliert das gesamte aufgebaute Ranking und die Backlinks. Jede geänderte URL erhält gezielt eine saubere 301-Weiterleitung, um genau das zu verhindern.",
        },
        {
          question: "Können Sie mit meinem aktuellen CMS oder meiner Plattform arbeiten?",
          answer:
            "Der Stack wird an das angepasst, was Sie bereits nutzen, und an das, was für die Zukunft sinnvoll ist — manchmal bedeutet das, nah an der aktuellen Plattform zu bleiben, manchmal die Migration zu etwas Schnellerem. Das wird im Audit geklärt, nicht vorab angenommen.",
        },
        {
          question: "Was passiert mit meinen bestehenden Inhalten?",
          answer:
            "Was es wert ist, behalten zu werden, wird in die neue Website migriert. Im Audit wird auch veralteter, dünner, oder nicht mehr relevanter Content identifiziert — ein Relaunch ist ein natürlicher Zeitpunkt, um zu streichen, was nicht funktioniert, statt es unverändert mitzuschleppen.",
        },
        {
          question: "Ist die Website während der Umschaltung offline?",
          answer:
            "Nein. Die neue Website wird separat gebaut und getestet, dann umgeschaltet — Besucher und Suchmaschinen sehen die alte Website bis zu dem Moment, in dem die neue sie ersetzt, keine Wartungsseite dazwischen.",
        },
      ],
      ctaLabel: "Angebot anfragen",
    },
    pt: {
      title: "Redesign de site",
      metaDescription:
        "Modernize um site desatualizado sem perder o seu posicionamento — auditoria completa, migração de conteúdo, e redirecionamentos limpos incluídos. Entregue em 2 a 4 semanas.",
      heroHeadline: "Um redesign que mantém o que funciona e corrige o que não funciona.",
      heroSubhead:
        "Modernize o design e o desempenho do seu site sem recomeçar o SEO do zero — o seu posicionamento e ligações atuais são preservados, não descartados.",
      description: [
        "Um site antigo normalmente não está avariado — está apenas lento, desatualizado, ou já não representa o negócio a que pertence. Reconstruir do zero pode parecer tentador, mas também arrisca aquilo que um redesign nunca deveria custar: o posicionamento e os backlinks acumulados ao longo de anos.",
        "Um redesign bem feito começa com uma auditoria ao que realmente existe — que conteúdo vale a pena manter, o que está com fraco desempenho, onde está a dívida técnica — antes de sequer desenhar uma página nova. O novo site substitui o antigo nos mesmos URLs, com redirecionamentos para tudo o que muda, para que os motores de busca vejam continuidade, não um site novo e desconhecido.",
      ],
      includes: [
        "Auditoria completa do site atual: desempenho, SEO, e conteúdo",
        "Migração do conteúdo que vale a pena manter",
        "Redirecionamentos 301 limpos para tudo o que muda, para preservar o posicionamento existente",
        "Novo design e stack moderna, mesmos URLs",
      ],
      process: [
        {
          title: "Auditoria",
          description:
            "Uma revisão completa do desempenho, da saúde de SEO, e do conteúdo do site atual — o que manter, o que cortar, o que está a prejudicar ativamente o posicionamento.",
        },
        {
          title: "Design",
          description:
            "Um novo design construído sobre as conclusões da auditoria, não um recomeço às cegas.",
        },
        {
          title: "Desenvolvimento e migração",
          description:
            "Desenvolvimento numa stack moderna, com migração do conteúdo existente e redirecionamentos mapeados para tudo o que muda de lugar.",
        },
        {
          title: "Mudança em produção",
          description:
            "O novo site vai ao ar no seu domínio atual, com acompanhamento próximo do posicionamento e do tráfego nos dias seguintes ao lançamento.",
        },
      ],
      tech: "Adaptada à sua stack atual",
      timeline: "2 a 4 semanas",
      faq: [
        {
          question: "Vou perder o meu posicionamento no Google?",
          answer:
            "Não, se for feito corretamente. O principal risco de um redesign são os URLs quebrados — uma página que muda sem redirecionamento perde todo o posicionamento e backlinks que tinha acumulado. Cada URL alterado recebe um redirecionamento 301 limpo, precisamente para evitar isso.",
        },
        {
          question: "Podem trabalhar com o meu CMS ou plataforma atual?",
          answer:
            "A stack é adaptada ao que já utiliza e ao que faz sentido para o futuro — por vezes isso significa manter-se próximo da plataforma atual, por vezes migrar para algo mais rápido. Isto é definido durante a auditoria, não presumido à partida.",
        },
        {
          question: "O que acontece ao meu conteúdo atual?",
          answer:
            "O que vale a pena manter é migrado para o novo site. A auditoria é também o momento em que se identifica conteúdo desatualizado, fraco, ou já não relevante — um redesign é uma ocasião natural para cortar o que não funciona, não apenas transportá-lo sem alterações.",
        },
        {
          question: "O site fica indisponível durante a mudança?",
          answer:
            "Não. O novo site é construído e testado separadamente, e depois ativado — visitantes e motores de busca veem o site antigo até o novo o substituir, sem uma página de manutenção pelo meio.",
        },
      ],
      ctaLabel: "Pedir orçamento",
    },
    nl: {
      title: "Website Redesign",
      metaDescription:
        "Moderniseer een verouderde website zonder uw zoekresultaten te verliezen — volledige audit, contentmigratie, en schone redirects inbegrepen. Geleverd in 2 tot 4 weken.",
      heroHeadline: "Een redesign die behoudt wat werkt en herstelt wat niet werkt.",
      heroSubhead:
        "Moderniseer het design en de prestaties van uw site zonder qua SEO bij nul te beginnen — uw bestaande posities en links blijven behouden, niet weggegooid.",
      description: [
        "Een oude website is meestal niet stuk — hij is gewoon traag, gedateerd, of vertegenwoordigt het bedrijf erachter niet meer. Volledig opnieuw beginnen lijkt verleidelijk, maar riskeert ook precies wat een redesign nooit zou mogen kosten: de zoekposities en backlinks die een site over jaren heeft opgebouwd.",
        "Een degelijke redesign begint met een audit van wat er echt is — welke content het waard is om te behouden, wat onderpresteert, waar de technische schuld zit — voordat er ook maar één nieuwe pagina wordt ontworpen. De nieuwe site vervangt de oude op dezelfde URL's, met redirects voor alles wat wél verandert, zodat zoekmachines continuïteit zien, geen gloednieuwe onbekende site.",
      ],
      includes: [
        "Volledige audit van de huidige site: prestaties, SEO, en content",
        "Migratie van content die het waard is om te behouden",
        "Schone 301-redirects voor alles wat verandert, om bestaande posities te behouden",
        "Nieuw design en moderne stack, dezelfde URL's",
      ],
      process: [
        {
          title: "Audit",
          description:
            "Een volledige beoordeling van prestaties, SEO-gezondheid, en content van de huidige site — wat te behouden, wat te schrappen, wat de posities actief schaadt.",
        },
        {
          title: "Design",
          description:
            "Een nieuw design, gebouwd op de bevindingen van de audit, geen blinde herstart.",
        },
        {
          title: "Bouw & migratie",
          description:
            "Ontwikkeling op een moderne stack, met migratie van bestaande content en redirects in kaart gebracht voor alles wat verschuift.",
        },
        {
          title: "Omschakeling",
          description:
            "De nieuwe site gaat live op uw bestaande domein, met nauwlettende monitoring van posities en verkeer in de dagen na de lancering.",
        },
      ],
      tech: "Aangepast aan uw huidige stack",
      timeline: "2 tot 4 weken",
      faq: [
        {
          question: "Verlies ik mijn Google-posities?",
          answer:
            "Niet als het goed wordt uitgevoerd. Het grootste risico bij een redesign zijn kapotte URL's — een pagina die verschuift zonder redirect verliest alle opgebouwde positie en backlinks. Elke gewijzigde URL krijgt specifiek een schone 301-redirect om dat te voorkomen.",
        },
        {
          question: "Kunnen jullie werken met mijn huidige CMS of platform?",
          answer:
            "De stack wordt aangepast aan wat u al gebruikt en wat zinvol is voor de toekomst — soms betekent dat dicht bij het huidige platform blijven, soms migreren naar iets snellers. Dit wordt tijdens de audit bepaald, niet vooraf aangenomen.",
        },
        {
          question: "Wat gebeurt er met mijn bestaande content?",
          answer:
            "Wat het waard is om te behouden, wordt gemigreerd naar de nieuwe site. De audit is ook het moment waarop verouderde, dunne, of niet meer relevante content wordt gesignaleerd — een redesign is een natuurlijk moment om te schrappen wat niet werkt, niet om het ongewijzigd mee te nemen.",
        },
        {
          question: "Is de site offline tijdens de omschakeling?",
          answer:
            "Nee. De nieuwe site wordt apart gebouwd en getest, en dan omgeschakeld — bezoekers en zoekmachines zien de oude site tot het moment dat de nieuwe hem vervangt, geen onderhoudspagina ertussenin.",
        },
      ],
      ctaLabel: "Offerte aanvragen",
    },
    pl: {
      title: "Redesign strony",
      metaDescription:
        "Zmodernizuj przestarzałą stronę bez utraty pozycji w wyszukiwarce — pełny audyt, migracja treści, i czyste przekierowania w cenie. Realizacja w 2-4 tygodnie.",
      heroHeadline: "Redesign, który zachowuje to, co działa, i naprawia to, co nie działa.",
      heroSubhead:
        "Zmodernizuj design i wydajność swojej strony bez zaczynania SEO od zera — Twoje obecne pozycje i linki zostają zachowane, a nie wyrzucone.",
      description: [
        "Stara strona zwykle nie jest zepsuta — po prostu jest wolna, przestarzała, albo już nie reprezentuje biznesu, do którego należy. Budowa od zera może wydawać się kusząca, ale ryzykuje tym jedynym, czego redesign nigdy nie powinien kosztować: pozycjami w wyszukiwarce i linkami zdobywanymi przez lata.",
        "Właściwy redesign zaczyna się od audytu tego, co faktycznie istnieje — jakie treści warto zachować, co nie działa, gdzie jest dług techniczny — zanim zaprojektowana zostanie choćby jedna nowa strona. Nowa strona zastępuje starą pod tymi samymi adresami URL, z przekierowaniami dla wszystkiego, co się zmienia, dzięki czemu wyszukiwarki widzą ciągłość, a nie zupełnie nową, nieznaną stronę.",
      ],
      includes: [
        "Pełny audyt obecnej strony: wydajność, SEO, i treści",
        "Migracja treści wartych zachowania",
        "Czyste przekierowania 301 dla wszystkiego, co się zmienia, by zachować obecne pozycje",
        "Nowy design i nowoczesny stack, te same adresy URL",
      ],
      process: [
        {
          title: "Audyt",
          description:
            "Pełny przegląd wydajności, kondycji SEO, i treści obecnej strony — co zachować, co usunąć, co aktywnie szkodzi pozycjom.",
        },
        {
          title: "Projekt",
          description: "Nowy design zbudowany na wynikach audytu, nie ślepy restart od zera.",
        },
        {
          title: "Budowa i migracja",
          description:
            "Rozwój na nowoczesnym stacku, z migracją istniejących treści i zaplanowanymi przekierowaniami dla wszystkiego, co się przenosi.",
        },
        {
          title: "Przełączenie",
          description:
            "Nowa strona trafia online na Twojej obecnej domenie, z uważnym monitorowaniem pozycji i ruchu w dniach po starcie.",
        },
      ],
      tech: "Dopasowany do Twojego obecnego stacku",
      timeline: "2-4 tygodnie",
      faq: [
        {
          question: "Czy stracę pozycje w Google?",
          answer:
            "Nie, jeśli zostanie to zrobione poprawnie. Głównym ryzykiem redesignu są zepsute adresy URL — strona, która się przenosi bez przekierowania, traci całą zbudowaną pozycję i linki. Każdy zmieniony adres URL otrzymuje czyste przekierowanie 301 właśnie po to, by tego uniknąć.",
        },
        {
          question: "Czy możecie pracować na moim obecnym CMS lub platformie?",
          answer:
            "Stack jest dopasowywany do tego, czego już używasz, i tego, co ma sens na przyszłość — czasem oznacza to pozostanie blisko obecnej platformy, czasem migrację do czegoś szybszego. Ustala się to podczas audytu, a nie zakłada z góry.",
        },
        {
          question: "Co dzieje się z moimi obecnymi treściami?",
          answer:
            "To, co warto zachować, jest migrowane na nową stronę. Audyt to również moment, w którym oznacza się treści przestarzałe, ubogie, lub już nieistotne — redesign to naturalna okazja, by usunąć to, co nie działa, a nie przenosić to bez zmian.",
        },
        {
          question: "Czy strona jest niedostępna podczas przełączenia?",
          answer:
            "Nie. Nowa strona jest budowana i testowana osobno, a następnie przełączana — odwiedzający i wyszukiwarki widzą starą stronę aż do momentu, gdy zastąpi ją nowa, bez strony konserwacyjnej pomiędzy.",
        },
      ],
      ctaLabel: "Poproś o wycenę",
    },
    ru: {
      title: "Редизайн сайта",
      metaDescription:
        "Обновите устаревший сайт, не теряя позиции в поиске — полный аудит, перенос контента, и корректные редиректы включены. Срок — 2–4 недели.",
      heroHeadline:
        "Редизайн, который сохраняет то, что работает, и исправляет то, что не работает.",
      heroSubhead:
        "Обновите дизайн и производительность сайта, не начиная SEO с нуля — существующие позиции и ссылки сохраняются, а не теряются.",
      description: [
        "Старый сайт обычно не «сломан» — он просто медленный, устаревший, или больше не отражает бизнес, которому принадлежит. Полная пересборка с нуля выглядит заманчиво, но рискует тем единственным, чем редизайн никогда не должен жертвовать: позициями в поиске и обратными ссылками, накопленными за годы.",
        "Правильный редизайн начинается с аудита того, что реально есть — какой контент стоит сохранить, что работает плохо, где техническая задолженность — ещё до проектирования хотя бы одной новой страницы. Новый сайт заменяет старый по тем же адресам, с редиректами для всего, что меняется, чтобы поисковые системы видели преемственность, а не совершенно новый неизвестный сайт.",
      ],
      includes: [
        "Полный аудит текущего сайта: производительность, SEO, и контент",
        "Перенос контента, который стоит сохранить",
        "Корректные редиректы 301 для всего, что меняется, чтобы сохранить существующие позиции",
        "Новый дизайн и современный стек, те же адреса",
      ],
      process: [
        {
          title: "Аудит",
          description:
            "Полный анализ производительности, состояния SEO, и контента текущего сайта — что оставить, что убрать, что активно вредит позициям.",
        },
        {
          title: "Дизайн",
          description: "Новый дизайн, построенный на выводах аудита, а не слепой перезапуск.",
        },
        {
          title: "Разработка и перенос",
          description:
            "Разработка на современном стеке, с переносом существующего контента и продуманными редиректами для всего, что перемещается.",
        },
        {
          title: "Переключение",
          description:
            "Новый сайт публикуется на вашем текущем домене, с тщательным отслеживанием позиций и трафика в первые дни после запуска.",
        },
      ],
      tech: "Адаптируется под ваш текущий стек",
      timeline: "2–4 недели",
      faq: [
        {
          question: "Потеряю ли я позиции в Google?",
          answer:
            "Нет, если всё сделано правильно. Главный риск редизайна — сломанные адреса: страница, перемещённая без редиректа, теряет всю накопленную позицию и обратные ссылки. Каждый изменённый адрес получает корректный редирект 301 именно для того, чтобы этого избежать.",
        },
        {
          question: "Можете ли вы работать с моей текущей CMS или платформой?",
          answer:
            "Стек адаптируется под то, что вы уже используете, и под то, что имеет смысл на будущее — иногда это означает оставаться близко к текущей платформе, иногда — переход на что-то более быстрое. Это определяется во время аудита, а не предполагается заранее.",
        },
        {
          question: "Что происходит с моим текущим контентом?",
          answer:
            "То, что стоит сохранить, переносится на новый сайт. Аудит — это также момент, когда выявляется устаревший, слабый, или уже неактуальный контент — редизайн — естественный повод убрать то, что не работает, а не переносить его без изменений.",
        },
        {
          question: "Простаивает ли сайт во время переключения?",
          answer:
            "Нет. Новый сайт строится и тестируется отдельно, а затем происходит переключение — посетители и поисковые системы видят старый сайт вплоть до момента, когда его заменяет новый, без технической страницы между ними.",
        },
      ],
      ctaLabel: "Запросить смету",
    },
  },
};
