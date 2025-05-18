
const apiKey = "2b8fc2f543b02890c8b7cb1e5f1a5db4"; // Doğrulanmış çalışan key

document.getElementById("search-btn").addEventListener("click", async () => {
  const city = document.getElementById("city-input").value.trim();
  const weatherBox = document.getElementById("weather-result");
  const errorMsg = document.getElementById("error-msg");

  if (!city) return;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("Şehir bulunamadı");

    const data = await response.json();

    document.getElementById("city-name").textContent = data.name;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temp").textContent = Math.round(data.main.temp);
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;

    weatherBox.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  } catch (error) {
    weatherBox.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
