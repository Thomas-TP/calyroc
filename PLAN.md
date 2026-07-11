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
- **Style visuel** : coloré et créatif — s'écarte volontairement de l'univers plus sombre/tech de thomastp.ch pour bien séparer "portfolio personnel de candidature" et "studio commercial"
- **Palette** :
  - Accent primaire : violet électrique `#7C3AED`
  - Accent secondaire : corail chaud `#FF6B4A`
  - Neutre sombre (mode dark, texte) : `#12101A`
  - Neutre clair (mode light, fond) : `#FAF9F7`
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
9. **`/admin`** — dashboard protégé, gestion des leads/devis

**Composant transverse**
- **Chatbot "Ask Calyroc"** — widget flottant, Workers AI

---

## 4. Fonctionnalités & architecture technique

**Stack** : Bun · Rsbuild/Rspack · UnoCSS · React 19 · TypeScript strict · Cloudflare Workers · Biome · Resend · Zod · Stripe · motion/GSAP

**Repo** : public, `Thomas-TP/calyroc`

**SSR sans Next.js** : SSR maison dans le Worker via `react-dom/server` `renderToReadableStream` (API web-standard, tourne nativement sur Cloudflare Workers). Le Worker détermine locale + route, rend le HTML avec meta/hreflang/JSON-LD, le client hydrate avec le bundle Rsbuild.

**Autres briques** :
- i18n : dictionnaire par langue, détection via `Accept-Language` + `request.cf.country` pour la devise
- Devise : CHF par défaut (CH), EUR zone euro, extensible GBP/USD
- Paiement : Stripe Checkout (acompte 30-50%), idempotence côté Worker
- Chatbot : Workers AI, contexte = contenu réel du site, garde-fou anti-promesse ferme de prix/délai
- Formulaire : Resend + Zod + Turnstile
- Admin : route protégée, stockage leads en D1 ou KV
- Analytics : Cloudflare Web Analytics (cookieless)

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

1. Fondations (scaffold, design system, SSR/i18n)
2. Pages publiques (Accueil, Services, Tarifs, Contact, légal)
3. Réalisations (case studies)
4. Paiement (Stripe, Resend, Turnstile)
5. Chatbot Ask Calyroc (Workers AI)
6. Espace admin
7. QA multilingue, SEO technique, perf, mise en prod

---

## 8. Décisions tranchées

- Nom : Calyroc
- Domaine : calyroc.com
- Logo : géré par l'utilisateur
- Mentions légales — adresse : "Gland, Vaud, Suisse" + email
- Grille tarifaire : validée
