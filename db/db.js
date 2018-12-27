require("dotenv").config();

const db = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

module.exports = db;
