import "./exerUm.scss";
import { Link } from "react-router-dom";

export default function ExerUm() {
  return (
    <>
      <div className="maeExer1">
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
          <h1>Exercício 01 - Cupom de desconto</h1>
        </div>
        <div className="linhaYellow"></div>

        <div className="caixa2">
          <p>
            Implementar um programa em Javascript para calcular o valor final de
            uma compra a partir do valor da compra e do cupom de desconto. O
            cupom diz quantos reais terá de desconto.
          </p>
        </div>

        <div className="bloco">
          <div className="infoBloco">
            <h1>Informe o valor do pedido</h1>
            <input type="text" placeholder="0" />
            <h1>Informe o valor do cupom</h1>
            <input type="text" placeholder="0" />

            <div className="exerc">
              <a id="executar" href="">
                Executar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
