function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = document.querySelector(".burger__menu-button");
  let links = document.querySelector(".burger__menu-link");
  let overlay = document.querySelector(".burger__menu-overlay");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.addEventListener("click", () => toggleMenu());

  overlay.addEventListener("click", () => toggleMenu());

  function toggleMenu() {
    menu.classList.toggle("burger__menu_active");
    if (menu.classList.contains("burger__menu_active")) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }
}

burgerMenu(".burger__menu");
