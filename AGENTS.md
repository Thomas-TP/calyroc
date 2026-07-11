# Calyroc — Guide pour agents IA

Instructions de référence pour tout agent IA (Claude Code ou autre) qui travaille sur ce repo. Lis ce fichier avant de modifier quoi que ce soit. Les autres `.md` du projet (`docs/*.md`, `PLAN.md`) sont listés en bas — ce fichier est le point d'entrée.

## Le projet en une phrase

Site vitrine multilingue (Next.js 16 sur Cloudflare Workers) pour Calyroc, studio web solo de Thomas Prud'homme (calyroc.com). Contenu et décisions produit : voir [`PLAN.md`](PLAN.md). Ce fichier ne couvre que le **comment travailler sur le code**.

## Stack (ne pas dévier sans demander)

Bun · Next.js 16 App Router + OpenNext (`@opennextjs/cloudflare`) · React 19 · TypeScript strict · UnoCSS (preset Wind4, style Tailwind) · Cloudflare Workers (D1, Workers AI, Assets) · Resend · Stripe · Zod · `motion` (Framer Motion) · Biome.

## Règles non négociables — lues dans le sang

Ces contraintes viennent d'incidents réels rencontrés pendant le développement. Les ignorer casse le site en prod.

1. **`bun run build` = `next build --webpack`, jamais Turbopack.** Turbopack (défaut Next 16) casse le chargement des chunks serveur une fois passé par OpenNext sur Windows (`ChunkLoadError` sur chaque page en prod). Le build local passe très bien avec Turbopack — seul le comportement en prod casse. Ne jamais retirer `--webpack` du script `build` sans re-tester un vrai déploiement.
2. **PostCSS : `@unocss/postcss` doit passer par `scripts/unocss-postcss-wrapper.cjs`.** Le loader PostCSS custom de Next.js ne comprend pas l'export CJS `{default: fn}` de `@unocss/postcss` sous webpack. Ne pas référencer `@unocss/postcss` directement dans `postcss.config.cjs`.
3. **Pas d'image OG dynamique (`next/og` `ImageResponse`) dans le code de l'app.** Le runtime OpenNext/Workers sur Windows casse la résolution des chemins WASM (resvg/yoga) de `next/og`. Si l'OG image doit changer, régénère-la avec `scripts/gen-og-image.mjs` (`bun run scripts/gen-og-image.mjs`, écrit `public/og-image.png`) — ce script tourne en Node standalone, hors du build OpenNext, donc le bug WASM ne s'applique pas.
4. **Chemins Windows avec `[locale]` : utiliser `-LiteralPath` en PowerShell.** PowerShell interprète `[locale]` comme une classe de caractères et échoue silencieusement sinon.
5. **`wrangler dev` / `preview` peut rester bloqué** sur "Establishing remote connection" pour les bindings AI dans certains environnements. Si ça bloque, tester directement en prod après un déploiement plutôt que d'insister en local.
6. **Ne jamais committer de secret en clair**, même dans un fichier qu'on croit "juste de la doc" (`PLAN.md` a déjà eu ce problème, voir l'historique git). Les vraies valeurs de secrets ne vivent que dans les secrets Cloudflare Worker (`wrangler secret put ...`) — jamais dans un fichier versionné.
7. **Ne pas migrer `src/middleware.ts` vers `src/proxy.ts`**, même si `next build` affiche un warning de dépréciation le suggérant. Next.js 16 force `proxy.ts` à tourner en runtime **Node.js** (non configurable), mais l'adaptateur OpenNext Cloudflare actuel ne supporte que le middleware **Edge** — la migration fait échouer `opennextjs-cloudflare build` avec `ERROR Node.js middleware is not currently supported`. Testé et confirmé cassé le 11.07 (build OpenNext en échec, déploiement automatiquement annulé avant d'atteindre le Worker live — donc pas d'impact prod, mais ne pas retenter tant qu'OpenNext n'a pas ajouté le support Node.js middleware). Le warning de dépréciation au build est à ignorer pour l'instant.

## Structure du projet

```
src/
  app/
    [locale]/              Toutes les pages publiques (routing localisé)
      layout.tsx            Layout par locale : html/body, header/footer/chatbot, metadata (OG/Twitter)
      page.tsx               Accueil
      services/ realisations/ tarifs/ contact/  Pages publiques
      mentions-legales/ confidentialite/ cgv/    Pages légales (FR uniquement, voir docs/CONTENT_GUIDE.md)
      [...rest]/page.tsx     Catch-all : appelle notFound() pour toute route non gérée
      not-found.tsx          404 dans un contexte de locale valide (client component, lit la locale via usePathname)
    not-found.tsx            404 racine pour une locale invalide (ex: /xx/...) — layout.tsx lève notFound() avant
                              même d'atteindre [locale]/not-found.tsx, donc ce fichier doit avoir son propre <html><body>
    admin/                  Zone privée (auth par mot de passe), non localisée
    api/chat/route.ts       Endpoint du chatbot (Workers AI)
    actions.ts               Server action du formulaire de contact
    robots.ts sitemap.ts     SEO technique
  components/               Composants partagés (voir docs/ARCHITECTURE.md pour le détail)
  i18n/
    locales.ts               Liste des 6 locales + helpers
    dictionary.ts             Interface TypeScript du dictionnaire (SOURCE DE VÉRITÉ des champs traduisibles)
    dictionaries/{fr,en,es,it,de,pt}.ts   Contenu traduit, un fichier par langue
    chatContext.ts            Construit le system prompt du chatbot À PARTIR du dictionnaire (voir plus bas)
    seo.ts                    SITE_URL, hreflang/canonical
  lib/                       Intégrations (Stripe, Turnstile, adminAuth, leads/D1)
  middleware.ts               Redirection `/` → `/{locale}/` selon Accept-Language (voir règle #7 : reste volontairement sur `middleware.ts`, pas `proxy.ts`)
scripts/
  unocss-postcss-wrapper.cjs  Voir règle #2 plus haut
  gen-og-image.mjs            Voir règle #3 plus haut
migrations/0001_init.sql      Schéma D1 (table `leads`)
```

## Ajouter une page publique — checklist complète

Si tu ajoutes une page (`src/app/[locale]/ma-page/page.tsx`), mets à jour **tout ça**, pas juste le fichier de page :

1. **`src/i18n/dictionary.ts`** — ajoute l'interface TypeScript des nouveaux champs traduisibles.
2. **Les 6 fichiers `src/i18n/dictionaries/*.ts`** — remplis le contenu correspondant dans chaque langue. Si tu n'as pas de traducteur natif sous la main, traduis toi-même mais dis-le clairement (voir la convention `NOTE: traduction assistée par IA` déjà utilisée dans `es.ts`/`it.ts`/`de.ts`/`pt.ts`).
3. **`src/components/SiteHeader.tsx`** — ajoute un lien dans `navLinks` si la page doit apparaître dans la nav (desktop + menu mobile, c'est le même tableau pour les deux).
4. **`src/app/sitemap.ts`** — ajoute le slug dans le tableau `routes`.
5. **`generateMetadata`** dans la nouvelle page — title/description via le dictionnaire, `alternates: buildAlternates(locale, "mon-slug")` (voir `src/i18n/seo.ts`).
6. **Chatbot** — vérifie si la page doit être connue du chatbot. `buildSystemPrompt` (`src/i18n/chatContext.ts`) résume automatiquement `servicesPage.items` et `pricingPage.packs` à partir du dictionnaire : si ta page ajoute un nouveau service/pack à ces sections, le chatbot le saura **automatiquement**, rien à faire. Si c'est un tout autre type de contenu (une nouvelle section indépendante), il faut l'ajouter explicitement dans `buildSystemPrompt`.
7. **PLAN.md** — coche/ajoute la ligne correspondante dans la roadmap (§7) si c'est un morceau de fonctionnalité notable.

## Déploiement

Voir [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) pour la procédure complète, les secrets et le DNS. En résumé :
- `bun run deploy:cloudflare` déploie manuellement (build + `wrangler deploy`).
- Un push sur `main` déclenche aussi un déploiement automatique via Cloudflare Workers Builds (déjà connecté, configuré en `bunx`).
- **Toujours committer et pousser sur GitHub après un déploiement manuel** — les deux mécanismes ne se remplacent pas : le déploiement manuel sert à vérifier immédiatement en prod, le push garde le repo et l'auto-deploy synchronisés.

## Vérification avant de considérer un changement "fini"

1. `bun run typecheck` — doit passer sans erreur.
2. `bun run build` — doit compiler sans erreur. Le warning de dépréciation `middleware`→`proxy` est une exception connue (règle #7, ne pas "corriger") ; tout autre nouveau warning mérite d'être investigué avant d'être ignoré.
3. Déployer (`bun run deploy:cloudflare`) et vérifier **en prod** sur calyroc.com — le comportement local peut différer du comportement Workers/Windows (voir règles 1 et 3 plus haut).
4. `git add` (fichiers explicites, pas `-A` sans relire `git status`) + commit + **push**.

## Portée des actions — ne pas dévier du périmètre demandé

Une tâche demandée ("mets à jour la doc", "pousse sur GitHub") n'autorise pas une refonte technique non demandée, même si elle est objectivement justifiée (ex. corriger un warning de dépréciation). Si tu repères un problème hors périmètre en cours de route : signale-le et demande avant d'agir, ne l'embarque pas silencieusement dans la tâche en cours.

## Autres documents

- [`PLAN.md`](PLAN.md) — positionnement produit, identité de marque, roadmap, décisions business. Mets-le à jour à chaque changement de contenu/scope notable.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — comment les briques techniques s'articulent (i18n, D1, chatbot, paiement, auth admin, anti-spam).
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — palette, échelle typographique nommée, composants. À consulter avant d'écrire une classe `text-*` à la main.
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — déploiement, secrets, DNS, domaine custom.
- [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) — comment le contenu (dictionnaire, légal, chatbot) est organisé et comment le modifier sans casser une locale.
- [`CLAUDE.md`](CLAUDE.md) — pointeur vers ce fichier, pour les outils qui cherchent spécifiquement `CLAUDE.md`.
