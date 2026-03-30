import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const box = {
    width: "260px",
    margin: "40px auto",
    padding: "15px",
    border: "1px solid #333",
    borderRadius: "6px"
  };

  const input = {
    width: "100%",
    margin: "6px 0",
    padding: "6px"
  };

  const button = {
    margin: "5px",
    padding: "6px 10px"
  };

  const fetchWeather = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      const result = await res.json();
      console.log(result);

      if (result.cod === 200) {
        setData(result);
        setError("");
      } else {
        setData(null);
        setError("City not found");
      }
    } catch (err) {
      setError("Error fetching data");
      setData(null);
    }
  };

  return (
    <div style={box}>
      <h2>Weather App</h2>

      <input
        style={input}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button style={button} onClick={fetchWeather}>
        Search
      </button>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Safe rendering */}
      {data && data.weather && (
        <div>
          <h3>{data.name}</h3>
          <p>Temperature: {(data.main.temp - 273.15).toFixed(1)} °C</p>
          <p>{data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed} m/s</p>
        </div>
      )}

      {/* Name + Reg No */}
      <p style={{ position: "fixed", bottom: "10px", left: "10px", fontSize: "12px" }}>
        Name: Gauravsingh Rajpurohit <br />
        Reg No: 24BCE2208
      </p>
    </div>
  );
}

export default App;