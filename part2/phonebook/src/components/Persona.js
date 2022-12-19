

import personService from "../services/personService";

const Persona = ({persons, setPersons}) =>{
   
   const buttonEffect = (id,name) =>{
    if(window.confirm(`Delete${name}`)){
    personService
    .remove(id)
    .then(removePerson(id))
    }
   }
   const removePerson = (id) =>{
    var newPpl = [];

    persons.forEach(person => {
        if(person.id !== id){
            newPpl.push(person);
        }else{
            
        }
        
    });
    setPersons(newPpl);
    console.log(newPpl);
   }
    

        return (
            <div>
                {persons.map(person => <div key={person.id}>{person.name} {person.number}<button onClick={() => buttonEffect(person.id, person.name)}>delete</button></div>)}
            </div>
        )
    
    
}





export default Persona
