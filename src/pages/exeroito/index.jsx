
import './index.scss';
import { Link } from 'react-router-dom';
import{useState} from "react"

export default function ExerOito() {

    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resposta, setResposta] = useState('');
    const [mostra, setMostra] = useState([])
    


        function situacao() {
            let cont = (altura **2) / peso;

            if (cont > 40) {
        
            
                setResposta(`Vc tem obesidade de grau 3`)
                
            }
        
            else if(cont > 35 && cont <= 39.9){
        
                
                setResposta(`Vc tem obesidade de grau 2`)
                
            }
        
            else if(cont > 30 && cont <= 34.9){
        
                
                setResposta(`Vc tem obesidade de grau 1`)
            }
        
            else if(cont > 25 && cont <= 29.9){
        
                
                setResposta(`Vc tem Sobrepeso`)
        
            }
        
            else if(cont > 18.5 && cont <= 24.9){
        
                
                setResposta(`Vc tem um peso normal`)
        
            }
        
        
            else if(cont <= 18.5){
        
             
                setResposta(`Vc esta abaixo do peso`)
        
            }
        
        }

        function mostrando() {
            situacao()
            let CartaoResposta = {
                altura: altura, 
                peso: peso,
                imc: resposta
            }

            setMostra([...mostra, CartaoResposta]);

        }

    return (
        <div className="exerOito">

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
        <h1>Exercício 08 - IMC</h1>
      </div>
      <div className="linhaGreen"></div>

      <div className="info2">
        <h1>
        Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação
        </h1>
      </div>

      <div className="secao2">

        <div className="cartao">


            <div className="reto">
            <div className="info">
                <h1>Altura</h1>
                <input type="text" placeholder='coloque sua altura aqui' value={altura} onChange={e => setAltura(e.target.value)}/>
            </div>

            <div className="info">
                <h1>Peso</h1>
                <input type="text" placeholder='coloque seu peso aqui' value={peso} onChange={e => setPeso(e.target.value)} />
            </div>
            </div>

            <button onClick={mostrando}>Calcular</button>

        </div>


        <div className="resposta">

            {mostra.map(item =>
                <div className="resp">
                    <h1>altura: {item.altura}| peso: {item.peso}  | situação: {item.imc} </h1>
                    <img src="/assets/images/lixin.png" alt="lixo" />
                </div>
            )}
            
        </div>


      </div>
        
        </div>
    )
}