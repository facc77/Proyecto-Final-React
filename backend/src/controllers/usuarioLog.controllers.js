const usuarioLogCtrl = {};

const UsuarioLog = require("../models/UsuarioLog");

usuarioLogCtrl.getUsuarioLog = async (req, res) => {
  const usuarioLog = await UsuarioLog.findById(req.params.id);
  res.json(usuarioLog);
};
usuarioLogCtrl.putUsuarioLog = async (req, res) => {
  const { usuario } = req.body;
  await UsuarioLog.findByIdAndUpdate(req.params.id, {
    usuario,
  });
  res.json({ info: "info updated" });
};

module.exports = usuarioLogCtrl;
