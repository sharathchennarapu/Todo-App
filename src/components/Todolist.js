import React from 'react'
import { IoMdDoneAll } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todolist = ({todo, setTodo, setEditTodo}) => {
    const handleDelete = ({ id }) => {
        setTodo(todo.filter((todo) => todo.id !==id));
    };
    const handleEdit = ({ id }) => {
        const findTodo =todo.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
  return (
    <div className='box'>
        <h1>Lists</h1>
    <div className='listbox'>
      {todo.map((todo) => (
        <li className='list-item' key={todo.id}>
            <input type='text' value={todo.title} className={`list ${todo.complete ? "complete" : ''}`} onChange={(event)=> event.preventDefault()}/>
            <div>
                <button className='button-complete task-button' >
                <IoMdDoneAll />
                </button>
                <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
                <FaRegEdit />
                </button>
                <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                <MdDelete />
                </button>
            </div>
        </li>
      ))}
    </div>
    </div>
  )
}

export default Todolist
