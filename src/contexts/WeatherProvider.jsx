import { createContext } from "react";
import { useState } from "react";
import api from "../services/api";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [value, setValue] = useState(false);
  const [condition, setCondition] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await api.get(`${input}&lang=pt`);
    setWeather(res.data.current);
    setLocation(res.data.location);
    setCondition(res.data.current.condition);
    setInput("");
    setValue((prevState) => !prevState);
  };

  return (
    <WeatherContext.Provider
      value={{
        input,
        setInput,
        handleSearch,
        location,
        setLocation,
        weather,
        setWeather,
        value,
        condition,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
