import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=67a20d293903cbcf9aab38633b30fbf9`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
        .then((response) => {
          setData(response.data)
        })
        .catch(err => alert(err.message))
      setLocation('')
    }
  }
  return (
    <div className="App">

      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location'
          type="text" />
      </div>

      <div className="container">

        <div className="header">

          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null}
          </div>

          <div className="image-icon">
            {data.weather ?
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt=""
              />
              : null}

          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
      </div>

      {data.name !== undefined &&
        <div className="main">
          <div className="feels">

            <p>Feels like:</p>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&deg;C</p> : null}
          </div>

          <div className="humid">
            <p>Humidity</p>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}

          </div>

          <div className="wind">
            <p>Wind speed</p>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} km/h</p> : null}
          </div>
        </div>
      }
      
    </div>
  );
}

export default App;
