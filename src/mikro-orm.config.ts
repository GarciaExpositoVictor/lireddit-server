import { __prod__ } from './constants';
import { Post } from './entities/post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './entities/user';

export default {
  dbName: 'lireddit',
  debug: !__prod__,
  type: 'postgresql' as const,
  entities: [Post, User],
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  user: 'postgres',
  password: 'postgres'
} as Parameters<typeof MikroORM.init>[0];
