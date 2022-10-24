const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const timeZone = document.getElementById("timeZone");
const coords = document.querySelector(".coord").querySelectorAll("p");
const weatherType = document.getElementById("weatherType");
const weatherDesc = document.getElementById("weatherDesc");
const temp = document.querySelector(".temp").querySelectorAll("p");
const visibility = document.getElementById("visibility");
const wind = document.querySelector(".wind").querySelectorAll("p");
const clouds = document.getElementById("clouds");
const weatherImg = document.getElementById("weatherImg");



function getData() {
    // let loc 
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Virginia&appid=2405d338b8f6702827e8a40da43d496c`;
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onload = function () {
        if (this.status === 200) {

            let data = JSON.parse(this.responseText);
            cityName.textContent = `Location : ${data.name}`;
            country.textContent = `Country : ${data.sys.country}`;
            timeZone.textContent = `Timezone : ${data.timezone}`;
            coords[0].textContent = `Longitude : ${data.coord.lon}`;
            coords[1].textContent = `Latitude : ${data.coord.lat}`;
            weatherType.textContent = `Weather type : ${data.weather[0].main}`;
            weatherDesc.textContent = `Weather description : ${data.weather[0].description}`;
            weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            temp[0].textContent = `Original Temperature : ${ktc(data.main.temp)}`;
            temp[1].textContent = `But it feels like ${ktc(data.main.feels_like)}`;
            temp[2].textContent = `Min temperature ${ktc(data.main.temp_min)}`;
            temp[3].textContent = `Max temperature ${ktc(data.main.temp_max)}`;
            temp[4].textContent = `Pressure : ${data.main.pressure}`;
            temp[5].textContent = `Humidity : ${data.main.humidity}`;
            visibility.textContent = `Visibility : ${data.visibility}`;
            wind[0].textContent = `Wind speed : ${data.wind.speed}`;
            wind[1].textContent = `Wind deg : ${data.wind.deg}`;



        } else {
            alert("some error occured")
        }
    }
    xhr.send()
}
getData()