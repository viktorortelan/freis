import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cabecalho from './components/cabe';
import App from './pages/app';
import Sobre from './pages/sobre';
import ExerUm from './pages/exerUm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho/>
   <ExerUm/>
  </React.StrictMode>
);

