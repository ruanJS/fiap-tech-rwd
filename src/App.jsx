import React from "react"
import Header from "./components/Header"
import Home from "./routes/Home"
import Problema from "./components/Problema"
import Solucao from "./components/Solucao"
import Integrantes from "./components/Integrantes"
import Rodape from "./components/Rodape"
import { createElement } from "react"

export default function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Problema/>
      <Solucao/>
      <Integrantes/>
      <Rodape/>
    </div>
  );
}