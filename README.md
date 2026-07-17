# Calyroc

Site vitrine multilingue (9 langues) de [Calyroc](https://calyroc.com), studio web solo de Thomas Prud'homme (Gland, VD, Suisse). Next.js 16 sur Cloudflare Workers.

## Démarrer

```bash
bun install
bun run dev
```

Copie `.env.example` vers `.dev.vars` et remplis les valeurs pour le développement local (Turnstile, Resend, admin, Stripe).

## Documentation

- [`AGENTS.md`](AGENTS.md) — **à lire avant toute modification, humain ou agent IA.** Règles critiques (build, PostCSS, OG image, secrets, **toujours committer et pousser sur GitHub** — voir Règle n°0), structure du projet, checklist pour ajouter une page.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — comment les briques techniques s'articulent (i18n, D1, chatbot, admin, paiement).
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — déploiement, secrets, DNS, domaine.
- [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) — comment le contenu (dictionnaire i18n, chatbot, contenu légal) est organisé.
- [`PLAN.md`](PLAN.md) — positionnement produit, identité de marque, roadmap, décisions business.

## Commandes principales

```bash
bun run dev                 # serveur de dev
bun run typecheck           # tsc --noEmit
bun run build                # next build --webpack (voir AGENTS.md — pas turbopack)
bun run deploy:cloudflare    # build + déploie sur le Worker Cloudflare
bun run check                # biome check .
```

## Stack

Bun · Next.js 16 (App Router) + OpenNext · React 19 · TypeScript · UnoCSS · Cloudflare Workers (D1, Workers AI) · Resend · Stripe · Biome.
