// Gestion du menu hamburger
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileClose = document.getElementById('mobileClose');
            const menuOverlay = document.getElementById('menuOverlay');
            const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
            
            // Fonction pour ouvrir/fermer le menu
            function toggleMenu() {
                const isOpen = mobileMenu.classList.contains('active');
                
                if (!isOpen) {
                    // Ouvrir le menu
                    mobileMenu.classList.add('active');
                    menuOverlay.classList.add('active');
                    menuToggle.classList.add('active');
                    document.body.classList.add('menu-open');
                    menuToggle.setAttribute('aria-expanded', 'true');
                    mobileMenu.setAttribute('aria-hidden', 'false');
                } else {
                    // Fermer le menu
                    closeMenu();
                }
            }
            
            function closeMenu() {
                mobileMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                
                // Fermer tous les dropdowns
                dropdownToggles.forEach(toggle => {
                    const dropdown = toggle.closest('.mobile-dropdown');
                    dropdown.classList.remove('active');
                });
            }

            // ============================================
            // 7. APPLICATION INITIALIZATION
            // ============================================
            function switchTab(tabId) {
                // Update active tab button
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.tab === tabId) {
                        btn.classList.add('active');
                    }
                });
                
                // Show active tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
                
                // If switching to album manager, load albums
                if (tabId === 'album-manager') {
                    loadAlbums();
                }
            }   

            // Événements
            // Start the application when DOM is loaded
            
            menuToggle.addEventListener('click', toggleMenu);
            mobileClose.addEventListener('click', closeMenu);
            menuOverlay.addEventListener('click', closeMenu);
            
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    switchTab(btn.dataset.tab);
                });
            });

            // Gérer les dropdowns mobiles
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const dropdown = this.closest('.mobile-dropdown');
                    const isActive = dropdown.classList.contains('active');
                    
                    // Fermer tous les autres dropdowns
                    dropdownToggles.forEach(otherToggle => {
                        const otherDropdown = otherToggle.closest('.mobile-dropdown');
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                    
                    // Basculer l'état actuel
                    dropdown.classList.toggle('active', !isActive);
                });
            });
            
            // Fermer le menu en cliquant sur les liens
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', closeMenu);
            });
            
            // Fermer avec la touche Échap
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
            });
            
            // Fermer le menu lors du redimensionnement
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
            });
            
            // Navigation fluide
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#') return;
                    
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        e.preventDefault();
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Mettre à jour les liens actifs au scroll
            function updateActiveLink() {
                const sections = document.querySelectorAll('section[id]');
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        // Mettre à jour les liens desktop
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                        
                        // Mettre à jour les liens mobile
                        document.querySelectorAll('.mobile-nav-link').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }
            
            window.addEventListener('scroll', updateActiveLink);
            updateActiveLink(); // Initialiser
        });
