var apiSAURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=95742,us&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
var weatherSARequest = new XMLHttpRequest();
weatherSARequest.open('GET', apiSAURLstring, true);
weatherSARequest.responseType = 'json';
weatherSARequest.send();


weatherSARequest.onload = function() {
    var weatherSAData = weatherSARequest.response;
    var temp = weatherSAData.main.temp;
    var speed = weatherSAData.wind.speed;

    document.getElementById("sacramento-current-temp").innerHTML += temp.toFixed(0);
    document.getElementById("sacramento-current-speed").innerHTML += weatherSAData.wind.speed;
    document.getElementById("sacramento-current-chill").innerHTML += (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(0);
    document.getElementById("sacramento-current-humidity").innerHTML += weatherSAData.main.humidity;
    
}