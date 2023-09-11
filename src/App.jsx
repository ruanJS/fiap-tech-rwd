import Rodape from "./components/Rodape"
import Conteudo from "./components/Conteudo"
import { BrowserRouter, Router, Switch } from "react-router-dom"
import { createElement } from "react";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Router path="/" exact component={Principal} />
          <Router path="/problema" component={Problema} />
          <Router path="/solução" component={Solução} />
          <Router path="/integrantes" component={Integrantes} />
          <Router component={Erro404} />
        </Switch>
      <Rodape />
    </div>  
    </Router>
  );
}
export default function Header(props) {

    return (
        <>
            <header>
                <h1>Porto Seguro</h1>
                {/*Recuperar prop.children de Lista */}

                <ul>
                    {props.children.map((item, index) => {
                        createElement("li", { key: index }, item);
                        return item;
                    })}
                </ul>
                <div className="input-pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                    <button type="submit">Pesquisar</button>
                </div>
            </header>
        </>
    );
}


