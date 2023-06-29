import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, prettyPrint } = format;
import path from 'path';

//custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  return `TIME: ${date.toDateString()} ${hour}h ${mins}m ${secs}s: [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Success!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs/winston', 'success.log'),
      level: 'info',
    }),
  ],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'Error!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs/winston', 'error.log'),
      level: 'error',
    }),
  ],
});

export { logger, errorLogger };
