import type { BlogPost } from "./types";

export const gestionnairesPaquets2026: BlogPost = {
  slug: "gestionnaires-de-paquets-2026",
  locale: "fr",
  title: "npm, Yarn, pnpm, Bun : le vrai classement 2026",
  excerpt:
    "Quatre outils, une même mission — installer du JavaScript sans y laisser sa journée. Un tour d'horizon sans dogme, avec le choix fait sur ce site.",
  publishedAt: "2026-07-14",
  readingTimeMinutes: 9,
  tags: ["JavaScript", "Outillage", "Performance"],
  sections: [
    {
      paragraphs: [
        "Il y a une question qu'on ne pose plus assez, tant elle semble tranchée par habitude : quel gestionnaire de paquets fait tourner votre projet ? Pendant longtemps, la réponse a été npm par défaut, faute d'y avoir vraiment réfléchi. Ce n'est plus tenable. En 2026, le choix d'un gestionnaire de paquets a un impact mesurable sur le temps de build, la taille du dépôt, la fiabilité des déploiements — et, très concrètement, sur le nombre de fois où vous attendez devant un terminal au lieu d'écrire du code. Ce site en est lui-même un cas d'école : construit sur Bun plutôt que sur l'option par défaut, un choix qu'on va justifier ligne par ligne plutôt que d'affirmer.",
      ],
    },
    {
      heading: "Un peu d'histoire, pour comprendre pourquoi il y a un débat",
      paragraphs: [
        "npm est arrivé avec Node.js en 2010 et a longtemps été la seule option sérieuse. Puis, en 2016, Facebook a sorti Yarn pour corriger deux défauts précis : des installations lentes et non déterministes — deux machines pouvaient obtenir des versions différentes des mêmes dépendances, un cauchemar en production. Yarn a introduit le fichier de verrouillage (lockfile) comme standard de facto, une idée que npm a fini par adopter aussi.",
        "pnpm est arrivé un peu plus tard avec une obsession différente : l'espace disque. Un développeur avec une dizaine de projets Next.js sur sa machine se retrouvait avec la même copie de React dupliquée dix fois dans autant de dossiers node_modules. pnpm a résolu ça avec un store adressé par contenu — chaque version d'un paquet n'existe qu'une fois sur le disque, partagée entre projets via des liens.",
        "Bun, enfin, ne s'est pas contenté d'être un gestionnaire de paquets de plus. C'est un runtime JavaScript complet — écrit en Zig, pas en JavaScript — qui embarque son propre gestionnaire de paquets, son bundler et son exécuteur de tests. L'ambition affichée n'est pas d'améliorer npm à la marge, mais de repenser la chaîne d'outils JavaScript en partant du principe que la lenteur n'est pas une fatalité, juste un choix d'implémentation.",
      ],
    },
    {
      heading: "Le banc d'essai : ce qui se mesure vraiment",
      paragraphs: [
        "Comparer ces outils sur un seul critère — « lequel est le plus rapide » — passe à côté de l'essentiel. Trois axes comptent réellement pour un projet en production : la vitesse d'installation à froid (le pire cas, celui d'un environnement de build CI qui repart de zéro à chaque fois), la vitesse en cache chaud (le cas du quotidien, quand on ajoute une dépendance sur un projet déjà installé), et la rigueur du lockfile — sa capacité à garantir que ce qui tourne en local tourne à l'identique en production.",
        "Sur l'installation à froid, l'écart entre npm et les autres options s'est creusé au fil des versions plutôt que réduit. Yarn et pnpm tournent grosso modo dans le même ordre de grandeur, avec un léger avantage à pnpm sur les gros monorepos grâce à son store partagé. Bun se détache nettement : le gain vient moins d'une astuce de cache que d'un choix d'architecture — un runtime natif, sans la couche d'abstraction JavaScript-sur-JavaScript qui alourdit les autres outils.",
        "Sur la rigueur du lockfile, en revanche, la hiérarchie s'inverse en partie. pnpm reste la référence : sa structure de node_modules, volontairement stricte, empêche un paquet d'accéder à une dépendance qu'il n'a pas explicitement déclarée — un bug de production classique (« ça marche chez moi ») que npm et Yarn en mode classique laissent passer sans broncher.",
      ],
    },
    {
      heading: "npm : le socle, pas toujours le mauvais choix",
      paragraphs: [
        "npm reste, et de loin, l'écosystème le plus universellement compatible — c'est le format de référence que tous les autres outils s'efforcent de rester capables de lire. Pour un petit projet, une bibliothèque à publier, ou une équipe qui préfère l'outil le plus documenté et le moins susceptible de surprendre un nouveau contributeur, npm reste un choix parfaitement défendable. Le tort qu'on lui fait souvent — être « lent » — s'est aussi nettement estompé depuis l'introduction de son propre cache local dans les versions récentes.",
      ],
    },
    {
      heading: "Yarn : deux outils dans un seul nom",
      paragraphs: [
        "Il faut être précis ici, parce que « Yarn » recouvre deux choses très différentes. Yarn Classic (v1) est un projet en maintenance, plus en développement actif — l'utiliser aujourd'hui sur un nouveau projet n'a plus vraiment de justification. Yarn Berry (v2 et plus), en revanche, a pris un virage radical avec le Plug'n'Play : au lieu d'installer physiquement les paquets dans un dossier node_modules, il les référence directement depuis un cache compressé. Le résultat est spectaculaire sur la taille du dépôt versionné, mais demande un temps d'adaptation — certains outils de l'écosystème, pas toujours mis à jour pour le PnP, peuvent nécessiter une configuration additionnelle.",
      ],
    },
    {
      heading: "pnpm : le compromis le plus sérieux",
      paragraphs: [
        "Si l'objectif est de rester le plus proche possible du fonctionnement standard de Node.js — un vrai dossier node_modules, une compatibilité maximale — tout en gagnant en vitesse et en rigueur, pnpm est aujourd'hui l'option la plus équilibrée du marché. Il excelle particulièrement en monorepo, où son support natif des workspaces évite la duplication massive de dépendances entre paquets d'un même dépôt. C'est un choix qu'on recommande sans réserve pour la plupart des équipes qui gèrent plusieurs projets en parallèle.",
      ],
    },
    {
      heading: "Bun : pourquoi c'est le choix fait ici",
      paragraphs: [
        "Ce site tourne sur Cloudflare Workers, via Next.js et l'adaptateur OpenNext — une chaîne de build qui s'exécute à chaque déploiement, pas seulement une fois en développement. Sur ce genre de flux, la différence entre une installation de dépendances qui prend quelques secondes et une qui en prend une minute se répète des dizaines de fois par semaine. C'est un temps qui ne produit rien, qui interrompt juste la concentration.",
        "Le second argument est moins mesurable mais tout aussi réel : Bun unifie le gestionnaire de paquets, l'exécuteur de scripts et le runtime dans un seul binaire. Sur un projet qui bascule constamment entre `bun install`, `bun run` et des scripts TypeScript exécutés directement sans étape de compilation intermédiaire, cette unification retire une source de friction — un seul outil à connaître, une seule version à synchroniser entre les machines de développement.",
        "Ce choix n'est pas un dogme. Bun est un projet plus jeune que npm, pnpm ou Yarn, et sa compatibilité avec l'écosystème Node.js — bien que déjà très large — continue de progresser plutôt que d'être totale à 100 %. Pour un projet où la stabilité prime sur tout et où chaque dépendance doit être validée avec la plus grande prudence, pnpm reste un choix plus conservateur, et parfaitement légitime.",
      ],
    },
    {
      heading: "Et côté animation : Framer Motion ou GSAP ?",
      paragraphs: [
        "La même logique — pas de dogme, le bon outil pour le bon travail — s'applique à un autre choix d'outillage central sur ce genre de projet : comment animer une interface. Ce site utilise Framer Motion (aujourd'hui simplement « Motion ») du premier au dernier écran : les transitions de page, le menu mobile, le chatbot, les micro-interactions au survol. La raison est simple — Framer Motion est pensé pour React dès la conception, avec une API par hooks (`useMotionValue`, `useScroll`, `whileInView`) qui s'intègre directement dans le modèle de composants plutôt qu'à côté. Pour une interface faite de dizaines de petites animations d'état, c'est l'option la plus naturelle à écrire et la plus simple à maintenir dans la durée.",
        "GSAP (GreenSock) répond à un besoin différent, et souvent complémentaire plutôt que concurrent : le scroll storytelling. Dès qu'il s'agit de synchroniser précisément plusieurs éléments sur la position de défilement — un texte qui se découpe lettre par lettre, une section qui reste épinglée à l'écran pendant qu'un contenu défile horizontalement, une timeline avec dix étapes chorégraphiées à la seconde près — GSAP, et son plugin ScrollTrigger en particulier, offre un niveau de contrôle que les outils pensés « React-first » peinent encore à égaler. Ce n'est pas un hasard si le portfolio personnel de Thomas Prud'homme, à l'origine de ce studio, s'appuie justement sur GSAP combiné à Lenis pour son défilement fluide et ses animations de particules 3D — un terrain où le récit visuel prime sur l'architecture de composants.",
        "La question à se poser n'est donc jamais « lequel est le meilleur », mais « quel est le problème à résoudre ». Une interface d'usage quotidien — un tableau de bord, un site vitrine, un configurateur — gagne à rester dans l'écosystème natif de son framework : moins de dépendances à charger, moins de concepts à apprendre pour la personne qui reprendra le code dans deux ans. Une page pensée comme une expérience, où le défilement raconte quelque chose, justifie l'investissement d'un outil plus spécialisé.",
      ],
    },
    {
      heading: "Ce qu'il faut en retenir",
      paragraphs: [
        "Aucun de ces outils n'est un mauvais choix en soi — ils optimisent simplement pour des priorités différentes : la compatibilité maximale pour npm, la rigueur du monorepo pour pnpm, la flexibilité du cache pour Yarn Berry, la vitesse brute et l'unification de la chaîne d'outils pour Bun. Le vrai risque n'est pas de choisir « le mauvais », mais de ne jamais se poser la question et de traîner un choix hérité sans en mesurer le coût réel sur son propre flux de travail. C'est une question qu'on se pose sur chaque nouveau projet client, jamais tranchée d'avance — et c'est très exactement ce qui a mené ce site-ci vers Bun plutôt qu'ailleurs.",
      ],
    },
  ],
};
