const header = document.querySelector(".header");
const btn = document.querySelectorAll(".btn");
const login = document.querySelector(".active-login");


btn.addEventListener("click", () => {
  login.classList.toggle("hidden");
});
