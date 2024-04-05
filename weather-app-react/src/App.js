import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null); 
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a9e1ce58ad8c52610a06f8b1977340d6`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
        .then((response) => {
          if (response.data.cod === 200) {
            setData(response.data);
          } else {
            setData(null); 
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setData(null); 
        });
      setLocation('');
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
        {data ? (
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
        ) : (
          <p className="no-location">No location found</p>
        )}

        {data && data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} km/h</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
