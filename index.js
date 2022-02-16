const cityName = document.getElementById("city-input");
const BTN = document.getElementById("btn-submit");

const API_KEY = "8a59485fc0098295507e55078609bfee";

const city = document.getElementById("city-name");
const date = document.getElementById("date-now");
const desc = document.getElementById("description");
const temp = document.getElementById("temp");

const loading = document.getElementById("loading");
const weather = document.getElementById("weather");

const newdate = new Date();

BTN.addEventListener("click", () => {
  loading.classList.remove("hidden");
  weather.classList.add("hidden");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}&unit=metric&lang=id`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      // rubah jadi celcius
      data.main.temp = Math.round(data.main.temp - 273.15);

      city.innerText = data.name;
      date.innerText = newdate.toDateString().slice(4);
      desc.innerText = data.weather[0].description;
      temp.innerText = data.main.temp;

      weather.classList.remove("hidden");
      loading.classList.add("hidden");
    });

  cityName.value = "";
});
