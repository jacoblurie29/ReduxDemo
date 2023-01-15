import "../Styles/TodoItem.css";

function TodoItem({
  todoItem,
  index,
  handleChangeCompleted,
  handleDelete,
  stateType,
}) {
  return (
    <div className="todoItem-main">
      <input
        className="todoItem-checkbox"
        id={stateType + "item" + index}
        name={stateType + "item" + index}
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => handleChangeCompleted(index)}
      />
      <label htmlFor={stateType + "item" + index} className="todoItem-label">
        <span className="todoItem-labelText">{todoItem.value}</span>
      </label>

      <button
        className="todoItem-deleteButton"
        onClick={() => handleDelete(index)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default TodoItem;
