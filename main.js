var request = new XMLHttpRequest();
request.open('GET','https://api.darksky.net/forecast/071f00969655c3ebc678622c4fc0d1f0/37.8267,-122.4233');

request.onload = function() {
    var weatherData = JSON.parse(request.responseText);
    document.getElementById("temp").innerHTML = myObj.name;
};

request.send();