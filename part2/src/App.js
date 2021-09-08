import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchPrefix, setSearchPrefix ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (newName.length === 0 || newName === " ") {
        setNewName('')
        setNewNumber('')
        return
    }
    const newPerson = {
        name: newName,
        number: newNumber
    }

    if (!persons.some(p => p.name === newName && p.number === newNumber)) {
        setPersons(persons.concat(newPerson))
    } else {
        alert(`${newName} is already in the phonebook!`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchPrefixChange = (event) => {
      setSearchPrefix(event.target.value.toLowerCase())
  }

  const peopleToShow = persons.filter(p => p.name.toLowerCase().startsWith(searchPrefix))

  return (
    <div>
      <h1>Phonebook!</h1>
      <form>
          filter for names beginning with <input value={searchPrefix} onChange={handleSearchPrefixChange}/>
      </form>
      <ul>{peopleToShow.map((p, ind) => <li key={ind}>{p.name}: {p.number}</li>)}</ul>
      <h3>Add a new name and number!</h3>
      <form onSubmit={addPerson}>
          <div>name:   <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <div><button type="submit">submit</button></div>
      </form>
    </div>
  )
}

export default App