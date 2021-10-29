import { httpError } from "../lib/handleError";
import { Request, Response } from "express";
import * as authjwt from "../lib/authjwt";
import looger from "../lib/looger";
import User, { IUser } from "../models/users";

class AuthController {
    public async signin(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            looger.info(email, password)
            const user = await User.findOne({email});
            console.log(user)
            if(!user){
                res.status(404).send({error: "User not found!"})
            }else{
                const comparePassword = await User.schema.methods.comparePassword(password, user.password);
                if(!comparePassword){
                    res.status(401).json({token: null, message: 'Invalid password'});
                }else{
                    const token = await authjwt.tokenSing(user);
                    res.status(201).send({ accessToken: token, expiresIn: 86400, email: user.email, name: user.name, avatar: user.avatar, role: user.roles });
                }     
            }   
        } catch (e) {
            httpError(res, e)
        }
    }
    
    public async signup(req: Request, res: Response){
        try {
            
        } catch (e) {
            httpError(res, e)
        }
    }
}

export const authController = new AuthController(); 