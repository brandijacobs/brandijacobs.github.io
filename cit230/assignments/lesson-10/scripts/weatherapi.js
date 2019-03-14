// var apiURLstring = (myappid - change)
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;

    // Temp
    console.log(weatherData);

    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
   
    // Get other required elements
    document.getElementById("current-temp").innerHTML = weatherData.main.pressure;
    document.getElementById("current-temp").innerHTML = weatherData.main.humidity;
    document.getElementById("current-temp").innerHTML = weatherData.main.;
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}