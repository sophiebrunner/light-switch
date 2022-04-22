const button = document.querySelector("button");
const body = document.querySelector("body");

const toggleLightSwitch = function () {
  button.classList.toggle("button--night");
  body.classList.toggle("body--night");
  if (button.classList.contains("button--night")) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
};

button.addEventListener("click", toggleLightSwitch);
