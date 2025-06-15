document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');


  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');

      // Animate bars if all 3 exist
      const bars = menuToggle.querySelectorAll('.bar');
      if (bars.length === 3) {
        if (menuToggle.classList.contains('active')) {
          bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
          bars[1].style.opacity = '0';
          bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
        }
      }
    });
  }
});
