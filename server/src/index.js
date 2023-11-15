const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./models");
const cors = require("cors");
const routes = require("./routes/colabora.routes");
const seedDatabase = require("./seed/colabora.seeds");

app.use(cors());
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 3001;

app.use("/", (req, res) => {
  res.json({ message: "Welcome to colabora backend." });
});

db.sequelize.sync({ force: true }).then(async () => {
  seedDatabase();
  app.listen(PORT, () => {
    console.log(`Server up in port ${PORT}`);
  });
});