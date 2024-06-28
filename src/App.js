import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  const initalState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState(initalState);
  const [editTodo, setEditTodo] =useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  },[todo]);
  return (
   <>
   <div className='container'>
   <div className='heading'>
         <p>Tudo Lists</p>
      </div><br/><br/>
    <div className='app-wrapper'>
      <div>
         <Header/>
      </div>
      <div>
        <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
      </div>
    </div>
    <div>
      <Todolist todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
    </div>
   </div>
  
   </>
  );
}

export default App;
