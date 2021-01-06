import { useState, useRef, useEffect } from 'react';
import uuid from 'react-uuid';
import 'antd/dist/antd.css'; 
import './app.css';
import TodoList from './TodoList';

function App() {
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(textInput.current.value) {
      setTodo([
        ...todo,
        {id: uuid(), title: textInput.current.value, completed: false }
      ])
      textInput.current.value = '';
    }
  }

  const handleChange = (id) => {
    const updatedTodo = todo.map((todo) => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    });
    setTodo(updatedTodo)
  }

  const removeTodo = (id) => {
    const updatedTodo = todo.filter((todo) => todo.id !== id)
    setTodo(updatedTodo)
  }

  const textInput = useRef(null);

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if(data) {
      setTodo(JSON.parse(data))
    }
  },[]);

  useEffect(() => {
    const todos = JSON.stringify(todo);
    localStorage.setItem('todos', todos)
  })

  return (
    <div id="app">
      <header> My Todo </header>
      <div className="container">
        <div className="text-box">
          <form onSubmit={handleSubmit}>
            <input ref={textInput} className="form-control" type="text" placeholder="type your task..." />
            <button type="submit" className="btn-default">Add</button>
          </form>
        </div>
        <div className="todo-box">
          <div className="todo-box-header">
            {/* <span>On Going</span>
            <span>Completed</span> */}
            <span>Todo Lists</span>
          </div>
          <div className="todo-box-body">
            <TodoList todo={ todo } handleChange={handleChange} removeTodo={removeTodo} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
