import React from "react";

const Form = ({inputText, setInputText, inputDate, setInputDate, inputTime, setInputTime, todos, setTodos, setStatus, setOrder}) => {
    const inputDateHandler = (e) => {
        console.log(e.target.value);
        setInputDate(e.target.value);
    }; 
    const inputTimeHandler = (e) => {
        console.log(e.target.value);
        setInputTime(e.target.value);
    }; 
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }; 
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, date: inputDate, time: inputTime, completed: false, id: Math.random()*1000},
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
         setStatus(e.target.value);
    };
    const orderHandler = (e) => {
        setOrder(e.target.value);
   };
    return(
        <form>
            
            <div className = "todo-container">
                <input 
                    value={inputDate}
                    onChange={inputDateHandler} 
                    type="date" 
                    className="todo-input" 
                />
                <input 
                    value={inputTime}
                    onChange={inputTimeHandler} 
                    type="time" 
                    className="todo-box" 
                />
            </div>
            <input 
                value={inputText}
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <div className="select">
                <select onChange={orderHandler} name="todos" className="filter-todo">
                    <option value="Recent">Recent</option>
                    <option value="Earlier">Earlier</option>
                </select>
            </div>
        </form>
    );
}

export default Form;

