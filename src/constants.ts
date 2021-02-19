import { configure, getLogger } from 'log4js';

export const __prod__ = process.env.NODE_ENV === 'production';

export const logger = getLogger();

configure({
  appenders: { cheese: { type: 'file', filename: 'application.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
