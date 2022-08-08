import "./style.css";
import { useContext } from "react";
import WeatherCard from "./components/WeatherCard";
import { WeatherContext } from "./contexts/WeatherProvider";

function App() {
  const { handleSearch, input, setInput, value } = useContext(WeatherContext);

  return (
    <main className="main-page">
      <div className="container">
        <strong className="card-title">Tempo Atual</strong>
        <p className="card-text">
          Digite uma cidade abaixo para verificar as condições climáticas.
        </p>
        <form>
          <div className="form-control">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Cidade..."
            />
          </div>
          <button onClick={handleSearch} className="form-btn">
            Pesquisar
          </button>
        </form>
        {value && <WeatherCard />}
      </div>
    </main>
  );
}

export default App;
