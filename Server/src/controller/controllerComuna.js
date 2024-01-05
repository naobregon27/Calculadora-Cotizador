const { Comunas } = require("../db.js");

const postComuna = async (comuna) => {
  try {
    const newComuna = await Comunas.findOrCreate({
      where: { comuna: comuna.comuna },
      defaults: {
        generacion: comuna.generacion,
        costocombustiblepeaje: comuna.costocombustiblepeaje,
        valorventaenergia: comuna.valorventaenergia,
      },
    });
    return newComuna;
  } catch (error) {
    throw new Error("Lo siento no fue posible crear la comuna.");
  }
};

const getAllComunas = async () => {
  try {
    const comunas = await Comunas.findAll();
    return comunas;
  } catch (error) {
    throw new Error("Lo sentimos no hay registros para mostrar.");
  }
};

const getComunaById = async (id) => {
  try {
    const comuna = await Comunas.findByPk(id);
    return comuna;
  } catch (error) {
    throw new Error(`No existe o no se encontro el registro con id: ${id}`);
  }
};

const updateComuna = async (id, nComuna) => {
  try {
    const editComuna = await Comunas.findByPk(id);
    if (!editComuna) {
      return { error: "no se encontro la comuna." };
    }
    await Comunas.update(
      {
        comuna: nComuna.comuna,
        generacion: nComuna.generacion,
        costocombustiblepeaje: nComuna.costocombustiblepeaje,
        valorventaenergia: nComuna.valorventaenergia,
      },
      { where: { id } }
    );
    const updateComuna = await Comunas.findByPk(id);
    return updateComuna;
  } catch (error) {
    throw new Error("Error no pudimos actualizar la comuna.");
  }
};

const deleteComuna = async (id) => {
  try {
    const deleteComuna = await Comunas.findByPk(id);
    if (!deleteComuna) {
      return { error: "Lo sentimos no encontramos la comuna." };
    }
    await deleteComuna.destroy();
    return { mensaje: "La Comuna fue eliminada correctamente" };
  } catch (error) {
    throw Error("Error no se puedo eliminar la comuna.");
  }
};

module.exports = {
  postComuna,
  getAllComunas,
  getComunaById,
  updateComuna,
  deleteComuna,
};
