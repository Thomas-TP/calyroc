# Guide de contenu

Comment le contenu du site est organisé, et comment le modifier sans casser une locale ou laisser le chatbot désynchronisé du site réel.

## Le dictionnaire — source unique de vérité

Tout texte affiché sur une page publique (hors contenu légal et blog, voir plus bas) vit dans `src/i18n/dictionaries/{fr,en,es,it,de,pt,nl,pl,ru}.ts`, qui implémentent tous l'interface `Dictionary` définie dans `src/i18n/dictionary.ts`.

**Règle simple : si un composant a besoin d'un nouveau texte traduit, le champ doit d'abord exister dans `Dictionary` (dictionary.ts), puis être rempli dans les 9 fichiers de langue.** TypeScript refuse de compiler si un des 9 fichiers n'implémente pas l'interface en entier — c'est volontaire, ça empêche d'oublier une langue en cours de route.

### Qualité des traductions

- `fr` a longtemps été la langue rédigée directement en premier, avec les 8 autres traduites depuis elle. **Depuis le 17.07.2026, consigne explicite de Thomas : tout nouveau contenu s'écrit d'abord en anglais** (langue prioritaire pour la portée internationale), puis se traduit nativement dans les 8 autres langues dont le français — pas de traduction littérale, une vraie localisation par marché. Le contenu existant rédigé en fr-first (avant cette date) n'est pas retouché rétroactivement ; seul le contenu ajouté à partir de cette consigne suit le nouvel ordre. Exemple de référence : `src/content/services/` (voir plus bas), rédigé anglais-first dans son intégralité.
- `en` a été relu/écrit avec attention.
- `es`, `it`, `de`, `pt`, `nl`, `pl`, `ru` sont des traductions assistées par IA, jamais relues par un locuteur natif — chaque fichier porte un commentaire `NOTE: traduction assistée par IA...` en tête pour le signaler. **Ne pas retirer ce commentaire tant qu'une relecture native n'a pas eu lieu.** Si tu ajoutes du contenu à ces 7 langues, garde le même niveau d'avertissement.
- Registre : vouvoiement partout (fr), et l'équivalent formel dans les langues qui distinguent le registre (`usted`/Sie/Pan-Pani/Вы...).

## URL localisées — quelles routes ont un slug traduit

`src/i18n/routes.ts::localizedSlugs` couvre 6 routes dont le slug change par langue : `tarifs`, `realisations`, `aPropos`, `mentionsLegales`, `confidentialite`, `cgv`. Le français y est toujours la valeur "canonique" (nom du dossier physique sous `src/app/[locale]/`) ; `next.config.ts` s'occupe de réécrire/rediriger automatiquement, rien à faire dans le composant de page lui-même au-delà de choisir le bon slug par locale.

Les routes au slug identique dans toutes les langues (`services`, `contact`, `faq`, `blog`) n'ont pas besoin d'entrée dans `routes.ts` — elles vivent directement dans `staticRoutes` (`src/app/sitemap.ts`) et utilisent `buildAlternates(locale, "mon-slug")` avec une chaîne fixe plutôt qu'une map.

**Choisir un nouveau slug traduit** : privilégie le terme idiomatique local plutôt qu'une traduction littérale quand un terme spécifique existe (ex. `impressum` en allemand pour les mentions légales, `colofon` en néerlandais, pas une traduction mot à mot de "mentions légales").

## Contenu légal — traduit, mais avec une version de référence

`mentions-legales`, `confidentialite`, `cgv` vivent dans `src/i18n/legal/` (un fichier par document : `mentions-legales.ts`, `confidentialite.ts`, `cgv.ts`, plus `types.ts` pour les types partagés et `index.ts` en barrel), chacun exportant un `Record<Locale, LegalPage>` — traduit dans les 9 langues, comme les dictionnaires classiques.

**Le français reste la version juridiquement de référence.** Chaque version non-française affiche une notice traduite (`dictionary.legalPageNotice`) précisant que seule la version française fait foi en cas de divergence d'interprétation ou de litige. Cette notice est cachée sur `fr`, affichée sur toutes les autres locales — logique déjà en place dans les 3 pages (`src/app/[locale]/{mentions-legales,confidentialite,cgv}/page.tsx`), rien à changer si tu ajoutes du contenu, juste à garder la même structure de sections dans les 9 langues d'un même document pour la cohérence.

**Adresse légale** : Gland (VD, Suisse) est la seule adresse qui doit apparaître dans ces 3 pages — c'est l'adresse d'enregistrement réelle de l'entreprise. Ne jamais la remplacer par "Genève" ici, même si "Genève" est utilisé ailleurs sur le site à des fins marketing (voir plus bas).

## Adresse "Gland" vs "Genève" — ne pas les confondre

- **Gland (VD, Suisse)** — l'adresse légale réelle. N'apparaît que dans les pages légales (`src/i18n/legal/mentions-legales.ts`).
- **Genève** (`src/i18n/seo.ts::geneva`, traduit par locale) — utilisée partout ailleurs où une ville sert un usage marketing/SEO (JSON-LD `ProfessionalService` sur l'accueil et `/tarifs`, `llms.txt`, profils tiers comme Trustpilot) : ville plus reconnaissable pour un visiteur international. Si tu ajoutes un nouvel endroit qui affiche une ville à but marketing (pas légal), utilise `geneva[locale]`, pas une chaîne "Genève" codée en dur ni "Gland".

## Le blog — contenu rédigé une fois, servi sous chaque locale

`src/content/blog/` : un fichier par article (voir `gestionnaires-paquets-2026.ts` comme modèle), `types.ts` pour la forme d'un article (title, excerpt, slug, publishedAt, body...), `index.ts` qui exporte `blogPosts`. **Un article n'est pas traduit** — il est rédigé une seule fois et affiché sous chaque préfixe de langue (`/fr/blog/mon-article`, `/en/blog/mon-article`...), même URL de slug partout. Même logique que les pages légales avant leur traduction complète.

Limites de longueur à respecter (flaggées par Ahrefs si dépassées) : titre affiché avec le suffixe `" — Calyroc"` doit rester sous ~60 caractères, l'extrait/meta-description sous ~160 caractères **décodés** (attention : le HTML brut échappe les apostrophes en `&#x27;`, ce qui gonfle artificiellement un comptage naïf sur le texte brut servi — toujours décoder les entités avant de comparer à une limite de caractères).

## Les pages de service — contenu approfondi, un fichier par service

`src/content/services/` : un fichier par service (`showcase-website.ts`, `ecommerce.ts`, `redesign.ts`, `landing-page.ts`, `maintenance.ts`, `technical-seo.ts`, `visual-identity.ts`) + `types.ts` (`ServiceDefinition`, `ServiceTranslation`, `ServiceId` — union des 7 identifiants) + `index.ts` (barrel : `services`, `getService(id)`, `getServiceTranslation(service, locale)`).

**Contrairement au blog, chaque service est traduit dans les 9 langues** (`translations: Partial<Record<Locale, ServiceTranslation>>`) — c'est le contenu commercial principal du site, pas un article ponctuel. Une `ServiceTranslation` couvre : `title`, `metaDescription`, `heroHeadline`/`heroSubhead`, `description` (tableau de paragraphes courts), `includes`, `process` (étapes), `tech`, `timeline`, `faq` (alimente aussi le JSON-LD `FAQPage` de la page), `ctaLabel`.

**Rédaction anglais-first** (voir la note dans "Qualité des traductions" plus haut) : le contenu de service se rédige en anglais en premier, avec une attention particulière au SEO/GEO — réponses FAQ qui commencent directement par la réponse complète (favorise l'extraction par les moteurs IA), paragraphes courts et scannables, structure de page pensée pour convertir (voir `src/app/[locale]/services/[service]/page.tsx` pour l'ordre des sections).

**Slug traduit par service** : `src/i18n/routes.ts::serviceSlugs` (`Record<ServiceId, Record<Locale, string>>`) donne le deuxième segment d'URL par langue (`/services/[slug]`), même logique que `localizedSlugs` mais pour le niveau `/services/*` plutôt que le premier segment. Le français reste le slug canonique (dossier physique `src/app/[locale]/services/[service]/`). `next.config.ts::rewrites` boucle sur `serviceSlugs` en plus de `localizedSlugs`, et `localizePath()` (sélecteur de langue) traduit ce deuxième segment quand le premier segment vaut `"services"`.

**Ajouter un 8e service** :
1. Rédige un nouveau fichier dans `src/content/services/` (anglais d'abord, puis les 8 autres langues) suivant le modèle des 7 existants.
2. Ajoute son `ServiceId` à l'union dans `types.ts` et son entrée dans le barrel `services` (`index.ts`).
3. Ajoute son slug par locale dans `serviceSlugs` (`src/i18n/routes.ts`) — `next.config.ts` et `generateStaticParams` (`src/app/[locale]/services/[service]/page.tsx`, qui boucle sur `services`) s'en chargent automatiquement, rien d'autre à câbler côté routing.
4. Ajoute l'entrée correspondante dans `servicesPage.items` (les 9 fichiers de dictionnaire) pour qu'il apparaisse aussi dans la grille `/services` — **à la même position dans le tableau** que dans le barrel `services` (voir `src/components/ServicesGrid.tsx`, qui retrouve l'`id`/slug par index de tableau plutôt que par un champ dupliqué).
5. Le chatbot (`buildSystemPrompt`) reprend automatiquement le nouveau service dans sa `servicesLinkTable` (elle boucle sur le barrel `services`) — rien à faire de plus.
6. `src/app/sitemap.ts` boucle aussi sur `services` — rien à faire de plus.

## Le chatbot ne se met pas à jour tout seul dans tous les cas

`src/i18n/chatContext.ts::buildSystemPrompt` construit le contexte du chatbot à partir de plusieurs sources :
- `dictionary.servicesPage.items` (titre, description, délai de chaque service — résumé court pour la grille `/services`)
- `dictionary.pricingPage.packs` (nom, prix, description de chaque pack) + `pricingPage.terms`
- `src/content/services/` (barrel `services` + `getServiceTranslation`) → `servicesLinkTable`, un lien direct vers la page dédiée de chaque service, par langue
- `dictionary.faqPage.eyebrow` + slug statique `faq` → ajouté à la table de liens générale (`linkTable`), pour que le modèle puisse rediriger vers `/faq` sur une question hors du périmètre déjà couvert

**Si tu ajoutes ou modifies un service ou un pack tarifaire dans le dictionnaire (`servicesPage.items`/`pricingPage.packs`), le chatbot le sait automatiquement.** **Si tu ajoutes un 8e service complet dans `src/content/services/`, sa page dédiée apparaît aussi automatiquement dans `servicesLinkTable`** (elle boucle sur le barrel `services`) — dans les deux cas, rien à faire de plus dans `chatContext.ts`.

**Si tu ajoutes un tout autre type de contenu** (une nouvelle page indépendante qui n'est ni un service, ni un pack, ni déjà répertoriée dans `linkTable`/`STATIC_SLUGS` — le blog en est l'exemple actuel : le chatbot n'en sait toujours rien par défaut), le chatbot n'en saura rien tant que tu n'as pas édité `buildSystemPrompt` explicitement pour l'y inclure. Pense à te poser la question : "est-ce qu'un visiteur pourrait raisonnablement demander ça au chatbot ?" Si oui, ajoute-le au prompt.

## Ajouter une page publique

Voir la checklist complète dans [`AGENTS.md`](../AGENTS.md), section "Ajouter une page publique" — dictionnaire (9 langues), slug traduit si pertinent, nav (`SiteHeader.tsx`), sitemap, metadata, chatbot si pertinent.

## Ajouter un service ou un pack tarifaire

Deux niveaux possibles, à ne pas confondre :

- **Teaser seulement** (apparaît dans la grille `/services` et sur la homepage, mais sans page dédiée approfondie) : ajoute l'entrée dans `servicesPage.items` dans les 9 fichiers de dictionnaire. Rien d'autre à faire — la page `/services`, `HomeServicesTeaser` (3 premiers items), et le chatbot (résumé `servicesSummary`) lisent tous directement le dictionnaire. C'est le cas pour un pack tarifaire (`pricingPage.packs`), qui n'a jamais de page dédiée.
- **Service avec page dédiée complète** (le cas des 7 services actuels) : voir la procédure "Ajouter un 8e service" dans la section précédente — dictionnaire (teaser) **et** `src/content/services/` (contenu approfondi) **et** `serviceSlugs` (slug traduit), les trois sont nécessaires pour un service qui doit apparaître à la fois dans la grille et avoir sa propre page `/services/[slug]`.

## Composants qui dérivent du dictionnaire ou du contenu (à connaître avant de dupliquer du contenu à la main)

| Composant | Source |
|---|---|
| `HomeServicesTeaser` | `servicesPage.items.slice(0, 3)` |
| `HomeWorkTeaser` | `workPage.caseStudies` (les études de cas) |
| `ServicesGrid` (page `/services`) | `servicesPage.items` (tous) pour le teaser, `src/content/services/` (barrel `services` + `serviceSlugs`) pour le lien vers chaque page dédiée -- même ordre de tableau des deux côtés |
| Page `/services/[service]` | `src/content/services/` (`getService`/`getServiceTranslation`) pour le contenu ; `dictionary.servicesPage` pour le texte d'interface (labels, titres de section) |
| `FaqAccordion` (page `/tarifs`) | `pricingPage.faq` |
| `FaqAccordion` (chaque page `/services/[service]`) | `ServiceTranslation.faq` (dans `src/content/services/`, pas le dictionnaire) |
| Page `/faq` | `dictionary.faqPage` (section dédiée, distincte de `pricingPage.faq` et des FAQ par service) |
| `buildSystemPrompt` (chatbot) | `servicesPage.items` + `pricingPage.packs` + `pricingPage.terms` + `src/content/services/` (`servicesLinkTable`) + `faqPage.eyebrow` |

Modifier une de ces sections se répercute partout où elle est utilisée — pas besoin de chercher chaque composant un par un.

## Réalisations (case studies)

`workPage.caseStudies` — projets réels (Swiss3Design, thomastp.ch). Pas de filtre/catégorisation construit (inutile à ce nombre) — si le nombre de projets grandit significativement, envisager d'ajouter un filtre par catégorie à ce moment-là plutôt que par anticipation.

## Métriques et chiffres

N'affiche que des métriques réellement mesurées (voir `workPage.caseStudies[].results`). Ne pas inventer de chiffres d'impact pour "faire plus vendeur" — cohérence avec le positionnement honnête de Calyroc (voir `PLAN.md` §1).
