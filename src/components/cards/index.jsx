import './index.scss';
import { Link } from 'react-router-dom';

export default function Card({titulo, cor, url, destino }) {

    return (
        <div className="card">
              <div className={cor}></div>
              <h1>{titulo}</h1>
              <Link to={url}>{destino}</Link>
        </div>
    )
}