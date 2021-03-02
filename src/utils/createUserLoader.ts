import DataLoader from 'dataloader';
import { User } from '../entities/user';

export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userDict: Record<number, User> = {};
    users.forEach((user) => {
      userDict[user.id] = user;
    });
    return userIds.map((user) => userDict[user]);
  });
