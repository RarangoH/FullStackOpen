import { useState } from 'react'
import Persona from './components/Persona';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) ;
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [newContNames, setContNames] = useState([]);

 


  const handleChangeName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  const handleChangeNumber = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  }

  
  const handleChangeSearch =(event) => {
    console.log(event.target.value);
    persons.forEach(p => {
      if(p.name.includes(event.target.value)){
        console.log("objName",p.name)
        const pObject={
          name: p.name,
          number: p.number,
          id:p.id
        }
        setContNames(newContNames.concat(pObject));
        
      }
      
    })
    // console.log("ola",newContNames)
    
    
  }


  const addPerson = (event) =>{
    
    event.preventDefault();
    const personObject={
      name: newName,
      number: newNumber,
      id:persons[persons.length-1].id +1
    }
  
    console.log("name",personObject.name)
    if(!arrayVer(personObject)){
      setPersons(persons.concat(personObject));
      setNewName('');
      setNumber('');
    }else{
      alert(`${personObject.name} is already added to the phonebook`);
    }
    
    
  }
 

  const arrayVer = (x) =>{
    
    const find = persons.find(person => JSON.stringify(x) === JSON.stringify(person))
    console.log("find",find);
    if(find !== null && find !== undefined){
      return true;
    }else{
      return false;
    }
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleChangeSearch}/></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        
      <div>name: <input value={newName} onChange={handleChangeName}/></div>
      <div>number:<input value={newNumber} onChange={handleChangeNumber}/></div>
      
          
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
     <Persona persons={persons} />
      {/* <div> {persons.map(p => <div key={p.id}> {p.name} {p.number}</div>)}</div> */}
    </div>
  )
}
export default App