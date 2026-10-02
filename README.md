# Compte à rebours

PWA de compte à rebours vers plusieurs dates cibles (anniversaire, fête, départ à la retraite…), installable comme une appli sur téléphone ou PC. HTML/JS pur, sans framework ni build.

## Fonctionnalités

- **Plusieurs compteurs** : à l'ouverture, l'appli affiche celui dont la date est la plus proche.
- **Réglages par compteur** : nom, date et heure, police (6 Google Fonts), couleur de fond, message affiché sous les chiffres.
- **Plusieurs vues par compteur**, chacune avec :
  - ses unités (ans, mois, jours, heures, minutes, secondes, combinables à volonté ; la plus grande unité cochée affiche le total, par ex. « heures » seule donne 19 532 h) ;
  - son animation des chiffres : Palettes (flip), Rouleau ou Sobre.
- **Transitions** entre compteurs et entre vues : glissement, fondu, zoom ou aucune, durée de 0,2 à 3 s.
- **Jour J** :
  - feu d'artifice avec sons d'explosion ;
  - musique synthétisée (La Marseillaise, Joyeux anniversaire ou aucune) ;
  - message personnalisable ;
  - durée de la fête : jusqu'à minuit, 1 h ou 24 h ; ensuite le compteur disparaît.
- **Aperçu de la fête** depuis le formulaire.
- **Hors ligne** après la première visite (service worker).

## Navigation

| Action | Tactile | Clavier |
|---|---|---|
| Compteur suivant / précédent | Balayer ← → | ← → |
| Vue suivante / précédente | Toucher l'écran, balayer ↑ ↓ | Espace, ↑ ↓ |
| Rejouer la musique (jour J) | Toucher l'écran | — |
| Réglages | ⚙ | — |

## Fichiers

```
index.html     appli complète (HTML + CSS + JS)
manifest.json  manifeste PWA
sw.js          service worker (cache hors ligne)
icon-192.png   icône
icon-512.png   icône (sert aussi d'icône Android « maskable »)
```

## Déploiement (GitHub Pages)

1. Pousser les 5 fichiers à la racine du dépôt.
2. *Settings → Pages* : source `main`, dossier `/ (root)`.
3. Ouvrir l'URL, puis *Ajouter à l'écran d'accueil* (mobile) ou l'icône d'installation dans la barre d'adresse (Chrome/Edge sur PC).

À chaque mise à jour, incrémenter `CACHE` dans `sw.js` (`rebours-v3` → `rebours-v4`…), sinon les appareils gardent l'ancienne version.

## Test en local

```
python -m http.server 8000
```
puis ouvrir http://localhost:8000. Le service worker ne fonctionne pas en ouvrant le fichier directement (`file://`).

## Limites connues

- **Stockage** : les données restent sur l'appareil, dans le `localStorage`, sans synchronisation entre appareils. Vider les données du navigateur efface les compteurs.
- **Son** : les navigateurs bloquent le son tant qu'on n'a pas touché l'écran. Si l'appli est ouverte pile au jour J, un bouton « 🔊 Lancer la musique » s'affiche.
- **Polices** : il faut une connexion la première fois pour les télécharger ; elles sont ensuite en cache.
- **La Marseillaise** : seule la première phrase est jouée.

## Données

Clé `localStorage` : `compteurs.v1`

```json
{
  "id": "…", "nom": "Retraite", "cible": "2030-06-30T17:00",
  "police": "Bebas Neue", "fond": "#1e3a8a", "message": "…avant la retraite !",
  "vues": [{ "unites": ["jour","heure","minute","seconde"], "style": "flip" }],
  "transition": { "type": "glissement", "duree": 600 },
  "fete": { "message": "", "musique": "marseillaise", "duree": "minuit" }
}
```
