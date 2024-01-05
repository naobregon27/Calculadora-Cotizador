const { Router } = require("express");
const router = Router();

const {
  postComuna,
  getAllComunas,
  getComunaById,
  updateComuna,
  deleteComuna,
} = require("../controller/controllerComuna.js");

router.post("/", async (req, res) => {
  const comuna = req.body;
  try {
    const newComuna = await postComuna(comuna);
    return res.status(200).json(newComuna);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const comunas = await getAllComunas();
    return res.status(200).json(comunas);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const comuna = await getComunaById(id);
    return res.status(200).json(comuna);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nComuna = req.body;
  try {
    const comunaUpdate = await updateComuna(id, nComuna);
    return res.status(200).json(comunaUpdate);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const comuna = await deleteComuna(id);
    return res.status(200).json(comuna);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
