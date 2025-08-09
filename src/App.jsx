import React, { useState, useEffect } from "react";
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSun, FaMoon } from "react-icons/fa";
import './App.css'

function App() {
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
        </footer>
      </div>
    </div>




  );
}

export default App
