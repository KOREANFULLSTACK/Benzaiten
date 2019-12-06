const INSERT_LIST = document.querySelector(".today_todo");
const PANNEL_LIST = document.querySelector(".pannel_List");

standard_day = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];

date = new Date();
nowyear = date.getYear() + 1900;
nowmon = date.getMonth();
nowdate = date.getDate();
nowday = date.getDay();

year_month_date = `${nowyear}-${nowmon + 1}-${nowdate}`; //오늘날짜

function visible(year_month_date) {
  //removeList();
  if (localStorage.getItem(year_month_date)) {
    Json_arr = JSON.parse(localStorage.getItem(year_month_date));
    for (j = 0; j < Json_arr.length; j++) {
      text_todo = Json_arr[j];
      createList(text_todo);
    }
  }
}

function createList(text_todo) {
  li = document.createElement("li");
  i = document.createElement("i");
  btn_del = document.createElement("button");

  i.className = "fas fa-times";
  btn_del.type = "button";
  btn_del.addEventListener("click", target_remove_main);

  btn_del.appendChild(i);
  btn_del.style.boderRadius = "8px";

  li.innerText = text_todo;

  li.appendChild(btn_del);
  INSERT_LIST.appendChild(li);
  PANNEL_LIST.appendChild(INSERT_LIST);
}

function target_remove_main(event) {
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

function init() {
  //debugger;
  visible(year_month_date);
}

init();
