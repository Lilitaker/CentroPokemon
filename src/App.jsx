import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import ContextoFormularioProvider from "./context/ContextoFormulario";

function App() {
  return (
    <div className="App">
      <ContextoFormularioProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </ContextoFormularioProvider>
    </div>
  );
}

export default App;
