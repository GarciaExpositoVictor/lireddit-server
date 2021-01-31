import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";
import { Post } from "./entities/Posts";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'lireddit',
        debug: !__prod__,
        type: 'postgresql' as const,
        entities: [Post]
    } );

    const post = orm.em.create(Post, {title: "first post xd"});
    await orm.em.persistAndFlush(post);

    console.log("------------------------------- sql 2 -------------------------------------------------------");
    await orm.em.nativeInsert(Post, {title: "test"});
}

main().catch((err) => console.log(err));
