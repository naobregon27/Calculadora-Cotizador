require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_RENDER } = process.env;

// //! este sequelize es para local...
// const sequelize = new Sequelize("comuna", "postgres", "Mateo123",
//   {
//     host: "localhost",
//     dialect: "postgres",
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//     ssl: true, 
//   });

//! este sequelize es para RENDERIZADO... DEPLOY DB en render.s.

const sequelize = new Sequelize("postgres://nahuel:XVN1SVNYbln0BwZLgo8BcSG5xV1W72xi@dpg-cma2huocmk4c739h7m70-a.oregon-postgres.render.com/calculadora_cotizad", {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true, // Deshabilitar la conexión SSL/TLS
  },
});

//cargamos los archivos en los modelos dinamicos
const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Comunas
} = sequelize.models;

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
