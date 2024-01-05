import { useState, useEffect } from "react";
import ComunaCard from "./ComunasCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar"



const ComunasList = () => {
  const [comunas, setComunas] = useState([]);

  const loadComunas = async () => {
    //const response = await fetch("https://prueba-owrk.onrender.com/comunas"); //local
    const response = await fetch("http://localhost:3001/comunas"); //deployado
    const data = await response.json();
    data.sort((a, b) => a.comuna.localeCompare(b.comuna))
    setComunas(data);
  };

  useEffect(() => {
    loadComunas();
  }, []);

  return (
    <div className="conteiner p3">
      <Navbar></Navbar>
      <br />
      <br />
      <div>
        {comunas.map((x) => (
          <ComunaCard key={comunas.id} comuna={x} />
        ))}
      </div>
    </div>
  );
};

export default ComunasList;
