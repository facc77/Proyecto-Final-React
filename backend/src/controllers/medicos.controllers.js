const medicosCtrl = {};

const Medico = require("../models/Medico");

medicosCtrl.getMedicos = async (req, res) => {
  const medicos = await Medico.find();
  res.json(medicos);
};

medicosCtrl.createMedico = async (req, res) => {
  const {
    usuario,
    contrasena,
    email,
    permiso,
    nombreCompleto,
    disciplina,
    sucursal,
    horario,
  } = req.body;
  const newMedico = new Medico({
    usuario,
    email,
    contrasena,
    permiso: "falso",
    nombreCompleto,
    disciplina,
    sucursal,
    horario,
  });
  await newMedico.save();
  res.json({ message: "medico registrado" });
};

medicosCtrl.getMedico = async (req, res) => {
  const medico = await Medico.findById(req.params.id);
  res.json(medico);
};
medicosCtrl.updateMedico = async (req, res) => {
  const {
    usuario,
    email,
    contrasena,
    permiso,
    nombreCompleto,
    disciplina,
    sucursal,
    horario,
  } = req.body;
  await Medico.findByIdAndUpdate(req.params.id, {
    usuario,
    email,
    contrasena,
    permiso,
    nombreCompleto,
    disciplina,
    sucursal,
    horario,
  });
  res.json({ info: "info updated" });
};

medicosCtrl.deleteMedico = async (req, res) => {
  await Medico.findByIdAndDelete(req.params.id);
  res.json({ message: "paciente eliminado" });
};

module.exports = medicosCtrl;
