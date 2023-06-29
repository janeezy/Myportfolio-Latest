'use script';
// scroll to top functionality
const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});

// Nav hamburgerburger selections

const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
	ul.classList.toggle('close');
});

// Close hamburger menu when a link is clicked

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) =>
	link.addEventListener('click', () => {
		ul.classList.remove('show');
	})
);

// * date = year.getFullYear('2023');

const copyrightEl = document.getElementById('copyrightYear');
copyrightEl.innerText = 'Copyright ' + new Date().getFullYear();

const navigation = document.querySelector('.navigation');
const toggleBtn = document.querySelector('.icon icon-card');

toggleBtn.addEventListener('click', () => {
	navigation.classList.toggle('open');
});
