const { Schema, model } = require("mongoose");

const usuarioLog = new Schema({
  usuario: String,
});

module.exports = model("UsuarioLog", usuarioLog);
