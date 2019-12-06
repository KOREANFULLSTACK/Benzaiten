const form = document.querySelector(".js_form");
const input = document.querySelector("input");

const text = document.querySelector(".greet");
const Text = text.querySelector("h1");

function visible() {
  userName = loadUser();
  if (userName === "null") {
  } else {
    input.style.display = "none";
    Text.innerText = `ようこそ ${userName}ちゃん❕`;
  }
}

function loadUser() {
  name = localStorage.getItem(`userName`);
  return name;
}

function init() {
  visible();
}
init();
