import { z } from 'zod';
import type { AuthStore } from './AuthStoreType';

export type RecoverySchema = {
  email: string;
};

type ValidationType = z.ZodObject<
  { [key in keyof RecoverySchema]: z.ZodString },
  'strip',
  z.ZodTypeAny,
  RecoverySchema,
  RecoverySchema
>;

export type RecoveryStoreSchema = AuthStore<RecoverySchema, ValidationType>;
