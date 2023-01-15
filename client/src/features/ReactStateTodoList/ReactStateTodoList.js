import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "../Styles/TodoList.css";

function ReactStateTodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddTodo = () => {
    setItems([...items, { value: newItem, completed: false }]);
    setNewItem("");

    // for debug purposes only
    console.table([...items, newItem]);
  };

  const handleChangeCompleted = (index) => {
    let newItems = [...items];
    newItems[index].completed = !items[index].completed;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);

    // for debug purposes only
    console.table(newItems);
  };

  return (
    <div className="todoList-main">
      <h1 className="todoList-header">React State &#128216;</h1>

      {items.map((item, index) => (
        <TodoItem
          todoItem={item}
          index={index}
          handleChangeCompleted={handleChangeCompleted}
          handleDelete={handleDelete}
          key={index}
          cssType={"react"}
        />
      ))}

      {items.length === 0 && (
        <p className="todoList-noTasksLabel">You have no tasks...</p>
      )}

      <input
        type="text"
        id="todo"
        name="todo"
        className="todoList-input"
        placeholder="Enter new task..."
        onChange={handleChange}
        value={newItem}
      />

      <button
        className="todoList-button"
        disabled={newItem === ""}
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default ReactStateTodoList;
