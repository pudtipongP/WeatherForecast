**Overview**

This application allows users to view the weather forecast for a selected city and country. Users can select a country from a dropdown list, then choose a city within that country. 
After selecting both the country and city, the weather data is fetched from the OpenWeatherMap API and displayed on the page.

**Features**

Country Selection: A dropdown list where users can select a country.
City Selection: Once a country is selected, the cities dropdown is populated with cities corresponding to that country.
Weather Fetching: Fetches and displays weather details (temperature, humidity, weather description, wind speed) for the selected city.
Responsive UI: The application provides a simple and responsive user interface for easy interaction.

**API Integration**
This application uses the OpenWeatherMap API to fetch weather data. The API returns information such as the temperature, weather description, humidity, and wind speed. 
The request is made by appending the city name to the API URL, and the response is parsed to display the weather details.

**Instructions for Use**
**Get an API Key:**

1. Go to the OpenWeatherMap website and sign up to get your API key.
2. Replace 'YOUR_API_KEY' in the JavaScript code with your actual API key.
3. Select a Country: Choose a country from the "Select Country" dropdown. The cities dropdown will be updated with relevant cities for that country.
Select a City: After selecting a country, choose a city from the "Select City" dropdown.
4. Fetch Weather: Click the "Get Weather" button to fetch and display the weather information for the selected city.
