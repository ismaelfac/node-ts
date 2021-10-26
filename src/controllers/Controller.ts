import mongoose from 'mongoose';
import { httpError } from "../lib/handleError";
import { Request, Response } from "express";

interface Model {
    name: String
}
export class Controller {
    private model;
    constructor(model: Model){
        this.model = model;
    }
    public async getIndex(req: Request, res: Response, model: Model) {
        try {
            const Reponse = await this.model
            res.send({ data: Reponse })
        } catch (e) {
            httpError(res, e)
        } 
    }
}