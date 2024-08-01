import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/pagina_inicial";
import Contato from "./pages/pagina_contato";
import NaoEncontrado from "./pages/pagina_naoEncontrado";
import Eventos from "./pages/pagina_evento";
import VarEstado from "./pages/pagina_estado";

export default function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/estado" element={<VarEstado />} />

        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

// pesquisar identação
