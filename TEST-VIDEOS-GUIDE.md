# 🎬 TEST DES VIDÉOS - MODE D'EMPLOI

**Date**: 21 janvier 2026 - 20:52

---

## ✅ CORRECTIONS APPLIQUÉES

3 fichiers modifiés pour résoudre le problème des vidéos :

1. **galerie.html** - HTML vidéos amélioré
2. **css/pages.css** - Styles vidéo optimisés
3. **js/main.js** - Gestion JavaScript des vidéos

---

## 🧪 TESTER LES VIDÉOS MAINTENANT

### **Méthode 1 : Page de test simplifiée** ⭐ RECOMMANDÉ

1. **Démarrer un serveur local** :
```bash
python -m http.server 8000
```

2. **Ouvrir la page de test** :
```
http://localhost:8000/test-videos.html
```

3. **Vérifier** :
   - ✅ Les 4 vidéos doivent afficher "Chargée avec succès"
   - ✅ Cliquer sur PLAY pour tester chaque vidéo
   - ✅ Ouvrir la console (F12) pour voir les logs

---

### **Méthode 2 : Page galerie complète**

1. **Serveur local** (si pas déjà fait) :
```bash
python -m http.server 8000
```

2. **Ouvrir la galerie** :
```
http://localhost:8000/galerie.html
```

3. **Scroller jusqu'à la section "Vidéos de Tests"**

4. **Cliquer sur chaque vidéo** pour la démarrer

---

## 🚨 SI LES VIDÉOS NE MARCHENT TOUJOURS PAS

### **Problème : Format MOV non supporté**

**Solution : Convertir en MP4**

#### **Option A : Convertisseur en ligne (facile)**

1. Aller sur : https://cloudconvert.com/mov-to-mp4
2. Uploader vos 4 vidéos MOV :
   - `test-usinage-bois-1.mov`
   - `test-usinage-bois-2eme-passe.mov`
   - `usinage-base-pilier.mov`
   - `usinage-liaison-pilier-fraise2T.mov`
3. Télécharger les 4 vidéos MP4 converties
4. Remplacer les fichiers dans le dossier `videos/`

#### **Option B : FFmpeg (avancé)**

```bash
cd videos/

ffmpeg -i test-usinage-bois-1.mov -c:v libx264 -c:a aac -movflags +faststart test-usinage-bois-1.mp4

ffmpeg -i test-usinage-bois-2eme-passe.mov -c:v libx264 -c:a aac -movflags +faststart test-usinage-bois-2eme-passe.mp4

ffmpeg -i usinage-base-pilier.mov -c:v libx264 -c:a aac -movflags +faststart usinage-base-pilier.mp4

ffmpeg -i usinage-liaison-pilier-fraise2T.mov -c:v libx264 -c:a aac -movflags +faststart usinage-liaison-pilier-fraise2T.mp4
```

5. **Mettre à jour les extensions dans galerie.html** :

Remplacer `.mov` par `.mp4` dans les balises `<source>`

---

## 📊 DIAGNOSTIC

### **Checklist de vérification**

✅ **Fichiers vidéo présents** :
```bash
ls -lh videos/
```

✅ **Serveur local actif** :
```bash
python -m http.server 8000
```

✅ **Console ouverte (F12)** :
- Chercher les messages de log
- Vérifier s'il y a des erreurs

✅ **Test avec test-videos.html** :
- Page dédiée au diagnostic
- Statut clair pour chaque vidéo

---

## 🎯 SOLUTION RAPIDE

### **Si vous êtes pressé**

1. **Ouvrir** : `test-videos.html` (fichier créé)
2. **Lancer** : `python -m http.server 8000`
3. **Naviguer** : http://localhost:8000/test-videos.html
4. **Vérifier** : Console + Statut des vidéos

**Si ça marche** ✅ : Les vidéos de la galerie marcheront aussi  
**Si ça marche pas** ❌ : Convertir en MP4

---

## 📁 FICHIERS CRÉÉS

1. **test-videos.html** ⭐ - Page de test dédiée
2. **CORRECTION-VIDEOS.md** - Documentation complète
3. **TEST-VIDEOS-GUIDE.md** - Ce fichier (guide rapide)

---

## 💡 POURQUOI CE PROBLÈME ?

### **Format MOV**
- Codec Apple QuickTime
- Support partiel dans navigateurs web
- Chrome/Firefox : ⚠️ Partiel
- Safari : ✅ Complet

### **Format MP4**
- Codec H.264 universel
- Support total dans tous navigateurs
- Chrome/Firefox/Safari/Edge : ✅ Complet

**Recommandation** : Toujours utiliser MP4 pour le web

---

## ✅ PROCHAINE ÉTAPE

**MAINTENANT** :
1. Ouvrir `test-videos.html`
2. Vérifier le statut des 4 vidéos
3. Si erreur → Convertir en MP4
4. Si succès → Tester `galerie.html`

---

## 🆘 BESOIN D'AIDE ?

**Messages de la console à chercher** :

✅ Succès :
```
✅ Test usinage bois (1ère passe) chargée - Durée: 15s
▶️ Test usinage bois (1ère passe) - Lecture démarrée
```

❌ Erreur :
```
❌ Test usinage bois (1ère passe) - Erreur: ...
⚠️ ATTENTION: Vous ouvrez le fichier directement (file://)
```

---

**Projet Goupil-4000** | IUT de Mantes-en-Yvelines  
Janvier 2026 🎬

**Fichiers disponibles** :
- ✅ test-videos.html (diagnostic)
- ✅ CORRECTION-VIDEOS.md (détails techniques)
- ✅ TEST-VIDEOS-GUIDE.md (guide rapide)
