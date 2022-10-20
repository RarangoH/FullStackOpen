
const App = () =>{
  const course={
   name: 'Half Stack application development',
 
  parts: [
  {
       name: 'Fundamentals of React ',
       exercises: 10
   },
  
  {
       name: 'Using props to pass data',
       exercises: 7
  },
 {
       name:'State of a component',
       exercises: 14
  }
  
 ]
 
 }
  return(
   <div>
     <Header course = {course.name}/>
     <Content parts ={course.parts}/>
     <Total parts={course.parts}/>
     
   </div>
 )
 }
 
 const Header = (props) => {
   return(
   <div>
   <h1>
     {props.course}
   </h1>
   </div>
   )
 }
 const Content = (props) => {
   
   return (
   <div>
     
     <Part p={props.parts}/>
   </div>
   )
 }
 const Part = (props) => {
   return (
     <div>
       {props.p.map(one=><p key={one.name}>{one.name} {one.exercises}</p>)}
       
       
     </div>
   )
 }
 
 const Total = (props) => {
 var suma = 0;
   return(
     <>
     {/* {props.exercises1 + props.exercises2 + props.exercises3} */}
       <p>Number of exercises {props.parts.forEach(element => {console.log(element.exercises)
                                                                  suma = suma + element.exercises})} {suma} </p>
     </>
   )
   
 }
 
 
 
 export default App;
 