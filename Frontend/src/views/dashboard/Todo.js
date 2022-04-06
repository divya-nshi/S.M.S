import React, { useState } from 'react'

import '../../static/css/Todo.css';



export default function Todo() {
    const [currentTodo, setCurrentTodo] = useState("");
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Todo")) || []);
  
    function createNewTodo(currentTodo) {
      let todosArray = [...todos];
      todosArray.push({
        todo: currentTodo,
        isCompleted: false
      });
      setTodos(todosArray);
      localStorage.setItem("Todo", JSON.stringify(todosArray));
    }
    
    function completeTodo(index) {
      let todosArray = [...todos];
      todosArray[index].isCompleted = !todosArray[index].isCompleted;
      setTodos(todosArray);
      localStorage.setItem("Todo", JSON.stringify(todosArray));
    }
    
    function deleteTodo(index) {
      let todosArray = [...todos];
      todosArray.splice(index, 1);
      setTodos(todosArray);
      localStorage.setItem("Todo", JSON.stringify(todosArray));
    }
  
    return (
      <div className='Todo'>
        <input
          className="Todo_input"
          value={currentTodo}
          onChange={e => {
            setCurrentTodo(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              createNewTodo(currentTodo);
              setCurrentTodo("");
            }
          }}
          placeholder="What needs to get done?"
        />
        <div className='Todo_list'>
        {todos.map((todo, index) => (
          <div key={index} className="Todo_todo">
            <div className="Todo_checkbox" onClick={() => completeTodo(index)}>
              {todo.isCompleted && <span>&#x2714;</span>}
            </div>
            <div className={todo.isCompleted ? "Todo_done" : ""}>{todo.todo}</div>
            <div className="Todo_delete" onClick={() => deleteTodo(index)}>
              &#128465;
            </div>
          </div>
        ))}
        </div>
        {todos.length > 0 && `${todos.length} items`}
      </div>
    );
}
