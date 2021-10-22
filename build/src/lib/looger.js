"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
exports.default = (0, winston_1.createLogger)({
    level: process.env.SCREENIE_LOG_LEVEL || 'info',
    format: winston_1.format.combine(winston_1.format.simple(), winston_1.format.colorize(), winston_1.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }), winston_1.format.printf(info => `[${info.timestamp}]-${info.level}-${info.message}`)),
    transports: [
        new winston_1.transports.File({
            maxFiles: 10,
            maxsize: 5120000,
            filename: `${__dirname}/../../logs/logs-api.log`
        }),
        new winston_1.transports.Console({
            level: 'debug'
        })
    ]
});
