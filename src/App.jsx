import React from "react"
import Header from "./components/Header"
import Home from "./routes/Home"
import Problema from "./routes/Problema"
import Solucao from "./routes/Solucao"
import Integrantes from "./routes/Integrantes"
import Rodape from "./components/Rodape"
import Conteudo from "./components/Conteudo"

export default function App() {
  return (
    <div>
      <Header/>
      <Conteudo />
      <Home/>
      <Problema/>
      <Solucao/>
      <Integrantes/>
      <Rodape/>
    </div>
  );
}