const express = require("express");
const cors = require("cors");
const app = express();

//settings

app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/pacientes", require("./routes/pacientes.js"));
app.use("/api/medicos", require("./routes/medicos.js"));
app.use("/api/turnos", require("./routes/turnos.js"));

module.exports = app;
