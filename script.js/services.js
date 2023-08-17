'use strict';
const services = document.querySelectorAll('.service');

services.forEach((service) => {
  service.addEventListener('mouseover', () => {
    service.classList.add('zoom-in');
  });

  service.addEventListener('mouseout', () => {
    service.classList.remove('zoom-in');
  });
});
