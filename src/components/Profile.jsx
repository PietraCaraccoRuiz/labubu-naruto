
import Labubu from './Labubu'
import gaara from '../assets/gaara.png'
import naruto from '../assets/naruto.png'
import hinata from '../assets/hinata.png'
import sasuke from '../assets/sasuke.png'

const Profile = () => {

    const labubus = [
        {
            imagem: naruto,
            nome: "naruto",
            preco: 100
        },
        {
            imagem: sasuke,
            nome: "sasuke",
            preco: 200
        },
        {
            imagem: gaara,
            nome: "gaara",
            preco: 100
        },
        {
            imagem: hinata,
            nome: "hinata",
            preco: 100
        }
    ]
    return (
        <div class="main">
            <p>
                LABUBUS
            </p>
            <div className='labubus'>
                {labubus.map((item, index) => (
                    <Labubu key={index} imagem={item.imagem} nome={item.nome} preco={item.preco} ></Labubu>
                ))}

            </div>

        </div>
    )
}

export default Profile