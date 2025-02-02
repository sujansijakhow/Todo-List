import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import './index.css';
import TodoListProvider from './Providers/TodoListProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TodoListProvider>
      {/* <App /> */}
    </TodoListProvider> 
  </React.StrictMode>,
)