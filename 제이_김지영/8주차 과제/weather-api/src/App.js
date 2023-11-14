import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    //setLocation(e.target.value || "");
    setLocation((prevLocation) => e.target.value || "");
    console.log(location);
  };

  const searchWeather = async () => {
    try {
      // if (!location) return;
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          console.log(response);
          const responseData = response.data;
          setWeatherData(responseData);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchWeather();
    }
  };

  // useEffect(() => {
  //   if (location) {
  //     searchWeather();
  //   }
  // }, [location]);

  return (
    <div className="App">
      <input
        className="input-box"
        placeholder="City Name"
        value={location}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="weather-data">
        {weatherData && (
          <div>
            <p>City Name: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>
              Temperature (Celsius):{" "}
              {Math.round((weatherData.main.temp - 273.15) * 10) / 10}
            </p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
