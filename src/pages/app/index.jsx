import "./app.scss";
import { Link } from "react-router-dom";
import Card from "../../components/cards";

export default function App() {
let obj = [
    {
      titulo:'teste',
      cor:"preto",
      url:'./exerUm',
      destino:'casa do carai'

    }
]


  return (
    <div>
      <div className="maeApp">
        <div className="cab">
          <div className="cab1">
            <img src="https://media.discordapp.net/attachments/837420691666108437/1267458438410010654/0bf1e929fef0bf14e7f0bc09da2392a4.png?ex=66a8dc27&is=66a78aa7&hm=bbb510a72d96c75c0c36e841188b8e9a07e5b8fd3ec82a0b6f33ae03c2dd4c14&=&format=webp&quality=lossless&width=300&height=350" />
            <h1>React FreiS</h1>
          </div>

          <div className="cab2">
            <Link to="/">inicio</Link>
            <Link to="/sobre">Sobre</Link>
          </div>
        </div>

        <div className="conteiner2">
          <h1>Escolha um treino...</h1>

          <div className="cartoes">
            
        {obj.map(item => <Card
        titulo={item.titulo}
        url={item.url }  
        cor={item.cor}
        destino={item.destino}
        />)}
            
           
          </div>

        </div>
      </div>
    </div>
  );
}
