import { useContext, useState } from "react";
import TodoAddForm from "./TodoAddForm";
import TodoList from "./TodoList";
import todoListContext from "../../Contexts/TodoListContext";

const TodoComponent = () => {
    const {todoList, setTodoList} = useContext(todoListContext);

    const handleSumbit = (e, todoText) => {
        e.preventDefault();
        setTodoList([...todoList, {
            todo: todoText,
            completed: false,
        }]);
    }

    return (
        <div className="flex flex-col shadow-md px-12 pb-12 w-2/4 rounded-lg divide-y-2 max-h-[400px] overflow-auto">
            <div className="py-4">
                <span className="text-2xl font-bold ">Todos: { todoList.length }</span>
            </div>
            <div>
                <TodoAddForm submitHandler={handleSumbit}/>
                <todoList todoList={todoList}/>
            </div>

        </div>
    )
}

export default TodoComponent;