import { Post } from '../entities/post';
import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware
} from 'type-graphql';
import { PostInput } from '../models/postInput';
import { MyContext } from '../types';
import { isAuth } from '../middleware/isAuth';
import { getConnection } from 'typeorm';
import { PaginatedPosts } from '../models/paginatedPosts';
import { UpDoot } from '../entities/updoot';
import { User } from '../entities/user';

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 50);
  }

  @FieldResolver(() => User)
  creator(@Root() root: Post, @Ctx() { userLoader }: MyContext) {
    return userLoader.load(root.creatorId);
  }

  @FieldResolver(() => Int, { nullable: true })
  async voteStatus(
    @Root() root: Post,
    @Ctx() { updootLoader, req }: MyContext
  ) {
    if (!req.session.userId) {
      return null;
    }
    const updoot = await updootLoader.load({
      postId: root.id,
      userId: req.session.userId
    });

    return updoot ?? null;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const fetchingLimit = realLimit + 1;

    const replacements: any[] = [fetchingLimit];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor, 10)));
    }

    const posts = await getConnection().query(
      `
    select p.*
    from post p
    ${cursor ? 'where p."createdAt" < $2' : ''}
    order by p."createdAt" DESC
    limit $1
    `,
      replacements
    );

    const hasMore = posts.length === fetchingLimit;
    return { posts: posts.slice(0, realLimit), hasMore };
  }

  @Query(() => Post, { nullable: true })
  post(@Arg('id', () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg('input') input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({
      ...input,
      creatorId: req.session.userId
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg('id', () => Int) id: number,
    @Arg('title') title: string,
    @Arg('text') text: string,
    @Ctx() { req }: MyContext
  ): Promise<Post | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Post)
      .set({ title, text })
      .where('id = :id and "creatorId" = :creatorId', {
        id,
        creatorId: req.session.userId
      })
      .returning('*')
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg('id', () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    await Post.delete({ id, creatorId: req.session.userId });
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg('postId', () => Int) postId: number,
    @Ctx() { req }: MyContext,
    @Arg('vote', () => Int) vote: number
  ) {
    const isPositive = vote !== -1;
    const value = isPositive ? 1 : -1;
    const { userId } = req.session;

    const updoot = await UpDoot.findOne({
      where: { userId, postId }
    });

    //check if user already voted positively or negatively
    if (updoot && updoot.value !== value) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
          update "updoot"
          set value = $1
          where "postId" = $2
          and "userId" = $3
          `,
          [value, postId, userId]
        );
        await tm.query(
          `
          update post
          set points = points + $1
          where id = $2;
          `,
          [2 * value, postId]
        );
      });
    } else if (!updoot) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
          insert into "updoot" ("userId", "postId", value)
          values ($1, $2, $3);`,
          [userId, postId, value]
        );
        await tm.query(
          `
          update post
          set points = points + $1
          where id = $2;
          `,
          [value, postId]
        );
      });
    }
    return true;
  }
}
