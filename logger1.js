//Vanilla
import winston from 'winston';
import { configDotenv } from 'dotenv';
configDotenv()

// const { combine, timestamp, json } = winston.format;

const logger1 = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.json(), // combine(timestamp(), json()), // --> to include timestamps
  transports: [new winston.transports.Console()],
});

export default logger1;

// You can change the format of the datetime by passing an object to timestamp()
/*
timestamp({
  format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
})
 */