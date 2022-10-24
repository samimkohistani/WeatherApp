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
            let data = this.responseText
            data = JSON.parse(data)
            
        } else {
            alert("some error occured")
        }
    }
    xhr.send()
}
getData()