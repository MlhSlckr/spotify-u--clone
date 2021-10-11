const btns = document.querySelectorAll(".menu-link");
const right = document.querySelector(".right");
const settings = document.querySelector(".settings");
const arrow = document.querySelector(".arrow");
const profile = document.querySelector(".profile");
const plays = document.querySelectorAll(".play-btn");
const cards = document.querySelectorAll(".card");
const overlay = document.querySelector(".overlay");

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

plays.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget);
  });
});

const codeArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

function randomColor() {
  let hexCode = "#";
  for (let x = 0; x < 6; x++) {
    hexCode += codeArray[Math.floor(Math.random() * codeArray.length)];
  }
  return hexCode;
}

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    overlay.style.backgroundColor = randomColor();
  });
  card.addEventListener("mouseleave", () => {
    overlay.style.backgroundColor = "";
  });
});
