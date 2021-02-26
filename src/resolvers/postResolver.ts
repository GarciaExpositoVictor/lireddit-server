import { Post } from '../entities/post';
import { Arg,Ctx,Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { PostInput } from '../models/postInput';
import { MyContext } from '../types';
import { isAuth } from '../middleware/isAuth';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return Post.find();
  }

  @Query(() => Post, { nullable: true })
  post(@Arg('id') id: number): Promise<Post | undefined> {
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
  async updatePost(
    @Arg('id') id: number,
    @Arg('title', () => String) title: string
  ): Promise<Post | null> {
    const post = await Post.findOne(id);

    if (post && title && typeof title !== 'undefined') {
      await Post.update({ id }, { title });
      return post;
    } else {
      return null;
    }
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('id') id: number): Promise<boolean> {
    await Post.delete(id);
    return true;
  }
}
