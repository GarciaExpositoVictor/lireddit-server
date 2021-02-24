import { configure, getLogger } from 'log4js';

export const __prod__ = process.env.NODE_ENV === 'production';

export const logger = getLogger();

configure({
  appenders: { cheese: { type: 'file', filename: 'application.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

export const COOKIE_NAME = 'qid';

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const mailValidatorFormat = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'i'
);

export const FORGET_PASSWORD_PREFIX = 'forget-password:';
