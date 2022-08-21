import type { ZodObject, ZodString, ZodTypeAny } from 'zod';
import type { AuthStore } from './AuthStoreType';

export type LoginSchema = {
  usernameOrEmail: string;
  password: string;
};

export type ValidationType = ZodObject<
  { [key in keyof LoginSchema]: ZodString },
  'strip',
  ZodTypeAny,
  LoginSchema,
  LoginSchema
>;

export type ValidatorSchema = {
  [key in keyof LoginSchema]: ZodString;
};

export type LoginStoreSchema = AuthStore<LoginSchema, ValidationType>;
