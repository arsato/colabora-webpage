const path = require("path");
const multer = require("multer");
const express = require("express");
const routes = require("../routes/colabora.routes");
require("dotenv").config();
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());

  app.use(express.json());
  //Settings
  app.set("port", process.env.PORT || 3001);

  //Middlewares
  const storage = new multer.memoryStorage();
  app.use(
    multer({storage}).single("image")
  );

  //routes
  routes(app);

  return app;
};
