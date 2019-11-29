const SUBMIT = document.querySelector("button");

/* arr_reserve = new Array(); */
arr_reserve = new Object();

function reserve() {
  (NAME = document.querySelector(".input_name").value),
    (PHONE = document.querySelector(".input_phone").value),
    (PEOPLE = document.querySelector(".input_people").value),
    (DATE = document.querySelector(".input_date").value),
    (PRICE = document.querySelector(".input_price").value);

  tmp = {
    name: NAME.value,
    phone: document.querySelector(".input_phone").value,
    people: document.querySelector(".input_people").value,
    date: document.querySelector(".input_date").value,
    price: document.querySelector(".input_price").value
  };

  loadReserve(tmp);
}

function loadReserve(tmp) {
  str_reserve = getReserve();
  arr_reserve = [];

  if (str_reserve) {
    get_json = JSON.parse(str_reserve); //get_json : Oject , arr_reserve : String

    for (i = 0; i < get_json.length; i++) {
      arr_reserve.push(get_json[i]);
    }
    arr_reserve.push(tmp);
  } else {
    arr_reserve.push(tmp);
  }
  localStorage.setItem("RESERVE", JSON.stringify(arr_reserve));
}

function getReserve() {
  reserveNow = localStorage.getItem("RESERVE");
  return reserveNow; //from JSON so String
}

function Init() {
  SUBMIT.addEventListener("click", reserve);
}

Init();
