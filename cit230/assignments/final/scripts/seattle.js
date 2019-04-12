var apiSEURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=98007,us&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
var weatherSERequest = new XMLHttpRequest();
weatherSERequest.open('GET', apiSEURLstring, true);
weatherSERequest.responseType = 'json';
weatherSERequest.send();


weatherSERequest.onload = function() {
    var weatherSEData = weatherSERequest.response;
    var temp = weatherSEData.main.temp;
    var speed = weatherSEData.wind.speed;

    document.getElementById("seattle-current-temp").innerHTML += temp.toFixed(0);
    document.getElementById("seattle-current-speed").innerHTML += weatherSEData.wind.speed;
    document.getElementById("seattle-current-chill").innerHTML += (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(0);
    document.getElementById("seattle-current-humidity").innerHTML += weatherSEData.main.humidity;
}