const { Schema, model } = require("mongoose");

const turnoSchema = new Schema(
  {
    paciente: String,
    medico: String,
    motivoConsulta: String,
    especialidad: String,
    fecha: String,
    hora: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Turno", turnoSchema);
