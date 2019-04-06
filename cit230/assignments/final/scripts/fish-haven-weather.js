// Weather
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();


weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;
    var temp = weatherData.main.temp;
    var speed = weatherData.wind.speed;

    document.getElementById("current-icon").setAttribute("src", 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png');
    document.getElementById("current-temp").innerHTML = temp.toFixed(0);
    document.getElementById("current-speed").innerHTML = weatherData.wind.speed;
    document.getElementById("current-chill").innerHTML = (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(0);
    document.getElementById("current-humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("current-pressure").innerHTML = weatherData.main.pressure;
}

// Forecast
var apiForecaststring = 'https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&appid=a1e5e5a9c821a975cd2454f56d137abf&units=imperial';
var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiForecaststring, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function() {
    var forecastData = forecastRequest.response;
    console.log(forecastData);

    var highTemp = [];
    // Using 1 due to id start of 1
    var icon = [];    
    var today = new Date();

    if (today.getHours() < 17) {
        var day = 1;
        forecastData.list.forEach(hour => {
            if (hour.dt_txt.includes('21:00:00')) {
                highTemp[day] = hour.main.temp_max.toFixed(0);
                icon[day] = "https://openweathermap.org/img/w/" + hour.weather[0].icon + ".png";
                day++;
            }
        });
    
        var dayName = new Array(7);
        dayName[0] = "Sunday";
        dayName[1] = "Monday";
        dayName[2] = "Tuesday";
        dayName[3] = "Wednesday";
        dayName[4] = "Thursday";
        dayName[5] = "Friday";
        dayName[6] = "Saturday";
        
        var j = today.getDay();
    
        for (var i = 1; i <= 5; i++) {
            document.getElementById('day' + i).innerHTML = highTemp[i] + '&deg;F';
            document.getElementById('forecastIcon' + i).setAttribute('src', icon[i]);
            if (j <= 6) {
                document.getElementById('dayName' + i).innerHTML = dayName[j];
            }
            else {
                j = 0;
                document.getElementById('dayName' + i).innerHTML = dayName[j];
            }
            j++;
        }
    }

    else {
    var day = 0;
    forecastData.list.forEach(hour => {
        if (hour.dt_txt.includes('21:00:00')) {
            highTemp[day] = hour.main.temp_max.toFixed(0);
            icon[day] = "https://openweathermap.org/img/w/" + hour.weather[0].icon + ".png";
            day++;
        }
    });

    var dayName = new Array(7);
    dayName[0] = "Sunday";
    dayName[1] = "Monday";
    dayName[2] = "Tuesday";
    dayName[3] = "Wednesday";
    dayName[4] = "Thursday";
    dayName[5] = "Friday";
    dayName[6] = "Saturday";
    
    var j = today.getDay();

    for (var i = 1; i <= 5; i++) {
        document.getElementById('day' + i).innerHTML = highTemp[i] + '&deg;F';
        document.getElementById('forecastIcon' + i).setAttribute('src', icon[i - 1]);
        if (j <= 5) {
            document.getElementById('dayName' + i).innerHTML = dayName[j];
        }
        else {
            j = 0;
            document.getElementById('dayName' + i).innerHTML = dayName[j];
        }
        j++;
    }
}
}