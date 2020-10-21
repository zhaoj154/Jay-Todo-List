import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/From"
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [order, setOrder] = useState("Recent");

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const getTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>Jay's Todo List</h1> 
      </header>
      <Form 
        inputText={inputText} 
        inputDate={inputDate} 
        inputTime={inputTime}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setInputDate={setInputDate}
        setInputTime={setInputTime}
        setStatus = {setStatus}
        setOrder={setOrder}
      />
      <TodoList 
        setTodos={setTodos}
        order={order}
        todos={todos} 
        filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
