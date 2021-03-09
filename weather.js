const myKey = 'fa646fcb6ae4d7af0336c5a2448a5866';
var divTag = document.getElementById('weather');
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,  showError);
}
else
{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support geolocation</P>";

}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude,longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>${error.message}</P>";

}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myKey}`;
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            var a = data.weather[0].main;
            if(a.includes("rain"))
            {
                document.getElementById("rain").style.visibility = "visible";
            }
            else if(a.includes("snow"))
            {
                document.getElementById("snow_fall").style.visibility = "visible";
            }
        })
}
