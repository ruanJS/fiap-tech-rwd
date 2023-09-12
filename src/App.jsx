import React from "react"
import Header from "./components/Header"
import Home from "./routes/Home"
import Rodape from "./components/Rodape"
import Home from "./components/Home"
import ConteudoLista from "./components/ConteudoLista"

export default function App() {
  return (
    <div>
      <Header/>
      <Home />
      <ConteudoLista/>
      <Rodape/>
    </div>
  );
}

