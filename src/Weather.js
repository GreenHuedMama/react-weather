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