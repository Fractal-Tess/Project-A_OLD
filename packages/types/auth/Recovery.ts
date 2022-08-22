import { ZodString, ZodObject, ZodTypeAny } from 'zod';
import type { AuthStore } from './AuthStoreType';

type RecoverySchema = {
  email: string;
};

type ValidationType = ZodObject<
  { [key in keyof RecoverySchema]: ZodString },
  'strip',
  ZodTypeAny,
  RecoverySchema,
  RecoverySchema
>;

export type ValidatorSchema = {
  [key in keyof RecoverySchema]: ZodString;
};

export type RecoveryStoreSchema = AuthStore<RecoverySchema, ValidationType>;
