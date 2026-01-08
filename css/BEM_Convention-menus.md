Système de nommage pour menus : Convention BEM optimisée
Voici un guide complet pour nommer chaque type de menu avec précision, évitant tout conflit.

# 🏷️ Convention recommandée : BEM adapté aux menus
```
[Fonction]-[Type]-[Élément]--[Modificateur]
└── Préfixe contextuel
    └── Type de composant
        └── Partie spécifique
            └── État/variation
```
# 📋 Exemples concrets par type de menu
## 1. Menu de navigation principal (en-tête)
``` css
/* Bloc principal */
.c-nav-primary {}          /* Conteneur du menu principal */

/* Éléments */
.c-nav-primary__list {}    /* Liste */
.c-nav-primary__item {}    /* Élément de liste */
.c-nav-primary__link {}    /* Lien */

/* Modificateurs */
.c-nav-primary__item--current {}  /* Page active */
.c-nav-primary__item--has-dropdown {} /* Avec sous-menu */
.c-nav-primary__link--cta {}      /* Lien d'action principal */

```
## 2. Menu latéral (sidebar)
``` css
/* Bloc */
.c-nav-sidebar {}          /* Menu latéral */

/* Éléments */
.c-nav-sidebar__section {} /* Section thématique */
.c-nav-sidebar__heading {} /* Titre de section */
.c-nav-sidebar__sublist {} /* Sous-liste */
.c-nav-sidebar__sublink {} /* Lien secondaire */

/* Modificateurs */
.c-nav-sidebar--collapsed {} /* État réduit */
.c-nav-sidebar__item--level-2 {} /* Niveau de profondeur */

```
## 3. Menu contextuel (dropdowns)
``` css
/* Bloc */
.c-nav-context {}          /* Menu contextuel */

/* Éléments */
.c-nav-context__group {}   /* Groupe d'options */
.c-nav-context__divider {} /* Séparateur */
.c-nav-context__icon {}    /* Icône associée */

/* Modificateurs */
.c-nav-context--align-right {} /* Alignement */
.c-nav-context__item--danger {} /* Action critique */
```
## 4. Menu mobile
``` css
/* Bloc */
.c-nav-mobile {}           /* Menu mobile */

/* Éléments */
.c-nav-mobile__toggle {}   /* Bouton hamburger */
.c-nav-mobile__overlay {}  /* Fond semi-transparent */
.c-nav-mobile__close {}    /* Bouton fermeture */

/* Modificateurs */
.c-nav-mobile--expanded {} /* Menu ouvert */
.c-nav-mobile__item--mega {} /* Élément étendu */
```
## 🎨 Système de préfixes pour identification rapide
📁 Exemple complet d'organisation dans les fichiers
Préfixe	Signification	Exemple	Usage
c-nav-	Navigation principale	c-nav-primary	Menu structural
c-menu-	Menu contextuel	c-menu-user	Options utilisateur
c-tabs-	Navigation par onglets	c-tabs-profile	Navigation tabulaire
c-bread-	Fil d'Ariane	c-bread-product	Hiérarchie
c-pagi-	Pagination	c-pagi-results	Navigation pages
``` css
css/
├── components/
│   ├── _navigation.scss    # Base commune
│   ├── _nav-primary.scss   # Menu principal
│   ├── _nav-sidebar.scss   # Menu latéral
│   ├── _nav-mobile.scss    # Menu mobile
│   └── _nav-footer.scss    # Menu footer
```
## 2. Menu latéral (sidebar)
``` css

```
