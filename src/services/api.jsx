import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/current.json?key=ac94f0f120dd4f8bbfd185326220608&q=",
});

export default api;
