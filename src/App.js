import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const countryStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px",
  };

  const flagStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.cca3} style={countryStyle}>
          <img src={country.flag} alt={country.name} style={flagStyle} />
          <h2>{country.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
