// sidebar.js - Gestion de la sidebar à 3 niveaux

document.addEventListener('DOMContentLoaded', function() {
    // ========== CONFIGURATION ==========
    const CONFIG = {
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
        debugMode: false
    };

    // ========== INITIALISATION ==========
    let isSidebarOpen = false;
    let currentSubmenuLevel = 0;
    const menuStack = [];

    // Éléments DOM
    const elements = {
        sidebar: null,
        overlay: null,
        closeBtn: null,
        openBtn: null,
        hamburger: null,
        body: document.body
    };

    // Initialiser les éléments
    function initElements() {
        elements.sidebar = document.getElementById(CONFIG.sidebarId);
        elements.overlay = document.getElementById(CONFIG.overlayId);
        elements.closeBtn = document.querySelector(`.${CONFIG.closeBtnClass}`);
        elements.openBtn = document.querySelector(`.${CONFIG.openBtnClass}`);
        
        // Créer le bouton hamburger si non présent
        if (elements.openBtn && !elements.openBtn.querySelector('.hamburger')) {
            createHamburgerButton();
        }
        
        elements.hamburger = document.querySelector('.hamburger');
        
        if (CONFIG.debugMode) {
            console.log('Éléments initialisés:', elements);
            console.log('Configuration:', CONFIG);
        }
    }

    // ========== CRÉATION DU BOUTON HAMBURGER ==========
    function createHamburgerButton() {
        const hamburgerHTML = `
            <button class="hamburger" aria-label="Menu" aria-expanded="false">
                <span class="hamburger-line line-1"></span>
                <span class="hamburger-line line-2"></span>
                <span class="hamburger-line line-3"></span>
            </button>
        `;
        
        elements.openBtn.innerHTML = hamburgerHTML;
        elements.openBtn.classList.add('hamburger-container');
    }

    // ========== GESTION DE LA SIDEBAR ==========
    function openSidebar() {
        if (!elements.sidebar || isSidebarOpen) return;
        
        elements.sidebar.classList.add(CONFIG.activeClass);
        elements.overlay.classList.add(CONFIG.activeClass);
        elements.body.classList.add(CONFIG.bodyOverflowClass);
        
        if (elements.hamburger) {
            elements.hamburger.setAttribute('aria-expanded', 'true');
            elements.hamburger.classList.add('active');
        }
        
        isSidebarOpen = true;
        currentSubmenuLevel = 0;
        menuStack.length = 0;
        
        if (CONFIG.debugMode) console.log('Sidebar ouverte');
        
        // Émettre un événement personnalisé
        document.dispatchEvent(new CustomEvent('sidebar:open'));
    }

    function closeSidebar() {
        if (!elements.sidebar || !isSidebarOpen) return;
        
        elements.sidebar.classList.remove(CONFIG.activeClass);
        elements.overlay.classList.remove(CONFIG.activeClass);
        elements.body.classList.remove(CONFIG.bodyOverflowClass);
        
        if (elements.hamburger) {
            elements.hamburger.setAttribute('aria-expanded', 'false');
            elements.hamburger.classList.remove('active');
        }
        
        // Fermer tous les sous-menus ouverts
        closeAllSubmenus();
        
        isSidebarOpen = false;
        
        if (CONFIG.debugMode) console.log('Sidebar fermée');
        
        // Émettre un événement personnalisé
        document.dispatchEvent(new CustomEvent('sidebar:close'));
    }

    function toggleSidebar() {
        if (isSidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    // ========== GESTION DES SOUS-MENUS ==========
    function openSubmenu(submenu, parentItem = null) {
        if (!submenu) return;
        
        submenu.classList.add(CONFIG.activeClass);
        
        if (parentItem) {
            const arrow = parentItem.querySelector(`.${CONFIG.arrowClass}`);
            if (arrow) {
                arrow.style.transform = 'rotate(90deg)';
            }
            
            // Empiler le menu parent
            menuStack.push({
                submenu: submenu,
                parentItem: parentItem,
                level: currentSubmenuLevel
            });
        }
        
        currentSubmenuLevel++;
        
        if (CONFIG.debugMode) console.log('Sous-menu ouvert, niveau:', currentSubmenuLevel);
    }

    function closeSubmenu(submenu, parentItem = null) {
        if (!submenu) return;
        
        submenu.classList.remove(CONFIG.activeClass);
        
        if (parentItem) {
            const arrow = parentItem.querySelector(`.${CONFIG.arrowClass}`);
            if (arrow) {
                arrow.style.transform = '';
            }
        }
        
        currentSubmenuLevel = Math.max(0, currentSubmenuLevel - 1);
        
        if (CONFIG.debugMode) console.log('Sous-menu fermé, niveau:', currentSubmenuLevel);
    }

    function closeAllSubmenus() {
        const activeSubmenus = document.querySelectorAll(
            `.${CONFIG.submenuClass}.${CONFIG.activeClass}, .${CONFIG.subsubmenuClass}.${CONFIG.activeClass}`
        );
        
        activeSubmenus.forEach(submenu => {
            submenu.classList.remove(CONFIG.activeClass);
        });
        
        // Réinitialiser les flèches
        const arrows = document.querySelectorAll(`.${CONFIG.arrowClass}`);
        arrows.forEach(arrow => {
            arrow.style.transform = '';
        });
        
        // Vider la pile
        menuStack.length = 0;
        currentSubmenuLevel = 0;
        
        if (CONFIG.debugMode) console.log('Tous les sous-menus fermés');
    }

    function goBack() {
        if (menuStack.length === 0) return;
        
        const lastMenu = menuStack.pop();
        closeSubmenu(lastMenu.submenu, lastMenu.parentItem);
        
        if (CONFIG.debugMode) console.log('Retour au niveau précédent');
    }

    // ========== GESTION DES ÉVÉNEMENTS ==========
    function setupEventListeners() {
        // Ouvrir la sidebar
        if (elements.openBtn) {
            elements.openBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleSidebar();
            });
        }
        
        // Fermer la sidebar
        if (elements.closeBtn) {
            elements.closeBtn.addEventListener('click', closeSidebar);
        }
        
        if (elements.overlay) {
            elements.overlay.addEventListener('click', closeSidebar);
        }
        
        // Navigation des sous-menus
        const hasSubmenuItems = document.querySelectorAll(`.${CONFIG.hasSubmenuClass}`);
        hasSubmenuItems.forEach(item => {
            const link = item.querySelector('a');
            const submenu = item.querySelector(`.${CONFIG.submenuClass}, .${CONFIG.subsubmenuClass}`);
            
            if (link && submenu) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (!isSidebarOpen) return;
                    
                    openSubmenu(submenu, item);
                });
            }
        });
        
        // Boutons de retour
        const backButtons = document.querySelectorAll(`.${CONFIG.backBtnClass}`);
        backButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                goBack();
            });
        });
        
        // Fermer la sidebar lors du clic sur un lien simple
        const simpleLinks = document.querySelectorAll(`
            .menu-link:not(.${CONFIG.hasSubmenuClass} > .menu-link), 
            .submenu-item > a:not(.${CONFIG.hasSubmenuClass} > a)
        `);
        
        simpleLinks.forEach(link => {
            if (!link.closest(`.${CONFIG.hasSubmenuClass}`)) {
                link.addEventListener('click', closeSidebar);
            }
        });
        
        // Touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isSidebarOpen) {
                if (currentSubmenuLevel > 0) {
                    goBack();
                } else {
                    closeSidebar();
                }
            }
        });
        
        // Gestion du redimensionnement
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && isSidebarOpen) {
                closeSidebar();
            }
        });
    }

    // ========== ACCESSIBILITÉ ==========
    function setupAccessibility() {
        // Navigation au clavier dans la sidebar
        if (elements.sidebar) {
            elements.sidebar.addEventListener('keydown', function(e) {
                if (e.key === 'Tab' && isSidebarOpen) {
                    const focusableElements = elements.sidebar.querySelectorAll(
                        'a, button, [tabindex]:not([tabindex="-1"])'
                    );
                    
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    
                    // Boucler le focus à l'intérieur de la sidebar
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            });
        }
        
        // Fermer la sidebar si le focus sort
        document.addEventListener('focusin', function(e) {
            if (isSidebarOpen && elements.sidebar && !elements.sidebar.contains(e.target)) {
                const isOverlay = e.target === elements.overlay;
                const isOpenBtn = e.target.closest(`.${CONFIG.openBtnClass}`);
                
                if (!isOverlay && !isOpenBtn) {
                    closeSidebar();
                }
            }
        });
    }

    // ========== FONCTIONS PUBLIQUES ==========
    window.Sidebar = {
        open: openSidebar,
        close: closeSidebar,
        toggle: toggleSidebar,
        isOpen: () => isSidebarOpen,
        
        // Pour les développeurs
        debug: function() {
            console.log('=== SIDEBAR DEBUG ===');
            console.log('État:', isSidebarOpen ? 'Ouverte' : 'Fermée');
            console.log('Niveau actuel:', currentSubmenuLevel);
            console.log('Pile des menus:', menuStack);
            console.log('Éléments:', elements);
            console.log('===================');
        },
        
        // Réinitialiser
        reset: function() {
            closeSidebar();
            closeAllSubmenus();
            menuStack.length = 0;
            currentSubmenuLevel = 0;
            
            if (CONFIG.debugMode) {
                console.log('Sidebar réinitialisée');
            }
        }
    };

    // ========== INITIALISATION AU CHARGEMENT ==========
    function init() {
        try {
            initElements();
            setupEventListeners();
            setupAccessibility();
            
            if (CONFIG.debugMode) {
                console.log('Sidebar initialisée avec succès');
                // Exposer l'objet Sidebar globalement pour le débogage
                window.SidebarDebug = Sidebar;
            }
            
            // Émettre un événement d'initialisation
            document.dispatchEvent(new CustomEvent('sidebar:ready'));
            
        } catch (error) {
            console.error('Erreur lors de l\'initialisation de la sidebar:', error);
        }
    }

    // Démarrer l'initialisation
    init();

    // ========== OBSERVATEUR DE MUTATION ==========
    // Pour gérer les changements dynamiques du DOM
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    // Réattacher les événements si le DOM a changé
                    const newHasSubmenuItems = document.querySelectorAll(`.${CONFIG.hasSubmenuClass}`);
                    if (newHasSubmenuItems.length !== hasSubmenuItems.length) {
                        if (CONFIG.debugMode) console.log('DOM modifié, réattachement des événements');
                        setupEventListeners();
                    }
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
});

// ========== POLYFILLS POUR LES NAVIGATEURS ANCIENS ==========
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}
