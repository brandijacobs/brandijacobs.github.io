// Weather
var apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    var temp = weatherData.main.temp;
    var speed = weatherData.wind.speed;

    // error on pulling
    document.getElementById("current-icon").setAttribute("src", 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png');
    document.getElementById("current-temp").innerHTML = temp;
    document.getElementById("current-pressure").innerHTML = weatherData.main.pressure;
    document.getElementById("current-humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("current-wind").innerHTML = weatherData.wind.speed;
    document.getElementById("current-chill").innerHTML = (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(0);

    console.log(weatherData);
}

// Forecast
// var apiForecaststring = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
// var forecastRequest = new XMLHttpRequest();
// weatherRequest.open('GET', apiForecaststring, true);
// weatherRequest.responseType = 'json';
// weatherRequest.send();

// weatherRequest.onload = function() {
//     var forecastData = weatherRequest.response;
//     // console.log(forecastData);
    // document.getElementById("day1").innerHTML = forecastData.

// }