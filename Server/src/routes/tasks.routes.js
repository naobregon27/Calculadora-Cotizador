import { Router } from "express";
import {
  createComuna,
  deleteComuna,
  getAllComunas,
  getComuna,
  updateComuna,
} from "../controllers/tasks.controller.js";

const router = Router();

// create a task
router.post("/comunas", createComuna);

router.get("/comunas", getAllComunas);

router.get("/comunas/:id", getComuna);

router.put("/comunas/:id", updateComuna);

router.delete("/comunas/:id", deleteComuna);

export default router;
