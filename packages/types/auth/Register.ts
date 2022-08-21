import { z } from 'zod';
import type { AuthStore } from './AuthStoreType';

export type RegisterSchema = {
  usernameOrEmail: string;
  password: string;
};

type ValidationType = z.ZodObject<
  { [key in keyof RegisterSchema]: z.ZodString },
  'strip',
  z.ZodTypeAny,
  RegisterSchema,
  RegisterSchema
>;

export type RegisterStoreSchema = AuthStore<RegisterSchema, ValidationType>;
