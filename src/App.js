import Fan from "./components/Fan";
import Bulb from "./components/Bulb";
import Led from "./components/Led";
import AirConditioner from "./components/AirConditioner";
import './style/App.css';

function App() {
  return (
    <div className="App">
      <h1 className='header'>kokaine</h1>
      <div className="container">
        <Fan />
        <Bulb />
        <Led />
        <AirConditioner />
      </div>
    </div>
  );
}

export default App;
