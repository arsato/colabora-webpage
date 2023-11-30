const Sequelize = require("sequelize");
const getUserModel = require("./user");
const getBlogModel = require("./blog");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    }
);

const models = {
    User: getUserModel(sequelize, Sequelize),
    Blog: getBlogModel(sequelize, Sequelize),
};

module.exports = { sequelize, models}