
import ShowCountry from "./ShowCountry";

const Countries = ({showCountries,setShowCountries}) =>{


if(showCountries.length > 10){
    return(
        <div>
            Too many matches, specify another filter
        </div>  
    )

}else if((showCountries.length <= 10 && showCountries.length >= 2) || showCountries.length === 0){
    console.log(showCountries);
    return(
        <div>
            {showCountries.map(c => <div key={c.name.common}>{c.name.common} 
            <button value={c.name.common} onClick={() => setShowCountries([c])}>show</button>
            </div>)}
        </div>  
    )
}
else{
    return(
        <div>
            <ShowCountry showCountries = {showCountries}/>
        </div>  

    )
}


    


}


export default Countries
