import "./App.css";
import Weather from "./components/Weather";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
