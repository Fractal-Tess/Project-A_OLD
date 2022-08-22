import type { RegisterStoreSchema, ValidatorSchema } from '@package/types/auth/Register';
import { z } from 'zod';

// TODO: Move these into an .env file
const USERNAME_OR_EMAIL_MIN_LENGTH = 3;
const USERNAME_OR_EMAIL_MAX_LENGTH = 30;
const PASSWORD_MAX_LENGTH = 30;
const PASSWORD_MIN_LENGTH = 6;

const validatorConfig: ValidatorSchema = {
  email: z.string().email(),
  username: z.string().min(USERNAME_OR_EMAIL_MIN_LENGTH).max(USERNAME_OR_EMAIL_MAX_LENGTH),
  password: z.string().min(PASSWORD_MIN_LENGTH).max(PASSWORD_MAX_LENGTH),
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
