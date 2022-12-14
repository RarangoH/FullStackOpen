import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'
 
  const textG = 'good'
  const textN = 'neutral'
  const textB = 'bad'
  var total = 0

  

  const increaseGood = () => {
    setGood(good + 1)
  }
  
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const increaseBad = () => {
    setBad(bad + 1)
  }
  const average = (g,n,b) => {
    
      if(g === 0 && b === 0 && n === 0){
        return 0
      }else{
        total = (g-b)/(g+n+b)
        return(total)
      }
  }

  const percentage = (g,n,b) => {
    if(g === 0 && b === 0 && n === 0){
      return 0
    }else{
      return (((g/(g+n+b))*100).toString() + '%')
    }
  }
  if(good === 0 && neutral === 0 && bad === 0){
      return (
        <div>
        <Display title={title} />
        <Button handleClick={increaseGood} text={textG} />
        <Button handleClick={increaseNeutral} text={textN} />
        <Button handleClick={increaseBad} text={textB} />
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
      )
    }else{
      
      return (
        <div>
          
          <Display title={title} />
          <Button handleClick={increaseGood} text={textG} />
          <Button handleClick={increaseNeutral} text={textN} />
          <Button handleClick={increaseBad} text={textB} />
          <h1>statistics</h1>
          <table>
            <tr>
              <td><Statistics textG = {textG} /></td>
              <td><Statistics countG={good} /></td>
            </tr>
            <tr>
              <td><Statistics textN = {textN} /></td>
              <td><Statistics countN={neutral} /></td>
            </tr>
            <tr>
              <td><Statistics textB={textB} /></td>
              <td><Statistics countB={bad} /></td>
            </tr>
            <tr>
              <td><Statistics textA={'all'} /></td>
              <td><Statistics countA={good+bad+neutral} /></td>
            </tr>
            <tr>
              <td><Statistics textAvg={'average'} /></td>
              <td><Statistics avg={average(good,neutral,bad)} /></td>
            </tr>
            <tr>
              <td><Statistics textPer={'percentage'} /></td>
              <td><Statistics per={percentage(good,neutral,bad)} /></td>
            </tr>

          {/* <Statistics textG = {textG} countG={good}/>
          <Statistics textN = {textN} countN={neutral}/>
          <Statistics textB={textB} countB={bad} />
          <Statistics textA={'all'} countA={good+bad+neutral} />
          <Statistics textAvg={'average'} avg={average(good,neutral,bad)} />
          <Statistics textPer={'percentage'} per={percentage(good,neutral,bad)} /> */}
          </table>
        </div>
      )
    }
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
      <div>
      <StatisticsLine name={props.textG} count={props.countG} />
      <StatisticsLine name={props.textN} count={props.countN} />
      <StatisticsLine name={props.textB} count={props.countB} />
      <StatisticsLine name={props.textA} count={props.countA} />
      <StatisticsLine name={props.textAvg} count={props.avg} />
      <StatisticsLine name={props.textPer} count={props.per}/>
      </div>
    )
  }

const StatisticsLine = (props) => {
return(
  <>
  {props.name} {props.count} {props.sign}
  </>
)
}

// const Count = (props) => {
//   return (
//     <div>
//       {props.text} {props.count}
//     </div>
//   )
// }
export default App