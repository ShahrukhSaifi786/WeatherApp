const apiKey = "8795b99e3b19c0cc2d733f252aea0e2c";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const input = document.querySelector("input");
const btn = document.querySelector("button");
const weather_icon = document.querySelector(".img");
const weather_container = document.querySelector(".weather-container");

async function checked(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    weather_container.style.display = "none";
  } else {
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
      weather_icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weather_icon.src = "images/Clear.png";
    } else if (data.weather[0].main == "Rain") {
      weather_icon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather_icon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weather_icon.src = "images/mist.png";
    }
    weather_container.style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please Enter City");
  } else {
    checked(input.value);
    input.value = "";
  }
});
