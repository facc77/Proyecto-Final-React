const { Router } = require("express");
const router = Router();

const {
  getPacientes,
  createPaciente,
  getPaciente,
  updatePaciente,
  deletePaciente,
} = require("../controllers/pacientes.controllers");

router.route("/").get(getPacientes).post(createPaciente);

router
  .route("/:id")
  .get(getPaciente)
  .put(updatePaciente)
  .delete(deletePaciente);

module.exports = router;
