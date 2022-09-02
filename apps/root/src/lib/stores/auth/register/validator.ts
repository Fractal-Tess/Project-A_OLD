import { z } from 'zod';
import type {
  RegisterStoreSchema,
  ValidatorSchema
} from '@package/types/auth/Register';
import * as env from '$env/static/public';

// TODO: Generate nicer error messages
const validatorConfig: ValidatorSchema = {
  email: z.string().email(),
  username: z
    .string()
    .min(+env.PUBLIC_MIN_USERNAME_LENGTH)
    .max(+env.PUBLIC_MAX_USERNAME_LENGTH),
  password: z
    .string()
    .min(+env.PUBLIC_MIN_PASSWORD_LENGTH)
    .max(+env.PUBLIC_MAX_PASSWORD_LENGTH),
  confirmPassword: z.string()
};

const validator = z
  .object(validatorConfig)
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })
  .refine(data => data.confirmPassword.length, {
    message: 'Field cannot be empty',
    path: ['confirmPassword']
  });

export const validateFields = (
  fields: RegisterStoreSchema['formFields']
): RegisterStoreSchema['errors'] => {
  const validationResult = validator.safeParse(fields);

  if (!validationResult.success) {
    const vr = validationResult.error.flatten();
    return vr;
  }
  return {
    fieldErrors: {},
    formErrors: []
  };
};
