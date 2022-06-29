const Sequelize = require("sequelize");

const db = new Sequelize("codegig", "postgres", "shadow@15", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
