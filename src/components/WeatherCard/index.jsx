import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherProvider";
import "./style.css";

export default function WeatherCard() {
  const { weather, location, condition } = useContext(WeatherContext);

  return (
    <article className="card-container">
      <h1 className="card-title">
        {location.name} - {location.region}
      </h1>
      <img className="card-img" src={condition.icon} alt="" />
      <div className="card-text">
        <span style={{ fontWeight: "bold" }}>{condition.text}</span>
        <span>Temperatura: {weather.temp_c} ºC </span>
        <span>Sensação Térmica: {weather.feelslike_c} ºC</span>
        <span>Vento: {weather.wind_kph} KM/H</span>
        <span>Direção do Vento: {weather.wind_dir}</span>
        <span>Umidade: {weather.humidity} %</span>
        <span>Pressão: {weather.pressure_mb} MB</span>
        <span>Visibilidade: {weather.vis_km} KM</span>
      </div>
    </article>
  );
}
