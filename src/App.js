import "./App.css";
import "leaflet/dist/leaflet.css";
import MainMap from "./components/MainMap";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <main className="main-app">
      <MainHeader />
      <MainMap />
    </main>
  );
}

export default App;
