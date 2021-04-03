const turnosCtrl = {};

const Turno = require("../models/Turno");

turnosCtrl.getTurnos = async (req, res) => {
  const turnos = await Turno.find();
  res.json(turnos);
};

turnosCtrl.createTurno = async (req, res) => {
  const {
    paciente,
    medico,
    motivoConsulta,
    fecha,
    hora,
    especialidad,
  } = req.body;
  const newTurno = new Turno({
    paciente,
    medico,
    motivoConsulta,
    fecha,
    hora,
    especialidad,
  });
  await newTurno.save();
  res.json({ message: "turno registrado" });
};

turnosCtrl.getTurno = async (req, res) => {
  const turno = await Turno.findById(req.params.id);
  res.json(turno);
};
turnosCtrl.updateTurno = async (req, res) => {
  const {
    paciente,
    medico,
    motivoConsulta,
    fecha,
    hora,
    especialidad,
  } = req.body;
  await Turno.findByIdAndUpdate(req.params.id, {
    paciente,
    medico,
    motivoConsulta,
    fecha,
    hora,
    especialidad,
  });
  res.json({ info: "turno updated" });
};

turnosCtrl.deleteTurno = async (req, res) => {
  await Turno.findByIdAndDelete(req.params.id);
  res.json({ message: "turnos eliminado" });
};

module.exports = turnosCtrl;
