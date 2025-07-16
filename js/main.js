  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("button[aria-controls='mobile-menu']");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });






 document.querySelectorAll('a[data-section]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('data-section'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });