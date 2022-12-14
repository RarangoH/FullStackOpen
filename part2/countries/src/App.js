import {useEffect, useState} from 'react'
import axios from 'axios'
import Countries from './components/Countries';
import InputFilter from './components/inputFilter';
import React  from 'react';


const App = () => {


const [info, setInfo] = useState([]);
const [countries, setCountries] = useState('');
const [showCountries, setShowCountries] = useState([]);

  useEffect(() =>{
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response =>{
      console.log('promise fulfilled')
      setInfo(response.data)
      console.log(response.data);
    
      
    })
  },[])

  



  
  const handleChangeCountries = (event) =>{
    console.log(event.target.value);
    setCountries(event.target.value);
    countriesToShow(event.target.value);
  

  }

  // const countriesToShow = countries
  // ? setShowCountries(info.filter(country => country.name.common.toLowerCase().includes(countries.toLowerCase())))
  // : []


   const countriesToShow = (e) =>{
      console.log(countries);
      setShowCountries(info.filter(country => country.name.common.toLowerCase().includes(e.toLowerCase())))
    
   }

  
  return(
    <div>
      <InputFilter onChange = {handleChangeCountries} />
      <Countries showCountries={showCountries} setShowCountries={setShowCountries} />
    </div>
  )
};


export default App;
