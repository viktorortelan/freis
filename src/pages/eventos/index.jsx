
import './index.scss';
import {Link} from "react-router-dom";

export default function Evento(){
    return(
        <div className="Pagina_evento">
            <header className="cabecalho">
                <h1>Eventos</h1>
            </header>

            <section className='secao'>
                <div className="info">
                <h1>seja bem vindo </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aut modi accusantium omnis atque consectetur facere alias explicabo, debitis odit nemo ex nostrum dolor repudiandae, eligendi voluptatem laudantium rem unde.</p>

                <input type="text" placeholder='digite seu nome' />
                <select>
                    <option >selecione</option>
                    <option >item A</option>
                    <option >item B</option>
                </select>

            <div className='um'>          
                <input type="checkbox"  /> opção 1
                <input type="checkbox"  /> opção 2
            </div>  
            <div className='dois'>
                <div><input type="radio" name='gpo' /> opção 1</div>
                <div><input type="radio" name='gpo' /> opção 2</div>
            </div>

            <button>clique aqui</button>
                </div>
            </section>
        </div>
    )
} 