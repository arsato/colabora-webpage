const express = require("express");
const config = require("./server/config")
const app = config(express());
const {sequelize} = require("./models");
const seedDatabase = require("./seed/colabora.seeds");

sequelize.sync({ force: true }).then(async () => {
  seedDatabase();
  app.listen(app.get("port"), () => {
    console.log('Server up in port', app.get('port'));
  });
});