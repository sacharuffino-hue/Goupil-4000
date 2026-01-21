# 🎬 CORRECTION VIDÉOS - GOUPIL-4000

**Date**: 21 janvier 2026 - 20:50  
**Problème**: Les vidéos ne se lancent pas

---

## ✅ CORRECTIONS APPLIQUÉES

### **1. Code HTML des vidéos amélioré**
✅ Ajout de `preload="metadata"` pour précharger les vidéos  
✅ Ajout de deux formats (MP4 + QuickTime) pour meilleure compatibilité  
✅ Ajout de `style` inline pour garantir l'affichage  
✅ `object-fit: cover` pour remplir l'espace  

### **2. CSS amélioré** (`css/pages.css`)
✅ Ajout de `background: #000` pour les vidéos  
✅ Ajout de `cursor: pointer` sur les vidéos  
✅ Style des contrôles vidéo WebKit  

### **3. JavaScript ajouté** (`js/main.js`)
✅ Fonction `initVideoHandling()` pour gérer les vidéos  
✅ Clic sur vidéo pour play/pause  
✅ Gestion des erreurs de chargement  
✅ Préchargement des métadonnées  
✅ Logs de débogage dans la console  

---

## 🔍 TESTS À EFFECTUER

### **Test 1: Ouvrir la console du navigateur**
```
F12 ou Clic droit > Inspecter > Console
```

Vous devriez voir:
- ✅ "Vidéo chargée avec succès: videos/..."
- ❌ Si erreurs: "Erreur de chargement vidéo: ..."

### **Test 2: Vérifier les fichiers vidéo**
```
Ouvrir directement dans le navigateur:
- http://localhost/videos/test-usinage-bois-1.mov
- http://localhost/videos/test-usinage-bois-2eme-passe.mov
- http://localhost/videos/usinage-base-pilier.mov
- http://localhost/videos/usinage-liaison-pilier-fraise2T.mov
```

### **Test 3: Tester le clic**
1. Cliquez sur une vidéo
2. Elle devrait démarrer
3. Recliquez pour mettre en pause

---

## 🚨 PROBLÈMES POSSIBLES

### **Problème 1: Format MOV non supporté**
**Cause**: Certains navigateurs ne supportent pas bien le format MOV  
**Solution**: Convertir en MP4

**Commande FFmpeg**:
```bash
ffmpeg -i test-usinage-bois-1.mov -c:v libx264 -c:a aac test-usinage-bois-1.mp4
ffmpeg -i test-usinage-bois-2eme-passe.mov -c:v libx264 -c:a aac test-usinage-bois-2eme-passe.mp4
ffmpeg -i usinage-base-pilier.mov -c:v libx264 -c:a aac usinage-base-pilier.mp4
ffmpeg -i usinage-liaison-pilier-fraise2T.mov -c:v libx264 -c:a aac usinage-liaison-pilier-fraise2T.mp4
```

**Ou utiliser un convertisseur en ligne**:
- CloudConvert: https://cloudconvert.com/mov-to-mp4
- FreeConvert: https://www.freeconvert.com/mov-to-mp4

---

### **Problème 2: Serveur local requis**
**Cause**: Les vidéos ne se chargent pas en ouvrant directement le fichier HTML  
**Solution**: Utiliser un serveur local

**Option A - Python**:
```bash
# Python 3
python -m http.server 8000

# Puis ouvrir: http://localhost:8000/galerie.html
```

**Option B - Node.js**:
```bash
npx http-server

# Puis ouvrir: http://localhost:8080/galerie.html
```

**Option C - VS Code**:
- Installer l'extension "Live Server"
- Clic droit sur galerie.html > "Open with Live Server"

---

### **Problème 3: Chemin des fichiers**
**Vérifier**:
```
Votre structure:
├── galerie.html
└── videos/
    ├── test-usinage-bois-1.mov ✅
    ├── test-usinage-bois-2eme-passe.mov ✅
    ├── usinage-base-pilier.mov ✅
    └── usinage-liaison-pilier-fraise2T.mov ✅
```

---

## 🎯 SOLUTION RAPIDE

### **Si les vidéos ne marchent toujours pas**

**Convertir en MP4** (format universel):

1. **En ligne** (facile):
   - Aller sur https://cloudconvert.com/mov-to-mp4
   - Uploader vos 4 vidéos MOV
   - Télécharger les 4 vidéos MP4
   - Remplacer les fichiers dans le dossier `videos/`

2. **Mettre à jour le HTML**:
   Remplacer `.mov` par `.mp4` dans `galerie.html`

---

## 🧪 TEST IMMÉDIAT

### **Étape 1: Vérifier que les fichiers existent**
```bash
ls -lh videos/
```

Vous devriez voir:
```
test-usinage-bois-1.mov (6.4 MB)
test-usinage-bois-2eme-passe.mov (3.7 MB)
usinage-base-pilier.mov (14.8 MB)
usinage-liaison-pilier-fraise2T.mov (7.9 MB)
```

### **Étape 2: Démarrer un serveur local**
```bash
python -m http.server 8000
```

### **Étape 3: Ouvrir dans le navigateur**
```
http://localhost:8000/galerie.html
```

### **Étape 4: Ouvrir la console (F12)**
Chercher les messages de log

---

## 📊 COMPATIBILITÉ NAVIGATEURS

| Navigateur | MOV Support | MP4 Support |
|------------|-------------|-------------|
| Chrome | ⚠️ Partiel | ✅ Complet |
| Firefox | ⚠️ Partiel | ✅ Complet |
| Safari | ✅ Complet | ✅ Complet |
| Edge | ⚠️ Partiel | ✅ Complet |

**Recommandation**: Convertir en MP4 pour compatibilité maximale

---

## ✅ FICHIERS MODIFIÉS

1. **galerie.html** - Vidéos avec meilleurs attributs
2. **css/pages.css** - Styles vidéo améliorés
3. **js/main.js** - Gestion JavaScript des vidéos

---

## 🎬 PROCHAINES ÉTAPES

### **Option 1: Tester tel quel**
1. Démarrer serveur local
2. Ouvrir galerie.html
3. Vérifier console (F12)
4. Cliquer sur vidéos

### **Option 2: Convertir en MP4**
1. Convertir les 4 vidéos en MP4
2. Remplacer dans dossier videos/
3. Mettre à jour extensions dans galerie.html
4. Tester à nouveau

---

## 🆘 BESOIN D'AIDE ?

**Problème toujours présent ?**

1. Ouvrez la console navigateur (F12)
2. Notez les messages d'erreur
3. Vérifiez que vous utilisez un serveur local
4. Essayez la conversion MP4

---

**Projet Goupil-4000** | IUT de Mantes-en-Yvelines  
Janvier 2026

**Fichiers créés**:
- ✅ CORRECTION-VIDEOS.md (ce fichier)
- ✅ Code HTML, CSS et JS mis à jour
