const axios = require("axios");
const { Comunas } = require("./src/db.js");

const loadDB = async () => {
  try {
    // Consulta las filas existentes en la tabla "comuna"
    const result = await Comunas.findAll();

    // Si no hay filas, carga los datos desde la API y los inserta en la base de datos
    if (!result.length) {
      const urlApi = await axios.get("http://localhost:5000/comunas");
      const comunas = await urlApi.data.map((x) => {
        return {
          comuna: x.Comuna,
          generacion: x.GeneraciónKwhKwpAño,
          costocombustiblepeaje: x.CostoCombustibleMasPeaje,
          valorventaenergia: x.ValorVentaEnergía,
        };
      });

      // Inserta los datos en la tabla "comuna"
      for (let i = 0; i < comunas.length; i++) {
        await Comunas.findOrCreate({
          where: {
            comuna: comunas[i].comuna,
          },
          defaults: comunas[i],
        });
      }

      console.log("La Base De Datos ha sido actualizada");
    }
  } catch (error) {
    console.error("Error al actualizar la base de datos:", error);
  }
};

module.exports = loadDB;
