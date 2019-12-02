calendar = document.querySelector(".calendar");
title = document.querySelector(".title_calendar");

row0 = document.querySelector(".row0");
row1 = document.querySelector(".row1");
row2 = document.querySelector(".row2");
row3 = document.querySelector(".row3");
row4 = document.querySelector(".row4");
row5 = document.querySelector(".row5");

normal_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
standard_day = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];

date = new Date();
nowyear = date.getYear() + 1900;
nowmon = date.getMonth();
nowdate = date.getDate();
nowday = date.getDay();

function show_clear() {
  row1.remove();
  row2.remove();
  row3.remove();
  row4.remove();
  row5.remove();
}

function show_left() {
  show_clear();
  if (nowmon === 1) {
    left_month = 12;
    left_year = nowyear - 1;
  }
  left_year = nowyear;
  left_month = nowmon - 1;
  left_day = new Date(`${left_year}-${left_month}-01`).getDay();
  get_calendar(left_year, left_month, left_day, nowdate);
  nowyear = left_year;
  nowmon = left_month;
  nowday = left_day;

  console.log(nowyear + "`" + nowmon + `+` + nowday);
}
function show_right() {
  console.log(nowyear + "`" + nowmon + `+` + nowday);
  if (nowmon === 12) {
    right_month = 1;
    right_year = nowyear + 1;
  }
  right_year = nowyear;
  right_month = nowmon + 1;
  right_day = new Date(`${right_year}-${right_month}-01`).getDay();
  get_calendar(right_year, right_month, right_day, nowdate);
  nowyear = right_year;
  nowmon = right_month;
  nowday = right_day;

  console.log(nowyear + "`" + nowmon + `+` + nowday);
}

function make_cal_head(year, month, day, date) {
  tmp = document.createElement("button");
  tmp.innerText = "<";
  tmp.addEventListener("click", show_left);
  title.appendChild(tmp);

  tmp = document.createElement("td");
  tmp.innerText = `${year} ${month + 1} ${date} ${standard_day[day]}`;
  title.appendChild(tmp);

  tmp = document.createElement("button");
  tmp.innerText = ">";
  tmp.addEventListener("click", show_right);
  title.appendChild(tmp);

  for (k = 0; k < 7; k++) {
    tmp0 = document.createElement("td");

    tmp0.innerText = standard_day[k];
    row0.appendChild(tmp0);
  }
}

function get_calendar(year, month, day, date) {
  firstday = day; //1일의 요일

  for (t = 0; t < firstday; t++) {
    tmp1 = document.createElement("td");
    tmp1.id = t;
    tmp1.innerText = "";
    row1.appendChild(tmp1);
  }

  for (i = 0; i < normal_date[month - 1]; i++) {
    if (i + t <= 6) {
      tmp1 = document.createElement("td");
      tmp1.id = i + 1;
      tmp1.innerText = i + 1;
      row1.appendChild(tmp1);
    } else if (i + t < 14) {
      tmp2 = document.createElement("td");
      tmp2.innerText = i + 1;
      tmp2.id = i + 1;
      row2.appendChild(tmp2);
    } else if (i + t < 21) {
      tmp3 = document.createElement("td");
      tmp3.innerText = i + 1;
      tmp3.id = i + 1;
      row3.appendChild(tmp3);
    } else if (i + t < 28) {
      tmp4 = document.createElement("td");
      tmp4.innerText = i + 1;
      tmp4.id = i + 1;
      row4.appendChild(tmp4);
    } else {
      tmp5 = document.createElement("td");
      tmp5.innerText = i + 1;
      tmp5.id = i + 1;
      row5.appendChild(tmp5);
    }
  }
}

function init() {
  /* debugger; */
  make_cal_head(
    nowyear,
    nowmon,
    new Date(`${nowyear}-${nowmon}-01`).getDay(),
    nowdate
  );

  get_calendar(
    nowyear,
    nowmon,
    new Date(`${nowyear}-${nowmon + 1}-01`).getDay(),
    nowdate
  );
}

init();
