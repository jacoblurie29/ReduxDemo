import './ReactStateTodoItem.css'

function ReactStateTodoItem ( { todoItem, index, handleChangeCompleted, handleDelete } ) {

    return (
        <div>

            <p className="todoItem-p">{(index + 1) + ". " + todoItem.value}</p>

            <input
                className="todoItem-input"
                type="checkbox"
                defaultValue={todoItem.completed}
                onChange={() => handleChangeCompleted(index, !todoItem.completed)}
            />

            <button 
                onClick={() => handleDelete(index)}
            >
                delete
            </button>
            
        </div>
    )
}

export default ReactStateTodoItem;