const INPUT = document.querySelector(".pannel_Input");
const INPUT_TODO = INPUT.querySelector("input");
const INSERT_LIST = document.querySelector(".fatherList");
const PANNEL_LIST = document.querySelector(".pannel_List");

year_month_date = `${nowyear}-${nowmon + 1}-${nowdate}`; //오늘날짜

function enterKey(event) {
  //Inpt todoList
  if (window.event.keyCode == 13) {
    clickEvent();
  }
}

function clickEvent() {
  //Inpt todoList
  Json_arr = new Array();
  text_todo = INPUT_TODO.value;
  createList(text_todo);

  if (localStorage.getItem(year_month_date)) {
    Json_arr = JSON.parse(localStorage.getItem(year_month_date));
  }
  Json_arr.push(text_todo);
  loadTodo(Json_arr);
  INPUT_TODO.value = "";
}

function createList(text_todo) {
  li = document.createElement("li");
  i = document.createElement("i");
  btn_del = document.createElement("button");

  i.className = "fas fa-times";
  btn_del.type = "button";
  btn_del.addEventListener("click", target_remove);

  btn_del.appendChild(i);
  btn_del.style.boderRadius = "8px";

  li.innerText = text_todo;

  li.appendChild(btn_del);
  INSERT_LIST.appendChild(li);
  PANNEL_LIST.appendChild(INSERT_LIST);
}

function loadTodo(father_todo) {
  localStorage.setItem(year_month_date, JSON.stringify(father_todo));
}

function target_remove(event) {
  Json_arr = new Array();
  remove_target = event.target.parentNode;

  Json_arr = JSON.parse(localStorage.getItem(year_month_date));
  for (j = 0; j < Json_arr.length; j++) {
    if (remove_target.parentNode.textContent === Json_arr[j]) {
      remove_target.parentNode.remove(remove_target);
      Json_arr.splice(j, 1);
      localStorage.setItem(year_month_date, JSON.stringify(Json_arr));
    }
  }
}

function visible(year_month_date) {
  removeList();
  if (localStorage.getItem(year_month_date)) {
    Json_arr = JSON.parse(localStorage.getItem(year_month_date));
    for (j = 0; j < Json_arr.length; j++) {
      text_todo = Json_arr[j];
      createList(text_todo);
    }
  }
}

function removeList() {
  length = document.querySelectorAll("li").length;
  for (i = 0; i < length; i++) {
    li = document.querySelector("li");
    li.remove();
  }
}

function init() {
  visible(year_month_date);
}
init();
