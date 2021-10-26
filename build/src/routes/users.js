"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const UserController_1 = require("../controllers/UserController");
router.get('/', [], UserController_1.userController.index);
router.get('/:id', [], UserController_1.userController.getItem);
router.post('/', [], UserController_1.userController.createdItem); //TODO: localhost/users/ ---> lista 
router.put('/:id', [], UserController_1.userController.updatedItem); //TODO: localhost/users/ ---> lista 
router.delete('/:id', [], UserController_1.userController.deletedItem); //TODO: localhost/users/ ---> lista 
router.post('/:id', [], UserController_1.userController.activeUser); //TODO: localhost/users/ ---> lista 
module.exports = router;
