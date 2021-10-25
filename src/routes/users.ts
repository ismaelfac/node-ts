import {Router} from "express";
const router: Router = Router();

import { userController } from "../controllers/UserController";

router.get('/', userController.index);

export default router;
