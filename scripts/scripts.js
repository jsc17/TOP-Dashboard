const themeButton = document.querySelector("#theme-button");
const root = document.documentElement;
const headerIcons = document.querySelectorAll(".filter-light");

themeButton.addEventListener("click", function () {
  if (root.classList.contains("light")) {
    root.classList.remove("light");
    root.classList.add("dark");
    headerIcons.forEach((icon) => {
      icon.classList.remove("filter-light");
      icon.classList.add("filter-dark");
    });
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
    headerIcons.forEach((icon) => {
      icon.classList.remove("filter-dark");
      icon.classList.add("filter-light");
    });
  }
});
