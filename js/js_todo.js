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
  i = document.createElement("i");
  btn_del = document.createElement("button");

  console.log(text_todo);

  i.className = "fas fa-times";
  btn_del.value = text_todo;
  btn_del.appendChild(i);
  btn_del.style.boderRadius = "8px";
  btn_del.onclick = function() {
    target(event);
  };
  li.innerText = text_todo;

  li.appendChild(btn_del);
  INSERT_LIST.appendChild(li);
  console.log(text_todo);
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
    for (j = 0; j < Json_arr.length; j++) {
      console.log(Json_arr.length);
      text_todo = Json_arr[j];
      console.log(j);
      createList(text_todo);
    }
    console.log("end");
  }
}
function target(event) {
  Json_arr = new Array();
  remove_target = event.target.parentNode;

  Json_arr = JSON.parse(localStorage.getItem("todo"));
  for (j = 0; j < Json_arr.length; j++) {
    if (remove_target.value === Json_arr[j]) {
      remove_target.parentNode.remove(remove_target);
      Json_arr.splice(j, 1);
      localStorage.setItem("todo", JSON.stringify(Json_arr));
    }
  }
}

function init() {
  visible();
}
init();
