<<<<<<< HEAD
const TodoListItem = ({ todo, onDelte }) => {
    return (
        <div 
            className={`py-2 shadow-sm flex flex-row justify-between ${todo.completed ? 'line-through text-gray-600' : ''} `}
        >
            <span>{ todo.todo }</span>
            <div>
            <button className="bg-rose-500 rounded-lg p-2 text-white text-sm hover:bg-rose-400" onDelte={todo}>Delete</button>
            </div>
=======
const TodoListItem = (todo, onDelete) => {
    return(
        <div
            className={`py-2 shadow-sm flex flex-row justify-between ${todo.completed ? 'line-through text-gray-600 ' : ''}`}
        >
            <span>{todo.todo}</span>
            <div>
                <button className="bg-rose-500 rounded-lg p-2 text-white text-sm hover:bg-rose-400 " onDelete ={todo}>Delete</button>
            </div>

>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
        </div>
    )
}

export default TodoListItem;