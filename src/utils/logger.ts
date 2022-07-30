import winston from 'winston';

const developmentLogger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

const productionLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(
      info => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`
    )
  ),
  transports: [new winston.transports.Console()],
});

const logger =
  process.env.NODE_ENV === 'development' ? developmentLogger : productionLogger;

export default logger;
