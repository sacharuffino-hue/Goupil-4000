# ▶️ VIDÉOS AUTOPLAY - GOUPIL-4000

**Date**: 21 janvier 2026 - 21:00  
**Modification**: Vidéos en lecture automatique

---

## ✅ MODIFICATIONS APPLIQUÉES

### **1. Attributs HTML ajoutés** (`galerie.html`)

```html
<video controls autoplay muted loop playsinline webkit-playsinline preload="auto">
```

**Nouveaux attributs** :
- ✅ `autoplay` - Lecture automatique au chargement
- ✅ `muted` - Son coupé au démarrage (requis pour autoplay)
- ✅ `loop` - Lecture en boucle
- ✅ `preload="auto"` - Préchargement complet de la vidéo

---

### **2. JavaScript amélioré** (`js/main.js`)

**Fonctionnalités ajoutées** :

✅ **Autoplay intelligent** - Lecture automatique quand la vidéo entre dans le viewport  
✅ **Observer IntersectionObserver** - Détecte quand la vidéo est visible  
✅ **Pause automatique** - Met en pause quand la vidéo sort du viewport  
✅ **Activation du son au clic** - `muted = false` au clic utilisateur  
✅ **Gestion des erreurs autoplay** - Capture les blocages navigateur

---

## 🎬 COMPORTEMENT DES VIDÉOS

### **Au chargement de la page**
1. Les vidéos se préchargent automatiquement
2. Quand une vidéo entre dans la zone visible → **Lecture automatique**
3. Son coupé par défaut (requis par les navigateurs)

### **Lors du scroll**
1. Vidéo visible → **Lecture en boucle**
2. Vidéo hors de vue → **Pause automatique**

### **Au clic utilisateur**
1. Premier clic → **Active le son** + Continue la lecture
2. Deuxième clic → **Met en pause**
3. Troisième clic → **Reprend la lecture**

---

## 🔊 SON DES VIDÉOS

### **Pourquoi le son est coupé au départ ?**

Les navigateurs modernes **bloquent l'autoplay avec son** pour éviter le spam sonore.

**Politique navigateurs** :
- ❌ `autoplay` + son activé = **Bloqué**
- ✅ `autoplay` + `muted` = **Autorisé**

### **Comment activer le son ?**

**L'utilisateur doit cliquer** sur la vidéo :
1. Clic sur la vidéo
2. Le son s'active automatiquement
3. Continue la lecture avec son

---

## 📊 COMPATIBILITÉ

| Fonctionnalité | Chrome | Firefox | Safari | Edge |
|----------------|--------|---------|--------|------|
| Autoplay muted | ✅ | ✅ | ✅ | ✅ |
| Loop | ✅ | ✅ | ✅ | ✅ |
| IntersectionObserver | ✅ | ✅ | ✅ | ✅ |
| Son au clic | ✅ | ✅ | ✅ | ✅ |

---

## 🎯 RÉSULTAT ATTENDU

### **Scénario 1 : Scroll jusqu'aux vidéos**
1. Vidéos visibles → Démarrent automatiquement (muettes)
2. Lecture en boucle
3. Clic → Son activé

### **Scénario 2 : Scroll rapide**
1. Vidéo entre dans viewport → Démarre
2. Vidéo sort du viewport → Pause
3. Vidéo revient dans viewport → Reprend

---

## 🧪 TESTER

### **Test 1 : Autoplay**
1. Ouvrir `galerie.html`
2. Scroller jusqu'à la section vidéos
3. ✅ Les vidéos doivent démarrer automatiquement (muettes)

### **Test 2 : Son**
1. Cliquer sur une vidéo
2. ✅ Le son doit s'activer

### **Test 3 : Scroll**
1. Scroller vers le bas (vidéo hors vue)
2. ✅ La vidéo doit se mettre en pause
3. Scroller vers le haut (vidéo visible)
4. ✅ La vidéo doit reprendre

---

## ⚙️ CONFIGURATION

### **Si vous voulez modifier le comportement**

#### **Désactiver la boucle**
Retirer `loop` dans `galerie.html` :
```html
<video controls autoplay muted playsinline>
```

#### **Garder le son activé** (non recommandé)
Retirer `muted` dans `galerie.html` :
```html
<video controls autoplay loop playsinline>
```
⚠️ **Attention** : L'autoplay sera bloqué !

#### **Modifier le seuil de visibilité**
Dans `js/main.js`, changer `threshold` :
```javascript
{ threshold: 0.5 }  // 50% visible (défaut)
{ threshold: 0.25 } // 25% visible (démarre plus tôt)
{ threshold: 1.0 }  // 100% visible (démarre plus tard)
```

---

## 📝 NOTES TECHNIQUES

### **IntersectionObserver**
Surveille quand un élément entre/sort du viewport :
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play(); // Visible → Play
        } else {
            entry.target.pause(); // Caché → Pause
        }
    });
}, { threshold: 0.5 });
```

### **Gestion des promesses**
```javascript
const playPromise = video.play();
if (playPromise !== undefined) {
    playPromise.then(() => {
        // Succès
    }).catch(error => {
        // Autoplay bloqué
    });
}
```

---

## ✅ FICHIERS MODIFIÉS

1. **galerie.html** - Attributs vidéo (`autoplay`, `muted`, `loop`)
2. **js/main.js** - Fonction `initVideoHandling()` améliorée

---

## 🚀 AVANTAGES

✅ **Expérience utilisateur améliorée** - Vidéos démarrent automatiquement  
✅ **Performance optimisée** - Pause hors viewport (économise ressources)  
✅ **Conformité navigateurs** - Respecte les politiques autoplay  
✅ **Contrôle utilisateur** - Clic pour activer le son  
✅ **Lecture en boucle** - Vidéos rejouent automatiquement

---

## 📊 RÉSUMÉ

```
Autoplay:     ✅ Activé (muted)
Loop:         ✅ Activé
Pause auto:   ✅ Hors viewport
Son au clic:  ✅ Activé
Compatible:   ✅ Tous navigateurs
```

---

## 🎉 C'EST FAIT !

Les vidéos se lancent maintenant **automatiquement** quand elles entrent dans la zone visible !

**Testez** : Ouvrez `galerie.html` et scrollez jusqu'aux vidéos 🎬

---

**Projet Goupil-4000** | IUT de Mantes-en-Yvelines  
Janvier 2026

**Modification** : Autoplay vidéos ✅
