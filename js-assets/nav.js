
// Access a paragraph Element
const myPara = document.getElementById("import-nav-container");

// Change the content of the Element
let startNav = "" +
"<header class=\"nav-container\" id=\"content\">" +
        "<div class=\"nav-wrapper\">" +
            "<a href=\"#home\" class=\"logo-link\">" +
                "<i class=\"fas fa-atom logo-icon\"></i>" +
                "<div class=\"logo-text\">" +
                    "<span class=\"logo-title\">OBDDEVOPs</span>" +
                    "<span class=\"logo-subtitle\">QUANTUM LAB</span>" +
                "</div>" +
            "</a>" +
            //Navigation Desktop
            "<nav class=\"primary-nav\">" +
                "<ul class=\"nav-list\">";

// <!-- Navigation navHome -->
let navHome = "<li><a href=\"#home\" class=\"nav-link active\">" +
"<i class=\"fas fa-home\"></i>" +
"<span>Accueil</span>" +
"</a></li>";

// <!-- Navigation navMenu1 -->
let navMenu1 = "<li role=\"none\" class=\"nav-item-dropdown\">" +
"<a href=\"#\" class=\"nav-link\" role=\"menuitem\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
"<i class=\"fas fa-globe\"></i> ODB <span class=\"dropdown-arrow\"><i class=\"fas fa-chevron-down\"></i></span>" +
"</a>" +
"<div class=\"dropdown-menu\" role=\"menu\">" +
"<div class=\"dropdown-grid\">" +
"<div class=\"dropdown-section\">" +
"<h4>Exploration </h4>" +
"<a href=\"#ODB1\" class=\"dropdown-link\" role=\"menuitem\"><i class=\"fas fa-galactic-republic\"></i> ODB1</a>" +
"<a href=\"#ODB2\" class=\"dropdown-link\" role=\"menuitem\"><i class=\"fas fa-cloud\"></i> ODB2</a>" +
"<a href=\"#ODB3\" class=\"dropdown-link\" role=\"menuitem\"><i class=\"fas fa-bolt\"></i> ODB3</a>" +
"</div>" +
"<div class=\"dropdown-section\">" +
"<h4>Systèmes</h4>" +
"<a href=\"#ODB4\" class=\"dropdown-link\" role=\"menuitem\"><i class=\"fas fa-star-and-crescent\"></i> ODB4</a>" +
"<a href=\"#ODB5\" class=\"dropdown-link\" role=\"menuitem\"><i class=\"fas fa-globe-americas\"></i> ODB5</a>" +
"<a href=\"#ODB6\" class=\"dropdown-link\" role=\"menuitem\"><i class=\"fas fa-circle-notch\"></i> ODB6</a>" +
"</div></div></div></li>";
// <!-- Navigation intemNavgallery -->
let intemNavgallery ="<li>" +
"<a href=\"#gallery\" class=\"nav-link\"><i class=\"fas fa-images\"></i><span>Galerie</span></a>" +
"</li>";
// <!-- Navigation intemNavContact -->
let intemNavContact ="<li>" +
"<a href=\"#contact\" class=\"nav-link\"><i class=\"fas fa-rocket\"></i><span>Contact</span></a>" +
"</li>";
// <!-- Navigation endNav -->
let endNav = "</ul></nav>" +
//<!-- Bouton hamburger -->
"<button class=\"menu-toggle\" id=\"menuToggle\" aria-label=\"Menu mobile\" aria-expanded=\"false\">" +
"<span></span><span></span><span></span></button>" +
"</div>" +
"</header>";

let myNavigation = startNav.concat(" ", navHome,navMenu1,intemNavgallery,intemNavContact, endNav);

// Menu Mobile
let StartMenuMobile = "<div class=\"mobile-menu\" id=\"mobileMenu\" aria-hidden=\"true\">" +
"<div class=\"mobile-menu-header\">" +
"<div class=\"mobile-logo\">" +
"<i class=\"fas fa-atom\"></i>" +
"<span>CSS INNOVATION LAB</span>" +
"</div>" +
"<button class=\"mobile-close\" id=\"mobileClose\" aria-label=\"Fermer le menu\">" +
"<i class=\"fas fa-times\"></i>" +
"</button>" +
"</div>" +
"<ul class=\"mobile-nav-list\">";

let homeMenuMobile = "<li>" +
    "<a href=\"#home\" class=\"mobile-nav-link active\"><i class=\"fas fa-home\"></i><span>Accueil</span></a>" +
"</li>";

let menu1MenuMobile = "<li class=\"mobile-dropdown\">" +
"<button class=\"mobile-dropdown-toggle\"><i class=\"fas fa-globe-americas\"></i><span>ODB</span><i class=\"dropdown-icon fas fa-chevron-down\"></i></button>" +
"<div class=\"mobile-dropdown-content\">" +
"<a href=\"#ODB1\"><i class=\"fas fa-star\"></i>ODB1</a>" +
"<a href=\"#ODB2\"><i class=\"fas fa-cloud\"></i>ODB2</a>" +
"<a href=\"#ODB3\"><i class=\"fas fa-circle-notch\"></i>ODB3</a>"  +
"<a href=\"#ODB4\"><i class=\"fas fa-circle-notch\"></i>ODB4</a>" + 
"<a href=\"#ODB5\"><i class=\"fas fa-circle-notch\"></i>ODB5</a>" + 
"<a href=\"#ODB6\"><i class=\"fas fa-circle-notch\"></i>ODB6</a>" + 
"</div>" +
"</li>";

let galleryMenuMobile  ="<li>" +
    "<a href=\"#gallery\" class=\"mobile-nav-link\"><i class=\"fas fa-home\"></i><span>Galerie</span></a>" +
"</li>";

let ContactMenuMobile ="<li>" +
    "<a href=\"#contact\" class=\"mobile-nav-link\"><i class=\"fas fa-home\"></i><span>Contact</span></a>" +
"</li>";

// Menu Mobile
let EndMenuMobile = "</ul>" +
"<div class=\"mobile-menu-footer\">" +
"<div class=\"mobile-social\">" +
"<a href=\"#\" aria-label=\"GitHub\"><i class=\"fab fa-github\"></i></a>" +
"<a href=\"#\" aria-label=\"Twitter\"><i class=\"fab fa-twitter\"></i></a>" +
"<a href=\"#\" aria-label=\"LinkedIn\"><i class=\"fab fa-linkedin\"></i></a>" +
"</div></div></div>";

let myMenuMobile = StartMenuMobile.concat(" ", homeMenuMobile,menu1MenuMobile,galleryMenuMobile,ContactMenuMobile);

myPara.innerHTML = myNavigation.concat(" ", myMenuMobile, EndMenuMobile);
