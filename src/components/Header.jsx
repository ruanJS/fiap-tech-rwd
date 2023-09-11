import { createElement } from "react";

export default function Cabecalho(props){

    return(
        <>
            <header>
                <h1>Porto Seguro</h1>
                {/*Recuperar prop.children de Lista */}
                
                <ul>
                {
                    props.children.map((item, index) =>{ 
                        createElement("li", {key: index}, item);
                        return item;
                    })
                    
                }
                </ul>
                <div className="input-pesquisa">
                    <input type="text" placeholder="Pesquisar"/>
                    <button type="submit">Pesquisar</button>
                </div>
            </header>
        </>
    )
}
