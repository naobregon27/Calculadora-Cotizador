const express = require("express");
require("dotenv").config();
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

server.use(
  cors({
    
    credentials: true, // Habilita el envío de cookies y encabezados de autenticación
  })
);

server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());
server.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

server.use(router);

module.exports = server;
