<<<<<<< HEAD

=======
>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
import { useContext } from "react";
import todoListContext from "../../Contexts/TodoListContext";

const SideMenuHomeButton = () => {
<<<<<<< HEAD

    const { todoList }= useContext(todoListContext)
    return (
        <div className='w-full p-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between'>
            <span>Home</span>
            <div className='h-[20px] w-[25px] bg-rose-500 rounded-lg text-sm text-white text-center'>{todoList.length}</div>
        </div> 
=======
    
    const { todoList } = useContext(todoListContext);

    return (
        <div className="w-full p-2  cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-center">
            <span>Home</span>
            <div className="h-[20px] w-[25px] bg-rose-500 rounded-lg text-sm text-white text-center">{todoList.length}</div>

        </div>
        

>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
    )
}

export default SideMenuHomeButton;