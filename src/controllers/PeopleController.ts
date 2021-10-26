import { httpError } from "../lib/handleError";
import { Request, Response } from "express";
import { Controller } from "./Controller";
import PeopleSchema, { IPeople } from '../models/people';

class PeopleCOntroller { 
    public async index(req: Request, res: Response) {
        try {
            const PeopleList: IPeople[] = await PeopleSchema.find({})
            res.send({ data: PeopleList })
        } catch (e) {
            httpError(res, e)
        } 
    }
    
    public async getItem(req: Request, res: Response) {
        try {
            const ListAll = await PeopleSchema.find({})
            res.send({ data: ListAll })
        } catch (e) {
            httpError(res, e)
        } 
    }
    
    public async createdItem(req: Request, res: Response) {
        try {
            const { names, dni, email, phone } = req.body;
            const resDetail = await PeopleSchema.create({
                names, dni, email, phone
            })
            res.status(201).send({ data: resDetail })
        } catch (e) {
            httpError(res, e)
        }
    }
    
    public async updatedItem(req: Request, res: Response){
        
    }
    
    public async deletedItem(req: Request, res: Response){
        
    }
}

export const peopleController = new PeopleCOntroller();