import Home from "./routes/Home"
import Header from "./components/Header"
import Rodape from "./components/Rodape"
import Integrantes from "./components/Integrantes"
import Problema from "./components/Problema"
import Solucao from "./components/Solucao"
import { createElement } from "react";

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