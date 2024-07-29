
import './sobre.scss';
import {Link} from 'react-router-dom';


export default function Sobre(){
    return (
        <>
            <div className="maeSobre">
            
            <div className="cab">
          <div className="cab1">
          <img src="https://media.discordapp.net/attachments/837420691666108437/1267458438410010654/0bf1e929fef0bf14e7f0bc09da2392a4.png?ex=66a8dc27&is=66a78aa7&hm=bbb510a72d96c75c0c36e841188b8e9a07e5b8fd3ec82a0b6f33ae03c2dd4c14&=&format=webp&quality=lossless&width=300&height=350" />
          <h1>React FreiS</h1>
          </div>

          <div className="cab2">
          <Link to='/'>inicio</Link>
          <Link to='/sobre'>Sobre</Link>
          </div>
          </div>


            <div className="titulo">
                <h1>Sobre</h1>
            </div>

            <div className="txt1">
                <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. </p>

                <p>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.
Estamos ansiosos para ver seu progresso e sucesso!</p>
            </div>

            <img id='foto' src="https://media.discordapp.net/attachments/837420691666108437/1267458438410010654/0bf1e929fef0bf14e7f0bc09da2392a4.png?ex=66a8dc27&is=66a78aa7&hm=bbb510a72d96c75c0c36e841188b8e9a07e5b8fd3ec82a0b6f33ae03c2dd4c14&=&format=webp&quality=lossless&width=300&height=350" />
            </div>

        </>
    )
}