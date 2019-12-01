calendar = document.querySelector(".calendar");
row1 = document.querySelector(".row1");
row2 = document.querySelector(".row2");
row3 = document.querySelector(".row3");
row4 = document.querySelector(".row4");
row5 = document.querySelector(".row5");
normal_date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
standard_day = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];

date = new Date();
whatday = date.getDay();
whatmonth = date.getMonth() - 1;
whatyear = date.getYear() - 100;
whatdate = date.getDate();

function get_firstday() {
  tmp = (whatdate - 1) % 7;

  if (whatday - tmp < 0) {
    if (whatday === 0) firstday = 7 - tmp;
    else firstday = 6 - tmp;
  } else firstday = whatday - tmp;

  console.log(
    `현재 년 월 일 : ${whatyear} ${whatmonth + 2} ${whatday + 1} ${
      standard_day[whatday]
    }`
  );
  return firstday;
}

function getDate() {
  firstday = get_firstday(); //1일의 요일

  if (firstday === 0) normal_date[whatmonth] += +1;

  //고치기
  for (i = 0, t = 0; i < normal_date[whatmonth] + t; i++) {
    if (i <= 6) {
      if (t < firstday) {
        tmp1 = document.createElement("td");
        tmp1.id = i;
        tmp1.innerText = "";
        row1.appendChild(tmp1);
        t++;
      } else {
        tmp1 = document.createElement("td");
        tmp1.id = i;
        tmp1.innerText = i + 1 - t;
        row1.appendChild(tmp1);
      }
    } else if (i < 14) {
      tmp2 = document.createElement("td");
      tmp2.innerText = i + 1 - t;
      tmp2.id = i;
      row2.appendChild(tmp2);
    } else if (i < 21) {
      tmp3 = document.createElement("td");
      tmp3.innerText = i + 1 - t;
      tmp3.id = i;
      row3.appendChild(tmp3);
    } else if (i < 28) {
      tmp4 = document.createElement("td");
      tmp4.innerText = i + 1 - t;
      tmp4.id = i;
      row4.appendChild(tmp4);
    } else {
      tmp5 = document.createElement("td");
      tmp5.innerText = i + 1 - t;
      tmp5.id = i;
      row5.appendChild(tmp5);
    }
  }
}

function init() {
  getDate();
  get_firstday();
}

init();
