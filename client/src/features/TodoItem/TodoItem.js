import "../Styles/TodoItem.css";

function TodoItem({
  todoItem,
  index,
  handleChangeCompleted,
  handleDelete,
  cssType,
}) {
  return (
    <div className="todoItem-main">
      <input
        className="todoItem-checkbox"
        id={cssType + "item" + index}
        name={cssType + "item" + index}
        type="checkbox"
        defaultValue={todoItem.completed}
        onChange={() => handleChangeCompleted(index)}
      />
      <label htmlFor={cssType + "item" + index} className="todoItem-label">
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
