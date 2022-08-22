function setCurrentTime() {
  let currentDate = new Date();

  let currentHours = ("0" + currentDate.getHours()).slice(-2);
  let currentMinutes = ("0" + currentDate.getMinutes()).slice(-2);

  let currentTime = `${currentHours}:${currentMinutes}`;

  return currentTime;
}

let time = document.querySelector("#hour");
time.innerHTML = setCurrentTime();

function setCurrentDate() {
  let now = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let currentDay = `${day}, ${date}th of ${month}`;
  return currentDay;
}

let date = document.querySelector("#date");
date.innerHTML = setCurrentDate();

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function search(event) {
  event.preventDefault();
  let apiKey = "cb285c35181a5d5c66966a7c4501fc8f";
  let city = document.querySelector("#city-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  city.value = "";
  city.blur();
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
