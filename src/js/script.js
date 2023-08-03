const header = document.querySelector(".header");
const main = document.querySelector(".main");
const btn = document.querySelector(".btn");
const login = document.querySelector(".active-login");
const overlay = document.querySelector(".overlay");
const exitBtn = document.getElementById("exit");
const container = document.getElementById("container");
const labels = document.querySelectorAll(".active-login label");



labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms;">${letter}</span>`
    )
    .join("");
});

function loginEvent() {
  btn.addEventListener("click", () => {
    login.classList.toggle("hidden");
    container.classList.toggle("hidden");
    overlay.style.display = "block";
  });
  exitBtn.addEventListener("click", () => {
    container.classList.toggle("hidden");
    login.classList.add("hidden");
    overlay.style.display = "none";
  });
}

loginEvent();
