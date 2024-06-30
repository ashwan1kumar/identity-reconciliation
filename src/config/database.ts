// src/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config()
console.log(process.env.PORT)
const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "postgres",
  host: "postgresql://identity_xbn2_user:Jzpq227Vd2LkgWaNHzcUBhRKkNepLZGT@dpg-cq0jearv2p9s73cb84a0-a.oregon-postgres.render.com/identity_xbn2",
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

