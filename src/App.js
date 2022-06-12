import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [firstDay, setFirstDay] = useState({});
  const [secondDay, setSecondDay] = useState({});
  const [thirdDay, setThirdDay] = useState({});
  const [fourthDay, setFourthDay] = useState({});
  const [fifthDay, setFifthDay] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=67a20d293903cbcf9aab38633b30fbf9`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=67a20d293903cbcf9aab38633b30fbf9`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
        .then((response) => {
          setData(response.data)
        })
        .catch(err => alert(err.message))
      setLocation('')
      axios.get(forecastUrl)
        .then((response) => {

          setFirstDay(response.data.list[0]);
          setSecondDay(response.data.list[1]);
          setThirdDay(response.data.list[2]);
          setFourthDay(response.data.list[3]);
          setFifthDay(response.data.list[4]);
        })
        .catch(err => alert(err.message))}
let today = new Date();
const daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOrder = today.getDay();
let day1 = daysInWeek[dayOrder];
console.log(day1);
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
      <div id="weatherContainer">


        <div className="forecast">
          <p className="weather" id="day1"></p>
          <div className="image-icon">
            {firstDay.weather ?
              <img
                src={`http://openweathermap.org/img/wn/${firstDay.weather[0].icon}@2x.png`}
                alt=""
              />
              : null}
          </div>
          {firstDay.weather ? <p className="minTemp">{firstDay.weather[0].description}</p> : null}
          {firstDay.main ? <p className="minTemp">Min {firstDay.main.temp_min.toFixed()}&deg;C</p> : null}
          {firstDay.main ? <p className="maxTemp">Max {firstDay.main.temp_max.toFixed()}&deg;C</p> : null}
        </div>

        <div className="forecast">
          <p className="weather" id="day2"></p>
          <div className="image-icon">
            {secondDay.weather ?
              <img
                src={`http://openweathermap.org/img/wn/${secondDay.weather[0].icon}@2x.png`}
                alt=""
              />
              : null}
          </div>
          {secondDay.weather ? <p className="minTemp">{secondDay.weather[0].description}</p> : null}
          {secondDay.main ? <p className="minTemp">Min {secondDay.main.temp_min.toFixed()}&deg;C</p> : null}
          {secondDay.main ? <p className="maxTemp">Max {secondDay.main.temp_max.toFixed()}&deg;C</p> : null}
        </div>

        <div className="forecast">
          <p className="weather" id="day3"></p>
          <div className="image-icon">
            {thirdDay.weather ?
              <img
                src={`http://openweathermap.org/img/wn/${thirdDay.weather[0].icon}@2x.png`}
                alt=""
              />
              : null}
          </div>
          {thirdDay.weather ? <p className="minTemp">{thirdDay.weather[0].description}</p> : null}
          {thirdDay.main ? <p className="minTemp">Min {thirdDay.main.temp_min.toFixed()}&deg;C</p> : null}
          {thirdDay.main ? <p className="maxTemp">Max {thirdDay.main.temp_max.toFixed()}&deg;C</p> : null}
        </div>

        <div className="forecast">
          <p className="weather" id="day4"></p>
          <div className="image-icon">
            {fourthDay.weather ?
              <img
                src={`http://openweathermap.org/img/wn/${fourthDay.weather[0].icon}@2x.png`}
                alt=""
              />
              : null}
          </div>
          {fourthDay.weather ? <p className="minTemp">{fourthDay.weather[0].description}</p> : null}
          {fourthDay.main ? <p className="minTemp">Min {fourthDay.main.temp_min.toFixed()}&deg;C</p> : null}
          {fourthDay.main ? <p className="maxTemp">Max {fourthDay.main.temp_max.toFixed()}&deg;C</p> : null}
        </div>

        <div className="forecast">
          <p className="weather" id="day5"></p>
          <div className="image-icon">
            {fifthDay.weather ?
              <img
                src={`http://openweathermap.org/img/wn/${fifthDay.weather[0].icon}@2x.png`}
                alt=""
              />
              : null}
          </div>
          {fifthDay.weather ? <p className="minTemp">{fifthDay.weather[0].description}</p> : null}
          {fifthDay.main ? <p className="minTemp">Min {fifthDay.main.temp_min.toFixed()}&deg;C</p> : null}
          {fifthDay.main ? <p className="maxTemp">Max {fifthDay.main.temp_max.toFixed()}&deg;C</p> : null}
        </div>



      </div>
    </div>
  );
}

export default App;
