'use strict';
document.addEventListener("DOMContentLoaded", function() {
  // Get references to all text sections
  const textSections = document.querySelectorAll(".more-about p, .bio-text");

  // Options for the Intersection Observer
  const options = {
    threshold: 0.2, // Percentage of element visibility to trigger the animation
  };

  // Callback function when the elements intersect
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-up");
        observer.unobserve(entry.target); // Unobserve after animation is triggered
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(callback, options);

  // Observe each text section
  textSections.forEach(section => {
    observer.observe(section);
  });
});
