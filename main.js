var request = new XMLHttpRequest();
request.open('GET','https://api.darksky.net/forecast/071f00969655c3ebc678622c4fc0d1f0/35.2271,-80.8431');

request.onload = function() {
    var weatherData = JSON.parse(request.responseText);
    console.log(weatherData[0]);
};

request.send();