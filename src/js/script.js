const header = document.querySelector(".header");
const main = document.querySelector(".main");
const btn = document.querySelector(".btn");
const login = document.querySelector(".active-login");
const overlay = document.querySelector(".overlay");
const exitBtn = document.getElementById("exit");

function loginEvent() {
  btn.addEventListener("click", () => {
    login.classList.toggle("hidden");
    overlay.style.display = "block";
  });
  exitBtn.addEventListener("click", () => {
    login.classList.add("hidden");
    overlay.style.display = "none";
  });
}

loginEvent();
