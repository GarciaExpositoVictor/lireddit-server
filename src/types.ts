import { Request, Response } from 'express';
import 'express-session';
import { Redis } from 'ioredis';
import { createUpdootLoader } from './utils/createUpdootLoader';
import { createUserLoader } from './utils/createUserLoader';

declare module 'express-session' {
  interface SessionData {
    userId?: number;
  }
}

export type MyContext = {
  req: Request;
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
};
