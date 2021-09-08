import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
        name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Submit name!</h2>
      <form onSubmit={addName}>
          name: <input value={newName} onChange={handleNameChange}/>
          <button type="submit">submit</button>
      </form>
      <h2>Phonebook</h2>
        <ul>{persons.map((p, ind) => <li key={ind}>{p.name}</li>)}</ul>
    </div>
  )
}

export default App