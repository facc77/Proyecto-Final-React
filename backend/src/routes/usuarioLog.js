const { Router } = require("express");
const router = Router();

const {
  getUsuarioLog,
  putUsuarioLog,
} = require("../controllers/usuarioLog.controllers");

router.route("/:id").get(getUsuarioLog).put(putUsuarioLog);

module.exports = router;
