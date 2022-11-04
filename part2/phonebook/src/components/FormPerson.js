



const FormPerson = ({submit,name,onChangeName,onChangeNumber,number}) =>{
   
   
    

    return (
        <div>
            <form onSubmit={submit}>
                <div>name: <input value={name} onChange={onChangeName}/></div>
                <div>number:<input value={number} onChange={onChangeNumber}/></div>
        
            
            
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )


}



export default FormPerson
