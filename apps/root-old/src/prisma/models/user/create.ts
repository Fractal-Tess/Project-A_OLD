import { prisma } from '$prisma/client';
import { RegisterData, RegisterResult } from '$types';
import bcrypt from 'bcrypt';

export const createUser = async (
  reg: RegisterData
): Promise<RegisterResult> => {
  //TODO: Try to make this into a single db query
  const users = await prisma.user.findMany({
    where: {
      OR: [{ username: reg.username }, { email: reg.email }]
    }
  });
  if (users.length > 0) {
    // A user with this email/username already exists, reject creation
    const email = users.map(u => u.email === reg.email).includes(true)
      ? { isErr: true, message: 'A user with this email already exists' }
      : { isErr: false, message: '' };
    const username = users.map(u => u.username === reg.username).includes(true)
      ? { isErr: true, message: 'A user with that username already exists' }
      : { isErr: false, message: '' };

    return {
      user: null,
      err: {
        email,
        username
      }
    };
  }

  // Create user
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(reg.password, salt);

  const user = await prisma.user.create({
    data: {
      ...reg,
      password: hashPass
    }
  });

  return { user, err: null };
};
