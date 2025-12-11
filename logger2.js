// Color coded for CLI
import winston from 'winston';
import { configDotenv } from 'dotenv';
configDotenv()

const logger2 = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.cli(),
  transports: [new winston.transports.Console()],
});

export default logger2