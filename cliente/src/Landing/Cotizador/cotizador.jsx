import React, { useEffect, useState } from "react";
import comuna from "../../../../Server/src/comunas.json";
import "./cotizador.css";

const Formulario = () => {
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

  //---------------------------------------------------------------------------------------

  //!Valor historico

  var inputValor1 = parseFloat(input.consumo1);
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
    inputValor12;

  const GeneracionKwhKwpYear = comuna?.find(
    (x) => x.comunas?.toLowerCase() === comunas?.toLowerCase()
  )?.["Generaciónkwhkwpaño"];

  const valorVentaDeEnergia = comuna?.find(
    (x) => x.comunas?.toLowerCase() === comunas?.toLowerCase()
  )?.["Valorventaenergía"];

  //! valor del kit
  const kit = {
    tres: 4237810,
    cinco: 5537483,
    diez: 10500000,
  };
  let valorDelKit;
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

  let valorDelcombustible;
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
    (valorUsar / 2) * (1 / valorHistorico) +
    (valorUsar / 2) * valorVentaDeEnergia;
  let ahorroPorYear = [];

  const valorCotizacion = valorDelKit + valorDelcombustible;
  if (valorCotizacion > 0) {
    for (let i = 0; i <= 25; i++) {
      let iterar =
        ahorroPorYear.push(valorCotizacion - ahorro);
    }
    console.log(ahorroPorYear);
  }
  comuna.sort((a, b) => a.Comuna.localeCompare(b.Comuna));
  return (
    <div>
      <section className="m-4 border-2 border-slate-300 p-2 text-center">
        <h1 className="titulo">Cotizacion</h1>
        <div className="contenedor">
          <section className="grid grid-cols-2">
            <select value={comunas} onChange={handleComuna}>
              <option value="">Selecciones una comuna</option>
              {comuna.map((x) => {
                return (
                  <option value={x.Comuna} key={x.Comuna}>
                    {x.Comuna}
                  </option>
                );
              })}
            </select>

            <h1>nombre de la comuna: </h1>
            <h2 className="hola">
              {
                comuna?.find(
                  (x) => x.Comuna?.toLowerCase() === comunas?.toLowerCase()
                )?.Comuna
              }
            </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1>Generación kwh kwp año: </h1>
            <h2 className="hola">
              {
                comuna?.find(
                  (x) => x.Comuna?.toLowerCase() === comunas?.toLowerCase()
                )?.["GeneraciónKwhKwpAño"]
              }
            </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1>Costo combustible mas peaje: </h1>
            <h2 className="hola">
              {
                comuna?.find(
                  (x) => x.Comuna?.toLowerCase() === comunas?.toLowerCase()
                )?.["CostoCombustibleMasPeaje"]
              }
            </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1>Valor venta energía: </h1>
            <h2 className="hola">
              {
                comuna?.find(
                  (x) => x.Comuna?.toLowerCase() === comunas?.toLowerCase()
                )?.["ValorVentaEnergía"]
              }
            </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1>Valor Historio: </h1>
            <h2 className="hola">
              {Intl.NumberFormat("es-IN").format(valorHistorico)}
            </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1>Valor Kit: </h1>
            <h2 className="hola">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(valorDelKit)}
            </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1>Valor combustible: </h1>
            <h2 className="hola">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(valorDelcombustible)}
            </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1>Valo Cotizacion: </h1>
            <h2 className="hola">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(valorCotizacion)}
            </h2>
          </section>
        </div>
      </section>

      <form>
        <section className="m-6 p-4 border-2 border-slate-400">
          <h1 className="consumo">Consumo Mensual</h1>
          <section className="inputs">
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
          </section>
        </section>
      </form>
    </div>
  );
};

export default Formulario;
