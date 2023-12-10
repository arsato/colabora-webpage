const Sequelize = require("sequelize");
require("dotenv").config();

const getUserModel = require("./user");
const getBlogModel = require("./blog");
const getExtraInfoModel = require("./extra-info");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  }
);

const models = {
    User: getUserModel(sequelize, Sequelize),
    Blog: getBlogModel(sequelize, Sequelize),
    ExtraInfo: getExtraInfoModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { sequelize, models }