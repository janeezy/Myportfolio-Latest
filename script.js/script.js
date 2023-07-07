'use script';

// Nav hamburgerburger selections

const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
	ul.classList.toggle('close');
});

// Get the burger menu element
const burgerMenu = document.querySelector('#burger-menu');

// Show the burger menu on mobile devices
function showBurgerMenuOnMobile() {
	if (window.innerWidth <= 868) {
		burgerMenu.style.display = 'block';
	} else {
		burgerMenu.style.display = 'none';
	}
}

// Call the function initially and whenever the window is resized
showBurgerMenuOnMobile();
window.addEventListener('resize', showBurgerMenuOnMobile);

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

/*light mood styling */
function toggleMode() {
	var body = document.body;
	body.classList.toggle('dark-mode');
}

// scroll to top functionality
const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});
