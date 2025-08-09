import React, { useState, useEffect } from "react";
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSun, FaMoon } from "react-icons/fa";
import { Helmet } from "react-helmet";
import './App.css'

function App() {

        <Helmet>
        <title>React Weather App | Krystle Codes</title>
        <meta
          name="description"
          content="Check real-time weather forecasts worldwide with Krystle's React Weather App. Built with React, Bootstrap, and OpenWeather API."
        />
        <meta
          name="keywords"
          content="React Weather App, Weather Forecast, Krystle Codes, OpenWeather API, Bootstrap Weather"
        />
        <meta name="author" content="Krystle Leach" />
      </Helmet>

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div className="App">
       <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
  
    <div className="container">
        <Weather defaultCity="Jamaica" />
        <footer className="dark">
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/users/112617-krystle-leach"
            target="_blank"
            rel="noopener noreferrer"
          >
            Krystle Leach
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/krystleL21/my-react-apper-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-krystlecodes.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
           

  <div className="store-links">
    <a
      href="http://www.redbubble.com/people/k-lux"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/redbubLogo.ejug5"
        alt="Redbubble Store"
        className="store-logo"
      />
    </a>

    <a
      href="https://www.teepublic.com/user/k-lux"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/teepublicLogo.png"
        alt="TeePublic Store"
        className="store-logo"
      />
    </a>
    <p>© {new Date().getFullYear()} K-Lux</p> 
  </div>
        </footer>
      </div>
    </div>




  );
}

export default App
