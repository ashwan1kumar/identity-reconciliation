// src/config/database.js
import {Sequelize} from 'sequelize-typescript';
import { UserData } from '../models/userData.model';
require('dotenv').config()
console.log(process.env.PORT)
const sequelize = new Sequelize({
  dialect: "postgres",
  port: 5432,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
sequelize.addModels([UserData]);
sequelize.databaseVersion().then((databaseVersion: string) => {
  console.log(databaseVersion);
} );
export default sequelize;

