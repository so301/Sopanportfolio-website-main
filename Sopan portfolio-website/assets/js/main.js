/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  if (window.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");

const openModal = (index) => {
  modalViews[index].classList.add("active-modal");
};

modalBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => openModal(i));
});

modalClose.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modalViews.forEach((modal) => modal.classList.remove("active-modal"));
  });
});


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
if (document.querySelector(".work__container")) {
  mixitup(".work__container", {
    selectors: { target: ".work__card" },
    animation: { duration: 300 },
  });
}


/*=============== ACTIVE WORK FILTER ===============*/
const workLinks = document.querySelectorAll(".work__item");

workLinks.forEach((item) => {
  item.addEventListener("click", () => {
    workLinks.forEach((el) => el.classList.remove("active-work"));
    item.classList.add("active-work");
  });
});


/*=============== SWIPER TESTIMONIAL ===============*/
if (document.querySelector(".testimonial__container")) {
  new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2, spaceBetween: 48 },
    },
  });
}


/*=============== SCROLL ACTIVE LINK + DESKTOP HEADER SHADOW ===============*/
const sections = document.querySelectorAll("section[id]");
const desktopHeader = document.getElementById("desktop-header");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });

  if (desktopHeader) {
    desktopHeader.classList.toggle("scrolled", scrollY > 50);
  }
}
window.addEventListener("scroll", scrollActive);


/*=============== LIGHT / DARK THEME (MOBILE + DESKTOP) ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

if (themeButton) {
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme);
    themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem(
      "selected-theme",
      document.body.classList.contains(lightTheme) ? "dark" : "light"
    );
    localStorage.setItem(
      "selected-icon",
      themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"
    );
  });
}


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".nav__menu", { origin: "bottom", distance: "300px", scale: 0.1 });
sr.reveal(".home__data, .home__handle, .home__social, .home__scroll");
sr.reveal(".about__img", { origin: "left" });
sr.reveal(".about__data, .about__description", { origin: "right" });
sr.reveal(".skills__content, .work__card, .testimonial__container");
sr.reveal(".contact__info, .contact__title-info", { origin: "left" });
sr.reveal(".contact__form, .contact__title-form", { origin: "right" });
sr.reveal(".footer");


/*=============== EXPERIENCE ANIMATION ===============*/
ScrollReveal().reveal(".experience__card", {
  origin: "left",
  distance: "40px",
  duration: 1000,
  interval: 200,
});


/*=============== PAGE LOADER ===============*/
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) loader.classList.add("hide");
});


/*=============== MOBILE NAV TOGGLE ===============*/
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navMenu.classList.toggle("active");
    }
  });
}





