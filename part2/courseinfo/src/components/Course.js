const Course = ({ course }) => {

   
    const initialValue = 0;
    const total = course.parts.reduce((s,p) => s + p.exercises,initialValue);
   


    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts}/>
            <div><strong>total of {total} exercises</strong></div>
        </div>
    )
  }
  
  const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
  }

  const Content = ({parts}) =>{
    return(
        <div>
            
            {parts.map(part => 
                <Part key={part.id} name={part.name} exercises={part.exercises} /> ) }
         </div>
    )
    
  }

  const Part = ({name, exercises,id}) =>{
    return(
    <div>
        {name} {exercises}
    </div>
    )
    
  }
  export default Course