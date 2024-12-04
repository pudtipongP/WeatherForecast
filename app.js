const apiKey = 'bf2a41dcf2638908a9c2ae5fbe5be2eb';
const fetchButton = document.getElementById('fetch-weather-btn');
const loadingMessage = document.getElementById('loading-message');
const weatherInfo = document.getElementById('weather-info');
const countryDropdown = document.getElementById('country-dropdown');
const cityDropdown = document.getElementById('city-dropdown');

const cities = {
  US: ['New York', 'Los Angeles', 'Chicago'],
  TH: ['Bangkok', 'Chiang Mai', 'Phuket'],
  IN: ['New Delhi', 'Mumbai', 'Bangalore'],
  GB: ['London', 'Manchester', 'Birmingham'],
  // Add more countries and cities here
};

function populateCityDropdown(country) {
  // Clear previous cities and disable the dropdown
  cityDropdown.innerHTML = '<option value="">Select City</option>';
  cityDropdown.disabled = true;

  // Populate the cities based on the selected country
  if (country && cities[country]) {
    cities[country].forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      cityDropdown.appendChild(option);
    });

    // Enable the city dropdown
    cityDropdown.disabled = false;
  }
}

async function fetchWeather(city) {
  try {
    loadingMessage.classList.remove('hidden');
    weatherInfo.innerHTML = ''; // Clear previous weather info

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=th`);
    
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const weatherHTML = `
      <h2>Weather in ${city}</h2>
      <p><strong>Temperature:</strong> ${temp} °C</p>
      <p><strong>Weather:</strong> ${weather}</p>
      <p><strong>Humidity:</strong> ${humidity} %</p>
      <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
    weatherInfo.innerHTML = weatherHTML;

  } catch (error) {
    console.error('Error fetching weather:', error);
    weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
  } finally {
    loadingMessage.classList.add('hidden');
  }
}

fetchButton.addEventListener('click', function () {
  const country = countryDropdown.value;
  const city = cityDropdown.value;

  if (country && city) {
    fetchWeather(city);
  } else {
    alert('Please select a country and a city.');
  }
});

// Populate city dropdown based on selected country
countryDropdown.addEventListener('change', function () {
  const selectedCountry = countryDropdown.value;
  populateCityDropdown(selectedCountry);
});
