const burger = document.getElementById("burger-menu");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  if (nav.classList.contains("hide-menu")) {
    nav.classList.remove("hide-menu")
    nav.classList.add("show-menu")
  } else if (nav.classList.contains("show-menu")) {
    nav.classList.remove("show-menu");
    nav.classList.add("hide-menu")
  } else {
    nav.classList.add("show-menu")
  }
})
