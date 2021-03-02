import DataLoader from 'dataloader';
import { UpDoot } from '../entities/updoot';

export const createUpdootLoader = () =>
  new DataLoader<{ postId: number; userId: number }, UpDoot | null>(
    async (keys) => {
      const updoots = await UpDoot.findByIds(keys as any);
      const updootDict: Record<string, UpDoot> = {};
      updoots.forEach((updoot) => {
        updootDict[`${updoot.userId}|${updoot.postId}`] = updoot;
      });
      return keys.map((key) => updootDict[`${key.userId}|${key.postId}`]);
    }
  );
