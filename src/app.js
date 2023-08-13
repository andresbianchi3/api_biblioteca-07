const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");
require('dotenv').config();

const app = express();
app.use(express.json());

const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});

const librosRouter = require("./routes/libros");
app.use("/api/libros", autenticacion,  librosRouter);

// Coloca el errorHandler al final de la cadena de middlewares
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
