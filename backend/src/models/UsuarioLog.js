const { Schema, model } = require("mongoose");

const usuarioLogSchema = new Schema({
  usuario: String,
});

module.exports = model("UsuarioLog", usuarioLogSchema);
