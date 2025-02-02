import { useState } from 'react';
import Content from './components/Content';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  

  
  return (
    <>
      <div className="md:h-screen w-screen flex">
        <SideMenu />
        <Content />
      </div>
    </>
  )
}

export default App  
