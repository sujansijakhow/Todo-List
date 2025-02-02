import { useState } from "react";

<<<<<<< HEAD
const TodoAddForm = ({ submitHandler }) => {
=======
const TodoAddForm = ({ submitHandler}) => {
>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
    const [todoText, setTodoText] = useState("");
    const handleTodoTextChange = (e) => setTodoText(e.target.value);

    const handleSubmit = (e) => {
        submitHandler(e, todoText);
        setTodoText("");
    }
<<<<<<< HEAD
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-row pt-4 gap-1">
            <input onChange={handleTodoTextChange} value={todoText} type="text" className="w-3/4 border-2 rounded-lg px-2 focus:border-rose-500 outline-none" />
            <button className="bg-green-600 text-white w-1/4 p-2 rounded-lg font-semibold hover:bg-green-500">Add Todo</button>
        </form>
    );
=======

    return (
        <form onSubmit={handleSubmit} className="flex flex-row pt-4 gap-1">
            <input onChange={handleTodoTextChange} value={todoText} type="text" className="w-3/4 border-2 rounded-lg focus:border-rose-500 outline-none" />
            <buuton className="bg-green-600 text-white w-1/4 p-2 rounded-lg font-semibold hover:bg-green-500">Add Todo</buuton>
                
        </form>
    )
>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
}

export default TodoAddForm;