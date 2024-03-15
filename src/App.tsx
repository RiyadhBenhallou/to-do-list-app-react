import React, { useState } from "react";
//import todos from "./todos.js";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const addTodo = () => {
    setItems((prevItems) => [...prevItems, todo]);
    setTodo("");
  };

  /*const addTodo = () => {
    todos.push(todo);
    setTodo("");
  };*/

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
          {/*{todos.map((todo) => (
            <li>{todo}</li>
          ))}*/}
        </ul>
      </div>
    </div>
  );
}

export default App;
