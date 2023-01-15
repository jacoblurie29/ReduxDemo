import React from "react";
import "./App.css";
import ReactStateTodoList from "./features/ReactStateTodoList/ReactStateTodoList";
import ReduxStateTodoList from "./features/ReduxStateTodoList/ReduxStateTodoList";

function App() {
  return (
    <div>
      <h1 className="todoList-title">Todo List &#128221;</h1>
      <p className="todoList-subtitle">State management edition</p>
      <div className="App">
        <ReactStateTodoList />
        <ReduxStateTodoList />
      </div>
    </div>
  );
}

export default App;
