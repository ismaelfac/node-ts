import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
    try {
        res.send({data: 'Usuario Controller'});
    } catch (error) {
        console.log(error);
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