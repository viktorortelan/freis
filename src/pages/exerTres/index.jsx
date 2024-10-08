
import './index.scss';
import {Link} from 'react-router-dom';
import{useState} from "react"

export default function ExerTres() {

  const[valorp,setValorp] = useState(0)
  const[valorm,setValorm] = useState(0)
  const[valorg,setValorg] = useState(0)
  const[resp,setResp] = useState(0)

function calc(){
  let total = 0;
let precos = {
  PQ:13.50,
  MD: 15.0,
  GD: 17.50
}

if(valorp > 0) {
  total += precos.PQ * valorp
}
if(valorp > 0) {
  total += precos.MD * valorm
}
if(valorp > 0) {
  total += precos.GD * valorg
}

setResp(total)

}
    return (
        <div className="exercicio_tres">
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
        <h1>Exercício 03 - Valor total por quantidade</h1>
      </div>
      <div className="linhaCiano"></div>

      <div className="info2">
        <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
      </div>

      <div className="card">
        <div className="info">
          <div className="cardInfo">
            <p>Quantidade pequeno</p>
            <input type="text" value={valorp} onChange={event => setValorp(event.target.value)} />
          </div>

          <div className="cardInfo">
            <p>Quantidade medio</p>
            <input type="text" value = {valorm} onChange={event => setValorm(event.target.value)}/>
          </div>

          <div className="cardInfo">
            <p>Quantidade grande</p>
            <input type="text"  value = {valorg}onChange={event =>setValorg(event.target.value)}/>
          </div>
        </div>
          <button onClick={calc}>Executar </button>
      </div>
      <p>Resultado: O total é R${resp}</p>

      

        </div>
    )
}