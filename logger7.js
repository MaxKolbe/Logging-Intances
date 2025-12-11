// LOG ROTATION
import winston from 'winston';
import 'winston-daily-rotate-file';
const { combine, timestamp, json } = winston.format;


const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: 'combined-%DATE%.log',
  // frequency: '1m', // Represents the frequency of rotation. Valid values are '#m' or '#h' (e.g., '5m' or '3h').
  datePattern: 'YYYY-MM-DD', /**An Alternative to frequency that controls how often the file should be rotated (every day) */
  maxFiles: '30d', // log files that are older than 30 days are automatically deleted. 
});

// listener that fires when a log file is rotated
fileRotateTransport.on('rotate', (oldFilename, newFilename) => {
    console.log(`The older file ${oldFilename} has been replaced with ${newFilename}`)
});

const logger7 = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A'}), json()),
  transports: [fileRotateTransport],
});

export default logger7;
