calendar = document.querySelector(".calendar");
row1 = document.querySelector(".row1");
row2 = document.querySelector(".row2");
row3 = document.querySelector(".row3");
row4 = document.querySelector(".row4");
row5 = document.querySelector(".row5");
normal_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
standard_day = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];

date = new Date();
whatyear = date.getYear() - 100;
whatmonth = date.getMonth() - 1;
whatdate = date.getDate();
whatday = date.getDay();

/* function get_firstday(year, month, date, day) {
  tmp = (date - 1) % 7;

  if (whatday - tmp < 0) {
    if (day === 0) firstday = 7 - tmp;
    else firstday = day - tmp;
  } else firstday = day - tmp;

  return firstday;
} */

function getDate(year, month, date, day) {
  firstday = day; //1일의 요일

  //고치기
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
  /* getDate(whatyear, whatmonth, whatdate, whatday); */
  /* debugger; */
  getDate(2019, 10, 1, new Date("2019-10-01").getDay());
}

init();
