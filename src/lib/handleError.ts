import looger from "../lib/looger";
import { Response } from "express";
export const httpError = (res: Response, err: any) => {
    res.status(400).send({error: err});
    looger.info(err);
}
export default { httpError }