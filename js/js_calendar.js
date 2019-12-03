tbody = document.querySelector("tbody");
todoList = document.querySelector(".todoList_real");
today_day = document.querySelector("p");
today_date = document.querySelector("h");

normal_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
standard_day = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];

date = new Date();
nowyear = date.getYear() + 1900;
nowmon = date.getMonth();
nowdate = date.getDate();
nowday = date.getDay();

function color_today(nowdate) {
  All_td = document.querySelectorAll("td");

  for (td = 0; td < All_td.length; td++) {
    if (nowdate === parseInt(All_td[td].id)) {
      All_td[td].style.backgroundColor = "#94cdfa";
      break;
    }
  }
}

function show_today(date, day) {
  today_day.innerText = `${standard_day[day]}요일`;
  today_date.innerText = `${date}일`;
}

function show_clear() {
  title.remove();
  t0.remove();
  t1.remove();
  t2.remove();
  t3.remove();
  t4.remove();
  t5.remove();
  t6.remove();
}

function show_left() {
  show_clear();
  if (nowmon === 0) {
    left_month = 11;
    left_year = nowyear - 1;
  } else {
    left_year = nowyear;
    left_month = nowmon - 1;
  }
  left_day = new Date(`${left_year}-${left_month + 1}-01`).getDay();
  show_today(nowdate, left_day);
  make_cal_head(left_year, left_month, left_day, nowdate);
  get_calendar(left_year, left_month, left_day, nowdate);
  nowyear = left_year;
  nowmon = left_month;
  nowday = left_day;
}
function show_right() {
  show_clear();
  if (nowmon === 11) {
    right_month = 0;
    right_year = nowyear + 1;
  } else {
    right_year = nowyear;
    right_month = nowmon + 1;
  }
  right_day = new Date(`${right_year}-${right_month + 1}-01`).getDay();
  show_today(nowdate, right_day);
  make_cal_head(right_year, right_month, right_day, nowdate);
  get_calendar(right_year, right_month, right_day, nowdate);
  nowyear = right_year;
  nowmon = right_month;
  nowday = right_day;
}

function make_cal_head(year, month, day, date) {
  title = document.createElement("tr");
  title.className = "calendar_head";
  tbody.appendChild(title);

  tmp = document.createElement("button");
  tmp.innerText = "<";
  tmp.addEventListener("click", show_left);
  title.appendChild(tmp);

  tmp = document.createElement("td");
  tmp.innerText = `${year} ${month + 1}월 `;
  title.appendChild(tmp);

  tmp = document.createElement("button");
  tmp.innerText = ">";
  tmp.addEventListener("click", show_right);
  title.appendChild(tmp);

  t0 = document.createElement("tr");
  tbody.appendChild(t0);

  for (k = 0; k < 7; k++) {
    tmp0 = document.createElement("td");

    tmp0.innerText = standard_day[k];
    t0.appendChild(tmp0);
  }
}

function get_calendar(year, month, day, date) {
  firstday = day; //1일의 요일

  t1 = document.createElement("tr");
  t1.className = "row1";
  tbody.appendChild(t1);

  for (t = 0; t < firstday; t++) {
    tmp1 = document.createElement("td");

    tmp1.innerText = "";
    t1.appendChild(tmp1);
  }

  t2 = document.createElement("tr");
  t2.className = "row2";
  tbody.appendChild(t2);

  t3 = document.createElement("tr");
  t3.className = "row3";
  tbody.appendChild(t3);

  t4 = document.createElement("tr");
  t4.className = "row4";
  tbody.appendChild(t4);

  t5 = document.createElement("tr");
  t5.className = "row5";
  tbody.appendChild(t5);

  t6 = document.createElement("tr");
  t6.className = "row6";
  tbody.appendChild(t6);

  for (i = 0; i < normal_date[month]; i++) {
    if (i + t <= 6) {
      tmp1 = document.createElement("td");
      tmp1.id = i + 1;
      tmp1.innerText = i + 1;
      tmp1.addEventListener("click", click_date);
      t1.appendChild(tmp1);
    } else if (i + t < 14) {
      tmp2 = document.createElement("td");
      tmp2.innerText = i + 1;
      tmp2.id = i + 1;
      tmp2.addEventListener("click", click_date);
      t2.appendChild(tmp2);
    } else if (i + t < 21) {
      tmp3 = document.createElement("td");
      tmp3.innerText = i + 1;
      tmp3.id = i + 1;
      tmp3.addEventListener("click", click_date);
      t3.appendChild(tmp3);
    } else if (i + t < 28) {
      tmp4 = document.createElement("td");
      tmp4.innerText = i + 1;
      tmp4.id = i + 1;
      tmp4.addEventListener("click", click_date);
      t4.appendChild(tmp4);
    } else if (i + t < 35) {
      tmp5 = document.createElement("td");
      tmp5.innerText = i + 1;
      tmp5.id = i + 1;
      tmp5.addEventListener("click", click_date);
      t5.appendChild(tmp5);
    } else {
      tmp6 = document.createElement("td");
      tmp6.innerText = i + 1;
      tmp6.id = i + 1;
      tmp6.addEventListener("click", click_date);
      t6.appendChild(tmp6);
    }
  }
}

function click_date() {
  target = event.target.id;
  target.style.backgroundColor = "#94cdfa";

  //타겟변경 색깔색칠 만들기
  //left screen 변하는 거
  // 할일컨텐츠만들기
}

function init() {
  show_today(nowdate, nowday);
  make_cal_head(
    nowyear,
    nowmon,
    new Date(`${nowyear}-${nowmon + 1}-01`).getDay(),
    nowdate
  );

  get_calendar(
    nowyear,
    nowmon,
    new Date(`${nowyear}-${nowmon + 1}-01`).getDay(),
    nowdate
  );

  color_today(nowdate);
}

init();
