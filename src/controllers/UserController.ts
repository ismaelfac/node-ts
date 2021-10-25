import { Request, Response } from "express";
import { Controller } from "./Controller";
import UserSchema, {IUser} from "../models/users";

class UserController {

    public async index(req: Request, res: Response): Promise<void> {
        try {
            const UserList: IUser[] = await UserSchema.find();
            res.send(UserList);
        } catch (e) {
            console.log(res, e)
        } 
    }
}
export const userController = new UserController();