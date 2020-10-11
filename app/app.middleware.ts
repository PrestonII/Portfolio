import { getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

export const appMiddleware = [...getDefaultMiddleware(), ];

const excludeLoggerEnvs = ['test', 'production'];
const shouldIncludeLogger = !excludeLoggerEnvs.includes(
  process.env.NODE_ENV || ''
);

if (shouldIncludeLogger) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  appMiddleware.push(logger);
}