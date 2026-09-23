# Compeel — Instructions pour Claude Code

## Ce qu'est ce projet

Compeel est un laboratoire d'ingénierie technologique africain fondé par Williams de Souza.
Site du laboratoire et de ses produits : KARA, Alexis et Dame Justice.
Positionnement : laboratoire de R&D qui expérimente et conçoit de la rupture technique. Les missions d'ingénierie sur-mesure (comme celles réalisées pour VersusFinance et Crpay) financent la recherche du laboratoire ; cette recherche devient des produits scalables (KARA, Alexis, Dame Justice). On ne vend pas du code au kilomètre, on finance l'innovation.
Déployé sur Vercel. Domaine : compeel.com

---

## Les produits

**KARA** — mémoire clinique vocale pour les structures médicales en Afrique de l'Ouest. Les soignants enregistrent leur voix sur les dossiers patients ; tout est transcrit, centralisé et consultable. 100% on-premise, aucune donnée ne quitte la structure médicale.

**Alexis** — outil de développement logiciel avec validation humaine à chaque étape (cadrage, vérification, historique), autour du dépôt de code.

**Dame Justice** — recherche juridique pour les professionnels du droit togolais et OHADA, avec renvoi systématique aux sources.

Ces produits vivent dans un espace distinct des missions clients : Compeel Labs (`/realisations`).

---

## Stack technique

- **Framework** : Next.js 16 (App Router), React 18, TypeScript strict (pas de `any`)
- **Styles** : Tailwind CSS 3 uniquement — pas d'autre librairie CSS, pas de composants UI tiers
- **Icônes** : lucide-react
- **Emailing** : Resend, via `app/api/contact/route.ts` (formulaire de contact)
- **Déploiement** : Vercel — build statique (`next build`), pages prerendered

---

## Structure des dossiers

```
compeel/
├── app/
│   ├── page.tsx                    → Homepage
│   ├── layout.tsx                  → Layout racine (Nav, Footer, metadata, JSON-LD)
│   ├── globals.css                 → Design tokens (variables CSS) + utilitaires Tailwind
│   ├── about/page.tsx               → Le laboratoire
│   ├── kara/, alexis/, damejustice/ → Pages produits (via ProductStory)
│   ├── realisations/page.tsx        → Compeel Labs (via ProductShowcase)
│   ├── api/contact/route.ts         → Endpoint du formulaire de contact (Resend)
│   ├── sitemap.ts, robots.ts        → SEO technique
│   └── mentions-legales/, cgu/, confidentialite/, cookies/, remboursement/, accessibilite/ → Pages légales
├── components/                      → Composants réutilisables (Nav, Footer, TrustedBy, ProductStory,
│                                       ProductShowcase, ContactForm, JsonLd, ScrollCue, HeroVisual, Watermark)
├── lib/                             → Données typées (clients.ts, projects.ts)
└── public/                          → Assets statiques (logos, images)
```

Il n'y a actuellement pas de blog ni de contenu MDX sur le site.

---

## Design System — Règles absolues

### Palette de couleurs

```
Fond principal (bg)        : #F7F8FA (blanc cassé)
Surface                    : #FFFFFF
Surface profonde           : #EEF1F5
Texte principal (ink)      : #0B1220 (bleu marine)
Texte secondaire (muted)   : #5B6472
Accent (bleu)               : #3B82F6
Accent profond              : #2563EB
Métal (traits techniques)  : #475569
Bordures / filets (rule)   : #E2E5EA
```

Ces valeurs sont définies comme variables CSS dans `app/globals.css` (`--color-*`) et exposées à Tailwind via `tailwind.config.ts` (`background`, `surface`, `foreground`, `muted`, `accent`, `accent-deep`, `metal`, `border`). Toujours utiliser ces tokens Tailwind plutôt que des couleurs en dur.

Identité claire, sobre, technique — documentation d'ingénierie plutôt que decorum SaaS. Fond clair, un seul accent bleu, motif géométrique fin en ponctuation (jamais décoratif au sens illustratif). Compeel n'est pas une agence créative : le design inspire la rigueur et la solidité, pas la décoration.

Identités produit (aperçus HTML/CSS uniquement, palette système Compeel inchangée par ailleurs) : KARA vert (`#10B981`), Alexis violet (`#8B5CF6`), Dame Justice rouge brique (`#A34E35`, réemploi de l'ancien accent Compeel).

### Typographie

- IBM Plex Sans pour tout le texte (titres et corps) — pas de serif, nulle part.
- JetBrains Mono pour les labels techniques, extraits de code, légendes techniques des aperçus produit.
- Titres : grande taille, poids fort, beaucoup d'espace
- Corps : lisible, jamais en dessous de 16px
- Hiérarchie claire : H1 > H2 > body > caption
- Pas de texte trop petit, pas de murs de texte

### Composants

- Aperçus HTML/CSS autorisés : KARA vert profond, Alexis clair/violet, Dame Justice clair/rouge brique.
- Ces identités restent dans les aperçus produit ; Compeel conserve sa palette terracotta.
- Les écrans imaginés sont signalés comme vues illustratives ; aucune donnée réelle ni métrique inventée présentée comme résultat.
- Aperçus lisibles sur mobile, jamais masqués pour contourner un problème de mise en page.
- Contenu visible par défaut, même sans JavaScript ; les animations ne conditionnent pas la lecture.
- Pas de bordures colorées sur les cartes
- Pas de gradients agressifs
- Pas de couleurs criardes
- Beaucoup d'espace blanc (padding généreux)
- Ombres subtiles seulement si nécessaire
- Motif géométrique "blueprint" (`components/BlueprintMotif.tsx`) : traits fins, un seul aplat `accent-deep` par composition, usage sparse (hero homepage uniquement pour l'instant, pas de répétition systématique par section)

### Animations

Autorisées si sobres et fonctionnelles — elles servent la lisibilité, jamais la décoration.

- Transitions courtes (150–300ms), easing simple, pas d'effet bounce/spring
- Fade-in / slide léger au scroll, hover states discrets, micro-interactions sur clic
- Pas de librairie d'illustration animée (Lottie stock, clipart type unDraw/Storyset)
- Pas de parallax lourd, pas d'auto-play en boucle, pas d'animation qui retarde la lecture du contenu
- En cas de doute sur une animation — demander confirmation

### Interdit

- Vert fluo, rose fuchsia, rouge vif, couleurs néon ou saturées
- Terracotta comme couleur système (réservé à l'identité Dame Justice uniquement)
- Gradients agressifs
- Cartes avec fond coloré
- Trop d'éléments sur une même page
- Animations lourdes, inutiles, ou qui distraient du contenu
- Illustrations stock génériques (unDraw, Storyset, Blush) — hors palette et identité visuelle du site

---

## Contenu — Pas de blog actuellement

Le site n'a pas de blog ni de contenu MDX. Les pages sont des composants `.tsx` statiques dans `app/`. Toute future section éditoriale doit suivre le même modèle (page App Router + composants dans `components/`), sans introduire de nouvelle dépendance de contenu (MDX, CMS) sans validation explicite.

---

## Footer — Hommage obligatoire

Le footer de toutes les pages doit contenir discrètement :

> "In memory of Alexis Sambou, co-founder."

Cette ligne est non négociable. Elle doit apparaître sur toutes les pages, dans le footer, sobre et respectueuse.

---

## Règles de développement

### Ce qu'il faut toujours faire

- Utiliser le plugin frontend-design avant tout travail sur l'interface
- Tester le rendu mobile en priorité — le site doit être parfait sur mobile
- Garder les pages légères — pas de dépendances inutiles
- Optimiser les images avec next/image
- Vérifier que le design est cohérent sur toutes les pages

### Ce qu'il ne faut jamais faire

- Ajouter des librairies CSS en plus de Tailwind
- Utiliser des composants UI tiers (shadcn, MUI, etc.) sans accord explicite
- Modifier le design system défini ci-dessus sans demander
- Créer des pages sans vérifier la cohérence visuelle avec les autres
- Déployer sans tester le build Vercel localement (npm run build)

---

## Conventions de code

- snake_case pour les variables et fonctions Python
- camelCase pour les variables JavaScript/TypeScript
- Composants React en PascalCase
- Pas de any en TypeScript
- Commentaires en français

---

## Ton du contenu

Voix "on" collective (le laboratoire), sauf la page /about qui garde le "je" pour la bio personnelle de Williams.
Ton : direct, honnête, humain. Pas de jargon marketing.
Pas de superlatifs vides ("révolutionnaire", "disruptif", "game-changing").
Pas de clôture absolutiste ("rien ne sort qui n'ait pas..."), pas de titre de section dramatique ou en forme de défi — factuel et descriptif.
Les produits sont présentés avec leurs vraies fonctionnalités, pas des promesses.

---

## Ce projet est en production

compeel.com est un site réel qui représente Compeel au monde entier.
Chaque modification doit être testée localement avant déploiement.
En cas de doute sur une décision de design — demander confirmation.