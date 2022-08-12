import { User } from '@prisma/client';

export type RegisterData = {
  email: string;
  username: string;
  password: string;
};

export type RegisterResult =
  | {
      user: User;
      err: null;
    }
  | {
      user: null;
      err: {
        email?: {
          message: string;
          isErr: boolean;
        };
        username?: {
          message: string;
          isErr: boolean;
        };
      };
    };
