
const ShowCountry = ({showCountries}) => {
    console.log(showCountries);
    return(
        
        <div>
            <h1>{showCountries[0].name.common}</h1>   
            <div>capital {showCountries[0].capital}</div>
            <div>area {showCountries[0].area}</div>
            <br></br>
            <div><strong>languages:</strong></div>
            {<ul>{Object.values(showCountries[0].languages).map(l => <li key={l}>{l}</li>)} </ul>} 
            <img alt='IMG' src={Object.values(showCountries[0].flags)[0]}></img> 

        </div>
    )
}
export default ShowCountry