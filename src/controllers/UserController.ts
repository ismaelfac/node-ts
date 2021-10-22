import { Request, Response } from "express";
import UsersSchema from "../models/users";

const index = async (req: Request, res: Response) => {
    try {
        res.send(await UsersSchema.find());
    } catch (e) {
        console.log(e);
    }
}

const getItem = async (req: Request, res: Response) => {
    try {
        res.send({data: 'Usuario Controller'});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { index, getItem };