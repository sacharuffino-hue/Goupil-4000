# ⚡ QUICKSTART - Site Goupil-4000

## 🚀 Mise en Ligne en 3 Étapes (40 minutes)

---

## ÉTAPE 1️⃣ : Tester Localement (5 min)

### Action immédiate :
```
1. Double-cliquez sur index.html
2. Naviguez entre les pages
3. Testez le menu mobile (redimensionnez la fenêtre)
```

### ✅ Vérifications :
- [ ] Page d'accueil s'affiche correctement
- [ ] Navigation fonctionne (7 pages)
- [ ] Menu hamburger fonctionne sur mobile
- [ ] Animations au scroll fonctionnent
- [ ] Footer s'affiche en bas de toutes les pages

**Problème ?** → Vérifiez que tous les fichiers sont dans les bons dossiers

---

## ÉTAPE 2️⃣ : Ajouter Vos Médias (30 min)

### A. Convertir Images HEIC → JPG

**macOS** :
```
1. Ouvrir image avec Preview
2. Fichier > Exporter
3. Format : JPEG
4. Qualité : Meilleure
5. Enregistrer
```

**Windows** :
```
1. Utiliser https://www.apowersoft.fr/heic-to-jpg-converter
2. Uploader HEIC
3. Télécharger JPG
```

### B. Convertir Vidéos MOV → MP4

**Handbrake (gratuit)** :
```
1. Télécharger https://handbrake.fr
2. Ouvrir votre vidéo .MOV
3. Preset : "Web" > "Gmail Large 3 Minutes 720p30"
4. Start Encode
```

**ffmpeg (ligne de commande)** :
```bash
ffmpeg -i video.mov -c:v libx264 -c:a aac video.mp4
```

### C. Organiser les Fichiers

Créez ces dossiers et placez vos médias :

```
📁 Créer ces dossiers dans le site :

images/
├── assemblage/
│   ├── g3000-complet.jpg          ← Convertir "Goupil-3000-assemblée.JPG"
│   ├── structure-mecanique.jpg     ← Convertir "Assemblage G3000.HEIC"
│   └── guidages-lineaires.jpg      ← (autre photo si disponible)
│
├── electronique/
│   ├── boitier-temporaire.jpg      ← Convertir "Boitier élec temporaire.PNG"
│   └── cablage.jpg                 ← (autre photo si disponible)
│
└── fabrication/
    ├── base-pilier.jpg             ← Convertir "base pilier x4.HEIC"
    └── usinage-pieces.jpg          ← Convertir "base pilier dans machine.png"

videos/
├── test-usinage-bois-1.mp4         ← Convertir "test-usinage-G-3000-bois.MOV"
├── test-usinage-bois-2.mp4         ← Convertir "test-usinage-G-3000-bois-2eme passe.MOV"
├── usinage-base-pilier.mp4         ← Convertir "Usinage base pilier.MOV"
└── usinage-liaison-pilier.mp4      ← Convertir "vidéo usinage liaison pillier (fraise 2T).MOV"

docs/
├── cahier-charges-goupil4000.pdf   ← Copier "Conception Détaillée Fraiseuse Goupil-4000.pdf"
└── presentation-soutenance.pdf     ← Copier "Key Point Janvier (2).pdf"
```

### D. Tester Après Ajout

```
1. Actualisez index.html
2. Allez sur galerie.html
3. Vérifiez que photos/vidéos s'affichent
4. Testez lecture vidéos
```

---

## ÉTAPE 3️⃣ : Déployer sur GitHub (5 min)

### A. Créer Repository GitHub

```
1. Allez sur https://github.com/new
2. Nom : goupil-4000
3. Description : Site web officiel du projet Fraiseuse CNC Goupil-4000
4. Public
5. Ne PAS cocher "Initialize with README"
6. Create repository
```

### B. Pousser le Code

**Ouvrez un terminal dans le dossier du site** et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site Goupil-4000"

# Lier au repository GitHub (remplacez VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/goupil-4000.git

# Pousser le code
git branch -M main
git push -u origin main
```

**Note** : Si c'est votre premier push, GitHub demandera vos identifiants

### C. Activer GitHub Pages

```
1. Dans votre repository GitHub
2. Cliquez sur "Settings" (roue dentée)
3. Menu de gauche : "Pages"
4. Source : "Deploy from a branch"
5. Branch : "main" / "/ (root)"
6. Save
7. Attendez 2-3 minutes
```

### D. Accéder au Site En Ligne

✨ Votre site sera accessible sur :
```
https://VOTRE_USERNAME.github.io/goupil-4000/
```

Exemple : `https://sacharuffino.github.io/goupil-4000/`

---

## ✅ CHECKLIST FINALE

### Avant Déploiement
- [ ] J'ai testé le site localement
- [ ] J'ai converti les images HEIC → JPG
- [ ] J'ai converti les vidéos MOV → MP4
- [ ] J'ai placé les médias dans les bons dossiers
- [ ] J'ai copié les 2 PDFs dans `docs/`
- [ ] J'ai remplacé les liens `#` par de vrais liens
- [ ] J'ai remplacé l'email par le vrai

### Après Déploiement
- [ ] Le site est accessible en ligne
- [ ] Toutes les pages fonctionnent
- [ ] Les images s'affichent
- [ ] Les vidéos se lancent
- [ ] La navigation fonctionne
- [ ] Le site est responsive (mobile)

---

## 🆘 PROBLÈMES FRÉQUENTS

### ❌ Les images ne s'affichent pas

**Solution** :
```
1. Vérifiez les chemins : images/assemblage/photo.jpg (pas de majuscule)
2. Vérifiez l'extension : .jpg ou .png (pas .HEIC)
3. Actualisez la page (Ctrl+F5)
```

### ❌ Les vidéos ne se lancent pas

**Solution** :
```
1. Format doit être MP4 (pas MOV)
2. Convertir avec Handbrake
3. Vérifier taille < 20 MB
```

### ❌ GitHub Pages affiche page blanche

**Solution** :
```
1. Attendez 2-3 minutes après activation
2. Vérifiez que index.html est à la racine (pas dans un sous-dossier)
3. Videz le cache du navigateur (Ctrl+Shift+R)
```

### ❌ Git push échoue

**Solution** :
```
1. Vérifiez que vous êtes connecté à GitHub
2. Utilisez GitHub Desktop (plus facile) : https://desktop.github.com
3. Ou configurez SSH : https://docs.github.com/fr/authentication
```

---

## 📞 BESOIN D'AIDE ?

### Documentation
- 📖 `README.md` : Documentation technique
- 🚀 `GUIDE-UTILISATION.md` : Guide complet
- ✅ `PROJET-COMPLET.md` : Récapitulatif
- 📁 `INDEX-FICHIERS.md` : Index des fichiers

### Support en Ligne
- **GitHub Pages** : https://pages.github.com
- **Handbrake** : https://handbrake.fr
- **Stack Overflow** : https://stackoverflow.com
- **MDN Web Docs** : https://developer.mozilla.org/fr/

---

## 🎯 PROCHAINES ÉTAPES

### Court Terme (Cette Semaine)
1. ✅ Déployer le site
2. ✅ Partager avec encadrants IUT
3. ✅ Présenter à l'équipe

### Moyen Terme (1 Mois)
1. Ajouter screenshot GoupilSoft
2. Publier code GitHub
3. Ajouter articles blog avancement

### Long Terme (S6)
1. Documenter tests 4-5 axes
2. Ajouter portfolio pièces usinées
3. Créer tutoriels vidéo

---

## 🎉 SUCCÈS !

Une fois le site en ligne :

1. **Partagez le lien** :
   ```
   https://VOTRE_USERNAME.github.io/goupil-4000/
   ```

2. **Ajoutez au CV** :
   - "Création site web projet CNC"
   - "Déploiement GitHub Pages"
   - "HTML/CSS/JavaScript"

3. **Présentez en soutenance** :
   - Montrez le site pendant la présentation
   - Démontrez la partie GoupilSoft
   - Partagez le lien dans le rapport

---

## ⏱️ RÉCAPITULATIF TEMPS

| Étape | Durée | Difficulté |
|-------|-------|------------|
| Tester localement | 5 min | ⭐ Facile |
| Convertir médias | 30 min | ⭐⭐ Moyen |
| Déployer GitHub | 5 min | ⭐ Facile |
| **TOTAL** | **40 min** | ⭐⭐ Moyen |

---

## 💪 VOUS ÊTES PRÊT !

Vous avez tout ce qu'il faut :
- ✅ Site complet (7 pages)
- ✅ Design professionnel
- ✅ Documentation complète
- ✅ Guide pas-à-pas

**Action suivante** : Ouvrez `index.html` et commencez !

---

🚀 **Bon courage et félicitations pour ce magnifique projet Goupil-4000 !**

*Quickstart créé le 21 janvier 2026*  
*Site Goupil-4000 - IUT de Mantes-en-Yvelines*
