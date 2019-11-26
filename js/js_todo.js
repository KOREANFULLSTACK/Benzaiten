const INPUT = document.querySelector(".pannel_Input");
const INPUT_TODO = INPUT.querySelector("input");
const INSERT_LIST = document.querySelector(".fatherList");

function enterKey(event) {
  if (window.event.keyCode == 13) {
    clickEvent();
  }
}

function createList(text_todo) {
  li = document.createElement("li");
  btn_del = document.createElement("button");
  btn_del.value = text_todo;
  btn_del.onclick = function() {
    target(event);
  };
  li.innerText = text_todo;
  li.appendChild(btn_del);
  INSERT_LIST.appendChild(li);
}

function clickEvent() {
  Json_arr = new Array();
  text_todo = INPUT_TODO.value;
  createList(text_todo);
  if (localStorage.getItem("todo")) {
    Json_arr = JSON.parse(localStorage.getItem("todo"));
  }
  Json_arr.push(text_todo);
  loadTodo(Json_arr);
  INPUT_TODO.value = "";
}

function loadTodo(father_todo) {
  localStorage.setItem("todo", JSON.stringify(father_todo));
}

function visible() {
  if (localStorage.getItem("todo")) {
    Json_arr = JSON.parse(localStorage.getItem("todo"));
    for (i = 0; i < Json_arr.length; i++) {
      text_todo = Json_arr[i];
      createList(text_todo);
    }
  }
}
function init() {
  visible();
}

function target(event) {
  remove_target = event.target.value;
  /* taisi = document.querySelectorAll("li"); //array
  for (i = 0; i < taisi.length; i++) {
    console.log(taisi[i]);
  } */
  localStorage.removeItem(remove_target);
}

init();
/* 
function target(event) {
  remove_target = event.target.value;
  taisi = document.querySelectorAll("li"); //array
  console.log(remove_target + "taisi[1]" + taisi[1]);

  for (i = 0; i < taisi.length; i++) {
    if (remove_target === taisi[i]) {
      taisi.removeChild[i];
      console.log("remove..." + taisi[i]);
      return;
    }
  }
} */
