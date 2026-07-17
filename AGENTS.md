# Calyroc — Guide pour agents IA

Instructions de référence pour tout agent IA (Claude Code ou autre) qui travaille sur ce repo. Lis ce fichier avant de modifier quoi que ce soit. Les autres `.md` du projet (`docs/*.md`, `PLAN.md`) sont listés en bas — ce fichier est le point d'entrée.

## Le projet en une phrase

Site vitrine multilingue (Next.js 16 sur Cloudflare Workers, 9 langues) pour Calyroc, studio web solo de Thomas Prud'homme (calyroc.com). Contenu et décisions produit : voir [`PLAN.md`](PLAN.md). Ce fichier ne couvre que le **comment travailler sur le code**.

## Stack (ne pas dévier sans demander)

Bun · Next.js 16 App Router + OpenNext (`@opennextjs/cloudflare`) · React 19 · TypeScript strict · UnoCSS (preset Wind4, style Tailwind) · Cloudflare Workers (D1, Workers AI, Assets) · Resend · Stripe · Zod · `motion` (Framer Motion — **pas** GSAP/Lenis, malgré ce qu'un historique de tâches périmé pourrait laisser croire) · Biome.

## Règle n°0 — committer et pousser sur GitHub n'est pas optionnel

**Incident réel (17.07.2026)** : une session entière a accumulé des semaines de travail (i18n de 6 à 9 langues, refonte des pages légales, blog, FAQ, suivi de projet, refonte du header/hero/chatbot, image OG, sous-titrage des polices, durcissement des headers de sécurité, formulaire de contact adapté aux agents IA...) **sans un seul commit**, jusqu'à ce que l'utilisateur le demande explicitement à la toute fin. Résultat : 53 fichiers modifiés + des dizaines de nouveaux fichiers à trier après coup, un historique git qui ne reflète pas du tout la réalité du travail effectué pendant tout ce temps, et un vrai risque de perte si quelque chose avait mal tourné entre-temps.

**La règle** : dès qu'un changement de code est fonctionnel et vérifié (typecheck + build OK, testé en prod si pertinent), **commit-le**. Ne pas attendre "la fin de la session" — une session avec un agent IA n'a pas de fin prévisible, et repousser le commit à "plus tard" revient à ne jamais le faire. Un commit atomique par sous-tâche logique vaut mieux qu'un gros commit à la fin, et infiniment mieux que rien du tout.

**Push sur GitHub** — voir `docs/DEPLOYMENT.md` pour le détail des deux mécanismes de déploiement, mais en résumé :
- Un push sur `main` déclenche un déploiement automatique (Cloudflare Workers Builds, déjà connecté).
- `bunx wrangler deploy` (ou `bun run deploy:cloudflare`) déploie manuellement, immédiatement, sans attendre un push — utile pour vérifier un changement en prod avant de committer.
- Les deux ne se substituent PAS l'un à l'autre : déployer manuellement ne dispense jamais de committer et pousser ensuite. Le push est ce qui garde le **repo** (l'historique, ce que n'importe qui — humain ou IA — verra en clonant ce projet) synchronisé avec ce qui tourne réellement en prod. Inversement, si Cloudflare est déjà à jour suite à un déploiement manuel, un push juste après ne fait que resynchroniser Cloudflare au même état — ce n'est pas un second déploiement réel, donc pas la peine de relancer `wrangler deploy` juste après un push.

## Règles non négociables — lues dans le sang

Ces contraintes viennent d'incidents réels rencontrés pendant le développement. Les ignorer casse le site en prod.

1. **`bun run build` = `next build --webpack`, jamais Turbopack.** Turbopack (défaut Next 16) casse le chargement des chunks serveur une fois passé par OpenNext sur Windows (`ChunkLoadError` sur chaque page en prod). Le build local passe très bien avec Turbopack — seul le comportement en prod casse. Ne jamais retirer `--webpack` du script `build` sans re-tester un vrai déploiement.
2. **PostCSS : `@unocss/postcss` doit passer par `scripts/unocss-postcss-wrapper.cjs`.** Le loader PostCSS custom de Next.js ne comprend pas l'export CJS `{default: fn}` de `@unocss/postcss` sous webpack. Ne pas référencer `@unocss/postcss` directement dans `postcss.config.cjs`.
3. **Pas d'image OG dynamique (`next/og` `ImageResponse`) dans le code de l'app.** Le runtime OpenNext/Workers casse la résolution des chemins WASM (resvg/yoga) de `next/og` — testé et confirmé plusieurs fois, y compris en essayant `@cf-wasm/resvg` en remplacement (même résultat : bloqué indéfiniment). Si l'OG image doit changer, régénère-la avec `scripts/gen-og-image.mjs` (`bun run scripts/gen-og-image.mjs` **depuis la racine du projet** — `bun run` depuis un autre dossier casse la résolution des modules `next/dist/compiled/...`, et `node` à la place de `bun` casse la résolution ESM de `next/og`), qui écrit `public/og-image.png`. Ce script tourne en Node standalone au build-time, hors du build OpenNext, donc le bug WASM ne s'applique pas. Une seule image statique sert de fallback pour toutes les locales sans version dédiée en anglais/français.
4. **Chemins Windows avec `[locale]` : utiliser `-LiteralPath` en PowerShell.** PowerShell interprète `[locale]` comme une classe de caractères et échoue silencieusement sinon.
5. **`wrangler dev` / `preview` peut rester bloqué** sur "Establishing remote connection" pour les bindings AI dans certains environnements. Si ça bloque, tester directement en prod après un déploiement plutôt que d'insister en local.
6. **Ne jamais committer de secret en clair**, même dans un fichier qu'on croit "juste de la doc" (`PLAN.md` a déjà eu ce problème, voir l'historique git). Les vraies valeurs de secrets ne vivent que dans les secrets Cloudflare Worker (`wrangler secret put ...`) — jamais dans un fichier versionné.
7. **Ne pas migrer `src/middleware.ts` vers `src/proxy.ts`**, même si `next build` affiche un warning de dépréciation le suggérant. Next.js 16 force `proxy.ts` à tourner en runtime **Node.js** (non configurable), mais l'adaptateur OpenNext Cloudflare actuel ne supporte que le middleware **Edge** — la migration fait échouer `opennextjs-cloudflare build` avec `ERROR Node.js middleware is not currently supported`. Le warning de dépréciation au build est à ignorer pour l'instant.
8. **robots.txt et security.txt sont gérés par Cloudflare, pas par le code.** Ne pas s'étonner que `src/app/robots.ts` (la seule source du fichier dans ce repo) ne contienne ni Content-Signal ni règles anti-bots IA nommées : Cloudflare (AI Crawl Control → Signals → "Managed robots.txt") injecte un bloc à l'edge par-dessus la réponse d'origine (`Content-Signal: search=yes,ai-train=no,use=reference` + `Disallow` explicite pour GPTBot/Google-Extended/Bytespider/CCBot/ClaudeBot/Amazonbot/Applebot-Extended/meta-externalagent/CloudflareBrowserRenderingCrawler). Même chose pour `/.well-known/security.txt` (Security → Settings → filtre "Web application exploits" → carte Security.txt) : configuré et servi entièrement côté Cloudflare, aucun fichier correspondant dans `public/`. **Ne pas dupliquer ces mécanismes en code** (testé : un `Content-Signal` posé côté origine est silencieusement écrasé par le bloc managé Cloudflare) — si une modification est nécessaire, elle se fait dans le dashboard Cloudflare, pas dans ce repo.

## Structure du projet

```
src/
  app/
    [locale]/              Toutes les pages publiques (routing localisé)
      layout.tsx            Layout par locale : html/body, header/footer/chatbot, metadata (OG/Twitter)
      page.tsx               Accueil
      services/ realisations/ tarifs/ contact/  Pages publiques (slug traduit par locale, voir i18n/routes.ts)
      blog/ blog/[slug]/     Liste + articles (contenu dans src/content/blog/, rédigé une fois, servi sous chaque préfixe de locale)
      faq/                   Page FAQ dédiée, contenu 100% dictionnaire
      suivi/[token]/         Page publique de suivi de projet (lecture seule, pas d'auth -- le token fait office de secret)
      mentions-legales/ confidentialite/ cgv/    Pages légales, traduites dans les 9 langues (voir docs/CONTENT_GUIDE.md)
      [...rest]/page.tsx     Catch-all : appelle notFound() pour toute route non gérée
      not-found.tsx          404 dans un contexte de locale valide (client component, lit la locale via usePathname)
    not-found.tsx            404 racine pour une locale invalide (ex: /xx/...) — layout.tsx lève notFound() avant
                              même d'atteindre [locale]/not-found.tsx, donc ce fichier doit avoir son propre <html><body>
    admin/                  Zone privée (auth par mot de passe), non localisée
      page.tsx               Dashboard : stats, recherche/filtre, pipeline par statut (cartes qui renvoient vers leads/[id])
      leads/[id]/page.tsx     Page de détail d'un lead : statut/notes, paiement, suivi client, fichiers R2, mises à jour
    api/chat/route.ts       Endpoint du chatbot (Workers AI)
    api/stripe/webhook/     Confirmation des paiements Stripe côté serveur
    api/files/[token]/[key]/route.ts   Sert les images R2 d'un lead -- non authentifié mais scopé par le token
                              (même principe que suivi/[token], voir docs/DEPLOYMENT.md)
    actions.ts               Server action du formulaire de contact
    robots.ts sitemap.ts     SEO technique (voir règle #8 -- robots.ts ne raconte pas toute l'histoire)
  components/               Composants partagés (voir docs/ARCHITECTURE.md pour le détail)
  content/blog/              Contenu éditorial du blog, un fichier par article + index.ts barrel + types.ts
  i18n/
    locales.ts               Liste des 9 locales + helpers
    routes.ts                 Slug d'URL traduit par locale pour les 6 routes qui en ont un (tarifs, réalisations, à-propos, mentions
                               légales, confidentialité, CGV) -- le français est toujours le slug "canonique"/dossier physique
    dictionary.ts             Interface TypeScript du dictionnaire (SOURCE DE VÉRITÉ des champs traduisibles)
    dictionaries/{fr,en,es,it,de,pt,nl,pl,ru}.ts   Contenu traduit, un fichier par langue
    legal/                    Contenu légal par locale (types.ts, mentions-legales.ts, confidentialite.ts, cgv.ts, index.ts),
                               voir docs/CONTENT_GUIDE.md
    chatContext.ts            Construit le system prompt du chatbot À PARTIR du dictionnaire (voir plus bas)
    seo.ts                    SITE_URL, buildAlternates (hreflang/canonical, accepte un slug fixe ou une map par locale), geneva
                               (nom de Genève par locale, utilisé en marketing -- voir la note Gland/Genève plus bas)
  lib/                       Intégrations (Stripe, Turnstile, adminAuth, leads/D1)
  types/webmcp.d.ts           Augmente les typings React pour les attributs WebMCP (toolname/tooldescription/toolparamdescription
                               -- essai d'origine Chrome, voir docs/ARCHITECTURE.md)
  middleware.ts               Redirige un chemin sans préfixe de locale vers son équivalent localisé (Accept-Language, ou le
                               préfixe qui possède déjà ce slug traduit) -- reste volontairement sur middleware.ts, pas proxy.ts (règle #7)
scripts/
  unocss-postcss-wrapper.cjs  Voir règle #2 plus haut
  gen-og-image.mjs            Voir règle #3 plus haut
  subset-fonts.mjs            Sous-titre les polices de scripts/font-source/ (originaux complets) vers public/fonts/ -- ne garde que
                               les plages Unicode nécessaires aux 9 locales, y compris le bloc cyrillique pour le russe
  submit-indexnow.mjs         Soumet chaque URL du sitemap live à l'API IndexNow (Bing/Yandex/Seznam/Naver) -- à relancer après un
                               changement de contenu notable
migrations/0001_init.sql      Schéma D1 (table leads)
migrations/0002_payments.sql  Colonnes leads.pack_id/updated_at + table payments
migrations/0003_project_tracking.sql  Colonnes leads.status_token/project_stage (suivi client public)
migrations/0004_project_updates.sql   Table project_updates (mises à jour visibles par le client)
migrations/0005_lead_files_and_preview.sql  Colonnes leads.preview_url/suivi_last_viewed_at
```

## Ajouter une page publique — checklist complète

Si tu ajoutes une page (`src/app/[locale]/ma-page/page.tsx`), mets à jour **tout ça**, pas juste le fichier de page :

1. **`src/i18n/dictionary.ts`** — ajoute l'interface TypeScript des nouveaux champs traduisibles.
2. **Les 9 fichiers `src/i18n/dictionaries/*.ts`** — remplis le contenu correspondant dans chaque langue. Si tu n'as pas de traducteur natif sous la main, traduis toi-même mais dis-le clairement (voir la convention `NOTE: traduction assistée par IA` déjà utilisée dans les fichiers non FR/EN).
3. **Slug traduit par locale, si pertinent** — si l'URL de la page doit être traduite (ex. `/en/pricing` plutôt que `/en/tarifs`), ajoute l'entrée dans `src/i18n/routes.ts::localizedSlugs`. `next.config.ts` (`rewrites`/`redirects`) et `src/middleware.ts` s'en servent automatiquement, rien d'autre à câbler. Si le slug reste le même dans toutes les langues (cas de `services`, `contact`, `faq`, `blog`), pas besoin de `routes.ts` — traite-le comme les routes statiques de `sitemap.ts`.
4. **`src/components/SiteHeader.tsx`** — ajoute un lien dans `navLinks` si la page doit apparaître dans la nav (desktop + menu mobile, c'est le même tableau pour les deux). Utilise `localizedSlugs` si le slug est traduit.
5. **`src/app/sitemap.ts`** — ajoute le slug dans `staticRoutes` (slug identique partout) ou laisse `localizedSlugs` s'en charger automatiquement (slug traduit).
6. **`generateMetadata`** dans la nouvelle page — title/description via le dictionnaire, `alternates: buildAlternates(locale, "mon-slug")` (chaîne fixe) ou `buildAlternates(locale, monSlugMap)` (map par locale, voir `src/i18n/seo.ts`).
7. **Chatbot** — vérifie si la page doit être connue du chatbot. `buildSystemPrompt` (`src/i18n/chatContext.ts`) résume automatiquement `servicesPage.items` et `pricingPage.packs` à partir du dictionnaire : si ta page ajoute un nouveau service/pack à ces sections, le chatbot le saura **automatiquement**, rien à faire. Si c'est un tout autre type de contenu (une nouvelle section indépendante), il faut l'ajouter explicitement dans `buildSystemPrompt`.
8. **PLAN.md** — coche/ajoute la ligne correspondante dans la roadmap (§7) si c'est un morceau de fonctionnalité notable.
9. **Commit + push** — voir Règle n°0 en haut de ce fichier. Ne pas laisser la page trainer non commitée "pour plus tard".

## Déploiement

Voir [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) pour la procédure complète, les secrets et le DNS. En résumé, voir la Règle n°0 ci-dessus.

## Vérification avant de considérer un changement "fini"

1. `bun run typecheck` — doit passer sans erreur.
2. `bun run build` — doit compiler sans erreur. Le warning de dépréciation `middleware`→`proxy` est une exception connue (règle #7, ne pas "corriger") ; tout autre nouveau warning mérite d'être investigué avant d'être ignoré.
3. Déployer (`bun run deploy:cloudflare`) et vérifier **en prod** sur calyroc.com — le comportement local peut différer du comportement Workers/Windows (voir règles 1 et 3 plus haut).
4. `git add` (fichiers explicites, pas `-A` sans relire `git status`) + commit + **push**. Voir Règle n°0.

## Portée des actions — ne pas dévier du périmètre demandé

Une tâche demandée ("mets à jour la doc", "pousse sur GitHub") n'autorise pas une refonte technique non demandée, même si elle est objectivement justifiée (ex. corriger un warning de dépréciation). Si tu repères un problème hors périmètre en cours de route : signale-le et demande avant d'agir, ne l'embarque pas silencieusement dans la tâche en cours.

## Autres documents

- [`PLAN.md`](PLAN.md) — positionnement produit, identité de marque, roadmap, décisions business. Mets-le à jour à chaque changement de contenu/scope notable.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — comment les briques techniques s'articulent (i18n, D1, chatbot, paiement, auth admin, anti-spam, GEO/agents IA).
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — palette, échelle typographique nommée, composants. À consulter avant d'écrire une classe `text-*` à la main.
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — déploiement, secrets, DNS, domaine custom.
- [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) — comment le contenu (dictionnaire, légal, chatbot, blog) est organisé et comment le modifier sans casser une locale.
- [`CLAUDE.md`](CLAUDE.md) — pointeur vers ce fichier, pour les outils qui cherchent spécifiquement `CLAUDE.md`.
