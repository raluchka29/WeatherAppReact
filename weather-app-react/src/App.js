import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a9e1ce58ad8c52610a06f8b1977340d6`;

const searchLocation = (event) => {
  if(event.key === 'Enter'){
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
  })
}
}

  return (
    <div className="app">
      <div className="search">
        <input 
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter your location'
        onKeyPress={searchLocation}>          
        </input>
      </div>
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
            <p className="bold">20ºC</p>
            <p>Feels like</p> 
            </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
