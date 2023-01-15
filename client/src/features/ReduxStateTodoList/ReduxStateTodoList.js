import { useDispatch } from "react-redux";
import {
  changeNewValue,
  addToList,
  deleteFromList,
  changeCompleted,
} from "./TodoSlice";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "../Styles/TodoList.css";

function ReduxStateTodoList() {
  const dispatch = useDispatch();
  const { newValue, list } = useSelector((state) => state.todoList);

  const handleChange = (event) => {
    dispatch(changeNewValue(event.target.value));
  };

  const handleAddTodo = () => {
    dispatch(addToList({ value: newValue, completed: false }));

    // for debug purposes only
    console.table([...list, { value: newValue, completed: false }]);
  };

  const handleChangeCompleted = (index) => {
    dispatch(changeCompleted(index));
  };

  const handleDelete = (index) => {
    dispatch(deleteFromList(index));

    // for debug purposes only
    let newList = [...list];
    newList.splice(index, 1);
    console.table(newList);
  };

  return (
    <div className="todoList-main">
      <h1 className="todoList-header">Redux State &#128215;</h1>

      {list.map((item, index) => (
        <TodoItem
          todoItem={item}
          index={index}
          handleChangeCompleted={handleChangeCompleted}
          handleDelete={handleDelete}
          key={index}
          cssType={"redux"}
        />
      ))}

      {list.length === 0 && (
        <p className="todoList-noTasksLabel">You have no tasks...</p>
      )}

      <input
        type="text"
        id="todo"
        name="todo"
        className="todoList-input"
        placeholder="Enter new task..."
        onChange={handleChange}
        value={newValue}
      />

      <button
        className="todoList-button"
        disabled={newValue === ""}
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default ReduxStateTodoList;
