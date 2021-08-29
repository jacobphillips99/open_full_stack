import React, { useState } from 'react'

const RandomQuote = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const setRandomInd = (length) => {
      const newInd = Math.floor(Math.random()*length)
      setSelected(newInd)
  }
  const markVote = () => {
      const newVotes = [...votes]
      newVotes[selected] += 1
      setVotes(newVotes)
  }
  const getMostPopular = () => {
      const maxVotes = Math.max(...votes)
      const maxInd = votes.indexOf(maxVotes)
      return <p>"{anecdotes[maxInd]}" with {votes[selected]} votes!</p>
  }


  return (
    <div>
      <h1>Anecdotes of the day:</h1>
      {anecdotes[selected]}
      <p> - has {votes[selected]} votes!</p>
      <div>
        <button onClick={() => setRandomInd(anecdotes.length)}>Next</button>
        <button onClick={markVote}>Vote!</button>
      </div>
      <div>
          <h2>Most popular anecdote:</h2>
          {getMostPopular()}
      </div>
    </div>
  )
}

export default RandomQuote