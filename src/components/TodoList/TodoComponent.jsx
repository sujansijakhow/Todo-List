import { useState } from 'react'
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

const TodoComponent = ({ todoList, handleSubmit }) => {
    return (
        <div className="flex flex-col shadow-md px-12 pb-12 w-2/4 rounded-lg divide-y-2 max-h-[400px] overflow-auto">
          <div className='py-4'>
            <span className="text-2xl font-bold">Todos: { todoList.length }</span>
          </div>
          <div>
            <TodoAddForm submitHandler={handleSubmit}/>
            <TodoList todoList={todoList}/>
          </div>
        </div>
    )
}

export default TodoComponent;