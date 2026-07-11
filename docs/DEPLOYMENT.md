# Déploiement

## Commandes

```bash
bun run typecheck          # tsc --noEmit
bun run build               # next build --webpack (PAS turbopack, voir AGENTS.md règle #1)
bun run deploy:cloudflare   # opennextjs-cloudflare build && opennextjs-cloudflare deploy
bun run preview:cloudflare  # idem mais preview local (peut rester bloqué sur les bindings AI, voir AGENTS.md règle #5)
```

`bun run deploy:cloudflare` build et déploie en une commande — pas besoin de lancer `build` avant séparément.

## Deux chemins de déploiement, tous les deux actifs

1. **Manuel** : `bun run deploy:cloudflare` depuis une machine locale. Sert à vérifier immédiatement en prod après un changement, sans attendre un CI.
2. **Automatique** : Cloudflare Workers Builds, connecté au repo GitHub `Thomas-TP/calyroc`. Se déclenche sur chaque push sur `main`. Configuré dans le dashboard Cloudflare (Compute → Worker **calyroc** → Settings → Build) :
   - Build command : `bunx opennextjs-cloudflare build`
   - Deploy command : `bunx wrangler deploy`
   - (`bunx`, pas `npx` — cohérence avec `bun.lock`)

**Toujours pousser sur GitHub après un déploiement manuel.** Les deux mécanismes ne se substituent pas l'un à l'autre : le déploiement manuel valide immédiatement, le push garde le repo et l'auto-deploy synchronisés avec ce qui est réellement en ligne. Ne jamais laisser un changement déployé manuellement sans commit+push correspondant.

## Domaine

- `calyroc.com` et `www.calyroc.com` pointent sur ce Worker via `wrangler.jsonc` → `routes` (`custom_domain: true`).
- `workers_dev: true` garde l'URL de secours `https://calyroc.thomastp.workers.dev` active en parallèle.

## Secrets de production

Configurés directement sur le Worker Cloudflare (`wrangler secret put <NOM>`), jamais en clair dans un fichier versionné :

| Secret | Usage |
|---|---|
| `RESEND_API_KEY` | envoi des emails de notification (formulaire de contact) |
| `ADMIN_PASSWORD` | authentification `/admin` |
| `ADMIN_SESSION_SECRET` | signature HMAC du cookie de session admin |
| `STRIPE_SECRET_KEY` | génération des liens de paiement Stripe (admin) |

Rotation : `wrangler secret put <NOM>` puis coller la nouvelle valeur (le prompt interactif ne l'affiche pas en clair dans l'historique du terminal). Après rotation de `ADMIN_SESSION_SECRET`, toutes les sessions admin actives sont invalidées (comportement voulu).

`.env.example` documente les mêmes noms pour le développement local (`.dev.vars`, jamais commité — voir `.gitignore`).

## Bindings Cloudflare (`wrangler.jsonc`)

| Binding | Type | Nom |
|---|---|---|
| `env.DB` | D1 | `calyroc-leads` |
| `env.AI` | Workers AI | — |
| `env.ASSETS` | Assets | — |

Schéma D1 dans `migrations/0001_init.sql` (table `leads`).

## Email du domaine

- **Réception** : Cloudflare Email Routing (gratuit), sur l'apex `calyroc.com`. `hello@`, `contact@`, `info@`, `admin@calyroc.com` redirigés vers l'adresse perso de Thomas.
- **Envoi** (formulaire de contact) : Resend, sur le sous-domaine `send.calyroc.com` (Custom Return-Path). Le service natif "Email Sending" de Cloudflare est payant — écarté volontairement au profit de Resend (gratuit).
- DNS vérifié le 11.07 : 3× MX + SPF + DKIM pour Email Routing (apex) + MX + SPF + DKIM pour Resend (`send.` subdomain). Pas de conflit entre les deux, rien à changer sauf modification volontaire.

## Anti-spam (Turnstile)

Widget managé `calyroc (Spin)` + Worker de vérification séparé `turnstile-siteverify-calyroc` (déployé indépendamment de ce repo, CORS verrouillé sur calyroc.com). Sitekey et endpoint dans `src/lib/turnstile.ts`.

## Checklist avant de considérer un déploiement "fini"

1. `bun run typecheck` sans erreur.
2. `bun run build` sans erreur **ni nouveau warning** (un warning de dépréciation qui apparaît soudainement mérite d'être investigué avant d'être ignoré — mais voir AGENTS.md règle #7 pour l'exception connue `middleware.ts`/`proxy.ts`).
3. Déployer et vérifier en prod sur calyroc.com — pas seulement en local (Windows + OpenNext peut se comporter différemment, voir AGENTS.md règles #1 et #3).
4. Commit + push sur GitHub.
