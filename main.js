var request = new XMLHttpRequest();
//request.open('GET','DarkSkyAPI Key');

request.onload = function() {
    var weatherData = JSON.parse(request.responseText);
    console.log(weatherData[0]);
};

request.send();