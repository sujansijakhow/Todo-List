import { useState } from 'react';
import Content from './components/Content';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  const [todoList, setTodoList] = useState([
    {
      todo: "Do the dishes",
      completed: true,
    },
    {
      todo: "Complete homework",
      completed: false,
    },
  ]);

const handleSubmit = (e, todoText) => {
  e.preventDefault();
  setTodoList([...todoList, {
    todo: todoText,
    completed: false,
  }]);
}
  
  return (
    <>
      <div className="h-screen w-screen flex">
        <SideMenu todoList={todoList}/>
        <Content todoList={todoList} handleSubmit={handleSubmit}/>
      </div>
    </>
  )
}

export default App
