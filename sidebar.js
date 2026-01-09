// sidebar.js - Gestion principale de la sidebar
class SidebarManager {
    constructor(config = {}) {
        this.config = {
            sidebarId: 'sidebar',
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
            debugMode: false,
            ...config
        };

        this.isSidebarOpen = false;
        this.currentSubmenuLevel = 0;
        this.menuStack = [];
        
        this.elements = {
            sidebar: null,
            overlay: null,
            closeBtn: null,
            openBtn: null,
            hamburger: null,
            body: document.body
        };

        this.init();
    }

    init() {
        this.initElements();
        this.createHamburgerButton();
        this.setupEventListeners();
        this.setupAccessibility();
        
        if (this.config.debugMode) {
            console.log('SidebarManager initialisé:', this);
        }
    }

    initElements() {
        this.elements.sidebar = document.getElementById(this.config.sidebarId);
        this.elements.overlay = document.getElementById(this.config.overlayId);
        this.elements.closeBtn = document.querySelector(`.${this.config.closeBtnClass}`);
        this.elements.openBtn = document.querySelector(`.${this.config.openBtnClass}`);
        
        if (!this.elements.sidebar) {
            console.error(`Élément sidebar (#${this.config.sidebarId}) non trouvé`);
        }
    }

    createHamburgerButton() {
        if (!this.elements.openBtn) return;
        
        const hamburgerHTML = `
            <button class="hamburger" aria-label="Menu" aria-expanded="false">
                <span class="hamburger-line line-1"></span>
                <span class="hamburger-line line-2"></span>
                <span class="hamburger-line line-3"></span>
            </button>
        `;
        
        this.elements.openBtn.innerHTML = hamburgerHTML;
        this.elements.openBtn.classList.add('hamburger-container');
        this.elements.hamburger = this.elements.openBtn.querySelector('.hamburger');
    }

    open() {
        if (!this.elements.sidebar || this.isSidebarOpen) return;
        
        this.elements.sidebar.classList.add(this.config.activeClass);
        this.elements.overlay.classList.add(this.config.activeClass);
        this.elements.body.classList.add(this.config.bodyOverflowClass);
        
        if (this.elements.hamburger) {
            this.elements.hamburger.setAttribute('aria-expanded', 'true');
            this.elements.hamburger.classList.add('active');
        }
        
        this.isSidebarOpen = true;
        this.currentSubmenuLevel = 0;
        this.menuStack.length = 0;
        
        this.emitEvent('sidebar:open');
        
        if (this.config.debugMode) console.log('Sidebar ouverte');
    }

    close() {
        if (!this.elements.sidebar || !this.isSidebarOpen) return;
        
        this.elements.sidebar.classList.remove(this.config.activeClass);
        this.elements.overlay.classList.remove(this.config.activeClass);
        this.elements.body.classList.remove(this.config.bodyOverflowClass);
        
        if (this.elements.hamburger) {
            this.elements.hamburger.setAttribute('aria-expanded', 'false');
            this.elements.hamburger.classList.remove('active');
        }
        
        this.closeAllSubmenus();
        this.isSidebarOpen = false;
        
        this.emitEvent('sidebar:close');
        
        if (this.config.debugMode) console.log('Sidebar fermée');
    }

    toggle() {
        this.isSidebarOpen ? this.close() : this.open();
    }

    openSubmenu(submenu, parentItem = null) {
        if (!submenu) return;
        
        submenu.classList.add(this.config.activeClass);
        
        if (parentItem) {
            const arrow = parentItem.querySelector(`.${this.config.arrowClass}`);
            if (arrow) arrow.style.transform = 'rotate(90deg)';
            
            this.menuStack.push({
                submenu,
                parentItem,
                level: this.currentSubmenuLevel
            });
        }
        
        this.currentSubmenuLevel++;
        
        if (this.config.debugMode) console.log('Sous-menu ouvert, niveau:', this.currentSubmenuLevel);
    }

    closeSubmenu(submenu, parentItem = null) {
        if (!submenu) return;
        
        submenu.classList.remove(this.config.activeClass);
        
        if (parentItem) {
            const arrow = parentItem.querySelector(`.${this.config.arrowClass}`);
            if (arrow) arrow.style.transform = '';
        }
        
        this.currentSubmenuLevel = Math.max(0, this.currentSubmenuLevel - 1);
    }

    closeAllSubmenus() {
        const activeSubmenus = document.querySelectorAll(
            `.${this.config.submenuClass}.${this.config.activeClass}, 
             .${this.config.subsubmenuClass}.${this.config.activeClass}`
        );
        
        activeSubmenus.forEach(submenu => {
            submenu.classList.remove(this.config.activeClass);
        });
        
        document.querySelectorAll(`.${this.config.arrowClass}`).forEach(arrow => {
            arrow.style.transform = '';
        });
        
        this.menuStack.length = 0;
        this.currentSubmenuLevel = 0;
    }

    goBack() {
        if (this.menuStack.length === 0) return;
        
        const lastMenu = this.menuStack.pop();
        this.closeSubmenu(lastMenu.submenu, lastMenu.parentItem);
        
        if (this.config.debugMode) console.log('Retour au niveau précédent');
    }

    setupEventListeners() {
        // Ouvrir/fermer la sidebar
        if (this.elements.openBtn) {
            this.elements.openBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggle();
            });
        }
        
        if (this.elements.closeBtn) {
            this.elements.closeBtn.addEventListener('click', () => this.close());
        }
        
        if (this.elements.overlay) {
            this.elements.overlay.addEventListener('click', () => this.close());
        }
        
        // Navigation des sous-menus
        document.addEventListener('click', (e) => {
            const submenuLink = e.target.closest(`.${this.config.hasSubmenuClass} a`);
            if (submenuLink && this.isSidebarOpen) {
                e.preventDefault();
                e.stopPropagation();
                
                const parentItem = submenuLink.closest(`.${this.config.hasSubmenuClass}`);
                const submenu = parentItem.querySelector(`.${this.config.submenuClass}, .${this.config.subsubmenuClass}`);
                
                if (submenu) {
                    this.openSubmenu(submenu, parentItem);
                }
            }
            
            // Boutons de retour
            const backBtn = e.target.closest(`.${this.config.backBtnClass}`);
            if (backBtn) {
                e.preventDefault();
                e.stopPropagation();
                this.goBack();
            }
            
            // Liens simples
            const simpleLink = e.target.closest(`
                .menu-link:not(.${this.config.hasSubmenuClass} > .menu-link), 
                .submenu-item > a:not(.${this.config.hasSubmenuClass} > a)
            `);
            
            if (simpleLink && !simpleLink.closest(`.${this.config.hasSubmenuClass}`)) {
                this.close();
            }
        });
        
        // Touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isSidebarOpen) {
                this.currentSubmenuLevel > 0 ? this.goBack() : this.close();
            }
        });
        
        // Responsive
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isSidebarOpen) {
                this.close();
            }
        });
    }

    setupAccessibility() {
        if (!this.elements.sidebar) return;
        
        this.elements.sidebar.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && this.isSidebarOpen) {
                const focusableElements = this.elements.sidebar.querySelectorAll(
                    'a, button, [tabindex]:not([tabindex="-1"])'
                );
                
                if (focusableElements.length === 0) return;
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
        
        document.addEventListener('focusin', (e) => {
            if (this.isSidebarOpen && this.elements.sidebar && 
                !this.elements.sidebar.contains(e.target) &&
                e.target !== this.elements.overlay &&
                !e.target.closest(`.${this.config.openBtnClass}`)) {
                this.close();
            }
        });
    }

    emitEvent(eventName, detail = {}) {
        document.dispatchEvent(new CustomEvent(eventName, { 
            detail: { ...detail, sidebar: this } 
        }));
    }

    // API publique
    getState() {
        return {
            isOpen: this.isSidebarOpen,
            currentLevel: this.currentSubmenuLevel,
            menuStack: [...this.menuStack]
        };
    }

    debug() {
        console.log('=== SIDEBAR DEBUG ===');
        console.log('État:', this.getState());
        console.log('Éléments:', this.elements);
        console.log('Configuration:', this.config);
        console.log('===================');
    }

    reset() {
        this.close();
        this.closeAllSubmenus();
    }
}

// Export pour les modules ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SidebarManager;
}
