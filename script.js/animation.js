'use strict';
document.addEventListener("DOMContentLoaded", function() {
  // Get references to all project containers
  const projectContainers = document.querySelectorAll(".project-card");

  // Options for the Intersection Observer
  const options = {
    threshold: 0.2, // Percentage of element visibility to trigger the animation
  };

  // Callback function when the elements intersect
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
        observer.unobserve(entry.target); // Unobserve after animation is triggered
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(callback, options);

  // Observe each project container
  projectContainers.forEach(container => {
    observer.observe(container);
  });
});
