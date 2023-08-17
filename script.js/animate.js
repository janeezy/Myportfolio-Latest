'use strict';
const projectCards = document.querySelectorAll('.project-card');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateProjectCards() {
    projectCards.forEach((card) => {
        if (isElementInViewport(card)) {
            card.classList.add('animate__zoomIn');
            card.classList.remove('animate__zoomOut');
        } else {
            card.classList.remove('animate__zoomIn');
            card.classList.add('animate__zoomOut');
        }
    });
}

window.addEventListener('scroll', animateProjectCards);
