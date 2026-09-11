# Portfolio UX — Alimatou Diagne

Site statique bilingue (FR/EN), mode clair/sombre, prêt pour GitHub Pages.

## Structure

```
index.html          → la page (contenu FR par défaut, bascule EN au clic)
styles.css           → design (thème clair/sombre via variables CSS)
script.js            → traductions, données des 17 projets, filtres, thèmes
assets/pdfs/         → les 17 études de cas complètes, en PDF
assets/cv/           → CV (Word + PDF) adapté pour des missions à distance
```

## Mettre le site en ligne sur GitHub Pages

1. Crée un nouveau dépôt sur GitHub, par ex. `portfolio` (public).
2. Mets **tout le contenu de ce dossier** (pas le dossier lui-même, son contenu) à la racine du dépôt :
   - `index.html`, `styles.css`, `script.js`, et le dossier `assets/`
3. Sur GitHub : **Settings → Pages → Branch: main → /(root) → Save**
4. Après 1–2 minutes, ton site est en ligne à :
   `https://<ton-nom-utilisateur>.github.io/portfolio/`
5. Remplace le lien `zadya22.github.io/portfolio` dans `index.html` (ligne du header) par l'URL réelle une fois connue, si elle diffère.

## Modifier le contenu plus tard

- **Textes / traductions** : tout est dans `script.js`, objet `I18N` (fr / en).
- **Projets** (titre, lien, PDF, résultat) : objet `PROJECTS` dans `script.js` — chaque entrée a une version `fr` et `en`.
- **Couleurs / polices** : variables en haut de `styles.css` (`:root` et `[data-theme="dark"]`).

## CV

Deux formats sont fournis dans `assets/cv/` :
- `Alimatou_Diagne_CV_EN.docx` — éditable
- `Alimatou_Diagne_CV_EN.pdf` — celui lié depuis le bouton "Télécharger le CV" du site

Remplace-le à tout moment en gardant le même nom de fichier, ou mets à jour le lien dans `index.html` si tu changes le nom.
