# Design system

Fondations visuelles du site — voir [`PLAN.md`](../PLAN.md) pour le positionnement produit. Complète [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) (qui décrit les composants) avec le *pourquoi* des choix visuels. Ce document doit être tenu à jour au fil des refontes de page, pas seulement au lancement d'une phase — voir la dernière section.

## Palette — verrouillée

La palette ne change pas dans le cadre de la refonte design (décision explicite). Définie dans `uno.config.ts`, chaque token est une variable CSS custom property (`globals.css`, blocs `.dark`/`.light`) — c'est ce qui permet au thème clair/sombre (`src/components/ThemeToggle.tsx`) de re-thémer tout le site sans qu'aucun composant n'ait besoin d'une variante `dark:`/`light:` de sa propre classe :

| Token | Valeur | Usage |
|---|---|---|
| `onyx` | `#0B0B0C` | Fond de page |
| `onyx-soft` | `#131316` | Panneaux, cartes |
| `paper` | `#F5F3EF` | Texte principal |
| `stone` | `#8C887F` | Texte secondaire, bordures (via opacité) |
| `bronze` | `#C9A567` | Accent unique — CTA, liens actifs, highlights |
| `bronze-soft` | `#E4CB9C` | Hover sur bronze |

Un seul accent, jamais deux couleurs vives sur le même écran — c'est ce qui distingue Calyroc des 4 sites de référence de la refonte (AlpiCode/corail, CraftedPages/orange, Studio Cotton/citron, Yellowball/néon), qui utilisent tous une couleur différente mais suivent la même règle du "un seul accent".

## Typographie — échelle nommée par rôle

`uno.config.ts` expose des shortcuts nommés par intention plutôt que par taille brute (`text-6xl` ne dit rien sur l'usage ; `text-display-xl` si). Toujours partir d'un de ces shortcuts avant d'écrire une classe `text-*` à la main :

| Shortcut | Usage | Exemple actuel |
|---|---|---|
| `text-eyebrow` | Label au-dessus d'un titre de section | "CE QUE JE FAIS", "COMMENT ÇA SE PASSE" |
| `text-display-xl` | Titre de la homepage (le plus grand du site) | H1 du Hero |
| `text-display-lg` | Titre de page (`PageHeader`) | "Des prix clairs, sans case cachée." |
| `text-display-md` | Titre de section sur une page | Titres des teasers homepage |
| `text-display-sm` | Titre de carte/bloc | Titres de `PricingCard`, `HomeServicesTeaser` |
| `text-impact` | Phrases courtes (2-5 mots), traitement graphique | Pas encore utilisé — réservé Phase 1 |

**`text-impact` — à quoi ça sert et à quoi pas.** Majuscules + tracking très serré (`tracking-tighter`) + gras. Ça fonctionne comme un poster : un mot ou un chiffre isolé — utilisé aujourd'hui dans `PriceCompareWidget.tsx` pour les montants comparés. **Ne jamais l'utiliser sur une phrase complète** — en majuscules serrées, une phrase devient illisible. Inspiré du contraste que produit Barlow Condensed chez CraftedPages, adapté à Space Grotesk (qui n'est pas une police condensée) via l'échelle et le tracking plutôt qu'un changement de police.

Polices : Space Grotesk Variable (`font-display`, poids 300-700 réellement disponibles dans le fichier — ne pas demander 800/900, le navigateur simule un faux gras si le poids n'existe pas dans le fichier variable) + Inter Variable (`font-body`).

## Espacement

Pas de token custom — l'échelle par défaut d'UnoCSS/Tailwind (base 4px : `p-1`=4px, `p-2`=8px, `p-4`=16px, `p-6`=24px, `p-8`=32px...) est déjà cohérente sur tout le site. La convention observée :
- Padding de carte : `p-6` (compact, admin) ou `p-8` (public)
- Écart entre sections homepage : `py-24 md:py-32`
- Écart interne section → contenu : `mt-12` à `mt-16`

Rester sur ces trois paliers plutôt que d'introduire une nouvelle valeur ponctuelle.

## Composants

- `btn-primary` / `btn-secondary` (`uno.config.ts`) — les deux seuls styles de bouton du site. Ne pas créer de troisième variante sans mettre à jour ce document.
- `Reveal` (`src/components/Reveal.tsx`) — wrapper `whileInView` générique pour l'apparition au scroll. Respecte `prefers-reduced-motion` via `MotionProvider`.
- `CustomSelect` (`src/components/CustomSelect.tsx`) — remplace tout `<select>` natif du site (langue, pack du formulaire, statut admin, dropdown Studio du header), voir `docs/ARCHITECTURE.md`. Props `panelPosition`/`variant`/`closeSignal` pour s'adapter à chaque contexte de réutilisation sans dupliquer le composant.
- `NavDropdown` (`src/components/NavDropdown.tsx`) — habillage du header autour de `CustomSelect` pour le menu "Studio".
- `PageHeader` — eyebrow + titre + sous-titre centré, utilisé en haut de chaque page de contenu.
- `PriceCompareWidget` — comparaison de prix animée (spotlight `:has()`, container queries, connecteur dessiné au scroll), utilise `text-impact` pour les montants.
- `ThemeToggle` — bascule thème clair/sombre.
- Animation : tout le site utilise `motion` (Framer Motion) via `MotionProvider` — pas GSAP/Lenis, malgré ce qu'un historique de tâches périmé pourrait laisser penser.

## Tenir ce document à jour

Chaque nouveau composant réutilisable (pas juste une variation ponctuelle d'un composant existant) doit être ajouté à la liste ci-dessus au moment où il est construit, pas après coup lors d'une passe de rattrapage de la documentation.
