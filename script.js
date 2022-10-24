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