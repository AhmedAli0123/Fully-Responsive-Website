const burgur = document.querySelector(".burgur");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const rightNav = document.querySelector(".rightNav");
const navLinks = document.querySelectorAll(".nav-list li a");


const toggleNavbar = () => {
  rightNav.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("expanded");
};
burgur.addEventListener("click", toggleNavbar);
navLinks.forEach((link) => {
  link.addEventListener("click", toggleNavbar);
});
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !burgur.contains(event.target)) {
    rightNav.classList.add("v-class-resp");
    navList.classList.add("v-class-resp");
    navbar.classList.remove("expanded");
  }
});
