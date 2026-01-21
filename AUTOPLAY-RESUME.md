# ⚡ VIDÉOS AUTOPLAY - RÉSUMÉ

## ✅ FAIT

**Vidéos modifiées** pour lecture automatique

---

## 🎬 NOUVEAUX ATTRIBUTS

```html
<video controls autoplay muted loop playsinline preload="auto">
```

- ✅ `autoplay` - Démarre automatiquement
- ✅ `muted` - Son coupé (requis navigateurs)
- ✅ `loop` - Lecture en boucle
- ✅ `preload="auto"` - Préchargement complet

---

## 🎯 COMPORTEMENT

### **Automatique**
1. Vidéo visible → **Démarre seule** (muette)
2. Hors vue → **Se met en pause**
3. Revient dans vue → **Reprend**

### **Au clic**
1. Clic → **Active le son**
2. Clic → **Pause/Play**

---

## 🧪 TEST

1. Ouvrir `galerie.html`
2. Scroller jusqu'aux vidéos
3. ✅ Démarrent automatiquement
4. Cliquer → Son activé

---

## 📂 MODIFIÉ

- `galerie.html` ← Attributs autoplay
- `js/main.js` ← IntersectionObserver

---

## 📚 DÉTAILS

Voir → `AUTOPLAY-VIDEOS.md`

---

**Goupil-4000** | Jan 2026 ▶️
