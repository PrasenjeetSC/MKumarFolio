document.addEventListener("DOMContentLoaded", () => {

// Mobile Menu Elements
const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

// Navbar and Hero Section References
const navbar = document.getElementById('siteNavbar');
const heroSection = document.getElementById('home');

// Mobile Menu Functionality
const menuLinks = document.querySelectorAll('#mobileMenu a');
const backdrop = document.getElementById('menuBackdrop');

function closeMenuPanel() {
    mobileMenu.classList.add('translate-x-full');
    backdrop?.classList.add('hidden');
}

function openMenuPanel() {
    mobileMenu.classList.remove('translate-x-full');
    backdrop?.classList.remove('hidden');
}

menuBtn.addEventListener('click', openMenuPanel);
closeMenu.addEventListener('click', closeMenuPanel);
backdrop?.addEventListener('click', closeMenuPanel);

menuLinks.forEach(link => {
    link.addEventListener('click', closeMenuPanel);
});

// Navbar Show/Hide on Scroll using Intersection Observer
if (!heroSection) return;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-visible');
    } else {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
    }
    });
}, { threshold: 0.15 });

observer.observe(heroSection);

});