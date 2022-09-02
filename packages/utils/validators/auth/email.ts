import { z } from 'zod';

const validator = z.string().email().max(60);

export const isEmail = (email: any): boolean => {
  const validationResult = validator.safeParse(email);
  return validationResult.success;
};
