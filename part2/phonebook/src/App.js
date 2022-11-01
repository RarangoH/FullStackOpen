import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '393234209823041' }
  ]) ;
  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');


  const handleChangeName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  const handleChangePhone = (event) => {
    console.log(event.target.value);
    setPhone(event.target.value);
  }

  const addPerson = (event) =>{
    
    event.preventDefault();
    const personObject={
      name: newName,
      phone: newPhone
    }
  
    console.log("name",personObject.name)
    if(!arrayVer(personObject)){
      setPersons(persons.concat(personObject));
      setNewName('');
      setPhone('');
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
      <form onSubmit={addPerson}>
        
      <div>name: <input value={newName} onChange={handleChangeName}/></div>
      <div>number:<input value={newPhone} onChange={handleChangePhone}/></div>
      
          
        
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