import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Conteudo from './components/Conteudo.jsx'
import Header from './components/Header.jsx'
import Integrantes from './components/Integrantes.jsx'
import Problema from './components/Problema.jsx'
import Rodape from './components/Rodape.jsx'
import Solucao from './components/Solucao.jsx'


const router = createBrowserRouter([
  {path: '/' , 
  element: <App/>,
  errorElement: <Error404/>
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
