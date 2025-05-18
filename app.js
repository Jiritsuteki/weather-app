
const apiKey = "04b3f3816dd9dfe0ea3ce8e8eed68b1f"; // Doğrulanmış çalışan key

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
