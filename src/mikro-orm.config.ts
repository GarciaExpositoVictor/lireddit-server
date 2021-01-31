import { __prod__ } from "./constants";
import { Post } from "./entities/Posts";
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

console.log("dirname", __dirname)
export default {
    dbName: 'lireddit',
    debug: !__prod__,
    type: 'postgresql' as const,
    entities: [Post],
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/
    }
} as Parameters<typeof MikroORM.init>[0];