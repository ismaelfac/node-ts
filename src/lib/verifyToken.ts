import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('auth_token');
        if(!token) return res.status(401).json('Access Denied');
        const payload = jwt.verify(token, process.env.APP_KEY || 'ALIADOS')
        next();
    }catch (e) {
        return null
    }
}