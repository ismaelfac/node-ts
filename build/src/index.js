"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const looger_1 = __importDefault(require("./lib/looger"));
const routes_1 = __importDefault(require("./routes"));
// Initializations
const app = (0, express_1.default)();
// Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Routes
app.use('/api/1.0', routes_1.default);
// Static files
// Starting the server
app.listen(app.get('port'), () => {
    looger_1.default.info(`API listen with port ${app.get('port')}`);
});
