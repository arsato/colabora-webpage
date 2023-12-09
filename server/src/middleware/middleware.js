const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (req, res, next) => {
  let auth = req.header("Authorization");
    let token = auth.split(" ")[1];
    let decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decoded) {
      res.status(401).send({ error: "Token inválido" });
    }
  next();
};

const requestTime = (req, res, next) => {
  console.log("\x1b[31m", Date().toString());
  console.log("Se ha realizado una consulta a la siguiente direccion:");
  console.log("%s\x1b[0m", req.originalUrl);
  next();
};

module.exports = {
  validateToken,
  requestTime,
};
