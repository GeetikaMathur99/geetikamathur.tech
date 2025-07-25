document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Hamburger Menu ---
  const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
  const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
  const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
  const header = document.querySelector('.header.container') || document.querySelector('.header');

  if (hamburger && mobile_menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });
  }

  if (header) {
    document.addEventListener('scroll', () => {
      const scroll_position = window.scrollY;
      header.style.backgroundColor = scroll_position > 250 ? '#29323c' : 'transparent';
    });
  }

  menu_items.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      mobile_menu?.classList.remove('active');
    });
  });

  // --- Blog Carousel Logic ---
  const track = document.getElementById("blogTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const items = document.querySelectorAll(".blog-item");
  let index = 0;

  function updateCarousel() {
    const translateX = -index * 100;
    track.style.transform = `translateX(${translateX}%)`;
  }

  if (nextBtn && prevBtn && track && items.length > 0) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % items.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + items.length) % items.length;
      updateCarousel();
    });

    updateCarousel();
  }
});
