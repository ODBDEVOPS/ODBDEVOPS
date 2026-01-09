// main.js - Fichier principal d'initialisation
// Import des dépendances (si utilisation de modules)
// import SidebarManager from './sidebar.js';
// import AnimationsManager from './animations.js';

// Configuration globale
const APP_CONFIG = {
    debugMode: false,
    animationsEnabled: true,
    sidebarConfig: {
        debugMode: false
    }
};

// Initialisation de l'application
class App {
    constructor() {
        this.sidebar = null;
        this.animations = null;
        this.isInitialized = false;
    }

    async init() {
        try {
            // Initialiser les polyfills si nécessaire
            this.initPolyfills();
            
            // Initialiser la sidebar
            this.initSidebar();
            
            // Initialiser les animations
            if (APP_CONFIG.animationsEnabled) {
                this.initAnimations();
            }
            
            // Initialiser les autres composants
            this.initComponents();
            
            // Gestion des événements globaux
            this.initGlobalEvents();
            
            this.isInitialized = true;
            
            console.log('Application initialisée avec succès');
            this.emitEvent('app:ready');
            
        } catch (error) {
            console.error('Erreur lors de l\'initialisation de l\'application:', error);
            this.emitEvent('app:error', { error });
        }
    }

    initPolyfills() {
        // Polyfill pour Element.closest
        if (!Element.prototype.closest) {
            Element.prototype.closest = function(s) {
                let el = this;
                do {
                    if (el.matches(s)) return el;
                    el = el.parentElement || el.parentNode;
                } while (el !== null && el.nodeType === 1);
                return null;
            };
        }

        // Polyfill pour Element.matches
        if (!Element.prototype.matches) {
            Element.prototype.matches = 
                Element.prototype.matchesSelector || 
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector || 
                Element.prototype.oMatchesSelector || 
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    const matches = (this.document || this.ownerDocument).querySelectorAll(s);
                    let i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;
                };
        }
    }

    initSidebar() {
        try {
            this.sidebar = new SidebarManager(APP_CONFIG.sidebarConfig);
            
            // Écouter les événements de la sidebar
            document.addEventListener('sidebar:open', () => {
                console.log('Sidebar ouverte');
                this.emitEvent('app:sidebar-opened');
            });
            
            document.addEventListener('sidebar:close', () => {
                console.log('Sidebar fermée');
                this.emitEvent('app:sidebar-closed');
            });
            
            if (APP_CONFIG.debugMode) {
                console.log('Sidebar initialisée:', this.sidebar);
            }
            
        } catch (error) {
            console.error('Erreur lors de l\'initialisation de la sidebar:', error);
        }
    }

    initAnimations() {
        try {
            this.animations = new AnimationsManager();
            this.animations.init();
            this.animations.initCTAAnimations();
            
            if (APP_CONFIG.debugMode) {
                console.log('Animations initialisées:', this.animations);
            }
            
        } catch (error) {
            console.error('Erreur lors de l\'initialisation des animations:', error);
        }
    }

    initComponents() {
        // Initialiser les tooltips
        this.initTooltips();
        
        // Initialiser les modals (si présentes)
        this.initModals();
        
        // Initialiser les formulaires
        this.initForms();
        
        // Initialiser le lazy loading
        this.initLazyLoading();
    }

    initTooltips() {
        const tooltips = document.querySelectorAll('[data-tooltip]');
        tooltips.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const tooltipText = e.target.dataset.tooltip;
                this.showTooltip(e, tooltipText);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    showTooltip(event, text) {
        // Créer l'élément tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: fixed;
            background: var(--metal-dark);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 0.9rem;
            z-index: 10000;
            pointer-events: none;
            border: 1px solid var(--primary);
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            transform: translate(-50%, -100%);
            white-space: nowrap;
        `;
        
        tooltip.style.left = `${event.clientX}px`;
        tooltip.style.top = `${event.clientY - 10}px`;
        
        document.body.appendChild(tooltip);
        
        // Mettre à jour la position
        event.target.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.clientX}px`;
            tooltip.style.top = `${e.clientY - 10}px`;
        });
        
        // Stocker la référence
        event.target._tooltip = tooltip;
    }

    hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    initModals() {
        // Initialisation des modals si présentes
        const modalTriggers = document.querySelectorAll('[data-modal]');
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modalId = trigger.dataset.modal;
                this.openModal(modalId);
            });
        });
        
        // Fermer les modals
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-close') || 
                e.target.classList.contains('modal-overlay')) {
                this.closeModal(e.target.closest('.modal'));
            }
        });
        
        // Touche Échap pour fermer les modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.active');
                if (openModal) {
                    this.closeModal(openModal);
                }
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    }

    initForms() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                // Validation basique
                if (this.validateForm(form)) {
                    await this.submitForm(form);
                }
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                this.showFieldError(field, 'Ce champ est requis');
            } else {
                this.clearFieldError(field);
            }
        });
        
        return isValid;
    }

    showFieldError(field, message) {
        const errorElement = field.nextElementSibling?.classList.contains('error-message') 
            ? field.nextElementSibling 
            : document.createElement('div');
        
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: var(--secondary);
            font-size: 0.9rem;
            margin-top: 5px;
        `;
        
        if (!field.nextElementSibling?.classList.contains('error-message')) {
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
        
        field.style.borderColor = 'var(--secondary)';
    }

    clearFieldError(field) {
        const errorElement = field.nextElementSibling?.classList.contains('error-message') 
            ? field.nextElementSibling 
            : null;
        
        if (errorElement) {
            errorElement.remove();
        }
        
        field.style.borderColor = '';
    }

    async submitForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Afficher l'état de chargement
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        try {
            // Simuler un envoi (remplacer par votre logique réelle)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Succès
            this.showNotification('Formulaire envoyé avec succès!', 'success');
            form.reset();
            
        } catch (error) {
            // Erreur
            this.showNotification('Une erreur est survenue', 'error');
            console.error('Erreur d\'envoi du formulaire:', error);
            
        } finally {
            // Restaurer le bouton
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const lazyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        lazyObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                lazyObserver.observe(img);
            });
        }
    }

    initGlobalEvents() {
        // Prévenir les comportements par défaut des liens vides
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
        
        // Gestion de la visibilité de la page
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.emitEvent('app:pause');
            } else {
                this.emitEvent('app:resume');
            }
        });
        
        // Détection du thème système
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDarkScheme.addEventListener('change', (e) => {
            this.emitEvent('app:theme-change', { isDark: e.matches });
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? 'var(--accent)' : 
                        type === 'error' ? 'var(--secondary)' : 
                        'var(--primary)'};
            color: white;
            border-radius: 4px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(notification);
        
        // Supprimer après 3 secondes
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    emitEvent(eventName, detail = {}) {
        document.dispatchEvent(new CustomEvent(eventName, { 
            detail: { ...detail, app: this } 
        }));
    }

    // API publique
    getSidebar() {
        return this.sidebar;
    }

    getAnimations() {
        return this.animations;
    }

    destroy() {
        // Nettoyage
        if (this.sidebar) {
            this.sidebar.reset();
        }
        
        if (this.animations) {
            this.animations.stopAll();
        }
        
        // Supprimer les écouteurs d'événements globaux
        window.removeEventListener('scroll', () => {});
        
        this.isInitialized = false;
        console.log('Application détruite');
    }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Créer l'instance de l'application
    window.app = new App();
    
    // Initialiser l'application
    window.app.init();
    
    // Exposer les méthodes globales
    window.openSidebar = () => window.app.getSidebar()?.open();
    window.closeSidebar = () => window.app.getSidebar()?.close();
    window.toggleSidebar = () => window.app.getSidebar()?.toggle();
});

// Gestion des erreurs globales
window.addEventListener('error', (event) => {
    console.error('Erreur globale:', event.error);
    
    // Envoyer l'erreur à un service de tracking (si configuré)
    if (typeof window.trackError === 'function') {
        window.trackError(event.error);
    }
});

// Export pour les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}
