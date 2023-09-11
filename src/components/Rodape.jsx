import logo1 from "./public/facebook-64.png"
import logo2 from "./public/instagram.png"
import logo3 from "./public/youtube.png"

export default function Rodape(){
    return(
        <>
            <footer>
                <div>
                    <ul>
                    <li><img src="./public/instagram.png"></img><a href="#">Instagram</a></li>
                    <li><img src="./public/youtube.png"></img><a href="#">YouTube</a></li>
                    <li><img src="./public/facebook-64.png"></img><a href="#">Facebook</a></li>
                    </ul>
                    <p>&copy;Todos os meus direitos reservados - 2023</p>
                </div>
            </footer>            
        </>
    )
}