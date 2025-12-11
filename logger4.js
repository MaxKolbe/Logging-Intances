// Logging into a File
import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger4 = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp({format: 'YYYY-MM-DD hh:mm:ss.SSS A'}), json()), // 2022-01-25 03:23:10.350 PM
  transports: [
    new winston.transports.File({
      filename: "combined.log",
    }),
  ],
});

export default logger4;
