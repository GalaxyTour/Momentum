const API_KEY = "4b80ac44e60cbb90b71f7cda10e2ec60";

function onGeoConnect(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoConnect, onGeoError);