import TodoComponent from "./TodoList/TodoComponent"

const Content = ({ todoList, handleSubmit}) => {
    return (
        <div className="w-5/6 bg-gray-50 flex flex-row justify-center items-center">
          <TodoComponent todoList={todoList} handleSubmit={handleSubmit}/>
        </div>
    );
}

export default Content;