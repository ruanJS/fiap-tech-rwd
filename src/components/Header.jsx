import { createElement } from "react";

export default function Cabecalho(props){

    return(
        <>
            <header>
                <div className="logo"></div>
                <nav>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#problema">Problema</a></li>
                        <li><a href="#solucao">Solução</a></li>
                        <li><a href="#integrantes">Integrantes</a></li>
                    </ul>
                </nav>
                <div className="input-pesquisa">
                    <input type="text" placeholder="Pesquisar"/>
                    <button type="submit">Pesquisar</button>
                </div>
            </header>
        </>
    )
}
