import "./App.css";
import { Routes, Route, useLocation, } from "react-router-dom"
import Cotizador from "./Landing/Cotizador/cotizador";
import Login from "./Landing/login/login";

function App() {

   return (
      <div>
        <Routes>
          <Route exact path="/" element={<Cotizador />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>    
      </div>
   )
    
}

export default App;
