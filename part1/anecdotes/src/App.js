import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  


const genRan = () => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
  console.log(selected)
  return selected
}

const addPoint = () => {
  console.log(selected)
  console.log(points)
  return setPoints(points.selected + 1)
}

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    one:5,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0
  })

  console.log( "one:",points.one)


  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div> has {points.selected} votes</div>
      
      <button onClick={addPoint}>vote</button>
      <button onClick={genRan}>next anecdote</button>
    </div>
  )
}

export default App