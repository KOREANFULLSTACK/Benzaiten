tbody = document.querySelector("tbody");
todoList = document.querySelector(".todoList_real");
today_day = document.querySelector("p");
today_date = document.querySelector("h");

normal_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
standard_day = [`日`, `月`, `火`, `水`, `木`, `金`, `土`];

date = new Date();
nowyear = date.getYear() + 1900;
nowmon = date.getMonth();
nowdate = date.getDate();
nowday = date.getDay();

year_month_date = `${nowyear}-${nowmon + 1}-${nowdate}`; //오늘날짜

function color_today(nowdate) {
  All_td = document.querySelectorAll("td");

  for (td = 0; td < All_td.length; td++) {
    if (nowdate === parseInt(All_td[td].id)) {
      All_td[td].style.backgroundColor = "#94cdfa";
      All_td[td].style.borderRadius = `30%`;
      break;
    }
  }
}

function show_today(date, day) {
  today_date.innerText = `${date}日`;
  today_day.innerText = `${standard_day[day]}曜日`;
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
  year_month_date = `${nowyear}-${nowmon + 1}-${nowdate}`;
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
  year_month_date = `${nowyear}-${nowmon + 1}-${nowdate}`;
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
  tmp.innerText = `${year} ${month + 1}月 `;
  title.appendChild(tmp);

  tmp = document.createElement("button");
  tmp.innerText = ">";
  tmp.addEventListener("click", show_right);
  title.appendChild(tmp);

  t0 = document.createElement("tr");
  tbody.appendChild(t0);

  for (k = 0; k < 7; k++) {
    tmp0 = document.createElement("td");

    if (k === 0) {
      tmp0.style.color = `#fc6583`;
    }
    if (k === 6) {
      tmp0.style.color = `#7f93ff`;
    }
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
      tmp1.innerText = i + 1; //font color red
      if (i + t === 0) {
        tmp1.style.color = `#fc6583`;
      }
      if (i + t === 6) {
        tmp1.style.color = `#7f93ff`;
      }
      tmp1.addEventListener("click", click_date);

      year_month_date = `${nowyear}-${nowmon + 1}-${tmp1.id}`; //오늘날짜
      if (
        localStorage.getItem(year_month_date) &&
        localStorage.getItem(year_month_date) !== "[]"
      ) {
        tmp1_div = document.createElement("div");
        tmp1_i = document.createElement("i");
        tmp1_div.className = "fas fa-exclamation";
        tmp1_div.appendChild(tmp1_i);
        tmp1.appendChild(tmp1_div);
      }

      t1.appendChild(tmp1);
    } else if (i + t < 14) {
      tmp2 = document.createElement("td");
      tmp2.innerText = i + 1;
      tmp2.id = i + 1;
      if (i + t === 7) {
        tmp2.style.color = `#fc6583`;
      }
      if (i + t === 13) {
        tmp2.style.color = `#7f93ff`;
      }
      tmp2.addEventListener("click", click_date);
      //
      year_month_date = `${nowyear}-${nowmon + 1}-${tmp2.id}`; //오늘날짜
      if (
        localStorage.getItem(year_month_date) &&
        localStorage.getItem(year_month_date) !== "[]"
      ) {
        tmp2_div = document.createElement("div");
        tmp2_i = document.createElement("i");
        tmp2_div.className = "fas fa-exclamation";
        tmp2_div.appendChild(tmp2_i);
        tmp2.appendChild(tmp2_div);
      }
      //
      t2.appendChild(tmp2);
    } else if (i + t < 21) {
      tmp3 = document.createElement("td");
      tmp3.innerText = i + 1;
      tmp3.id = i + 1;
      if (i + t === 14) {
        tmp3.style.color = `#fc6583`;
      }
      if (i + t === 20) {
        tmp3.style.color = `#7f93ff`;
      }
      tmp3.addEventListener("click", click_date);

      year_month_date = `${nowyear}-${nowmon + 1}-${tmp3.id}`; //오늘날짜
      if (
        localStorage.getItem(year_month_date) &&
        localStorage.getItem(year_month_date) !== "[]"
      ) {
        tmp3_div = document.createElement("div");
        tmp3_i = document.createElement("i");
        tmp3_div.className = "fas fa-exclamation";
        tmp3_div.appendChild(tmp3_i);
        tmp3.appendChild(tmp3_div);
      }

      t3.appendChild(tmp3);
    } else if (i + t < 28) {
      tmp4 = document.createElement("td");
      tmp4.innerText = i + 1;
      tmp4.id = i + 1;
      if (i + t === 21) {
        tmp4.style.color = `#fc6583`;
      }
      if (i + t === 27) {
        tmp4.style.color = `#7f93ff`;
      }
      tmp4.addEventListener("click", click_date);

      year_month_date = `${nowyear}-${nowmon + 1}-${tmp4.id}`; //오늘날짜
      if (
        localStorage.getItem(year_month_date) &&
        localStorage.getItem(year_month_date) !== "[]"
      ) {
        tmp4_div = document.createElement("div");
        tmp4_i = document.createElement("i");
        tmp4_div.className = "fas fa-exclamation";
        tmp4_div.appendChild(tmp4_i);
        tmp4.appendChild(tmp4_div);
      }

      t4.appendChild(tmp4);
    } else if (i + t < 35) {
      tmp5 = document.createElement("td");
      tmp5.innerText = i + 1;
      tmp5.id = i + 1;
      if (i + t === 28) {
        tmp5.style.color = `#fc6583`;
      }
      if (i + t === 34) {
        tmp5.style.color = `#7f93ff`;
      }
      tmp5.addEventListener("click", click_date);

      year_month_date = `${nowyear}-${nowmon + 1}-${tmp5.id}`; //오늘날짜
      if (
        localStorage.getItem(year_month_date) &&
        localStorage.getItem(year_month_date) !== "[]"
      ) {
        tmp5_div = document.createElement("div");
        tmp5_i = document.createElement("i");
        tmp5_div.className = "fas fa-exclamation";
        tmp5_div.appendChild(tmp5_i);
        tmp5.appendChild(tmp5_div);
      }

      t5.appendChild(tmp5);
    } else {
      tmp6 = document.createElement("td");
      tmp6.innerText = i + 1;
      tmp6.id = i + 1;
      if (i + t === 35) {
        tmp6.style.color = `#fc6583`;
      }

      tmp6.addEventListener("click", click_date);
      year_month_date = `${nowyear}-${nowmon + 1}-${tmp6.id}`; //오늘날짜
      if (
        localStorage.getItem(year_month_date) &&
        localStorage.getItem(year_month_date) !== "[]"
      ) {
        tmp6_div = document.createElement("div");
        tmp6_i = document.createElement("i");
        tmp6_div.className = "fas fa-exclamation";
        tmp6_div.appendChild(tmp6_i);
        tmp6.appendChild(tmp6_div);
      }
      t6.appendChild(tmp6);
    }
  }
}

function click_date() {
  tmp_arr = document.querySelectorAll("td");
  for (tmp = 8; tmp < tmp_arr.length; tmp++) {
    if (tmp_arr[tmp].style.backgroundColor !== "#7E7E7E") {
      tmp_arr[tmp].style.backgroundColor = "#7E7E7E";
    }
  }
  target_date = event.target;
  target_date.style.backgroundColor = "#94cdfa";
  target_date.style.borderRadius = `25%`;

  nowdate = target_date.id;
  day = new Date(`${nowyear}-${nowmon + 1}-${nowdate}`).getDay();
  year_month_date = `${nowyear}-${nowmon + 1}-${nowdate}`;
  show_today(nowdate, day);
  visible(year_month_date);
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
