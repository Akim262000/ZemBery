function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.find(".burger__menu-button");
  let links = menu.find(".burger__menu-link");
  let overlay = menu.find(".burger__menu-overlay");

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
