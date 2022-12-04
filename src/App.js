import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'
import './index.css';


function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  })

  const handleClick = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6`)
      .then((response) => {
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
        })
      })
  }

  return (
    <>
      <div className='container text-center my-5 py-5 bg-primary rounded'>
        <h1 className='bg-primary fw-bold text-light'>~ Know your city's Weather ~</h1>
        <input type="text" className='from-control border border-dark mx-4 my-5 bg-light' placeholder=' Enter city name' value={city} onChange={(e) => {
          setCity(e.target.value);
        }} />
        <button className='btn btn-dark mx-3' type='submit' onClick={handleClick}>Get Your Weather Report</button>

      </div>

      <ShowTemp text={data}></ShowTemp>
    </>
  )
}

export default App