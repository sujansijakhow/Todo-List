import React from "react";
import ReactDOM from 'react-dom/client'

import './index.css';

import TodoListProviders from "./Providers/TodoListProviders";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoListProviders>

        </TodoListProviders>
    </React.StrictMode>
)