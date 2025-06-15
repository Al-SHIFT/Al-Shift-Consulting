// AL-SHIFT Consulting - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Optional: Close menu when clicking outside (mobile only)
  document.addEventListener('click', function(event) {
    if (
      !event.target.closest('.menu-toggle') &&
      !event.target.closest('.nav-menu') &&
      navMenu.classList.contains('active')
    ) {
      navMenu.classList.remove('active'
