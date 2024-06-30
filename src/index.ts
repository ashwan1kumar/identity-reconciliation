import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from './config/database';
import identityRoutes from './routes/identify';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/identify', identityRoutes);
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ force: true });
        console.log('All models were synchronized successfully.');

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

startServer();
