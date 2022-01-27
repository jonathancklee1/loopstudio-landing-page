const closeBtn = document.querySelector(".mobile-header-nav-close");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".mobile-header-nav");

hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});
