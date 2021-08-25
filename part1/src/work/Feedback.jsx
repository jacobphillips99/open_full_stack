import {React, useState} from 'react'

const Feedback = () => {
    const [counts, setCounts] = useState({
        good: 0, neutral: 0, bad: 0
    })

    const handleGoodClick = () => {
            setCounts({...counts, good: counts.good + 1})
    }

    const handleNeutralClick = () => {
            setCounts({...counts, neutral: counts.neutral + 1})
    }

    const handleBadClick = () => {
            setCounts({...counts, bad: counts.bad + 1})
    }

    return (
        <div>
            <h1>Give Feedback!</h1>
            <button onClick={handleGoodClick}>good :)</button>
            <button onClick={handleNeutralClick}>neutral :|</button>
            <button onClick={handleBadClick}>bad :(</button>
            <h1>Statistics:</h1>
            <ul>{Object.entries(counts).map((k, ind) => <li key={ind}>{k[0]}: {k[1]}</li>)}</ul>
            <h1>that's it</h1>
        </div>

    )
}

export default Feedback