import config from "../config.js";
import fs from "fs";
import { v4 } from "uuid";

const json_comuna = fs.readFileSync("src/comunas.json", "utf-8");
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
  fs.writeFileSync("src/comunas.json", json_comuna, "utf-8");

  res.redirect("/");
};

export const deleteComuna = (req, res) => {
  console.log({ comuna });
  comuna = comuna.filter((comun) => comun.id != req.params.id);

  // saving data
  const json_comuna = JSON.stringify(comuna);
  fs.writeFileSync("src/comunas.json", json_comuna);
  res.redirect("/");
};


