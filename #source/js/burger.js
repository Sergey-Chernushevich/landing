const burgerMenuBtn = document.querySelector(".burgerMenuBtn");
const burgerMenuWrapper = document.querySelector(".burgerMenuWrapper");
const subWrapper = document.querySelector(".subWrapper");
const burgerNavigationList = document.querySelectorAll(
  ".burgerNavigation-item"
);

const changeLanguageButton = document.querySelector("#changeLanguageButton");
const langTitle = document.querySelector("#langTitle");

function toggleBurgerMenu(e) {
  e.preventDefault();
  burgerMenuBtn.classList.toggle("active");
  burgerMenuWrapper.classList.toggle("active");
  subWrapper.classList.toggle("active");
  if (burgerMenuWrapper.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
}

burgerMenuBtn.addEventListener("click", (e) => {
  toggleBurgerMenu(e);
});

burgerNavigationList.forEach((item) => {
  item.addEventListener("click", (e) => {
    toggleBurgerMenu(e);
  });
});
