'use strict';

// Nav hamburger selections
const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const navLink = document.querySelectorAll('.nav-link');
const burgerMenu = document.getElementById("burger-menu");
const navList = document.querySelector( ".navigation" );
const projectsContainer = document.querySelector('.projects-container');
const certificationsContainer = document.querySelector('.certifications-container');

burgerMenu.addEventListener('click', () => {
  navList.classList.toggle("active");
} );

// textanimation
const textElement = document.getElementById('text-animation');
const textParts = [
  "Hi,",
  "I am Jane Duru,",
  "A Software Developer,",
  "Frontend Developer,",
  "UI/UX Designer,",
  "Expertise in crafting ChatGPT prompts.",
  "Contact me "
];

let currentPartIndex = 0;

function updateText() {
  textElement.textContent = textParts[currentPartIndex];
  currentPartIndex = (currentPartIndex + 1) % textParts.length;
}

setInterval(updateText, 2000); // Adjust the interval duration (milliseconds)


// Show the burger menu on mobile devices
function showBurgerMenuOnMobile() {
  burger.style.display = window.innerWidth <= 868 ? 'block' : 'none';
}

// Scroll to top functionality
const scrollUp = document.querySelector('#scroll-up');

// Event listeners
burger.addEventListener('click', toggleMobileMenu);
console.log('Show burger menu on mobile'); // For debugging
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
  // Add code here to update styles for dark mode
}



toggleBtn.addEventListener('click', () => {
  navigation.classList.toggle('open');
});




function applyZoomInAnimation(element) {
  element.style.animation = 'zoomIn 0.5s ease-in-out';
  element.style.opacity = '1';
}

function applyZoomOutAnimation(element) {
  element.style.animation = 'zoomOut 0.5s ease-in-out';
  element.style.opacity = '0';
}


