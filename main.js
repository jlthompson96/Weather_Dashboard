window.addEventListener("load",() => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

                const proxy = "http://cors-anywhere.herokuapp.com/";
                const api = '${proxy}https://api.darksky.net/forecast/071f00969655c3ebc678622c4fc0d1f0/${lat},${long}';
            
                fetch(api)
                    .then(respnose => {
                        return this.response.json();
                    })
                    .then(data => {
                        console.log(data);
                    })
        })
    }
});