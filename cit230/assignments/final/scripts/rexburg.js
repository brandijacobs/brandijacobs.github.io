var apiRURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
var weatherRRequest = new XMLHttpRequest();
weatherRRequest.open('GET', apiRURLstring, true);
weatherRRequest.responseType = 'json';
weatherRRequest.send();


weatherRRequest.onload = function() {
    var weatherRData = weatherRRequest.response;
    var temp = weatherRData.main.temp;
    var speed = weatherRData.wind.speed;

    document.getElementById("rexburg-current-temp").innerHTML += temp.toFixed(0);
    document.getElementById("rexburg-current-speed").innerHTML += weatherRData.wind.speed;
    document.getElementById("rexburg-current-chill").innerHTML += (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(0);
    document.getElementById("rexburg-current-humidity").innerHTML += weatherRData.main.humidity;
}