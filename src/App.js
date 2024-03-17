import Fan from "./components/Fan";
import Bulb from "./components/Bulb";
import Led from "./components/Led";
import Status from "./components/Status";
import AirConditioner from "./components/AirConditioner";
import './style/App.css';

function App() {
  return (
    <div className="App" >
      <h1 h1 className='header' > TEAM KOKAINE</h1>
      <div className="container">
        <Fan />
        <Bulb />
        <Led />
        <AirConditioner />
      </div>
      <div className="container">
          <Status />
      </div>
    </div >
  );
}

export default App;
