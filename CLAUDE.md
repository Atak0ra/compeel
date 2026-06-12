# Compeel — Instructions pour Claude Code

## Ce qu'est ce projet

Compeel est un studio technologique africain fondé par Williams de Souza.
Site vitrine du studio et de ses deux produits — KUMA et KARA — avec un blog personnel.
Déployé sur Vercel. Domaine : compeel.com

---

## Les deux produits

**KUMA**
API de détection d'intention vocale en Mina et Ewe.
Pipeline : audio Mina/Ewe → Whisper ASR → transcription française → LLM → JSON structuré.
Cas d'usage principal : mobilité urbaine à Lomé, Togo (Gozem, livraison).
En production sur : kuma.compeel.prcomo

**KARA**
Système de dossier patient vocal pour les structures médicales en Afrique de l'Ouest.
Les soignants enregistrent leur voix sur les dossiers patients. Tout est transcrit, centralisé et consultable.
100% on-premise. Aucune donnée ne quitte la structure médicale.

---

## Stack technique

- **Framework** : Next.js 14 avec App Router
- **Styles** : Tailwind CSS uniquement — pas d'autre librairie CSS
- **Blog** : MDX avec frontmatter (titre, date, description, tags)
- **Déploiement** : Vercel — structure statique optimisée
- **Langue** : TypeScript

---

## Structure des dossiers

```
compeel/
├── app/
│   ├── page.tsx              → Homepage
│   ├── about/page.tsx        → À propos
│   ├── kuma/page.tsx         → Page KUMA
│   ├── kara/page.tsx         → Page KARA
│   ├── blog/page.tsx         → Liste des articles
│   └── blog/[slug]/page.tsx  → Article individuel
├── posts/                    → Articles MDX
│   └── premier-article.mdx
├── components/               → Composants réutilisables
├── lib/                      → Utilitaires MDX
└── public/                   → Assets statiques
```

---

## Design System — Règles absolues

### Palette de couleurs

```
Background principal : #0F0F0F ou #111111 (noir profond)
Background secondaire : #1A1A1A (noir léger)
Texte principal      : #F5F0E8 (blanc cassé chaud)
Texte secondaire     : #9A9A9A (gris doux)
Accent principal     : #C17F3F (terracotta/ocre africain)
Accent secondaire    : #8B5E3C (brun chaud)
Bordures subtiles    : #2A2A2A
```

### Typographie

- Titres : grande taille, poids fort, beaucoup d'espace
- Corps : lisible, jamais en dessous de 16px
- Hiérarchie claire : H1 > H2 > body > caption
- Pas de texte trop petit, pas de murs de texte

### Composants

- Pas de bordures colorées sur les cartes
- Pas de gradients agressifs
- Pas de couleurs criardes
- Beaucoup d'espace blanc (padding généreux)
- Ombres subtiles seulement si nécessaire

### Interdit

- Vert vif ou couleurs saturées
- Cartes avec fond coloré
- Trop d'éléments sur une même page
- Animations lourdes ou inutiles

---

## Blog — Comment ajouter un article

Créer un fichier `.mdx` dans `/posts/` avec ce frontmatter :

```mdx
---
title: "Titre de l'article"
date: "2026-06-01"
description: "Description courte pour le SEO"
tags: ["kuma", "afrique", "ia"]
---

Contenu en Markdown ici...
```

Push sur GitHub → Vercel déploie automatiquement. Pas de CMS, pas d'interface admin.

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

Le site parle en première personne — c'est Williams qui s'exprime.
Ton : direct, honnête, humain. Pas de jargon marketing.
Pas de superlatifs vides ("révolutionnaire", "disruptif", "game-changing").
Les produits sont présentés avec leurs vraies fonctionnalités, pas des promesses.

---

## Ce projet est en production

compeel.com est un site réel qui représente Compeel au monde entier.
Chaque modification doit être testée localement avant déploiement.
En cas de doute sur une décision de design — demander confirmation.