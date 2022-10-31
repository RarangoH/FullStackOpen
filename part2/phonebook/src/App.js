import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const addPerson = (event) =>{
    event.preventDefault();
    const personObject={
      name: newName
    }
    console.log("name",personObject.name)
    setPersons(persons.concat(personObject));
    setNewName('');
    
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> {persons.map(p => <div key={p.name}> {p.name}</div>)}</div>
    </div>
  )
}

export default App