'use strict';
// Get references to skill icons
const skillIcons = document.querySelectorAll(".icon-card");

// Observer options and callback (similar to previous code)
const observerOptions = {
  threshold: 0.2,
};

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe each skill icon
skillIcons.forEach(icon => {
  skillObserver.observe(icon);
});


// Get references to skill icons
const skillIconsRotate = document.querySelectorAll(".icon-card");

// Add "rotate" class to skill icons
skillIconsRotate.forEach(icon => {
  icon.classList.add("rotate");
});

// Get references to skill icons
const skillIconsPulse = document.querySelectorAll(".icon-card");

// Add "pulse" class to skill icons
skillIconsPulse.forEach(icon => {
  icon.classList.add("pulse");
});
