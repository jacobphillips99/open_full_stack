import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import phonebookServices from './services/phonebookServices'

const PhonebookEntry = (props) => {
  return (<div>
            <Person name={props.name} number={props.number}/>
            <button onClick={() => props.callback(props.id)}>delete me!</button>
          </div>)
}

const SearchablePhonebook = (props) => {
    console.log("people: ", props.people)
    const peopleToShow = Object.values(props.people).filter(p => p.name.toLowerCase().startsWith(props.searchprefix))
    return (<ul>{peopleToShow.map((p, ind) => {return <PhonebookEntry key={p.id} id={p.id} name={p.name} number={p.number} callback={props.deletecallback}/>})}</ul>)
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchPrefix, setSearchPrefix ] = useState('')


  const deleteCallback = (id) => {
    console.log("hit delete on button: ", id)
    const keptPeople = persons.filter(p => p.id !== id)
    phonebookServices
      .deleteID(id)
      .then(() => {
        setPersons(keptPeople)
        console.log("kept: ", keptPeople)
      })
  }


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
      phonebookServices
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
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

  useEffect(() => {
    phonebookServices.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
  return (
    <div>
      <h1>Phonebook!</h1>
      <form>
          filter for names beginning with <input value={searchPrefix} onChange={handleSearchPrefixChange}/>
      </form>
      <div>
          <SearchablePhonebook people={persons} searchprefix={searchPrefix} deletecallback={deleteCallback}/>
      </div>
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