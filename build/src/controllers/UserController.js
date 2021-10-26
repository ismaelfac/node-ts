"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_1 = __importDefault(require("../models/users"));
class UserController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const UserList = yield users_1.default.find();
                res.send(UserList);
            }
            catch (e) {
                console.log(res, e);
            }
        });
    }
    getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.userId;
                const UserFind = yield users_1.default.findById(id);
                res.status(201).send(UserFind);
            }
            catch (e) {
                console.log(res, e);
            }
        });
    }
    createdItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, roles, avatar, isActive } = req.body;
                const newUser = new users_1.default({
                    name,
                    email,
                    password,
                    roles,
                    avatar,
                    isActive
                });
                const saveUser = yield newUser.save();
                res.status(201).send({ data: saveUser });
            }
            catch (e) {
                console.log(res, e);
            }
        });
    }
    updatedItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).send(yield users_1.default.findByIdAndUpdate(req.params.id, req.body, {
                    new: true
                }));
            }
            catch (e) {
                console.log(res, e);
            }
        });
    }
    deletedItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const UserFound = yield users_1.default.findById(req.params.id);
                const deleteUSer = yield users_1.default.findByIdAndUpdate(UserFound, { isActive: false }, {
                    new: true
                });
                res.status(200).send(deleteUSer);
            }
            catch (e) {
                console.log(res, e);
            }
        });
    }
    activeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const UserFound = yield users_1.default.findById(req.params.id);
                const activeUser = yield users_1.default.findByIdAndUpdate(UserFound, { isActive: true }, {
                    new: true
                });
                res.status(200).send(activeUser);
            }
            catch (e) {
                console.log(res, e);
            }
        });
    }
}
exports.userController = new UserController();
