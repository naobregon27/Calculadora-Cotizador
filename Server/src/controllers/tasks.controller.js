import { pool } from "../db.js";

export const createComuna = async (req, res,) => {

  const { comuna,
    generacion,
    costocombustiblepeaje,
    valorventaenergia } = req.body;
console.log(req.body)
  try {

    const result = await pool.query('INSERT INTO comunas (comuna, generacion, costocombustiblepeaje , valorventaenergia) VALUES($1, $2, $3, $4)RETURNING *', [
      comuna,
      generacion,
      costocombustiblepeaje,
      valorventaenergia
    ])


    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }

};


export const getAllComunas = async (req, res, next) => {
  try {
    const allComunas = await pool.query("SELECT * FROM comunas");
    if (allComunas.rows.length === 0) {
      return res.status(404).json({ message: "No se encontraron comunas" });
    }
    res.json(allComunas.rows);
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const getComuna = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM comunas WHERE id = $1`, [id]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateComuna = async (req, res) => {

  const { id } = req.params;

  const { comuna,
         generacion,
         costocombustiblepeaje,
         valorventaenergia } = req.body;

  const result= await pool.query(`UPDATE comunas SET comuna = $1, generacion = $2, costocombustiblepeaje = $3, valorventaenergia = $4 WHERE id = $5 RETURNING *` , [comuna,
    generacion,
    costocombustiblepeaje,
    valorventaenergia,
    id]);

    if(result.rows.length === 0)
    return res.status(404).json({
  massage: "comuna no encontrada"});

    console.log(result)

    return res.json(result.rows[0])



};

export const deleteComuna = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM comunas WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ message: "comuna not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
