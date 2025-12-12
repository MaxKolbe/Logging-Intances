// // With Typescript

// import * as winston from 'winston';
// import DailyRotateFile from 'winston-daily-rotate-file';

// const transport: DailyRotateFile = new DailyRotateFile({
//     filename: 'application-%DATE%.log',
//     datePattern: 'YYYY-MM-DD-HH', // rotates hourly
//     zippedArchive: true,
//     maxSize: '20m',
//     maxFiles: '14d'
// });

// transport.on('error', error => {
//     // log or handle errors here
// });


// transport.on('rotate', (oldFilename, newFilename) => {
//     // do something fun
// });

// const logger = winston.createLogger({
//     transports: [
//         transport
//     ]
// });

// logger.info('Hello World!');