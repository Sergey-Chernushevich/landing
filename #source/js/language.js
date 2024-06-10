function changeLanguage(e) {
  e.preventDefault();
  if (langTitle.innerHTML.toUpperCase() === "RU") {
    langTitle.innerHTML = "EN";
  } else {
    langTitle.innerHTML = "RU";
  }
}

changeLanguageButton.addEventListener("click", (e) => {
  changeLanguage(e);
});
