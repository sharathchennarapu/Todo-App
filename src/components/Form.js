import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({input, setInput, todo, setTodo, editTodo, setEditTodo}) => {
    const updateTodo =(title, id, complete)=>{
        const newTodo = todo.map((todo) => 
            todo.id === id ? {title, id, complete} :todo
        );
        setTodo(newTodo);
        setEditTodo('');
    };
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput('');
        }
    }, [setInput, editTodo]);
    const onInputChange =(event) =>{
        setInput(event.target.value);
    }
    const onFormSubmit =(event) =>{
       event.preventDefault(); 
       if(!editTodo){
       setTodo([...todo, {id: uuidv4(), title:input, complete:false}]);
       setInput('');
       }else{
        updateTodo(input, editTodo.id, editTodo.complete)
       }
    };
  return (
   <>
   <div className='inputbox'>
   <form onSubmit={onFormSubmit}>
    <input type='text' placeholder='Enter the Todo' className='task-input' value={input} required onChange={onInputChange}/>
    <button className='button-add' type='submit'>
        {editTodo ? 'ok' : "add"}
    </button> 
   </form>
   </div>
   </>
  )
}

export default Form
