import logo1 from "./public/facebook-64.png"
import logo2 from "./public/instagram.png"
import logo3 from "./public/youtube.png"

export default function Rodape(){

    const rodape = [
        {image: logo1, text: 'Logo facebook'},
        {image: logo2, text: 'Logo instagram'},
        {image: logo3, text: 'Logo youtube'},
    ]

    return(
        <>
            <footer>
                <div>
                    <ul>
                        {footerItems.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.text}/>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                    <p>&copy;Todos os meus direitos reservados - 2023</p>
                </div>
            </footer>            
        </>
    )
}