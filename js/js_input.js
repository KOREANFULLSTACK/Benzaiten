const GREET = document.querySelector(".greet");
const INPUTVALUE = document.querySelector(".greet_input");

const setText = GREET.querySelector("h1");

function enterKey(event) {
  if (window.event.keyCode == 13) {
    userName = INPUTVALUE.value;
    if (!userName) {
      alert("ちゃんとしろよ。");
      return null;
    }
    INPUTVALUE.style.display = "none";
    localStorage.setItem("userName", userName);
  }
}

function init() {}
