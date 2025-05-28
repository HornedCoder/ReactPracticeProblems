import React, { useEffect, useState } from 'react'

const Twelve = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=301906e0cbd1bd4df93c160699f21b4c`)
                    .then((response) => response.json())
                    .then((data) => setWeather(data));
            })
        }
    }, [])
    return (
        <div>
            {weather ?(
                <div>
                    <h2>Current Weather:</h2>
                    <p>Temprature:{Math.round(weather.main.temp)}°C</p>
                    <p>Conditions:{weather.weather[0].description}</p>
                </div>
            ):(
                <p>Loading...</p>
            )}

        </div>
    )
}

export default Twelve