import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar"

const ComunasForm = () => {
  //const [task, setTask] = useState

  const [comu, setComu] = useState({
    comuna: "",
    generacion: "",
    costocombustiblepeaje: "",
    valorventaenergia: ""
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  const loadTask = async (id) => {
    const res = await fetch("http://localhost:3001/comunas/" + id); //local
    // const res = await fetch("https://prueba-owrk.onrender.com/comunas/" + id); //deployado
    const data = await res.json();
    setComu({ comuna: data.comuna, Generacion: data.generacion, costocombustiblepeaje: data.costocombustiblepeaje, valorventaenergia: data.valorventaenergia });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/comunas/delete/${id}`, {//Local
      //await fetch(`https://prueba-owrk.onrender.com/comunas/delete/${id}`, {//deployado
        method: "DELETE",
      });
      navigate("/comuna");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (params.id) {
        const response = await fetch(
          "http://localhost:3001/comunas/" + params.id, //local
          //"https://prueba-owrk.onrender.com/comunas/" + params.id, //deployado
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comu),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:3001/comunas", { //local 
        //const response = await fetch("https://prueba-owrk.onrender.com/comunas", { //deploy
           method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comu),
        });
        await response.json();
      }

      setLoading(false);
      navigate("/comuna");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setComu({ ...comu, [e.target.name]: e.target.value });

  return (

    <div className="conteiner p3">
      <Navbar></Navbar>
      <div className="">

        <div className="col-md-4 mx-auto">
          <br />
          <br />
          <form onSubmit={handleSubmit} className="card bg-success bg-gradient text-light card-body">
            <h3 className="font-bold text-2xl my-3 text-white">
              {params.id ? "Actualizar Comuna" : "Crear Comuna"}

            </h3>
            <input
              type="text"
              name="comuna"
              placeholder="Escriba su Comuna"
              className="border border-gray-400 p-2 rounded-md block my-2 w-full"
              onChange={handleChange}
              value={comu.comuna}
              autoFocus
            />

            <input
              type="text"
              name="generacion"
              placeholder="Escribe su Generacion en Kwh kwp por año"
              className="border border-gray-400 p-2 rounded-md block my-2 w-full"
              onChange={handleChange}
              value={comu.generacion}
              autoFocus
            />
            <input
              type="text"
              name="costocombustiblepeaje"
              placeholder="Escribe su Costo de Combustible y peaj"
              className="border border-gray-400 p-2 rounded-md block my-2 w-full"
              onChange={handleChange}
              value={comu.costocombustiblepeaje}
              autoFocus
            />
            <input
              type="text"
              name="valorventaenergia"
              placeholder="Escribe el valor en venta de energia"
              className="border border-gray-400 p-2 rounded-md block my-2 w-full"
              onChange={handleChange}
              value={comu.valorventaenergia}
              autoFocus
            />


            <div className="flex justify-between">
              <button
                type="submit"
                disabled={!comu.comuna || !comu.generacion || !comu.costocombustiblepeaje || !comu.valorventaenergia}
                className="btn btn-primary"
              >
                {loading
                  ? // <CircularProgress color="inherit" size={25} />
                  loading
                  : "Save"}
              </button>

              {params.id && (
                <button
                className="btn btn-danger"
                  onClick={() => handleDelete(params.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComunasForm;
