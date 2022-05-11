// Display Mobile Menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


// Scroll Effect Navbar

const navbar = document.querySelector('.navbar');

const navbarScroll = () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
    menuLinks.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener('scroll', navbarScroll);