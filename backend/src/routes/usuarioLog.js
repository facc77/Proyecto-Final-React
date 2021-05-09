const { Router } = require("express");
const router = Router();

const {
  getUsuarioLog,
  postUsuarioLog,
} = require("../controllers/usuarioLog.controllers");

router.route("/").get(getUsuarioLog).post(postUsuarioLog);

module.exports = router;
