// config.js - Configuration de l'application
const AppConfig = {
    // Configuration de la sidebar
    sidebar: {
        id: 'sidebar',
        overlayId: 'sidebar-overlay',
        closeBtnClass: 'sidebar-close',
        openBtnClass: 'mobile-toggle',
        hasSubmenuClass: 'has-submenu',
        submenuClass: 'submenu',
        subsubmenuClass: 'subsubmenu',
        backBtnClass: 'back-btn',
        arrowClass: 'arrow',
        activeClass: 'active',
        bodyOverflowClass: 'no-scroll',
        animationDuration: 400,
        debugMode: false
    },

    // Configuration des animations
    animations: {
        enabled: true,
        particleCount: 30,
        scrollThreshold: 0.1,
        hoverEffects: true,
        rippleEffect: true
    },

    // Configuration des transitions
    transitions: {
        default: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fast: 'all 0.2s ease',
        slow: 'all 0.6s ease'
    },

    // Points de rupture responsive
    breakpoints: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1440
    },

    // Chemins des ressources
    paths: {
        api: {
            base: '/api',
            endpoints: {
                search: '/search',
                submit: '/submit',
                analytics: '/analytics'
            }
        },
        assets: {
            images: '/assets/images',
            icons: '/assets/icons',
            sounds: '/assets/sounds'
        }
    },

    // Messages et textes
    messages: {
        errors: {
            formRequired: 'Ce champ est requis',
            formEmail: 'Email invalide',
            formPhone: 'Numéro de téléphone invalide',
            network: 'Erreur réseau. Veuillez réessayer.',
            generic: 'Une erreur est survenue'
        },
        success: {
            formSubmit: 'Formulaire envoyé avec succès',
            copy: 'Copié dans le presse-papier'
        },
        confirm: {
            delete: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
            leave: 'Des modifications non sauvegardées seront perdues.'
        }
    },

    // Paramètres de performance
    performance: {
        lazyLoadThreshold: 100,
        debounceDelay: 250,
        throttleDelay: 100,
        cacheDuration: 3600000 // 1 heure en ms
    },

    // Fonction pour obtenir la configuration actuelle
    getCurrent() {
        return {
            ...this,
            isMobile: window.innerWidth < this.breakpoints.sm,
            isTablet: window.innerWidth >= this.breakpoints.sm && 
                     window.innerWidth < this.breakpoints.lg,
            isDesktop: window.innerWidth >= this.breakpoints.lg,
            prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            prefersDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
        };
    },

    // Fonction pour mettre à jour la configuration
    update(newConfig) {
        Object.assign(this, newConfig);
        console.log('Configuration mise à jour:', this);
        return this;
    },

    // Fonction pour réinitialiser la configuration
    reset() {
        const defaultConfig = new AppConfig.constructor();
        Object.keys(defaultConfig).forEach(key => {
            if (typeof defaultConfig[key] !== 'function') {
                this[key] = defaultConfig[key];
            }
        });
        return this;
    }
};

// Version de l'application
AppConfig.version = '1.0.0';

// Environnement
AppConfig.environment = (() => {
    const hostname = window.location.hostname;
    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
        return 'development';
    } else if (hostname.includes('staging')) {
        return 'staging';
    } else {
        return 'production';
    }
})();

// Configuration spécifique par environnement
const environmentConfigs = {
    development: {
        debugMode: true,
        api: {
            base: 'http://localhost:3000/api'
        }
    },
    staging: {
        debugMode: true,
        api: {
            base: 'https://staging.example.com/api'
        }
    },
    production: {
        debugMode: false,
        api: {
            base: 'https://api.example.com'
        }
    }
};

// Appliquer la configuration d'environnement
const envConfig = environmentConfigs[AppConfig.environment];
if (envConfig) {
    AppConfig.update(envConfig);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AppConfig;
} else {
    window.AppConfig = AppConfig;
}
