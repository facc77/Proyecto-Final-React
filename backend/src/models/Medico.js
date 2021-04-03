const { Schema, model } = require("mongoose");

const medicoSchema = new Schema(
  {
    usuario: String,
    contrasena: String,
    email: String,
    nombreCompleto: String,
    disciplina: String,
    permiso: String,
    horario: String,
    sucursal: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Medico", medicoSchema);
