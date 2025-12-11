// Logging to multiple Files based on log levels
import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger5 = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }), json()), // 2022-01-25 03:23:10.350 PM
  transports: [
    new winston.transports.File({
      filename: "combined.log",
    }),
    new winston.transports.File({
      filename: "app-error.log",
      level: "error",
    }),
  ],
});
 
export default logger5;
//one that logs all messages to a combined.log file, and another that logs messages with a minimum severity of error to a separate file.
