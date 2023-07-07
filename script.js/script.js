'use strict';

// Nav hamburger selections
const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const navLink = document.querySelectorAll('.nav-link');

// Show or hide the mobile menu
function toggleMobileMenu() {
	ul.classList.toggle('close');
}

// Show the burger menu on mobile devices
function showBurgerMenuOnMobile() {
	burger.style.display = window.innerWidth <= 868 ? 'block' : 'none';
}

// Scroll to top functionality
const scrollUp = document.querySelector('#scroll-up');

// Event listeners
burger.addEventListener('click', toggleMobileMenu);
window.addEventListener('resize', showBurgerMenuOnMobile);
navLink.forEach((link) =>
	link.addEventListener('click', () => ul.classList.remove('show'))
);
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});

// Get current year for copyright
const copyrightEl = document.getElementById('copyrightYear');
copyrightEl.innerText = 'Copyright ' + new Date().getFullYear();

// Toggle dark mode
function toggleMode() {
	document.body.classList.toggle('dark-mode');
}

// Toggle card navigation
const navigation = document.querySelector('.navigation');
const toggleBtn = document.querySelector('.icon.icon-card');

toggleBtn.addEventListener('click', () => {
	navigation.classList.toggle('open');
});
