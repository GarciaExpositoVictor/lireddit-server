import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { COOKIE_NAME, logger, __prod__ } from './constants';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/postResolver';
import { UserResolver } from './resolvers/userResolver';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from './types';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { Post } from './entities/post';
import { User } from './entities/user';

const main = async () => {
  await createConnection({
    type: 'postgres',
    database: 'lireddit2',
    username: 'postgres',
    password: 'postgres',
    logging: true,
    synchronize: true,
    entities: [Post, User]
  });

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //ten years
        httpOnly: true,
        secure: __prod__,
        sameSite: 'lax'
      },
      saveUninitialized: false,
      secret: 'cacecicocu',
      resave: false
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }): MyContext => ({
      req,
      res,
      redis
    })
  });

  apolloServer.applyMiddleware({
    app,
    cors: false
  });

  app.listen(4000, () => {
    if (__prod__) {
      logger.debug('app started');
    }
  });
};
main().catch((err) => {
  logger.error(`app failed to start: ${err}`);
});
