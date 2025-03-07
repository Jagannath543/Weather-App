const apiKey = "00c1c193f2fe9f05a3d66861ac7cb59e";

async function searchWeather(event) {
    event.preventDefault();
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }   
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById("dateTime").textContent = new Date(data.dt * 1000).toLocaleString();
        document.getElementById("weatherForecast").textContent = data.weather[0].main;
        document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        document.getElementById("weatherIcon").alt = data.weather[0].description;
        document.getElementById("temperature").textContent = `${data.main.temp.toFixed(1)}°C`;
        document.getElementById("tempMin").textContent = `Min: ${data.main.temp_min.toFixed(1)}°C`;
        document.getElementById("tempMax").textContent = `Max: ${data.main.temp_max.toFixed(1)}°C`;
        document.getElementById("feelsLike").textContent = ` ${data.main.feels_like.toFixed(1)}°C`;
        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("windSpeed").textContent = `${data.wind.speed} m/s`;
        document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch weather data.");
    }
}

function clearWeather() {
    document.getElementById("cityInput").value = ""; 
    document.getElementById("cityName").textContent = "";
    document.getElementById("dateTime").textContent = "";
    document.getElementById("weatherForecast").textContent = "";
    document.getElementById("weatherIcon").src = "";
    document.getElementById("weatherIcon").alt = "";
    document.getElementById("temperature").textContent = "";
    document.getElementById("tempMin").textContent = "";
    document.getElementById("tempMax").textContent = "";
    document.getElementById("feelsLike").textContent = "";
    document.getElementById("humidity").textContent = "";
    document.getElementById("windSpeed").textContent = "";
    document.getElementById("pressure").textContent = "";
}

