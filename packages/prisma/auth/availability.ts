import { prisma } from '../client/client';

export const isEmailAvailable = async (email: string): Promise<boolean> => {
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  });
  return !user;
};

export const isUsernameAvailable = async (
  username: string
): Promise<boolean> => {
  const user = await prisma.user.findFirst({
    where: {
      username
    }
  });

  return !user;
};
