import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Integrantes from './components/Integrantes.jsx'
import Problema from './components/Problema.jsx'
import Solucao from './components/Solucao.jsx'
import Home from './routes/Home.jsx'


const router = createBrowserRouter([
  {path: '/' , 
  element: <App/>,
  errorElement: <Error404/>,
  children: [
  {path: '/', element: <Home/>},

  {path: '/problema', element: <Problema/>},

  {path: '/solucao', element: <Solucao/>},

  {path: '/integrantes', element: <Integrantes/>}
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
