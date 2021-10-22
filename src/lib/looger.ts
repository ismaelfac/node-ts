import { createLogger, format, transports } from "winston";

export default createLogger({
    level: process.env.SCREENIE_LOG_LEVEL || 'info',
    format: format.combine(
        format.simple(),
        format.colorize(),
        format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        format.printf(info=> `[${info.timestamp}]-${info.level}-${info.message }`)
    ),
    transports: [
        new transports.File({
            maxFiles: 10,
            maxsize: 5120000,
            filename: `${__dirname}/../../logs/logs-api.log`
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
})