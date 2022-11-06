
const Countries = ({onChange,show}) =>{

    var result;
    var country;

if(show.length > 10){
    return(
        <div>
            <div>find countries <input onChange={onChange}/></div>
            Too many matches, specify another filter
        </div>  
    )

}else if(show.length === 1){
    return(
        <div>
            <div>find countries <input onChange={onChange}/></div>
            {show.map(c => <div key={c.name.common}>
                <h1>{c.name.common}</h1> 
                <div>capital {c.capital}</div>
                <div>area {c.area}</div>
                <br></br>
                <div><strong>languages:</strong></div>
            {<ul>{Object.values(c.languages).map(l => <li key={l}>{l}</li>)} </ul>} 
                <img src={Object.values(c.flags)[0]}></img>

            </div>)}
        </div>  

    )
}
else{
    return(
        <div>
            <div>find countries <input onChange={onChange}/></div>
            {show.map(c => <div key={c.name.common}>{c.name.common} </div>)}
        </div>  
    )
}


    


}



export default Countries
