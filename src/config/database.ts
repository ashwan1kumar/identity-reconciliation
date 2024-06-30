// src/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config()
console.log(process.env.PORT)
const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "postgres",
  port: 5432,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

export default sequelize;

