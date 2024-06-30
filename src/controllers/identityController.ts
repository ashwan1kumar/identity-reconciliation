import { Request, Response } from 'express';
import { UserData } from '../models/userData.model';
import { Op } from 'sequelize';
export const checkServer = async (req: Request, res: Response) => {
    res.send("Hola");
};

export const identifyUser = async (req: Request, res: Response) => {
    // First case both email and number are new
    console.log(req);
    const { email, phoneNumber } = req.body;
    const doesUserExist = await UserData.findAll({
        where: {
            [Op.or]: [
                { phoneNumber: phoneNumber },
                { email: email }
            ]
        }
    });
    if(doesUserExist){
        console.log('Find User');
    }
    res.send('hi');
}