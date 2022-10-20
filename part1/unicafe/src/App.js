import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'
  const stats = 'statistics'
  const textG = 'good'
  const textN = 'neutral'
  const textB = 'bad'

  const increaseGood = () => {
    setGood(good + 1)
  }
  
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Display title={title} />
      <Button handleClick={increaseGood} text={textG} />
      <Button handleClick={increaseNeutral} text={textN} />
      <Button handleClick={increaseBad} text={textB} />
      <Statistics stats={stats} />
      <Count text={textG} count={good} />
      <Count text={textN} count={neutral} />
      <Count text={textB} count={bad} />

    </div>
  )
}



const Display = (props) => {
  return (
    <>
    <h1>
      {props.title}
    </h1>
    </>
  )
}
const Button = (props) => {
  console.log('entro')
  return (
    <>
    <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}
const Statistics = (props) => {
  return (
    <>
    <h1>{props.stats}</h1>
    </>
  )
}

const Count = (props) => {
  return (
    <div>
      {props.text} {props.count}
    </div>
  )
}
export default App