const { Router } = require("express");
const router = Router();

const {
  getMedicos,
  createMedico,
  getMedico,
  updateMedico,
  deleteMedico,
} = require("../controllers/medicos.controllers");

router.route("/").get(getMedicos).post(createMedico);

router.route("/:id").get(getMedico).put(updateMedico).delete(deleteMedico);

module.exports = router;
