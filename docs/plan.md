```
obddevops-quantum-lab/
│
├── index.html                    # Fichier HTML principal
│
├── css/
│   ├── base/                     # Styles de base
│   │   ├── reset.css            # Reset/Normalize
│   │   ├── variables.css        # Variables CSS (couleurs, polices, etc.)
│   │   ├── typography.css       # Styles typographiques
│   │   └── utilities.css        # Classes utilitaires
│   │
│   ├── components/               # Composants réutilisables
│   │   ├── navigation.css       # Styles de navigation
│   │   ├── sections.css         # Styles génériques des sections
│   │   ├── buttons.css          # Styles des boutons
│   │   ├── cards.css            # Styles des cartes
│   │   ├── forms.css            # Styles des formulaires
│   │   └── gallery.css          # Styles de la galerie
│   │
│   ├── layout/                   # Organisation de la page
│   │   ├── header.css           # En-tête
│   │   ├── footer.css           # Pied de page
│   │   └── grid.css             # Système de grille
│   │
│   ├── sections/                 # Styles spécifiques aux sections
│   │   ├── home.css             # Section d'accueil
│   │   ├── odb-sections.css     # Sections ODB
│   │   ├── gnome-sections.css   # Sections GNOME
│   │   ├── gallery-section.css  # Section galerie
│   │   └── contact-section.css  # Section contact
│   │
│   ├── themes/                   # Thèmes et variantes
│   │   ├── dark-mode.css        # Mode sombre
│   │   └── animations.css       # Animations
│   │
│   └── main.css                  # Fichier principal qui importe tout
│
├── js/
│   ├── config/                   # Configurations
│   │   ├── navigation.config.js # Configuration de la navigation
│   │   ├── sections.config.js   # Configuration des sections
│   │   └── site.config.js       # Configuration générale du site
│   │
│   ├── builders/                 # Constructeurs de composants
│   │   ├── navigation.builder.js
│   │   ├── sections.builder.js
│   │   └── components.builder.js
│   │
│   ├── managers/                 # Gestionnaires
│   │   ├── navigation.manager.js
│   │   ├── sections.manager.js
│   │   └── theme.manager.js
│   │
│   ├── services/                 # Services externes
│   │   ├── api.service.js
│   │   └── form.service.js
│   │
│   ├── utils/                    # Utilitaires
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── constants.js
│   │
│   ├── events/                   # Gestion des événements
│   │   ├── navigation.events.js
│   │   ├── forms.events.js
│   │   └── scroll.events.js
│   │
│   └── app.js                    # Point d'entrée principal
│
├── assets/
│   ├── images/                   # Images
│   │   ├── logos/
│   │   ├── icons/
│   │   ├── gallery/
│   │   └── backgrounds/
│   │
│   ├── fonts/                    # Polices personnalisées
│   │   ├── custom-font.woff2
│   │   └── custom-font.woff
│   │
│   └── svg/                      # SVG et illustrations
│
├── data/                         # Données JSON
│   ├── navigation.json
│   ├── sections.json
│   └── gallery.json
│
├── docs/                         # Documentation
│   ├── README.md
│   ├── COMPONENTS.md
│   └── API.md
│
└── package.json                  # Dépendances npm (optionnel)
```