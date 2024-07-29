import "./index.scss";
import { Link } from "react-router-dom";

export default function ExerDois() {
  return (
    <div className="exercicio_dois">
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

      <div className="info1">
        <img
          id="seta"
          src="https://media.discordapp.net/attachments/837420691666108437/1267483317692010528/seta.png?ex=66a8f353&is=66a7a1d3&hm=a453e369b533049abf9d4ab68bbcf97c6745a57154df36a31733f677d857383d&=&format=webp&quality=lossless"
          alt=""
        />
        <h1>Exercício 02 - Converter Kg/gramas</h1>
      </div>
      <div className="linhaGreen"></div>

      <div className="info2">
        <h1>
          Implementar um programa em Javascript para converter kilos em gramas.
        </h1>
      </div>

      <div className="cartao">
        <h1>Valor em gramas</h1>
        <input type="number" placeholder="0" />
        <button>Executar</button>
      </div>
      <p>Resultado: O total é R$ 0,00</p>
    </div>
  );
}
