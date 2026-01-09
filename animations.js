// animations.js - Gestion des animations
class AnimationsManager {
    constructor() {
        this.particles = [];
        this.isAnimating = false;
        this.animations = {
            headerScroll: null,
            particles: null
        };
    }

    init() {
        this.initParticles();
        this.initScrollAnimations();
        this.initHoverEffects();
        
        console.log('AnimationsManager initialisé');
    }

    initParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        // Créer 30 particules
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Position aléatoire
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 3 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            particle.style.background = this.getRandomParticleColor();
            
            // Animation personnalisée
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 5;
            particle.style.animation = `particleFloat ${duration}s linear ${delay}s infinite`;
            
            particlesContainer.appendChild(particle);
            this.particles.push(particle);
        }
    }

    getRandomParticleColor() {
        const colors = [
            'var(--energy-blue)',
            'var(--accent)',
            'var(--primary)',
            'var(--secondary)',
            'var(--mechagnome)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    initScrollAnimations() {
        // Animation du header au scroll
        this.animations.headerScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', this.animations.headerScroll);
        
        // Animation des éléments au scroll
        this.initScrollReveal();
    }

    initScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Animation spécifique selon la classe
                    if (entry.target.classList.contains('timeline-item')) {
                        entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
                    }
                }
            });
        }, observerOptions);

        // Observer les éléments à animer
        document.querySelectorAll('.timeline-item, .tech-card, .character-card').forEach((el, index) => {
            el.dataset.delay = index * 0.1;
            observer.observe(el);
        });
    }

    initHoverEffects() {
        // Effets de hover pour les cartes
        document.addEventListener('mouseover', (e) => {
            const card = e.target.closest('.tech-card, .character-card, .timeline-item');
            if (card) {
                this.addHoverEffect(card);
            }
        });

        document.addEventListener('mouseout', (e) => {
            const card = e.target.closest('.tech-card, .character-card, .timeline-item');
            if (card) {
                this.removeHoverEffect(card);
            }
        });
    }

    addHoverEffect(element) {
        element.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        // Effet de brillance
        const shine = document.createElement('div');
        shine.className = 'shine-effect';
        shine.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 255, 255, 0.1), 
                transparent
            );
            transition: left 0.6s;
            pointer-events: none;
            border-radius: inherit;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(shine);
        
        setTimeout(() => {
            shine.style.left = '100%';
        }, 10);
        
        // Supprimer l'effet après l'animation
        setTimeout(() => {
            if (shine.parentElement) {
                shine.remove();
            }
        }, 600);
    }

    removeHoverEffect(element) {
        // Rétablir les styles par défaut
        setTimeout(() => {
            element.style.position = '';
            element.style.overflow = '';
        }, 400);
    }

    // Animation du bouton CTA
    initCTAAnimations() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.pulseAnimation(button);
            });
            
            button.addEventListener('click', (e) => {
                this.rippleEffect(e, button);
            });
        });
    }

    pulseAnimation(element) {
        element.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }

    rippleEffect(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    // Arrêter toutes les animations
    stopAll() {
        window.removeEventListener('scroll', this.animations.headerScroll);
        this.particles.forEach(particle => particle.remove());
        this.particles = [];
        this.isAnimating = false;
    }

    // Reprendre les animations
    resume() {
        if (!this.isAnimating) {
            this.init();
            this.isAnimating = true;
        }
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationsManager;
}
