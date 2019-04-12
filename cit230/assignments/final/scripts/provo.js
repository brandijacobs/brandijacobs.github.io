var apiPURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=84601,us&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
var weatherPRequest = new XMLHttpRequest();
weatherPRequest.open('GET', apiPURLstring, true);
weatherPRequest.responseType = 'json';
weatherPRequest.send();


weatherPRequest.onload = function() {
    var weatherPData = weatherPRequest.response;
    var temp = weatherPData.main.temp;
    var speed = weatherPData.wind.speed;

    document.getElementById("provo-current-temp").innerHTML += temp.toFixed(0);
    document.getElementById("provo-current-speed").innerHTML += weatherPData.wind.speed;
    document.getElementById("provo-current-chill").innerHTML += (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(0);
    document.getElementById("provo-current-humidity").innerHTML += weatherPData.main.humidity;
}