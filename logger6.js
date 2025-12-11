/**
 A common need that Winston does not enable by default is the ability to log each level into different files so that only info messages go to an app-info.log file, debug messages into an app-debug.log file, and so on (see this GitHub issue). To get around this, use a custom format on the transport to filter the messages by level.
*/
import winston from "winston";
const { combine, timestamp, json } = winston.format;

const errorFilter = winston.format((info, opts) => {
  return info.level === "error" ? info : false;
});

const infoFilter = winston.format((info, opts) => {
  return info.level === "info" ? info : false;
});

const logger7 = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: "combined.log",
    }),
    new winston.transports.File({
      filename: "app-error.log",
      level: "error",
      format: combine(errorFilter(), timestamp(), json()),
    }),
    new winston.transports.File({
      filename: "app-info.log",
      level: "info",
      format: combine(infoFilter(), timestamp(), json()),
    }),
  ],
});

export default logger7