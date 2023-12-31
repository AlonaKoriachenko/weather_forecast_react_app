import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://cosmic-khapse-25c262.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alona Koriachenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AlonaKoriachenko/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
