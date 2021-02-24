import { User } from '../entities/user';
import { MyContext } from '../types';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { UsernamePasswordInput } from '../models/usernamePasswordInput';
import {
  COOKIE_NAME,
  FORGET_PASSWORD_PREFIX,
  logger,
  mailValidatorFormat
} from '../constants';
import { UserResponse } from '../models/userResponse';
import { FieldError } from 'src/models/fieldError';
import { sendEmail } from '../utils/mailer';
import { v4 as uuid } from 'uuid';

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() { redis, req }: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: 'newPassword',
            message: 'invalid password, provide a better one'
          }
        ]
      };
    }

    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(key);
    if (!userId) {
      return {
        errors: [
          {
            field: 'token',
            message: 'token expired'
          }
        ]
      };
    }

    const user = await User.findOne(+userId);

    if (!user) {
      return {
        errors: [
          {
            field: 'token',
            message: 'user no longer exists'
          }
        ]
      };
    }

    await User.update(
      { id: +userId },
      { password: await argon2.hash(newPassword) }
    );
    req.session.userId = user.id;
    await redis.del(FORGET_PASSWORD_PREFIX + token);
    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return true;
    }

    const token = uuid();
    await redis.set(FORGET_PASSWORD_PREFIX + token, user.id, 'ex', 1000 * 30);

    await sendEmail(
      email,
      `<a href='http://localhost:3000/change-password/${token}'>reset password</a>`
    );
    return true;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | undefined> {
    if (!req.session.userId) {
      return undefined;
    }
    return User.findOne(`${req.session.userId}`);
  }

  @Mutation(() => UserResponse, { nullable: true })
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse | undefined> {
    const errorsList = await getErrorsFromOptions(options);
    if (errorsList.length > 0) {
      return {
        errors: errorsList
      };
    }
    try {
      const hashedPassword = await argon2.hash(options.password);
      const user = await User.create({
        username: options.username,
        password: hashedPassword,
        email: options.email
      }).save();
      req.session.userId = user.id;
      return {
        user
      };
    } catch (e) {
      logger.error(e);
      return {
        errors: [
          {
            field: 'username',
            message: 'something went wrong with the user registration'
          }
        ]
      };
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    try {
      const user = await User.findOne(
        usernameOrEmail.match(mailValidatorFormat)
          ? { where: { email: usernameOrEmail } }
          : { where: { username: usernameOrEmail } }
      );

      const loginChecker = await checkLogin(user, password);

      if (loginChecker.length > 0) {
        return {
          errors: loginChecker
        };
      }

      req.session.userId = user?.id;

      //I already check if it's null in checkLogin
      return {
        user
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

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        if (err) {
          logger.error(err);
          resolve(false);
        } else {
          res.clearCookie(COOKIE_NAME, { domain: 'localhost', path: '/' });
          resolve(true);
        }
      })
    );
  }
}

async function getErrorsFromOptions(
  options: UsernamePasswordInput
): Promise<FieldError[]> {
  const errors = [] as FieldError[];
  if (!options.email.match(mailValidatorFormat)) {
    errors.push({
      field: 'email',
      message: 'Please provide a valid email'
    });
  }
  if (options.username.length <= 2) {
    errors.push({
      field: 'username',
      message: 'username was too short, please provide a valid username'
    });
  }

  if (options.password.length <= 2) {
    errors.push({
      field: 'password',
      message: 'password was too short, please provide a valid password'
    });
  }

  const userFound = await User.findOne({
    where: { username: options.username }
  });
  if (userFound) {
    errors.push({
      field: 'username',
      message: 'username is already in use, please try another one'
    });
  }

  return errors;
}

async function checkLogin(
  userFound: User | undefined,
  password: string
): Promise<FieldError[]> {
  const errors = [] as FieldError[];
  if (!userFound || userFound === undefined) {
    errors.push({
      field: 'usernameOrEmail',
      message: 'that username or mail does not exist'
    });
    return errors;
  }
  const valid = await argon2.verify(userFound.password, password);
  if (!valid) {
    errors.push({
      field: 'password',
      message: 'password is invalid for that username'
    });
  }
  return errors;
}
