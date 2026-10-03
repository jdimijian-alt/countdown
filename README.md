# Compte à rebours

Petite appli perso de compte à rebours vers des dates importantes (anniversaire, fête, départ à la retraite…), installable sur téléphone ou PC. HTML/JS pur, sans framework ni serveur.

## Ce qu'elle fait

- **Plusieurs compteurs** : à l'ouverture, celui dont la date est la plus proche s'affiche.
- **Plusieurs vues par compteur** : chaque vue a ses unités (ans, mois, jours, heures, minutes, secondes ; la plus grande unité cochée affiche le total) et son animation (Palettes, Rouleau, Sobre).
- **Transitions** entre vues et compteurs : glissement, fondu ou zoom, de 0,2 à 5 s, avec passage automatique à la vue suivante en option.
- **Apparence** : police, couleur du fond et du texte, message sous les chiffres.
- **Sons du temps qui passe** : pendule, horloge, gouttes d'eau, battement de cœur ou bip, au choix toujours, la dernière minute ou les 10 dernières secondes.
- **Le jour J** :
  - **animation** : feu d'artifice, confettis, ballons à éclater, bouquet final, soirée disco, ou tout enchaîné ;
  - **musique** : Marseillaise, Joyeux anniversaire, fanfare, achievement, Ode à la joie ou Aïda ;
  - **photo** : en polaroid ou en plein écran ;
  - **message** personnalisé ;
  - **durée** de la fête : jusqu'à minuit, 1 h ou 24 h.
- **Partage** : 📤 envoie un lien. Celui qui l'ouvre voit l'événement en plein écran, sans rien installer, avec un bouton pour créer son propre compteur.
- **Démo** « Nouvel An » prête au premier lancement.
- **Hors ligne** après la première visite.

## Utilisation

| Action | Comment |
|---|---|
| Vue suivante | Toucher l'écran, balayer ↑ ↓, flèches ↑ ↓ ou Espace |
| Compteur suivant | Balayer ← →, flèches ← → |
| Réglages | ⚙ en haut à droite |
| Partager | ⚙ → 📤 Partager sur le compteur |
| Éclater un ballon | Le toucher (animation « ballons ») |

Le son s'active au premier toucher de l'écran après chaque lancement : c'est une règle des navigateurs. Un bouton 🔇 le rappelle.

## Fichiers

```
index.html            l'appli (HTML + CSS + JS)
manifest.json         manifeste d'installation
sw.js                 service worker (hors ligne)
icon-192.png          icône
icon-512.png          icône (Android)
apple-touch-icon.png  icône iPhone
```

## Mise en ligne (GitHub Pages)

1. Pousser les 6 fichiers à la racine du dépôt.
2. *Settings → Pages* : branche `main`, dossier `/ (root)`.
3. Ouvrir l'adresse, puis *Partager → Sur l'écran d'accueil* (iPhone) ou *Installer* (Android, Chrome/Edge).

**À chaque mise à jour**, incrémenter `CACHE` dans `sw.js` (`rebours-v17` → `rebours-v18`…), sinon les téléphones gardent l'ancienne version.

## Test en local

```
python -m http.server 8000
```
puis http://localhost:8000. Le service worker ne marche pas en ouvrant le fichier directement.

## Bon à savoir

- **Données** : les compteurs et les photos restent sur l'appareil, rien ne part sur un serveur. Pas de synchronisation entre appareils, et vider les données du navigateur efface tout.
- **Lien partagé** : il contient tous les réglages du compteur, mais pas la photo.
- **Musiques** : la Marseillaise et Aïda sont transcrites de mémoire et peuvent être approximatives.

Joe Dimijian · octobre 2026
