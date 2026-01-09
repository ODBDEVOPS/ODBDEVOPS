// Menu mobile
        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Fermer le menu mobile en cliquant sur un lien
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Changement de style du header au scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Générer les particules
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.width = `${Math.random() * 4 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDelay = `${Math.random() * 20}s`;
            particle.style.background = i % 3 === 0 ? 'var(--energy-blue)' : i % 3 === 1 ? 'var(--accent)' : 'var(--primary)';
            particlesContainer.appendChild(particle);
        }
        
        // Animation des cartes au défilement
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observer les sections et cartes
        document.querySelectorAll('section, .timeline-item, .tech-card, .character-card, .map-container').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });
        
        // Gestion des interactions sur la carte
        document.querySelectorAll('.location').forEach(location => {
            location.addEventListener('click', function() {
                const title = this.getAttribute('title');
                alert(`${title} - Cliquez sur "En savoir plus" pour découvrir l'histoire de ce lieu.`);
            });
        });
        
        // Effet de typing sur le titre principal
        const heroTitle = document.querySelector('.hero h1');
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Démarrer l'effet typing après un délai
        setTimeout(typeWriter, 500);
        
        // Simulation de données pour les lieux
        const locations = {
            'gnomeregan': {
                name: 'Gnomeregan',
                description: 'Ancienne capitale gnome, maintenant partiellement irradiée. Le siège d\'une lutte continue entre les Gnomes exilés et les forces de Thermojoncteur.',
                status: 'Partiellement contrôlée par l\'Alliance'
            },
            'forgefer': {
                name: 'Forgefer',
                description: 'Capitale des Nains et refuge des Gnomes exilés après la chute de Gnomeregan. Centre de recherche et développement technologique.',
                status: 'Contrôlée par l\'Alliance'
            },
            'uldaman': {
                name: 'Uldaman',
                description: 'Ancienne installation des Titans où l\'on peut trouver des archives sur les origines des Gnomes et des artefacts titanesques.',
                status: 'Neutre'
            },
            'mecagone': {
                name: 'Mécagone',
                description: 'Cité des Mécagnomes, découverte dans Battle for Azeroth. Une civilisation de Gnomes mécaniques qui ont rejeté la chair organique.',
                status: 'Alliée à l\'Alliance'
            }
        };
        
        // Ajouter des infobulles aux lieux
        document.querySelectorAll('.location').forEach(location => {
            const locationClass = Array.from(location.classList).find(cls => cls !== 'location');
            if (locationClass && locations[locationClass]) {
                location.setAttribute('data-info', JSON.stringify(locations[locationClass]));
            }
        });

        // Ajoutez ce JavaScript à votre fichier
document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    const mobileToggle = document.querySelector('.mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const sidebarClose = document.querySelector('.sidebar-close');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    const backButtons = document.querySelectorAll('.back-btn');
    
    // Ouvrir la sidebar
    mobileToggle.innerHTML = `
        <button class="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;
    
    const hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        openSidebar();
    });
    
    // Fonction pour ouvrir la sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Fonction pour fermer la sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Fermer tous les sous-menus
        const activeSubmenus = document.querySelectorAll('.submenu.active, .subsubmenu.active');
        activeSubmenus.forEach(menu => {
            menu.classList.remove('active');
        });
    }
    
    // Fermer la sidebar
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Gérer les sous-menus
    hasSubmenuItems.forEach(item => {
        const link = item.querySelector('a');
        const arrow = item.querySelector('.arrow');
        const submenu = item.querySelector('.submenu, .subsubmenu');
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (submenu) {
                submenu.classList.add('active');
                
                // Animer la flèche
                if (arrow) {
                    arrow.style.transform = 'rotate(90deg)';
                }
            }
        });
    });
    
    // Gérer les boutons de retour
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const submenu = this.closest('.submenu, .subsubmenu');
            if (submenu) {
                submenu.classList.remove('active');
                
                // Réinitialiser la flèche
                const parentItem = submenu.closest('.has-submenu');
                if (parentItem) {
                    const arrow = parentItem.querySelector('.arrow');
                    if (arrow) {
                        arrow.style.transform = '';
                    }
                }
            }
        });
    });
    
    // Fermer la sidebar quand on clique sur un lien (sauf ceux avec sous-menus)
    const menuLinks = document.querySelectorAll('.menu-link:not(.has-submenu > .menu-link), .submenu-item > a:not(.has-submenu > a)');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.closest('.has-submenu')) {
                closeSidebar();
            }
        });
    });
    
    // Gérer la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    // Animation du bouton hamburger
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
