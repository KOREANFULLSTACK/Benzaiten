const INPUT = document.querySelector(".pannel_Input");
const INPUT_TODO = INPUT.querySelector("input");
const INSERT_LIST = document.querySelector(".fatherList");

function clickEvent() {
  text_todo = INPUT_TODO.value;
  li = document.createElement("li");
  btn_del = document.createElement("button");
  li.innerText = text_todo;
  li.appendChild(btn_del);
  INSERT_LIST.appendChild(li);
}

function init() {}

init();
