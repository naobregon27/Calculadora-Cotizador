import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Cotizador from "./Landing/Cotizador/cotizador";
import Login from "./Landing/login/login";
import ComunasList from "./components/ComunasList";
import ComunasForm from "./components/ComunasForm";
//import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Cotizador />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route index path="/comuna" element={<ComunasList />}></Route>
        <Route path="/comuna/new" element={<ComunasForm />} />
        <Route path="/comunas/:id/edit" element={<ComunasForm />} />
      </Routes>
    </div>
  );
}

export default App;
