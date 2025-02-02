import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
    return (
<<<<<<< HEAD
        <div className='divide-y mt-4'>
            {
            todoList.map(todo => <TodoListItem todo={todo} />)
            }
        </div>
    );
=======
        <div className="divide-y mt-4">
            {
                todoList.map(todo => <TodoListItem todo = {todo}/>)
            }

        </div>
    )
>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
}

export default TodoList;