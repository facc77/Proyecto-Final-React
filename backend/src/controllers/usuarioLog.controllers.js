const UsuarioLogCtrl = {};

const UsuarioLog = require("../models/usuarioLog");

UsuarioLogCtrl.getUsuarioLog = async (req, res) => {
  const usuarioLog = await UsuarioLog.find();
  res.json(usuarioLog);
};

UsuarioLogCtrl.postUsuarioLog = async (req, res) => {
  const { usuario } = req.body;
  const newUsuarioLog = new UsuarioLog({
    usuario: usuario,
  });
  await UsuarioLog.save();
  res.json({ message: "usuario logueado" });
};

module.exports = UsuarioLogCtrl;
