const apiKey = "2f77becad95ddf010d1ce22f91c6e054";  // Your API Key added

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (response.status === 404) {
        document.getElementById("errorMsg").classList.remove("hidden");
        document.getElementById("weatherBox").classList.add("hidden");
        return;
    }

    const data = await response.json();

    document.getElementById("errorMsg").classList.add("hidden");
    document.getElementById("weatherBox").classList.remove("hidden");

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `☁ ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `🌬 Wind: ${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
