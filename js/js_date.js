const DATE = document.querySelector(".container1_date");

function get_Date() {
  arr_day = { 0: `日`, 1: `月`, 2: `火`, 3: `水`, 4: `木`, 5: `金`, 6: `土` };
  arr_mon = {
    0: `1`,
    1: `2`,
    2: `3`,
    3: `4`,
    4: `5`,
    5: `6`,
    6: `7`,
    7: `8`,
    8: `9`,
    9: `10`,
    10: `11`,
    11: `12`
  };

  date = new Date();
  tmp_day = date.getDay();
  tmp_mon = date.getMonth();

  mon = arr_mon[tmp_mon];
  day = arr_day[tmp_day];
  date1 = date.getDate();

  fullDate = `${mon}月${date1}日 ${day}`;
  DATE.innerText = fullDate;
}

function init() {
  get_Date();
}

init();
