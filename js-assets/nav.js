// Navigation Configuration
const navConfig = {
  logo: {
    icon: 'fas fa-atom',
    title: 'OBDDEVOPs',
    subtitle: 'QUANTUM LAB'
  },
  navItems: [
    { id: 'home', icon: 'fas fa-home', text: 'Accueil', active: true },
    {
      id: 'odb',
      icon: 'fas fa-globe',
      text: 'ODB',
      dropdown: true,
      subItems: [
        { 
          category: 'Exploration',
          items: [
            { id: 'ODB1', icon: 'fas fa-galactic-republic', text: 'ODB1' },
            { id: 'ODB2', icon: 'fas fa-cloud', text: 'ODB2' },
            { id: 'ODB3', icon: 'fas fa-bolt', text: 'ODB3' }
          ]
        },
        {
          category: 'Systèmes',
          items: [
            { id: 'ODB4', icon: 'fas fa-star-and-crescent', text: 'ODB4' },
            { id: 'ODB5', icon: 'fas fa-globe-americas', text: 'ODB5' },
            { id: 'ODB6', icon: 'fas fa-circle-notch', text: 'ODB6' }
          ]
        }
      ]
    },
    { id: 'gallery', icon: 'fas fa-images', text: 'Galerie' },
    { id: 'contact', icon: 'fas fa-rocket', text: 'Contact' }
  ],
  socialLinks: [
    { icon: 'fab fa-github', label: 'GitHub' },
    { icon: 'fab fa-twitter', label: 'Twitter' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn' }
  ]
};

// Utility function to create HTML strings
const createElement = (tag, attributes = {}, content = '') => {
  const attrs = Object.entries(attributes)
    .map(([key, value]) => ` ${key}="${value}"`)
    .join('');
  return `<${tag}${attrs}>${content}</${tag}>`;
};

// Generate desktop navigation items
const generateDesktopNavItems = () => {
  return navConfig.navItems.map(item => {
    if (item.dropdown) {
      return `
        <li role="none" class="nav-item-dropdown">
          <a href="#" class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false">
            <i class="${item.icon}"></i> ${item.text}
            <span class="dropdown-arrow"><i class="fas fa-chevron-down"></i></span>
          </a>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-grid">
              ${item.subItems.map(section => `
                <div class="dropdown-section">
                  <h4>${section.category}</h4>
                  ${section.items.map(subItem => `
                    <a href="#${subItem.id}" class="dropdown-link" role="menuitem">
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
    
    return `
      <li>
        <a href="#${item.id}" class="nav-link ${item.active ? 'active' : ''}">
          <i class="${item.icon}"></i>
          <span>${item.text}</span>
        </a>
      </li>
    `;
  }).join('');
};

// Generate mobile navigation items
const generateMobileNavItems = () => {
  return navConfig.navItems.map(item => {
    if (item.dropdown) {
      return `
        <li class="mobile-dropdown">
          <button class="mobile-dropdown-toggle">
            <i class="${item.icon}"></i>
            <span>${item.text}</span>
            <i class="dropdown-icon fas fa-chevron-down"></i>
          </button>
          <div class="mobile-dropdown-content">
            ${item.subItems.map(section => 
              section.items.map(subItem => `
                <a href="#${subItem.id}">
                  <i class="${subItem.icon}"></i>${subItem.text}
                </a>
              `).join('')
            ).join('')}
          </div>
        </li>
      `;
    }
    
    return `
      <li>
        <a href="#${item.id}" class="mobile-nav-link ${item.active ? 'active' : ''}">
          <i class="${item.icon}"></i>
          <span>${item.text}</span>
        </a>
      </li>
    `;
  }).join('');
};

// Generate social links
const generateSocialLinks = () => {
  return navConfig.socialLinks.map(link => 
    `<a href="#" aria-label="${link.label}"><i class="${link.icon}"></i></a>`
  ).join('');
};

// Main function to build and insert navigation
const buildNavigation = () => {
  const myPara = document.getElementById('import-nav-container');
  if (!myPara) return;
  
  // Desktop Navigation
  const desktopNav = `
    <header class="nav-container" id="content">
      <div class="nav-wrapper">
        <a href="#home" class="logo-link">
          <i class="${navConfig.logo.icon} logo-icon"></i>
          <div class="logo-text">
            <span class="logo-title">${navConfig.logo.title}</span>
            <span class="logo-subtitle">${navConfig.logo.subtitle}</span>
          </div>
        </a>
        <nav class="primary-nav">
          <ul class="nav-list">
            ${generateDesktopNavItems()}
          </ul>
        </nav>
        <button class="menu-toggle" id="menuToggle" aria-label="Menu mobile" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
  
  // Mobile Navigation
  const mobileNav = `
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <div class="mobile-menu-header">
        <div class="mobile-logo">
          <i class="${navConfig.logo.icon}"></i>
          <span>CSS INNOVATION LAB</span>
        </div>
        <button class="mobile-close" id="mobileClose" aria-label="Fermer le menu">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <ul class="mobile-nav-list">
        ${generateMobileNavItems()}
      </ul>
      <div class="mobile-menu-footer">
        <div class="mobile-social">
          ${generateSocialLinks()}
        </div>
      </div>
    </div>
  `;
  
  myPara.innerHTML = desktopNav + mobileNav;
};

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', buildNavigation);

// Optional: Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { navConfig, buildNavigation };
}
