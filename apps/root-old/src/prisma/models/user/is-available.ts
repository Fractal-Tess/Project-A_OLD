import { prisma } from '$prisma/client';

export const isUsernameAvailable = async (
  username: string
): Promise<boolean> => {
  const result = await prisma.user.findFirst({
    where: {
      username
    }
  });
  console.log(result);
  console.log(!result);

  return !result;
};

export const isEmailAvailable = async (email: string): Promise<boolean> => {
  const result = await prisma.user.findFirst({
    where: {
      email
    }
  });

  return !result;
};
