const clock = document.querySelector(".container1_clock");
const clockTitle = clock.querySelector("h1");

function getTime() {
  date = new Date();
  minutes = date.getMinutes();
  hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
