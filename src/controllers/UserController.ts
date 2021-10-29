import { httpError } from "../lib/handleError";
import { Request, Response } from "express";
import User, { IUser} from "../models/users";

class UserController {
    
    public async index(req: Request, res: Response): Promise<void> {
        try {
            const UserList: IUser[] = await User.find();
            res.send(UserList);
        } catch (e) {
            httpError(res, e)
        } 
    }

    public async getItem(req: Request, res: Response): Promise<void> {
        try {
            const id = req.body.userId;
            const UserFind = await User.findById(id);
            res.status(201).send(UserFind);
        } catch (e) {
            httpError(res, e)
        } 
    }
    
    public async createdItem(req: Request, res: Response) {
        try {
            const { name, email, password, roles, avatar, isActive } = req.body;
            const newUser = new User({
                name, 
                email, 
                password: User.schema.methods.encryptPassword(password),
                roles,
                avatar,
                isActive
            })
            const saveUser = await newUser.save();
            res.status(201).send({ data: saveUser })        
        } catch (e) {
            httpError(res, e)
        }
    }
    
    public async updatedItem(req: Request, res: Response){
        try {
            res.status(200).send(await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            }));
        } catch (e) {
            httpError(res, e)
        }
    }
    
    public async deletedItem(req: Request, res: Response) {
        try {
            const UserFound = await User.findById(req.params.id)
            const deleteUSer = await User.findByIdAndUpdate(UserFound, {isActive: false}, {
                new: true
            })
            res.status(200).send(deleteUSer)
        } catch (e) {
            httpError(res, e)
        }
    }
    
    public async activeUser(req: Request, res: Response){
        try {
            const UserFound = await User.findById(req.params.id)
            const activeUser = await User.findByIdAndUpdate(UserFound, {isActive: true}, {
                new: true
            })
            res.status(200).send(activeUser)
        } catch (e) {
            httpError(res, e)
        }
    }
}
export const userController = new UserController();