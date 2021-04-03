const { Schema, model } = require("mongoose");

const pacienteSchema = new Schema(
  {
    usuario: String,
    contrasena: String,
    email: String,
    permiso: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Paciente", pacienteSchema);
