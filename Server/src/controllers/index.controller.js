import config from "../config.js";
import fs from "fs";
import { v4 } from "uuid";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);

// Obtener la ruta del directorio actual
const __dirname = path.dirname(__filename);

// Usar __dirname como antes
const comunasPath = path.resolve(__dirname, '../../../cliente/src/Landing/Cotizador/comunas.json');

const json_comuna = fs.readFileSync(comunasPath, "utf-8");
let comuna = JSON.parse(json_comuna);

export const renderIndexPage = (req, res) => res.render("index", { comuna });

export const renderAboutPage = (req, res) => res.render("about", config);

export const renderNewEntryPage = (req, res) => res.render("new-entry");

export const createNewEntry = (req, res) => {
  const { Comuna, GeneraciónKwhKwpAño, CostoCombustibleMasPeaje, ValorVentaEnergía } = req.body;

  if (!Comuna || !GeneraciónKwhKwpAño || !CostoCombustibleMasPeaje || !ValorVentaEnergía) {
    res.status(400).send("You have to complete all the fields");
    return;
  }

  var newComuna = {
    id: v4(),
    Comuna,
    GeneraciónKwhKwpAño,
    CostoCombustibleMasPeaje,
    ValorVentaEnergía,
  };

  // add a new book to the array
  comuna.push(newComuna);

  // saving the array in a file
  const json_comuna = JSON.stringify(comuna);
  fs.writeFileSync(comunasPath , json_comuna, "utf-8");

  res.redirect("/");
};

export const deleteComuna = (req, res) => {
  console.log({ comuna });
  comuna = comuna.filter((comun) => comun.id != req.params.id);

  // saving data
  const json_comuna = JSON.stringify(comuna);
  fs.writeFileSync(comunasPath, json_comuna);
  res.redirect("/");
};


