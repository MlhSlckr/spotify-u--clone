const btns = document.querySelectorAll(".menu-link");
const right = document.querySelector(".right");
const settings = document.querySelector(".settings");
const arrow = document.querySelector(".arrow");
const profile = document.querySelector(".profile");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    if (item) {
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });
});

right.addEventListener("click", () => {
  settings.classList.toggle("is-show");
  arrow.classList.toggle("rotate");
  profile.classList.toggle("background");
});
