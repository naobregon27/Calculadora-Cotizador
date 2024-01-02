// import comuna from "../../../../Server/src/comunas.json";

import React, { useEffect, useState } from "react";
//import comuna from "../Cotizador/comunas.json"

import "./cotizador.css"


import { Link } from 'react-router-dom'
import Login from "../login/login";




const Formulario = () => {

const [comuna, setComuna] = useState([])

useEffect(()=>{

  async function getAllComunas() {
    try {
      const res = await fetch("http://localhost:4000/comunas");
      const comunas = await res.json();
      setComuna(comunas);
    } catch (error) {
      console.log(error);
    }
      
  }

  getAllComunas()

},[])

console.log(comuna)


  const [comunas, setComunas] = useState("");
  
  

  const [input, setInput] = useState({
    consumo1: "",
    consumo2: "",
    consumo3: "",
    consumo4: "",
    consumo5: "",
    consumo6: "",
    consumo7: "",
    consumo8: "",
    consumo9: "",
    consumo10: "",
    consumo11: "",
    consumo12: "",
    costeDeEnergia: "",
  });

  const handleComuna = (e) => {
    setComunas(e.target.value);
  };

  useEffect(() => {
    setInput({
      consumo1: "",
      consumo2: "",
      consumo3: "",
      consumo4: "",
      consumo5: "",
      consumo6: "",
      consumo7: "",
      consumo8: "",
      consumo9: "",
      consumo10: "",
      consumo11: "",
      consumo12: "",
      costeDeEnergia: "",
    });
  }, [comunas]);

  //!handle consumo 12 meses
  const handleConsumo1 = (e) => {
    setInput({
      ...input,
      consumo1: e.target.value,
    });
  };

  const handleConsumo2 = (e) => {
    setInput({
      ...input,
      consumo2: e.target.value,
    });
  };

  const handleConsumo3 = (e) => {
    setInput({
      ...input,
      consumo3: e.target.value,
    });
  };

  const handleConsumo4 = (e) => {
    setInput({
      ...input,
      consumo4: e.target.value,
    });
  };

  const handleConsumo5 = (e) => {
    setInput({
      ...input,
      consumo5: e.target.value,
    });
  };

  const handleConsumo6 = (e) => {
    setInput({
      ...input,
      consumo6: e.target.value,
    });
  };

  const handleConsumo7 = (e) => {
    setInput({
      ...input,
      consumo7: e.target.value,
    });
  };

  const handleConsumo8 = (e) => {
    setInput({
      ...input,
      consumo8: e.target.value,
    });
  };

  const handleConsumo9 = (e) => {
    setInput({
      ...input,
      consumo9: e.target.value,
    });
  };

  const handleConsumo10 = (e) => {
    setInput({
      ...input,
      consumo10: e.target.value,
    });
  };

  const handleConsumo11 = (e) => {
    setInput({
      ...input,
      consumo11: e.target.value,
    });
  };

  const handleConsumo12 = (e) => {
    setInput({
      ...input,
      consumo12: e.target.value,
    });
  };
  const handleCosteDeEnergia = (e) => {
    setInput({
      ...input,
      costeDeEnergia: e.target.value,
    });
  };

  //---------------------------------------------------------------------------------------

  //!Valor historico

  var inputValor1 = parseInt(input.consumo1);
  var inputValor2 = parseFloat(input.consumo2);
  var inputValor3 = parseFloat(input.consumo3);
  var inputValor4 = parseFloat(input.consumo4);
  var inputValor5 = parseFloat(input.consumo5);
  var inputValor6 = parseFloat(input.consumo6);
  var inputValor7 = parseFloat(input.consumo7);
  var inputValor8 = parseFloat(input.consumo8);
  var inputValor9 = parseFloat(input.consumo9);
  var inputValor10 = parseFloat(input.consumo10);
  var inputValor11 = parseFloat(input.consumo11);
  var inputValor12 = parseFloat(input.consumo12);

  const valorHistorico =
    inputValor1 +
    inputValor2 +
    inputValor3 +
    inputValor4 +
    inputValor5 +
    inputValor6 +
    inputValor7 +
    inputValor8 +
    inputValor9 +
    inputValor10 +
    inputValor11 +
    inputValor12 || 0;

  const GeneracionKwhKwpYear = comuna?.find(
    (x) => x.comuna?.toLowerCase() === comunas?.toLowerCase()
  )?.generacion || 0;

  const valorVentaDeEnergia = comuna?.find(
    (y) => y.comuna?.toLowerCase() === comunas?.toLowerCase()
  )?.valorventaenergia || 0;

  //! valor del kit
  const kit = {
    tres: 4237810,
    cinco: 5537483,
    diez: 10500000,
  };
  let valorDelKit = 0;
  if (valorHistorico) {
    if (valorHistorico < 3 * GeneracionKwhKwpYear) {
      valorDelKit = kit.tres;
    }
    if (
      valorHistorico > 3 * GeneracionKwhKwpYear &&
      valorHistorico < 5 * GeneracionKwhKwpYear
    ) {
      valorDelKit = kit.cinco;
    }
    if (
      valorHistorico > 5 * GeneracionKwhKwpYear &&
      valorHistorico < 10 * GeneracionKwhKwpYear
    ) {
      valorDelKit = kit.diez;
    }
  }
  //! valor combustible
  const combustible = {
    mil: 1036000,
    dosmil: 1036000,
    tresmil: 1450400,
  };

  let valorDelcombustible = 0;
  if (valorHistorico) {
    if (valorHistorico < 3 * GeneracionKwhKwpYear) {
      valorDelcombustible = combustible.mil;
    }
    if (
      valorHistorico > 3 * GeneracionKwhKwpYear &&
      valorHistorico < 5 * GeneracionKwhKwpYear
    ) {
      valorDelcombustible = combustible.dosmil;
    }
    if (
      valorHistorico > 5 * GeneracionKwhKwpYear &&
      valorHistorico < 10 * GeneracionKwhKwpYear
    ) {
      valorDelcombustible = combustible.tresmil;
    }
  }
  //! para el ahorro
  let valorUsar = [];
  const kw = {
    uno: 5412,
    dos: 5412,
    tres: 18040,
  };
  if (valorHistorico) {
    if (valorHistorico < 3 * GeneracionKwhKwpYear) {
      valorUsar = kw.uno;
    }
    if (
      valorHistorico > 3 * GeneracionKwhKwpYear &&
      valorHistorico < 5 * GeneracionKwhKwpYear
    ) {
      valorUsar = kw.dos;
    }
    if (
      valorHistorico > 5 * GeneracionKwhKwpYear &&
      valorHistorico < 10 * GeneracionKwhKwpYear
    ) {
      valorUsar = kw.tres;
    }
  }

  const ahorro =
    ((valorUsar / 2) * (parseFloat(input.costeDeEnergia) / valorHistorico) +
      valorUsar / 2) *
    parseFloat(valorVentaDeEnergia);


  let ahorroPorYear = [];

  const valorCotizacion = valorDelKit + valorDelcombustible;
  let itera = valorCotizacion;
  if (valorCotizacion) {
    for (let i = 0; i <= 24; i++) {
      if (i >= 1 && i <= 24) {
        itera = itera - ahorro;
      }
      ahorroPorYear.push(itera.toFixed(2));
    }
    ;
  }
  comuna.sort((a, b) => a.comuna.localeCompare(b.Comuna));

  const precios = {
    tres: { paneles: 6, inversor: "Inversor OnGrid 3kw", canalizacion: 20 },
    cinco: { paneles: 10, inversor: "Inversor OnGrid 5kw", canalizacion: 20 },
    diez: { paneles: 20, inversor: "Inversor OnGrid 10kw", canalizacion: 40 },
  };
  let incluye;
  if (valorHistorico) {
    if (valorHistorico < 3 * GeneracionKwhKwpYear) {
      incluye = precios.tres;
    }
    if (
      valorHistorico > 3 * GeneracionKwhKwpYear &&
      valorHistorico < 5 * GeneracionKwhKwpYear
    ) {
      incluye = precios.cinco;
    }
    if (
      valorHistorico > 5 * GeneracionKwhKwpYear &&
      valorHistorico < 10 * GeneracionKwhKwpYear
    ) {
      incluye = precios.diez;
    }
  }

  const [valor, setValor] = useState('');

  const cambiarValor = (e) => {
    let valor = e.target.value;
    valor = parseFloat(valor);

    if (isNaN(valor)) {
      valor = ''; // Reemplaza NaN con una cadena vacía
    }

    setValor(valor);
  };

  


  return (
    <div class="conteiner p-4">
      <div className="fondo">
             
      <a class="btn btn-success" href="https://ochoaim.cl/"><buttom className= "Boton">Web principal</buttom></a>
        <h1 className="titulo">Cotizador</h1>
      </div>
      <br />
      <br />
      <div>
        <p className="parrafo">
           Seleccione su comuna eh ingrese el valor de su consumo mensual de los ultimos 12 en kWh luego ingrese el costo de energia. Tenga en cuenta que este se encuentra en su factura de consumo de luz, ya que esto generara un serie de calculos en donde, visualizara su valor de cotizacion continuado de una tabla en donde vera el ahorro energetico.

        </p>
      </div>
      <br />
      
      

      <div class="col-md-4 mx-auto">

        <form class="card bg-success bg-gradient text-light card-body" >
          <h3>Comuna</h3>

          <select value={comunas} onChange={handleComuna}>

            <option value="">Selecciones una comuna</option>
            {comuna?.map((x) => {
              return (
                <option value={x.comuna} key={x.comuna}>
                  {x.comuna}
                </option>
              );
            })}
          </select>
          <div class="mb-3">
            <h3 className="consumo">Consumo Mensuales</h3>

            <input
              type="text"
              name="consumo"
              value={input.consumo1}
              onChange={handleConsumo1}
              className="col"
              placeholder="Enero"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo2}
              onChange={handleConsumo2}
              className="col"
              placeholder="Febrero"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo3}
              onChange={handleConsumo3}
              className="col"
              placeholder="Marzo"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo4}
              onChange={handleConsumo4}
              className="col"
              placeholder="Abril"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo5}
              onChange={handleConsumo5}
              className="col"
              placeholder="Mayo"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo6}
              onChange={handleConsumo6}
              className="col"
              placeholder="Junio"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo7}
              onChange={handleConsumo7}
              className="col"
              placeholder="Julio"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo8}
              onChange={handleConsumo8}
              className="col"
              placeholder="Agosto"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo9}
              onChange={handleConsumo9}
              className="col"
              placeholder="Septiembre"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo10}
              onChange={handleConsumo10}
              className="col"
              placeholder="Octubre"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo11}
              onChange={handleConsumo11}
              className="col"
              placeholder="Noviembre"
            />
            <input
              type="text"
              name="consumo"
              value={input.consumo12}
              onChange={handleConsumo12}
              className="col"
              placeholder="Diciembre"
            />
          </div>




          <h3>Coste De Energia</h3>
          <input
            type="text"
            name="consumo"
            value={input.costeDeEnergia}
            onChange={handleCosteDeEnergia}
            className="col"
            placeholder="Coste De Energia"
          />

        </form>
        <br />
        <br />
      </div>


      <div class="row">



        <h4 class="col-sm-4">Nombre de la comuna: </h4>
        <h4 class="col-sm-8">
          {
            comuna?.find(
              (x) => x.comuna?.toLowerCase() === comunas?.toLowerCase()
            )?.comuna
          }
        </h4>


        <h4 class="col-sm-4">Generación kwh kwp año: </h4>
        <h4 class="col-sm-8">
          {
            comuna?.find(
              (x) => x.comuna?.toLowerCase() === comunas?.toLowerCase()
            )?.generacion
          }
        </h4>


        <h4 class="col-sm-4">Costo de combustible mas peaje: </h4>
        <h4 class="col-sm-8">
          {
            comuna?.find(
              (x) => x.comuna?.toLowerCase() === comunas?.toLowerCase()
            )?.costocombustiblepeaje
          }{valor}
        </h4>


        <h4 class="col-sm-4">Valor de venta energía: </h4>
        <h4 class="col-sm-8">
          {
            comuna?.find(
              (x) => x.comuna?.toLowerCase() === comunas?.toLowerCase()
            )?.valorventaenergia 
          }
        </h4>


        <h4 class="col-sm-4">Valor Historico: </h4>
        <h4 class="col-sm-8">
          {Intl.NumberFormat().format(valorHistorico)}
        </h4>


        <h4 class="col-sm-4">Valor Kit: </h4>
        <h4 class="col-sm-8">
          {Intl.NumberFormat().format(valorDelKit)}
        </h4>


        <h4 class="col-sm-4">Valor de combustible: </h4>
        <h4 class="col-sm-8">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(valorDelcombustible)}
        </h4>


        <h4 class="col-sm-4">Valor de Cotizacion: </h4>
        <h4 class="col-sm-8">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(valorCotizacion)}
        </h4>


      </div>

      <br />



      {ahorroPorYear?.map((x, y) => {
        return (
          <table class="table table-success  table-striped" key={y + 1}>
            <thead>
              <tr>
                <th scope="col"><h5>Años</h5></th>
                <th scope="col"><h5>Inversion</h5></th>
                <th scope="col"><h5>Ahorro</h5></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">{y + 1}</td>
                <td>{x}</td>
                <td>{ahorro}</td>
              </tr>
            </tbody>
          </table>
        )
      })}


      {
        valorHistorico > 0 && (

          <section>
            <h2>La solución fotovoltaica incluye : </h2>
            <ul>
              <li>{incluye?.paneles} paneles solares</li>
              <li>{incluye?.inversor}</li>
              <li>{incluye?.canalizacion} metros de canalizacion</li>
              <li>Instalación coplanar/ajustable en techo</li>
              <li>Getión con la distribuidora </li>
              <li>Cambio de medidor</li>
            </ul>
          </section>
        )
      }





    </div >
  );
};

export default Formulario;
