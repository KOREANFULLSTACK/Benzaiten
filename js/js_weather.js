const API_ID = `a562fb1dbdc716ddd661211cc048d309`;
weather = document.querySelector(".p_weather");

//API로 위도경도받아서 그걸 토대로 날씨/지역 찾아내기.

//HOW TO CALL API FROM WEBSITE OPEN
function getWeather(lat, lon) {
  //fetch할때 https:// 붙여줘야 해 그리고 마지막에 &appid도 해줘야대
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_ID}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.feels_like;
      const wind = json.wind.speed;
      const place = json.name;
      const country = json.sys.country;
      const cloud = json.clouds.all;
      const main = json.weather[0].main;
      weather.innerText = `${country}  ${place} 体感${temp}˚C
      ${main}     風 ${wind}m/s    曇 ${cloud}%`;
    });
}

function askForSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const obj_location = {
    //API 웹으로 부터 받는 데이터는 JSON이기때문에
    laptitude: latitude,
    longitude: longitude
  };
  //JSON을 쓸거기때문에 JSON으로 만들어놓고 저장
  localStorage.setItem(`location`, JSON.stringify(obj_location));
  getWeather(latitude, longitude);
}
function askForErr(error) {
  console.log("Cant Access");
}
function askForCoods() {
  //위치정보 얻어도될까요?
  navigator.geolocation.getCurrentPosition(askForSuccess, askForErr);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(`location`);
  if (!loadedCoords) {
    askForCoods();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.laptitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
