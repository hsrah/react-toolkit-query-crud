import { render } from 'preact'
import './index.css'
import { router } from './app.tsx'
import React from 'preact/compat'
import { RouterProvider } from 'react-router-dom'
render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
    
, document.getElementById('app')!)
