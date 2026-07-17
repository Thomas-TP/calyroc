# Calyroc — Plan de projet complet

> Document de référence pour la conception et le développement du site agence Calyroc. Domaine : calyroc.com.

---

## 1. Positionnement

**Calyroc** — studio web solo, opéré par Thomas Prud'homme, apprenti CFC Informaticien Exploitation & Infrastructure. Positionnement généraliste milieu de gamme : sites vitrines et e-commerce modernes, livrés vite grâce à un workflow de développement augmenté par l'IA, sur une stack technique de pointe (Cloudflare Workers, React, TypeScript).

**Différenciateurs** :
- Contact direct avec le développeur, pas d'interlocuteur commercial ni de sous-traitance
- Stack ultra-performante (edge Cloudflare, Next.js/OpenNext) → sites rapides par construction
- Transparence sur le statut (étudiant en formation, workflow assisté par IA) — assumé comme gage d'agilité et de prix maîtrisés, pas caché
- Portfolio réel : un e-commerce en production avec paiements live (Swiss3Design), pas juste des maquettes

**Marché cible** : généraliste (indépendants, TPE/PME, startups), zone Europe élargie, avec ancrage Suisse fort pour la crédibilité locale (CHF, TWINT le cas échéant, droit suisse). Domaine `.com` cohérent avec l'ambition européenne du marché cible.

**Langues couvertes (9)** : français (défaut), anglais, espagnol, italien, allemand, portugais, néerlandais, polonais, russe — voir §3 pour l'architecture d'URL et §4 pour la qualité de traduction par langue.

---

## 2. Identité de marque

- **Nom** : Calyroc
- **Domaine** : calyroc.com (déjà réservé sur Cloudflare)
- **Ton** : vouvoiement, direct, sans jargon d'agence, honnête sur les délais et le scope
- **Style visuel** : sobre et premium — fond onyx quasi-noir, accent bronze unique, beaucoup d'espace négatif
- **Palette** (verrouillée, voir `docs/DESIGN_SYSTEM.md` pour le détail des tokens) :
  - Fond (dark, par défaut) : onyx `#0B0B0C`, panneaux `#131316`
  - Texte : blanc cassé `#F5F3EF`
  - Texte secondaire / bordures : stone `#8C887F`
  - Accent unique : bronze `#C9A567` (clin d'œil à "roc" — minéral, se démarque du violet/indigo générique des sites d'agences tech)
  - Le site supporte aussi un thème clair (toggle, voir `ThemeToggle.tsx`) — mêmes rôles de tokens, valeurs inversées.
- **Typographie** : Space Grotesk Variable (titres) + Inter Variable (corps), auto-hébergées et sous-titrées (voir §4, section polices).
- **Logo** : mark bronze + texte, décliné en plusieurs formats (`public/logo.webp`, `public/logo-icon.png`, `public/logo-email.png` pour les emails HTML, `public/logo-icon-sm.webp`).

---

## 3. Architecture du site (sitemap)

Multipage, routing localisé `/{locale}/...` pour 9 langues (`fr` par défaut, `en`, `es`, `it`, `de`, `pt`, `nl`, `pl`, `ru`).

**Pages publiques**
1. **Accueil** (`/`)
2. **Services** (`/services`, même slug dans toutes les langues)
3. **Réalisations** (slug traduit par locale, ex. `/en/work`, `/de/referenzen` — voir `src/i18n/routes.ts`)
4. **Tarifs** (slug traduit par locale, ex. `/en/pricing`)
5. **Contact** (`/contact`, même slug dans toutes les langues)
6. **FAQ** (`/faq`, même slug — contenu dictionnaire, liée depuis la page Tarifs)
7. **Blog** (`/blog` + `/blog/[slug]`, même slug — contenu éditorial dans `src/content/blog/`, un article rédigé une fois et servi sous chaque préfixe de locale)
8. **Mentions légales / Confidentialité / CGV** (slug traduit par locale) — traduites dans les 9 langues, voir §4
9. **Suivi de projet** (`/suivi/[token]`) — page publique en lecture seule pour qu'un client suive l'avancement de son projet sans compte, via un lien à token unique généré depuis l'admin

**Pourquoi des slugs traduits plutôt qu'un slug français partout** : confirmé par la recherche SEO multilingue actuelle — un slug traduit par langue (`/en/pricing` plutôt que `/en/tarifs`) surclasse un slug partagé en une seule langue pour le référencement international. Le français reste le dossier physique "canonique" en interne (`src/app/[locale]/tarifs/`) ; `next.config.ts` réécrit la version localisée vers ce dossier, et redirige (301) l'ancienne URL à slug français (sous un préfixe non-fr) vers la nouvelle URL localisée.

**Zone privée**
10. **`/admin`** — dashboard protégé (mot de passe), gestion des leads/devis (D1), statut + suivi client (génère le lien `/suivi/[token]`), liens de paiement Stripe, export CSV

**Composant transverse**
- **Chatbot "Ask Calyroc"** — widget flottant, Workers AI, badge de disclosure IA visible, testé en production

**SEO technique** — sitemap.xml + hreflang (balises HTML uniquement, volontairement pas dupliqué en header HTTP ni sitemap pour éviter que les deux sources divergent), robots.txt (`/admin` exclu — le fichier servi en prod est enrichi par Cloudflare, voir §4), JSON-LD (ProfessionalService + Service + BreadcrumbList + FAQPage), metadata par page (title/description/canonical), Open Graph + Twitter Card sur toutes les pages/langues avec image statique (`public/og-image.png`, régénérée hors du build OpenNext via `scripts/gen-og-image.mjs`), favicon statique.

**GEO / lisibilité par les IA** — voir §4 pour le détail (Content Signals, security.txt, formulaire de contact adapté aux agents).

---

## 4. Fonctionnalités & architecture technique

**Stack** : Bun · **Next.js 16 (App Router) + OpenNext** · UnoCSS · React 19 · TypeScript strict · Cloudflare Workers (D1, Workers AI) · Biome · Resend · Zod · Stripe · `motion` (Framer Motion)

**Repo** : public, [`Thomas-TP/calyroc`](https://github.com/Thomas-TP/calyroc)

**i18n** : routing `/{locale}/...` via App Router (`src/app/[locale]/`), dictionnaire par langue dans `src/i18n/dictionaries/` (9 fichiers), slugs traduits pour les routes qui en ont un (`src/i18n/routes.ts`), détection de langue à la racine via `src/middleware.ts`. Reste volontairement sur l'ancienne convention `middleware.ts` (pas `proxy.ts`) — voir `AGENTS.md` §"Règles non négociables".

**Qualité de traduction** : `fr` rédigé directement (référence), `en` relu avec attention. `es`, `it`, `de`, `pt`, `nl`, `pl`, `ru` sont des traductions assistées par IA, jamais relues par un locuteur natif — chaque fichier le signale en commentaire de tête. Voir `docs/CONTENT_GUIDE.md`.

**Contenu légal** : traduit dans les 9 langues (`src/i18n/legal/`), avec une notice sur chaque version non-française expliquant que la version française fait foi en cas de litige. Chaque page (mentions légales, confidentialité, CGV) a été auditée pour la conformité nLPD (Suisse) + RGPD (UE) + UK GDPR, avec sommaire sticky et sections numérotées. *Historique : rédigé initialement en français uniquement par prudence (pas de traduction IA de contenu légal sans révision) ; cette réserve a été levée sur demande explicite, la version française restant la référence juridique.*

**Adresse Gland (légal) vs Genève (marketing)** — distinction volontaire : Gland, VD est la véritable adresse d'enregistrement de l'entreprise et n'apparaît que dans les pages légales (mentions légales). Partout ailleurs où une localisation sert un usage marketing (JSON-LD `ProfessionalService`, llms.txt, profils tiers comme Trustpilot), c'est "Genève" (localisée par langue, `src/i18n/seo.ts::geneva`) qui est utilisée — ville plus reconnaissable pour un visiteur international, sans jamais entrer en contradiction avec l'adresse légale réelle qui reste affichée ailleurs.

**GEO (lisibilité par les IA)** :
- **Content Signals + robots.txt AI-aware** : géré côté Cloudflare (AI Crawl Control → Signals), pas dans ce repo — voir `AGENTS.md` règle #8. Déclare `search=yes, ai-train=no` et bloque en dur 9 bots dédiés à l'entraînement (GPTBot, Google-Extended, etc.) tout en laissant passer les bots de recherche/citation IA.
- **security.txt** (RFC 9116) : configuré côté Cloudflare (Security → Settings), pas de fichier dans ce repo.
- **Formulaire de contact adapté aux agents** : attributs WebMCP déclaratifs (`toolname`/`tooldescription`/`toolparamdescription`, essai d'origine Chrome 149+, voir `src/types/webmcp.d.ts`) + accessibilité DOM soignée (labels explicites, `autocomplete`) pour qu'un agent qui pilote un vrai navigateur (Claude computer-use, ChatGPT agent mode...) puisse remplir et soumettre le formulaire de façon fiable. Turnstile reste la seule protection anti-spam — aucune API de soumission programmatique séparée n'a été construite (aurait affaibli cette protection sans bénéfice net).
- **Décisions volontairement écartées** : DNS-AID, MCP Server Card, OAuth discovery, API Catalog — tous conçus pour des sites qui exposent une vraie API ou un agent/serveur MCP appelable, ce que Calyroc n'a pas. Les publier sans l'infrastructure réelle derrière serait trompeur (un agent qui les découvre tomberait sur rien). Markdown for Agents (négociation de contenu `Accept: text/markdown`) écarté aussi : nécessite le plan Cloudflare Pro payant, et les IA lisent déjà bien le HTML normal du site (mesuré : ~100 requêtes IA/24h, 0 blocage).
- **IndexNow** : `scripts/submit-indexnow.mjs`, soumission gratuite à Bing/Yandex/Seznam/Naver sans compte à créer.

**Autres briques** :
- Devise : CHF uniquement — EUR/GBP/USD pas implémenté (les tarifs affichent une équivalence € indicative en texte statique)
- Paiement : générateur de lien de paiement Stripe **dans l'admin**, par lead, montant libre (pas de self-checkout public sur `/tarifs`, volontaire — un acompte se négocie après discussion). Webhook `/api/stripe/webhook` confirme les paiements côté serveur.
- Chatbot : Workers AI, modèle `@cf/zai-org/glm-4.7-flash` (changé depuis Llama 3.1 8B pour un meilleur suivi d'instructions multilingue et un contexte bien plus large — 131k tokens vs 4k), contexte injecté depuis le dictionnaire réel (services/tarifs/FAQ), garde-fous anti-promesse ferme, badge de disclosure IA visible.
- Formulaire de contact : protégé par Turnstile, stocke chaque lead dans D1 (table `leads`) puis tente l'envoi Resend en best-effort.
- Admin : `/admin` protégé par mot de passe (cookie signé HMAC), liste des leads D1 avec statut/notes éditables, sélecteur d'étape de suivi client (génère un lien `/suivi/[token]` partageable), export CSV, génération de liens de paiement Stripe.
- Anti-spam (Turnstile) : widget `calyroc (Spin)` + Worker de vérification managé déployé séparément.
- Blog : infrastructure `src/content/blog/` (un fichier par article + `index.ts` barrel + `types.ts`), premier article publié (comparatif gestionnaires de paquets / stacks frontend 2026).
- FAQ : page dédiée pilotée par le dictionnaire, liée depuis la page Tarifs.
- Suivi de projet : 4 étapes client-facing (même texte que les étapes du process affiché sur l'accueil, pour ne pas inventer un second vocabulaire), page publique sans authentification (le token fait office de secret).
- Analytics : **Umami Cloud** — script chargé conditionnellement (`NEXT_PUBLIC_UMAMI_WEBSITE_ID`, omis si non défini) + **Cloudflare Web Analytics** natif (RUM, activé côté dashboard, aucune ligne de code).
- Avis clients : **Trustpilot** — invitations configurées côté dashboard Trustpilot (pas d'intégration de code sur le site à ce stade).

**Email du domaine (calyroc.com)** :
- **Réception** : Cloudflare Email Routing activé (gratuit), toutes les adresses (`hello@`, `contact@`, `info@`, `admin@`) redirigées vers l'adresse perso de Thomas.
- **Envoi** (formulaire de contact + admin) : Resend, domaine calyroc.com vérifié, DNS SPF/DKIM en place.

---

## 5. Grille tarifaire

| Pack | Prix indicatif | Contenu |
|---|---|---|
| **Essentiel** | dès **590 CHF** (~600 €) | Site vitrine 1 page, design sur-mesure, responsive, formulaire de contact, 2 langues |
| **Pro** | dès **1'490 CHF** (~1'550 €) | Site multipage (5-6 pages), jusqu'à 3 langues, animations, SEO technique, blog en option |
| **Sur-mesure** | **devis dès 2'900 CHF** | E-commerce, web app, dashboard admin, paiement en ligne, intégrations complexes, toutes langues |
| **Maintenance** | **35 CHF/mois** | Hébergement, mises à jour, petites modifications |

Modalités : acompte 30-50% à la commande via Stripe, solde à la livraison, 2 révisions incluses par pack, délai indicatif 2 semaines (Essentiel) à 6 semaines (Sur-mesure).

---

## 6. Contenu page par page

**Accueil** : Hero (animé) → aperçu services → réalisations en vedette → bandeau CTA final.

**Services** : une fiche par prestation (vitrine / e-commerce / refonte / landing page / maintenance / SEO / identité visuelle) — pour qui, inclus, techno, délai, CTA devis.

**Réalisations** : liste des case studies réels. Swiss3Design en vedette (problème → stack → fonctionnalités → résultats mesurés), thomastp.ch (perf, animations, i18n). Métriques uniquement si mesurées réellement.

**Tarifs** : grille des 3 packs + maintenance, conditions, FAQ en accordéon, lien vers la page FAQ dédiée.

**FAQ** : questions/réponses complémentaires à celles déjà présentes sur la page Tarifs, contenu 100% dictionnaire.

**Blog** : articles éditoriaux techniques (ex. comparatif d'écosystèmes frontend), rédigés une fois et affichés sous chaque préfixe de locale (comme les pages légales).

**Contact** : formulaire (nom, email, pack, description) → D1 + Resend, lien chatbot, engagement réponse 48h. Adapté pour être rempli de façon fiable par un agent IA pilotant un navigateur (voir §4).

**Mentions légales / Confidentialité / CGV** : conformité nLPD + RGPD + UK GDPR, adresse légale Gland (VD, Suisse) réservée à ces pages uniquement (voir §4 pour la distinction avec "Genève" utilisé en marketing).

**Suivi de projet** : 4 étapes visibles publiquement via un lien à token, sans compte à créer.

---

## 7. Roadmap de livraison

1. ~~Fondations (scaffold, design system, i18n)~~ ✅
2. ~~Pages publiques (Accueil, Services, Tarifs, Contact, légal)~~ ✅
3. ~~Réalisations (case studies)~~ ✅
4. ~~SEO technique (sitemap, hreflang, JSON-LD)~~ ✅
5. ~~Chatbot Ask Calyroc (Workers AI)~~ ✅ testé en prod, modèle mis à niveau (GLM-4.7-Flash)
6. ~~Espace admin~~ ✅ (D1 + auth par mot de passe + export CSV + liens de paiement Stripe + suivi client)
7. ~~Turnstile anti-spam~~ ✅
8. ~~Premier déploiement~~ ✅ **https://calyroc.thomastp.workers.dev**, domaine custom calyroc.com/www.calyroc.com
9. ~~Paiement Stripe~~ ✅ générateur de lien de paiement admin + webhook de confirmation
10. ~~Design polish~~ ✅ polices auto-hébergées et sous-titrées, favicon, animations, menu mobile, thème clair/sombre, accessibilité clavier
11. ~~Blog, FAQ, suivi de projet~~ ✅
12. ~~Extension i18n 6→9 langues (nl, pl, ru) + slugs d'URL traduits par locale~~ ✅
13. ~~Refonte du contenu légal : traduction 9 langues + audit conformité nLPD/RGPD/UK GDPR + redesign visuel~~ ✅
14. ~~Audit SEO/GEO complet~~ ✅ Ahrefs Health Score 90→100, Content Signals, security.txt, IndexNow, en-têtes de sécurité durcis, formulaire de contact adapté aux agents IA
15. ~~Relecture native des traductions~~ — toujours en attente côté utilisateur pour es/it/de/pt/nl/pl/ru (voir plus bas)
16. QA multilingue approfondie, perf — reste à faire

### Ce qu'il reste à faire côté utilisateur

- Relire les traductions non-fr/en (assistées par IA, jamais relues par un locuteur natif)
- Décider si un vrai flux RSS pour le blog vaut le coup (permettrait un header `Link rel="alternate"` légitime)
- Décider si le plan Cloudflare Pro (Markdown for Agents) vaut le coût à ce niveau de trafic

### Bug critique trouvé et corrigé lors du premier déploiement

Le premier déploiement affichait une **Internal Server Error** sur absolument toutes les pages. Cause : Next.js 16 utilise **Turbopack** par défaut, et le bundler Turbopack casse le chargement des chunks serveur une fois passé par OpenNext sur cet environnement Windows (`ChunkLoadError` sur chaque page). Corrigé avec `next build --webpack`. Ça a fait apparaître un second problème (le chargeur PostCSS custom de Next.js n'arrivait pas à charger `@unocss/postcss` sous webpack), réglé avec un wrapper (`scripts/unocss-postcss-wrapper.cjs`).

**Retenir pour la suite** : `bun run build` utilise `next build --webpack` — ne pas repasser sur Turbopack sans re-tester un vrai déploiement.

### Déploiement — comment ça marche

Voir `docs/DEPLOYMENT.md` pour le détail complet (deux mécanismes actifs : manuel via `bun run deploy:cloudflare`, automatique sur push GitHub via Cloudflare Workers Builds — **toujours committer et pousser après un déploiement manuel, voir `AGENTS.md` Règle n°0**).

**Secrets de production** configurés sur le Worker (`RESEND_API_KEY`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) — repo public, demander les valeurs directement si besoin.

**Domaine** : calyroc.com et www.calyroc.com pointent sur ce Worker (custom domains). `calyroc.thomastp.workers.dev` reste actif en fallback.

**Turnstile** : widget `calyroc (Spin)` (sitekey `0x4AAAAAADz0gll1MFJs2mni`), Worker de vérification déployé séparément (`turnstile-siteverify-calyroc`).

> ⚠️ **Sécurité — incident historique résolu** : une version précédente de ce fichier a commité `ADMIN_PASSWORD` en clair dans ce repo **public** (commit `1141f41`, toujours présent dans l'historique git). Le mot de passe compromis a été **roté**. Ne plus jamais committer de secrets ici, même dans un repo qu'on pense privé au départ.

---

## 8. Décisions tranchées

- Nom : Calyroc
- Domaine : calyroc.com
- Logo : mark bronze + texte, plusieurs formats déclinés
- Mentions légales — adresse légale : Gland, VD, Suisse (voir §4 pour la distinction avec "Genève" utilisé en marketing)
- Grille tarifaire : validée
- Langues : 9 (fr par défaut), slugs d'URL traduits par locale pour les routes principales
- Contenu légal : traduit dans les 9 langues, français juridiquement de référence
