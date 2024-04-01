import logo from './logo.svg';
import './App.css';

function App() {

//const url = `https://api.openweathermap.org/data/2.5/weather?q=bacau&appid=a9e1ce58ad8c52610a06f8b1977340d6`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Bacău</p>
          </div>
          <div className="temp">
            <h1>20ºC</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>20ºC</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
