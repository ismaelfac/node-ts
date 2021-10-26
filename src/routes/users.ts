import {Router} from "express";
const router: Router = Router();
import { tokenSing } from '../lib/authjwt'

import { userController } from "../controllers/UserController";

router.get('/', [], userController.index);
router.get('/:id',[], userController.getItem);
router.post('/', [], userController.createdItem); //TODO: localhost/users/ ---> lista 
router.put('/:id', [], userController.updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id',[], userController.deletedItem); //TODO: localhost/users/ ---> lista 
router.post('/:id',[], userController.activeUser); //TODO: localhost/users/ ---> lista 
module.exports = router;
