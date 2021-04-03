const { Router } = require("express");
const router = Router();

const {
  getTurnos,
  createTurno,
  getTurno,
  updateTurno,
  deleteTurno,
} = require("../controllers/turnos.controllers");

router.route("/").get(getTurnos).post(createTurno);

router.route("/:id").get(getTurno).put(updateTurno).delete(deleteTurno);

module.exports = router;
