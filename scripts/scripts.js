const themeButton = document.querySelector("#theme-button");
const root = document.documentElement;

themeButton.addEventListener("click", function () {
  if (root.classList.contains("light")) {
    root.classList.remove("light");
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
  }
});
