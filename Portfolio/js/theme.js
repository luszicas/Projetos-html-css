const toggle = document.getElementById("themeToggle");
const body = document.body;
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");

    icon.classList.toggle("bi-moon-fill");
    icon.classList.toggle("bi-sun-fill");
});















