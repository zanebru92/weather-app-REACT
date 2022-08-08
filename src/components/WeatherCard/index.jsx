import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherProvider";
import "./style.css";

export default function WeatherCard() {
  const { weather } = useContext(WeatherContext);

  return (
    <>
      {weather ? (
        <article className="card-container">
          <h1 className="card-title">
            {weather.location.name} - {weather.location.region}
          </h1>
          <img
            className="card-img"
            src={weather.current.condition.icon}
            alt=""
          />
          <div className="card-text">
            <span style={{ fontWeight: "bold" }}>
              {weather.current.condition.text}
            </span>
            <span>Temperatura: {weather.current.temp_c} ºC </span>
            <span>Sensação Térmica: {weather.current.feelslike_c} ºC</span>
            <span>Vento: {weather.current.wind_kph} KM/H</span>
            <span>Direção do Vento: {weather.current.wind_dir}</span>
            <span>Umidade: {weather.current.humidity} %</span>
            <span>Pressão: {weather.current.pressure_mb} MB</span>
            <span>Visibilidade: {weather.current.vis_km} KM</span>
          </div>
        </article>
      ) : null}
    </>
  );
}
