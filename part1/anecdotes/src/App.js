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
  
  setSelected(Math.floor(Math.random() * anecdotes.length));
  
}


const genPoint = () => {
 
  console.log("ssss",selected)
  if(selected === 0){
   
    setPoints({...points, one:points.one+1})
  }else if(selected === 1){
    setPoints({...points, two:points.two+1})
  }else if(selected === 2){
    setPoints({...points, three:points.three+1})
  }else if(selected === 3){
    setPoints({...points, four:points.four+1})
  }else if(selected === 4){
    setPoints({...points, five:points.five+1})
  }else if(selected === 5){
    setPoints({...points, six:points.six+1})
  }else{
    setPoints({...points, seven:points.seven+1})
  }
  
// const lookPoints = () => {
//   if(selected ===0){
//     return points.one;
//   }
// }

  
}

  const [selected, setSelected] = useState(0)

  const [points, setPoints] =useState({
    one:0,
    two:0,
    three: 0,
    four: 0,
    five: 0 ,
    six: 0,
    seven: 0
  })

  console.log("selected",selected)
  console.log("points",points)
 console.log(points.one)
  return (
    <div>

      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
     
      <Point number={selected} points={points}/>
      
      
      <button onClick={genPoint}>vote</button>
      <button onClick={genRan}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <MostVotes points={points} anecdotes = {anecdotes}  />
    </div>
  )

  
}
const MostVotes =(props) =>{
  var contador = 0;
  var t;
  var print;
    Object.entries(props.points).forEach(element => {
      
        if(element[1] > contador){
          contador = element[1];
          t = element;
        }
      
    });
    if(t === undefined){
      return(
        <div>
          {props.anecdotes[0]}
        </div>
      )
    }else{
      if(t[0] === "one"){
        print = 0;
     }else if(t[0] === "two"){
       print = 1;
     }else if(t[0] === "three"){
       print = 2;
     }else if(t[0] === "four"){
       print = 3;
     }else if(t[0] === "five"){
       print = 4;
     }else if(t[0] === "six"){
       print = 5;
     }else{
       print = 6;
     }
    }
      
    
    console.log(contador, props.anecdotes.anec , props.anecdotes.seven)
    return(
      <div>
        {props.anecdotes[print]}
      </div>
    )
}
const Point = (props) =>{
      
          if(props.number === 0){
            return (
              <div>
                 has {props.points.one} votes
              </div>
            )
          }else if(props.number === 1){
            return (
              <div>
                 has {props.points.two} votes
              </div>
            )
          }else if(props.number === 2){
            return (
              <div>
                 has {props.points.three} votes
              </div>
            )
          }else if(props.number === 3){
            return (
              <div>
                 has {props.points.four} votes
              </div>
            )
          }else if(props.number === 4){
            return (
              <div>
                 has {props.points.five} votes
              </div>
            )
          }else if(props.number === 5){
            return (
              <div>
                 has {props.points.six} votes
              </div>
            )
          }else {
            return (
              <div>
                 has {props.points.seven} votes
              </div>
            )
          }
          
    
}
export default App