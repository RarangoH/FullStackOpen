import React  from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowCountry = ({showCountries}) => {

    const [weather, setWeather] = useState([]);
    const [temp, setTemp] = useState('');
    const [wind, setWind] = useState('');
    const [icon, setIcon] = useState('');

    console.log("pais",showCountries);

    const capital = showCountries[0].capital;

    const api=`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}`;


    useEffect(() =>{
        axios
        .get(api)
        .then(response =>{
            const resp = response.data
            console.log('promise fulfilled');
            setWeather(resp);
            assignTemp(resp);
            
        })
      },[])

      console.log("validity",weather);
    //   console.log(weather.main.temp);
      
    const assignTemp = (param) =>{
        
        setTemp(param.main.temp - 273.15);
        setWind(param.wind.speed);
        setIcon("http://openweathermap.org/img/w/" + param.weather[0].icon + ".png")
    }
      

    return(
        
        <div>
            <h1>{showCountries[0].name.common}</h1>   
            <div>capital {showCountries[0].capital}</div>
            <div>area {showCountries[0].area}</div>
            <br></br>
            <div><strong>languages:</strong></div>
            {<ul>{Object.values(showCountries[0].languages).map(l => <li key={l}>{l}</li>)} </ul>} 
            <img alt='IMG' src={Object.values(showCountries[0].flags)[0]}></img> 
            <h2>Weather in {showCountries[0].capital}</h2>
            <div>temperature  Celcius {temp}</div>
            <div id="icon"><img id="wicon" src={icon} alt="Weather icon"></img> </div>
            <div>Wind {wind} m/s</div>
        </div>
    )
}
export default ShowCountry