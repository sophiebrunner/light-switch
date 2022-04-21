const button = document.querySelector("button");
const body = document.querySelector("body");
let title = document.querySelector("title");

const toggleLightSwitch = function () {
  button.classList.toggle("button--night");
  body.classList.toggle("body--night");
};

const goodMorning = function () {
  title = "Good Morning";
};

const goodNight = function () {
  title = "Good Night";
};

button.addEventListener("click", toggleLightSwitch);
button.addEventListener("click", goodMorning);
button.addEventListener("click", goodMorning);
