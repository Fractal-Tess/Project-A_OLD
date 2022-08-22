import { ZodString, ZodObject, ZodTypeAny } from 'zod';
import type { AuthStore } from './AuthStoreType';

export type RegisterSchema = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

// This type does not 100% match the validation object of the register validator,
// because it also uses a refine to check if passwords match
type ValidationType = ZodObject<
  { [key in keyof RegisterSchema]: ZodString },
  'strip',
  ZodTypeAny,
  RegisterSchema,
  RegisterSchema
>;

export type ValidatorSchema = {
  [key in keyof RegisterSchema]: ZodString;
};

export type RegisterStoreSchema = AuthStore<RegisterSchema, ValidationType>;
