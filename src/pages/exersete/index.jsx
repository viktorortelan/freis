import "./index.scss";
import { Link } from "react-router-dom";
import{useState} from "react"



export default function ExerSete() {
const [Numero, setNumero] = useState(0);
const [ tabuda, setTabuada] = useState([]);
function calculo(){
    let tabuadas = []
    for(let i = 0; i <= 10; i++){
        let conta = Numero * i;
        tabuadas[i] = `${Numero} * ${i} = ${conta}`
    } 

    setTabuada(tabuadas);

}


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
        <h1>Exercício 07 - tabuada</h1>
      </div>
      <div className="linhaGreen"></div>

      <div className="info2">
        <h1>
        Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.
        </h1>
      </div>

      <div className="cartao">
        <h1>Tabuada do</h1>
        <input type="text" placeholder="informe o numero" value={Numero} onChange={e => setNumero(e.target.value)} />
        <button onClick={calculo}>Executar</button>
      </div>
      <div className="resp">
        {tabuda.map(item =>
                    <h3>{item}</h3>
                )}
      </div>
    </div>
  );
}








