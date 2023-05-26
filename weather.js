fetch('https://api.open-meteo.com/v1/forecast?latitude=53.33&longitude=-6.25&current_weather=true')
.then(response => response.json())
.then(data => {
  const weatherContainer = document.getElementById('weather-data');
  weatherContainer.innerHTML = `
    <p>Temperature: ${data.current_weather.temperature}°C</p>
    <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
  `;
});
