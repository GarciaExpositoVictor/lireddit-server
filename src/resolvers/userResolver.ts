import { User } from '../entities/user';
import { MyContext } from '../types';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { UsernamePasswordInput } from '../models/usernamePasswordInput';
import { logger } from '../constants';
import { UserResponse } from '../models/userResponse';
import { FieldError } from 'src/models/fieldError';
import { EntityManager } from '@mikro-orm/core';

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse, { nullable: true })
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse | null> {
    try {
      const errorsList = await getErrorsFromOptions(options, em);
      if (errorsList.length > 0) {
        return {
          errors: errorsList
        };
      }
      const hashedPassword = await argon2.hash(options.password);
      const createdUser = em.create(User, {
        password: hashedPassword,
        username: options.username
      });
      await em.persistAndFlush(createdUser);
      return {
        user: createdUser
      };
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    try {
      const userFound = await em.findOne(User, { username: options.username });
      if (!userFound) {
        return {
          errors: [
            {
              field: 'username error',
              message: 'that username does not exist'
            }
          ]
        };
      }
      const valid = await argon2.verify(userFound.password, options.password);
      if (!valid) {
        return {
          errors: [
            {
              field: 'invalid password',
              message: 'password is invalid for that username'
            }
          ]
        };
      }
      return {
        user: userFound
      };
    } catch (error) {
      logger.error(error);
      return {
        errors: [
          {
            field: 'error',
            message: 'something went wrong'
          }
        ]
      };
    }
  }
}

async function getErrorsFromOptions(
  options: UsernamePasswordInput,
  em: EntityManager
): Promise<FieldError[]> {
  const errors = [] as FieldError[];
  if (options.username.length <= 2) {
    errors.push({
      field: 'invalid username',
      message: 'username was too short, please provide a valid username'
    });
  }

  if (options.password.length <= 2) {
    errors.push({
      field: 'invalid pasword',
      message: 'password was too short, please provide a valid username'
    });
  }

  const userFound = await em.findOne(User, { username: options.username });
  if (userFound) {
    errors.push({
      field: 'invalid username',
      message: 'username is already in use, please try another one'
    });
  }

  return errors;
}
