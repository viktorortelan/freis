import "./app.scss";
import { Link } from "react-router-dom";

export default function App() {
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
            <div className="card1">
              <div className="yellow"></div>
              <h1>Cupom de desconto</h1>
              <Link to='/exerUm'>Exercício 01</Link>
            </div>

            <div className="card2">
              <div className="green"></div>
              <h1>Converter Kg/gramas</h1>
              <Link to='/exerDois'>Exercício 02</Link>
            </div>

            <div className="card3">
              <div className="blue"></div>
              <h1>Valor total por quantidade</h1>
              <Link to='/exerTres'>Exercício 03</Link>
            </div>

            <div className="card4">
              <div className="blue"></div>
              <h1>eventos</h1>
              <Link to='/eventos'>Exercício 04</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
