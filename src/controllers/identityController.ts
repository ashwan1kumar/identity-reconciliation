import { Request, Response } from 'express';
import { UserData } from '../models/userData';

export const checkServer = async (req: Request, res: Response) => {
    res.send("Hola");
};

export const identifyUser = async (req: Request, res: Response) => {

}