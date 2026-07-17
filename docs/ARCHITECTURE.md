# Architecture technique

Comment les briques du site s'articulent. Pour les règles de build/déploiement à ne pas casser, voir [`AGENTS.md`](../AGENTS.md). Pour comment ajouter/modifier du contenu, voir [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md).

## Vue d'ensemble

```
Visiteur (ou agent IA piloté par un vrai navigateur)
  │
  ▼
Cloudflare edge  ──── AI Crawl Control (Content Signals, robots.txt) + security.txt
  │                    entièrement gérés côté Cloudflare, pas dans ce repo (voir AGENTS.md règle #8)
  ▼
Cloudflare Worker "calyroc"  (OpenNext runtime — Next.js sur Workers, pas Pages)
  │
  ├─ src/middleware.ts        localise un chemin sans préfixe de locale (Accept-Language, ou le
  │                            préfixe qui possède déjà ce slug traduit)
  ├─ src/app/[locale]/*       pages publiques (SSG pour la plupart, voir routes ƒ vs ● au build)
  ├─ src/app/admin/*          zone privée (auth par mot de passe, rendu dynamique)
  ├─ src/app/api/chat/route.ts  chatbot (Workers AI)
  ├─ src/app/api/stripe/webhook/  confirmation des paiements Stripe côté serveur
  └─ src/app/actions.ts        server action du formulaire de contact
       │
       ├─→ D1 "calyroc-leads" (binding env.DB)     stocke chaque lead, statut, étape de suivi
       ├─→ Resend API                                envoie une notification email (best-effort)
       └─→ Cloudflare Turnstile (siteverify Worker séparé)   anti-spam, vérifié avant tout traitement
```

## i18n (9 langues)

- `src/i18n/locales.ts` — liste des locales (`fr` défaut, `en`, `es`, `it`, `de`, `pt`, `nl`, `pl`, `ru`) + helpers (`isLocale`, `pickLocaleFromAcceptLanguage`).
- `src/i18n/dictionary.ts` — interface TypeScript `Dictionary` : **source de vérité** de tous les champs traduisibles. Si un composant a besoin d'un nouveau texte traduit, le champ doit exister ici avant d'exister dans les dictionnaires.
- `src/i18n/dictionaries/{fr,en,es,it,de,pt,nl,pl,ru}.ts` — un fichier par langue, doit implémenter `Dictionary` en entier (TypeScript échoue sinon — c'est voulu, ça évite d'oublier une langue).
- `src/i18n/routes.ts` — `localizedSlugs`, le slug d'URL traduit par locale pour les 6 routes qui en ont un (`tarifs`, `realisations`, `aPropos`, `mentionsLegales`, `confidentialite`, `cgv`). Le français est toujours le slug "canonique"/dossier physique interne ; les autres locales pointent vers ce même dossier via `next.config.ts::rewrites`, et l'ancienne URL à slug français sous un préfixe non-fr redirige (301, `next.config.ts::redirects`) vers la nouvelle URL localisée.
- Routing : `src/app/[locale]/` gère le paramètre dynamique. `[locale]/layout.tsx` valide la locale (`isLocale`) et appelle `notFound()` si invalide — voir la section 404 plus bas, c'est une subtilité importante.
- `src/i18n/seo.ts::buildAlternates(locale, path)` — construit canonical + hreflang. `path` accepte soit une chaîne fixe (routes au slug identique dans toutes les langues : `services`, `contact`, `faq`, `blog`), soit une map par locale (routes traduites, voir `localizedSlugs`) — nécessaire pour que le hreflang de chaque langue pointe vers *sa propre* URL localisée, pas vers le slug de la locale courante répété partout.
- Contenu légal (`mentions-legales`, `confidentialite`, `cgv`) : **traduit dans les 9 langues** (`src/i18n/legal/`), avec une notice sur chaque version non-française expliquant que le français fait foi en cas de litige. Voir `CONTENT_GUIDE.md` pour la structure des fichiers.
- **Adresse Gland vs Genève** : `src/i18n/seo.ts::geneva` (nom de Genève traduit par locale) sert pour tout usage marketing/JSON-LD ; l'adresse légale réelle (Gland, VD) n'apparaît que dans les pages légales elles-mêmes. Ne jamais mélanger les deux — voir `PLAN.md` §4.

## Routing 404 — pourquoi il y a deux `not-found.tsx`

Ce point a été une source de bug réelle, donc à bien comprendre avant d'y retoucher :

- **`src/app/not-found.tsx`** (racine) — sert pour une **locale invalide** (`/xx/...`). `[locale]/layout.tsx` appelle `notFound()` dès que `isLocale(locale)` est faux, ce qui fait échouer le layout lui-même. Next.js ne peut alors PAS utiliser le `not-found.tsx` du même dossier que ce layout (il ferait partie de l'arbre que le layout est censé englober) — il remonte au segment parent, donc au `not-found.tsx` racine. Comme il n'y a pas de `app/layout.tsx` racine dans ce projet, ce fichier doit fournir son propre `<html><body>`.
- **`src/app/[locale]/not-found.tsx`** — sert pour une **locale valide mais route inexistante** (`/fr/n-importe-quoi`). Ce cas passe par `[locale]/[...rest]/page.tsx` (catch-all qui appelle `notFound()` inconditionnellement), qui EST enveloppé par `[locale]/layout.tsx` (le layout ne plante pas, la locale est valide) — donc ce fichier ne doit **pas** avoir son propre `<html><body>` (sinon HTML imbriqué invalide), juste le contenu. C'est un client component (`"use client"`) qui lit la locale via `usePathname()` pour que le lien "retour à l'accueil" pointe vers la bonne langue.

## Chatbot "Ask Calyroc"

- `src/app/api/chat/route.ts` — endpoint qui appelle Workers AI (`@cf/zai-org/glm-4.7-flash`, un modèle "flash" léger mais orienté multilingue avec un contexte de 131k tokens) via le binding `env.AI`. Modèle "reasoning" : `chat_template_kwargs: { enable_thinking: false }` désactive la chaîne de pensée cachée pour que tout le budget de tokens aille à la réponse visible (sinon `max_tokens` peut s'épuiser avant même d'écrire une réponse).
- `src/i18n/chatContext.ts` — `buildSystemPrompt(locale)` construit le system prompt **à partir du dictionnaire réel** (`servicesPage.items`, `pricingPage.packs`, `pricingPage.terms`), pas d'un texte statique séparé. Ça veut dire qu'ajouter un service ou un pack dans le dictionnaire met à jour le chatbot automatiquement, sans y retoucher. Construit aussi une `servicesLinkTable` distincte (une ligne par langue, un lien par service) à partir de `src/content/services/` (le barrel) + `serviceSlugs`, pour que le modèle puisse lier directement vers la page dédiée d'un service précis plutôt que toujours vers la liste générique `/services` — voir la règle `<format>` dédiée dans le prompt. Le prompt inclut des garde-fous stricts (pas de prix/délai ferme, pas de promesse hors de ce qui est listé).
- `src/components/AskCalyroc.tsx` — widget flottant (client component), badge de disclosure IA visible dès l'ouverture, `AskCalyrocLoader.tsx` pour l'état de chargement, animation d'ouverture, auto-scroll, autofocus.

## Formulaire de contact → leads

- `src/components/ContactForm.tsx` (client) → `src/app/actions.ts::submitContactForm` (server action, pas une route API classique — voir plus bas).
- Flux : validation Zod → vérification Turnstile (`src/lib/turnstile.ts`, appelle le Worker `turnstile-siteverify-calyroc` déployé séparément) → insertion D1 (table `leads`, schéma dans `migrations/0001_init.sql` + colonnes ajoutées par `0002_payments.sql`/`0003_project_tracking.sql`) → tentative d'envoi Resend en best-effort (le lead reste capturé même si l'email échoue ; les échecs d'envoi sont avalés silencieusement par `sendEmail()`, pas de retry).
- Le champ "pack" (`packId`) est un `CustomSelect` (voir plus bas) mais reste une simple string côté validation Zod (union avec les IDs de pack connus + `"unsure"`).
- **Pourquoi il n'y a pas de `/api/contact`** : le formulaire poste via une Next.js Server Action (`useActionState`/`action={formAction}`), pas un `fetch` vers une route dédiée. Ça compile en un POST vers l'URL de la page courante avec un en-tête `Next-Action` interne, protégé par la vérification d'origine CSRF par défaut de Next.js (`form-action 'self'` dans la CSP). Un appelant externe ne peut donc pas soumettre le formulaire par un simple POST JSON — il doit soit piloter un vrai navigateur sur la page rendue, soit passer par une future route API dédiée si ce besoin apparaît un jour (voir la note "adapté aux agents IA" plus bas).

## Formulaire de contact — adapté aux agents IA

- **WebMCP déclaratif** (`toolname`/`tooldescription` sur la balise `<form>`, `toolparamdescription` sur chaque champ — voir `src/types/webmcp.d.ts`) : essai d'origine Chrome 149+, permet à un navigateur compatible de présenter le formulaire comme un outil directement appelable par un agent IA intégré. Limite connue : ne fonctionne que dans Chrome avec l'essai activé — aucun effet dans Claude, ChatGPT ou la plupart des navigateurs actuels. Le champ `packId` (piloté par `CustomSelect`, pas un `<select>` natif) ne peut pas exposer automatiquement la liste de ses valeurs possibles à ce mécanisme, contrairement à un `<select><option>` natif.
- **Accessibilité DOM** (bénéficie aussi aux agents qui pilotent un vrai navigateur — Claude computer-use, ChatGPT agent mode, Perplexity Comet — et aux humains avec lecteur d'écran) : `id`/`htmlFor` explicites sur nom/email/message, `autoComplete`, `CustomSelect` avec ARIA correct (`aria-haspopup`, `aria-expanded`, `role="listbox"/"option"`).
- **Turnstile reste la seule protection anti-spam.** Volontairement pas de rate-limiting applicatif supplémentaire (IP, KV) ni de contournement pour les agents — un appel programmatique sans passer par un vrai challenge navigateur échoue toujours côté serveur, par design.

## Admin (`/admin`, non localisé)

- Auth : mot de passe unique (`ADMIN_PASSWORD`), cookie de session signé HMAC-SHA256 (`src/lib/adminAuth.ts`, Web Crypto API, comparaison timing-safe), secret de signature `ADMIN_SESSION_SECRET`.
- `src/app/admin/page.tsx` + `src/components/AdminDashboard.tsx` — vue d'ensemble : stats agrégées en mémoire depuis la liste des leads déjà chargée (pas de requête D1 séparée), recherche/filtre côté client, leads groupés en colonnes par statut. `src/components/LeadCard.tsx` est un résumé cliquable (nom, email, badge, aperçu du message, indicateurs "suivi actif"/"vu il y a X") qui renvoie vers la page de détail — il ne contient plus aucun formulaire lui-même.
- `src/app/admin/leads/[id]/page.tsx` — page de détail complète d'un lead : statut/notes (+ lien de preview du site, `leads.preview_url`), section paiement (`PaymentLinkGenerator` + `src/lib/stripe.ts`), section suivi client (`ProjectStageGenerator` — étape 1 à 4, `PROJECT_STAGE_COUNT` dans `src/lib/leads.ts` — avec le lien `/suivi/[token]` **toujours affiché** dès qu'un token existe, pas seulement juste après une soumission), section fichiers (`ProjectFileManager`, voir plus bas), section mises à jour (`ProjectUpdateComposer` + historique).
- Export CSV : `src/app/admin/export/route.ts`.

### Partage d'images/logo (R2)

- `env.PROJECT_FILES` (binding R2, bucket `calyroc-project-files`) stocke les fichiers sous la clé `leads/{status_token}/{fichier}` — **par token, pas par id numérique de lead** : ça permet à la route de service publique de rester non authentifiée tout en restant sécurisée (même principe que `/suivi/[token]`, voir `src/lib/leads.ts::ensureStatusToken`).
- Upload : `src/components/ProjectFileManager.tsx` (client) → `src/app/admin/actions.ts::uploadProjectFile` (server action, FormData avec un vrai `File`, PNG/JPEG/WebP/SVG uniquement, 8 Mo max).
- Service : `src/app/api/files/[token]/[key]/route.ts` — `GET`, lit directement `env.PROJECT_FILES.get(...)`, aucune vérification D1 nécessaire puisque la clé elle-même encode déjà l'autorisation.
- Le même composant de galerie (miniatures + suppression au survol) est utilisé côté admin ; côté client (`/suivi/[token]`), les images s'affichent en lecture seule, section masquée s'il n'y a encore aucun fichier.

## Blog

- `src/content/blog/` — un fichier par article (ex. `gestionnaires-paquets-2026.ts`) + `types.ts` (forme d'un article) + `index.ts` (barrel qui exporte `blogPosts`). Un article est rédigé **une seule fois** (pas de traduction par locale) et servi sous chaque préfixe de langue — même pattern que les pages légales avant leur traduction complète.
- `src/app/[locale]/blog/page.tsx` (liste) et `src/app/[locale]/blog/[slug]/page.tsx` (article).

## Pages de service dédiées

- `src/content/services/` — contenu approfondi des 7 services (site vitrine, e-commerce, refonte, landing page, maintenance, SEO technique, identité visuelle), un fichier par service + `types.ts` (`ServiceDefinition`/`ServiceTranslation`) + `index.ts` (barrel qui exporte `services`, `getService`, `getServiceTranslation`). Contrairement au blog, **chaque service est traduit dans les 9 langues** (`ServiceTranslation` par locale) — c'est le contenu marketing principal du site, pas un article ponctuel.
- Slug à deux niveaux : `src/i18n/routes.ts::serviceSlugs` donne le slug traduit par locale pour le deuxième segment (`/services/[slug]`), même convention que `localizedSlugs` (français = dossier physique canonique). `next.config.ts::rewrites` boucle sur `serviceSlugs` en plus de `localizedSlugs` pour réécrire chaque URL localisée vers ce dossier ; `localizePath()` (`src/i18n/routes.ts`, utilisé par le sélecteur de langue) traduit spécifiquement ce deuxième segment quand le premier vaut `"services"`.
- `src/app/[locale]/services/[service]/page.tsx` — page dynamique unique pour les 7 services × 9 langues (63 pages statiques). `generateStaticParams` ne retourne que les 7 slugs canoniques (français) : `params.service` reçu par la page est **toujours** ce slug canonique, quelle que soit la locale visitée, puisque `rewrites()` a déjà réécrit l'URL localisée vers lui avant que la route ne matche (même mécanisme que les routes à un niveau).
- `src/components/ServicesGrid.tsx` (page `/services`) fait le lien entre les deux couches : `servicesPage.items` (dictionnaire, résumé court) est dans le même ordre que le barrel `services` (contenu approfondi) — l'index du tableau sert à retrouver l'`id`/slug correspondant, pas de champ `id` dupliqué dans le dictionnaire.

## Composant `CustomSelect`

`src/components/CustomSelect.tsx` — remplace tous les `<select>` natifs du site (sélecteur de langue, pack du formulaire de contact, statut admin, dropdown Studio du header) par un listbox stylé aux couleurs du site (onyx/bronze), animé (`motion`). Rend un `<input type="hidden">` synchronisé avec la sélection quand `name` est fourni, donc compatible avec les `<form action={...}>` (server actions) sans rien changer côté serveur. Props de personnalisation : `panelPosition` (`"top"`/`"bottom"`, pour un trigger proche du bas de son conteneur), `variant` (`"bordered"`/`"bare"`, pour s'intégrer dans un conteneur groupé qui fournit déjà sa propre bordure), `closeSignal` (force la fermeture depuis l'extérieur), `toolParamDescription` (hint WebMCP, voir plus haut).

## Design system

- `uno.config.ts` — palette (onyx/paper/stone/bronze/bronze-soft/ink), polices (Space Grotesk Variable / Inter Variable, auto-hébergées et sous-titrées dans `public/fonts/` — voir la section polices plus bas), shortcuts `btn-primary`/`btn-secondary` + l'échelle typographique nommée (voir `DESIGN_SYSTEM.md`).
- `src/components/MotionProvider.tsx` — enveloppe l'app dans `MotionConfig reducedMotion="user"` : toute animation `motion/react` respecte automatiquement `prefers-reduced-motion` côté OS.
- `src/components/Reveal.tsx` — wrapper `whileInView` générique pour les animations d'apparition au scroll.
- `src/components/ThemeToggle.tsx` — bascule thème clair/sombre, classe `.light`/`.dark` sur `<html>`, tokens CSS custom properties re-thémés automatiquement.

## Polices — sous-titrage Unicode

`scripts/font-source/` contient les fichiers variables originaux **complets** (InterVariable.woff2, SpaceGroteskVariable.woff2, plusieurs centaines de Ko chacun). `scripts/subset-fonts.mjs` (via le package `subset-font`) ne garde que les plages Unicode réellement nécessaires aux 9 locales du site (latin de base + Latin-1 + Latin Extended-A, **plus le bloc cyrillique** pour le russe — manquant initialement, trouvé en testant concrètement le rendu d'un texte russe avec les anciens fichiers) et écrit le résultat dans `public/fonts/`, servi en prod. Toujours relancer ce script après avoir ajouté une locale qui utilise un alphabet non couvert, et vérifier concrètement le rendu plutôt que de supposer que la plage Unicode ajoutée suffit.

## Image Open Graph

`scripts/gen-og-image.mjs` — génère `public/og-image.png` **hors du build OpenNext**, en local, via `next/og`'s `ImageResponse` tournant en script Node standalone (voir `AGENTS.md` règle #3 pour pourquoi ça ne peut pas tourner dans le Worker déployé). Une seule image statique, en anglais, sert de fallback pour toutes les locales — pas de génération dynamique par langue (le runtime Workers ne le permet pas, voir la même règle #3).

## SEO / GEO

- `src/app/sitemap.ts` / `src/app/robots.ts` — génération dynamique. **`robots.ts` ne raconte pas toute l'histoire** : Cloudflare enrichit la réponse à l'edge avec les Content Signals et des règles `Disallow` pour les bots d'entraînement IA nommés — voir `AGENTS.md` règle #8 et `PLAN.md` §4.
- JSON-LD : `ProfessionalService` sur l'accueil, `Service` + `BreadcrumbList` + `FAQPage` sur chacune des 7 pages de service dédiées, `FAQPage` sur `/tarifs` et `/faq`.
- Open Graph / Twitter Card définis dans `[locale]/layout.tsx::generateMetadata`, image statique `public/og-image.png`.
- security.txt géré entièrement côté Cloudflare (voir `AGENTS.md` règle #8) — aucun fichier correspondant dans ce repo.
- `scripts/submit-indexnow.mjs` — soumission IndexNow (Bing/Yandex/Seznam/Naver), à relancer manuellement après un changement de contenu notable.
