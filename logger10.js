// Add metadata to your logs
import winston from 'winston';

const loggerx = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  defaultMeta: {
    service: 'admin-service',
  },
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export const childLoggerx = loggerx.child({
  localScopeMetaData: 'example metadata for a local scope',
});


export default loggerx;
