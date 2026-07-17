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

**Toujours pousser sur GitHub après un déploiement manuel — et ne pas attendre "la fin de la session" pour le faire.** Les deux mécanismes ne se substituent pas l'un à l'autre : le déploiement manuel valide immédiatement en prod, le push garde le **repo** (l'historique, ce que quiconque voit en clonant le projet) synchronisé avec ce qui tourne réellement. Ne jamais laisser un changement déployé manuellement sans commit+push correspondant — voir l'incident documenté dans `AGENTS.md` Règle n°0 (une session entière a accumulé 53 fichiers modifiés sans un seul commit). Dans l'autre sens, si Cloudflare est déjà à jour suite à un déploiement manuel, un push juste après ne fait que resynchroniser Cloudflare au même état — pas la peine de relancer `wrangler deploy` juste après un push.

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
| `STRIPE_WEBHOOK_SECRET` | vérification de signature du webhook `/api/stripe/webhook` |

Rotation : `wrangler secret put <NOM>` puis coller la nouvelle valeur (le prompt interactif ne l'affiche pas en clair dans l'historique du terminal). Après rotation de `ADMIN_SESSION_SECRET`, toutes les sessions admin actives sont invalidées (comportement voulu).

`.env.example` documente les mêmes noms pour le développement local (`.dev.vars`, jamais commité — voir `.gitignore`).

## Bindings Cloudflare (`wrangler.jsonc`)

| Binding | Type | Nom |
|---|---|---|
| `env.DB` | D1 | `calyroc-leads` |
| `env.PROJECT_FILES` | R2 | `calyroc-project-files` |
| `env.AI` | Workers AI | — |
| `env.ASSETS` | Assets | — |

Schéma D1 dans `migrations/0001_init.sql` (table `leads`), `migrations/0002_payments.sql` (colonnes `leads.pack_id`/`leads.updated_at` + table `payments`), `migrations/0003_project_tracking.sql` (colonnes `leads.status_token`/`leads.project_stage`), `migrations/0004_project_updates.sql` (table `project_updates`), et `migrations/0005_lead_files_and_preview.sql` (colonnes `leads.preview_url`/`leads.suivi_last_viewed_at`).

R2 (`calyroc-project-files`) stocke les images/logos partagés avec un client, sous la clé `leads/{status_token}/{fichier}` — servi publiquement mais sécurisé par le token via `src/app/api/files/[token]/[key]/route.ts`, pas par l'auth admin (ce n'est pas une route `/admin/*`). Après tout changement de `wrangler.jsonc` touchant les bindings, relancer `bun run cf-typegen` pour régénérer `src/cloudflare-env.d.ts` (gitignoré, généré automatiquement aussi par `postinstall`).

## Stripe — configuration complète

Le webhook (`src/app/api/stripe/webhook/route.ts`) confirme les paiements de façon fiable (pas seulement l'URL de redirection côté client, qui peut être fermée avant chargement). Étapes à faire une fois dans le dashboard Stripe (je n'ai pas accès au compte de Thomas, donc ces étapes sont manuelles) :

1. **Enregistrer le endpoint webhook** : Stripe a remplacé l'ancien dashboard Developers par **Workbench** — les webhooks y sont maintenant des « Event Destinations ». Aller sur `dashboard.stripe.com/webhooks` → **Create a new destination** → source `Events from your account` → événement `checkout.session.completed` → **Next** → type de destination `Webhook` → Endpoint URL `https://calyroc.com/api/stripe/webhook` → **Create destination**. Ouvrir ensuite le endpoint créé → **Click to reveal** à côté du secret de signature (`whsec_...`) et le mettre dans `STRIPE_WEBHOOK_SECRET` (`.dev.vars` en local, secret Worker en prod — Cloudflare Dashboard → Worker `calyroc` → Settings → Variables and secrets, ou `wrangler secret put STRIPE_WEBHOOK_SECRET`). Le format du secret et la vérification de signature (`stripe.webhooks.constructEventAsync`) restent inchangés malgré le changement d'interface.
2. **Activer TWINT** : Dashboard → Settings → Payment methods → activer TWINT. Stripe exige que le site affiche raison sociale, forme juridique, adresse complète et coordonnées dans les mentions légales avant d'accepter l'activation — vérifier `/mentions-legales` en cas de refus.
3. **Image de marque** : Dashboard → Settings → Branding — uploader l'icône Calyroc (carré, ≥128×128px, <512Ko) et régler la couleur d'accent sur le bronze du site (`#B8862E`). S'applique automatiquement à la page Checkout hébergée, aux reçus Stripe et au portail client.
4. **Reçus automatiques Stripe** : Dashboard → Settings → Customer emails → activer "Email customers about successful payments". Complémentaire à l'email de reçu Calyroc envoyé par le webhook : le reçu Stripe a un format facture standard utile pour la compta du client, l'email Calyroc reste le message de marque.
5. **Mode test avant production** : développer et tester avec les clés `sk_test_...` et `stripe listen --forward-to <url>/api/stripe/webhook` avant de basculer les clés `sk_live_...` en prod.

Aucun `payment_method_types` n'est fixé en dur dans le code : quand ce paramètre est omis, Stripe Checkout propose automatiquement tout moyen de paiement activé dans le dashboard (carte, TWINT, etc.) — un nouveau moyen de paiement activé plus tard n'a donc besoin d'aucun redéploiement.

**TVA suisse** : non gérée par ce flux (facturation avec/sans TVA selon le statut d'immatriculation réel de Thomas — seuil de CHF 100'000 de chiffre d'affaires pour l'assujettissement obligatoire). Stripe Tax peut être activé plus tard sans changement structurel si besoin.

## Email du domaine

- **Réception** : Cloudflare Email Routing (gratuit), sur l'apex `calyroc.com`. `hello@`, `contact@`, `info@`, `admin@calyroc.com` redirigés vers l'adresse perso de Thomas.
- **Envoi** (formulaire de contact) : Resend, sur le sous-domaine `send.calyroc.com` (Custom Return-Path). Le service natif "Email Sending" de Cloudflare est payant — écarté volontairement au profit de Resend (gratuit).
- DNS vérifié le 11.07 : 3× MX + SPF + DKIM pour Email Routing (apex) + MX + SPF + DKIM pour Resend (`send.` subdomain). Pas de conflit entre les deux, rien à changer sauf modification volontaire.

## Anti-spam (Turnstile)

Widget managé `calyroc (Spin)` + Worker de vérification séparé `turnstile-siteverify-calyroc` (déployé indépendamment de ce repo, CORS verrouillé sur calyroc.com). Sitekey et endpoint dans `src/lib/turnstile.ts`.

## Configuration gérée entièrement côté dashboard Cloudflare (rien dans ce repo)

Ces éléments n'ont **aucune trace dans le code** — ne pas les chercher dans `src/` ou `public/`, et ne pas essayer de les recréer en code si tu ne les trouves pas :

| Fonctionnalité | Où | Détail |
|---|---|---|
| Content Signals + robots.txt anti-bots IA | Zone calyroc.com → AI Crawl Control → Signals → "Managed robots.txt" | Voir `AGENTS.md` règle #8 |
| security.txt (RFC 9116) | Zone calyroc.com → Security → Settings → filtre "Web application exploits" → carte "Security.txt" | Contact, Expires, Canonical, Preferred-Languages configurés |
| Cloudflare Web Analytics (RUM) | Zone calyroc.com → Analytics → Web analytics | Gratuit, déjà actif, aucune ligne de code |
| Smart Shield (tiered cache) | Zone calyroc.com → Speed → Smart Shield | Activé, gratuit |

Écarté volontairement (pas une case à cocher oubliée) : Argo Smart Routing (payant, sans bénéfice pour une app 100% Workers sans origine classique), Advanced Certificate Manager (le certificat Universal SSL gratuit couvre déjà `calyroc.com` + `*.calyroc.com`), Markdown for Agents (nécessite le plan Pro payant).

**Analytics applicatif** : Umami Cloud, activé via `NEXT_PUBLIC_UMAMI_WEBSITE_ID` (`.env.example`) — celui-là est bien dans le code (script chargé conditionnellement dans `[locale]/layout.tsx`), contrairement aux éléments du tableau ci-dessus.

## Checklist avant de considérer un déploiement "fini"

1. `bun run typecheck` sans erreur.
2. `bun run build` sans erreur **ni nouveau warning** (un warning de dépréciation qui apparaît soudainement mérite d'être investigué avant d'être ignoré — mais voir AGENTS.md règle #7 pour l'exception connue `middleware.ts`/`proxy.ts`).
3. Déployer et vérifier en prod sur calyroc.com — pas seulement en local (Windows + OpenNext peut se comporter différemment, voir AGENTS.md règles #1 et #3).
4. Commit + push sur GitHub.
