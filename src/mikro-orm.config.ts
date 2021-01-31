import { __prod__ } from "./constants";
import { Post } from "./entities/Posts";

export default {
    dbName: 'lireddit',
    debug: !__prod__,
    type: 'postgresql' as const,
    entities: [Post]
} as const;