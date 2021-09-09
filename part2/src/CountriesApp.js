import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CountryName = ({country}) => {
    return <li key={country.name}>{country.name}</li>
}

const Country = ({country}) => {
    return (
        <div>
            <h3>{country.name}</h3>
            <div>capital: {country.capital}</div>
            <div>population: {country.population}</div>
            <div>flag:</div>
            <div><img src={country.flag} alt={country.name + ' flag'} /></div>
        </div>
    )
    // return <ul>{Object.entries(country).map((i, [k,v]) => <li key={i}>{k}: {v}</li>)})</ul>
}

const SearchableCountries = (props) => {
    const countriesToShow = Object.values(props.countries).filter(country => country.name.toLowerCase().startsWith(props.searchprefix.toLowerCase()))
    if (countriesToShow.length > 15) {
        return <h2>too many matches, extend the query!</h2>
    } else if (countriesToShow.length > 1) {
        return (<ul>{countriesToShow.map(c => <CountryName key={c.name} country={c}/>)}</ul>)
    } else if (countriesToShow.length === 1) {
        return <Country country={countriesToShow.pop()}/>
    } else {
        return <h3>No matching countries!</h3>
    }
}


const App = () => {
    const [ countries, setCountries ] = useState({})
    const [ searchPrefix, setSearchPrefix ] = useState('')
    const url = 'https://restcountries.eu/rest/v2/all'
    const hook = () => {
        console.log('effect called')
        axios
          .get(url)
          .then(response => {
            const mapping = {}
            console.log('promise fulfilled')
            response.data.forEach(c => {
                mapping[c.name] = c
            })
            setCountries(mapping)
          })
      }
      
      useEffect(hook, [])
      console.log(`${Object.keys(countries).length} countries found`)

    
    const handleSearchPrefixChange = (event) => {
        setSearchPrefix(event.target.value.toLowerCase())
    }

    return (
        <div>
            <h1>Country data!</h1>
            <form>
                filter for countries beginning with <input value={searchPrefix} onChange={handleSearchPrefixChange}/>
            </form>
            {Object.values(countries).length > 0 && <SearchableCountries countries={countries} searchprefix={searchPrefix}/>}
        </div>
    )
}

export default App