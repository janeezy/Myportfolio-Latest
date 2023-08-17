'use strict';


// Add this script at the end of your HTML body or in a separate JavaScript file
const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('zoomed');
  });
});
