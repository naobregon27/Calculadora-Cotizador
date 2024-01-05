const { Router } = require("express");
const router = Router();

const routerComuna = require("./routerComuna.js");

router.use("/comunas", routerComuna);

module.exports = router;
