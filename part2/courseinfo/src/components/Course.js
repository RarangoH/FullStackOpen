const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts}/>
            
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
            {parts.map(part => <Part name={part.name} exercises={part.exercises} />)}
         </div>
    )
    
  }

  const Part = ({name, exercises}) =>{
    return(
    <div>
        {name} {exercises}
    </div>
    )
    
  }
  export default Course