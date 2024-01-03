import { useState, useEffect } from "react";
import ComunaCard from "./ComunasCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar"



const ComunasList = () => {
  const [comunas, setComunas] = useState([]);

  const loadComunas = async () => {
    const response = await fetch("http://localhost:4000/comunas");
    const data = await response.json();
    console.log(data);
    setComunas(data);
  };

  useEffect(() => {
    loadComunas();
  }, []);

  return (
    <div class="conteiner p3">
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
