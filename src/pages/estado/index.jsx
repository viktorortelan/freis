
import './index.scss';
import {Link} from "react-router-dom"
import { useState } from "react";


export default function Estado() {    
const [contador, setContador] = useState(0);
function aumentar(){
    setContador(contador + 1);
}
function diminuir(){
    setContador(contador - 1);
}
const [secao1, setSecao1] = useState('oie');
function alteraTitulo(event) {
    let novoValor = event.target.value;
    setSecao1(novoValor);
}

const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [res, setRes] = useState(0);
function somar() {
    let soma = Number(num1) + Number(num2);
    setRes(soma);
}

const [qtdIng, setQtdIng] = useState(0);
const [meioIng, setMeioing] = useState(0);
const [cupom, setCupom] = useState('');
const [totalIng, setTotalIng] = useState('');

function calcularIngresso(){
    let tot = 0;
    if(meioIng === true) {
        tot = qtdIng * 15.00;
    } else{
        tot = qtdIng * 30.00
    }

    if(cupom === 'QUERO50') {
        let desc = (tot * 50) / 100;
        tot = tot - desc;
    }

    setTotalIng(tot)
}

const [novaMeta, setNovaMeta] = useState('');
const [listaMeta, setListaMeta] = useState([]);
function AddMeta() {
    if(novaMeta != '') {

        setListaMeta([...listaMeta, novaMeta])
    }
}



    return(
        <div className="pagina_estado">
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

        <div className="metas">
            <h1>Metas para os proximos 5 anos </h1>

            <div className='infos'>
                <input type="text" placeholder='digite suas metas' value={novaMeta} onChange={e => setNovaMeta(e.target.value)}/>
                <button onClick={AddMeta}>Adicionar</button>
            </div>
            <ul>
                {listaMeta.map(item =>
                    <li>{item}</li>
                ) }
            </ul>
        </div>


        <div className="secao_ingresso">
            <h1>venda de ingresso</h1>
            <div className="entrada">
                <div>
                    <label>quantidade:</label>
                    <input type="text" value={qtdIng} onChange={e => setQtdIng(e.target.value)} />
                </div>
                <div>
                    <label>meia entrada:</label>
                    <input type="checkbox" checked={meioIng} onChange={e => setMeioing(e.target.checked)} />
                </div>
                <div>
                    <label>cupom:</label>
                    <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
                </div>
                <hr />
                <div>
                    o total é R$ {totalIng}
                </div>
            </div>
            <button onClick={calcularIngresso}>Calcular</button>
        </div>


        <div className="secao">
            <h1>calculadora</h1>
            <div className='calc'>
                <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
                <div>+</div>
                <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                <div>=</div>
                <div className="resp" >{res}</div>
            </div>
            <button className='soma' onClick={somar}>Somar</button>
        </div>

        <div className="secao">
            <h1>contador:</h1>

            <div className="cont">
                <button onClick={aumentar}>+</button>
                {contador}
                <button onClick={diminuir}>-</button>
            </div>
        </div>

        <div className="secao">
            <h1>{secao1}</h1>
            <input type="text" value={secao1} onChange={alteraTitulo} />
        </div>


        </div>
    )
} 