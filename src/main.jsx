import React from "react";
import { WeatherApp } from "./WeatherApp";
import ReactDOM from "react-dom/client";
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp/>
  </React.StrictMode>,
)
