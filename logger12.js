// Handling uncaught exceptions and uncaught promise rejections
import winston from 'winston';

// By default process exits with a non-zero status code 
const loggerxii = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exception.log' }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: 'rejections.log' }),
  ],
 // exitOnError: false /* uncomment this to change the default process exit */
});

// OR
loggerxii.exitOnError = false;
export default loggerxii;
