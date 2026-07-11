# Architecture technique

Comment les briques du site s'articulent. Pour les règles de build/déploiement à ne pas casser, voir [`AGENTS.md`](../AGENTS.md). Pour comment ajouter/modifier du contenu, voir [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md).

## Vue d'ensemble

```
Visiteur
  │
  ▼
Cloudflare Worker "calyroc"  (OpenNext runtime — Next.js sur Workers, pas Pages)
  │
  ├─ src/middleware.ts        redirige "/" vers "/{locale}/" (Accept-Language)
  ├─ src/app/[locale]/*       pages publiques (SSG pour la plupart, voir routes ƒ vs ● au build)
  ├─ src/app/admin/*          zone privée (auth par mot de passe, rendu dynamique)
  ├─ src/app/api/chat/route.ts  chatbot (Workers AI)
  └─ src/app/actions.ts        server action du formulaire de contact
       │
       ├─→ D1 "calyroc-leads" (binding env.DB)     stocke chaque lead
       ├─→ Resend API                                envoie une notification email (best-effort)
       └─→ Cloudflare Turnstile (siteverify Worker séparé)   anti-spam, vérifié avant tout traitement
```

## i18n (6 langues)

- `src/i18n/locales.ts` — liste des locales (`fr` défaut, `en`, `es`, `it`, `de`, `pt`) + helpers (`isLocale`, `pickLocaleFromAcceptLanguage`).
- `src/i18n/dictionary.ts` — interface TypeScript `Dictionary` : **source de vérité** de tous les champs traduisibles. Si un composant a besoin d'un nouveau texte traduit, le champ doit exister ici avant d'exister dans les dictionnaires.
- `src/i18n/dictionaries/{fr,en,es,it,de,pt}.ts` — un fichier par langue, doit implémenter `Dictionary` en entier (TypeScript échoue sinon — c'est voulu, ça évite d'oublier une langue).
- Routing : `src/app/[locale]/` gère le paramètre dynamique. `[locale]/layout.tsx` valide la locale (`isLocale`) et appelle `notFound()` si invalide — voir la section 404 plus bas, c'est une subtilité importante.
- Contenu légal (`mentions-legales`, `confidentialite`, `cgv`) : **rédigé en français uniquement**, affiché tel quel sur toutes les locales avec une notice traduite (`dictionary.legalPageNotice`) expliquant que c'est la version de référence. Décision volontaire : évite de publier des traductions IA non relues sur des pages à risque de conformité.

## Routing 404 — pourquoi il y a deux `not-found.tsx`

Ce point a été une source de bug réelle (corrigé le 11.07), donc à bien comprendre avant d'y retoucher :

- **`src/app/not-found.tsx`** (racine) — sert pour une **locale invalide** (`/xx/...`). `[locale]/layout.tsx` appelle `notFound()` dès que `isLocale(locale)` est faux, ce qui fait échouer le layout lui-même. Next.js ne peut alors PAS utiliser le `not-found.tsx` du même dossier que ce layout (il ferait partie de l'arbre que le layout est censé englober) — il remonte au segment parent, donc au `not-found.tsx` racine. Comme il n'y a pas de `app/layout.tsx` racine dans ce projet, ce fichier doit fournir son propre `<html><body>`.
- **`src/app/[locale]/not-found.tsx`** — sert pour une **locale valide mais route inexistante** (`/fr/n-importe-quoi`). Ce cas passe par `[locale]/[...rest]/page.tsx` (catch-all qui appelle `notFound()` inconditionnellement), qui EST enveloppé par `[locale]/layout.tsx` (le layout ne plante pas, la locale est valide) — donc ce fichier ne doit **pas** avoir son propre `<html><body>` (sinon HTML imbriqué invalide), juste le contenu. C'est un client component (`"use client"`) qui lit la locale via `usePathname()` pour que le lien "retour à l'accueil" pointe vers la bonne langue — un `params` côté serveur n'est pas fiable ici (testé : ne se peuple pas sur un `notFound()` explicite).

## Chatbot "Ask Calyroc"

- `src/app/api/chat/route.ts` — endpoint qui appelle Workers AI (`@cf/meta/llama-3.1-8b-instruct-fast`) via le binding `env.AI`.
- `src/i18n/chatContext.ts` — `buildSystemPrompt(locale)` construit le system prompt **à partir du dictionnaire réel** (`servicesPage.items`, `pricingPage.packs`, `pricingPage.terms`), pas d'un texte statique séparé. Ça veut dire qu'ajouter un service ou un pack dans le dictionnaire met à jour le chatbot automatiquement, sans y retoucher. Le prompt inclut des garde-fous stricts (pas de prix/délai ferme, pas de promesse hors de ce qui est listé).
- `src/components/AskCalyroc.tsx` — widget flottant (client component), animation d'ouverture, auto-scroll, autofocus.

## Formulaire de contact → leads

- `src/components/ContactForm.tsx` (client) → `src/app/actions.ts::submitContactForm` (server action).
- Flux : validation Zod → vérification Turnstile (`src/lib/turnstile.ts`, appelle le Worker `turnstile-siteverify-calyroc` déployé séparément) → insertion D1 (table `leads`, schéma dans `migrations/0001_init.sql`) → tentative d'envoi Resend en best-effort (le lead reste capturé même si l'email échoue).
- Le champ "budget" est un `CustomSelect` (voir plus bas) mais reste une simple string côté validation — pas d'enum strict côté serveur.

## Admin (`/admin`, non localisé)

- Auth : mot de passe unique (`ADMIN_PASSWORD`), cookie de session signé HMAC-SHA256 (`src/lib/adminAuth.ts`, Web Crypto API, comparaison timing-safe), secret de signature `ADMIN_SESSION_SECRET`.
- `src/components/LeadsTable.tsx` — liste des leads D1, statut éditable (`LEAD_STATUSES` dans `src/lib/leads.ts`), notes, export CSV (`src/app/admin/export/route.ts`).
- `src/components/PaymentLinkGenerator.tsx` + `src/lib/stripe.ts` — génère un lien de paiement Stripe Checkout par lead, montant libre. Pas de self-checkout public sur `/tarifs` (décision volontaire, voir `PLAN.md`).

## Composant `CustomSelect`

`src/components/CustomSelect.tsx` — remplace tous les `<select>` natifs du site (sélecteur de langue, budget du formulaire, statut admin) par un listbox stylé aux couleurs du site (onyx/bronze), animé (`motion`). Rend un `<input type="hidden">` synchronisé avec la sélection quand `name` est fourni, donc compatible avec les `<form action={...}>` (server actions) sans rien changer côté serveur.

## Design system

- `uno.config.ts` — palette (onyx/paper/stone/bronze), polices (Space Grotesk Variable / Inter Variable, auto-hébergées dans `public/fonts/`), shortcuts `btn-primary`/`btn-secondary`.
- `src/components/MotionProvider.tsx` — enveloppe l'app dans `MotionConfig reducedMotion="user"` : toute animation `motion/react` respecte automatiquement `prefers-reduced-motion` côté OS.
- `src/components/Reveal.tsx` — wrapper `whileInView` générique pour les animations d'apparition au scroll.

## SEO

- `src/app/sitemap.ts` / `src/app/robots.ts` — génération dynamique, `/admin` exclu du robots.txt.
- JSON-LD : `ProfessionalService` sur l'accueil, `FAQPage` sur `/tarifs`.
- Open Graph / Twitter Card définis dans `[locale]/layout.tsx::generateMetadata`, image statique `public/og-image.png` (régénérable via `scripts/gen-og-image.mjs`, voir `AGENTS.md` règle #3).
