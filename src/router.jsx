import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/app";
import Sobre from "./pages/sobre";
import ExerUm from "./pages/exerUm";
import NotFound from "./pages/notFound";
import ExerDois from "./pages/exerDois";
import ExerTres from "./pages/exerTres";
import Evento from "./pages/eventos";
import Estado from "./pages/estado";
import LivroExer from "./pages/livroEXer";
import ExerSete from "./pages/exersete";
import ExerOito from "./pages/exeroito";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/exerUm" element={<ExerUm />} />
            <Route path="/exerDois" element={<ExerDois />} />
            <Route path="/exerTres" element={<ExerTres />} />
            <Route path="/eventos" element={<Evento/>}/>
            <Route path="/estado" element={<Estado/>}/>
            <Route path="/livroEXer" element={<LivroExer/>}/>
            <Route path="/exersete" element={<ExerSete/>}/>
            <Route path="/exeroito" element={<ExerOito/>}/>



            <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
