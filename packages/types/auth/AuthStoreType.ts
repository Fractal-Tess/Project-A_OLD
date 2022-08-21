import type { ZodTypeAny, inferFlattenedErrors } from 'zod';

export type AuthStore<T, U extends ZodTypeAny> = {
  errors: inferFlattenedErrors<U>;
  formFields: T;
  showErrors: boolean;
  allIsValid: boolean;
  progress: Promise<any>;
};
