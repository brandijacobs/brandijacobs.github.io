var apiTemples = 'json/temples.json';
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiTemples, true);
templeRequest.responseType = 'json';
templeRequest.send();

templeRequest.onload = function() {
    var templeData = templeRequest.response;

    document.getElementById('').innerHTML = templeData[0].temple;
    document.getElementById('').innerHTML = templeData[1].temple;
    document.getElementById('').innerHTML = templeData[2].temple;
    document.getElementById('').innerHTML = templeData[3].temple;
}