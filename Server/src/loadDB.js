import { pool } from './db.js'
import comuna from './comunas.json' assert { type: 'json' };

const loadDB = async () => {
  try {
    // Consulta las filas existentes en la tabla "comuna"
    const result = await pool.query('SELECT * FROM comunas');

    // Si no hay filas, carga los datos desde la API y los inserta en la base de datos
    if (result.rows.length === 0) {
      const comunas = comuna.map((x) => {
        return {
          comuna: x.Comuna,
          generacion: x.GeneraciónKwhKwpAño,
          costocombustiblepeaje: x.CostoCombustibleMasPeaje,
          valorventaenergia: x.ValorVentaEnergía
        };
      });

      // Inserta los datos en la tabla "comuna"
      for (let i = 0; i < comunas.length; i++) {
        const { comuna, generacion, costocombustiblepeaje, valorventaenergia } = comunas[i];
        const insertQuery = `INSERT INTO comunas ( comuna, generacion, costocombustiblepeaje, valorventaenergia ) VALUES ($1, $2, $3, $4)`;
        await pool.query(insertQuery, [comuna, generacion, costocombustiblepeaje, valorventaenergia]);
      }

      console.log("La Base De Datos ha sido actualizada");
    }
  } catch (error) {
    console.error("Error al actualizar la base de datos:", error);
  }
};

export default  loadDB;