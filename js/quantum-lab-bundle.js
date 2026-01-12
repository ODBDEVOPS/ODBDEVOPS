// ============================================
// OBDDEVOPs QUANTUM LAB - Bundle complet
// ============================================
// ============================================
// STYLES CSS 
// ============================================

const appStyles = `
/* Reset et styles de base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --secondary-color: #8b5cf6;
    --dark-bg: #0a0e17;
    --darker-bg: #050811;
    --light-bg: #1e293b;
    --text-color: #f8fafc;
    --text-muted: #94a3b8;
    --border-color: #334155;
    --success-color: #10b981;
    --error-color: #ef4444;
    --warning-color: #f59e0b;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
    color: var(--text-color);
    min-height: 100vh;
    overflow-x: hidden;
}

/* Hero Section - Background spécifique */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, 
        rgba(10, 14, 23, 0.9) 0%,
        rgba(30, 41, 59, 0.8) 50%,
        rgba(59, 130, 246, 0.1) 100%
    ), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad"><stop offset="0%" stop-color="%233b82f6" stop-opacity="0.1"/><stop offset="100%" stop-color="%230a0e17" stop-opacity="0"/></radialGradient></defs><circle cx="500" cy="500" r="500" fill="url(%23grad)"/></svg>');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    z-index: 1;
}

.hero-section .container {
    position: relative;
    z-index: 2;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 4rem 2rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    color: var(--text-muted);
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
    background: transparent;
    border-color: var(--border-color);
    color: var(--text-color);
}

.btn-secondary:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

/* Navigation */
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(10, 14, 23, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.nav-container.scrolled {
    background: rgba(10, 14, 23, 0.98);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.nav-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--text-color);
}

.logo-icon {
    font-size: 2rem;
    color: var(--primary-color);
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-title {
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1;
}

.logo-subtitle {
    font-size: 0.875rem;
    color: var(--text-muted);
}

/* Conteneur principal */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Sections générales */
.section {
    padding: 6rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.section-subtitle {
    font-size: 1.125rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto;
}

/* Formulaire de contact */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
}

.contact-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    font-weight: 600;
}

.form-control {
    width: 100%;
    padding: 0.875rem 1rem;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    color: var(--text-color);
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .contact-form .form-row {
        grid-template-columns: 1fr;
    }
    
    .nav-wrapper {
        padding: 1rem;
    }
}

/* Menu mobile */
.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    .primary-nav {
        display: none;
    }
}

/* Footer */
.main-footer {
    background: var(--darker-bg);
    padding: 3rem 0;
    border-top: 1px solid var(--border-color);
    margin-top: 4rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    color: var(--text-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.footer-section p {
    color: var(--text-muted);
    line-height: 1.6;
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.5rem;
}

.footer-links a {
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--primary-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--darker-bg);
}

::-webkit-scrollbar-thumb {
    background: var(--light-bg);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
}
`;

// Fonction pour injecter les styles
function injectStyles() {
    if (!document.getElementById('quantum-lab-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'quantum-lab-styles';
        styleElement.textContent = appStyles;
        document.head.appendChild(styleElement);
    }
}

// Configuration de navigation
const navigationConfig = {
    logo: {
        icon: 'fas fa-atom',
        title: 'OBDDEVOPs',
        subtitle: 'QUANTUM LAB',
        mobileTitle: 'CSS INNOVATION LAB'
    },
    
    menuItems: [
        {
            type: 'link',
            id: 'home',
            href: '#home',
            icon: 'fas fa-home',
            text: 'Accueil',
            active: true,
            mobile: true
        },
        {
            type: 'dropdown',
            id: 'asc',
            text: 'ASC',
            icon: 'fas fa-globe',
            mobile: true,
            sections: [
                {
                    title: 'Exploration',
                    items: [
                        { id: 'ASC1', href: '#ASC1', icon: 'fas fa-galactic-republic', text: 'ASC1' },
                        { id: 'ASC1', href: '#ODB2', icon: 'fas fa-cloud', text: 'ASC' },
                        { id: 'ASC1', href: '#ODB3', icon: 'fas fa-bolt', text: 'ASC' },
                        { id: 'ASC1', href: '#list', icon: 'fas fa-bolt', text: 'ASC' }
                    ]
                },
                {
                    title: 'Systèmes',
                    items: [
                        { id: 'ASC1', href: '#ODB4', icon: 'fas fa-star-and-crescent', text: 'ASC' },
                        { id: 'ASC1', href: '#ODB5', icon: 'fas fa-globe-americas', text: 'ASC' },
                        { id: 'ASC1', href: '#ODB6', icon: 'fas fa-circle-notch', text: 'ASC' }
                    ]
                }
            ]
        },
        // ... items existants
    {
        type: 'link',
        id: 'stats',
        href: '#stats',
        icon: 'fas fa-chart-line',
        text: 'Statistiques',
        mobile: true
    },
    {
        type: 'link',
        id: 'features',
        href: '#features',
        icon: 'fas fa-cogs',
        text: 'Fonctionnalités',
        mobile: true
    },
    {
        type: 'link',
        id: 'data',
        href: '#data',
        icon: 'fas fa-table',
        text: 'Données',
        mobile: true
    },
        {
            type: 'link',
            id: 'gallery',
            href: '#gallery',
            icon: 'fas fa-images',
            text: 'Galerie',
            mobile: true
        },
        {
            type: 'link',
            id: 'contact',
            href: '#contact',
            icon: 'fas fa-rocket',
            text: 'Contact',
            mobile: true
        },
        // ... liens existants ...
    {
        type: 'link',
        id: 'team',
        href: '#team',
        icon: 'fas fa-users',
        text: 'Équipe',
        mobile: true
    },
    {
        type: 'link',
        id: 'pricing',
        href: '#pricing',
        icon: 'fas fa-tags',
        text: 'Tarifs',
        mobile: true
    },
    {
        type: 'link',
        id: 'process',
        href: '#process',
        icon: 'fas fa-cogs',
        text: 'Processus',
        mobile: true
    },
    {
        type: 'dropdown',
        id: 'more',
        text: 'Plus',
        icon: 'fas fa-ellipsis-h',
        mobile: true,
        sections: [
            {
                title: 'Informations',
                items: [
                    { id: 'faq', href: '#faq', icon: 'fas fa-question-circle', text: 'FAQ' },
                    { id: 'testimonials', href: '#testimonials', icon: 'fas fa-comments', text: 'Témoignages' },
                    { id: 'partners', href: '#partners', icon: 'fas fa-handshake', text: 'Partenaires' }
                ]
            }
        ]
    }
    ],
    
    socialLinks: [
        {
            id: 'github',
            href: 'https://github.com',
            icon: 'fab fa-github',
            label: 'GitHub',
            mobile: true
        },
        {
            id: 'twitter',
            href: 'https://twitter.com',
            icon: 'fab fa-twitter',
            label: 'Twitter',
            mobile: true
        },
        {
            id: 'linkedin',
            href: 'https://linkedin.com',
            icon: 'fab fa-linkedin',
            label: 'LinkedIn',
            mobile: true
        }
    ]
};

// Configuration des sections
const sectionsConfig = {
    home: {
        id: 'home',
        type: 'hero',
        title: 'Bienvenue au Quantum Lab',
        subtitle: 'Explorez les frontières du développement quantique',
        className: 'hero-section',
        content: {
            buttons: [
                { type: 'primary', text: 'Commencer l\'exploration', href: '#contact', icon: 'fas fa-rocket' },
                { type: 'secondary', text: 'Voir nos projets', href: '#gallery', icon: 'fas fa-eye' }
            ]
        }
    },
    ASC1: {
        id: 'ASC1',
        type: 'hero',
        title: 'Bienvenue au Quantum Lab - ASC1',
        subtitle: 'Explorez les frontières du développement quantique',
        className: 'hero-section',
        content: {
            buttons: [
                { type: 'primary', text: 'Commencer l\'exploration', href: '#contact', icon: 'fas fa-rocket' },
                { type: 'secondary', text: 'Voir nos projets', href: '#gallery', icon: 'fas fa-eye' }
            ]
        }
    },
    ASC2: {
        id: 'ASC2',
        type: 'hero',
        title: 'Bienvenue au Quantum Lab - Ressources ASC2',
        subtitle: 'Explorez les frontières du développement quantique',
        className: 'hero-section',
        content: {
            buttons: [
                { type: 'primary', text: 'Commencer l\'exploration', href: '#contact', icon: 'fas fa-rocket' },
                { type: 'secondary', text: 'Voir nos projets', href: '#gallery', icon: 'fas fa-eye' }
            ]
        }
    },
    // Ajoutez ces configurations après la section 'contact'

    stats: {
        id: 'stats',
        type: 'stats',
        title: 'NOTRE IMPACT',
        subtitle: 'Chiffres clés de notre innovation',
        className: 'section stats-section',
        content: {
            stats: [
                { number: '99.9%', label: 'Taux de succès' },
                { number: '150+', label: 'Projets réalisés' },
                { number: '24/7', label: 'Support technique' },
                { number: '50K+', label: 'Utilisateurs actifs' }
            ]
        }
    },

    features: {
        id: 'features',
        type: 'grid',
        title: 'NOS FONCTIONNALITÉS',
        subtitle: 'Découvrez nos technologies de pointe',
        className: 'section',
        content: {
            cards: [
                {
                    icon: 'fas fa-brain',
                    title: 'Intelligence Quantique',
                    description: 'Algorithmes quantiques pour résoudre des problèmes complexes'
                },
                {
                    icon: 'fas fa-shield-alt',
                    title: 'Sécurité Avancée',
                    description: 'Cryptographie post-quantique et protection des données'
                },
                {
                    icon: 'fas fa-bolt',
                    title: 'Performance Extrême',
                    description: 'Calculs parallèles et accélération matérielle'
                }
            ]
        }
    },

    about: {
        id: 'about',
        type: 'two-column',
        title: 'À PROPOS',
        subtitle: 'Notre vision et notre mission',
        className: 'section',
        content: {
            left: {
                title: 'Repousser les limites du possible',
                paragraphs: [
                    'Le Quantum Lab est un centre d\'excellence dédié à l\'innovation quantique.',
                    'Nous combinons expertise technique et vision futuriste pour créer des solutions révolutionnaires.',
                    'Notre équipe d\'experts travaille sans relâche pour transformer les concepts quantiques en réalité.'
                ],
                button: { text: 'En savoir plus', href: '#contact', icon: 'fas fa-arrow-right' }
            },
            right: {
                image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop'
            }
        }
    },

    timeline: {
        id: 'timeline',
        type: 'timeline',
        title: 'NOTRE PARCOURS',
        subtitle: 'Les étapes clés de notre évolution',
        className: 'section',
        content: {
            items: [
                {
                    date: '2022 Q1',
                    title: 'Fondation',
                    description: 'Création du Quantum Lab avec une équipe de 5 chercheurs'
                },
                {
                    date: '2022 Q4',
                    title: 'Premier prototype',
                    description: 'Développement de notre premier calculateur quantique'
                },
                {
                    date: '2023 Q2',
                    title: 'Expansion',
                    description: 'Ouverture de deux nouveaux centres de recherche'
                },
                {
                    date: '2024 Q1',
                    title: 'Innovation',
                    description: 'Publication de 3 brevets et lancement de la plateforme'
                }
            ]
        }
    },

    dataTable: {
        id: 'data',
        type: 'table',
        title: 'DONNÉES & MÉTRIQUES',
        subtitle: 'Vue d\'ensemble de nos performances',
        className: 'section',
        content: {
            headers: ['Projet', 'Statut', 'Avancement', 'Équipe', 'Date'],
            rows: [
                ['Quantum Compute', 'Active', '85%', '5 membres', '15/03/2024'],
                ['AI Integration', 'Active', '70%', '3 membres', '10/02/2024'],
                ['Security Audit', 'Pending', '30%', '2 membres', '01/04/2024'],
                ['Cloud Migration', 'Active', '95%', '4 membres', '20/01/2024'],
                ['API Development', 'Active', '60%', '3 membres', '05/03/2024']
            ]
        }
    },
    // Ajoutez ces configurations après vos sections existantes

team: {
    id: 'team',
    type: 'team',
    title: 'NOTRE ÉQUIPE',
    subtitle: 'Rencontrez les experts derrière l\'innovation',
    className: 'section team-section',
    content: {
        members: [
            {
                name: 'Dr. Sarah Chen',
                role: 'Lead Quantique',
                description: 'PhD en Physique Quantique, 10+ ans d\'expérience',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop',
                social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#'
                }
            },
            {
                name: 'Alexandre Dubois',
                role: 'Ingénieur DevOps',
                description: 'Spécialiste en infrastructure cloud et sécurité',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400&auto=format&fit=crop',
                social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#'
                }
            },
            {
                name: 'Marie Laurent',
                role: 'Architecte Logicielle',
                description: 'Expert en systèmes distribués et microservices',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop',
                social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#'
                }
            },
            {
                name: 'Thomas Moreau',
                role: 'Data Scientist',
                description: 'Spécialiste en machine learning et analytics',
                image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&auto=format&fit=crop',
                social: {
                    linkedin: '#',
                    twitter: '#',
                    github: '#'
                }
            }
        ]
    }
},

pricing: {
    id: 'pricing',
    type: 'pricing',
    title: 'NOS OFFRES',
    subtitle: 'Des solutions adaptées à chaque besoin',
    className: 'section pricing-section',
    content: {
        plans: [
            {
                title: 'Starter',
                price: '49€',
                period: '/mois',
                featured: false,
                features: [
                    'Accès aux outils basiques',
                    'Support technique 9h-18h',
                    '5 projets simultanés',
                    '10GB de stockage',
                    'API limitée'
                ],
                button: { text: 'Commencer', href: '#contact' }
            },
            {
                title: 'Pro',
                price: '99€',
                period: '/mois',
                featured: true,
                features: [
                    'Tous les outils avancés',
                    'Support 24/7',
                    '20 projets simultanés',
                    '100GB de stockage',
                    'API complète',
                    'Accès early beta'
                ],
                button: { text: 'Essayer gratuitement', href: '#contact' }
            },
            {
                title: 'Enterprise',
                price: '299€',
                period: '/mois',
                featured: false,
                features: [
                    'Solutions personnalisées',
                    'Support prioritaire',
                    'Projets illimités',
                    '1TB de stockage',
                    'SLA 99.9%',
                    'Formation dédiée'
                ],
                button: { text: 'Contactez-nous', href: '#contact' }
            }
        ]
    }
},

testimonials: {
    id: 'testimonials',
    type: 'testimonials',
    title: 'ILS NOUS FONT CONFIANCE',
    subtitle: 'Découvrez ce que nos clients disent de nous',
    className: 'section testimonials-section',
    content: {
        testimonials: [
            {
                content: 'Le Quantum Lab a révolutionné notre façon de travailler. L\'équipe est exceptionnelle !',
                author: {
                    name: 'Pierre Martin',
                    role: 'CTO, TechCorp',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop'
                }
            },
            {
                content: 'Une plateforme incroyablement puissante. Les gains de productivité sont impressionnants.',
                author: {
                    name: 'Sophie Bernard',
                    role: 'Lead Dev, InnovateCo',
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop'
                }
            },
            {
                content: 'Le support technique est réactif et compétent. Une vraie valeur ajoutée.',
                author: {
                    name: 'Lucas Dubois',
                    role: 'CEO, DataSystems',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop'
                }
            }
        ]
    }
},

process: {
    id: 'process',
    type: 'process',
    title: 'NOTRE PROCESSUS',
    subtitle: 'Comment nous travaillons pour assurer votre succès',
    className: 'section',
    content: {
        steps: [
            {
                number: '01',
                title: 'Analyse',
                description: 'Étude approfondie de vos besoins et objectifs'
            },
            {
                number: '02',
                title: 'Conception',
                description: 'Design des solutions les plus adaptées'
            },
            {
                number: '03',
                title: 'Développement',
                description: 'Implémentation avec les meilleures pratiques'
            },
            {
                number: '04',
                title: 'Livraison',
                description: 'Déploiement et support continu'
            }
        ]
    }
},

faq: {
    id: 'faq',
    type: 'faq',
    title: 'QUESTIONS FRÉQUENTES',
    subtitle: 'Trouvez rapidement les réponses à vos questions',
    className: 'section faq-section',
    content: {
        questions: [
            {
                question: 'Quelle est la durée d\'implémentation ?',
                answer: 'La durée varie selon la complexité du projet, généralement entre 2 et 8 semaines.'
            },
            {
                question: 'Proposez-vous une période d\'essai ?',
                answer: 'Oui, nous offrons 14 jours d\'essai gratuit pour toutes nos offres.'
            },
            {
                question: 'Quelle est votre politique de support ?',
                answer: 'Support 24/7 pour les offres Pro et Enterprise, 9h-18h pour Starter.'
            },
            {
                question: 'Puis-je migrer depuis une autre plateforme ?',
                answer: 'Absolument, notre équipe vous accompagne dans la migration.'
            }
        ]
    }
},

partners: {
    id: 'partners',
    type: 'partners',
    title: 'NOS PARTENAIRES',
    subtitle: 'Ils nous font confiance pour innover ensemble',
    className: 'section partners-section',
    content: {
        partners: [
            { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
            { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
            { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
            { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
            { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/fr/0/0e/Nvidia_logo.svg' }
        ]
    }
},

newsletter: {
    id: 'newsletter',
    type: 'newsletter',
    title: 'RESTEZ INFORMÉ',
    subtitle: 'Inscrivez-vous à notre newsletter pour les dernières innovations',
    className: 'section newsletter-section',
    content: {
        title: 'Ne ratez aucune innovation',
        description: 'Recevez chaque mois les dernières avancées quantiques, des études de cas exclusives et des invitations à nos webinars.',
        placeholder: 'Votre adresse email',
        buttonText: 'S\'inscrire'
    }
},
    contact: {
        id: 'contact',
        type: 'contact',
        title: 'CONTACTEZ NOTRE ÉQUIPE',
        subtitle: 'Prêt à repousser les limites du numérique avec nous ?',
        className: 'section contact-section',
        content: {
            layout: 'split',
            form: {
                fields: [
                    { type: 'text', name: 'name', label: 'Nom complet', placeholder: 'Votre nom', required: true },
                    { type: 'email', name: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
                    { type: 'textarea', name: 'message', label: 'Message', placeholder: 'Votre message...', rows: 5, required: true }
                ],
                submitText: 'Envoyer le message',
                submitIcon: 'fas fa-paper-plane'
            }
        }
    }
};

// Classes utilitaires
class Helpers {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    // Throttle pour limiter la fréquence d'exécution
    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    // Validation d'email
    static isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Formatage de date
    static formatDate(date, format = 'fr-FR') {
        return new Date(date).toLocaleDateString(format, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Copier dans le presse-papier
    static copyToClipboard(text) {
        return navigator.clipboard.writeText(text);
    }
    
    // Télécharger un fichier
    static downloadFile(content, fileName, type = 'text/plain') {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    // Générer un ID unique
    static generateId(prefix = 'id') {
        return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    // Formatage de nombre
    static formatNumber(num, options = {}) {
        return new Intl.NumberFormat('fr-FR', options).format(num);
    }
    // Récupérer les paramètres d'URL
    static getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        return Object.fromEntries(params.entries());
    }
    
    // Animation de compteur
    static animateCounter(element, target, duration = 1000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    // Toggle d'élément
    static toggleElement(element, className = 'active') {
        element.classList.toggle(className);
    }
    
    // Récupérer la taille de l'écran
    static getScreenSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth < 768,
            isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
            isDesktop: window.innerWidth >= 1024
        };
    }
    
    // Observer les changements de taille d'écran
    static onResize(callback) {
        window.addEventListener('resize', Helpers.debounce(callback, 250));
    }
    
    static getTheme() {
        return localStorage.getItem('theme') || 'dark';
    }
    
    static setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    static storage = {
        set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
        get: (key) => {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        }
    };
}

// Animations
class Animations {
    // Initialisation des étoiles
    static initStars(containerId = 'stars-container') {
        const starsContainer = document.getElementById(containerId);
        if (!starsContainer) {
            console.error(`Container #${containerId} non trouvé`);
            return;
        }
        
        // Effacer le contenu existant
        starsContainer.innerHTML = '';
        
        const starCount = 200;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'stars-layer';
            
            // Position aléatoire
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1;
            const delay = Math.random() * 3;
            
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDelay = `${delay}s`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // Animation des particules sur canvas (version alternative)
    static initCanvasParticles(canvasId = 'particles-canvas') {
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
            console.error(`Canvas #${canvasId} non trouvé`);
            return;
        }
        
        const ctx = canvas.getContext('2d');
        
        // Redimensionnement du canvas
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Configuration des particules
        const particles = [];
        const particleCount = 100;
        
        // Création des particules
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.2})`
            });
        }
        
        // Animation des particules
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                // Mise à jour de la position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Rebond sur les bords
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
                
                // Dessin de la particule
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                
                // Connexions entre particules
                particles.forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance/100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animateParticles);
        }
        
        animateParticles();
    }

    // Particules canvas
    static initParticles(canvasId = 'particles-canvas') {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 100;
        
        // Redimensionnement
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        // Classe particule
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `rgba(59, 130, 246, ${Math.random()})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Initialisation
        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        // Animation
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let particle of particles) {
                particle.update();
                particle.draw();
                
                // Lignes entre particules proches
                for (let other of particles) {
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        // Événements
        resize();
        init();
        animate();
        window.addEventListener('resize', () => {
            resize();
            init();
        });
    }
    
    // Effet de parallaxe
    static initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.getAttribute('data-parallax-speed')) || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Animation de rotation 3D
    static init3DRotate(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 20;
            const rotateX = ((centerY - y) / centerY) * 20;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            element.style.transition = 'transform 0.5s ease';
        });
    }
    
    // Effet de brillance sur survol
    static initShineEffect(selector = '.shine-effect') {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                element.style.setProperty('--mouse-x', `${x}px`);
                element.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    static showLoader(message = 'Chargement...') {
        const loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner">
                    <div class="loader-circle"></div>
                </div>
                <p class="loader-text">${message}</p>
            </div>
        `;
        
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 14, 23, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(loader);
    }
    
    static hideLoader() {
        const loader = document.getElementById('global-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
    }
    
    static typewriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
}

// Builders
class NavigationBuilder {
    buildDesktopNavigation() {
        const navItems = navigationConfig.menuItems.map(item => {
            if (item.type === 'dropdown') {
                return this.buildNavDropdown(item);
            }
            return this.buildNavLink(item);
        }).join('');
        
        return `
            <header class="nav-container" id="content">
                <div class="nav-wrapper">
                    <a href="#home" class="logo-link">
                        <i class="${navigationConfig.logo.icon} logo-icon"></i>
                        <div class="logo-text">
                            <span class="logo-title">${navigationConfig.logo.title}</span>
                            <span class="logo-subtitle">${navigationConfig.logo.subtitle}</span>
                        </div>
                    </a>
                    <nav class="primary-nav">
                        <ul class="nav-list">
                            ${navItems}
                        </ul>
                    </nav>
                    <button class="menu-toggle" id="menuToggle" aria-label="Menu mobile">
                        <span></span><span></span><span></span>
                    </button>
                </div>
                <div class="nav-progress" id="navProgress"></div>
            </header>
        `;
    }
    
    buildNavLink(item) {
        const activeClass = item.active ? ' active' : '';
        return `
            <li>
                <a href="${item.href}" class="nav-link${activeClass}">
                    <i class="${item.icon}"></i>
                    <span>${item.text}</span>
                </a>
            </li>
        `;
    }
    
    buildNavDropdown(item) {
        return `
            <li role="none" class="nav-item-dropdown">
                <a href="#" class="nav-link">
                    <i class="${item.icon}"></i> ${item.text}
                    <span class="dropdown-arrow"><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="dropdown-menu">
                    <div class="dropdown-grid">
                        ${item.sections.map(section => `
                            <div class="dropdown-section">
                                <h4>${section.title}</h4>
                                ${section.items.map(subItem => `
                                    <a href="${subItem.href}" class="dropdown-link">
                                        <i class="${subItem.icon}"></i> ${subItem.text}
                                    </a>
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </li>
        `;
    }
    
    buildMobileMenu() {
        const mobileItems = navigationConfig.menuItems
            .filter(item => item.mobile !== false)
            .map(item => {
                if (item.type === 'dropdown') {
                    return this.buildMobileDropdown(item);
                }
                return this.buildMobileLink(item);
            }).join('');
        
        const socialLinks = navigationConfig.socialLinks
            .filter(social => social.mobile !== false)
            .map(social => `
                <a href="${social.href}" aria-label="${social.label}">
                    <i class="${social.icon}"></i>
                </a>
            `).join('');
        
        return `
            <div class="mobile-menu" id="mobileMenu">
                <div class="mobile-menu-header">
                    <div class="mobile-logo">
                        <i class="fas fa-atom"></i>
                        <span>${navigationConfig.logo.mobileTitle}</span>
                    </div>
                    <button class="mobile-close" id="mobileClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <ul class="mobile-nav-list">
                    ${mobileItems}
                </ul>
                <div class="mobile-menu-footer">
                    <div class="mobile-social">
                        ${socialLinks}
                    </div>
                </div>
            </div>
            <div class="menu-overlay" id="menuOverlay"></div>
        `;
    }
    
    buildMobileLink(item) {
        const activeClass = item.active ? ' active' : '';
        return `
            <li>
                <a href="${item.href}" class="mobile-nav-link${activeClass}">
                    <i class="${item.icon}"></i>
                    <span>${item.text}</span>
                </a>
            </li>
        `;
    }
    
    buildMobileDropdown(item) {
        const allItems = item.sections.flatMap(section => section.items);
        
        return `
            <li class="mobile-dropdown">
                <button class="mobile-dropdown-toggle">
                    <i class="${item.icon}"></i>
                    <span>${item.text}</span>
                    <i class="dropdown-icon fas fa-chevron-down"></i>
                </button>
                <div class="mobile-dropdown-content">
                    ${allItems.map(subItem => `
                        <a href="${subItem.href}">
                            <i class="${subItem.icon}"></i>${subItem.text}
                        </a>
                    `).join('')}
                </div>
            </li>
        `;
    }
}

class SectionsBuilder {
    buildSection(sectionId) {
        const section = sectionsConfig[sectionId];
        if (!section) return '';
        
        const content = this.buildSectionContent(section);
        
        return `
            <section id="${section.id}" class="${section.className || 'section'}">
                <div class="container">
                    ${this.buildSectionHeader(section)}
                    ${content}
                </div>
            </section>
        `;
    }
    
    buildSectionHeader(section) {
        if (!section.title && !section.subtitle) return '';
        
        return `
            <div class="section-header">
                ${section.title ? `<h2 class="section-title">${section.title}</h2>` : ''}
                ${section.subtitle ? `<p class="section-subtitle">${section.subtitle}</p>` : ''}
            </div>
        `;
    }
    
//  ===============================================================
// Ajoutez ces cas au switch statement existant
//  ===============================================================
buildSectionContent(section) {
    switch (section.type) {
        case 'hero':
            return this.buildHeroContent(section.content);
        case 'contact':
            return this.buildContactContent(section.content);
        case 'stats':
            return this.buildStatsContent(section.content);
        case 'grid':
            return this.buildGridContent(section.content);
        case 'two-column':
            return this.buildTwoColumnContent(section.content);
        case 'timeline':
            return this.buildTimelineContent(section.content);
        case 'table':
            return this.buildTableContent(section.content);
        case 'team':
            return this.buildTeamContent(section.content);
        case 'pricing':
            return this.buildPricingContent(section.content);
        case 'testimonials':
            return this.buildTestimonialsContent(section.content);
        case 'process':
            return this.buildProcessContent(section.content);
        case 'faq':
            return this.buildFaqContent(section.content);
        case 'partners':
            return this.buildPartnersContent(section.content);
        case 'newsletter':
            return this.buildNewsletterContent(section.content);
        default:
            return `<div class="section-content"></div>`;
    }
}
//  ===============================================================  
    buildHeroContent(content) {
        const buttons = content.buttons.map(btn => {
            const btnClass = btn.type === 'primary' ? 'btn-primary' : 'btn-secondary';
            return `
                <a href="${btn.href}" class="btn ${btnClass}">
                    <i class="${btn.icon}"></i>
                    ${btn.text}
                </a>
            `;
        }).join('');
        
        return `
            <div class="hero-content">
                ${content.title ? `<h1 class="hero-title">${content.title}</h1>` : ''}
                ${content.subtitle ? `<p class="hero-description">${content.subtitle}</p>` : ''}
                <div class="cta-buttons">
                    ${buttons}
                </div>
            </div>
        `;
    }
    
    buildContactContent(content) {
        if (content.layout === 'split') {
            return `
                <div class="contact-container">
                    <div class="contact-form-container">
                        ${this.buildContactForm(content.form)}
                    </div>
                    <div class="contact-info">
                        <h3>Informations de contact</h3>
                        <p>Notre équipe est disponible pour répondre à vos questions.</p>
                    </div>
                </div>
            `;
        }
        return this.buildContactForm(content.form);
    }
    
    buildContactForm(form) {
        const fields = form.fields.map(field => {
            if (field.type === 'textarea') {
                return `
                    <div class="form-group">
                        <label for="${field.name}">${field.label}</label>
                        <textarea 
                            id="${field.name}" 
                            name="${field.name}" 
                            rows="${field.rows || 4}"
                            placeholder="${field.placeholder || ''}"
                            ${field.required ? 'required' : ''}
                            class="form-control"
                        ></textarea>
                    </div>
                `;
            }
            
            return `
                <div class="form-group">
                    <label for="${field.name}">${field.label}</label>
                    <input 
                        type="${field.type}" 
                        id="${field.name}" 
                        name="${field.name}" 
                        placeholder="${field.placeholder || ''}"
                        ${field.required ? 'required' : ''}
                        class="form-control"
                    >
                </div>
            `;
        }).join('');
        
        return `
            <form id="contactForm" class="contact-form">
                <div class="form-row">
                    ${fields}
                </div>
                <button type="submit" class="btn btn-primary">
                    <i class="${form.submitIcon || 'fas fa-paper-plane'}"></i>
                    ${form.submitText}
                </button>
            </form>
        `;
    }
    buildStatsContent(content) {
        const stats = content.stats.map(stat => `
            <div class="stat-item">
                <div class="stat-number" data-count="${stat.number.replace(/[^0-9]/g, '')}">0</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');

        return `<div class="stats-grid">${stats}</div>`;
    }

    buildGridContent(content) {
        const cards = content.cards.map(card => `
            <div class="grid-card">
                <div class="card-icon">
                    <i class="${card.icon}"></i>
                </div>
                <h3 class="card-title">${card.title}</h3>
                <p class="card-description">${card.description}</p>
            </div>
        `).join('');

        return `<div class="grid-section">${cards}</div>`;
    }

    buildTwoColumnContent(content) {
        const paragraphs = content.left.paragraphs.map(p => `<p>${p}</p>`).join('');
        
        const button = content.left.button ? `
            <a href="${content.left.button.href}" class="btn btn-primary">
                <i class="${content.left.button.icon}"></i>
                ${content.left.button.text}
            </a>
        ` : '';

        return `
            <div class="two-column-section">
                <div class="two-column-content">
                    <h3>${content.left.title}</h3>
                    ${paragraphs}
                    ${button}
                </div>
                <div class="two-column-image">
                    <img src="${content.right.image}" alt="${content.left.title}">
                </div>
            </div>
        `;
    }

    buildTimelineContent(content) {
        const items = content.items.map((item, index) => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${item.date}</span>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

        return `<div class="timeline">${items}</div>`;
    }

    buildTableContent(content) {
        const headers = content.headers.map(header => `<th>${header}</th>`).join('');
        
        const rows = content.rows.map(row => {
            const [project, status, progress, team, date] = row;
            const statusClass = status.toLowerCase() === 'active' ? 'status-active' : 'status-pending';
            
            return `
                <tr>
                    <td><strong>${project}</strong></td>
                    <td><span class="status ${statusClass}">${status}</span></td>
                    <td>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}"></div>
                        </div>
                        <span class="progress-text">${progress}</span>
                    </td>
                    <td>${team}</td>
                    <td>${date}</td>
                </tr>
            `;
        }).join('');

        return `
            <div class="table-section">
                <div class="table-responsive">
                    <table class="data-table">
                        <thead>
                            <tr>${headers}</tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>
        `;
    }
    // Ajoutez ces méthodes à votre classe SectionsBuilder

buildTeamContent(content) {
    const members = content.members.map(member => `
        <div class="team-card">
            <img src="${member.image}" alt="${member.name}" class="team-image">
            <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <span class="team-role">${member.role}</span>
                <p class="team-description">${member.description}</p>
                <div class="team-social">
                    <a href="${member.social.linkedin}" aria-label="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="${member.social.twitter}" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="${member.social.github}" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    return `<div class="team-grid">${members}</div>`;
}

buildPricingContent(content) {
    const plans = content.plans.map(plan => {
        const featuredClass = plan.featured ? ' featured' : '';
        const features = plan.features.map(feature => `
            <li><i class="fas fa-check"></i> ${feature}</li>
        `).join('');

        return `
            <div class="pricing-card${featuredClass}">
                <div class="pricing-header">
                    <h3 class="pricing-title">${plan.title}</h3>
                    <div class="pricing-price">${plan.price}</div>
                    <div class="pricing-period">${plan.period}</div>
                </div>
                <ul class="pricing-features">${features}</ul>
                <a href="${plan.button.href}" class="btn btn-primary pricing-button">
                    ${plan.button.text}
                </a>
            </div>
        `;
    }).join('');

    return `<div class="pricing-grid">${plans}</div>`;
}

buildTestimonialsContent(content) {
    const testimonials = content.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-content">${testimonial.content}</div>
            <div class="testimonial-author">
                <img src="${testimonial.author.avatar}" alt="${testimonial.author.name}" class="author-avatar">
                <div class="author-info">
                    <h4>${testimonial.author.name}</h4>
                    <p>${testimonial.author.role}</p>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="testimonials-slider" id="testimonialsSlider">
            ${testimonials}
        </div>
        <div class="testimonial-nav">
            <button id="testimonialPrev"><i class="fas fa-chevron-left"></i></button>
            <button id="testimonialNext"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
}

buildProcessContent(content) {
    const steps = content.steps.map(step => `
        <div class="process-step">
            <div class="step-number">${step.number}</div>
            <div class="step-content">
                <h3 class="step-title">${step.title}</h3>
                <p class="step-description">${step.description}</p>
            </div>
        </div>
    `).join('');

    return `<div class="process-steps">${steps}</div>`;
}

buildFaqContent(content) {
    const questions = content.questions.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <div class="faq-question">
                <span>${faq.question}</span>
                <i class="fas fa-plus faq-icon"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');

    return `<div class="faq-list">${questions}</div>`;
}

buildPartnersContent(content) {
    const partners = content.partners.map(partner => `
        <div class="partner-logo">
            <img src="${partner.logo}" alt="${partner.name}">
        </div>
    `).join('');

    return `<div class="partners-grid">${partners}</div>`;
}

buildNewsletterContent(content) {
    return `
        <div class="newsletter-content">
            <h2 class="newsletter-title">${content.title}</h2>
            <p class="newsletter-description">${content.description}</p>
            <form class="newsletter-form" id="newsletterForm">
                <input type="email" placeholder="${content.placeholder}" required>
                <button type="submit" class="btn">
                    <i class="fas fa-paper-plane"></i>
                    ${content.buttonText}
                </button>
            </form>
        </div>
    `;
}

//  ===============================================================
    
    buildSections(sectionIds) {
        return sectionIds
            .map(sectionId => this.buildSection(sectionId))
            .join('');
    }
}
//  ===============================================================
// Managers
//  ===============================================================
class NavigationManager {
    constructor(config, containerId = 'navigation-container') {
        this.config = config;
        this.containerId = containerId;
        this.builder = new NavigationBuilder();
        this.state = {
            isMobileMenuOpen: false,
            isScrolled: false,
            activeSection: 'home'
        };
    }
    
    init() {
        this.render();
        this.initEvents();
        this.initScrollEvents();
    }
    
    render() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container #${this.containerId} non trouvé`);
            return;
        }
        
        const desktopNav = this.builder.buildDesktopNavigation();
        const mobileMenu = this.builder.buildMobileMenu();
        
        container.innerHTML = desktopNav + mobileMenu;
        this.elements = this.getElements();
    }
    
    getElements() {
        return {
            menuToggle: document.getElementById('menuToggle'),
            mobileMenu: document.getElementById('mobileMenu'),
            mobileClose: document.getElementById('mobileClose'),
            menuOverlay: document.getElementById('menuOverlay'),
            navLinks: document.querySelectorAll('.nav-link'),
            mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
            dropdownToggles: document.querySelectorAll('.mobile-dropdown-toggle'),
            navProgress: document.getElementById('navProgress')
        };
    }
    
    initEvents() {
        // Menu mobile
        if (this.elements.menuToggle) {
            this.elements.menuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        if (this.elements.mobileClose) {
            this.elements.mobileClose.addEventListener('click', () => this.closeMobileMenu());
        }
        
        if (this.elements.menuOverlay) {
            this.elements.menuOverlay.addEventListener('click', () => this.closeMobileMenu());
        }
        
        // Navigation
        this.elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        this.elements.mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e);
                this.closeMobileMenu();
            });
        });
        
        // Dropdowns mobile
        this.elements.dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => this.toggleMobileDropdown(e));
        });
    }
    
    toggleMobileMenu() {
        this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;
        
        if (this.state.isMobileMenuOpen) {
            this.elements.mobileMenu.classList.add('active');
            this.elements.menuOverlay.classList.add('active');
            this.elements.menuToggle.classList.add('active');
            document.body.classList.add('menu-open');
        } else {
            this.closeMobileMenu();
        }
    }
    
    closeMobileMenu() {
        this.state.isMobileMenuOpen = false;
        this.elements.mobileMenu.classList.remove('active');
        this.elements.menuOverlay.classList.remove('active');
        this.elements.menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Fermer tous les dropdowns mobiles
        document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
    
    toggleMobileDropdown(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const dropdown = e.currentTarget.closest('.mobile-dropdown');
        dropdown.classList.toggle('active');
        
        // Fermer les autres dropdowns
        document.querySelectorAll('.mobile-dropdown').forEach(other => {
            if (other !== dropdown) {
                other.classList.remove('active');
            }
        });
    }
    
    handleNavClick(e) {
        e.preventDefault();
        
        const link = e.currentTarget;
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
            this.scrollToSection(href.substring(1));
            this.setActiveNav(link);
        }
    }
    
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = document.querySelector('.nav-container').offsetHeight;
            const offsetTop = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    setActiveNav(activeLink) {
        // Retirer active de tous les liens
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Ajouter active au lien cliqué
        activeLink.classList.add('active');
    }
    
    initScrollEvents() {
        window.addEventListener('scroll', () => {
            // Header scroll
            const header = document.querySelector('.nav-container');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                this.state.isScrolled = true;
            } else {
                header.classList.remove('scrolled');
                this.state.isScrolled = false;
            }
            
            // Barre de progression
            this.updateScrollProgress();
            
            // Section active
            this.updateActiveSection();
        });
    }
    
    updateScrollProgress() {
        if (!this.elements.navProgress) return;
        
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        this.elements.navProgress.style.width = `${scrollPercent}%`;
    }
    
    updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        let currentSection = 'home';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        if (currentSection !== this.state.activeSection) {
            this.state.activeSection = currentSection;
            this.updateNavForSection(currentSection);
        }
    }
    
    updateNavForSection(sectionId) {
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        const mobileNavLink = document.querySelector(`.mobile-nav-link[href="#${sectionId}"]`);
        
        if (navLink || mobileNavLink) {
            // Retirer active de tous
            document.querySelectorAll('.nav-link.active, .mobile-nav-link.active').forEach(link => {
                link.classList.remove('active');
            });
            
            // Ajouter active aux liens correspondants
            if (navLink) navLink.classList.add('active');
            if (mobileNavLink) mobileNavLink.classList.add('active');
        }
    }
}

class SectionsManager {
    constructor(config, containerId = 'main-content') {
        this.config = config;
        this.containerId = containerId;
        this.builder = new SectionsBuilder();
        this.loadedSections = new Set();
    }
    
    init() {
        this.renderAll();
        this.initSectionEvents();
    }
    
    renderAll() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container #${this.containerId} non trouvé`);
            return;
        }
        
        const sectionIds = Object.keys(this.config);
        const html = this.builder.buildSections(sectionIds);
        container.innerHTML = html;
        
        sectionIds.forEach(id => this.loadedSections.add(id));
    }
    
    initSectionEvents() {
        // Formulaire de contact
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }
        
        // Animations au scroll
        this.initScrollAnimations();
        // FAQ Accordéon
        this.initFaq();
        
        // Newsletter form
        this.initNewsletter();
        
        // Testimonials slider
        this.initTestimonials();
        
    }
    
    async handleContactSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Simulation d'envoi
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Succès
            form.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Message envoyé avec succès !</h3>
                    <p>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
            `;
        }, 1500);
    }
    
    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Animation des compteurs de stats
                    if (entry.target.id === 'stats') {
                        this.animateStats();
                    }
                    
                    // Animation des barres de progression
                    if (entry.target.id === 'data') {
                        this.animateProgressBars();
                    }
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }

    animateStats() {
        document.querySelectorAll('.stat-number').forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        });
    }
    animateProgressBars() {
        document.querySelectorAll('.progress-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }  
    
    initFaq() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }

    initNewsletter() {
        const form = document.getElementById('newsletterForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                
                if (Helpers.isValidEmail(email)) {
                    // Simulation d'inscription
                    form.innerHTML = `
                        <div class="success-message">
                            <i class="fas fa-check-circle"></i>
                            <h4>Merci pour votre inscription !</h4>
                            <p>Vous recevrez bientôt nos dernières innovations.</p>
                        </div>
                    `;
                }
            });
        }
    }

    initTestimonials() {
        const slider = document.getElementById('testimonialsSlider');
        const prevBtn = document.getElementById('testimonialPrev');
        const nextBtn = document.getElementById('testimonialNext');
        
        if (!slider) return;
        
        let currentIndex = 0;
        const testimonials = slider.querySelectorAll('.testimonial-card');
        const total = testimonials.length;
        
        const updateSlider = () => {
            const cardWidth = testimonials[0].offsetWidth + 32; // width + gap
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        };
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = Math.max(0, currentIndex - 1);
                updateSlider();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = Math.min(total - 3, currentIndex + 1);
                updateSlider();
            });
        }
        
        // Responsive: ajuster le nombre de cartes visibles
        window.addEventListener('resize', Helpers.debounce(() => {
            updateSlider();
        }, 250));
    }

}
//  ===============================================================
// Application principale
//  ===============================================================
class QuantumLabApp {
    constructor() {
        this.navigationManager = null;
        this.sectionsManager = null;
        
        this.init();
    }
    
    async init() {
        console.log('🚀 Initialisation OBDDEVOPs QUANTUM LAB...');
        
        try {
            // 1. Injecter les styles CSS
            //injectStyles();
            // 2. Charger Font Awesome
            this.loadFontAwesome();
            // 3. Créer les conteneurs d'animation
            this.createAnimationContainers();
            this.initBackgroundAnimations();
            // Initialiser les managers
            this.navigationManager = new NavigationManager(navigationConfig, 'navigation-container');
            this.navigationManager.init();
            
            this.sectionsManager = new SectionsManager(sectionsConfig, 'main-content');
            this.sectionsManager.init();
            
            // Initialiser le thème
            this.initTheme();
            
            // Initialiser les événements globaux
            this.initGlobalEvents();
            
            console.log('✅ Application initialisée avec succès !');
            
        } catch (error) {
            console.error('❌ Erreur lors de l\'initialisation:', error);
        }
    }
    
    initGlobalEvents() {
        // Redimensionnement
        window.addEventListener('resize', Helpers.debounce(() => {
            this.onResize();
        }, 250));
        
        // Chargement de page
        window.addEventListener('load', () => {
            this.onPageLoad();
        });
    }
    
    initTheme() {
        const savedTheme = Helpers.getTheme();
        Helpers.setTheme(savedTheme);
    }

    createAnimationContainers() {
        // Créer le conteneur d'étoiles
        if (!document.getElementById('stars-container')) {
            const starsContainer = document.createElement('div');
            starsContainer.id = 'stars-container';
            document.body.appendChild(starsContainer);
        }
        
        // Créer le canvas des particules
        if (!document.getElementById('particles-canvas')) {
            const particlesCanvas = document.createElement('canvas');
            particlesCanvas.id = 'particles-canvas';
            document.body.appendChild(particlesCanvas);
        }
    }

    initBackgroundAnimations() {
        // Initialiser les étoiles
        Animations.initStars();
        
        // Initialiser les particules (utilisez l'une ou l'autre des méthodes)
        // Animations.initParticles(); // Méthode originale du bundle
        Animations.initCanvasParticles(); // Votre méthode
    }
    
    loadFontAwesome() {
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(link);
        }
    }
    
    onResize() {
        // Rafraîchir si nécessaire
    }
    
    onPageLoad() {
        Animations.hideLoader();
        document.body.classList.add('loaded');
    }
}

// Initialiser l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    Animations.showLoader('Initialisation du Quantum Lab...');
    window.QuantumLab = new QuantumLabApp();
});

// Gestion des erreurs
window.addEventListener('error', (event) => {
    console.error('Erreur globale:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesse non traitée:', event.reason);
});

