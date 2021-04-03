const pacientesCtrl = {};

const Paciente = require("../models/Paciente");

pacientesCtrl.getPacientes = async (req, res) => {
  const pacientes = await Paciente.find();
  res.json(pacientes);
};

pacientesCtrl.createPaciente = async (req, res) => {
  const { usuario, contrasena, email, permiso } = req.body;
  const newPaciente = new Paciente({
    usuario: usuario,
    email: email,
    contrasena: contrasena,
    permiso: "falso",
  });
  await newPaciente.save();
  res.json({ message: "paciente registrado" });
};

pacientesCtrl.getPaciente = async (req, res) => {
  const paciente = await Paciente.findById(req.params.id);
  res.json(paciente);
};
pacientesCtrl.updatePaciente = async (req, res) => {
  const { usuario, email, contrasena, permiso } = req.body;
  await Paciente.findByIdAndUpdate(req.params.id, {
    usuario,
    email,
    contrasena,
    permiso,
  });
  res.json({ info: "info updated" });
};

pacientesCtrl.deletePaciente = async (req, res) => {
  await Paciente.findByIdAndDelete(req.params.id);
  res.json({ message: "paciente eliminado" });
};

module.exports = pacientesCtrl;
