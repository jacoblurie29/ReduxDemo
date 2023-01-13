import { useState } from "react";
import ReactStateTodoItem from "../TodoItem/ReactStateTodoItem";

function ReactStateTodoList() {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({value: "" , completed: false});

    const handleChange = (event) => {
        setNewItem({value: event.target.value, completed: false});
    } 
    
    const handleAddTodo = () => {
        setItems([...items, newItem]);
        setNewItem({value: "", completed: false});
    }

    const handleChangeCompleted = (index, newValue) => {
        let newItems = [...items];
        items[index].completed = newValue;
        setItems(newItems);
    }

    const handleDelete = (index) => {
        let newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems)
    }

    return (
        <div>

            {items.map((item, index) => (
                    <ReactStateTodoItem todoItem={item} index={index} handleChangeCompleted={handleChangeCompleted} handleDelete={handleDelete} key={index} />
                )
            )}

            <input 
                type="text"
                id="todo"
                name="todo"
                className="todoList-input"
                onChange={handleChange}
                value={newItem.value}
            />

            <button 
                className="todoList-button"
                onClick={handleAddTodo}
            >
                Add
            </button>
        </div>

    )

}

export default ReactStateTodoList;