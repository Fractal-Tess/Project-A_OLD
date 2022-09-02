import { z } from 'zod';

const validator = z.string().email().max(60);

export const isUsername = (username: any): boolean => {
  const validationResult = validator.safeParse(username);
  return validationResult.success;
};
