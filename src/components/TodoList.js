import React from "react";
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos, order }) =>{
    const dynamicSort  = (property, property2) =>  {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var ap = a[property] + a[property2]
            var bp = b[property] + b[property2]
            var result = (ap < bp) ? -1 : (ap > bp) ? 1 : 0;
            return result * sortOrder;
        }
    }
    const orderedFilteredTodos = filteredTodos.sort(dynamicSort("date", "time"));
    if(order != "Recent"){
        const orderedFilteredTodos = filteredTodos.sort(dynamicSort("-date", "time"));
    }
    
    return(
        <div className = "todo-container">
            <ul className = "todo-list">
                {orderedFilteredTodos.map((todo) => (
                    <Todo 
                        setTodos={setTodos}
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text}
                        date={todo.date}
                        time={todo.time}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList