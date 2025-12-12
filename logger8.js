// Using multiple transports 
import winston from "winston"
import 'winston-daily-rotate-file';

  const transport1 = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH', // rotates hourly
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

  const transport2 = new winston.transports.DailyRotateFile({
    level: 'error',
    filename: 'application-error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH', // rotates hourly
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

  transport1.on('error', error => {
    // log or handle errors here
  });

  transport2.on('error', error => {
    // log or handle errors here
  });

  transport1.on('rotate', function(oldFilename, newFilename) {
    // do something fun
  });

  transport2.on('rotate', function(oldFilename, newFilename) {
    // do something fun
  });

  const logger = winston.createLogger({
    level: 'info',
    transports: [
      transport1, // will be used on info level
      transport2  // will be used on error level
    ]
  });

  logger.info('Hello World!');
  logger.error('Hello Error!');
