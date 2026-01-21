# 📁 INDEX DES FICHIERS - Site Goupil-4000

## 🗂️ STRUCTURE COMPLÈTE DU PROJET

```
goupil-4000-site/
│
├── 📄 Pages HTML (7 fichiers)
│   ├── index.html                 ⭐ Page d'accueil
│   ├── specifications.html        📐 Spécifications techniques
│   ├── galerie.html              🖼️ Galerie multimédia
│   ├── goupilsoft.html           💻 Logiciel CNC
│   ├── documentation.html        📚 Documentation
│   ├── equipe.html               👥 L'équipe
│   └── conception.html           🔧 Conception & Fabrication
│
├── 📁 css/
│   ├── style.css                 🎨 Styles principaux
│   └── pages.css                 🎨 Styles pages internes
│
├── 📁 js/
│   └── main.js                   ⚡ JavaScript interactif
│
└── 📝 Documentation (4 fichiers)
    ├── README.md                 📖 Documentation technique
    ├── GUIDE-UTILISATION.md      🚀 Guide déploiement
    ├── PROJET-COMPLET.md         ✅ Récapitulatif final
    └── INDEX-FICHIERS.md         📁 Ce fichier
```

---

## 📄 PAGES HTML DÉTAILLÉES

### 🏠 index.html (15 KB)
**Page d'accueil - Point d'entrée du site**

**Sections** :
- ✅ Hero section (titre, description, 2 CTA)
- ✅ Stats section (4 cartes colorées : précision, vitesse, broche, budget)
- ✅ Features section (3 innovations : monoplaque, GoupilSoft, précision)
- ✅ Timeline section (5 étapes : Sept 2025 → Avril 2026)
- ✅ Team section (3 profils : Sacha, Kylian, Mathéo)
- ✅ CTA section (appel à l'action)
- ✅ Footer (4 colonnes)

**À modifier** :
- Images placeholder → Vraies photos machine
- Liens GitHub `#` → Vrai lien repository

---

### 📐 specifications.html (21 KB)
**Spécifications techniques complètes**

**Sections** :
- ✅ Page header (titre + description)
- ✅ Specs overview (4 cartes résumées)
- ✅ Structure mécanique (portique, monoplaque, rigidité)
- ✅ Performances (précision, vitesse, barres de progression)
- ✅ Transmission & guidages (rails, vis à billes)
- ✅ Motorisation (NEMA23, 300W)
- ✅ Broche (ER25, 0-8000 tr/min, 1kW)
- ✅ Électronique (PoKeys57CNC, Mach3, GoupilSoft)
- ✅ Matériaux usinables (bois, plastiques, aluminium, laiton)
- ✅ Tableau comparatif G-3000 vs G-4000

**Highlights** :
- Tableau comparatif interactif avec animations
- Barres de progression pour performances
- Cards avec gradients colorés

---

### 🖼️ galerie.html (8 KB)
**Galerie photos et vidéos**

**Sections** :
- ✅ Photos d'assemblage (3 placeholders)
- ✅ Électronique & câblage (2 placeholders)
- ✅ Vidéos de tests (4 placeholders)

**À ajouter** :
- 📸 Photos G-3000 complète (depuis `/G-4000/Médias/`)
- 📸 Photos électronique
- 🎥 4 vidéos MP4 (tests usinage)

**Structure dossiers à créer** :
```
images/
├── assemblage/
├── electronique/
└── fabrication/

videos/
```

---

### 💻 goupilsoft.html (14 KB)
**Documentation logiciel CNC open source**

**Sections** :
- ✅ Présentation du logiciel
- ✅ Fonctionnalités (interface, visualisation 3D, G-code, broche)
- ✅ Architecture technique (Python V0.1)
- ✅ Roadmap développement (3 phases)
- ✅ RETEX (points forts, défis, estimations temps)

**Highlights** :
- Timeline visuelle roadmap
- Comparaison 170h estimé vs 270h réel
- Lien GitHub à ajouter

---

### 📚 documentation.html (9 KB)
**Ressources et guides d'utilisation**

**Sections** :
- ✅ Documents téléchargeables (3 cards : PDF, présentation, CAO)
- ✅ Guides d'utilisation (démarrage, avancé)
- ✅ Paramètres de coupe (tableau par matériau)

**À ajouter** :
- 📄 Cahier des charges PDF
- 📄 Présentation soutenance PDF
- 🔗 Lien 3DEXPERIENCE

---

### 👥 equipe.html (10 KB)
**Profils détaillés de l'équipe**

**Sections** :
- ✅ Sacha Ruffino (Chef Projet & Conception)
- ✅ Kylian Michaud (Développement Logiciel)
- ✅ Mathéo Dizambourg (Fabrication & Tests)
- ✅ Encadrement IUT (Mme Chevrot, M. Brossard)
- ✅ Méthodologie collaboration (outils, valeurs)

**Highlights** :
- Profils détaillés avec responsabilités
- Tags compétences
- Section outils collaboratifs

---

### 🔧 conception.html (11 KB)
**Méthodologie et processus de développement**

**Sections** :
- ✅ Méthodologie de travail (conception + fabrication)
- ✅ Évolution G-3000 → G-4000 (tableau comparatif)
- ✅ Optimisations majeures (monoplaque, FEM, budget)
- ✅ Processus de fabrication (4 étapes)

**Highlights** :
- Timeline processus fabrication
- Comparaison G-3000 vs G-4000
- Infos optimisations budget

---

## 🎨 FICHIERS CSS

### css/style.css (18 KB)
**Styles principaux du site**

**Contient** :
- ✅ Variables CSS (couleurs, fonts, espacements)
- ✅ Reset & base
- ✅ Container
- ✅ Navigation (fixe, responsive, mobile)
- ✅ Hero section
- ✅ Stats section (4 cartes avec gradients)
- ✅ Features section
- ✅ Timeline section
- ✅ Team section
- ✅ CTA section
- ✅ Footer
- ✅ Animations (@keyframes)
- ✅ Responsive (breakpoints 768px, 480px)

**Variables modifiables** :
```css
--color-primary: #667eea;
--color-secondary: #764ba2;
--color-accent-pink: #f093fb;
--color-accent-green: #43e97b;
```

---

### css/pages.css (13 KB)
**Styles pages internes**

**Contient** :
- ✅ Page header
- ✅ Specs overview
- ✅ Content sections
- ✅ Spec details
- ✅ Performance bars
- ✅ Two column layout
- ✅ Broche specs
- ✅ Tech boxes
- ✅ Materials grid
- ✅ Comparison tables
- ✅ Gallery grid
- ✅ Documentation cards
- ✅ Team profiles
- ✅ Responsive mobile

---

## ⚡ FICHIER JAVASCRIPT

### js/main.js (8 KB)
**Interactivité du site**

**Fonctions** :
- ✅ `initMobileNav()` : Menu hamburger mobile
- ✅ `initScrollEffects()` : Navbar transparence au scroll
- ✅ `initSmoothScroll()` : Défilement fluide vers ancres
- ✅ `initScrollAnimations()` : Animations au scroll (fade in)
- ✅ `initGallery()` : Lightbox pour galerie
- ✅ `openLightbox()` : Ouvrir modal image/vidéo
- ✅ `closeLightbox()` : Fermer modal
- ✅ `initComparisonTable()` : Tableaux interactifs
- ✅ Utilitaires (formatNumber, copyToClipboard, showNotification)

**Pas de dépendances** : JavaScript vanilla pur

---

## 📝 FICHIERS DOCUMENTATION

### README.md (7 KB)
**Documentation technique complète**

**Contient** :
- Objectif du site
- Contenu des 7 pages
- Design & style (palette, typo)
- Structure des fichiers
- Fonctionnalités
- Instructions intégration médias
- Personnalisation
- SEO & métadonnées
- Déploiement GitHub Pages
- Équipe projet
- Contact

**Public cible** : Développeurs, contributeurs

---

### GUIDE-UTILISATION.md (9 KB)
**Guide pas-à-pas déploiement**

**Contient** :
- Démarrage rapide (3 étapes)
- Ajout médias (conversion HEIC, MOV)
- Personnalisation (liens, logo)
- Déploiement GitHub Pages (détaillé)
- Checklist avant déploiement
- Personnalisation avancée
- Résolution de problèmes
- Support et ressources
- Prochaines étapes

**Public cible** : Utilisateurs finaux, équipe projet

---

### PROJET-COMPLET.md (9 KB)
**Récapitulatif final livraison**

**Contient** :
- Fichiers créés (liste complète)
- Statistiques du projet (contenu, design, fonctionnalités)
- Points forts du site
- Déploiement rapide
- Checklist avant déploiement
- Structure visuelle
- Conseils pour la suite
- Support et ressources
- Réalisations

**Public cible** : Équipe projet, encadrants, jury

---

### INDEX-FICHIERS.md (ce fichier)
**Index de navigation des fichiers**

---

## 📊 STATISTIQUES GLOBALES

### Fichiers
- **HTML** : 7 fichiers (88 KB)
- **CSS** : 2 fichiers (31 KB)
- **JS** : 1 fichier (8 KB)
- **Documentation** : 4 fichiers (33 KB)
- **Total** : 14 fichiers (160 KB)

### Contenu
- **Mots** : 4 700+
- **Pages** : 7 complètes
- **Sections** : 40+
- **Composants** : 50+

### Code
- **Lignes HTML** : ~2 500
- **Lignes CSS** : ~1 200
- **Lignes JS** : ~300
- **Total** : ~4 000 lignes de code

---

## 🎯 NAVIGATION RAPIDE

### Pour Tester
1. Ouvrir `index.html` dans navigateur
2. Naviguer entre pages
3. Tester responsive (redimensionner fenêtre)

### Pour Personnaliser
1. Lire `GUIDE-UTILISATION.md`
2. Modifier `css/style.css` (couleurs)
3. Ajouter médias dans dossiers
4. Remplacer liens `#` par vrais liens

### Pour Déployer
1. Lire section "Déploiement" dans `GUIDE-UTILISATION.md`
2. Créer repository GitHub
3. Pousser code
4. Activer GitHub Pages

### Pour Comprendre
1. Lire `README.md` (doc technique)
2. Lire `PROJET-COMPLET.md` (récapitulatif)
3. Explorer code HTML/CSS/JS

---

## ✅ PROJET 100% COMPLET

🎉 **Tous les fichiers sont créés et prêts à l'emploi !**

**Prochaine action** : Lire `GUIDE-UTILISATION.md` et déployer le site !

---

*Index créé le 21 janvier 2026*  
*Site Goupil-4000 - IUT de Mantes-en-Yvelines*
