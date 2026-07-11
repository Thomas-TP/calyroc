# Calyroc — Plan de projet complet

> Document de référence pour la conception et le développement du site agence Calyroc. Domaine : calyroc.com.

---

## 1. Positionnement

**Calyroc** — studio web solo, basé en Suisse (Gland, VD), opéré par Thomas Prud'homme, apprenti CFC Informaticien Exploitation & Infrastructure. Positionnement généraliste milieu de gamme : sites vitrines et e-commerce modernes, livrés vite grâce à un workflow de développement augmenté par l'IA, sur une stack technique de pointe (Cloudflare Workers, React, TypeScript).

**Différenciateurs** :
- Contact direct avec le développeur, pas d'interlocuteur commercial ni de sous-traitance
- Stack ultra-performante (Rspack/Bun, edge Cloudflare) → sites rapides par construction
- Transparence sur le statut (étudiant en formation, workflow assisté par IA) — assumé comme gage d'agilité et de prix maîtrisés, pas caché
- Portfolio réel : un e-commerce en production avec paiements live (Swiss3Design), pas juste des maquettes

**Marché cible** : généraliste (indépendants, TPE/PME, startups), zone Europe élargie (langues FR/EN/ES/IT/DE/PT), avec ancrage Suisse fort pour la crédibilité locale (CHF, TWINT le cas échéant, droit suisse). Domaine `.com` cohérent avec l'ambition européenne du marché cible.

---

## 2. Identité de marque

- **Nom** : Calyroc
- **Domaine** : calyroc.com (déjà réservé sur Cloudflare)
- **Ton** : tutoiement, direct, sans jargon d'agence, honnête sur les délais et le scope
- **Style visuel** : sobre et premium — fond onyx quasi-noir, accent bronze unique, beaucoup d'espace négatif (remplace la direction "colorée et créative" initiale, jugée trop générique/pas assez premium après un premier essai)
- **Palette** :
  - Fond (dark, par défaut) : onyx `#0B0B0C`, panneaux `#131316`
  - Texte : blanc cassé `#F5F3EF`
  - Texte secondaire / bordures : stone `#8C887F`
  - Accent unique : bronze `#C9A567` (clin d'œil à "roc" — minéral, se démarque du violet/indigo générique des sites d'agences tech)
- **Typographie** : display géométrique pour les titres (Space Grotesk / General Sans), sans-serif lisible pour le corps (Inter). Polices auto-hébergées.
- **Logo** : géré par l'utilisateur en dehors de ce projet — le design réserve l'espace (header, footer, favicon, OG image)

---

## 3. Architecture du site (sitemap)

Multipage, routing localisé `/{locale}/...` pour 6 langues (`fr` par défaut, `en`, `es`, `it`, `de`, `pt`).

**Pages publiques**
1. **Accueil** (`/`)
2. **Services** (`/services`)
3. **Réalisations** (`/realisations`)
4. **Tarifs** (`/tarifs`)
5. **Contact** (`/contact`)
6. **Mentions légales** (`/mentions-legales`)
7. **Politique de confidentialité** (`/confidentialite`)
8. **CGV** (`/cgv`)

**Zone privée**
9. **`/admin`** — ✅ dashboard protégé (mot de passe), gestion des leads/devis (D1), export CSV

**Composant transverse**
- **Chatbot "Ask Calyroc"** — ✅ widget flottant, Workers AI (code fait, non testé en live — voir §4)

**SEO technique** — ✅ sitemap.xml + hreflang, robots.txt, JSON-LD (ProfessionalService + FAQPage), metadata par page (title/description/canonical). Pas d'image OG dynamique (voir §4, incompatibilité Windows/OpenNext).

---

## 4. Fonctionnalités & architecture technique

**Stack** : Bun · **Next.js 16 (App Router) + OpenNext** · UnoCSS · React 19 · TypeScript strict · Cloudflare Workers · Biome · Resend · Zod · Stripe · motion

*(Pivot depuis Rsbuild + SSR maison : décision explicite de repasser sur Next.js/OpenNext, le pattern déjà éprouvé sur l'ancien tom-web.ch. UnoCSS/Biome/Bun conservés.)*

**Repo** : public, [`Thomas-TP/calyroc`](https://github.com/Thomas-TP/calyroc)

**i18n** : routing `/{locale}/...` via App Router (`src/app/[locale]/`), dictionnaire par langue dans `src/i18n/dictionaries/`, détection de langue à la racine via `src/proxy.ts` (nouvelle convention Next 16, remplace `middleware.ts`).

**Contenu légal** : rédigé uniquement en français (version faisant foi), affiché tel quel sur toutes les locales avec une notice traduite expliquant que c'est la version de référence — évite de publier des traductions IA non relues sur des pages à risque de conformité.

**Autres briques** :
- Devise : CHF par défaut (CH), EUR zone euro, extensible GBP/USD (pas encore implémenté)
- Paiement : Stripe Checkout (acompte 30-50%) — pas encore implémenté, page Tarifs pointe vers le formulaire de contact pour l'instant
- Chatbot : **fait** — Workers AI (`@cf/meta/llama-3.1-8b-instruct-fast`), `src/app/api/chat/route.ts` + `src/components/AskCalyroc.tsx`, contexte injecté depuis le dictionnaire réel (services/tarifs/FAQ), garde-fous anti-promesse ferme. Build/typecheck OK, **non testé en conditions réelles** : le tunnel `wrangler preview`/`dev` pour les bindings distants reste bloqué dans le sandbox de dev (hangs indéfiniment sur "Establishing remote connection"), à tester par l'utilisateur via `bun run preview:cloudflare` sur sa propre machine
- Formulaire de contact : **fait** — stocke chaque lead dans D1 (table `leads`) puis tente l'envoi Resend en best-effort (le lead reste capturé même si l'email échoue), `src/app/actions.ts`
- Admin : **fait** — `/admin` protégé par mot de passe (cookie signé HMAC, `src/lib/adminAuth.ts`), liste des leads D1 avec statut/notes éditables, export CSV (`/admin/export`). Variables requises : `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` (voir `.env.example`)
- Anti-spam (Turnstile) : **bloqué** — nécessite un token API Cloudflare séparé avec le scope `Account.Turnstile:Edit` (le token wrangler actuel ne l'a pas) ; l'utilisateur doit en créer un depuis dash.cloudflare.com/profile/api-tokens avant de relancer le skill `turnstile-spin`

**Email du domaine (calyroc.com)** :
- **Réception** : Cloudflare Email Routing activé (gratuit). Adresses actives, toutes redirigées vers `t+calyroc@prudhomme.li` :
  - `hello@calyroc.com` — contact client (utilisée partout sur le site)
  - `contact@calyroc.com` / `info@calyroc.com` — alias de secours
  - `admin@calyroc.com` — comptes de service (Resend, GitHub, etc.), à utiliser pour créer le compte Resend
- **Envoi** (formulaire de contact) : reste sur Resend (le service natif "Email Sending" de Cloudflare est payant, écarté sur demande explicite) — reste à faire côté utilisateur : créer un compte resend.com avec `admin@calyroc.com`, ajouter le domaine calyroc.com, puis ajouter les enregistrements DNS (SPF/DKIM) fournis par Resend dans le dashboard Cloudflare (le token wrangler actuel n'a que `zone:read`, pas les droits pour écrire ces enregistrements automatiquement)
- Analytics : Cloudflare Web Analytics (cookieless) — pas encore implémenté

---

## 5. Grille tarifaire

| Pack | Prix indicatif | Contenu |
|---|---|---|
| **Essentiel** | dès **590 CHF** (~600 €) | Site vitrine 1 page, design sur-mesure, responsive, formulaire de contact, 2 langues (FR/EN) |
| **Pro** | dès **1'490 CHF** (~1'550 €) | Site multipage (5-6 pages), jusqu'à 3 langues, animations, SEO technique, blog en option |
| **Sur-mesure** | **devis dès 2'900 CHF** | E-commerce, web app, dashboard admin, paiement en ligne, intégrations complexes, 6 langues |
| **Maintenance** | **35 CHF/mois** | Hébergement, mises à jour, petites modifications |

Modalités : acompte 30-50% à la commande via Stripe, solde à la livraison, 2 révisions incluses par pack, délai indicatif 2 semaines (Essentiel) à 6 semaines (Sur-mesure).

---

## 6. Contenu page par page

**Accueil** : Hero → bande de confiance → services (cards) → réalisations en vedette → différenciateurs → à propos condensé → aperçu tarifs → FAQ courte → CTA final

**Services** : une fiche par prestation (vitrine / e-commerce / refonte / landing page / maintenance / SEO / identité visuelle) — pour qui, inclus, techno, délai, CTA devis

**Réalisations** : grille filtrable. Swiss3Design en vedette (problème → stack → fonctionnalités → résultats mesurés), thomastp.ch (perf, animations, i18n). Métriques uniquement si mesurées réellement.

**Tarifs** : grille des 3 packs, tableau comparatif, configurateur de devis interactif, FAQ tarifaire

**Contact** : formulaire (nom, email, budget, description) → Resend, email direct, lien chatbot, engagement réponse 48h

**Mentions légales / Confidentialité / CGV** : conformité RGPD + nLPD, adresse affichée "Gland, Vaud, Suisse" + email (pas d'adresse résidentielle complète)

---

## 7. Roadmap de livraison

1. ~~Fondations (scaffold, design system, i18n)~~ ✅
2. ~~Pages publiques (Accueil, Services, Tarifs, Contact, légal)~~ ✅
3. ~~Réalisations (case studies)~~ ✅
4. ~~SEO technique (sitemap, hreflang, JSON-LD)~~ ✅
5. ~~Chatbot Ask Calyroc (Workers AI)~~ ✅ testé en live, fonctionne
6. ~~Espace admin~~ ✅ (D1 + auth par mot de passe + export CSV), testé en live
7. ~~Turnstile anti-spam~~ ✅ widget créé + Worker de vérification déployé + câblé au formulaire, validé en live
8. ~~Premier déploiement~~ ✅ **https://calyroc.thomastp.workers.dev** (Worker, pas Pages)
9. Paiement Stripe (acompte checkout) — pas commencé
10. QA multilingue, perf, bascule du domaine calyroc.com vers ce Worker (actuellement il pointe encore vers l'ancien site Next.js)

### Bug critique trouvé et corrigé lors du premier déploiement

Le premier déploiement affichait une **Internal Server Error** sur absolument toutes les pages. Cause : Next.js 16 utilise **Turbopack** par défaut, et le bundler Turbopack casse le chargement des chunks serveur une fois passé par OpenNext sur cet environnement Windows (`ChunkLoadError` sur chaque page). L'ancien site (tom-web.ch) avait déjà buté sur ce problème et le contournait avec `next build --webpack` dans son `package.json` — j'ai appliqué le même correctif. Ça a fait apparaître un second problème (le chargeur PostCSS custom de Next.js n'arrivait pas à charger `@unocss/postcss` sous webpack), réglé avec un petit wrapper (`scripts/unocss-postcss-wrapper.cjs`). Le déploiement suivant a fonctionné.

**Retenir pour la suite** : `bun run build` utilise maintenant `next build --webpack` — ne pas repasser sur Turbopack sans re-tester un vrai déploiement (le build local passe très bien avec Turbopack, seul le comportement en prod casse).

### Déploiement — comment ça marche

- **Manuel** : `bun run deploy:cloudflare` (build + déploie sur le Worker `calyroc`)
- **Secrets de production déjà configurés** sur le Worker : `RESEND_API_KEY`, `ADMIN_PASSWORD` (`cuivre-vaudois-9282`), `ADMIN_SESSION_SECRET`
- **Auto-déploiement sur push GitHub** (Cloudflare Workers Builds) — à connecter dans le dashboard :
  1. Cloudflare dashboard → Compute (Workers & Pages) → Worker **calyroc** → onglet **Settings** → section **Build**
  2. **Connect to Git** → autoriser l'accès au repo si demandé → sélectionner `Thomas-TP/calyroc`
  3. Production branch : `main`
  4. Build command : `npx opennextjs-cloudflare build`
  5. Deploy command : `npx wrangler deploy`
  6. Sauvegarder — chaque push sur `main` déclenche un build + déploiement automatique (l'environnement de build de Cloudflare est Linux, donc le bug Turbopack/Windows ne s'y pose pas, mais on garde `--webpack` par sécurité/cohérence)

**Turnstile** : widget `calyroc (Spin)` créé (sitekey `0x4AAAAAADz0gll1MFJs2mni`), Worker de vérification déployé séparément (`turnstile-siteverify-calyroc`, secret configuré, CORS verrouillé sur calyroc.com), câblé dans `src/lib/turnstile.ts` + `src/components/ContactForm.tsx` + `src/app/actions.ts`.

---

## 8. Décisions tranchées

- Nom : Calyroc
- Domaine : calyroc.com
- Logo : géré par l'utilisateur
- Mentions légales — adresse : "Gland, Vaud, Suisse" + email
- Grille tarifaire : validée
