# Guide de contenu

Comment le contenu du site est organisé, et comment le modifier sans casser une locale ou laisser le chatbot désynchronisé du site réel.

## Le dictionnaire — source unique de vérité

Tout texte affiché sur une page publique (hors contenu légal et blog, voir plus bas) vit dans `src/i18n/dictionaries/{fr,en,es,it,de,pt,nl,pl,ru}.ts`, qui implémentent tous l'interface `Dictionary` définie dans `src/i18n/dictionary.ts`.

**Règle simple : si un composant a besoin d'un nouveau texte traduit, le champ doit d'abord exister dans `Dictionary` (dictionary.ts), puis être rempli dans les 9 fichiers de langue.** TypeScript refuse de compiler si un des 9 fichiers n'implémente pas l'interface en entier — c'est volontaire, ça empêche d'oublier une langue en cours de route.

### Qualité des traductions

- `fr` est rédigé directement, c'est la langue de référence.
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

## Le chatbot ne se met pas à jour tout seul dans tous les cas

`src/i18n/chatContext.ts::buildSystemPrompt` construit le contexte du chatbot à partir de deux sections précises du dictionnaire :
- `dictionary.servicesPage.items` (titre, description, délai de chaque service)
- `dictionary.pricingPage.packs` (nom, prix, description de chaque pack) + `pricingPage.terms`

**Si tu ajoutes ou modifies un service ou un pack tarifaire dans le dictionnaire, le chatbot le sait automatiquement** — rien à faire de plus.

**Si tu ajoutes un tout autre type de contenu** (une nouvelle page indépendante, une nouvelle section qui n'est ni un service ni un pack — le blog et la FAQ en sont un exemple : le chatbot n'en sait rien par défaut), le chatbot n'en saura rien tant que tu n'as pas édité `buildSystemPrompt` explicitement pour l'y inclure. Pense à te poser la question : "est-ce qu'un visiteur pourrait raisonnablement demander ça au chatbot ?" Si oui, ajoute-le au prompt.

## Ajouter une page publique

Voir la checklist complète dans [`AGENTS.md`](../AGENTS.md), section "Ajouter une page publique" — dictionnaire (9 langues), slug traduit si pertinent, nav (`SiteHeader.tsx`), sitemap, metadata, chatbot si pertinent.

## Ajouter un service ou un pack tarifaire

1. Ajoute l'entrée dans `servicesPage.items` (ou `pricingPage.packs`) dans les 9 fichiers de dictionnaire.
2. Rien d'autre à faire — la page `/services` (ou `/tarifs`), la homepage (`HomeServicesTeaser` prend les 3 premiers items), et le chatbot lisent tous directement le dictionnaire.

## Composants qui dérivent du dictionnaire (à connaître avant de dupliquer du contenu à la main)

| Composant | Source |
|---|---|
| `HomeServicesTeaser` | `servicesPage.items.slice(0, 3)` |
| `HomeWorkTeaser` | `workPage.caseStudies` (les études de cas) |
| `ServicesGrid` (page `/services`) | `servicesPage.items` (tous) |
| `FaqAccordion` (page `/tarifs`) | `pricingPage.faq` |
| Page `/faq` | `dictionary.faqPage` (section dédiée, distincte de `pricingPage.faq`) |
| `buildSystemPrompt` (chatbot) | `servicesPage.items` + `pricingPage.packs` + `pricingPage.terms` |

Modifier une de ces sections du dictionnaire se répercute partout où elle est utilisée — pas besoin de chercher chaque composant un par un.

## Réalisations (case studies)

`workPage.caseStudies` — projets réels (Swiss3Design, thomastp.ch). Pas de filtre/catégorisation construit (inutile à ce nombre) — si le nombre de projets grandit significativement, envisager d'ajouter un filtre par catégorie à ce moment-là plutôt que par anticipation.

## Métriques et chiffres

N'affiche que des métriques réellement mesurées (voir `workPage.caseStudies[].results`). Ne pas inventer de chiffres d'impact pour "faire plus vendeur" — cohérence avec le positionnement honnête de Calyroc (voir `PLAN.md` §1).
