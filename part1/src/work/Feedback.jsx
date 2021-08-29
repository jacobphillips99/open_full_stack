import {React, useState} from 'react'
import _ from 'lodash'

const Feedback = () => {
    const originalState = {good: 0, neutral: 0, bad: 0, total: 0}
    const [counts, setCounts] = useState(_.clone(originalState))

    const handleGoodClick = () => {
            setCounts({...counts, good: counts.good + 1, total: counts.total + 1})
    }

    const handleNeutralClick = () => {
            setCounts({...counts, neutral: counts.neutral + 1, total: counts.total + 1})
    }

    const handleBadClick = () => {
            setCounts({...counts, bad: counts.bad + 1, total: counts.total + 1})
    }
    const handleResetClick = () => {
            setCounts(_.clone(originalState))
    }
    const stats = () => {
        console.log("calling stats with count: ", counts)
        console.log(Object.entries(counts))
        return <ul>{Object.entries(counts).map((k, ind) => k[0] !== 'total' && (<li key={ind}>{k[0]}: {(100 *k[1] / counts.total).toFixed(2)}%</li>))}</ul>
    }
    const displayStats = (counts.total > 0) &&  (<div>
                            <h1>Statistics:</h1>
                            {stats()}
                        </div>)
    return (
        <div>
            <h1>Give Feedback!</h1>
            <button onClick={handleGoodClick}>good :)</button>
            <button onClick={handleNeutralClick}>neutral :|</button>
            <button onClick={handleBadClick}>bad :(</button>
            <h1>Counts:</h1>
            <ul>{Object.entries(counts).map((k, ind) => <li key={ind}>{k[0]}: {k[1]}</li>)}</ul>
            {displayStats}
            <button onClick={handleResetClick}>RESET</button>

        </div>

    )
}

export default Feedback