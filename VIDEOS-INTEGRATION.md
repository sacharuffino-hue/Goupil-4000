# 🎬 VIDÉOS INTÉGRÉES - GOUPIL-4000

**Date**: 21 janvier 2026 - 20:35  
**Statut**: 4 vidéos intégrées + 2 placeholders

---

## ✅ VIDÉOS TÉLÉCHARGÉES ET INTÉGRÉES (4)

| # | Nom du fichier | Taille | Statut | Titre dans la galerie |
|---|----------------|--------|--------|----------------------|
| 1 | `test-usinage-bois-1.mov` | 6,4 MB | ✅ Intégrée | Test usinage bois (1ère passe) |
| 2 | `test-usinage-bois-2eme-passe.mov` | 3,7 MB | ✅ Intégrée | Test usinage bois (2ème passe) |
| 3 | `usinage-base-pilier.mov` | 14,8 MB | ✅ Intégrée | Usinage base pilier |
| 4 | `usinage-liaison-pilier-fraise2T.mov` | 7,9 MB | ✅ Intégrée | Usinage liaison pilier (fraise 2T) |

**Total**: 32,8 MB

---

## ⚠️ VIDÉOS TROP VOLUMINEUSES (2)

| # | Nom du fichier | Taille | Problème | Solution |
|---|----------------|--------|----------|----------|
| 5 | `IMG_1821.MOV` | 22,1 MB | > Limite 20 MB | Placeholder créé |
| 6 | `IMG_1825.MOV` | 22,9 MB | > Limite 20 MB | Placeholder créé |

**Total**: 45 MB

---

## 🎯 SOLUTION POUR LES VIDÉOS VOLUMINEUSES

### **Option 1: Héberger sur YouTube (Recommandé)**

**Avantages**:
- Gratuit et illimité
- Lecture fluide
- Partage facile
- Pas de limite de taille

**Étapes**:
1. Créez un compte YouTube pour le projet
2. Téléchargez `IMG_1821.MOV` et `IMG_1825.MOV`
3. Mettez les vidéos en "Non répertorié" (visibles uniquement avec le lien)
4. Copiez les liens d'intégration
5. Remplacez les placeholders dans `galerie.html`

**Code à utiliser**:
```html
<div class="gallery-item">
    <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/VOTRE_VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
    <div class="gallery-overlay">
        <span class="gallery-category">Tests</span>
        <h3 class="gallery-title">Test machine (IMG_1821)</h3>
    </div>
</div>
```

---

### **Option 2: Héberger sur Vimeo**

**Avantages**:
- Plus professionnel
- Lecteur personnalisable
- Pas de publicités

**Étapes similaires à YouTube**

---

### **Option 3: Compresser les vidéos**

**Outils gratuits**:
- HandBrake (Windows/Mac/Linux)
- CloudConvert (en ligne)
- FFmpeg (ligne de commande)

**Objectif**: Réduire à moins de 20 MB chacune

**Commande FFmpeg**:
```bash
ffmpeg -i IMG_1821.MOV -vcodec h264 -crf 28 IMG_1821-compressed.mov
ffmpeg -i IMG_1825.MOV -vcodec h264 -crf 28 IMG_1825-compressed.mov
```

---

## 📂 STRUCTURE ACTUELLE

```
videos/
├── test-usinage-bois-1.mov (6,4 MB) ✅
├── test-usinage-bois-2eme-passe.mov (3,7 MB) ✅
├── usinage-base-pilier.mov (14,8 MB) ✅
└── usinage-liaison-pilier-fraise2T.mov (7,9 MB) ✅

À héberger ailleurs:
├── IMG_1821.MOV (22,1 MB) 🔄
└── IMG_1825.MOV (22,9 MB) 🔄
```

---

## 🎨 PLACEHOLDERS CRÉÉS

Les 2 vidéos volumineuses ont des **placeholders visuels** dans la galerie:
- Fond dégradé orange
- Icône vidéo
- Nom du fichier
- Message explicatif
- Suggestion d'hébergement

**Apparence**: Cohérente avec le design du site (thème orange)

---

## 📊 RÉCAPITULATIF

```
Vidéos intégrées:        ████████████░░ 4/6 (67%)
Vidéos téléchargées:     ████████████░░ 4/6 (67%)
Taille totale intégrée:  32,8 MB
Taille totale à gérer:   77,8 MB
```

---

## ✅ CE QUI EST FAIT

1. ✅ 4 vidéos téléchargées et intégrées
2. ✅ Lecteurs vidéo avec contrôles
3. ✅ Design responsive
4. ✅ Overlays avec catégories
5. ✅ Placeholders pour les 2 grandes vidéos

---

## 🔄 PROCHAINES ÉTAPES

### **Choix 1: Hébergement externe (Recommandé)**
1. Téléchargez IMG_1821 et IMG_1825 sur YouTube
2. Copiez les liens d'intégration
3. Remplacez les placeholders dans `galerie.html`

### **Choix 2: Compression**
1. Compressez IMG_1821 et IMG_1825 (< 20 MB chacune)
2. Téléchargez-les à nouveau
3. Les placeholders seront automatiquement remplacés

### **Choix 3: Laisser les placeholders**
- Les placeholders restent visibles
- Message clair pour les visiteurs
- Option temporaire en attendant l'hébergement

---

## 🎯 RECOMMANDATION

**YouTube** est la meilleure solution:
- Gratuit
- Illimité
- Professionnel
- Lecture optimisée
- 5 minutes de configuration

---

## 📄 FICHIER MODIFIÉ

`galerie.html` - Section "Vidéos de Tests" (6 items au total)

---

## ✨ RÉSULTAT ACTUEL

**4 vidéos fonctionnelles** dans la galerie  
**2 placeholders élégants** pour les grandes vidéos  
**Design cohérent** avec le thème orange du site

---

**Projet Goupil-4000** | IUT de Mantes-en-Yvelines | Janvier 2026

Pour toute question sur l'intégration des 2 vidéos manquantes, consultez ce fichier ! 🎬
