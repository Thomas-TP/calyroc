# Guide de contenu

Comment le contenu du site est organisé, et comment le modifier sans casser une locale ou laisser le chatbot désynchronisé du site réel.

## Le dictionnaire — source unique de vérité

Tout texte affiché sur une page publique (hors contenu légal, voir plus bas) vit dans `src/i18n/dictionaries/{fr,en,es,it,de,pt}.ts`, qui implémentent tous l'interface `Dictionary` définie dans `src/i18n/dictionary.ts`.

**Règle simple : si un composant a besoin d'un nouveau texte traduit, le champ doit d'abord exister dans `Dictionary` (dictionary.ts), puis être rempli dans les 6 fichiers de langue.** TypeScript refuse de compiler si un des 6 fichiers n'implémente pas l'interface en entier — c'est volontaire, ça empêche d'oublier une langue en cours de route.

### Qualité des traductions

- `fr` est rédigé directement, c'est la langue de référence.
- `en` a été relu/écrit avec attention.
- `es`, `it`, `de`, `pt` sont des traductions assistées par IA, jamais relues par un locuteur natif — chaque fichier porte un commentaire `NOTE: traduction assistée par IA...` en tête pour le signaler. **Ne pas retirer ce commentaire tant qu'une relecture native n'a pas eu lieu.** Si tu ajoutes du contenu à ces 4 langues, garde le même niveau d'avertissement.

## Contenu légal — cas à part

`mentions-legales`, `confidentialite`, `cgv` sont rédigés **en français uniquement** et affichés identiques sur toutes les locales, avec une notice traduite (`dictionary.legalPageNotice`) expliquant que le français fait foi. **Ne pas traduire le contenu légal lui-même** — décision volontaire pour éviter de publier une traduction IA non relue sur une page à risque de conformité (RGPD/nLPD).

## Le chatbot ne se met pas à jour tout seul dans tous les cas

`src/i18n/chatContext.ts::buildSystemPrompt` construit le contexte du chatbot à partir de deux sections précises du dictionnaire :
- `dictionary.servicesPage.items` (titre, description, délai de chaque service)
- `dictionary.pricingPage.packs` (nom, prix, description de chaque pack) + `pricingPage.terms`

**Si tu ajoutes ou modifies un service ou un pack tarifaire dans le dictionnaire, le chatbot le sait automatiquement** — rien à faire de plus.

**Si tu ajoutes un tout autre type de contenu** (une nouvelle page indépendante, une nouvelle section qui n'est ni un service ni un pack), le chatbot n'en saura rien tant que tu n'as pas édité `buildSystemPrompt` explicitement pour l'y inclure. Pense à te poser la question : "est-ce qu'un visiteur pourrait raisonnablement demander ça au chatbot ?" Si oui, ajoute-le au prompt.

## Ajouter une page publique

Voir la checklist complète dans [`AGENTS.md`](../AGENTS.md), section "Ajouter une page publique" — dictionnaire (6 langues), nav (`SiteHeader.tsx`), sitemap, metadata, chatbot si pertinent.

## Ajouter un service ou un pack tarifaire

1. Ajoute l'entrée dans `servicesPage.items` (ou `pricingPage.packs`) dans les 6 fichiers de dictionnaire.
2. Rien d'autre à faire — la page `/services` (ou `/tarifs`), la homepage (`HomeServicesTeaser` prend les 3 premiers items), et le chatbot lisent tous directement le dictionnaire.

## Composants qui dérivent du dictionnaire (à connaître avant de dupliquer du contenu à la main)

| Composant | Source |
|---|---|
| `HomeServicesTeaser` | `servicesPage.items.slice(0, 3)` |
| `HomeWorkTeaser` | `workPage.caseStudies` (les 2 études de cas) |
| `ServicesGrid` (page `/services`) | `servicesPage.items` (tous) |
| `FaqAccordion` (page `/tarifs`) | `pricingPage.faq` |
| `buildSystemPrompt` (chatbot) | `servicesPage.items` + `pricingPage.packs` + `pricingPage.terms` |

Modifier une de ces sections du dictionnaire se répercute partout où elle est utilisée — pas besoin de chercher chaque composant un par un.

## Réalisations (case studies)

`workPage.caseStudies` — actuellement 2 projets réels (Swiss3Design, thomastp.ch). Pas de filtre/catégorisation construit (inutile à ce nombre) — si le nombre de projets grandit significativement, envisager d'ajouter un filtre par catégorie à ce moment-là plutôt que par anticipation.

## Métriques et chiffres

N'affiche que des métriques réellement mesurées (voir `workPage.caseStudies[].results`). Ne pas inventer de chiffres d'impact pour "faire plus vendeur" — cohérence avec le positionnement honnête de Calyroc (voir `PLAN.md` §1).
