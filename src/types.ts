import { Request, Response } from 'express';
import 'express-session';
import { Redis } from 'ioredis';

declare module 'express-session' {
  interface SessionData {
    userId?: number;
  }
}

export type MyContext = {
  req: Request;
  res: Response;
  redis: Redis;
};
