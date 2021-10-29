import {Router} from "express";
const router: Router = Router();
import { authController } from "../controllers/AuthController";

router.post('/signin', [], authController.signin);
router.post('/signup',[], authController.signup);
module.exports = router;