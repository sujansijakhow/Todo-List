<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM from 'react-dom/client'

import './index.css';

import TodoListProviders from "./Providers/TodoListProviders";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoListProviders>

        </TodoListProviders>
    </React.StrictMode>
>>>>>>> 4c89232abb94d0f6e26e302dd98729020428f8b3
)