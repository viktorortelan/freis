import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/app";
import Sobre from "./pages/sobre";
import ExerUm from "./pages/exerUm";
import NotFound from "./pages/notFound";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/exerUm" element={<ExerUm />} />





            <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
