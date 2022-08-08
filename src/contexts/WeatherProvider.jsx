import { createContext, useEffect } from "react";
import { useState } from "react";
import api from "../services/api";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const [weather, setWeather] = useState(null);
  const [value, setValue] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await api.get(`${input}&lang=pt`);
    setWeather(res.data);
    setInput("");
    setValue((prevState) => !prevState);
  };

  return (
    <WeatherContext.Provider
      value={{
        input,
        setInput,
        handleSearch,
        weather,
        setWeather,
        value,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
