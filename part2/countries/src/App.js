import {useEffect, useState} from 'react'
import axios from 'axios'



const App = () => {

const [info, setInfo] = useState([]);
const [countries, setCountries] = useState('');

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
    // console.log(event.target.value);
    setCountries(event.target.value);
  
  }

  const countriesToShow = countries
  ? info.filter(country => country.name.common.toLowerCase().includes(countries.toLowerCase()))
  : []

  return(
    <div>
      <div>find countries <input onChange={handleChangeCountries}/></div>
      {countriesToShow.map(c => <div key={c.name.common}>{c.name.common} </div>)}
    </div>
  )
};


export default App;
