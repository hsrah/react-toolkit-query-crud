import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Read from './Components/Read'
import { BrowserRouter, createBrowserRouter, Outlet } from 'react-router-dom'
import AddEdit from './Components/AddEdit'
import Header from './Components/Header'
import { Provider } from 'react-redux'
import { store } from './app/store'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Read/>,
      },
      {
        path: '/create',
        element: <AddEdit/>,
      },
      {
        path: '/edit/:id',
        element: <AddEdit/>,
      }
    ]
  }
])

export function App() {
  
 
  return (
    <>
    <Provider store={store}>
      <Header />
      <Outlet></Outlet>
    </Provider>
    </>
  )
}
