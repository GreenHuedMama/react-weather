import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";


export default function Weather(props) {
    function handleResponse(response) {
        console.log(response.data.main.temp);
    }

    let apiKey = "59ee4591990d1ea0e068edfbc69866c6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
    );
}

export default function Weather() {
    let weatherData = {
      city: "New York",
      temperature: 73,
      date: "Monday 9:48",
      description: "Cloudy",
      humidity: 77,
      wind: 4
    };
  
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">C</a> | <a href="/">F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  