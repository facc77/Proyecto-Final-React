const mongoose = require("mongoose");

/* const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/baseDeDatos"; */

const URI =
  /*   "mongodb+srv://faccMongoDB:baseDeDatos@mern.2olip.mongodb.net/baseDeDatos?retryWrites=true&w=majority";
   */
  "mongodb+srv://faccMongoDB:baseDeDatos@mern.2olip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
