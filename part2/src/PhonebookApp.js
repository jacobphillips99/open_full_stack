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
    const deletedPerson = persons.filter(p => p.id === id)[0]
    const res = window.confirm(`Are you sure you want to delete ${deletedPerson.name}?`)
    if (res) {
      const keptPeople = persons.filter(p => p.id !== id)
      phonebookServices
        .deleteID(id)
        .then(() => {
          setPersons(keptPeople)
          console.log("kept: ", keptPeople)
        })
      }
  }


  const addPerson = (event) => {
    event.preventDefault()
    if (newName.length === 0 || newName === " ") {
        setNewName('')
        setNewNumber('')
        return
    }
    const numbers = /^[0-9]+$/
    if (!newNumber.match(numbers)) {
      window.alert("Number must consist of only numbers!")
      setNewNumber('')
      return
    }

    const letters = /^[A-Za-z ]+$/
    if(!newName.match(letters)) { 
      window.alert("Name must consist of only letters!")
      setNewName('')
      return
    }

    const newPerson = {
        name: newName,
        number: newNumber
    }
    // noteService
    // .update(id, changedNote)
    // .then(returnedNote => {
    //   setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    // })

    if (!persons.some(p => p.name === newName)) {
      phonebookServices
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    } else if (persons.some(p => p.name === newName)) {
        const existingIndex = persons.findIndex(p => p.name === newName)
        const existingPerson = persons[existingIndex]
        const res = window.confirm(`Replace ${newName}'s number with ${newNumber}?`)
        if (res) {
          phonebookServices
            .update(existingPerson.id, newPerson)
            .then(returnedPerson => {
              setPersons(persons.map(p => p.id !== existingPerson.id? p: returnedPerson))
            })
        }
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