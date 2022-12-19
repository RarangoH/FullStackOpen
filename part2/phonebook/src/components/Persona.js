

import personService from "../services/personService";

const Persona = ({persons}) =>{
   
   const buttonEffect = (id) =>{

    console.log(id);
   }
    

        return (
            <div>
                {persons.map(person => <div key={person.id}>{person.name} {person.number}<button onClick={() => buttonEffect(person.id)}>delete</button></div>)}
            </div>
        )
    
    
}





export default Persona
