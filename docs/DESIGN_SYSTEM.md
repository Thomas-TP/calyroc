# Design system

Phase 0 de la [feuille de route de refonte design](../PLAN.md) — fondations avant de toucher aux pages. Complète [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) (qui décrit les composants) avec le *pourquoi* des choix visuels.

## Palette — verrouillée

La palette ne change pas dans le cadre de la refonte design (décision explicite). Définie dans `uno.config.ts` :

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

**`text-impact` — à quoi ça sert et à quoi pas.** Majuscules + tracking très serré (`tracking-tighter`) + gras. Ça fonctionne comme un poster : un mot ou un chiffre isolé (ex. un montant dans un widget de comparaison de prix). **Ne jamais l'utiliser sur une phrase complète** — en majuscules serrées, une phrase devient illisible. Inspiré du contraste que produit Barlow Condensed chez CraftedPages, adapté à Space Grotesk (qui n'est pas une police condensée) via l'échelle et le tracking plutôt qu'un changement de police.

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
- `CustomSelect` (`src/components/CustomSelect.tsx`) — remplace tout `<select>` natif, voir `docs/ARCHITECTURE.md`.
- `PageHeader` — eyebrow + titre + sous-titre centré, utilisé en haut de chaque page de contenu.

## Ce qui n'est pas encore dans ce document

Les phases 1 à 5 de la refonte design (widget de comparaison de prix, timeline de livraison visuelle, carte fondateur, micro-interactions) ajouteront leurs propres patterns au fur et à mesure — ce fichier doit être mis à jour à chaque nouveau composant réutilisable, pas seulement au lancement de chaque phase.
